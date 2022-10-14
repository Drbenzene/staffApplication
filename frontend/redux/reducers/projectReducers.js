import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const baseUrl = `http://localhost:5000/api/projects || ${process.env.BASE_URL}/projects`;

const initialState = {
    project: [],
    loading: false,
    error: ""
}

const projectSlice = createSlice({
    name: "project",
    initialState,
    reducer: {
        addProjectRequest: (state) =>{
            state.loading  = true
        },
        addProjectSuccess: (state, action) => {
            state.project = action.payload
            state.loading = false
        },
        addProjectFail: (state, action) => {
            state.loading =  false;
            state.error = action.payload
        },

        deleteProjectRequest: (state) => {
            state.loading = true
        },
        deleteProjectSuccess: (state, action) => {
            state.loading = false;
            state.project = state.project.filter(project => project.projectId !== action.payload)
        },
        deleteProjectFail: (state, action) => {
            state.loading = false;
            state.error = action.payload
        }
    }

})

export const {addProjectRequest, addProjectFail, addProjectSuccess, deleteProjectRequest, deleteProjectFail, deleteProjectSuccess} = projectSlice.actions

export default projectSlice.reducer




//Making API CALLS

export const postProject = (title) => {
    return async (dispatch) => {
        const config = {
            header: {
                'Content-Type': 'application/json'
            }
        }
        try{
            dispatch(addProjectRequest())
            const {data} = await axios.post(`${baseUrl}/add`, title, config)
            dispatch(addProjectSuccess(data))
        }catch(error){
            dispatch(addProjectFail(error.response && error.response.data.message ? error.response.data.message : error.message))
        }
    }
}

export const deleteProject = (projectId) => {
    return  async (dispatch) => {
        const config = {
            header: {
                'Content-Type': 'application/json',
            }
        }
        try {
            dispatch(deleteProjectRequest())
            const {data} = await axios.delete(`${baseUrl}/delete/${projectId}`, config)
            dispatch(deleteProjectSuccess(data))
    
        }catch(err) {
            dispatch(deleteProjectFail(err.response && err.response.data.message ? err.response.data.message : err.message))
        }
    }
}