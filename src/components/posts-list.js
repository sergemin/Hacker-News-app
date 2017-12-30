import React from 'react';
import { PostCard } from './';

function PostsList({posts}) {
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
export default PostsList;
