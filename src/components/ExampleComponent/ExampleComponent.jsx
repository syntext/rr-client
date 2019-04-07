import React from "react"
import "./ExampleComponent.scss"

const ExampleComponent = ({name, age}) => {
    return <div className='example-component-wrapper'>
        This is an example component.<br/>
        My name is {name} and I wish I was still {age} years old!
    </div>
}

export default ExampleComponent
