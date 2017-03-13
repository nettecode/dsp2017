/**
 * Created by nette on 13.03.17.
 */
import { connect } from 'react-redux'
import { togglePostState } from '../../actions'
import PostsList from '../PostsList/PostsList'

const mapStateToProps = (state) => ({
    // posts: getVisiblePosts(state.posts, state.visibilityFilter)
    posts: state.posts
})

const mapDispatchToProps = {
    onPostDoneClick: togglePostState
}

const VisiblePostsList = connect(
    mapStateToProps,
    mapDispatchToProps
)(PostsList)

export default VisiblePostsList