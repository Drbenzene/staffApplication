import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const baseUrl = `http://localhost:5000/api/projects`;

const initialState = {
    projects: [],
    error: null,
    success: false,
    loading: true,
}

const projectSlice = createSlice({
    name: "project",
    initialState,
    reducers: {
        addProjectRequest: (state) => {
            state.loading = true
        },
        addProjectSuccess: (state, action) => {
            state.projects = action.payload.message
            state.success = true
            state.loading =  false
        },
        addProjectFailed: (state, action) => {
            state.error = action.payload.message
            state.loading = false
            state.success = false
        },

        clearError: (state) => {
            state.error = null
        }
    
    }
})


export const { addProjectRequest, addProjectSuccess, addProjectFailed } = projectSlice.actions;

export default projectSlice.reducer

const projectAdded = (title) => async (dispatch) => {
    try {
        dispatch(addProjectRequest());
        const { data } = await axios.post(`${baseUrl}/add`, title);
        console.log(data, "ijrtghjrtjhrr");
        dispatch(addProjectSuccess(data));
    }catch(err) {
        console.log(err, "yrwfgechwerkjwgl")
        const error = err.response && err.response.data.message ? err.response.data.message : err.message;
        dispatch(addProjectFailed(error));
    }
}


//FETCH ALL PROJECTS 

const projectFetched = () => async (dispatch) => {
    try {
        dispatch(addProjectRequest());
        const { data } = await axios.get(`${baseUrl}/`);
        console.log(data, "ijrtghjrtjhrr");
        dispatch(addProjectSuccess(data));
    }catch(err) {
        console.log(err, "yrwfgechwerkjwgl")
        const error = err.response && err.response.data.message ? err.response.data.message : err.message;
        dispatch(addProjectFailed(error));
    }
}
;

export {projectAdded, projectFetched}