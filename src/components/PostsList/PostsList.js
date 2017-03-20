/**
 * Created by nette on 13.03.17.
 */
import React, { PropTypes } from 'react'
import PostItem from '../PostItem/PostItem'

const PostsList = ({ posts, actions }) => (
    <ul>
        {posts.map(post =>
            <PostItem
                key={post.id}
                post={post}
                {...actions}
            />
        )}
    </ul>
)

PostsList.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired).isRequired,
    actions: PropTypes.object.isRequired
}

export default PostsList
