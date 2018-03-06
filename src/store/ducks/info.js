import PropTypes from 'prop-types';
import { api } from '../../helpers';

export const NS = 'postInfo';

const defaultState = {
  isLoading: false,
  error: null,
  info: {},
};
const shape = PropTypes.object;

const types = {
  GETT: `${NS}/GETT`,
  SUCC: `${NS}/SUCC`,
  FAIL: `${NS}/FAIL`,
  CLEAR: `${NS}/CLEAR`,
};

const root = state => state[NS] || defaultState;
const isLoading = state => root(state).isLoading;
const error = state => root(state).error;
const info = state => root(state).info;

export const selectors = { root, isLoading, error, info };

const gett = () => ({ type: types.GETT });
const succ = payload => ({ type: types.SUCC, payload });
const fail = payload => ({ type: types.FAIL, payload });
const clear = { type: types.CLEAR };

const fetchInfo = idPost => (dispatch, getState) => {
  dispatch(gett());
  return api(`/item/${idPost}.json`)
    .then(userInfo => { dispatch(succ(userInfo)); return info; })
    .catch(errorApi => { dispatch(fail(errorApi)); return selectors.error(getState()); });
};
const clearInfo = () => dispatch => {
  dispatch(clear);
};

export const actions = {
  fetchInfo, clearInfo,
};


const reducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case types.GETT:
      return { ...state, isLoading: true };
    case types.SUCC:
      return { ...state, isLoading: false, info: payload };
    case types.FAIL:
      return { ...state, isLoading: false, info: {}, error: payload };
    case types.CLEAR:
      return { ...state, isLoading: false, info: {} };
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
