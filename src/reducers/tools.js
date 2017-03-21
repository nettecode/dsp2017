/**
 * Created by nette on 20.03.17.
 */
let lastValue = 4; // read from settings

const initialState = [
    {
        id: 0,
        name: 'Buffer',
        value: 1
    },
    {
        id: 1,
        name: 'Hootsuite',
        value: 2
    },
    {
        id: 2,
        name: 'Jetpack',
        value: 4
    },
    {
        id: 3,
        name: 'Facebook Planner',
        value: 8
    }
];

const tool = (state, action) => {
    switch (action.type) {
        case 'ADD_CHANNEL':
            lastValue *= 2;
            return {
                id: action.id,
                name: action.text.name,
                value: lastValue
            };
        default:
            return state
    }
};

const tools = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TOOL':
            return [
                ...state,
                tool(undefined, action)
            ];
        default:
            return state
    }
};

export default tools
