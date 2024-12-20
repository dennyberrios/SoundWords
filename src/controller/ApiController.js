import { axiosInstance } from "../services/Http/apiCliente";

class APIController {
    async fetchData(endpoint) {
        try {
            const response = await axiosInstance.get(endpoint);
            return response.data;
        } catch (error) {
            console.error({MSG: "Error fetch data:", error});
            throw error
        }
    }

    async postData(endpoint, data) {
        try {
            const response = await axiosInstance.post(endpoint, data)
            return response.data;
        } catch (error) {
            console.error({MSG: "Error POST data:", error});
            throw error
        }
    }

    async putData(endpoint, data){
        try {
            const response = await axiosInstance.put(endpoint, data)
            return response.data;
        } catch (error) {
            console.error({MSG: "Error PUT data:", error});
            throw error
        }
    }

    async deleteData(endpoint, data) {
        try {
            await axiosInstance.put(endpoint, data)
        } catch (error) {
            console.error({MSG: "Error DELETE data:", error});
            throw error
        }
    }
}

export default new APIController();