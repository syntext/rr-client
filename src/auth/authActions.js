import {LOGIN_USER, LOGOUT_USER} from './authActionTypes'

export const loginUser = (username, password) => (
    {type: LOGIN_USER, payload: {username, password}}
)

export const logoutUser = () => (
    {type: LOGOUT_USER}
)
