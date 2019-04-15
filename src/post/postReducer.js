import {POSTS_CREATE_SUCCESS, POSTS_FETCH_SUCCESS} from './postActionTypes'

const initialState = {
    items: [],
    item: null,
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
                items: [
                    action.payload,
                    ...state.items
                ],
            }
        default:
            return state
    }
}
