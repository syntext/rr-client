import {I18N_LANGUAGE_SWITCH} from './i18nActionTypes'

const initialState = {
    language: 'en',
}

export default (state = initialState, action) => {
    switch (action.type) {
        case I18N_LANGUAGE_SWITCH:
            return {
                ...state,
                language: action.payload,
            }
        default:
            return state
    }
}
