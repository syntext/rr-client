import shortId from 'shortid'
import {NOTIFICATION_ADD, NOTIFICATION_REMOVE} from './notificationTypes'

const initialState = {
    messages: [],
}

const addNotification = (state, {message, httpResponse}) => {
    const result = message || (httpResponse ? `${httpResponse.status} ${httpResponse.statusText}`.trim() : 'null')
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
            return addNotification(state, action.payload)
        case NOTIFICATION_REMOVE:
            return removeNotification(state, action.payload)
        default:
            return state
    }
}
