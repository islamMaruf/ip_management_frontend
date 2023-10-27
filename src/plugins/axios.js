
import axios from 'axios';
import router from '../router';
import CookieService from '../services/core/CookieService';
import AuthService from '@/services/api/AuthService';

console.log(process.env);
const _axiosInstance = axios.create({
    baseURL: process.env.VUE_APP_BASE_URL,
    timeout: 1000,
});

_axiosInstance.interceptors.request.use(
    (config) => {
        const token = CookieService.getCookie('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);


_axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        if (error.response && error.response.status == 401 && router.history.current.meta.auth) {
            error.config.retries = error.config.retries || 0;
            const maxRetries = 10;
            if (error.config.retries < maxRetries) {
                error.config.retries++;
                try {
                    const response = await AuthService.refreshToken();
                    const original_request = error.config;
                    if (response.status == 200 && response.data.status && response.data.data.access_token) {
                        let new_access_token = response.data.data.access_token;
                        CookieService.setCookie('token', new_access_token, 1);
                        original_request.headers.Authorization = `Bearer ${new_access_token}`;
                    }
                    return _axiosInstance(original_request);
                } catch (refreshError) {
                    throw refreshError;
                }
            }
        }
        else if (error.response && error.response.status == 403) {
            CookieService.deleteCookie('token');
            router.push({ name: 'Login' });
        }
        return Promise.reject(error);
    }
);
export default _axiosInstance;
