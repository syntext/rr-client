import {USER_LOGIN, USER_LOGOUT} from './authActionTypes'

export const loginUser = (username, password) => (
    {type: USER_LOGIN, payload: {username, password}}
)

export const logoutUser = () => (
    {type: USER_LOGOUT}
)
