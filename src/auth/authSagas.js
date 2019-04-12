import {call, put, takeLatest} from 'redux-saga/effects'
import Api from '../common/ApiClient'
import {
    AUTH_TOKEN_RECEIVED,
    USER_LOGIN,
    USER_LOGIN_START,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT,
    USER_LOGOUT_START,
    USER_LOGOUT_SUCCESS
} from './authActionTypes'

function* loginUser(action) {
    yield put({type: USER_LOGIN_START})

    const {username, password} = action.payload

    const response = yield call(Api.post, 'login', {username, password})

    localStorage.setItem('token', response.data.token)

    yield put({type: AUTH_TOKEN_RECEIVED, payload: response.data})
    yield put({type: USER_LOGIN_SUCCESS})
}

function* logoutUser() {
    yield put({type: USER_LOGOUT_START})

    localStorage.removeItem('token')

    yield call(Api.post, 'logout')

    yield put({type: USER_LOGOUT_SUCCESS})
}

export function* watchLoginUser() {
    yield takeLatest(USER_LOGIN, loginUser)
}

export function* watchLogoutUser() {
    yield takeLatest(USER_LOGOUT, logoutUser)
}
