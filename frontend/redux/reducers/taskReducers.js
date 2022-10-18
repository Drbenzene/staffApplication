import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "http://localhost:5000/api/task";


const initialState = {
    tasks: [],
    loading: false,
    error: null,
    success: false,
    isCreated: false,
    isDeleted: false,
}

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        taskCreateRequest: (state) => {
            state.loading = true
        },
        taskCreateSuccess: (state, action) => {
            state.tasks = action.payload
            state.loading = false
            state.success = true
            state.isCreated = true
        },
        taskCreateFail: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
        clearState: (state) => {
            state.loading = false
            state.error = null
            state.success = false
            state.isCreated = false
            state.isDeleted = false
        }
    }
})

export const {taskCreateRequest, taskCreateSuccess, taskCreateFail, clearState} = taskSlice.actions

export default taskSlice.reducer

export const createTask = (task) => async (dispatch) => {
    try {
        dispatch(taskCreateRequest())
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const {data} = await axios.post('/add', task, config)
        console.log(data)
        dispatch(taskCreateSuccess(data))
    } catch (error) {
        console.log(error)
        const err = error.response && error.response.data.message ? error.response.data.message : error.message
        dispatch(taskCreateFail(err))
    }
}