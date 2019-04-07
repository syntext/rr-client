import Http from 'axios'
import {FETCH_POSTS, NEW_POST} from './types'

export const fetchPosts = () => (dispatch) => {
    Http.get('https://jsonplaceholder.typicode.com/posts')
        .then((res) => {
            dispatch({
                type: FETCH_POSTS,
                payload: res.data,
            })
        })
        .catch((err) => {
            console.log(err)
        })
}

export const createPost = data => (dispatch) => {
    Http.post('https://jsonplaceholder.typicode.com/posts', data)
        .then((res) => {
            dispatch({
                type: NEW_POST,
                payload: res.data,
            })
        })
        .catch((err) => {
            console.log(err)
        })
}
