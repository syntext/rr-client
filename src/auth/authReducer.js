import {LOGIN_USER_SUCCESS} from './authActionTypes'

const initialState = {
    token: localStorage.getItem('token'),
    authenticated: false,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}
