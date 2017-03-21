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
        recurring: true,
        channels: 12,
        tools: 1
    },
    {
        id: 2,
        text: 'Nowy post na blogu',
        completed: false,
        desc: '',
        publishAt: '2017-03-23T13:00:00.000Z',
        recurring: false,
        channels: 16,
        tools: 4
    },
    {
        id: 3,
        text: 'Info o nowym wpisie na blogu',
        completed: false,
        desc: '',
        publishAt: '2017-03-25T10:00:00.000Z',
        recurring: false,
        channels: 15,
        tools: 1
    },
    {
        id: 4,
        text: 'Poleć ten świetny artykuł o GTD!',
        completed: false,
        desc: '',
        publishAt: '2017-03-20T13:00:00.000Z',
        recurring: false,
        channels: 1,
        tools: 8
    },
    {
        id: 5,
        text: 'Zapytaj o coś czytelników',
        completed: true,
        desc: '',
        publishAt: '2017-03-20T13:00:00.000Z',
        recurring: true,
        channels: 15,
        tools: 1
    },
    {
        id: 6,
        text: 'Porada z zakresu tematyki X',
        completed: true,
        desc: '',
        publishAt: '2017-03-20T13:00:00.000Z',
        recurring: false,
        channels: 3,
        tools: 1
    },
    {
        id: 7,
        text: 'TOP 5 wpisów na bloga w ostanim okresie',
        completed: false,
        desc: '',
        publishAt: '2017-03-20T13:00:00.000Z',
        recurring: true,
        channels: 9,
        tools: 8
    }
];

const post = (state, action) => {
    switch (action.type) {
        case 'ADD_POST':
            return {
                id: action.id,
                text: action.text.postName,
                completed: false,
                desc: action.text.description,
                publishAt: action.text.datetime,
                channels: action.text.publishChannels,
                tools: action.text.publishTools
            };
        case 'TOGGLE_POST_STATE':
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
        case 'TOGGLE_POST_STATE':
            console.log('toggle');
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
