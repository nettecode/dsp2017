export const addNewPost = (text) => ({
    type: 'ADD_POST',
    id: Number(new Date()),
    text
});

export const editPost = (id, text) => ({
    type: 'EDIT_POST',
    id: id,
    text
});

export const togglePostState = (id) => ({
    type: 'TOGGLE_POST_STATE',
    id
});

export const setVisibilityFilter = (filter) => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
});

export const addNewChannel = (text) => ({
    type: 'ADD_CHANNEL',
    id: Number(new Date()),
    text
});

export const addNewTool = (text) => ({
    type: 'ADD_TOOL',
    id: Number(new Date()),
    text
});

export const removePost = (id) => ({
    type: 'REMOVE_POST',
    id
});

export const openPostPropertiesDialog = (open, postId) => ({
    type: 'OPEN_POST_PROP_DIALOG',
    open,
    postId
});