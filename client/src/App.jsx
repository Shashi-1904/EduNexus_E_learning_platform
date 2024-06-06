import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Home } from './pages/home'
import {About} from "./pages/About"
import Navbar from './components/Navbar'
import Register from './pages/Register'
import Login from './pages/Login'
import Contact from './pages/Contact'
import Error from './pages/Error'
import Footer from './components/Footer/Footer'
import Logout from './pages/Logout'
import Course from './pages/Course'


// Admin Pages
import AdminLayout from './components/layouts/AdminLayout'
import AdminUsers from './pages/Admin/AdminUsers'
import AdminContacts from './pages/Admin/AdminContacts'
import AdminUpdate from './pages/Admin/AdminUpdate'

export default function App() {
  return (
    <div>
      <BrowserRouter>  
        <Navbar/>
        
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/courses' element={<Course/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/logout' element={<Logout/>} />
          <Route path='*' element={<Error/>} />

          

          {/* Admin routes */}
          <Route path='/admin' element={<AdminLayout/>}>
            <Route path='users' element={<AdminUsers/>} />
            <Route path='contacts' element={<AdminContacts/>} />
            <Route path='users/:id/edit' element={<AdminUpdate/>} />

           </Route>

        </Routes>
        
        <Footer/>
      </BrowserRouter>
    </div>
  )
}
