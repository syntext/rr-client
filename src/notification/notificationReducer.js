import shortId from 'shortid'
import {NOTIFICATION_ADD, NOTIFICATION_REMOVE} from './notificationTypes'

const initialState = {
    messages: [],
    infoMessages: [],
}

const addNotification = (state, message, httpResponse) => {
    const result = message || `${httpResponse.status} ${httpResponse.statusText}`
    return {
        messages: [
            ...state.messages,
            {id: shortId.generate(), value: result}
        ]
    }
}

const removeNotification = (state, id) => ({
    messages: state.messages.filter((message) => message.id !== id)
})

export default (state = initialState, action) => {
    switch (action.type) {
        case NOTIFICATION_ADD:
            return addNotification(state, action.payload.message, action.payload.httpResponse)
        case NOTIFICATION_REMOVE:
            return removeNotification(state, action.payload)
        default:
            return state
    }
}
