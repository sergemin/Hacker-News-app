import PropTypes from 'prop-types';

export const NS = 'postInfo';

const defaultState = {};
const shape = PropTypes.object;

const types = {
  FETCH_INFO: `${NS}/FETCH_INFO`,
};

const fetchInfo = info => ({ type: types.FETCH_INFO, payload: info }); //middleware is needed

export const actions = {
  fetchInfo,
};

const selectorRoot = state => state[NS] || defaultState;

export const selectors = {
  root: selectorRoot,
};

const reducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case types.FETCH_INFO :
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