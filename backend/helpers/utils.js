import Jwt  from "jsonwebtoken";

const generateToken = async (id) => {
    const signed = await Jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: "1hr"})

    return signed
}

export default generateToken