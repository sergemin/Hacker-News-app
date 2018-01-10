import React from 'react';
import './comments.css';
import PropTypes from 'prop-types';


function Comments({ comments }) {
    return [
        <h3 key="0">Comments</h3>,
        comments.length === 0 ? <div className="comments__zero comment" key="1">no comments yet</div> :
            <ul key="1">
                {comments.map(item => (
                    <li className="comments__item comment" key={item.id}>
                        <p className="comment__text">{item.text}</p>
                    </li>
                ))}
            </ul>
    ]
}
Comments.propTypes = {
    comments: PropTypes.array
};
export default Comments;
