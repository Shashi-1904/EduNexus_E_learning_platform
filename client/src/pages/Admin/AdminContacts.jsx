import React, { useEffect, useState } from 'react'
import { useAuth } from '../../store/auth';
import { toast } from 'react-toastify';

export default function AdminContacts() {

  const [contactData,setContactData]=useState([]);
  const {authorizationToken,API}=useAuth();


  const getContactsData=async()=>{
    try {
      const response=await fetch(`${API}/api/admin/contacts`,{
        method:"GET",
        headers:{
          Authorization: authorizationToken,
        }
      }
       

      );
      const data= await response.json();
      if(response.ok){
        setContactData(data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  // function for delete contact
  const deleteContact=async(id)=>{
    try {
      const response=await fetch(`${API}/api/admin/contacts/delete/${id}`,{
        method:"DELETE",
        headers:{
          Authorization: authorizationToken,
        }

    });
    const data =await response.json();
    

    if(response.ok){
      toast.success("Message Deleted Successfully")
      getContactsData();
    }else{
      toast.error("Server Error, Try again later!")
    }

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    getContactsData();
  },[])
  return (
    // <>
    //   {
    //     contactData.map((currContact,index)=>{
    //       return <p key={index}>{currContact.email}</p>
    //     })
    //   }
    // </>
    <section className="admin-user-section">
      <div className="container">
        <h1>Admin Contact data</h1>
      </div>
      <div className="container admin-user">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
          {contactData.map((currContact,index)=>{
            return(
              <tr key={index}>
                <td>{currContact.username}</td>
                <td>{currContact.email}</td>
                <td>{currContact.message}</td>
                <td><button onClick={()=> deleteContact(currContact._id)} className="action-button delete">Delete</button></td>

              </tr>
            ) ;
           })}
          </tbody>
        </table>
      </div>
    </section>
  )
}
