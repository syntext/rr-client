import React from 'react'
import {Provider} from 'react-redux'
import store from '../store'
import './App.scss'
import PostForm from './PostForm/PostForm'
import PostList from './PostList/PostList'

const App = () => (
    <Provider store={store}>
        <PostForm/>
        <PostList/>
    </Provider>
)

export default App
