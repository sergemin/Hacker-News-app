import React from 'react';
import './comments.css';
import PropTypes from 'prop-types';


function Comments({ comments }) {
    // I dont know yet what I should do if get a string 'no comments'
    // But I don't know yet how to organize it in functional component
    console.log(comments);
    return (
            <ul className="comments">
                {comments.lenght === 0 ? <li className="comments__item comment">no comments yet</li> :
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
