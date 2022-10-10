import {useEffect, useState} from 'react'


const stats = [
    { name: 'Assigned Tasks', stat: '75' },
    { name: 'Completed Tasks', stat: '36' },
    { name: 'Total Active Projects', stat: '15' },
  ]
  
  export default function Home() {
    return (
      <>

      <div>
        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {stats.map((item) => (
            <div key={item.name} className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
              <dt className="text-sm font-medium text-gray-500 truncate">{item.name}</dt>
              <dd className="mt-1 text-3xl font-semibold text-gray-900">{item.stat}</dd>
            </div>
          ))}
        </div>
      </div>
      </>
    )
  }