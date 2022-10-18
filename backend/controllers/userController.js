import asyncHandler from "express-async-handler";
import uniqid from "uniqid";
import Staff from "../models/staffModel.js";
import generateToken from "../helpers/utils.js";


// @METHOD POST
// @ROUTE /api/users/login
// @ACCESS PUBLIC
// @DESCRIPTION USER LOGIN 

const userRegister = asyncHandler(async (req, res) => {
  const { firstName, lastName, phone, email, password, } = req.body;
  
  const staffId = uniqid()
  const fullName = `${firstName} ${lastName}}`
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
      fullName,
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

  console.log(req.session, "Coming Back")

  try {
    //Check if user Already Exist
    const user = await Staff.findOne({ email: email });

    if (!user) {
      throw new Error ("Staff Does Not Exist. Please Register");
    }

    if (user && (await user.matchPassword(password))) {

      const token = await generateToken(user.staffId)

      res.status(200).json({
        user: {
          staffId: user.staffId,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          token: token
        }
      })
    } else {
      throw new Error ("Invalid Email or Password Provided");
    }


  } catch(err) {
    console.log(err)
    res.status(400).json({
      message: err.message
    })
  }
})


//@METHOD GET
//@ROUTE /api/users/:id
//@ACCESS PUBLIC
//@DESCRIPTION LOG OUT USER


export const userLogout = asyncHandler(async (req, res) => {
  try {
    req.session.destroy();
    res.status(200).json({
      success: true,
      message: "User Logged Out Successfully"
    })
  }catch(err) {
    console.log(err)
    res.status(400).json({
      message: err.message
    })
  }
  
  
  res.status(200).json({
    message: "User Logged Out Successfully"
  })
})


export const getUserInfo = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    const user = await Staff.findById({staffId: id})
    res.status(200).json({
      success: true,
    })
  }catch(err) {
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

export const adminLogin = asyncHandler( async (req, res) => {
  const {email, password} = req.body

  try {
    const admin = Staff.findOne({email: email})

    if (!admin) {
      throw new Error ("Incorrect Email Provided")
    }

    if (admin && admin.role !== 'admin') {
      throw new Error ("You Are Not Authorized To Access This Route.")
    }

    if (admin && (await admin.matchPassword(password))) { 
      const token = generateToken(admin.staffId)

      res.status(200).json({
        success: true,
        data: {
          token: token,
          firstName: admin.firstName,
          lastName : admin.lastName,
          email: admin.email,
        }
      })
    }
    
  }catch (err) {
    console.log(err)
    res.status(400).json({
      message: err.message
    })
  }
})

// @METHOD GET
//ROUTE /api/admin/staffs/all
// @ACCESS PRIVATE
// @DESCRIPTION GET ALL USERS ADMIN ONLY

const getAllStaffs = asyncHandler(async (req, res) => {
  try {
    const staffs = await Staff.find()
    res.status(200).json({
      success: true,
      data: staffs
    })
  }catch(err) {
    console.log(err)
    res.status(400).json({
      message: err.message
    })
  }
})



export { userRegister, userLogin, getAllStaffs };
