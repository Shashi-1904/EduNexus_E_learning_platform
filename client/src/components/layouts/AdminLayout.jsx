import React from 'react'
import { FaUser } from "react-icons/fa";
import { NavLink, Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../../store/auth';
import { MdMessage } from "react-icons/md";
import { MdDashboard } from "react-icons/md";
import "./AdminLayout.css"


export default function AdminLayout() {
  const {user,isLoading}=useAuth();

  if(isLoading){
    return <h1>Loading....</h1>
  }

  if(!user.isAdmin){
    return <Navigate to="/" />
  }

  return (
    <>
    <div style={{ marginLeft: '250px', padding: '20px',marginTop:"0",marginBottom:"20rem"}}>
        <Outlet/>
      </div>
      <div className="admin-sidebar">
        <h3><MdDashboard />Admin Dashboard</h3>
        <nav>
          <ul>
              <li><NavLink to="/admin/users"><FaUser />Users</NavLink></li>
              <li><NavLink to="/admin/contacts"><MdMessage />Contacts</NavLink></li>
          </ul>
        </nav>
      </div>
      
    </>
  )
}
