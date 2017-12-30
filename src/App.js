import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Header, Footer, PageIndex, PagePost } from './components';

import './App.css';

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
                <Router>
                  <div className="container">
                    <Header />
                    <Switch>
                      <Route exact path="/:IndexOffset?" component={PageIndex}/>
                      <Route path="/posts/:postID" component={PagePost}/>
                    </Switch>
                    <Footer />
                  </div>
                </Router>
            </div>
        );
    }
}
