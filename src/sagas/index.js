import {all} from 'redux-saga/effects'
import {watchFetchPosts, watchNewPost} from './postSagas'

export default function* () {
    yield all([
        watchFetchPosts(),
        watchNewPost(),
    ])
}
