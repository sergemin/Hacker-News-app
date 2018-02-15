import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header, Footer, PageIndex, PagePost, Spinner } from '../components/index';
import './styles.scss';

const App = () => (
  <div className="app">
    <Router>
      <div className='page'>
        <Header />
        <main className='main'>
          <Switch>
            <Route path="/:IndexOffset?" exact component={PageIndex}/>
            <Route path="/posts/:postID" component={PagePost}/>
          </Switch>
          <Spinner/>
        </main>
        <Footer />
      </div>
    </Router>
  </div>
);

export default App
