import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "http://localhost:5000/api/users";


const initialState = {
    staffs: [],
    userInfo: [],
    loading: false,
    error: null,
    success: false,
    isLoggedIn: false,
    isRegistered: false,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userRegisterRequest: (state) => {
            state.loading = true
        },
        userRegisterSuccess: (state, action) => {
            state.userInfo = action.payload
            state.loading = false
            state.success = true
            state.isRegistered = true
        },
        userRegisterFail: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
        userLoginRequest: (state) => {
            state.loading = true
        },
        userLoginSuccess: (state, action) => {
            state.userInfo = action.payload
            state.loading = false
            state.success = true
            state.isLoggedIn = true
        },
        userLoginFail: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
        userLogout: (state) => {
            state.userInfo = []
            state.isLoggedIn = false
        },
        userAuthenticateRequest: (state) => {
            state.loading = true
        },
        userAuthenticateSuccess: (state, action) => {
            state.userInfo = action.payload
            state.loading = false
            state.success = true
            state.isLoggedIn = true
        },
        
        userAuthenticateFail: (state, action) => {
            state.loading = false
            state.error = action.payload
            state.isLoggedIn = false
        },
        getAllStaffRequest: (state, action) => {
            state.loading = true;
        },
        getAllStaffSuccess: (state, action) => {
            state.staffs = action.payload;
            state.loading = false;
            state.success = true;
        },

        getAllStaffFailed: (state, action) => { 
            state.loading = false;
            state.error = action.payload;
         }, 

        clearMessages: (state) => {
            state.error = null
            state.isRegistered = false
        },

        clearAllStates: (state) => {
            state.userInfo = []
            state.isLoggedIn = false
            state.isRegistered = false
        }
    }
})

export const {userLoginRequest, userLoginFail, userLoginSuccess,userRegisterRequest,
    userRegisterFail, userRegisterSuccess, clearMessages, userAuthenticateRequest, userAuthenticateSuccess
    , userAuthenticateFail, userLogout, clearAllStates,
    getAllStaffRequest, getAllStaffSuccess, getAllStaffFailed} = userSlice.actions;


export default userSlice.reducer


//API CALL FOR USER LOGIN

//USER REGISTRATION FUNCTION
export const userRegister = (userInfo) => async (dispatch) => {
    const config = {
        header: {
            'Content-Type': 'application/json'
        }
    }
    try{
        dispatch(userRegisterRequest())
        const {data} = await axios.post(`${baseUrl}/register`, userInfo, config)
        console.log(data)
        dispatch(userRegisterSuccess(data))

    }catch(err){
        console.log(err)
        const error = err.response && err.response.data.message ? err.response.data.message : err.message
        dispatch(userRegisterFail(error))
    }
}


//USER LOGIN FUNCTION HANDLER

export const userLogin = (userInfo) => async (dispatch) => {
    const config = {
        header: {
            "Content-Type": "application/json"
        }
    }
    try {
        dispatch(userLoginRequest())
        const user = await axios.post( `${baseUrl}/login`, userInfo, config)
        console.log(user.data.user)

        dispatch(userLoginSuccess(user.data.user))

        //Save To Local Storage
        localStorage.setItem('staff', JSON.stringify(user.data.user))
        localStorage.setItem('token', JSON.stringify(user.data.user.token))

        //REDIRECTION TO USER DASHBOARD

    }catch(err){
        console.log(err)
        const error = err.response && err.response.data.message ? err.response.data.message : err.message
        dispatch(userLoginFail(error))

        setTimeout(() => {
            dispatch(userLoginFail(null))
        }, 3000)
    }
}

//USER DASHBOARD MIDDLEWARE PROTECTION

export const userAuthenticate = () => async (dispatch) => {
    const config = {
        header: {
            "Content-Type": "application/json",
            "authorization": `Bearer ${localStorage.getItem('token')}`
        }
    }
    try {
        dispatch(userAuthenticateRequest())
        const user = await axios.get( `${baseUrl}/dashboard`, config)
        console.log(user.data.user)

        dispatch(userAuthenticateSuccess(user.data.user))

        //Save To Local Storage
        localStorage.setItem('staff', JSON.stringify(user.data.user))
        localStorage.setItem('token', JSON.stringify(user.data.user.token))

        //REDIRECTION TO USER DASHBOARD

    }catch(err){
        console.log(err)
        const error = err.response && err.response.data.message ? err.response.data.message : err.message
        dispatch(userAuthenticateFail(error))

        setTimeout(() => {
            dispatch(userAuthenticateFail(null))
        }, 3000)
    }
}


//GET ALL STAFFS FUNCTION HANDLER

export const getAllStaffs = () => async (dispatch) => {
    const config = {
        header: {
            "Content-Type": "application/json",
            "authorization": `Bearer ${localStorage.getItem('token')}`
        }
    }
    try {
        dispatch(getAllStaffRequest())
        const staffs = await axios.get( `${baseUrl}/staffs`, config)
        console.log(staffs.data)

        dispatch(getAllStaffSuccess(staffs.data))

        //Save To Local Storage
        localStorage.setItem('staffs', JSON.stringify(staffs.data))

        //REDIRECTION TO USER DASHBOARD

    }catch(err){
        console.log(err)
        const error = err.response && err.response.data.message ? err.response.data.message : err.message
        dispatch(getAllStaffFailed(error))

        setTimeout(() => {
            dispatch(getAllStaffFailed(null))
        }, 3000)
    }
}


