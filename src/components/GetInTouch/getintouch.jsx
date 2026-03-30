import React from 'react';
import Quote from './quote';
import './getintouch.css'

const Getintouch = () => {
  return (
    <div className="getintouch-wrapper">
      <div className="getintouch-container">
        <img 
          src="https://res.cloudinary.com/elonatech/image/upload/v1708598256/getIntouchBanner/talk_to_expert_about_your_digital_needs_jthbar.jpg" 
          alt="Talk with An Expert" 
          className="getintouch-background"
        />
        <div className="getintouch-content">
          <h4 className="getintouch-title">Talk with An Expert About Your Next Digital Needs.</h4>
          <Quote />
        </div>
      </div>
    </div>
  );
};

export default Getintouch;