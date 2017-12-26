import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Header from './components/Header';
import Footer from './components/Footer';
import App from './App';
import PostPage from './components/PostPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
        <div>
            <Header/>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route exact path="/:paginationPage" component={App}/>
                <Route path="/posts/:postID" component={PostPage}/>
            </Switch>
            <Footer/>
        </div>

    </Router>, document.getElementById('root'));
registerServiceWorker();
