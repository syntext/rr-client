import {all} from 'redux-saga/effects'
import {watchAuthRequired, watchLoginUser, watchLogoutUser} from '../auth/authSagas'
import {watchFetchPosts, watchNewPost} from '../post/postSagas'

export default function* () {
    yield all([
        watchFetchPosts(),
        watchNewPost(),
        watchAuthRequired(),
        watchLoginUser(),
        watchLogoutUser(),
    ])
}
