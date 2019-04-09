import React from 'react'
import {Provider} from 'react-redux'
import {BrowserRouter, Route} from 'react-router-dom'
import Header from '../common/Header'
import store from '../store'
import Posts from './Posts'
import Users from './Users'

const App = () => (
    <Provider store={store}>
        <BrowserRouter>
            <Header/>
            <div className='body'>
                <Route path='/' exact component={Posts}/>
                <Route path='/users' exact component={Users}/>
            </div>
        </BrowserRouter>
    </Provider>
)

export default App
