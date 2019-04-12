import axios from 'axios'
import store from '../app/store'
import {AUTH_FAILED, AUTH_TOKEN_RECEIVED} from '../auth/authActionTypes'
import appConfig from '../config'

const instance = axios.create({
    baseURL: appConfig.baseApiUrl
})
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
    if (e.response.status === 401) {
        store.dispatch({type: AUTH_FAILED})
    }
    return e
})

export default class ApiClient {
    static get = (url, config) => {
        this.setAuthHeader()
        return instance.get(url, config)
    }

    static delete = (url, config) => {
        this.setAuthHeader()
        return instance.delete(url, config)
    }

    static post = (url, data, config) => {
        this.setAuthHeader()
        return instance.post(url, data, config)
    }

    static put = (url, data, config) => {
        this.setAuthHeader()
        return instance.put(url, data, config)
    }

    static patch = (url, data, config) => {
        this.setAuthHeader()
        instance.patch(url, data, config)
    }

    static all = (iterable) => axios.all(iterable)

    static setAuthHeader = () => {
        const {token} = store.getState().auth

        if (token) {
            instance.defaults.headers.common = {
                Authorization: `Bearer ${token}`
            }
        }
    }
}
