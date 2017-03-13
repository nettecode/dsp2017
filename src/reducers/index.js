/**
 * Created by nette on 07.03.17.
 */
import { combineReducers } from 'redux'
import posts from './posts'

const smplannerApp = combineReducers({
    posts
})

export default smplannerApp
