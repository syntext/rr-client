import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import AppContainer from './app/AppContainer'
import store from './app/store'

ReactDOM.render(
    <Provider store={store}>
        <AppContainer/>
    </Provider>,
    document.getElementById('app'),
)
