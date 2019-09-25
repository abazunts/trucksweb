import * as axios from "axios";

export const samuraiAPI = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        'API-KEY': '0e5c6193-92d9-43fa-8815-9bba27fab0ab'
    }
})