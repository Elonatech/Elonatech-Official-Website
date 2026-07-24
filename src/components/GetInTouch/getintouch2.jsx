import React from 'react';
import Quote from './quote';
import './getintouch2.css'

const Getintouch2 = () => {
  return (
    <div className="getintouch-container">
      <img 
        src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783674503/talk_to_expert_about_your_project_rysbie_rn7yr7.jpg" 
        alt="Talk to an Expert" 
        className="getintouch-background"
      />
      <div className="getintouch-content">
        <h5 className="getintouch-title">Talk to an Expert about your project</h5>
        <Quote />
      </div>
    </div>
  );
};

export default Getintouch2;