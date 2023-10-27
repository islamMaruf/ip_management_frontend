import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.BASE_URL,
    timeout: 1000,
});

function setupRequestInterceptor(config) {
    const token = '';
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}

axiosInstance.interceptors.request.use(
    setupRequestInterceptor,
    (error) => Promise.reject(error)
);



axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        
        return Promise.reject(error);
    }
);

export default {
    install: (Vue) => {
        Vue.prototype.$axios = axiosInstance;
    },
};
