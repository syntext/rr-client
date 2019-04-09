import PropTypes from 'prop-types'
import React from 'react'

const PostForm = ({onSubmit: submit}) => {
    const onSubmit = (e) => {
        e.preventDefault()
        submit({title: e.target.title.value})
    }

    return (
        <form onSubmit={onSubmit}>
            <input type='text' name='title'/>
            <button type='submit'>Submit</button>
        </form>
    )
}

PostForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
}

export default PostForm
