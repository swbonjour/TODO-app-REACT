const mongoose = require("mongoose");
const Task = require("../Model/task.js");

class tasksController {
    async getTasks(req, res) {
        try {
            const data = await Task.find({});
            res.json(data);
        } catch (error) {
            console.log(error);
        }
    }

    async getTask(req, res) {
        try {
            const id = req.params.id;
            const data = await Task.findOne({ _id: id });
            res.json(data); 
        } catch (error) {
            console.log(error);
        }
    }

    async createTask(req, res) {
        try {
            const { todo } = req.body;
            const task = new Task({ todo: todo });
            task.save();
            res.status(200).send();
        } catch (error) {
            console.log(error);
        }
    }

    async updateTask(req, res) {
        try {
            const id = req.body.id;
            const todo = req.body.todo;
            const task = await Task.findOneAndUpdate({ _id: id }, { todo: todo });
            res.status(200).send();
        } catch (error) {
            console.log(error);
        }
    }

    async deleteTasks(req, res) {
        try {
            await Task.deleteMany({});
            res.status(200).send();
        } catch (error) {
            console.log(error);
        }
    }

    async deleteTask(req, res) {
        try {
            const id = req.body.id;
            await Task.deleteOne({ _id: id });
            res.status(200).send();
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new tasksController();