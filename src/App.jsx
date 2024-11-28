import {Route, Routes} from 'react-router-dom'
import axios from 'axios'
import Home from './pages/Home'
import {routes} from './helpers/routes'
import Login from './pages/Login'
import Layout from './pages/dashboard/Layout'
import MLayout from './pages/layout'
import Members from './pages/dashboard/member/Members'
import ManageEvent from './pages/dashboard/event/ManageEvent'
import Main from './pages/dashboard/maindashboard/Main'

function App() {

  axios.defaults.headers.common["Accept"] = "application/json";
  axios.defaults.headers.common["Content-Type"] = "application/json";
  // axios.defaults.headers.common["Authorization"] = `Bearer ${user_token}`;
  axios.defaults.baseURL = `https://church-server-r5yy.vercel.app/`
  // axios.defaults.baseURL = `http://localhost:3000/`

  return (
    <>
      <Routes>
        <Route element ={<MLayout/>}>
        <Route path={routes.HOME} element={<Home/>}/>
        <Route path={routes.ABOUT} element={<div>About</div>}/>
        <Route path={routes.GALLERY} element={<div>Gallery</div>}/>
        <Route path={routes.EVENT} element={<div>Events</div>}/> 
        <Route path={routes.LOGIN} element={<Login/>}/>
        </Route>
        <Route element={<Layout/>}>
          <Route path={routes.DASHBOARD} element={<Main/>}/>
          <Route path={routes.MEMBERS} element={<Members/>}/>
          <Route path={routes.MANAGE_EVENT} element={<ManageEvent/>}/>
          <Route path={routes.EXECUTIVES} element={<div>Executives</div>}/>
          <Route path={routes.SMS} element={<div>SMS Notifications</div>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
