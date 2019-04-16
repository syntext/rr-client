import PropTypes from 'prop-types'
import React from 'react'
import {connect} from 'react-redux'
import {addAuthRequiredEventListener} from '../auth/authEventListeners'
import I18nContainer from '../i18n/I18nContainer'
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
                {this.props.isFetching && 'fetching...'}
                <I18nContainer>
                    <NotificationContainer/>
                    <AppRouter auth={this.props.auth}/>
                </I18nContainer>
            </>
        )
    }
}

AppContainer.propTypes = {
    auth: PropTypes.object,
    isFetching: PropTypes.bool.isRequired,
}

AppContainer.defaultProps = {
    auth: {}
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    isFetching: state.app.isFetching
})

export default connect(mapStateToProps, null)(AppContainer)
