import React from 'react';
import './comments.css';
import PropTypes from 'prop-types';

function Comments({ comments }) {
    // I dont know yet what I should do if get a string 'no comments'
    isExists = () => {
        return comments
    }
    return (
            <ul className="comments">
                {typeof comments === 'string' ? comments :
                comments.map(item => (
                    <li className="comments__item comment" key={item.id}>
                        <p className="comment__text">{item.text}</p>
                    </li>
                ))}
            </ul>
    )
}
Comments.propTypes = {
    comments: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.array.isRequired
    ])
};
export default Comments;
