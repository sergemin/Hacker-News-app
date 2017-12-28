import React from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

import PostsList from './PostList';
import Pagination  from './Pagination';

import fetchJSON from './../helpers/fetch-json';
import fetchPosts from './../helpers/fetch-posts';

class PageIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hnAPI: 'https://hacker-news.firebaseio.com/v0',
            posts: [],
            allPostsTopStoriesIDs: '',
            postsPerPage: 10,
            pageNumber: 1
        }
    }
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    }

    componentDidMount() {
        const hnAPI = this.state.hnAPI;
        const offset = this.props.match.params.IndexOffset || 0;
        this.setState({
            pageNumber: offset
        });
        fetchJSON(`${hnAPI}/topstories.json`)
            .then(response => {
                this.setState({
                    allPostsTopStoriesIDs: response
                });
                return response;
            })
            .then(blocksToShow => fetchPosts(hnAPI, blocksToShow, this.state.pageNumber, this.state.postsPerPage))
            .then(response => {
                this.setState({
                    posts: response
                });
                return response;
            })
            .catch(error => {
                console.log('request failed', error);
            });
    }
    render() {
        return (
            <div>
                <PostsList posts={this.state.posts} />
                <Pagination paginationCount={this.state.allPostsTopStoriesIDs.length/this.state.postsPerPage}
                    offset={this.props.match.params.IndexOffset || 0} />
            </div>
        )
    }
}

export default withRouter(PageIndex);