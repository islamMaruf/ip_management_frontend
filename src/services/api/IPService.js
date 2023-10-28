import _axiosInstance from "@/plugins/axios";

export default {

    async all() {
        try {
            let { data } = await _axiosInstance.get('/api/ip');
            return data;
        } catch (error) {
            throw error;
        }
    },

    async createIP(payload) {
        try {
            let { data } = await _axiosInstance.post('/api/ip', payload);
            return data
        } catch (error) {
            throw error;
        }
    },

    async updateIP(ip, payload) {
        try {
            let {data} = await _axiosInstance.patch(`/api/ip/${ip}`, payload);
            return data;
        } catch (error) {
            throw error;
        }
    },

    async showIP(ip) {
        try {
            let {data} =  await _axiosInstance.get(`/api/ip/${ip}`);
            return data;
        } catch (error) {
            throw error;
        }
    },

    async deleteIP() {
        try {
            return await _axiosInstance.delete(`/api/ip/${ip}`)
        } catch (error) {
            throw error;

        }
    }

};