import PropTypes from 'prop-types'
import React from 'react'
import {connect} from 'react-redux'
import Notification from './Notification'
import {removeNotification} from './notificationActions'

class NotificationContainer extends React.Component {
    render() {
        if (this.props.messages.length === 0) return null

        return this.props.messages.map((message) => (
            <Notification
                key={message.id}
                message={message.value}
                onClose={() => this.props.removeNotification(message.id)}
            />
        ))
    }
}

NotificationContainer.propTypes = {
    removeNotification: PropTypes.func.isRequired,
    messages: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
    messages: state.notifications.messages,
})

export default connect(mapStateToProps, {removeNotification})(NotificationContainer)
