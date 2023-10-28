import axios from 'axios';
import router from '@/router';
import CookieService from '@/services/core/CookieService';
import AuthService from '@/services/api/AuthService';

const axiosInstance = axios.create({
    baseURL: process.env.VUE_APP_BASE_URL,
    timeout: 1000,
});

axiosInstance.interceptors.request.use(
    addAuthorizationHeader,
    error => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
    handleResponse,
    handleErrorResponse
);

function addAuthorizationHeader(config) {
    const token = CookieService.getCookie('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}

async function handleResponse(response) {
    return response;
}

async function handleErrorResponse(error) {
    if (error.response) {
        const status = error.response.status;
        if (status === 401) {
            return handleAuthenticationError(error);
        } else if (status === 403 || status === 429) {
            return handleForbiddenAndTooManyRequestError(error);
        }
    }

    return Promise.reject(error);
}

async function handleAuthenticationError(error) {
    error.config.retries = error.config.retries || 0;
    const maxRetries = 5;

    if (error.config.retries < maxRetries) {
        error.config.retries++;
        const originalRequest = error.config;

        try {
            const response = await AuthService.refreshToken();

            if (response.status === 200 && response.data.success && response.data.data.access_token) {
                const newAccessToken = response.data.data.access_token;
                CookieService.setCookie('token', newAccessToken, 1);
                originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
                return axiosInstance(originalRequest);
            }
        } catch (refreshError) {
            throw refreshError;
        }
    }

    return Promise.reject(error);
}

function handleForbiddenAndTooManyRequestError(error) {
    CookieService.deleteCookie('token');
    if (router.name !== 'Login') {
        router.push('/');
    }
}

export default axiosInstance;
