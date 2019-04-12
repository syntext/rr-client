import {AUTH_TOKEN_RECEIVE} from './authActionTypes'

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
        default:
            return state
    }
}
