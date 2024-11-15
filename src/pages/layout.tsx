import React from 'react'
import { Outlet } from 'react-router-dom'
import NavigationBar from '../components/NavigationBar'

const layout = () => {
  return (
    <div className='flex flex-col'>
        <NavigationBar/>
        <div className='px-5'>
          <Outlet/>
        </div>
    </div>
  )
}

export default layout