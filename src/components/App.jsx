import React from 'react'
import './App.scss'
import ExampleComponent from './ExampleComponent/ExampleComponent'

class App extends React.Component {
    render() {
        return (
            <>
                <div className='large-text'>
                    Hello world! :)
                </div>
                <ExampleComponent name='John Doe' age='25' />
            </>
        )
    }
}

export default App
