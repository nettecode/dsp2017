/**
 * Created by nette on 13.03.17.
 */
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PostsList from '../PostsList/PostsList'
import * as PostActions from '../../actions'
import _ from 'lodash';
import hashMap from '../../constants/ValueToArrayMap';

const singleFilter = (posts, value, parameter) => {
    return posts.filter(post => _.indexOf(hashMap.get(value), post[parameter]) >= 0);
};

const getVisiblePosts = (posts, params) => {
    return singleFilter(singleFilter(posts, 'T_'+ params.toolsFilter, 'tools'), 'CH_' + params.channelsFilter, 'channels');
};

const mapStateToProps = (state) => ({
    posts: getVisiblePosts(state.posts, state.params),
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