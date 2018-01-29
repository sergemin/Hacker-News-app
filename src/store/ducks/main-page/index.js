import PropTypes from 'prop-types';
import { combineReducers } from 'redux';
import topStoriesIdsDuck from './topStoriesIds';
import postsDuck from './posts';
import postsPerPageDuck from './postsPerPage';

export const NS = 'mainPage';

const defaultState = {
  ...topStoriesIdsDuck.defaultState,
  ...postsDuck.defaultState,
  ...postsPerPageDuck.defaultState,
};

const shape = PropTypes.object;

export const actions = {
  ...topStoriesIdsDuck.actions,
  ...postsDuck.actions,
  ...postsPerPageDuck.actions,
};

const selectorRoot = state => state[NS] || defaultState;

const selectorTopStoriesIds = state => topStoriesIdsDuck.selectors.root(selectorRoot(state));
const selectorPosts = state => postsDuck.selectors.root(selectorRoot(state));
const selectorPostsPerPage = state => postsPerPageDuck.selectors.root(selectorRoot(state));

export const selectors = {
  ...selectorTopStoriesIds.selectors,
  ...selectorPosts.selectors,
  ...selectorPostsPerPage.selectors,
  root: selectorRoot,
  topStoriesIds: selectorTopStoriesIds,
  posts: selectorPosts,
  postsPerPage: selectorPostsPerPage,

};

export const rootReducer =  combineReducers({
  ...topStoriesIdsDuck.reducer,
  ...postsDuck.reducer,
  ...postsPerPageDuck.reducer,
});

export default {
  actions,
  selectors,
  defaultState,
  shape,
  reducer: { [NS]: rootReducer },
};