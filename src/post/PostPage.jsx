import PropTypes from 'prop-types'
import React from 'react'
import Restrict from '../app/common/Restrict'
import PostForm from './PostForm'
import PostList from './PostList'

const PostPage = ({posts, onPostFormSubmit: postFormSubmit}) => (
    <div className='post-page'>
        <Restrict>
            <div>I only show when logged in</div>
        </Restrict>

        <Restrict inverse>
            <div>I only show when NOT logged in</div>
        </Restrict>

        <PostForm onSubmit={postFormSubmit}/>

        <PostList posts={posts}/>
    </div>
)

PostPage.propTypes = {
    posts: PropTypes.array.isRequired,
    onPostFormSubmit: PropTypes.func.isRequired
}

export default PostPage
