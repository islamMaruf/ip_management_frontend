
import AuthService from '@/services/api/AuthService';
import CookieService from '@/services/core/CookieService';
import axios from 'axios';
import router from '@/router';

const axios_instance = axios.create({
    timeout: 1000,
    baseURL: process.env.VUE_APP_BASE_URL
});

axios_instance.interceptors.request.use(
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


axios_instance.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        console.log(error.response, error.response.status, router.history.current.meta.auth)
        if (error.response && error.response.status == 401 && router.history.current.meta.auth) {
            error.config.retries = error.config.retries || 0;
            const maxRetries = 5;
            if (error.config.retries < maxRetries) {
                error.config.retries++;
                const original_request = error.config;
                try {
                    const response = await AuthService.refreshToken();
                    if (response.status == 200 && response.data.status && response.data.data.access_token) {
                        let new_access_token = response.data.data.access_token;
                        CookieService.setCookie('token', new_access_token, 1);
                        original_request.headers.Authorization = `Bearer ${new_access_token}`;
                    }
                } catch (refreshError) {
                    // throw error;
                }
                return axios_instance(original_request);
            }
        }
        else if (error.response && error.response.status == 403) {
            CookieService.deleteCookie('token');
            if (router.history.current.name != "Login") {
                router.push({ name: 'Login' }).catch(console.error);
            };
            return;
        }
        return Promise.reject(error);
    }
);
export default axios_instance;
