/**
 * Created by nette on 13.03.17.
 */
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PostsList from '../PostsList/PostsList'
import * as PostActions from '../../actions'
import _ from 'lodash';

let hashMap = new Map();

// TODO: generated not static
hashMap.set('CH_0', [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]);
hashMap.set('CH_1', [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31]);
hashMap.set('CH_2', [2,3,6,7,10,11,14,15,18,19,22,23,26,27,30,31]);
hashMap.set('CH_4', [4,5,6,7,12,13,14,15,20,21,22,23,28,29,30,31]);
hashMap.set('CH_8', [8,9,10,11,12,13,14,15,24,25,26,27,28,29,30,31]);
hashMap.set('CH_16', [16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]);

hashMap.set('T_0', [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]);
hashMap.set('T_1', [1,3,5,7,9,11,13,15]);
hashMap.set('T_2', [4,5,6,7,12,13,14,15]);
hashMap.set('T_4', [4,6,5,12,7,14,15]);
hashMap.set('T_8', [8,9,10,11,12,13,14,15]);

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