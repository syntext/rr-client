import Http from 'axios'
import {put, takeLatest} from 'redux-saga/effects'
import {
    POSTS_FETCH, POSTS_FETCH_START, POSTS_FETCH_SUCCESS, POSTS_CREATE, POSTS_CREATE_START, POSTS_CREATE_SUCCESS
} from './postActionTypes'

function* fetchPosts() {
    yield put({type: POSTS_FETCH_START})

    const response = yield Http.get('https://jsonplaceholder.typicode.com/posts')
    const posts = response.data

    yield put({type: POSTS_FETCH_SUCCESS, payload: posts})
}

function* newPost(action) {
    yield put({type: POSTS_CREATE_START})

    const response = yield Http.post('https://jsonplaceholder.typicode.com/posts', action.payload)
    const post = response.data

    yield put({type: POSTS_CREATE_SUCCESS, payload: post})
}

export function* watchFetchPosts() {
    yield takeLatest(POSTS_FETCH, fetchPosts)
}

export function* watchNewPost() {
    yield takeLatest(POSTS_CREATE, newPost)
}
