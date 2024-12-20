import ApiController from "./ApiController";

class NotePadController {
    async getNotePad() {
        try {
            const notePadData = await ApiController.fetchData("/notepad");
            return notePadData;
        } catch (error) {
            console.error({ MSG: "Error GET NotePad Details:", error });
            throw error
        }
    }

    async postNotePad(data) {
        try {
            const notePadData = await ApiController.postData(`/notepad`, data);
            return notePadData;
        } catch (error) {
            console.error({ MSG: "Error POST NotePad Details:", error });
            throw error
        }
    }

    async putNotePad(data, NotePadId) {
        try {
            const notePadData = await ApiController.putData(`/notepad/${NotePadId}`, data);
            return notePadData;
        } catch (error) {
            console.error({ MSG: "Error PUT NotePad Details:", error });
            throw error
        }
    }

    async deleteNotePad(NotePadId) {
        try {
            const notePadData = await ApiController.deleteData(`/notepad/${NotePadId}`);
            return notePadData;
        } catch (error) {
            console.error({ MSG: "Error DELETE NotePad Details:", error });
            throw error
        }
    }
}

export default new NotePadController()