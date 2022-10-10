// import passport from 'passport-jwt-cookiecombo'
import passport from 'passport'
import Staff from '../models/staffModel.js'

//MiddleWare For User Authentication

const staffAuth = async(req, res, next) => {
    // console.log(passport, "THE PASSPORT")
    passport.authenticate('login', { session: false }, (err, user, info) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: err.message
            })
        }
        if (!user) {
            return res.status(401).json({
                success: false,
                message: info.message
            })
        }
        req.user = user;
        console.log(req.user)
        next();
    })
}

export {staffAuth}