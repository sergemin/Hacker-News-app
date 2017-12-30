import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './post-card.css';

function PostCard(props) {
    return (
        <div className="post-item">
            <Link className='post-item__link' to={`/posts/${props.post.id}`}>
                <div className="post-item__inner">
                    <h3 className="post-item__title">{props.post.title}</h3>
                </div>
            </Link>
        </div>
    )
}

PostCard.propTypes = {
    post: PropTypes.object.isRequired
};

export default PostCard;
