import asyncHandler from "express-async-handler";
import uniqid from "uniqid";
import Staff from "../models/staffModel.js";
import generateToken from "../helpers/utils.js";


// @METHOD POST
// @ROUTE /api/users/login
// @ACCESS PUBLIC
// @DESCRIPTION USER LOGIN 

const userRegister = asyncHandler(async (req, res) => {
  const { firstName, lastName, phone, email, password } = req.body;

  const staffId = uniqid()
  try {
    //Check if user Already Exist
    const userExist = await Staff.findOne({ email });

    if (userExist) {
      throw new Error ("Staff Already Exist. Please login with your credentials");
    }

    const user = Staff.create({
      staffId, 
      firstName,
      lastName,
      phone, email, password 
    })

    res.status(200).json({
      success: true,
      message: "Staff Registered Successfully"
    })
    

  } catch(err) {
    console.log(err)
    res.status(400).json({
      message: err.message
    })
  }
});



// @METHOD POST
// @ROUTE /api/users/login
// @ACCESS PUBLIC
// @DESCRIPTION USER LOGIN 

const userLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  try {
    //Check if user Already Exist
    const user = await Staff.findOne({ email });

    if (!user) {
      throw new Error ("Staff Does Not Exist. Please Register");
    }


    if (user && (await user.matchPassword(password))) {

      const token = await generateToken(user.staffId)

      //Setting The Cookies

      // res.cookie('jwt', token, config.jwt.cookie);

      res.status(200).json({
        success: true,
        data: {
          token: token,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          role: user.role,
        }
      })
    } else {
      throw new Error ("Invalid Credentials");
    }

  } catch(err) {
    console.log(err)
    res.status(400).json({
      message: err.message
    })
  }
})

// @METHOD POST
// ROUTE /api/users/admin
// @ACCESS PRIVATE
// @DESCRIPTION ADMIN LOGIN ACCESS ONLY


const adminLogin = asyncHandler( async (req, res) => {
  const {email, password} = req.body

  try {
    
  }catch (err) {
    console.log(err)
    res.status(400).json({
      message: err.message
    })
  }
})

export { userRegister, userLogin };
