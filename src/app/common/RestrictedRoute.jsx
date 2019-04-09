import PropTypes from 'prop-types'
import React from 'react'
import {connect} from 'react-redux'
import {Redirect, Route} from 'react-router-dom'

class RestrictedRoute extends React.Component {
    render() {
        const {component: Component, auth, ...rest} = this.props
        return (
            <Route
                {...rest}
                render={(props) => (
                    auth.authenticated === true
                        ? <Component {...props}/>
                        : <Redirect to='/login'/>
                )}
            />
        )
    }
}

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
