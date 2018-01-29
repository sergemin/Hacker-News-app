import PropTypes from 'prop-types';
import { combineReducers } from 'redux';
import commentsDuck from './comments';
import postInfoDuck from './info';

export const NS = 'singlePost';

const defaultState = {
  ...commentsDuck.defaultState,
  ...postInfoDuck.defaultState,
};

const shape = PropTypes.object;

export const actions = {
  ...commentsDuck.actions,
  ...postInfoDuck.actions,
};

const selectorRoot = state => state[NS] || defaultState;

const selectorComments = state => commentsDuck.selectors.root(selectorRoot(state));
const selectorPostInfo = state => postInfoDuck.selectors.root(selectorRoot(state));

export const selectors = {
  ...selectorComments.selectors,
  ...selectorPostInfo.selectors,
  root: selectorRoot,
  comments: selectorComments,
  postInfo: selectorPostInfo,
};

export const rootReducer =  combineReducers({
  ...commentsDuck.reducer,
  ...postInfoDuck.reducer,
});

export default {
  actions,
  selectors,
  defaultState,
  shape,
  reducer: { [NS]: rootReducer },
};