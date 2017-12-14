import React, { Component } from 'react';
import './App.css';
import PostCard from './components/PostCard';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
        this.checkStatus = this.checkStatus.bind(this);
        this.parseJSON   = this.parseJSON.bind(this);
    }
    checkStatus(response) {
        if (response.status >= 200 && response.status < 300) {
            return response;
        } else {
            let error = new Error(response.statusText);
            error.response = response;
            throw error
        }
    }
    parseJSON(response) {
        return response.json();
    }  
    componentDidMount() {
        fetch('https://api.github.com/users')
            .then(this.checkStatus)
            .then(this.parseJSON)
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
                <section>
                    <h1 className="section-title">My React app with fake REST API</h1>
                        <div className="container">
                            <ul className="block-list">
                            {this.state.posts.map((item, index) => (
                                <li key = {item.id}
                                    className="post-list__item">
                                    <PostCard user = {item} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            </div>
        );
    }
}
