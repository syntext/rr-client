import React from 'react'
import {connect} from 'react-redux'
import {Route, Router, Switch} from 'react-router-dom'
import LoginPageContainer from '../auth/LoginPageContainer'
import LogoutPageContainer from '../auth/LogoutPageContainer'
import PostPageContainer from '../post/PostPageContainer'
import UserPageContainer from '../user/UserPageContainer'
import RestrictedRoute from './common/RestrictedRoute'
import Header from './Header'
import history from './history'
import PageNotFound from './PageNotFound'

const AppRouter = () => (
    <Router history={history}>
        <Route path='/' component={Header}/>
        <div className='body-wrapper'>
            <Switch>
                <Route path='/' exact component={PostPageContainer}/>
                <Route path='/login' component={LoginPageContainer}/>
                <Route path='/logout' component={LogoutPageContainer}/>
                <RestrictedRoute path='/users' component={UserPageContainer}/>
                <Route component={PageNotFound}/>
            </Switch>
        </div>
    </Router>
)

export default connect(null, null)(AppRouter)
