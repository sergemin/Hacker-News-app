import React, { Component } from 'react';
import './PostCard.css';
import PropTypes from 'prop-types';


class Post extends Component {
    render() {
        return (
            <article className="post-list__item post-item">
                <div className="post-item__inner">
                    <h3 className="post-item__title">{this.props.user}</h3>
                    <img className="post-item__img" src={this.props.image} alt="this.props.user" />
                </div>
            </article>
        )
    }
}

Post.defaultProps = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string
};
export default Post;