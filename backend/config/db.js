import mongoose from "mongoose";


//Connecting to Mongoose Database

const db = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
        })

        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
    } catch (error) {
        console.error(`Error: ${error.message} from Database`.red.underline.bold)
    }
}

export default db;