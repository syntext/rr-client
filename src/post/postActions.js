import {FETCH_POSTS, NEW_POST} from './postActionTypes'

export const fetchPosts = () => (
    {type: FETCH_POSTS}
)

export const createPost = (data) => (
    {type: NEW_POST, payload: data}
)
