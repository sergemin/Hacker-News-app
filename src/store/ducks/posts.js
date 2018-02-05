import PropTypes from 'prop-types';

export const NS = 'pagePosts';

const defaultState = [];
const shape = PropTypes.array;

const types = {
  SETT: `${NS}/SETT`,
  SUCC: `${NS}/SUCC`,
  FAIL: `${NS}/FAIL`,
}

const setPagePosts = posts => ({ type: types.SETT, payload: posts });

export const actions = {
  setPagePosts,
};

const root = state => state[NS] || defaultState;

export const selectors = {
  root,
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
