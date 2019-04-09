import PropTypes from 'prop-types'
import React from 'react'
import './PostList.scss'

const PostList = ({posts}) => {
    const postElements = posts.map((post) => (
        <li key={post.id}>{post.title}</li>
    ))

    return (
        <div className='post-list'>
            <ul>
                {postElements}
            </ul>
        </div>
    )
}

PostList.propTypes = {
    posts: PropTypes.array.isRequired,
}

export default PostList
