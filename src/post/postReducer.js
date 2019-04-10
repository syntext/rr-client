import {POSTS_FETCH_SUCCESS, POSTS_CREATE_SUCCESS} from './postActionTypes'

const initialState = {
    items: [],
    item: {},
}

export default (state = initialState, action) => {
    switch (action.type) {
        case POSTS_FETCH_SUCCESS:
            return {
                ...state,
                items: action.payload,
            }
        case POSTS_CREATE_SUCCESS:
            return {
                ...state,
                item: action.payload,
            }
        default:
            return state
    }
}
