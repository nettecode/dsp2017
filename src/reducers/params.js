/**
 * Created by nette on 25.03.17.
 */
/** App params **/

// TODO: Read from database
const initialState = {
    postPropertiesOpen: false,
    editedPostId: null
};

const params = (state = initialState, action) => {
    console.log('params changed');
    switch (action.type) {
        case 'OPEN_POST_PROP_DIALOG':
            console.log('post prop dialog open');
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