import PropTypes from 'prop-types'
import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {logoutUser} from './authActions'
import LogoutPage from './LogoutPage'

class LogoutPageContainer extends React.Component {
    constructor(props) {
        super(props)
        this.tokenSet = !!props.auth.token
    }

    componentDidMount() {
        if (this.tokenSet) {
            this.props.logoutUser()
        }
    }

    render() {
        return (
            this.tokenSet
                ? <LogoutPage/>
                : <Redirect to='/'/>
        )
    }
}

LogoutPageContainer.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, {logoutUser})(LogoutPageContainer)
