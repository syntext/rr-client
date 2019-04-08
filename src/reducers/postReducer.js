import {FETCH_POSTS_SUCCESS, NEW_POST_SUCCESS} from '../actions/types'

const initialState = {
    items: [],
    item: {},
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POSTS_SUCCESS:
            return {
                ...state,
                items: action.payload,
            }
        case NEW_POST_SUCCESS:
            return {
                ...state,
                item: action.payload,
            }
        default:
            return state
    }
}
