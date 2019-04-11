import Http from 'axios'
import {put, takeLatest} from 'redux-saga/effects'
import {putApiException} from '../common/sagaUtils'
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
        const response = yield Http.get('https://jsonplaceholder.typicode.com/posts')
        const posts = response.data

        yield put({type: POSTS_FETCH_SUCCESS, payload: posts})
    } catch (e) {
        yield putApiException(e)
        yield put({type: POSTS_FETCH_FAILED})
    }
}

function* newPost(action) {
    yield put({type: POSTS_CREATE_START})

    try {
        const response = yield Http.post('https://jsonplaceholder.typicode.com/posts1', action.payload)
        const post = response.data

        yield put({type: POSTS_CREATE_SUCCESS, payload: post})
    } catch (e) {
        yield putApiException(e)
        yield put({type: POSTS_CREATE_FAILED})
    }
}

export function* watchFetchPosts() {
    yield takeLatest(POSTS_FETCH, fetchPosts)
}

export function* watchNewPost() {
    yield takeLatest(POSTS_CREATE, newPost)
}
