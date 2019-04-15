import {AUTH_REQUIRED, AUTH_TOKEN_RECEIVE, USER_LOGOUT} from './authActionTypes'

const initialState = {
    token: localStorage.getItem('token')
}

export default (state = initialState, action) => {
    switch (action.type) {
        case AUTH_TOKEN_RECEIVE:
            return {
                ...state,
                token: action.payload.token,
            }
        case AUTH_REQUIRED:
        case USER_LOGOUT:
            return {
                ...state,
                token: null,
            }
        default:
            return state
    }
}
