import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header, Footer, PageIndex, PagePost } from './components';
import './App.css';

const App = () => (
    <div className="App">
        <h1 className="section-title">Hackernews App</h1>
        <Router>
          <div className="container">
            <Header />
            <Switch>
              <Route path="/:IndexOffset?" exact component={PageIndex}/>
              <Route path="/posts/:postID" component={PagePost}/>
            </Switch>
            <Footer />
          </div>
        </Router>
    </div>
);

export default App
