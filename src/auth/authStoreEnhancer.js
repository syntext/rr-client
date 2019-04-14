import {AUTH_REQUIRED, USER_LOGOUT} from './authActionTypes'

export default () => (next) => (reducer, initialState, enhancer) => {
    /**
     * Sets complete redux store to its initial state when user logs out
     * or authentication is expired/required
     *
     * @param state
     * @param action
     * @returns {*}
     */
    const enhance = (state, action) => {
        let nextState = state
        switch (action.type) {
            case USER_LOGOUT:
            case AUTH_REQUIRED:
                nextState = initialState
                break
            default:
        }
        return reducer(nextState, action)
    }

    return next(enhance, initialState, enhancer)
}
