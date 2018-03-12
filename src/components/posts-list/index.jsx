import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import { PostCard } from './..';
import './styles.scss';

function PostsList({ posts }) {
  return (
    <Row>
      <div className="posts-list">
        {posts.map(post => (
          <Col span={8} className="posts-list__item" key={post.id}>
            <PostCard post={post} />
          </Col>
        ))}
      </div>
    </Row>
  );
}
PostsList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  posts: PropTypes.array.isRequired,
};

export default PostsList;
