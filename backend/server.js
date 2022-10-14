import express from 'express';
import morgan from 'morgan'
import cors from 'cors'
import color from 'colors'
import db from './config/db.js';
import dotenv from 'dotenv';
dotenv.config();
import userRouter from './routes/userRoutes.js';
import projectRouter from './routes/projectRoutes.js';
import JwtCookieComboStrategy from 'passport-jwt-cookiecombo'
import passport from 'passport'

const app = express();


app.use(morgan('dev'));

const corsOption = {
    origin: '*'
}
app.use(cors(corsOption));
app.use(express.json({limit:'40mb'}))


//Using Server Routes
app.use("/api/users", userRouter);
app.use("/api/projects", projectRouter);


app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get("*", (req, res) => {
    res.send('NOT A VALID ROUTE');
})


const start = async (PORT) => {
    try {
        await db()
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`.yellow.bold);
        })
    } catch (error) {
        console.log(error);
    }
}

start(process.env.PORT || 5000);