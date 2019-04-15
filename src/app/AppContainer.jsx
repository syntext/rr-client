import PropTypes from 'prop-types'
import React from 'react'
import {connect} from 'react-redux'
import {Route, Router, Switch} from 'react-router-dom'
import LoginPageContainer from '../auth/LoginPageContainer'
import LogoutPageContainer from '../auth/LogoutPageContainer'
import RestrictedRoute from '../auth/RestrictedRoute'
import NotificationContainer from '../notification/NotificationContainer'
import PostPageContainer from '../post/PostPageContainer'
import UserPageContainer from '../user/UserPageContainer'
import history from './history'
import PageNotFound from './PageNotFound'

class AppContainer extends React.Component {
    componentDidMount() {
        window.addEventListener('authRequired', () => {
            setTimeout(() => history.push('/login'))
        })
    }

    render() {
        return (
            <>
                <Router history={history}>
                    <Switch>
                        <Route path='/' exact component={PostPageContainer}/>
                        <Route path='/login' component={LoginPageContainer}/>
                        <Route path='/logout' component={LogoutPageContainer}/>
                        <RestrictedRoute path='/users' component={UserPageContainer} auth={this.props.auth}/>
                        <Route component={PageNotFound}/>
                    </Switch>
                </Router>
                <NotificationContainer/>
            </>
        )
    }
}

AppContainer.propTypes = {
    auth: PropTypes.object
}

AppContainer.defaultProps = {
    auth: {}
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, null)(AppContainer)
