import axios from 'axios';
import history from './history'

axios.interceptors.request.use((config) => {
    const token = window.localStorage.getItem('token')

    if (token !== null) {
        config.headers['X-Auth-Token'] = token;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
})

axios.interceptors.response.use((response) => {
    if (response.status === 200) {
        if (response.headers['x-auth-token'])
        window.localStorage.setItem('token', response.headers['x-auth-token']);
    }
    return response;
}, (error) => {
    if (error.response.status === 401) {
        localStorage.clear()
        history.push("/login")
    }
    return Promise.reject(error);
})
