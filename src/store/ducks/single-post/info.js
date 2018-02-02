import PropTypes from 'prop-types';

export const NS = 'postInfo';

const defaultState = {};
const shape = PropTypes.object;

const types = {
  SETT: `${NS}/SETT`,
  SUCC: `${NS}/SUCC`,
  FAIL: `${NS}/FAIL`,
};

const setInfo = info => ({ type: types.SETT, payload: info }); //middleware is needed

export const actions = {
  setInfo,
};

const selectorRoot = state => state[NS] || defaultState;

export const selectors = {
  root: selectorRoot,
};

const reducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case types.SETT :
    case types.SUCC :
    case types.FAIL :
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
