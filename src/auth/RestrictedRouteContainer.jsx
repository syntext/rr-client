import PropTypes from 'prop-types'
import React from 'react'
import {connect} from 'react-redux'
import {NavLink, Route} from 'react-router-dom'

const RestrictedRouteContainer = ({component: Component, auth, ...rest}) => (
    <Route
        {...rest}
        render={(props) => (
            auth.token !== null
                ? <Component {...props}/>
                : (
                    <div className='restricted-content'>
                        You need to be logged in to access this page. Click <NavLink to='/login'>here</NavLink> to login.
                    </div>
                )
        )}
    />
)

RestrictedRouteContainer.propTypes = {
    component: PropTypes.func.isRequired,
    auth: PropTypes.object
}

RestrictedRouteContainer.defaultProps = {
    auth: {}
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, null)(RestrictedRouteContainer)
