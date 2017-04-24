/**
 * Created by nette on 07.03.17.
 */
import {
    ADD_POST,
    EDIT_POST,
    TOGGLE_POST_STATE,
    REMOVE_POST,
    CHANGE_DATE_TIME
} from '../constants/ActionTypes'

import moment from 'moment';

const initialState = [
    {
        id: 1,
        title: 'Tipy & Wskazówki',
        completed: true,
        description: 'Seria tipów i wskazówek',
        start: new Date('2017-04-28T11:00:00.000Z'),
        end: new Date('2017-04-28T13:00:00.000Z'),
        recurring: true,
        channels: 12,
        tools: 1
    },
    {
        id: 2,
        title: 'Nowy post na blogu',
        completed: false,
        description: '',
        start: new Date('2017-04-23T13:00:00.000Z'),
        end: new Date('2017-04-23T15:00:00.000Z'),
        recurring: false,
        channels: 16,
        tools: 4
    },
    {
        id: 3,
        title: 'Info o nowym wpisie na blogu',
        completed: false,
        description: '',
        start: new Date('2017-04-25T10:00:00.000Z'),
        end: new Date('2017-04-25T12:00:00.000Z'),
        recurring: false,
        channels: 15,
        tools: 1
    },
    {
        id: 4,
        title: 'Poleć ten świetny artykuł o GTD!',
        completed: false,
        description: '',
        start: new Date('2017-03-26T13:00:00.000Z'),
        end: new Date('2017-03-26T15:00:00.000Z'),
        recurring: false,
        channels: 1,
        tools: 8
    },
    {
        id: 5,
        title: 'Zapytaj o coś czytelników',
        completed: true,
        description: '',
        start: new Date('2017-04-29T07:00:00.000Z'),
        end: new Date('2017-04-29T09:00:00.000Z'),
        recurring: true,
        channels: 15,
        tools: 1
    },
    {
        id: 6,
        title: 'Porada z zakresu tematyki X',
        completed: true,
        description: '',
        start: new Date('2017-04-27T09:00:00.000Z'),
        end: new Date('2017-04-27T11:00:00.000Z'),
        recurring: false,
        channels: 3,
        tools: 1
    },
    {
        id: 7,
        title: 'TOP 5 wpisów na bloga w ostanim okresie',
        completed: false,
        description: '',
        start: new Date('2017-04-24T16:00:00.000Z'),
        end: new Date('2017-04-24T18:00:00.000Z'),
        recurring: true,
        channels: 9,
        tools: 8
    },
    {
        id: 8,
        title: 'Cytaty motywacyjne',
        completed: false,
        description: 'Seria cytatów motywacyjnych',
        start: new Date('2017-04-26T18:00:00.000Z'),
        end: new Date('2017-04-26T20:00:00.000Z'),
        recurring: true,
        channels: 3,
        tools: 1
    }
];

const post = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                id: action.id,
                title: action.text.postName,
                completed: false,
                description: action.text.description,
                start: action.text.datetime,
                end: new moment(action.text.datetime).add('2','hours').toDate(),
                channels: action.text.publishChannels,
                tools: action.text.publishTools
            };
        case EDIT_POST:
            if (state.id === action.id) {
                return {...state,
                    name: action.text.postName,
                    completed: action.text.completed,
                    description: action.text.description,
                    start: action.text.datetime,
                    end: new moment(action.text.datetime).add('2','hours').toDate(),
                    channels: action.text.publishChannels,
                    tools: action.text.publishTools
                };
            }
            return state;
        case TOGGLE_POST_STATE:
            if (state.id !== action.id) {
                return state
            }
            return {
                ...state,
                completed: !state.completed
            };
        case CHANGE_DATE_TIME:
            if (state.id !== action.id) {
                return state
            }
            return {
                ...state,
                start: action.newDateTime,
                end: new moment(action.newDateTime).add('2','hours').toDate(),
            };
        default:
            return state;
    }
};

const posts = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return [
                ...state,
                post(undefined, action)
            ];
        case EDIT_POST:
            return state.map(p =>
                post(p, action)
            );
        case TOGGLE_POST_STATE:
            return state.map(p =>
                post(p, action)
            );
        case REMOVE_POST:
            return state.filter(post => post.id !== action.id);
        case CHANGE_DATE_TIME:
            return state.map(p =>
                post(p, action)
            );
        default:
            return state
    }
};

export default posts
