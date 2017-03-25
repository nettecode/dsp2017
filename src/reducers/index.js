/**
 * Created by nette on 07.03.17.
 */
import { combineReducers } from 'redux'

import posts from './posts'
import channels from './channels'
import tools from './tools'
import params from './params'

const smplannerApp = combineReducers({
    posts,
    channels,
    tools,
    params
});

export default smplannerApp
