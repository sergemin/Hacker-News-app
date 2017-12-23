import React, { Component } from 'react';
import './App.css';
import PostCard from './components/PostCard';
import fetchJSON from './helpers/fetch-json';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }
    componentDidMount() {
        fetchJSON(`https://jsonplaceholder.typicode.com/posts`)
            .then(response => {
                this.setState({
                    posts: response
                })
            })
            .catch(error => {
                console.log('request failed', error)
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
