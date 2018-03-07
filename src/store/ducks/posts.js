import PropTypes from 'prop-types';
import { api } from './../../helpers';

const isWithinLimits = (min, max) => (x, i) => (i >= min && i < max);

const filterPostIdsForCurrentPage = (posts, pageIndex, postsPerPage) => {
  const minLimit = postsPerPage * (pageIndex - 1);
  const maxLimit = postsPerPage * pageIndex;

  return posts.filter(isWithinLimits(minLimit, maxLimit));
};

const fetchPost = id => api(`/item/${id}.json`);
const fetchPosts = posts => Promise.all(posts.map(fetchPost));

export const NS = 'pagePosts';

export const defaultState = {
  isLoading: false,
  error: null,
  items: [],
};
const shape = PropTypes.object.isRequired;

const types = {
  GETT: `${NS}/GETT`,
  SUCC: `${NS}/SUCC`,
  FAIL: `${NS}/FAIL`,
};

const root = state => state[NS] || defaultState;
const isLoading = state => root(state).isLoading;
const error = state => root(state).error;
const items = state => root(state).items;

export const selectors = { root, isLoading, error, items };

const gett = () => ({ type: types.GETT });
const succ = payload => ({ type: types.SUCC, payload });
const fail = payload => ({ type: types.FAIL, payload });

const fetchFilteredPosts = (offset, topStoriesIds, postsPerPage) => (dispatch, getState) => {
  dispatch(gett());

  return Promise.resolve()
    .then(() => filterPostIdsForCurrentPage(topStoriesIds, offset, postsPerPage))
    .then(filteredPostsIds => fetchPosts(filteredPostsIds))
    .then(filteredPosts => {
      dispatch(succ(filteredPosts));
      return filteredPosts;
    })
    .catch(errorApi => {
      dispatch(fail(errorApi));
      return selectors.error(getState());
    });
};

export const actions = {
  fetchFilteredPosts,
};

const reducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case types.GETT:
      return { ...state, isLoading: true };
    case types.SUCC:
      return { ...state, isLoading: false, items: payload };
    case types.FAIL:
      return { ...state, isLoading: false, items: [], error: payload };
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
