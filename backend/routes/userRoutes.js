import express from 'express'
import { userRegister, userLogin } from "../controllers/userController.js";
import { staffAuth } from '../middleware/auth.js';

//Creating User Routes

const userRouter = express.Router();

userRouter.post('/register', userRegister);
userRouter.post('/login', userLogin)

export default userRouter