import {AUTH_FAILED, AUTH_TOKEN_RECEIVED, USER_LOGOUT} from './authActionTypes'

const initialState = {
    token: localStorage.getItem('token')
}

export default (state = initialState, action) => {
    switch (action.type) {
        case AUTH_TOKEN_RECEIVED:
            return {
                ...state,
                ...action.payload
            }
        case USER_LOGOUT:
        case AUTH_FAILED:
            return {
                ...state,
                token: null
            }
        default:
            return state
    }
}
