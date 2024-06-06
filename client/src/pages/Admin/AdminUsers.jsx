import React, { useEffect, useState } from 'react'
import { useAuth } from '../../store/auth';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';


export default function AdminUsers() {
  const[users,setUsers]=useState([]);
  const {authorizationToken,API} =useAuth();
  const getAllUserData=async ()=>{
    try {
      const response=await fetch(`${API}/api/admin/users`,{
        method:"GET",
        headers:{
          Authorization: authorizationToken,
        }

    });
    const data =await response.json();
    setUsers(data);
    console.log(`users ${data}`);

    } catch (error) {
      console.log(error);
    }
  }

  // delete user function
  const deleteUser=async(id)=>{
    try {
      const response=await fetch(`${API}/api/admin/users/delete/${id}`,{
        method:"DELETE",
        headers:{
          Authorization: authorizationToken,
        }

    });
    const data =await response.json();
    console.log(`users after delete ${data}`);

    if(response.ok){
      toast.success("User Deleted Successfully")
      getAllUserData();
    }

    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    getAllUserData();
  },[]);


  return (
    <>
    <section className="admin-user-section">
      <h1>Admin User data</h1>
      <div className="container">
        
      </div>
      <div className="container admin-user">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
          {users.map((currUser,index)=>{
            return(
              <tr key={index}>
                <td>{currUser.username}</td>
                <td>{currUser.email}</td>
                <td>{currUser.phone}</td>
                <td><Link className="action-button edit"to={`/admin/users/${currUser._id}/edit`}>Edit</Link> </td>
                <td><button onClick={()=> deleteUser(currUser._id)} className="action-button delete">Delete</button></td>

              </tr>
            ) ;
           })}
          </tbody>
        </table>
      </div>
    </section>
    
    </>
  )
}
