import PropTypes from 'prop-types';

export const NS = 'postsPerPage';

const defaultState = '10';
const shape = PropTypes.string;

const types = {
  CHANGE: `${NS}/CHANGE`,
};

const changePostsPerPage = count => ({ type: types.CHANGE, payload: count }); //middleware is needed

export const actions = {
  changePostsPerPage,
};

const selectorRoot = state => state[NS] || defaultState;

export const selectors = {
  root: selectorRoot,
};

const reducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case types.CHANGE :
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
