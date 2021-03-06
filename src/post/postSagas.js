import {call, put, takeLatest} from 'redux-saga/effects'
import Api from '../common/ApiClient'
import {createApiExceptionNotificationAction} from '../common/sagaUtils'
import {
    POSTS_CREATE,
    POSTS_CREATE_FAILED,
    POSTS_CREATE_START,
    POSTS_CREATE_SUCCESS,
    POSTS_FETCH,
    POSTS_FETCH_FAILED,
    POSTS_FETCH_START,
    POSTS_FETCH_SUCCESS
} from './postActionTypes'

function* fetchPosts() {
    yield put({type: POSTS_FETCH_START})

    try {
        const response = yield call(Api.get, 'posts')
        const posts = response.data

        yield put({type: POSTS_FETCH_SUCCESS, payload: posts})
    } catch (e) {
        yield put(yield call(createApiExceptionNotificationAction, e))
        yield put({type: POSTS_FETCH_FAILED})
    }
}

function* createPost(action) {
    yield put({type: POSTS_CREATE_START})

    try {
        const response = yield call(Api.post, 'posts', action.payload)

        yield put({type: POSTS_CREATE_SUCCESS, payload: response.data})
    } catch (e) {
        yield put(yield call(createApiExceptionNotificationAction, e))
        yield put({type: POSTS_CREATE_FAILED})
    }
}

export function* watchFetchPosts() {
    yield takeLatest(POSTS_FETCH, fetchPosts)
}

export function* watchCreatePost() {
    yield takeLatest(POSTS_CREATE, createPost)
}
