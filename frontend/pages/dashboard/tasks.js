import React from 'react'
import AssignedTasks from '../../components/Users/AssignedTasks'
import StaffSideBar from '../../components/staffSideBar'

function TaskScreen() {
  return (
    <div>
        <StaffSideBar children={<AssignedTasks />} />
    </div>
  )
}

export default TaskScreen