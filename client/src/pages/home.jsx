import React from 'react'
import { NavLink } from 'react-router-dom'

export  function Home() {
  return (
    <div>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>We offer best and placement ready courses!!!</p>
              <h1>Welcome to EduNexus</h1>
              <p>Discover a world of knowledge at EduNexus, where learning meets innovation. Our platform connects passionate learners with expert educators, offering a diverse range of courses designed to empower and inspire. </p>
              <div className="btn btn-group">
                <NavLink to={"/courses"}>
                  <button className='btn'>Explore Course!</button>

                </NavLink>
                <NavLink to={"/about"}>
                  <button className='btn'>Read More</button>

                </NavLink>
              </div>
            </div>

            <div className="hero-image">
              <img src="./images/home1.png" alt="Coding together" width="600" height="600" />
            </div>


          </div>
        </section>
      </main>

      {/* second section */}

      <section className="section-analytics">
        <div className="container grid grid-four-cols">
          <div className="div1">
            <h2>50+</h2>
            <p>REgistered Companies</p>
          </div>
          <div className="div1">
            <h2>1000,00+</h2>
            <p>Happy clients</p>
          </div>
          <div className="div1">
            <h2>500</h2>
            <p>Well Known developers</p>
          </div>
          <div className="div1" id='last-child'>
            <h2>24/7</h2>
            <p>Contact Support</p>
          </div>
        </div>
      </section>

      {/* Third section */}
      <section className="section-hero">
          <div className="container grid grid-two-cols">
          <div className="hero-image">
              <img src="./images/hero3.png" alt="Coding together" width="600" height="400" />
            </div>

            <div className="hero-content">
              <p>We are world best Elearning Platform</p>
              <h1>Are you Ready</h1>
              <p>Enroll today and Start learning now!! we provide bestest courses in market which leads to placement ready</p>
              <div className="btn btn-group">
                <NavLink to={"/contact"}>
                  <button className='btn'>Connect Now</button>

                </NavLink>
                <NavLink to={"/services"}>
                  <button className='btn'>Read More</button>

                </NavLink>
              </div>
            </div>

            


          </div>
        </section>


    </div>
  )
}
