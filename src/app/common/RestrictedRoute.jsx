import PropTypes from 'prop-types'
import React from 'react'
import {connect} from 'react-redux'
import {Redirect, Route} from 'react-router-dom'

const RestrictedRoute = ({component: Component, auth, ...rest}) => (
    <Route
        render={(props) => (
            auth.authenticated === true
                ? <Component {...props}/>
                : <Redirect to='/login'/>
        )}
        {...rest}
    />
)

RestrictedRoute.propTypes = {
    component: PropTypes.func.isRequired,
    auth: PropTypes.object
}

RestrictedRoute.defaultProps = {
    auth: {}
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, null)(RestrictedRoute)
