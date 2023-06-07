import { ADD_TO_HISTORY, REMOVE_FROM_HISTORY } from "../actionTypes/actionTypes";

const initialState = {
    history: [],
};
const blogReducer = (state = initialState, action) => {
    const selectedTopics = state.history.find((blog) => blog._id === action.payload._id);
    switch (action.type) {
        case ADD_TO_HISTORY:
            if (selectedTopics) {
                const newBlog = state.history.filter((blog) => blog._id !== selectedTopics._id)
                selectedTopics.quantity = selectedTopics.quantity + 1;
                return {
                    ...state,
                    history: [...newBlog, selectedTopics]
                };
            }
            return {
                ...state,
                history: [...state.history, { ...action.payload, quantity: 1 }],
            };
        case REMOVE_FROM_HISTORY:
            return {
                ...state,

                history: state.history.filter(blog => blog._id !== action.payload._id),
            };
        default:
            return state;
    }
}
export default blogReducer;