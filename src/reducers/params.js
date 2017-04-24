/**
 * Created by nette on 25.03.17.
 */
/** App params **/
import {
    OPEN_POST_PROP_DIALOG,
    FILTER_CHANNEL,
    FILTER_TOOLS
} from '../constants/ActionTypes'

// TODO: Read from database
const initialState = {
    postPropertiesOpen: false,
    editedPostId: null,
    channelsFilter: 0,
    toolsFilter: 0,
    statusFilter: 0
};

const params = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_POST_PROP_DIALOG:
            return {
                ...state,
                postPropertiesOpen: action.open,
                editedPostId: action.postId || null,
                date: action.date || new Date()
            };
        case FILTER_CHANNEL:
            return {
                ...state,
                channelsFilter: action.value
            };
        case FILTER_TOOLS:
            return {
                ...state,
                toolsFilter: action.value
            };
        default:
            return state
    }
};

export default params