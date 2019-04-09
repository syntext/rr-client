import PropTypes from 'prop-types'
import React from 'react'
import {connect} from 'react-redux'

class Restrict extends React.Component {
    render() {
        return (
            (this.props.auth.token !== null) === !this.props.inverse && this.props.children
        )
    }
}

Restrict.propTypes = {
    children: PropTypes.object.isRequired,
    inverse: PropTypes.bool,
    auth: PropTypes.object
}

Restrict.defaultProps = {
    inverse: false,
    auth: {}
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, null)(Restrict)
