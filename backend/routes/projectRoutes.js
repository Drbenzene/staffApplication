import express from 'express'
import { addProject, deleteProject, allProject } from '../controllers/projetControllers.js'

//Creating Project Routes

const projectRouter = express.Router();

projectRouter.post('/add', addProject)
projectRouter.delete('/delete', deleteProject)
projectRouter.get('/', allProject)


export default projectRouter

