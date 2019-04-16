import {NOTIFICATION_ADD} from '../notification/notificationTypes'

// eslint-disable-next-line import/prefer-default-export
export const createApiExceptionNotificationAction = (e) => {
    const message = e.response ? e.response.data.message : 'API Exception'
    const httpResponse = e.response || {}
    return {
        type: NOTIFICATION_ADD,
        payload: {message, httpResponse}
    }
}
