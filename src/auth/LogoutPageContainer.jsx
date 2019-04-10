import PropTypes from 'prop-types'
import React from 'react'
import {connect} from 'react-redux'
import {logoutUser} from './authActions'
import LogoutPage from './LogoutPage'

class LogoutPageContainer extends React.Component {
    componentDidMount() {
        this.props.logoutUser()
    }

    render() {
        return <LogoutPage/>
    }
}

LogoutPageContainer.propTypes = {
    logoutUser: PropTypes.func.isRequired,
}

export default connect(null, {logoutUser})(LogoutPageContainer)
