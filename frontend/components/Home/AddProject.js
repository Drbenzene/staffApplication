import React from "react";
import Swal from "sweetalert2";


export const addProject = async() => {
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
        Swal.fire(`Your IP address is ${project}`)
      }
}
