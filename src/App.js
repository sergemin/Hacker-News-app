import React, { Component } from 'react';
import './App.css';
import PostCard from './components/PostCard';
import fetchJSON from './helpers/fetch-json';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hnAPI: 'https://hacker-news.firebaseio.com/v0',
            allPostsTopStoriesIDs: [],
            fetchPostsArray: [],
            posts: []
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
            .then(response => {
                let blocksToShow = response.filter((item, i) => {
                    return i<10;
                });
                return blocksToShow;
            })
            .then(response => {
                let requestLinks = response.map((item) => {
                    return `${hnAPI}/item/${item}.json`;
                });
                return requestLinks;
            })
            .then(response => {
                let fetchPostsArray = response.map((item) => {
                    return fetchJSON(`${item}`);
                });
                return fetchPostsArray;
            })
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
                </div>
            </div>
        );
    }
}
