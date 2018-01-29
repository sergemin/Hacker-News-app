import PropTypes from 'prop-types';

export const NS = 'pagePosts';

const defaultState = [];
const shape = PropTypes.array;

const types = {
  FETCH_POSTS: `${NS}/FETCH_POSTS`,
};

const fetchPosts = posts => ({ type: types.FETCH_POSTS, payload: posts }); //middleware is needed

export const actions = {
  fetchPosts,
};

const selectorRoot = state => state[NS] || defaultState;

export const selectors = {
  root: selectorRoot,
};

const reducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case types.FETCH_POSTS :
      return payload;
    default:
      return state;
  }
};

export default {
  actions,
  selectors,
  defaultState,
  shape,
  reducer: { [NS]: reducer },
};