import PropTypes from 'prop-types';

export const NS = 'spinner';

export const defaultState = 'VISIBLE';
const shape = PropTypes.string.isRequired;

const types = {
  SHOW: `${NS}/SHOW`,
  HIDE: `${NS}/HIDE`,
};

const root = state => state[NS] || defaultState;

export const selectors = { root };

const show = { type: types.SHOW };
const hide = { type: types.HIDE };

const showSpinner = () => dispatch => {
  dispatch(show);
};
const hideSpinner = () => dispatch => {
  dispatch(hide);
};

export const actions = { show, hide, showSpinner, hideSpinner };

const reducer = (state = defaultState, { type }) => {
  switch (type) {
    case types.SHOW :
      return 'VISIBLE';
    case types.HIDE :
      return 'HIDDEN';
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
