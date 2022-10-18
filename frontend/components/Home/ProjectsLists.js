import React, { useEffect, useState } from "react";
import axios from "axios";

const baseURL = "http://localhost:5000/api/projects/";


export default function ProjectsLists() {
const [projects, setProjects] = useState([]);

  useEffect(() => {

    const fetchProjects = async () => {
      const { data } = await axios.get(`${baseURL}`);
      setProjects(data.projects);
      console.log(data);
    }
    fetchProjects()
  }, [])

    return (
      <div>
        <label htmlFor="location" className="block text-sm font-medium text-gray-700">
          Select Project 
        </label>
        <select
          id="location"
          name="location"
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >   
        <option>Choose A Project</option>
        {projects.map((project) => (
          <option key={project._id} value={project._id}>{project.title}</option>
        ))}
        </select>
      </div>
    )
  }
  