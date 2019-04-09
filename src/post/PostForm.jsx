import PropTypes from 'prop-types'
import React from 'react'
import './PostForm.scss'

const PostForm = ({onSubmit: submit}) => {
    const onSubmit = (e) => {
        e.preventDefault()
        submit({title: e.target.title.value})
    }

    return (
        <div className='post-form'>
            <form onSubmit={onSubmit}>
                <input type='text' name='title'/>
                <button type='submit'>Add Post</button>
            </form>
        </div>
    )
}

PostForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
}

export default PostForm
