import {put, takeLatest} from 'redux-saga/effects'
import {LOGIN_USER, LOGIN_USER_START, LOGIN_USER_SUCCESS} from './authActionTypes'

function* loginUser() {
    yield put({type: LOGIN_USER_START})

    // todo: authentication request
    const result = {
        token: 'abc'
    }

    yield put({type: LOGIN_USER_SUCCESS, payload: result})
}

export function* watchLoginUser() {
    yield takeLatest(LOGIN_USER, loginUser)
}
