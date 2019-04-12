import PropTypes from 'prop-types'
import React from 'react'
import './LoginForm.scss'

const LoginForm = ({onLogin: loginUser}) => {
    const submitHandler = (e) => {
        e.preventDefault()
        loginUser(e.target.username.value, e.target.password.value)
    }

    return (
        <div className='login-form'>
            <form onSubmit={submitHandler}>
                <label htmlFor='username'>
                    Username
                    <input type='text' name='username' id='username' defaultValue='demo' required/>
                </label>

                <label htmlFor='username'>
                    Password
                    <input type='password' name='password' id='password' defaultValue='demo' required/>
                </label>

                <button type='submit'>
                    Login
                </button>
            </form>
        </div>
    )
}

LoginForm.propTypes = {
    onLogin: PropTypes.func.isRequired
}

export default LoginForm
