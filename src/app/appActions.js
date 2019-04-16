import {APP_FETCHING_START, APP_FETCHING_SUCCESS} from './appActionTypes'

export const appFetchingStart = () => (
    {type: APP_FETCHING_START}
)

export const appFetchingSuccess = () => (
    {type: APP_FETCHING_SUCCESS}
)
