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

    async getCompletedTasks() {
        const { data } = await axios.get("http://localhost:3000/tasks/get-completed-tasks");
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

    async deleteTaskById(id) {
        return await axios({
            method: "delete",
            url: "http://localhost:3000/tasks/delete-task",
            headers: {"Content-Type": "application/json"},
            data: { id: id }
        });
    }

    async updateTask(id, todo, state) {
        return await axios.put("http://localhost:3000/tasks/update", {
            id: id,
            todo: todo,
            state: state || false
        })
    }
}

module.exports = new fetchApi();