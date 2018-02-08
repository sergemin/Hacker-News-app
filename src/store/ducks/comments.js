import PropTypes from 'prop-types';
import { api } from '../../helpers/index';

const fetchComment = x => api(`/item/${x}.json`);

export const NS = 'comments';

export const defaultState = {
  isLoading: false,
  error: null,
  items: [],
};
const shape = PropTypes.array;

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

const fetchComments = commentsIds => (dispatch, getState) => {
  dispatch(gett());

  Promise.all(commentsIds.map(fetchComment))
    .then(comments => {
      dispatch(succ(comments));
      return selectors.items(getState());
    })
    .catch(error => {
      dispatch(fail(error.toString()));
      return selectors.error(getState());
    })
};

export const actions = {
  fetchComments,
};

const reducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case types.GETT :
      return { ...state, isLoading: true };
    case types.SUCC :
      return { ...state, isLoading: false, items: payload };
    case types.FAIL :
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
