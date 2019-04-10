import {POSTS_CREATE, POSTS_FETCH} from './postActionTypes'

export const fetchPosts = () => (
    {type: POSTS_FETCH}
)

export const createPost = (data) => (
    {type: POSTS_CREATE, payload: data}
)
