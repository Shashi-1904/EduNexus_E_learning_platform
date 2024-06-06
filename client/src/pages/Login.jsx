import React,{ useState } from 'react'
import { useAuth } from '../store/auth';
import {useNavigate} from "react-router-dom"
import { toast } from 'react-toastify';

export default function Login() {

  const [user,setUser]=useState({
      email:"",
      passward:""
  });

  // handling input values
  const handleInput=(e)=>{
      
      let name=e.target.name;
      let value=e.target.value;
      setUser({
          ...user,
          [name]:value,

      });
  };

  const navigate=useNavigate();

  const {storetokenInLS,API}=useAuth();

  const URL=`${API}/api/auth/login`;

  //handling form submission
  const handleSubmit= async (e)=>{
      
      e.preventDefault();
      console.log(user);
      try {
        const response= await fetch(URL,{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(user),
    });

    console.log(response);
    const res_data= await response.json();

    if(response.ok){
        
        console.log("response from server",res_data);
        //storing token to localstorage
        storetokenInLS(res_data.token);
        setUser({
            email:"",
            passward:""
        });
        toast.success("Login Successful")
        navigate("/")
        
    }else{
        toast.error(res_data.extraDetails ? res_data.extraDetails: res_data.message )
        console.log("Invalid credentials");
    }
    
    
        
    } catch (error) {
        console.log("login",error);
    }
    

  };

return (
  <div>
    <section>
      <main>
          <div className='section-content'>
              <div className="container grid grid-two-cols">
                  <div className="registeration-image">
                      <img src="./images/login1.png" alt="Login" width="600" height='500' />
                  </div>
                  {/* Registeration Form */}
                  <div className="registeration-form section-form">
                      <h1 className="main-heading mb-3">
                          Login Form
                      </h1>
                      <br />
                      <form onSubmit={handleSubmit}>
                    
                          <div>
                              <label htmlFor="email">Email</label>
                              <input type="email" name='email' placeholder='Enter your email' id='email' required autoComplete='off' value={user.email} onChange={handleInput} />
                          </div>


                          <div>
                              <label htmlFor="passward">Passward</label>
                              <input type="passward" name='passward' placeholder='passward' id='passward' required autoComplete='off' value={user.passward} onChange={handleInput}/>
                          </div>

                     
                          <button type='submit' className='btn btn-submit'>Login Now</button>
                          
                      </form>
                  </div>
              </div>
          </div>
      </main>
    </section>
  </div>
)
}
