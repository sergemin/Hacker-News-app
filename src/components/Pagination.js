import React from 'react';
import { Link } from 'react-router-dom';

import './pagination.css';

export default function Pagination(props) {
    let values = [];
    for(let i=0; i<props.paginationCount; i++) {
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
