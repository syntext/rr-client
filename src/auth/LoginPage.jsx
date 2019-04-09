import PropTypes from 'prop-types'
import React from 'react'
import LoginForm from './LoginForm'
import './LoginPage.scss'

const LoginPage = ({onSubmitLogin}) => (
    <div className='login-page'>
        <LoginForm onSubmitLogin={onSubmitLogin}/>
    </div>
)

LoginPage.propTypes = {
    onSubmitLogin: PropTypes.func.isRequired
}

export default LoginPage
