import React from 'react'
import {Link} from 'react-router-dom'
import RestrictedContainer from '../auth/RestrictedContainer'
import './Header.scss'

const Header = () => (
    <div className='header'>
        <ul>
            <li>
                <Link to='/'>Posts</Link>
            </li>
            <li>
                <Link to='/users'>Users</Link>
            </li>
            <li className='pull-right'>
                <RestrictedContainer inverse>
                    <Link to='/login' className='active'>Login</Link>
                </RestrictedContainer>
                <RestrictedContainer>
                    <Link to='/logout' className='active'>Logout</Link>
                </RestrictedContainer>
            </li>
        </ul>
    </div>
)

export default Header
