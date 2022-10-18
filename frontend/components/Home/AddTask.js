import {useState, useEffect} from "react"
import Link from "next/link";
import Date from './Date'
import StaffsLists from "./StaffsLists";
import ProjectLists from "./ProjectsLists";
import { useQuery } from "react-query";
import axios from "axios";

const baseUrl = "http://localhost:5000/api/users";

const AddTask = (props) =>  {
    const [staffs, setstaffs] = useState([]);

    const fetchStaffs = async () => {
        const {data} = await axios.get(`${baseUrl}/admin/staffs/all`);
        setstaffs(data.data);
    };

    useEffect(() => {
        fetchStaffs();
    }, [])






    return (
    <div>
    
        <div id="popup" className="inset-0 z-50 right-100 py-12">
            <div className="flex w-full justify-center ">
                <div className="bg-white dark:bg-gray-800 shadow-lg w-full md:w-11/12 pt-10 px-10 max-w-2xl z-50">
                    <div className="container flex flex-col w-full h-full justify-between">
                        <div>
                            <div className="flex w-full justify-between items-center">
                                <h2 className="text-4xl font-bold dark:text-gray-100 text-gray-900">Create Task</h2>
                            </div>

                            <div className="mt-10 border-b border-gray-400">
                                <input className="w-full text-2xl bg-transparent font-bold pb-2 focus:outline-none placeholder-gray-400" placeholder=" Task title" type="text" />
                            </div>
                            <div className="mt-12">
                                <textarea className="w-full h-32 bg-transparent focus:outline-none placeholder-gray-400" placeholder="Task description" defaultValue="" />
                            </div>
                            <div className="flex items-center mt-16">
                                <div className="flex items-center justify-center">
                                    <span className="font-bold">Select Due Date</span>
                                    <span className="p-2"><Date /></span>
                                </div>
                            </div>

                            <div className="flex items-center my-8">
                                <div className="flex items-center justify-center">
                                    <span className="p-2"><StaffsLists /></span>
                                </div>
                            </div>

                            <div className="flex items-center my-8">
                                <div className="flex items-center justify-center">
                                    <span className="p-2"><ProjectLists /></span>
                                </div>
                            </div>


                        </div>
                        <div className="mt-4 md:mt-0">

                            <div className="md:flex justify-between w-full py-4 border-t border-gray-400">
                                <div className="flex items-center">
                                    <div className="flex items-center justify-end text-gray-700 dark:text-gray-400">

                                    <button className="text-sm text-white focus:outline-none py-3 px-6 hover:bg-indigo-600 bg-red-900 font-bold rounded-md">Cancel</button>
                                    </div>
                                </div>
                                <div className="mt-4 md:mt-0">
                                    <button className="text-sm text-white focus:outline-none py-3 px-6 hover:bg-indigo-600 bg-black rounded-md font-bold">Create Task</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)};
export default AddTask;
