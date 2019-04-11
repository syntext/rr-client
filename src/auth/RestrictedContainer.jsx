import PropTypes from 'prop-types'
import React from 'react'
import {connect} from 'react-redux'

class RestrictedContainer extends React.Component {
    render() {
        return (
            (this.props.auth.token !== null) === !this.props.inverse && this.props.children
        )
    }
}

RestrictedContainer.propTypes = {
    children: PropTypes.object.isRequired,
    inverse: PropTypes.bool,
    auth: PropTypes.object
}

RestrictedContainer.defaultProps = {
    inverse: false,
    auth: {}
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, null)(RestrictedContainer)
