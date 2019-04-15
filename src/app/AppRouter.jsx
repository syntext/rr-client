import PropTypes from 'prop-types'
import React from 'react'
import {Route, Router, Switch} from 'react-router-dom'
import LoginPageContainer from '../auth/LoginPageContainer'
import LogoutPageContainer from '../auth/LogoutPageContainer'
import RestrictedRoute from '../auth/RestrictedRoute'
import PostPageContainer from '../post/PostPageContainer'
import UserPageContainer from '../user/UserPageContainer'
import history from './history'
import PageNotFound from './PageNotFound'

const AppRouter = ({auth}) => (
    <Router history={history}>
        <Switch>
            <Route path='/' exact component={PostPageContainer}/>
            <Route path='/login' component={LoginPageContainer}/>
            <Route path='/logout' component={LogoutPageContainer}/>
            <RestrictedRoute path='/users' component={UserPageContainer} auth={auth}/>
            <Route component={PageNotFound}/>
        </Switch>
    </Router>
)

AppRouter.propTypes = {
    auth: PropTypes.object
}

AppRouter.defaultProps = {
    auth: {}
}

export default AppRouter
