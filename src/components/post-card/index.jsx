import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import './styles.scss';

const PostCard = ({ post }) => (
  <div className="post-card">
    <Card
      actions={[<Link to={`/posts/${post.id}`}> Learn More</Link>]}
    >
      <Card.Meta
        onClick={() => console.log(post)}
        title={<h2 className="posts-card__title">{post.title}</h2>}
        description={`${post.by}, ${moment(post.time).format('MM/DD/YYYY')}`}
      />
    </Card>
  </div>
);

PostCard.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  post: PropTypes.object.isRequired,
};

export default PostCard;
