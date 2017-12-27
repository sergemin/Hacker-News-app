import React from 'react';
import { withRouter } from 'react-router';

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
            allPostsTopStoriesIDs: ''
        }
    }
    componentDidMount() {
        const hnAPI = this.state.hnAPI;
        const offset = this.props.match.IndexOffset || 0;
        console.log(offset);
        fetchJSON(`${hnAPI}/topstories.json`)
            .then(response => {
                this.setState({
                    allPostsTopStoriesIDs: response
                });
                return response;
            })
            .then(blocksToShow => fetchPosts(hnAPI, blocksToShow, 1, this.state.postsPerPage))
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
                <Pagination offset={this.props.match.IndexOffset || 0} />
            </div>
        )
    }
}

export default withRouter(PageIndex);