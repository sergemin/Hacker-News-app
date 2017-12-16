import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import PostPage from './components/PostPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route path="/posts/:postID" component={PostPage}/>
        </Switch>
    </Router>, document.getElementById('root'));
registerServiceWorker();
