import {put} from 'redux-saga/effects'
import {NOTIFICATION_ADD} from '../notification/notificationTypes'

export const putApiExceptionNotification = (e) => {
    const message = e.response ? e.response.data.message : 'API Exception'
    const httpResponse = e.response || {}
    return put({
        type: NOTIFICATION_ADD,
        payload: {message, httpResponse}
    })
}
