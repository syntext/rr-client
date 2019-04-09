import {combineReducers} from 'redux'
import authReducer from '../auth/authReducer'
import postReducer from '../post/postReducer'

export default combineReducers({
    auth: authReducer,
    posts: postReducer,
})
