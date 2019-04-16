import history from '../app/history'

// eslint-disable-next-line import/prefer-default-export
export const addAuthRequiredEventListener = () => {
    window.addEventListener('authRequired', () => {
        setTimeout(() => history.push('/login'))
    })
}
