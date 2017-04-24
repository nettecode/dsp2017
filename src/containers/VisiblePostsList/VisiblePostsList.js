/**
 * Created by nette on 13.03.17.
 */
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PostsList from '../PostsList/PostsList'
import * as PostActions from '../../actions'

import  { getVisiblePosts } from '../../reducers';

const mapStateToProps = (state) => ({
    posts: getVisiblePosts(state),
    params: state.params,
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