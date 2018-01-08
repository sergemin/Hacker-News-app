import React from 'react';
import './comments.css';
import PropTypes from 'prop-types';


function Comments({ comments }) {
    return (
            <ul className="comments">
                {comments.length === 0 ? <li className="comments__item comment">no comments yet</li> :
                comments.map(item => (
                    <li className="comments__item comment" key={item.id}>
                        <p className="comment__text">{item.text}</p>
                    </li>
                ))}
            </ul>
    )
}
Comments.propTypes = {
    comments: PropTypes.array
};
export default Comments;
