import PropTypes from 'prop-types';

export const NS = 'postsPerPage';

const defaultState = 10;
const shape = PropTypes.string;

const types = {
  CHANGE: `${NS}/CHANGE`,
};

const changePostsPerPage = count => ({
  type: types.CHANGE,
  payload: count,
});

export const actions = {
  changePostsPerPage,
};

const root = state => state[NS] || defaultState;

export const selectors = {
  root,
};

const reducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case types.CHANGE:
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
