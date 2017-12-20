import React from 'react';
import './Pagination.css';

import { Link } from 'react-router-dom';

export default function(props) {
    return (
        <ul className="pagination">
            {props.pagination.map( item => {
                 <li key={item} className="pagination__item">
                    <Link to={item === 1 ? '1' : item}
                          className='pagination__link'
                          onClick={console.log(item)}>{item}</Link>
                 </li>
            })}
        </ul>
    )
}