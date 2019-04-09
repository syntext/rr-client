import React from 'react'
import {Provider} from 'react-redux'
import AppRouter from './AppRouter'
import store from './store'
import './styles.scss'

const AppContainer = () => (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
)

export default AppContainer
