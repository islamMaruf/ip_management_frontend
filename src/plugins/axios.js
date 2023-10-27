import axios from 'axios';
console.log(process.env)
const axiosInstance = axios.create({
    baseURL: process.env.VUE_APP_BASE_URL,
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

export default axiosInstance;
