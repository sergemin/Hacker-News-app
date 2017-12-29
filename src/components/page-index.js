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
        const offset = this.props.match.params.IndexOffset || 1;
        let postPerPage = this.props.postPerPage;
        fetchJSON(`${this.state.hnAPI}/topstories.json`)
            .then(response => {
                this.setState({
                    allPostsTopStoriesIDs: response
                });
                return response;
            })
            .then(blocksToShow => fetchPosts(this.state.hnAPI, blocksToShow, offset, postPerPage))
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

    componentWillReceiveProps(nextProps) {
        let postPerPage = nextProps.postPerPage;
        let allPostIDS = this.state.allPostsTopStoriesIDs;
        let newPage = nextProps.match.params.IndexOffset || 1;
        new Promise(resolve => resolve(allPostIDS))
            .then(blocksToShow => fetchPosts(this.state.hnAPI, blocksToShow, newPage, postPerPage))
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
                <Pagination paginationCount={this.state.allPostsTopStoriesIDs.length/this.props.postPerPage}
                    offset={this.props.match.params.IndexOffset || 0} />
            </div>
        )
    }
}
export default withRouter(PageIndex);