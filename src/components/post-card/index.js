import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.css';

const PostCard = ({ post }) => (
    <div className="post-item">
        <Link className='post-item__link' to={`/posts/${post.id}`}>
            <div className="post-item__inner">
                <h3 className="post-item__title">{post.title}</h3>
                <p className="post-item__comments">{post.kids ? post.kids.length : 0}</p>
            </div>
        </Link>
    </div>
);

PostCard.propTypes = {
    post: PropTypes.object.isRequired
};

export default PostCard;
