import mongoose from "mongoose";
import bcrypt from "bcryptjs";


//Creating User Schema 

const staffSchema = new mongoose.Schema({
    staffId: {type: String},
    firstName:{type: String, required: [true, "First Name Is Required"]},
    lastName:{type: String, required: [true, "Last Name is Required"]},
    fullName: {type: String},
    email:{type: String, required: [true, "Email is Required"]},
    password:{type: String, required: [true, "Password is Required"]},
    projects: {type: Array, default: []},
    tasks: {type: Array, default: []},
    phone:{type: Number, required: [true, "Phone is Required"]},
    role: {type: String, default: "staff", enum: ["staff", "admin"]},
    image: {type: String, defult: "https://res.cloudinary.com/dlhjvo4tz/image/upload/v1663689772/w4rcoxixuvgeiwwqhvjd.png"},
    createdAt:{type: Date, default: Date.now()},
})


//Encrypting user Password Before Saving

staffSchema.pre("save", async function(next) {
    if (!this.isModified("password")) {
        next ()
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
})

//Compare hashed Password On Login User

staffSchema.methods.matchPassword = async function(enteredPassword) {
    const result = await bcrypt.compare(enteredPassword, this.password);
    return result;
}

const Staff = mongoose.model("Staff", staffSchema);

export default Staff