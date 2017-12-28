import React, { Component } from 'react';
import './App.css';

import PageIndex from './components/page-index';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hnAPI: 'https://hacker-news.firebaseio.com/v0',
            allPostsTopStoriesIDs: [],
            posts: [],
            postsPerPage: 10,
        };
    }
    render() {
        return (
            <div className="App">
                <h1 className="section-title">My React app with fake REST API</h1>
                <div className="container">
                    <PageIndex />
                </div>
            </div>
        );
    }
}
