import PropTypes from 'prop-types';

export const NS = 'topStoriesIds';

const defaultState = [];
const shape = PropTypes.array;

const types = {
  FETCH_IDS: `${NS}/FETCH_IDS`,
};

const fetchIds = ids => ({ type: types.FETCH_IDS, payload: ids }); //middleware is needed

export const actions = {
  fetchIds,
};

const selectorRoot = state => state[NS] || defaultState;

export const selectors = {
  root: selectorRoot,
};

const reducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case types.FETCH_IDS :
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