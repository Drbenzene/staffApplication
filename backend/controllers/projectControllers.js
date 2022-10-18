import Project from "../models/projectModel.js";
import asyncHandler from "express-async-handler";
import uniqid from "uniqid";


// @METHOD POST
// @ROUTE /api/project/add
// @ACCESS PRIVATE
//Description Adding new Projects


const addProject = asyncHandler( async (req, res) => {
    const {title} = req.body
    console.log(title, "The Title")

    //If the Title is Empty 
    if (!title) {
        throw new Error("Title is required")
    }
    
    const projectId = await uniqid()

    // const projectId = 
    try {

        const project = Project.create({
            title: title,
            projectId: projectId
        })

        res.status(200).json({
            success: true,
            message: "Project Added Successfully"
        })

    }catch(err) {
        console.log(err)
        res.status(400).json({
            message: err.message
        })
    }
})



// @METHOD Delete
// @ROUTE /api/project/delete
// @ACCESS PRIVATE
//Description Adding new Projects

const deleteProject = asyncHandler(async (req,res) => {
    const {projectID} = req.body

    try{
        const project = await Project.findOne({projectID: projectID})

        if(!project){
            throw new Error("Project Does Not Exist")
        }

        await project.remove()

        res.status(200).json({
            success: true,
            message: "Project Deleted Successfully"
        })

    } catch(err) {
        console.log(err.message)
        res.status(400).json({
            message: err.message
        })
    }
})


// @METHOD GET
// @ROUTE /api/projects/
// @ACCESS PRIVATE
//Description FETCH ALL PROJECTS

const allProject = asyncHandler(async (req, res) => {
    
    try {
        //This will return an array of all the Projects.

        const projects = await Project.find()
        res.status(200).json({
            success: true,
            projects
        })


    } catch(err){
        console.log(err);
        res.status(200).json({
            message: err.message
        })
    }
})


export {addProject, deleteProject, allProject}