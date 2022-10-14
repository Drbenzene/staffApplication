import React from "react";
import Swal from "sweetalert2";
import {postProject} from "../../redux/reducers/projectReducers";
import {useDispatch, useSelector} from "react-redux";
import axios from 'axios'


const baseUrl = "http://localhost:5000/api/projects";

export const addProject = async() => {
  
  const addProjectHandler = async (title) => {

  try{
      const {data} = await axios.post(`${baseUrl}/add`, title)
      console.log(data, "THE DATA")
  }catch(error){
      console.log(error)
  }

  }
    const { value: project } = await Swal.fire({
        title: 'Add New Project',
        input: 'text',
        inputLabel: 'Enter Project Name',
        // inputValue: inputValue,
        showCancelButton: true,
        inputValidator: (value) => {
          if (!value) {
            return 'Please provide the project title'
          }
        }
      })
      
      if (project) {
        const title = project
        console.log(title)
        addProjectHandler(`${title}`)
      }
}
