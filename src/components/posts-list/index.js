import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import { PostCard } from './..';
import './styles.scss';

function PostsList({ posts }) {
  return (
    <Row className='posts-list'>
      {posts.map(post => (
        <Col span={6} className="post-list__item" key = {post.id}>
          <PostCard post={post} />
        </Col>
      ))}
    </Row>
  )
}
PostsList.propTypes = {
  posts: PropTypes.array.isRequired
};

export default PostsList;
