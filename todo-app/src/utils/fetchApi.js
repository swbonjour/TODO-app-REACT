const axios = require("axios");

class fetchApi {
    async getTasks() {
        const { data } = await axios.get("http://localhost:3000/tasks/get-tasks");
        return data;
    }

    async getTaskById(id) {
        const { data } = await axios.get("http://localhost:3000/tasks/get-task/" + id);
        return data;
    }

    async createTask(todo) {
        return await axios.post("http://localhost:3000/tasks/create", {
            todo: todo
        });
    }

    async deleteTasks() {
        return await axios.delete("http://localhost:3000/tasks/delete-all");
    }
}

module.exports = new fetchApi();