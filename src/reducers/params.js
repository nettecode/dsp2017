/**
 * Created by nette on 25.03.17.
 */
/** App params **/

// TODO: Read from database
const initialState = {
    postPropertiesOpen: false
};

const params = (state = initialState, action) => {
    console.log('params changed');
    switch (action.type) {
        case 'OPEN_POST_PROP_DIALOG':
            console.log('post prop dialog open');
            return {
                ...state,
                postPropertiesOpen: action.open
            };
        default:
            return state
    }
};

export default params