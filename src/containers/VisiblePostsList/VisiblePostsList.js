/**
 * Created by nette on 13.03.17.
 */
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PostsList from '../PostsList/PostsList'
import * as PostActions from '../../actions'

const mapStateToProps = (state) => ({
    // posts: getVisiblePosts(state.posts, state.visibilityFilter)
    posts: state.posts,
    channels: state.channels
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(PostActions, dispatch)
});

const VisiblePostsList = connect(
    mapStateToProps,
    mapDispatchToProps
)(PostsList);

export default VisiblePostsList