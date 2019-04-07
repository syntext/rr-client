import PropTypes from 'prop-types'
import React from 'react'
import './ExampleComponent.scss'

const ExampleComponent = ({name, age}) => (
    <div className='example-component-wrapper'>
        This is an example component...
        <br/>
        My name is {name} and I wish I was still {age} years old!
    </div>
)

ExampleComponent.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired,
}

export default ExampleComponent
