import PropTypes from 'prop-types'
import React from 'react'
import {connect} from 'react-redux'
import {createPost, fetchPosts} from './postActions'
import PostPage from './PostPage'

class PostPageContainer extends React.Component {
    componentWillMount() {
        this.props.fetchPosts()
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.newPost) {
            this.props.posts.unshift(nextProps.newPost)
        }
    }

    render() {
        return (
            <PostPage
                posts={this.props.posts}
                onPostFormSubmit={this.props.createPost}
            />
        )
    }
}

PostPageContainer.propTypes = {
    posts: PropTypes.array.isRequired,
    fetchPosts: PropTypes.func.isRequired,
    createPost: PropTypes.func.isRequired,
    newPost: PropTypes.object
}

PostPageContainer.defaultProps = {
    newPost: undefined,
}

const mapStateToProps = (state) => ({
    posts: state.posts.items,
    newPost: state.posts.item,
})

export default connect(mapStateToProps, {fetchPosts, createPost})(PostPageContainer)
