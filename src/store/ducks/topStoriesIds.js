import PropTypes from 'prop-types';

export const NS = 'topStoriesIds';

const defaultState = {
  isLoading: false,
  error: null,
  items: [],
};
const shape = PropTypes.array;

const types = {
  SETT: `${NS}/SETT`,
  SUCC: `${NS}/SUCC`,
  FAIL: `${NS}/FAIL`,
};

const setTopStoriesIds = ids => ({ type: types.SETT, payload: ids });

export const actions = {
  setTopStoriesIds,
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
