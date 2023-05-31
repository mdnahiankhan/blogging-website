import { ADD_TO_HISTORY } from "../actionTypes/actionTypes"

export const addToHistory = (blog) => {
    return {
        type: ADD_TO_HISTORY,
        payload: blog,
    }
}