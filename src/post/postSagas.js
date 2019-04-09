import Http from 'axios'
import {put, takeLatest} from 'redux-saga/effects'
import {
    FETCH_POSTS, FETCH_POSTS_START, FETCH_POSTS_SUCCESS, NEW_POST, NEW_POST_START, NEW_POST_SUCCESS
} from './postActionTypes'

function* fetchPosts() {
    yield put({type: FETCH_POSTS_START})

    const response = yield Http.get('https://jsonplaceholder.typicode.com/posts')
    const posts = response.data

    yield put({type: FETCH_POSTS_SUCCESS, payload: posts})
}

function* newPost(action) {
    yield put({type: NEW_POST_START})

    const response = yield Http.post('https://jsonplaceholder.typicode.com/posts', action.payload)
    const post = response.data

    yield put({type: NEW_POST_SUCCESS, payload: post})
}

export function* watchFetchPosts() {
    yield takeLatest(FETCH_POSTS, fetchPosts)
}

export function* watchNewPost() {
    yield takeLatest(NEW_POST, newPost)
}
