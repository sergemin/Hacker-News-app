import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import * as ducks from "./ducks";

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

export default store;
