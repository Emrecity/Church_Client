import React from 'react'
import { routes } from '../helpers/routes'
import { useNavigate, Link } from 'react-router-dom'

const NavigationBar = () => {
  const navigate = useNavigate()
  return (
<div className="sticky top-0 z-10 text-white bg-blue-500 navbar">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h7" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-blue-300 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li className='hover:bg-blue-500 hover:rounded'><Link to={routes.HOME}>Home</Link></li>
        <li className='hover:bg-blue-500 hover:rounded'><Link to={routes.EVENT}>Events</Link></li>
        {/* <li className='hover:bg-blue-500 hover:rounded'><a>Quotes</a></li>
        <li className='hover:bg-blue-500 hover:rounded'><a>About Us</a></li>
        <li className='hover:bg-blue-500 hover:rounded'><a>Contact Us</a></li> */}
      </ul>
    </div>
  </div>
  <div className="hidden sm:block navbar-center">
    <a className="text-xl btn btn-ghost">Presbyterian Church Of Ghana</a>
  </div>
  <div className="navbar-end">
    <button onClick={()=>navigate(routes.LOGIN)} className="btn-secondary">
      Login
    </button>
  </div>
</div>
  )
}

export default NavigationBar