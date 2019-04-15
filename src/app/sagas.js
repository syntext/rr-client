import {all} from 'redux-saga/effects'
import {watchAuthRequired, watchLoginUser, watchLogoutUser} from '../auth/authSagas'
import {watchCreatePost, watchFetchPosts} from '../post/postSagas'

export default function* () {
    yield all([
        watchFetchPosts(),
        watchCreatePost(),
        watchAuthRequired(),
        watchLoginUser(),
        watchLogoutUser(),
    ])
}
