import _axiosInstance from "../../plugins/axios";

export default {
    async login(payload) {
        try {
            let { data } = await _axiosInstance.post('/api/auth/login', payload);
            return data;
        } catch (error) {
            console.log('hitted')
            throw error;
        }
    },
    async refreshToken(payload) {
        try {
            return await _axiosInstance.post('/api/auth/refresh');
        } catch (error) {
            throw error;
        }
    },
    async getLoggedInUser(){
        try {
            let {data} =  await _axiosInstance.post('/api/auth/user-profile');
            return data
        } catch (error) {
            throw error;
        }
    }
};