import React from 'react';
import './comments.css';
import PropTypes from 'prop-types';


function Comments({ comments }) {
  if(comments.length === 0) {
    return <div className="comments__zero comment">no comments yet</div>
  }
    return [
        <h3 key="0">Comments</h3>,
        <ul key="1">
          {comments.map(item => (
             <li className="comments__item comment" key={item.id}>
                  <p className="comment__text">{item.text}</p>
            </li>
          ))}</ul>
    ]
}
Comments.propTypes = {
    comments: PropTypes.array,
};
export default Comments;
