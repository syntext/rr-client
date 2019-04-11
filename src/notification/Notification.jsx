import PropTypes from 'prop-types'
import React from 'react'
import './Notification.scss'

const Notification = ({message, onClose}) => (
    <div className='notification'>
        {message}
        <button type='button' onClick={onClose}>Close</button>
    </div>
)

Notification.propTypes = {
    message: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
    onClose: PropTypes.func.isRequired
}

export default Notification
