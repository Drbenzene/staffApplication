import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import {projectAdded} from "../../redux/reducers/projectReducers";
import axios from 'axios'
import Swal from 'sweetalert2'
import { useRouter } from "next/router";

const baseUrl = `http://localhost:5000/api/projects`;

export default function Addmodal() {
    const router = useRouter();
    const dispatch = useDispatch()

    const [title, setTitle] = useState("");
    const [error, setError] = useState("")

    const submitHandler = async (e) => {
        e.preventDefault();
        console.log(title);
        if (!title) {
            setError("Project Title Cannot Be Empty")
            setTimeout(() => {
                setError("")
            }, 2000)
            return
        }
        dispatch(projectAdded({title: title}))

    }
    return (
        <div className="">
            <div className="flex items-center justify-center py-8 px-4">
                <div className="relative w-96 rounded shadow-lg p-6  bg-white">
                  Add a new Project
                    <form className="mt-5">
                        <div className="mt-4 flex flex-col">
                            <label className="text-xs font-semibold leading-3 text-gray-800 ">Title </label>
                            <input 
                            onChange={(e) => setTitle(e.target.value)}
                            name="title"
                            placeholder="Enter project name" className="text-xs font-medium leading-3 text-gray-500 dark:text-gray-400 resize-none bg-gray-50 dark:bg-gray-700 border rounded-lg border-gray-200 dark:border-gray-700 focus:outline-none px-4 py-3 mt-2" />
                            
                            {error && (<><p className="text-sm text-rose-900">{error}</p></>)}
                        </div>
                        <button id="submit" onClick={submitHandler} className="mt-5 focus:outline-none px-5 py-3 bg-indigo-700 dark:bg-indigo-600 hover:bg-opacity-80 rounded text-xs font-semibold leading-3 text-gray-100">
                            Create
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
