import PropTypes from 'prop-types'
import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import NavBar from './NavBar'

const NavBarContainer = ({auth, ...props}) => (
    <NavBar auth={auth} {...props}/>
)

NavBarContainer.propTypes = {
    auth: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default withRouter(connect(mapStateToProps, null)(NavBarContainer))
