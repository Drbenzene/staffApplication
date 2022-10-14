import mongoose from "mongoose";

//Creating Tasks Model

const taskSchema = new mongoose.Schema({
    staffId: {type: String},
    taskId: {type: String},
    title: {type: String, required: [true, "Title is Required"]},
    description: {type: String, required: [true, "Description is Required"]},
    dueDate: {type: Date, required: [true, "Due Date is Required"]},
    assignedTo: {type: String, required: [true, "Assigned Staff is Required"]},
    project: {type: String, required: [true, "Project is Required"]},
    status: {type:String, default: "In Progress", enum: ["In Progress", "Completed"]},
    createdAt: {type: Date, default: Date.now()},
})

const Task = mongoose.model("Task", taskSchema);

export default Task