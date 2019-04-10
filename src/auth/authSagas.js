import {put, takeLatest} from 'redux-saga/effects'
import {USER_LOGIN, USER_LOGIN_START, LOGIN_USER_SUCCESS} from './authActionTypes'

function* loginUser() {
    yield put({type: USER_LOGIN_START})

    // todo: authentication request
    const result = {
        token: 'abc'
    }

    yield put({type: LOGIN_USER_SUCCESS, payload: result})
}

export function* watchLoginUser() {
    yield takeLatest(USER_LOGIN, loginUser)
}
