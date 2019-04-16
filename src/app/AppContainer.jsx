import PropTypes from 'prop-types'
import React from 'react'
import {connect} from 'react-redux'
import {addAuthRequiredEventListener} from '../auth/authEventListeners'
import NotificationContainer from '../notification/NotificationContainer'
import AppRouter from './AppRouter'
import './styles.scss'

class AppContainer extends React.Component {
    componentDidMount() {
        addAuthRequiredEventListener()
    }

    render() {
        return (
            <>
                <NotificationContainer/>
                <AppRouter auth={this.props.auth}/>
            </>
        )
    }
}

AppContainer.propTypes = {
    auth: PropTypes.object
}

AppContainer.defaultProps = {
    auth: {}
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, null)(AppContainer)
