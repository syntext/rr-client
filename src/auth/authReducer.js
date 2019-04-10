import {LOGIN_USER_SUCCESS, USER_LOGOUT} from './authActionTypes'

const initialState = {
    token: localStorage.getItem('token')
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER_SUCCESS:
            localStorage.setItem('token', action.payload.token)
            return {
                ...state,
                ...action.payload
            }
        case USER_LOGOUT:
            localStorage.removeItem('token')
            return {
                ...state,
                token: null
            }
        default:
            return state
    }
}
