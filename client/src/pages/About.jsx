import { NavLink } from "react-router-dom"
import React from 'react'
import { useAuth } from "../store/auth"

export  function About() {

  const {user} =useAuth();
  return (
    <div>
      {/* section 1 */}
      <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>Welcome {user ? user.username :`to our website`}</p>
              <h1>Why Choose Us</h1>
              <p>Welcome to EduNexus, your central hub for transformative learning experiences. At EduNexus, we believe that education is the key to unlocking potential and driving innovation. Our mission is to provide accessible, high-quality education to learners around the globe, empowering individuals to achieve their personal and professional goals.
                <br /><br />At EduNexus, we are dedicated to continuous improvement and innovation in education. Join us on your learning journey and discover the limitless possibilities that await. Together, we can achieve greatness.
                <br /><br />Thank you for choosing EduNexus, where your educational aspirations become reality.</p>
              <div className="btn btn-group">
                <NavLink to={"/contact"}>
                  <button className='btn'>Contact us</button>

                </NavLink>
                <NavLink to={"/"}>
                  <button className='btn'>Back to home</button>

                </NavLink>
              </div>
            </div>

            <div className="hero-image">
              <img src="./images/about1.png" alt="Coding together" width="600" height="500" />
            </div>


          </div> 
        </section>
    </div> 
  )
}
