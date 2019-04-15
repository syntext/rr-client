import PropTypes from 'prop-types'
import React from 'react'
import {Link} from 'react-router-dom'
import Restricted from '../auth/Restricted'
import './NavBar.scss'

const NavBar = ({location, auth}) => (
    <div className='nav-bar'>
        <ul>
            <li>
                <Link to='/' className={location.pathname === '/' ? 'active' : null}>
                    Posts
                </Link>
            </li>
            <li>
                <Link to='/users' className={location.pathname === '/users' ? 'active' : null}>
                    Users
                </Link>
            </li>
            <li className='pull-right'>
                <Restricted auth={auth} inverse>
                    <Link to='/login'>
                        Login
                    </Link>
                </Restricted>
                <Restricted auth={auth}>
                    <Link to='/logout'>
                        Logout
                    </Link>
                </Restricted>
            </li>
        </ul>
    </div>
)

NavBar.propTypes = {
    location: PropTypes.object.isRequired,
    auth: PropTypes.object,
}

NavBar.defaultProps = {
    auth: {}
}

export default NavBar
