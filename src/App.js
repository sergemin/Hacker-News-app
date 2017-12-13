import React, { Component } from 'react';
import './App.css';
import PostCard from './components/PostCard';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }
    componentDidMount() {
        fetch('https://api.github.com/users')
            .then(response => response.json())
        .then(response => {
            this.setState({
                posts: response 
            })
        })
        .catch(error => error);
        }
    render() {
        return (
            <div className="App">
                <section>
                    <h2 className="section-title">My React app with fake REST API</h2>
                        <div className="container">
                            <div className="block-list">
                            {this.state.posts.map((item, index) => (
                            <PostCard key     = {item.id}
                                      name    = {item.name}
                                      image   = {item.avatar_url}
                                      content = {item.body}
                                      user    = {item.login} />
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
