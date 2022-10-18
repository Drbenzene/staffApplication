import React from 'react'
import AdminSideBar from '../../components/adminSidebar'
import AddModal from '../../components/Modal/AddModal'

function AddProject() {
  return (
    <div>
        <AdminSideBar children={<AddModal />} />
    </div>
  )
}

export default AddProject
