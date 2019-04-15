import PropTypes from 'prop-types'
import React from 'react'
import LoginForm from './LoginForm'

const LoginPage = ({onLogin}) => (
    <div className='page login-page'>
        <LoginForm onLogin={onLogin}/>
    </div>
)

LoginPage.propTypes = {
    onLogin: PropTypes.func.isRequired
}

export default LoginPage
