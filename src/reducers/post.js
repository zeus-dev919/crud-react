import {
    CLEAR_CACHE,
    CREATE_PRODUCT,
    POST_ERROR,
    FETCH_PRODUCTS
} from '../actions/types';

const initialState = {
    data: [],
};

function postReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case POST_ERROR:
            return {
                ...state,
                data: payload,
            };
        case CREATE_PRODUCT:
            return {
                ...state,
                data: payload,
            };
        case CLEAR_CACHE:
            return {
                ...state,
                data: payload,
            };

        default:
            return state;
    }
}

export default postReducer;
