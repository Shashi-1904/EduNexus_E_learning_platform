import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';

export default function Register() {

    const [user,setUser]=useState({
        username:"",
        email:"",
        phone:"",
        passward:""
    });

    

    const {storetokenInLS,API}=useAuth();
    const URL=`${API}/api/auth/register`;

    // handling input values
    const handleInput=(e)=>{
        
        let name=e.target.name;
        let value=e.target.value;
        setUser({
            ...user,
            [name]:value,

        });
    };

    //for navigate to home
    const navigate=useNavigate();
    

    //handling form submission
    const handleSubmit= async (e)=>{
        
        e.preventDefault();
        console.log(user);
        //backend connection
        try {
            const response= await fetch(URL,{
            method:"POST",
            headers:{
                "COntent-Type":"application/json",
            },
            body:JSON.stringify(user),
        });

        const res_data= await response.json();
        console.log("response from server",res_data);

        if(response.ok){
            
            //storing token
            storetokenInLS(res_data.token);
           
            setUser({
                username:"",
                email:"",
                phone:"",
                passward:""
            });
            toast.success("Registration Successful")
            navigate("/")
            window.scrollTo(0, 0);
        }
        else{
            toast.error(res_data.extraDetails ? res_data.extraDetails: res_data.message )
        }
        console.log(response);
        
            
        } catch (error) {
            console.log("register",error);
        }
        

    };

  return (
    <div>
      <section className='section-content'>
        <main>
            <div className="section-registeration">
                <div className="container grid grid-two-cols">
                    <div className="registeration-image">
                        <img src="./images/register1.png" alt="Registeration" width="500" height='500' />
                    </div>
                    {/* Registeration Form */}
                    <div className="registeration-form section-form">
                        <h1 className="main-heading mb-3">
                            Registeration Form
                        </h1>
                        <br />
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="username">Username</label>
                                <input type="text" name='username' placeholder='username' id='username' required autoComplete='off' value={user.username} onChange={handleInput} />
                            </div>

                            <div>
                                <label htmlFor="email">Email</label>
                                <input type="email" name='email' placeholder='Enter your email' id='email' required autoComplete='off' value={user.email} onChange={handleInput} />
                            </div>

                            <div>
                                <label htmlFor="phone">Phone</label>
                                <input type="number" name='phone' placeholder='phone' id='phone' required autoComplete='off' value={user.phone} onChange={handleInput}/>
                            </div>

                            <div>
                                <label htmlFor="passward">Passward</label>
                                <input type="passward" name='passward' placeholder='passward' id='passward' required autoComplete='off' value={user.passward} onChange={handleInput}/>
                            </div>

                            
                            <button type='submit' className='btn btn-submit'>Register Now</button>
                            
                        </form>
                    </div>
                </div>
            </div>
        </main>
      </section>
    </div>
  )
}
