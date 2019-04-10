import {put, takeLatest} from 'redux-saga/effects'
import {
    USER_LOGIN, USER_LOGIN_START, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_LOGOUT_START, USER_LOGOUT_SUCCESS
} from './authActionTypes'

function* loginUser() {
    yield put({type: USER_LOGIN_START})

    // todo: authentication request
    const result = {
        token: 'abc'
    }

    localStorage.setItem('token', result.token)

    yield put({type: USER_LOGIN_SUCCESS, payload: result})
}

function* logoutUser() {
    yield put({type: USER_LOGOUT_START})

    localStorage.removeItem('token')

    yield put({type: USER_LOGOUT_SUCCESS})
}

export function* watchLoginUser() {
    yield takeLatest(USER_LOGIN, loginUser)
}

export function* watchLogoutUser() {
    yield takeLatest(USER_LOGOUT, logoutUser)
}
