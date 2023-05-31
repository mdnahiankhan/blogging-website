import { ADD_TO_HISTORY, REMOVE_FROM_HISTORY } from "../actionTypes/actionTypes";

const initialState = {
    history: []
};
const blogReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_HISTORY:
            return {
                ...state,
                history: [...state.history, action.payload]
            };
        case REMOVE_FROM_HISTORY:
            return {};
        default:
            return state;
    }
}
export default blogReducer;