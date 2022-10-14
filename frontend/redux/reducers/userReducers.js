import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "http://localhost:5000/api/users";


const initialState = {
    user: null,
    loading: false,
    error: null,
    success: false,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userRegisterRequest: (state) => {
            state.loading = true
        },
        userRegisterSuccess: (state, action) => {
            state.user = action.payload
            state.loading = false
            state.success = true
        },
        userRegisterFail: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
        userLoginRequest: (state) => {
            state.loading = true
        },
        userLoginSuccess: (state, action) => {
            state.user = action.payload
            state.loading = false
            state.success = true
        },
        userLoginFail: (state, action) => {
            state.loading = false
            state.error = action.payload
        }
    }
})

export const {userLoginRequest, userLoginFail, userLoginSuccess,userRegisterRequest,
    userRegisterFail, userRegisterSuccess} = userSlice.actions

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

        setTimeout(() => {
            dispatch(userRegisterFail(null))
        }, 3000)
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
        const {user} = axios.post( `${baseUrl}/login`, userInfo, config)
        console.log(user)
        dispatch(userLoginSuccess(user))

        //REDIRECTION TO USER DASHBOARD

    }catch(err){
        console.log(err)
        const error = err.response && err.response.data.message ? err.response.data.message : err.message
        dispatch(userLoginFail(err))

        setTimeout(() => {
            dispatch(userLoginFail(null))
        }, 3000)
    }
}


