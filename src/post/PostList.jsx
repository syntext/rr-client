import PropTypes from 'prop-types'
import React from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from './postActions'
import './PostList.scss'

class PostList extends React.Component {
    componentWillMount() {
        this.props.fetchPosts()
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.newPost) {
            this.props.posts.unshift(nextProps.newPost)
        }
    }

    render() {
        const postElements = this.props.posts.map((post) => (
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
}

PostList.propTypes = {
    posts: PropTypes.array.isRequired,
    fetchPosts: PropTypes.func.isRequired,
    newPost: PropTypes.object
}

PostList.defaultProps = {
    newPost: undefined,
}

const mapStateToProps = (state) => ({
    posts: state.posts.items,
    newPost: state.posts.item,
})

export default connect(mapStateToProps, {fetchPosts})(PostList)
