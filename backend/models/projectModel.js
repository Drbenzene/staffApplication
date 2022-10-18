import mongoose from "mongoose";

//Creating Project Model

const projectSchema = new mongoose.Schema({
    projectId: {type: String},
    title: {type: String, required: [false, "Title is required"]},
    createdAt: {type: Date, default: Date.now()},
})


const Project = mongoose.model("Project", projectSchema);

export default Project