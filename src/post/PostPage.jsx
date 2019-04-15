import PropTypes from 'prop-types'
import React from 'react'
import withNavBar from '../navigation/withNavBar'
import PostForm from './PostForm'
import PostList from './PostList'

const PostPage = ({posts, onPostFormSubmit}) => (
    <div className='page post-page'>
        <PostForm onSubmit={onPostFormSubmit}/>
        <PostList posts={posts}/>
    </div>
)

PostPage.propTypes = {
    posts: PropTypes.array.isRequired,
    onPostFormSubmit: PropTypes.func.isRequired
}

export default withNavBar(PostPage)
