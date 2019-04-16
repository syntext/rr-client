import history from '../app/history'

export const addAuthRequiredEventListener = () => {
    window.addEventListener('authRequired', () => {
        setTimeout(() => history.push('/login'))
    })
}
