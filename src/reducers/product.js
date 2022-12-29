import {
    FETCH_PRODUCTS
} from '../actions/types';

const initialState = {
    data: [],
};

function productReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case FETCH_PRODUCTS:
            return {
                ...state,
                data: payload,
            };
        default:
            return state;
    }
}

export default productReducer;
