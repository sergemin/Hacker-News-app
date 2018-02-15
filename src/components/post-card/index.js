import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { Card, Badge, Avatar, Icon } from 'antd';
import './styles.scss';

const PostCard = ({ post }) => (
  <div className='post-card'>
    <Card
      actions={[<Link to={`/posts/${post.id}`}> Learn More</Link>]}>
      <Card.Meta
        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
        title={<h2 className="posts-card__title">{post.title}</h2>}
        description={`${post.by}, ${moment(post.time).format('MM/DD/YYYY')}`}
      />
    </Card>
    <div className='post-card'>
      <div className='post-card__inner'>
        <div className="posts-card__title">
          {post.title}
        </div>
        <div className="posts-card__author">
          {post.by}
        </div>
        <div className="posts-card__score">
          {post.score}
        </div>
        <div className="posts-card__date">
          {moment(post.time).format('MM DD YYYY')}
        </div>
        <div className="posts-card__comments">
          {post.kids ? post.kids.length : 0}
        </div>
      </div>
      <div>
        <div>
          <Link to={`/posts/${post.id}`}> Learn More</Link>
        </div>
      </div>
    </div>
  </div>

);

PostCard.propTypes = {
    post: PropTypes.object.isRequired
};

export default PostCard;
