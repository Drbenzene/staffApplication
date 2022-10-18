import Staff from "../models/staffModel.js";
import Jwt  from "jsonwebtoken";
import asyncHandler from "express-async-handler";

//MiddleWare For Accessing Staff Dashboard 

export const staffAuth = asyncHandler(async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            token = req.headers.authorization.split(" ")[1];
            const decoded = Jwt.verify(token, process.env.JWT_SECRET);
            req.staff = await Staff.findById(decoded.id).select("-password");
            next();
        } catch (error) {
            console.log(error);
            res.status(401);
            throw new Error("Not Authorized, Token Failed");
        }
    }
});
