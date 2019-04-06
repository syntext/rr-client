import React from "react"
import "./ExampleComponent.scss"

const ExampleComponent = (props) => {
    const {name, age} = props

    return <div className='example-component-box'>
        This is an example component.<br/>
        My name is {name} and I wish I was still {age} years old!
    </div>
}

export default ExampleComponent
