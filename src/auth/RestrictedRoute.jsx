import PropTypes from 'prop-types'
import React from 'react'
import {NavLink, Route} from 'react-router-dom'

const RestrictedRoute = ({component: Component, auth, ...rest}) => (
    <Route
        {...rest}
        render={(props) => (
            auth.token !== null
                ? <Component {...props}/>
                : (
                    <div className='page restricted-content'>
                        You need to be logged in to access this page. Click <NavLink to='/login'>here</NavLink> to login.
                    </div>
                )
        )}
    />
)

RestrictedRoute.propTypes = {
    component: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

export default RestrictedRoute
