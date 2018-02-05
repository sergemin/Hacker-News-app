import PropTypes from 'prop-types';

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
};

const root = state => state[NS] || defaultState;
const isLoading = state => root(state).isLoading;
const error = state => root(state).error;
const info = state => root(state).info;

export const selectors = { root, isLoading, error, info };

const gett = () => ({ type: types.GETT });
const succ = payload => ({ type: types.SUCC, payload });
const fail = payload => ({ type: types.FAIL, payload });

const fetchInfo = idPost => (dispatch, getState) => {
  if (selectors.items(getState()).length !== 0) {
    return selectors.items(getState());
  }
  dispatch(gett());
};

export const actions = {
  fetchInfo,
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
        info: payload,
      };
    case types.FAIL :
      return {
        ...state,
        isLoading: false,
        info: {},
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
