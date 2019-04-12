import {USER_LOGOUT} from './authActionTypes'

export default () => (next) => (reducer, initialState, enhancer) => {
    /**
     * Sets complete redux store to its initial state on USER_LOGOUT
     *
     * @param state
     * @param action
     * @returns {*}
     */
    const enhance = (state, action) => {
        let nextState = state
        if (action.type === USER_LOGOUT) {
            nextState = initialState
        }
        return reducer(nextState, action)
    }

    return next(enhance, initialState, enhancer)
}
