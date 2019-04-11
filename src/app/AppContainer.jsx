import React from 'react'
import {connect} from 'react-redux'
import {Route, Router, Switch} from 'react-router-dom'
import LoginPageContainer from '../auth/LoginPageContainer'
import LogoutPageContainer from '../auth/LogoutPageContainer'
import RestrictedRouteContainer from '../auth/RestrictedRouteContainer'
import NotificationContainer from '../notification/NotificationContainer'
import PostPageContainer from '../post/PostPageContainer'
import UserPageContainer from '../user/UserPageContainer'
import Header from './Header'
import history from './history'
import PageNotFound from './PageNotFound'

const AppContainer = () => (
    <Router history={history}>
        <Route path='/' component={Header}/>
        <div className='body-wrapper'>
            <NotificationContainer/>
            <Switch>
                <Route path='/' exact component={PostPageContainer}/>
                <Route path='/login' component={LoginPageContainer}/>
                <Route path='/logout' component={LogoutPageContainer}/>
                <RestrictedRouteContainer path='/users' component={UserPageContainer}/>
                <Route component={PageNotFound}/>
            </Switch>
        </div>
    </Router>
)

export default connect(null, null)(AppContainer)
