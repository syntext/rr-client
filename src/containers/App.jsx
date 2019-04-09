import React from 'react'
import {Provider} from 'react-redux'
import store from '../store'
import PostForm from '../presentation/PostForm/PostForm'
import PostList from '../presentation/PostList/PostList'

const App = () => (
    <Provider store={store}>
        <PostForm/>
        <PostList/>
    </Provider>
)

export default App
