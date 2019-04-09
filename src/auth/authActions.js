import {LOGIN_USER} from './authActionTypes'

export const loginUser = (username, password) => (
    {type: LOGIN_USER, payload: {username, password}}
)
