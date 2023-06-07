import { ADD_TO_HISTORY, REMOVE_FROM_HISTORY } from "../actionTypes/actionTypes"

export const addToHistory = (blog) => {
    return {
        type: ADD_TO_HISTORY,
        payload: blog,
    }
}

export const removeHistory = (blog) => {
    return {
        type: REMOVE_FROM_HISTORY,
        payload: blog
    }
}