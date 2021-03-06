import * as types from '../constants/ActionTypes'
import database from './database';

export const addNewPost = (text) => ({
    type: types.ADD_POST,
    id: Number(new Date()),
    text
});

export const editPost = (id, text) => ({
    type: types.EDIT_POST,
    id: id,
    text
});

export const togglePostState = (id) => ({
    type: types.TOGGLE_POST_STATE,
    id
});

export const removePost = (id) => ({
    type: types.REMOVE_POST,
    id
});

export const openPostPropertiesDialog = (open, postId, date) => ({
    type: types.OPEN_POST_PROP_DIALOG,
    open,
    postId,
    date
});

export const filterChannel = (value) => ({
    type: types.FILTER_CHANNEL,
    value
});

export const filterTools = (value) => ({
    type: types.FILTER_TOOLS,
    value
});

export const changePostDateTime = (id, newDateTime) => ({
    type: types.CHANGE_DATE_TIME,
    id,
    newDateTime
})

export function fetchChannels(dispatch) {
    database.ref('/channels').on('value', snap => {
        dispatch({
            type: 'FETCH_CHANNELS',
            payload: snap.val()
        });
    });
}