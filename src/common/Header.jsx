import React from 'react'
import {Link} from 'react-router-dom'
import './Header.scss'

const Header = () => (
    <div className='header'>
        <ul>
            <li><Link to='/'>Posts</Link></li>
            <li><Link to='/users'>Users</Link></li>
            <li className='pull-right'><Link to='/logout' className='active'>Logout</Link></li>
        </ul>
    </div>
)

export default Header
