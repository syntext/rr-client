import axios from 'axios'
import store from '../app/store'
import {AUTH_FAILED, AUTH_TOKEN_RECEIVED} from '../auth/authActionTypes'

export default () => {
    const {token} = store.getState().auth
    const instance = axios.create()

    if (token) {
        instance.defaults.headers.common = {
            Authorization: `Bearer ${token}`
        }
    }

    instance.interceptors.response.use((response) => {
        if (response.headers['set-authorization']) {
            store.dispatch({
                type: AUTH_TOKEN_RECEIVED,
                payload: {
                    token: response.headers['set-authorization']
                }
            })
        }
        return response
    }, (e) => {
        if (e.response.status === 403) {
            store.dispatch({type: AUTH_FAILED})
        }
        return Promise.reject(e)
    })

    return instance
}
