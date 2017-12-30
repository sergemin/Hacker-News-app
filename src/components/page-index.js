import React from 'react';
import { withRouter } from 'react-router';

import { PostsList, Pagination } from './';

import fetchJSON from './../helpers/fetch-json';
import fetchPosts from './../helpers/fetch-posts';

class PageIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hnAPI: 'https://hacker-news.firebaseio.com/v0',
            posts: [],
            allPostsTopStoriesIDs: '',
            postPerPage: 10
        }
    }
    componentDidMount() {
        const offset = this.props.match.params.IndexOffset || 1,
              postPerPage = this.state.postPerPage;
        fetchJSON(`${this.state.hnAPI}/topstories.json`)
            .then(response => {
                this.setState({
                    allPostsTopStoriesIDs: response
                });
                return response;
            })
            .then(blocksToShow => fetchPosts(this.state.hnAPI, blocksToShow, offset, postPerPage, this))
    }

    componentWillReceiveProps(nextProps) {
        let postPerPage = this.state.postPerPage;
        let allPostIDS = this.state.allPostsTopStoriesIDs;
        let newPage = nextProps.match.params.IndexOffset || 1;
        new Promise(resolve => resolve(allPostIDS))
            .then(blocksToShow => fetchPosts(this.state.hnAPI, blocksToShow, newPage, postPerPage, this))
    }
    render() {
        const allIDs = this.state.allPostsTopStoriesIDs,
              postPerPage = this.state.postPerPage;
        let indexOffset = this.props.match.params.IndexOffset;
        return [
                <PostsList  posts={this.state.posts}
                            key={1}/>,
                <Pagination paginationCount={allIDs.length/postPerPage}
                            offset={indexOffset || 0}
                            key={2}/>
            ]
    }
}

export default withRouter(PageIndex);
