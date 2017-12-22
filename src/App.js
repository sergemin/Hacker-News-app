import React, { Component } from 'react';
import './App.css';
import PostCard from './components/PostCard';
import fetchJSON from './helpers/fetch-json';
import Pagination from './components/Pagination';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            postsIDs: [],
            totalCountOfPosts: '',
            countOfPostOnThePage: 10,
            paginationArray: []
        };
    }
    componentDidMount() {
        let paginationPath = this.props.match.params.userID || '';
        console.log(paginationPath);
        fetchJSON(`https://hacker-news.firebaseio.com/v0/topstories.json`)
            .then(response => {
                this.setState({
                    postsIDs: response,
                    totalCountOfPosts: response.length
                });
                let paginationArray = [];
                let numberPagination = Math.ceil((this.state.totalCountOfPosts)/(this.state.countOfPostOnThePage));
                for(let i=1; i<=numberPagination; i++) {
                    paginationArray.push(i);
                }
                this.setState({
                    paginationArray: paginationArray
                });
                return response;
            })
            .then(() => {
                for(let i=0; i<10; i++) {
                    fetchJSON(`https://hacker-news.firebaseio.com/v0/item/${this.state.postsIDs[i]}.json`)
                        .then(response => {
                            let updatedPosts = [response, ...this.state.posts];
                            this.setState({
                                posts: updatedPosts
                            })
                        })
                        .catch(error => {
                            console.log('request failed', error)
                        });
                }
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
                    <Pagination numbers={this.state.paginationArray} />
                </div>
            </div>
        );
    }
}
