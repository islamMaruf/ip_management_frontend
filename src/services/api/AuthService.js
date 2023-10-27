import _axiosInstance from "../../plugins/axios";

export default {
    async login(payload) {
        try {
            let {data} =  await _axiosInstance.post('/api/auth/login', payload);
            return data;
        } catch (error) {
            throw error;
        }
    }
};