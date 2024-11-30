import React from 'react'
import { useNavigate } from 'react-router-dom'

const Events = () => {
  return (
    <div className='w-screen min-h-screen my-[15%] text-center text-blue-500'>
        Events Page under construction
        <button onClick={()=>navigate(-1)} className='p-1 px-5 my-3 text-white bg-blue-500 rounded'>Back</button>
    </div>
  )
}

export default Events