import React from 'react';
import PropTypes from 'prop-types';

const Comments = ({ comments }) => {
  if (comments.items.length === 0) {
    return <div className="comments__zero comment">no comments yet</div>;
  }
  return [
    <h3 key="0">Comments</h3>,
    <ul key="1">
      {comments.items.map(item => (
        <li className="comments__item comment" key={item.id}>
          <p className="comment__text">{item.text}</p>
        </li>
          ))}
    </ul>,
  ];
};

Comments.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  comments: PropTypes.object.isRequired,
};

export default Comments;
