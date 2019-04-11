import {combineReducers} from 'redux'
import authReducer from '../auth/authReducer'
import postReducer from '../post/postReducer'
import notificationReducer from '../notification/notificationReducer'

export default combineReducers({
    auth: authReducer,
    posts: postReducer,
    notifications: notificationReducer,
})
