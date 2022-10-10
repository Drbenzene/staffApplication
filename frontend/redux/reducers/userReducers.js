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

export const {userLoginRequest} = userSlice.actions

export default userSlice.reducer


//API CALL FOR USER LOGIN


export const userRegister = (userInfo) => async (dispatch) => {
    const config = {
        header: {
            'Content-Type': 'application/json'
        }
    }
    

    const {data} = axios.post(`${baseUrl}/register`, userInfo, config)
}