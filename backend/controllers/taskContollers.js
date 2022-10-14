import Task from "../models/taskModel";
import uniqid from "uniqid";
import asyncHandler from 'express-async-handler'


// @METHOD POST
// @ROUTE /api/task/add
// @ACCESS PRIVATE
// @DESCRIPTION ADMIN ASSIGN A TASK

const addTask = asyncHandler(async (req, res) => {
    const {staffId, title, description, date, assignedTo, project } = req.body

    const taskId = uniqid()

    try {
        const task = await Task.create({
            staffId, 
            taskId,
            title,
            description,
            assignedTo,
            dueDate: date,
            project
        })

        res.status(200).json({
            success: true,
            message: 'Task created successfully.'
        })

    }catch(err) {
        console.log(err)
        res.status(200).json({
            message: err.message
        })
    }
});

// @METHOD DELETE
// @ROUTE /api/task/delete
// @ACCESS PRIVATE
// @DESCRIPTION ADMIN ASSIGN A TASK

const deleteTask = asyncHandler(async (req, res) => {
    const {taskId} = req.body

    try {
        await findOneAndDelete(taskId)
        res.status(200).json({
            success: true,
            message: "Task Deleted Successfully"
        })

    }catch(err){
        console.log(err) 
            res.status(400).json({
                message: err.message
            })
    }
})

// @METHOD GET
// @ROUTE /api/task/all
// @ACCESS PRIVATE
// @DESCRIPTION ADMIN ASSIGN A TASK

const allTask = asyncHandler(async (req, res) => {

    try {
        const theTasks = await Task.find({})
        res.status(200).json({
            success: true,
            tasks: theTasks
        })


    } catch(err) {
        console.log(err)
        res.status(401)
    }
})


// @METHOD GET
// @ROUTE /api/task/:staffId
// @ACCESS PUBLIC
// DESCRIPTION GETTING ALL TASKS ASSIGNED TO A STAFF

const staffTask = asyncHandler(async (req, res) => {

    const {staffId} = req.params;
    try {

        //Check if Staff Exist

        const staff = await findOne({staffId: staffId})

        if (!staff){
            throw new Error("Staff Not Found") 
        }

        const theTasks = await Task.find({staffId: staffId})

        res.status(200).json({
            success: true,
            tasks: theTasks
        })

    }catch(err){
        console.log(err)
        res.status(401).json({
            message: res.message
        })
    }
})

export {addTask, deleteTask, allTask}