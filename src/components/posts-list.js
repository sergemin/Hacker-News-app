import React from 'react';
import { PostCard } from './';
import PropTypes from 'prop-types';

// TODO prop-types
function PostsList({ posts }) {
    return (
        <ul className="block-list">
            {posts.map(post => (
                <li className="post-list__item" key = {post.id}>
                    <PostCard post={post} />
                </li>
            ))}
        </ul>
    )
}
PostsList.propTypes = {
    posts: PropTypes.array.isRequired
};
export default PostsList;
