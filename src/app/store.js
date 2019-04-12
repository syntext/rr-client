import {applyMiddleware, createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension' /* eslint-disable-line */
import createSagaMiddleware from 'redux-saga'
import authStoreEnhancer from '../auth/authStoreEnhancer'
import rootReducer from './reducers'
import rootSaga from './sagas'

const initialState = {}

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
        authStoreEnhancer(),
        applyMiddleware(
            sagaMiddleware,
        ),
    )
)

sagaMiddleware.run(rootSaga)

export default store
