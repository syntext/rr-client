import React from 'react'
import './App.scss'
import ExampleComponent from './ExampleComponent/ExampleComponent'

const App = () => (
    <>
        <div className='large-text'>
            Hello world! :)
        </div>
        <ExampleComponent name='John Doe' age='25'/>
    </>
)

export default App
