import _axiosInstance from "../../plugins/axios";

export default {
    async login(payload) {
        try {
            let { data } = await _axiosInstance.post('/api/auth/login', payload);
            return data;
        } catch (error) {
            throw error;
        }
    },
    async refreshToken() {
        try {
            return await _axiosInstance.post('/api/auth/refresh');
        } catch (error) {
            throw error;
        }
    },
    async getLoggedInUser() {
        try {
            return await _axiosInstance.get('/api/auth/user-profile');
        } catch (error) {
            throw error;
        }
    },
    async logout(){
        try{
            return await _axiosInstance.post("/api/auth/logout")
        }catch(error){
            throw error;

        }
    }

};