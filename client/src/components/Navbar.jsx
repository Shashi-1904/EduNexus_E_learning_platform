import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"
import { useAuth } from '../store/auth'
import { RiAdminFill } from "react-icons/ri";

export default function Navbar() {

  const {isLoggedIn}=useAuth();

  return (
    <div>
      <header>
        <div className="container">
        <div className="logo-brand">
            <img src="/images/logo5.png" alt="logo" height="30" width="30" />
            <NavLink to={"/"}>EduNexus</NavLink>
        </div>
        <nav>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/courses">Explore</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
                {isLoggedIn ? (
                  <>
                  <li><NavLink to="/logout">Logout</NavLink></li>
                  <li style={{padding:"5px",boxShadow:" 0 4px 6px rgba(105, 103, 177, 0.5)",borderRadius:"1rem"}}><RiAdminFill /><NavLink to="/admin/users">Admin</NavLink></li>
                  </>

                ) : (
                  <>
                   <li><NavLink to="/register">Register</NavLink></li>
                    <li><NavLink to="/login">Login</NavLink></li>
                  </>
                )}
                
                
               
            </ul>
        </nav>
        </div>
      </header>
      
    </div>
  )
}
