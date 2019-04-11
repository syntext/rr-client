import {put} from 'redux-saga/effects'
import {NOTIFICATION_ADD} from '../notification/notificationTypes'

export const putApiException = (e) => put({
    type: NOTIFICATION_ADD,
    payload: {message: e.response.data.message, httpResponse: e.response}
})
