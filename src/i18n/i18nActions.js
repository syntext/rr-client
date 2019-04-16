import {I18N_LANGUAGE_SWITCH} from './i18nActionTypes'

export const switchLanguage = (data) => (
    {type: I18N_LANGUAGE_SWITCH, payload: data}
)
