import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './pagination.css';

// TODO highlight current page
// TODO prop-types
const Pagination = ({ paginationCount, offset }) => {
    let values = [];
    for(let i=0; i<paginationCount; i++) {
        values.push(i+1);
    }
    console.log(offset);
    return (
        <ul className="pagination">
            {values.map((item, i) => (
                <li className={`pagination__item${offset-1 === i ? ' pagination__item-active' : ''}`} key = {item}>
                    <Link className='pagination__link' to={`/${item === 1 ? '' : item}`}>{item}</Link>
                </li>
            ))}
        </ul>
    )
}
Pagination.propTypes = {
    paginationCount: PropTypes.number.isRequired
};


export default Pagination;
