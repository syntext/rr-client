import {call, put, takeLatest} from 'redux-saga/effects'
import Api from '../common/ApiClient'
import {
    AUTH_REQUIRED,
    AUTH_TOKEN_RECEIVE,
    USER_LOGIN,
    USER_LOGIN_FAILED,
    USER_LOGIN_START,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT,
    USER_LOGOUT_FAILED,
    USER_LOGOUT_START,
    USER_LOGOUT_SUCCESS
} from './authActionTypes'

function storeToken(token) {
    localStorage.setItem('token', token)
}

function clearToken() {
    localStorage.removeItem('token')
}

function* loginUser(action) {
    yield put({type: USER_LOGIN_START})

    const {username, password} = action.payload

    try {
        const response = yield call(Api.post, 'login', {username, password})

        yield call(storeToken, response.data.token)

        yield put({type: AUTH_TOKEN_RECEIVE, payload: response.data})
        yield put({type: USER_LOGIN_SUCCESS})
    } catch (e) {
        yield put({type: USER_LOGIN_FAILED, payload: e.response})
    }
}

function* logoutUser() {
    yield put({type: USER_LOGOUT_START})

    yield call(clearToken)

    try {
        yield call(Api.post, 'logout')

        yield put({type: USER_LOGOUT_SUCCESS})
    } catch (e) {
        yield put({type: USER_LOGOUT_FAILED, payload: e.response})
    }
}

export function* watchLoginUser() {
    yield takeLatest(USER_LOGIN, loginUser)
}

export function* watchLogoutUser() {
    yield takeLatest(USER_LOGOUT, logoutUser)
}

export function* watchAuthRequired() {
    yield takeLatest(AUTH_REQUIRED, clearToken)
}
