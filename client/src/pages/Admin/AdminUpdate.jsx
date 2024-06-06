import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useAuth } from '../../store/auth';
import { toast } from 'react-toastify';
import {useNavigate} from "react-router-dom"


export default function AdminUpdate() {
    const [data,setData]=useState({
        username:"",
        email:"",
        phone:"",
    })

    //useParams for getting user id from url
    const params=useParams();
    const {authorizationToken,API}=useAuth();
    const navigate=useNavigate();


    // Get single user data
  const getSingleUserData=async()=>{
    try {
      const response=await fetch(`${API}/api/admin/users/${params.id}`,{
        method:"GET",
        headers:{
          Authorization: authorizationToken,
        }

    });
    const data =await response.json();
    console.log(`users data ${data}`);

    setData(data);

    // if(response.ok){
    //   toast.success("User Deleted Successfully")
    //   getAllUserData();
    // }

    } catch (error) {
      console.log(error);
    }
  }

    useEffect(()=>{
        getSingleUserData();
    },[])
    
    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;

        setData({
            ...data,
            [name]:value,
        })
    };

    // to update the data
    const handleSubmit= async(e)=>{
        e.preventDefault();
        try {
            const response=await fetch(`${API}/api/admin/users/update/${params.id}`,{
                method:"PATCH",
                headers:{
                    "Content-Type":"application/json",
                    Authorization: authorizationToken,
                },
                body:JSON.stringify(data),
        
            });
            if(response.ok){
                toast.success("Updataed Successfully!");
                navigate("/admin/users")

            }else{
                toast.error("Update Error!")
            }
            
        }catch (error) {
            console.log(error);
          }

    }


  return (
    <div>
      <section className='section-content'>
        <main>
            <div className="section-registeration">
                <div className="container grid grid-two-cols">
                    <div className="registeration-image">
                        <img src="/images/user.png" alt="user" width="450" height='450' />
                    </div>
                    {/* Registeration Form */}
                    <div className="registeration-form section-form">
                        <h1 className="main-heading mb-3">
                            Update User
                        </h1>
                        <br />
                        <form  onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="username">Username</label>
                                <input type="text" name='username' placeholder='username' id='username' required autoComplete='off' value={data.username} onChange={handleInput} />
                            </div>

                            <div>
                                <label htmlFor="email">Email</label>
                                <input type="email" name='email' placeholder='Enter your email' id='email' required autoComplete='off' value={data.email} onChange={handleInput} />
                            </div>

                            <div>
                                <label htmlFor="phone">Phone</label>
                                <input type="number" name='phone' placeholder='phone' id='phone' required autoComplete='off' value={data.phone} onChange={handleInput}/>
                            </div>

                            
                            <button type='submit' className='btn btn-submit'>Update</button>
                            
                        </form>
                    </div>
                </div>
            </div>
        </main>
      </section>
    </div>
  )
}
