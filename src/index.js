import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import App from './app';
import * as ducks from './store/ducks';
import './styles.css';

export const reducer =  combineReducers({
  ...ducks.commentsDuck.reducer,
  ...ducks.infoPostDuck.reducer,
  ...ducks.postsDuck.reducer,
  ...ducks.postsPerPageDuck.reducer,
  ...ducks.topStoriesIdsDuck.reducer,
});

const middleware = [
  thunk,
];

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(
      ...middleware
    )
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
