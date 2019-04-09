import React from 'react'
import Restrict from '../app/common/Restrict'
import PostForm from './PostForm'
import PostList from './PostList'

const PostPage = () => (
    <div className='post-page'>
        <Restrict>
            <div>I only show when logged in</div>
        </Restrict>
        <Restrict inverse>
            <div>I only show when NOT logged in</div>
        </Restrict>
        <PostForm/>
        <PostList/>
    </div>
)

export default PostPage
