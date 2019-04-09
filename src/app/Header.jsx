import React from 'react'
import {Link} from 'react-router-dom'
import Restrict from './common/Restrict'
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
                <Restrict inverse>
                    <Link to='/login' className='active'>Login</Link>
                </Restrict>
                <Restrict>
                    <Link to='/logout' className='active'>Logout</Link>
                </Restrict>
            </li>
        </ul>
    </div>
)

export default Header
