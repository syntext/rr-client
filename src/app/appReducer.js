import {APP_FETCHING_START, APP_FETCHING_SUCCESS} from './appActionTypes'

const initialState = {
    isFetching: false,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case APP_FETCHING_START:
            return {
                ...state,
                isFetching: true,
            }
        case APP_FETCHING_SUCCESS:
            return {
                ...state,
                isFetching: false,
            }
        default:
            return state
    }
}
