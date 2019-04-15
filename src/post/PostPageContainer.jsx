import PropTypes from 'prop-types'
import React from 'react'
import {connect} from 'react-redux'
import {createPost, fetchPosts} from './postActions'
import PostPage from './PostPage'

class PostPageContainer extends React.Component {
    componentWillMount() {
        this.props.fetchPosts()
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
}

const mapStateToProps = (state) => ({
    posts: state.posts.items,
})

export default connect(mapStateToProps, {fetchPosts, createPost})(PostPageContainer)
