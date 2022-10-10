import React from 'react'
import AdminSideBar from '../../components/adminSidebar'
import Staffs from '../../components/staffs'

function Employee() {
  return (
    <div>
        <AdminSideBar children={<Staffs />} />
    </div>
  )
}

export default Employee

