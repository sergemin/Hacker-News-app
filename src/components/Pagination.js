import React from 'react';
import './Pagination.css';

import { Link } from 'react-router-dom';

export default function Pagination(props) {
    return (
        <ul className="pagination">
            {props.numbers.map( item => (
                <li className="pagination__item" key = {item}>
                    <Link className="pagination__link"
                          to={`/${item === 1 ? '/' : item}`}>{item}</Link>
                </li>
            ))}

        </ul>
    )
}