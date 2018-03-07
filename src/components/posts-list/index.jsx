import React from 'react';
import PropTypes from 'prop-types';
import { PostCard } from './..';
import './styles.scss';

function PostsList({ posts }) {
  return (
    <div className="posts-list">
      {posts.map(post => (
        <div className="posts-list__item" key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
}
PostsList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  posts: PropTypes.array.isRequired,
};

export default PostsList;
