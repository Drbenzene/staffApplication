import React from 'react'
import AddTask from '../../components/Home/AddTask'
import AdminSideBar from '../../components/adminSidebar'

function Add() {
  return (
    <div>
        <AdminSideBar children={<AddTask />} />
    </div>
  )
}

export default Add
