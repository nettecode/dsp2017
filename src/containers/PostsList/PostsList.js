/**
 * Created by nette on 13.03.17.
 */
import React, { PropTypes } from 'react'
import PostItem from '../../components/PostItem/PostItem'

const PostsList = ({ posts, actions, channels }) => (
    <ul>
        {posts.map(post =>
            <PostItem
                key={post.id}
                post={post}
                channels={channels}
                {...actions}
            />
        )}
    </ul>
);

PostsList.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        name: PropTypes.string.isRequired
    }).isRequired).isRequired,
    actions: PropTypes.object.isRequired,
    channels: PropTypes.array.isRequired
};

export default PostsList
