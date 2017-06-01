/**
 * Created by nette on 20.03.17.
 */
import {

} from '../constants/ActionTypes'

const initialState = [];
let lastValue = 0;

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
        case 'FETCH_CHANNELS': {
            lastValue = Math.pow(2, action.payload.length-1);
            return action.payload
        }
        default:
            return state
    }
};

export default channels
