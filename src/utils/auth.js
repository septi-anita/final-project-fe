import axios from "axios";
import Cookies from "js-cookie";

const AUTH_TOKEN ='auth_token'
const REFRESH_TOKEN = 'refresh_token'

export const setToken = (token) => {
    Cookies.set(AUTH_TOKEN, token);
}

export const getToken =() => Cookies.get(AUTH_TOKEN);
export const removeToken = () => Cookies.remove(AUTH_TOKEN);

export const setRefreshToken = (token) => {
    Cookies.set(REFRESH_TOKEN, token);
}

export const getRefreshToken =() => Cookies.get(REFRESH_TOKEN);
export const removeRefreshToken = () => Cookies.remove(REFRESH_TOKEN);

export const httpService = axios.create({
    //baseURL: 'https://api.escuelajs.co/api/v1'
    baseURL: 'http://172.16.148.101:8883/api/v1'
})

httpService.interceptors.request.use((config)=>{
    const token = getToken();
    if (token) {
        config.headers.Authorization =`Bearer ${token}`
    }
    return config
    },
    (error) => Promise.reject(error)
)