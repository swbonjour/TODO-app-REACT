const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const taskSchema = new Schema({
    todo: { type: String, required: true },
    state: { type: Boolean, default: false}
})

module.exports = new model("Task", taskSchema);