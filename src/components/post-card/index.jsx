import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Link } from 'react-router-dom';
import './styles.scss';

const PostCard = ({ post }) => (
  <div className="post-card">
    <Link to={`/posts/${post.id}`}>
      <div>
        <h2 className="posts-card__title">{post.title}</h2>
        <div>${post.by}, ${moment(post.time).format('MM/DD/YYYY')}</div>
      </div>
    </Link>
  </div>
);

PostCard.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  post: PropTypes.object.isRequired,
};

export default PostCard;
