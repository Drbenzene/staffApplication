import Jwt  from "jsonwebtoken";

const generateToken = async (id) => {
    const signed = await Jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: "1hr"})
    
    // res.cookie('jwt', signed, {
        // httpOnly: true,
        // sameSite: true,
        // signed: true,
        // secure: true
    // });
    return signed
}

export default generateToken