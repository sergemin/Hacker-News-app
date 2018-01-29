import PropTypes from 'prop-types';

export const NS = 'comments';

const defaultState = [];
const shape = PropTypes.array;

const types = {
  FETCH_COMMENTS: `${NS}/FETCH_COMMENTS`,
};

const fetchComments = comments => ({ type: types.FETCH_COMMENTS, payload: comments }); //middleware is needed

export const actions = {
  fetchComments,
};

const selectorRoot = state => state[NS] || defaultState;

export const selectors = {
  root: selectorRoot,
};

const reducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case types.FETCH_COMMENTS :
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