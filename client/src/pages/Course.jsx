import React from 'react';
import { useAuth } from '../store/auth';

export default function Course() {
  const { courses } = useAuth();

  // Ensure courses is an array
  const courseList = Array.isArray(courses) ? courses : [];

  return (
    <div>
      <section className="section-courses">
        <div className="heading container">
          <h1>Explore Course !!</h1>
        </div>
        <div className="container">
          <div className="grid grid-three-cols">
            {courseList.map((currElem, index) => {
              const { price, description, instructor, title, level } = currElem;

              return (
                <div className="card" key={index}>
                  <div className="card-image">
                    <img src="./images/hero3.png" alt="Course Image" width="300" />
                  </div>
                  <div className="card-details">
                    <div className="grid grid-two-cols">
                      <p>Teacher: {instructor}</p>
                      <p>Rs: {price}</p>
                    </div>
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <h6>Level: {level}</h6>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
