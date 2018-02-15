import React from 'react';
import spinner from './../../images/spinner.svg';
import './styles.scss';

const Spinner = ({ spinnerStatus }) => (
  <div className={`spinner ${spinnerStatus === 'HIDDEN' ? 'spinner-hidden' : ''}`}>
    <img className='spinner__img' src={spinner} alt="spinner"/>
  </div>
);

export default Spinner;
