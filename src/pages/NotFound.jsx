import React from 'react'
import { useNavigate } from 'react-router-dom'


const NotFound = () => {
    const navigate = useNavigate()
  return (
    <div className='w-screen min-h-screen my-[15%] text-center text-blue-500'>
       <h1 className='text-xl sm:text-4xl'>Not Found</h1> 
       <button onClick={()=>navigate(-1)} className='p-1 px-5 my-3 text-white bg-blue-500 rounded'>Back</button>
    </div>
  )
}

export default NotFound