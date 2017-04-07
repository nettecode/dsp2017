/**
 * Created by nette on 13.03.17.
 */
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PostsList from '../PostsList/PostsList'
import * as PostActions from '../../actions'
import _ from 'lodash';

let hashMap = new Map();

hashMap.set('1', [1,3,5,7,9,11,15,17,19,23,31]);

const singleFilter = (posts, value, option) => {
    return posts.filter(post => _.indexOf(hashMap.get(value.toString()), post[option]) >= 0);
};

const getVisiblePosts = (posts, filter) => {

    if (filter.channels !== 0) {
        return singleFilter(singleFilter(posts, 1, 'tools'), 1, 'channels');
    }
    return posts;
};

const mapStateToProps = (state) => ({
    posts: getVisiblePosts(state.posts, state.params.filter),
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