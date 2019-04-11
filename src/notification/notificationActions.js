import {NOTIFICATION_REMOVE} from './notificationTypes'

export const removeNotification = (id) => ({type: NOTIFICATION_REMOVE, payload: id})
