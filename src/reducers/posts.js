/**
 * Created by nette on 07.03.17.
 */

const initialState = [
    {
        id: 0,
        text: 'Cytaty motywacyjne',
        completed: false,
        desc: 'Seria cytatów motywacyjnych',
        publishAt: '2017-03-20T13:00:00.000Z',
        recurring: true,
        channels: 3,
        tools: 1
    },
    {
        id: 1,
        text: 'Tipy & Wskazówki',
        completed: true,
        desc: 'Seria tipów i wskazówek',
        publishAt: '2017-03-22T13:00:00.000Z',
        recurring: false,
        channels: 12,
        tools: 1
    },
]

const post = (state, action) => {
    switch (action.type) {
        case 'ADD_POST':
            return {
                id: action.id,
                text: action.text.postName,
                completed: false,
                desc: action.text.description,
                publishAt: action.text.datetime,
                channels: 0,
                tools: 0
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

const posts = (state = initialState, action) => {
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
        case 'REMOVE_POST':
            return state.filter(post => post.id !== action.id);
        default:
            return state
    }
};

export default posts
