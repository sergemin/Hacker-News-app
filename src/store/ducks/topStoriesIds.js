import PropTypes from 'prop-types';
import {api} from "../../helpers";

export const NS = 'topStoriesIds';

const defaultState = {
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

const fetchPostsIds = () => (dispatch, getState) => {
  if (selectors.items(getState()).length !== 0) {
    return Promise.resolve(selectors.items(getState()));
  }
  dispatch(gett());
  return api('/topstories.json')
    .then(topStoriesIds => {
      dispatch(succ(topStoriesIds));
      return topStoriesIds;
    })
    .catch(error => {
      dispatch(fail(error.toString()));
      return selectors.error(getState());
    });
};

export const actions = {
  fetchPostsIds,
};

const reducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case types.GETT :
      return {
        ...state,
        isLoading: true,
      };
    case types.SUCC :
      return {
        ...state,
        isLoading: false,
        items: payload,
      };
    case types.FAIL :
      return {
        ...state,
        isLoading: false,
        items: [],
        error: payload,
      };
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
