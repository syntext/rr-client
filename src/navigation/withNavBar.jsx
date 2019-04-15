import React from 'react'
import NavBarContainer from './NavBarContainer'

const withNavBar = (Component) => (props) => (
    <>
        <NavBarContainer {...props}/>
        <Component {...props}/>
    </>
)

export default withNavBar
