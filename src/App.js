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
    changeQuantities(e) {
        let elementsQuantities = e.target.value;
        this.setState({
            postsPerPage: elementsQuantities
        })
    }
    render() {
        return (
            <div className="App">
                <h1 className="section-title">My React app with fake REST API</h1>
                <div className="container">
                    <select onChange={this.changeQuantities.bind(this)}>
                        <option value="10" disabled>choose quantities</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="50">50</option>
                    </select>
                    <PageIndex postPerPage={this.state.postsPerPage}/>
                </div>
            </div>
        );
    }
}
