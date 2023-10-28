import _axiosInstance from "../../plugins/axios";

export default {
    async all() {
        try {
            let { data } = await _axiosInstance.get('/api/activity-logger');
            return data;
        } catch (error) {
            throw error;
        }
    }

};