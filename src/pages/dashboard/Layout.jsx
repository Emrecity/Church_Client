import React,{useState} from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../../components/SideBar';

const Layout = () => {
    const [toggle, setToggle] = useState(true)
    const date = new Date().toDateString()
    const user = 'Baffour'
    const role = 'Admin'
  return (
    <div className='sticky flex bg-gray-200'>
    {toggle && <SideBar />}
    <main className='w-full px-5 '>
     <div className='sticky top-0 z-20 flex flex-col justify-between px-5 mb-4 text-center bg-blue-500 rounded-md sm:flex-row sm:top-2'>
       <section className='flex '>
         <button onClick={() => { setToggle(!toggle) }} className='mr-2 bg-transparent rounded-sm '><svg width="20px" height="30px" viewBox="0 0 0.6 0.6" xmlns="http://www.w3.org/2000/svg" fill="#fff"><path d="M0.6 0.188H0V0.15h0.6zm0 0.3H0V0.45h0.6zm0 -0.151H0V0.3h0.6z"/></svg></button>
       </section>

       <ul className='flex flex-col gap-2 text-center sm:flex-row'>
         <div className='flex gap-5 pl-5 place-self-center '>
           <li className='flex text-white gap-x-1 place-content-center'>
           <div className='flex flex-col'>
             User
           </div>
           </li>
           <li>
             <small className='text-sm text-left text-white place-self-center'>{date}</small>
           </li>
         </div>
       </ul>

     </div>

     <Outlet />
   </main>
 </div>
  )
}

export default Layout