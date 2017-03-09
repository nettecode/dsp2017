/**
 * Created by nette on 07.03.17.
 */
const post = (state, action) => {
    switch (action.type) {
        case 'ADD_POST':
            return {
                id: action.id,
                text: action.text,
                completed: false
            };
        case 'TOGGLE_POST':
            if (state.id !== action.id) {
                return state
            }

            return {
                ...state,
                completed: !state.completed
            };
        default:
            return state
    }
};

const posts = (state = [], action) => {
    switch (action.type) {
        case 'ADD_POST':
            return [
                ...state,
                post(undefined, action)
            ];
        case 'TOGGLE_POST':
            return state.map(t =>
                post(t, action)
            );
        default:
            return state
    }
};

export default posts
