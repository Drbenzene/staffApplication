import {HiMail} from 'react-icons/hi'
import {FaPhone} from 'react-icons/fa'
import React,{useState, useEffect,} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {getAllStaffs, userAuthenticate} from '../redux/reducers/staffReducers'
import axios from 'axios'




const baseUrl= "http://localhost:5000/api/users"
// const people = [
//   {
//     name: 'Jane Cooper',
//     title: 'Paradigm Representative',
//     role: 'Admin',
//     email: 'janecooper@example.com',
//     telephone: '+1-202-555-0170',
//     imageUrl:
//       'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
//   },
//   {
//     name: 'Jane Cooper',
//     title: 'Paradigm Representative',
//     role: 'Admin',
//     email: 'janecooper@example.com',
//     telephone: '+1-202-555-0170',
//     imageUrl:
//       'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
//   },
//   {
//     name: 'Jane Cooper',
//     title: 'Paradigm Representative',
//     role: 'Admin',
//     email: 'janecooper@example.com',
//     telephone: '+1-202-555-0170',
//     imageUrl:
//       'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
//   },
//   {
//     name: 'Jane Cooper',
//     title: 'Paradigm Representative',
//     role: 'Admin',
//     email: 'janecooper@example.com',
//     telephone: '+1-202-555-0170',
//     imageUrl:
//       'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
//   },
//   {
//     name: 'Jane Cooper',
//     title: 'Paradigm Representative',
//     role: 'Admin',
//     email: 'janecooper@example.com',
//     telephone: '+1-202-555-0170',
//     imageUrl:
//       'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
//   },
//   // More people...
// ]

export default function Staffs() {
  const dispatch = useDispatch()
  const [staffs, setStaffs] = useState([])
  console.log(staffs, "THE STAFFS ")

  useEffect(() => {
    const fetchStaff = async () => {
      const {data} = await axios.get(`${baseUrl}/admin/staffs/all`)
      setStaffs(data.data)
      console.log(data, "THE DATATATATAT")
    }

    fetchStaff()
  },[])

  return (
    <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {staffs.map((person, i) => (
        <li
          key={i}
          className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200"
        >
          <div className="flex-1 flex flex-col p-8">
            <img className="w-32 h-32 flex-shrink-0 mx-auto rounded-full" src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60' alt="" />
            <h3 className="mt-6 text-gray-900 text-sm font-medium">{person.fullName}</h3>
            <dl className="mt-1 flex-grow flex flex-col justify-between">
              <dt className="sr-only">Title</dt>
              <dd className="text-gray-500 text-sm">Project Manager</dd>
              <dt className="sr-only">Role</dt>
              <dd className="mt-3">
                <span className="px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                  {person.role}
                </span>
              </dd>
            </dl>
          </div>
          <div>
            <div className="-mt-px flex divide-x divide-gray-200">
              <div className="w-0 flex-1 flex">
                <a
                  href={`mailto:${person.email}`}
                  className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
                >
                  <HiMail className="w-5 h-5 text-gray-400" aria-hidden="true" />
                  <span className="ml-3">Email</span>
                </a>
              </div>
              <div className="-ml-px w-0 flex-1 flex">
                <a
                  href={`tel:${person.phone}`}
                  className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
                >
                  <FaPhone className="w-5 h-5 text-gray-400" aria-hidden="true" />
                  <span className="ml-3">Call</span>
                </a>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}