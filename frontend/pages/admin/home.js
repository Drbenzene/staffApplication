import React from 'react'
import AdminSidebar from '../../components/adminSidebar'
import HomeContent from '../../components/Home/Home'

function Home() {
  return (
    <div>
        <AdminSidebar children={<HomeContent />} />
      
    </div>
  )
}

export default Home
