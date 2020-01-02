import axios from 'axios';

export const executeAnonymousEndpoint = () => {
    const url = 'http://localhost:15964/home/noauth';
    return axios.get(url);
}

export const executeAuthenticatedEndpoint = () => {
    return (dispatch, getState) => {
        let user = getState().oidc.user;
        let config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.access_token}`
            }
        }
        console.log('token', config.headers.Authorization)
        const url = 'http://localhost:15964/home/auth';
        return axios.get(url, config);
    }
}