import React from 'react'
import AdminSidebar from '../../components/adminSidebar'
import AllTasks from '../../components/Tasks'

function Tasks() {
  return (
    <div>
        <AdminSidebar children={<AllTasks />} />
    </div>
  )
}

export default Tasks
