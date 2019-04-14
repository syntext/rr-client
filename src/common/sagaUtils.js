import {NOTIFICATION_ADD} from '../notification/notificationTypes'

export const createApiExceptionNotificationAction = (e) => {
    const message = e.response ? e.response.data.message : 'API Exception'
    const httpResponse = e.response || {}
    return {
        type: NOTIFICATION_ADD,
        payload: {message, httpResponse}
    }
}
