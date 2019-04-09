import PropTypes from 'prop-types'
import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {loginUser} from './authActions'
import LoginPage from './LoginPage'

class LoginPageContainer extends React.Component {
    loginHandler = (username, password) => {
        this.props.loginUser(username, password)
    }

    render() {
        return (
            !this.props.auth.authenticated
                ? <LoginPage onLogin={this.loginHandler}/>
                : <Redirect to='/'/>
        )
    }
}

LoginPageContainer.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, {loginUser})(LoginPageContainer)
