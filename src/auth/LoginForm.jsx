import PropTypes from 'prop-types'
import React from 'react'
import './LoginForm.scss'

const LoginForm = ({onSubmitLogin}) => (
    <div className='login-form'>
        <form onSubmit={onSubmitLogin}>
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
    onSubmitLogin: PropTypes.func.isRequired
}

export default LoginForm
