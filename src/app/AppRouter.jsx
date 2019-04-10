import PropTypes from 'prop-types'
import React from 'react'
import {connect} from 'react-redux'
import {Redirect, Route, Router} from 'react-router-dom'
import {logoutUser} from '../auth/authActions'
import LoginPageContainer from '../auth/LoginPageContainer'
import PostPageContainer from '../post/PostPageContainer'
import UserPageContainer from '../user/UserPageContainer'
import RestrictedRoute from './common/RestrictedRoute'
import Header from './Header'
import history from './history'

const AppRouter = (props) => (
    <Router history={history}>
        <Route path='/' component={Header}/>
        <div className='body-wrapper'>
            <Route path='/' exact component={PostPageContainer}/>
            <Route path='/login' component={LoginPageContainer}/>
            <Route
                path='/logout'
                render={() => {
                    props.logoutUser()
                    return <Redirect to='/'/>
                }}
            />
            <RestrictedRoute path='/users' component={UserPageContainer}/>
        </div>
    </Router>
)

AppRouter.propTypes = {
    logoutUser: PropTypes.func.isRequired
}

export default connect(null, {logoutUser})(AppRouter)
