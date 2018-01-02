import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './pagination.css';

// TODO highlight current page
// TODO prop-types
const Pagination = ({ paginationCount }) => {
    let values = [];
    for(let i=0; i<paginationCount; i++) {
        values.push(i+1);
    }
    return (
        <ul className="pagination">
            {values.map(item => (
                <li className="pagination__item" key = {item}>
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
