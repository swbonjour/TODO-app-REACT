const express = require("express");
const mongoose = require("mongoose");
const tasksRouter = require("./Router/tasksRouter.js");
const cors = require("cors");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(cors());

app.use("/tasks", tasksRouter);

const DBconnection = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/tasks", () => {
            console.log("Database connected");
        });
    } catch (error) {
        console.log(error);
    }
}

const serverListen = () => {
    try {
        app.listen(PORT, () => {
            console.log(`Server is listening ${PORT}`);
        })
    } catch (error) {
        console.log(error);
    }
}

const start = () => {
    try {
        DBconnection();
        serverListen();
    } catch (error) {
        console.log(error);
    }
}

start();