import {NOTIFICATION_REMOVE} from './notificationTypes'

// eslint-disable-next-line import/prefer-default-export
export const removeNotification = (id) => ({type: NOTIFICATION_REMOVE, payload: id})
