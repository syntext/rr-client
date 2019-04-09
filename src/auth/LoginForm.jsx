import PropTypes from 'prop-types'
import React from 'react'
import './LoginForm.scss'

const LoginForm = ({onLogin}) => (
    <div className='login-form'>
        <form onSubmit={onLogin}>
            <label htmlFor='username'>
                Username
                <input type='text' name='username' id='username'/>
            </label>

            <label htmlFor='username'>
                Password
                <input type='password' name='password' id='password'/>
            </label>

            <button type='submit'>
                Login
            </button>
        </form>
    </div>
)

LoginForm.propTypes = {
    onLogin: PropTypes.func.isRequired
}

export default LoginForm
