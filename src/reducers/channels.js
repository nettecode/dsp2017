/**
 * Created by nette on 20.03.17.
 */
import {

} from '../constants/ActionTypes'

const initialState = [
    {
        id: 0,
        name: 'Facebook',
        value: 1,
        color: '#3B5998',
        faIcon: 'facebook'
    },
    {
        id: 1,
        name: 'Twitter',
        value: 2,
        color: '#0084b4',
        faIcon: 'twitter'
    },
    {
        id: 2,
        name: 'Instagram',
        value: 4,
        color: '#fbad50',
        faIcon: 'instagram'
    },
    {
        id: 3,
        name: 'Google+',
        value: 8,
        color: '#d62d20',
        faIcon: 'google-plus'
    },
    {
        id: 4,
        name: 'Blog',
        value: 16,
        color: '#8a3ab9',
        faIcon: ''
    }
];

let lastValue = Math.pow(2, initialState.length-1);

const channel = (state, action) => {
    switch (action.type) {
        case 'ADD_CHANNEL':
            lastValue *= 2;
            return {
                id: action.id,
                name: action.text.name,
                value: lastValue,
                color: action.text.color || '#fccc63',
                faIcon: action.text.faIcon || ''
            };
        default:
            return state
    }
};

const channels = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_CHANNEL':
            return [
                ...state,
                channel(undefined, action)
            ];
        default:
            return state
    }
};

export default channels
