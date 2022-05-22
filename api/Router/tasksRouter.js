const express = require("express");
const tasksRouter = express.Router();
const { getTask, getTasks, createTask, updateTask, deleteTasks, deleteTask, getCompletedTasks } = require("../Controller/tasksController.js");

tasksRouter.get("/get-tasks", getTasks);
tasksRouter.get("/get-task/:id", getTask);
tasksRouter.get("/get-completed-tasks", getCompletedTasks);
tasksRouter.post("/create", createTask);
tasksRouter.put("/update", updateTask);
tasksRouter.delete("/delete-all", deleteTasks);
tasksRouter.delete("/delete-task", deleteTask);

module.exports = tasksRouter;