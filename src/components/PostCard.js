import React from 'react';
import './PostCard.css';
import PropTypes from 'prop-types';


function PostCard(props) {
    return (
        <div className="post-item">
            <div className="post-item__inner">
                <h3 className="post-item__title">{props.user.login}</h3>
                <img className="post-item__img" src={props.user.avatar_url} alt={props.user.login} />
            </div>
        </div>
    )
}

PostCard.propTypes = {
    user: PropTypes.object.isRequired
};
export default PostCard;