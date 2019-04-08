import {applyMiddleware, compose, createStore} from 'redux'
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import rootSaga from './sagas'

/* eslint-disable no-underscore-dangle */
const composeEnhancers = typeof window === 'object'
&& window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose
/* eslint-enable */

const initialState = {}

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(
        applyMiddleware(
            thunk,
            sagaMiddleware
        ),
    )
)

sagaMiddleware.run(rootSaga)

export default store
