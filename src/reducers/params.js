/**
 * Created by nette on 25.03.17.
 */
/** App params **/

// TODO: Read from database
const initialState = {
    postPropertiesOpen: false,
    editedPostId: null,
    filterChannels: 0,
    filterTools: 0,
    filterStatus: 0
};

const params = (state = initialState, action) => {
    switch (action.type) {
        case 'OPEN_POST_PROP_DIALOG':
            return {
                ...state,
                postPropertiesOpen: action.open,
                editedPostId: action.postId || null
            };
        default:
            return state
    }
};

export default params