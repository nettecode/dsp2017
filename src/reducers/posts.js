/**
 * Created by nette on 07.03.17.
 */

const initialState = [
    {
        id: 1,
        name: 'Tipy & Wskazówki',
        completed: true,
        description: 'Seria tipów i wskazówek',
        publishAt: '2017-03-22T13:00:00.000Z',
        recurring: true,
        channels: 12,
        tools: 1
    },
    {
        id: 2,
        name: 'Nowy post na blogu',
        completed: false,
        description: '',
        publishAt: '2017-03-23T13:00:00.000Z',
        recurring: false,
        channels: 16,
        tools: 4
    },
    {
        id: 3,
        name: 'Info o nowym wpisie na blogu',
        completed: false,
        description: '',
        publishAt: '2017-03-25T10:00:00.000Z',
        recurring: false,
        channels: 15,
        tools: 1
    },
    {
        id: 4,
        name: 'Poleć ten świetny artykuł o GTD!',
        completed: false,
        description: '',
        publishAt: '2017-03-20T13:00:00.000Z',
        recurring: false,
        channels: 1,
        tools: 8
    },
    {
        id: 5,
        name: 'Zapytaj o coś czytelników',
        completed: true,
        description: '',
        publishAt: '2017-03-20T13:00:00.000Z',
        recurring: true,
        channels: 15,
        tools: 1
    },
    {
        id: 6,
        name: 'Porada z zakresu tematyki X',
        completed: true,
        description: '',
        publishAt: '2017-03-20T13:00:00.000Z',
        recurring: false,
        channels: 3,
        tools: 1
    },
    {
        id: 7,
        name: 'TOP 5 wpisów na bloga w ostanim okresie',
        completed: false,
        description: '',
        publishAt: '2017-03-20T13:00:00.000Z',
        recurring: true,
        channels: 9,
        tools: 8
    },
    {
        id: 8,
        name: 'Cytaty motywacyjne',
        completed: false,
        description: 'Seria cytatów motywacyjnych',
        publishAt: '2017-03-20T13:00:00.000Z',
        recurring: true,
        channels: 3,
        tools: 1
    }
];

const post = (state, action) => {
    switch (action.type) {
        case 'ADD_POST':
            return {
                id: action.id,
                name: action.text.postName,
                completed: false,
                description: action.text.description,
                publishAt: action.text.datetime,
                channels: action.text.publishChannels,
                tools: action.text.publishTools
            };
        case 'EDIT_POST':
            if (state.id === action.id) {
                return {...state,
                    name: action.text.postName,
                    completed: action.text.completed,
                    description: action.text.description,
                    publishAt: action.text.datetime,
                    channels: action.text.publishChannels,
                    tools: action.text.publishTools
                };
            }
            return state;
        case 'TOGGLE_POST_STATE':
            if (state.id !== action.id) {
                return state
            }
            return {
                ...state,
                completed: !state.completed
            };
        default:
            return state;
    }
};

const posts = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_POST':
            return [
                ...state,
                post(undefined, action)
            ];
        case 'EDIT_POST':
            return state.map(p =>
                post(p, action)
            );
        case 'TOGGLE_POST_STATE':
            return state.map(p =>
                post(p, action)
            );
        case 'REMOVE_POST':
            return state.filter(post => post.id !== action.id);
        default:
            return state
    }
};

export default posts
