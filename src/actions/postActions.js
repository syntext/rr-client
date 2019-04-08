import {FETCH_POSTS, NEW_POST} from './types'

export const fetchPosts = () => (dispatch) => {
    dispatch({type: FETCH_POSTS})
}

export const createPost = (data) => (dispatch) => {
    dispatch({type: NEW_POST, payload: data})
}
