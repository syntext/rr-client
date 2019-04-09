import React from 'react'
import {Provider} from 'react-redux'
import {BrowserRouter, Route} from 'react-router-dom'
import LoginPageContainer from '../auth/LoginPageContainer'
import PostPageContainer from '../post/PostPageContainer'
import UserPageContainer from '../user/UserPageContainer'
import Header from './common/Header'
import RestrictedRoute from './common/RestrictedRoute'
import store from './store'

const AppContainer = () => (
    <Provider store={store}>
        <BrowserRouter>
            <Route path='/' component={Header}/>
            <div className='body-wrapper'>
                <Route path='/' exact component={PostPageContainer}/>
                <Route path='/login' component={LoginPageContainer}/>
                <RestrictedRoute path='/users' component={UserPageContainer}/>
            </div>
        </BrowserRouter>
    </Provider>
)

export default AppContainer
