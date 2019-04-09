import PropTypes from 'prop-types'
import React from 'react'
import {connect} from 'react-redux'
import {createPost} from './postActions'

class PostForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    onSubmit = (e) => {
        e.preventDefault()

        const post = {
            title: this.state.title,
        }

        this.props.createPost(post)
    }

    render() {
        return (
            <form>
                <input type='text' name='title' onChange={this.onChange} value={this.state.title}/>
                <button type='submit' onClick={this.onSubmit}>Submit</button>
            </form>
        )
    }
}

PostForm.propTypes = {
    createPost: PropTypes.func.isRequired
}

export default connect(null, {createPost})(PostForm)
