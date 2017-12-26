import React, { Component } from 'react';
import './App.css';
import PostCard from './components/PostCard';
import fetchJSON from './helpers/fetch-json';

import Pagination from './components/Pagination';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hnAPI: 'https://hacker-news.firebaseio.com/v0',
            allPostsTopStoriesIDs: [],
            posts: [],
            postsPerPage: 10
        };
    }
    componentDidMount() {
        const hnAPI = this.state.hnAPI;
        fetchJSON(`${hnAPI}/topstories.json`)
            .then(response => {
                this.setState({
                    allPostsTopStoriesIDs: response
                });
                return response;
            })
            .then(blocksToShow => blocksToShow.filter((item, i) => i<10))
            .then(firstTenPostIds => firstTenPostIds.map(id => `${hnAPI}/item/${id}.json`))
            .then(firstTenPostUrls => firstTenPostUrls.map(url => fetchJSON(url)))
            .then(response => Promise.all(response))
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
            <div className="App">
                <h1 className="section-title">My React app with fake REST API</h1>
                <div className="container">
                    <ul className="block-list">
                        {this.state.posts.map( item => (
                            <li key = {item.id}
                                className="post-list__item">
                                <PostCard post = {item} />
                            </li> 
                        ))}
                    </ul>
                    <Pagination paginationCount={this.state.allPostsTopStoriesIDs.length/this.state.postsPerPage} />
                </div>
            </div>
        );
    }
}
