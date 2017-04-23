/**
 * Created by nette on 07.03.17.
 */
import { combineReducers } from 'redux'

import posts from './posts'
import channels from './channels'
import tools from './tools'
import params from './params'

import _ from 'lodash';
import hashMap from '../constants/ValueToArrayMap';

const smplannerApp = combineReducers({
    posts,
    channels,
    tools,
    params
});

export default smplannerApp

const singleFilter = (posts, value, parameter) => {
    return posts.filter(post => _.indexOf(hashMap.get(value), post[parameter]) >= 0);
};

export function getVisiblePosts(state){
    return singleFilter(singleFilter(state.posts, 'T_'+ state.params.toolsFilter, 'tools'), 'CH_' + state.params.channelsFilter, 'channels');
};
