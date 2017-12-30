import React, { Component } from 'react';
import './App.css';

import PageIndex from './components/page-index';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
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






