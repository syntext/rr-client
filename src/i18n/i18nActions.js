import {I18N_LANGUAGE_SWITCH} from './i18nActionTypes'

// eslint-disable-next-line import/prefer-default-export
export const switchLanguage = (data) => (
    {type: I18N_LANGUAGE_SWITCH, payload: data}
)
