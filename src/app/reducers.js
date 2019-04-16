import {combineReducers} from 'redux'
import authReducer from '../auth/authReducer'
import i18nReducer from '../i18n/i18nReducer'
import notificationReducer from '../notification/notificationReducer'
import postReducer from '../post/postReducer'
import appReducer from './appReducer'

export default combineReducers({
    app: appReducer,
    i18n: i18nReducer,
    auth: authReducer,
    posts: postReducer,
    notifications: notificationReducer,
})
