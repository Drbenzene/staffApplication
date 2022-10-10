import React from 'react'
import StaffSideBar from '../../components/staffSideBar'
import UserHome from '../../components/Users/Home'

function Home() {
  return (
    <div>
        <StaffSideBar children={<UserHome />} />
      
    </div>
  )
}

export default Home
