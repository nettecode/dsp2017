let nextPostId = 0
export const addNewPost = (text) => ({
    type: 'ADD_POST',
    id: nextPostId++,
    text
})

export const togglePostState = (id) => ({
    type: 'TOGGLE_POST_STATE',
    id
})

export const setVisibilityFilter = (filter) => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
})