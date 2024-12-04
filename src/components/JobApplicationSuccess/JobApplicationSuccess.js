import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./JobApplicationSuccess.css";
import { FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const JobApplicationSuccess = () => {
  const navigate = useNavigate();

  const previousUrl = sessionStorage.getItem('previousUrl');

  const shareJobLink = (platform) => {
    let shareUrl = "";

    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${previousUrl}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${previousUrl}&text=Check out this amazing job opportunity!`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${previousUrl}`;
        break;
      case "whatsapp":
        shareUrl = `https://wa.me/?text=Check out this amazing job opportunity! ${previousUrl}`;
        break;
      default:
        break;
    }

    window.open(shareUrl, "_blank");
  };

  return (
    <div className="success-page">
      <div className="success-content">
        <img
          src="https://res.cloudinary.com/elonatech/image/upload/v1733321503/1ML5gECB9Y_q2yedk.gif"
          alt="Application Success"
          className="success-image"
        />
        <h1 className="success-title">Application Submitted Successfully!</h1>
        <p className="success-message">
          Thank you for applying! We’ll review your application and get back to you soon.
          <span>You were previously at: {previousUrl}</span>
        </p>

        <div className="success-buttons">
          <button
            className="btn primary-btn"
            onClick={() => navigate("/career")}
          >
            Return to Career Page
          </button>
          <button
            className="btn secondary-btn"
            onClick={() => navigate("/")}
          >
            Explore More of Our Services
          </button>
        </div>

        <div className="social-share">
          <h3>Share this opportunity:</h3>
          <div className="social-icons">
            <button
              className="icon-btn"
              onClick={() => shareJobLink("facebook")}
            >
              <FaFacebook className="social-icon" />
            </button>
            <button
              className="icon-btn"
              onClick={() => shareJobLink("twitter")}
            >
              <FaTwitter className="social-icon" />
            </button>
            <button
              className="icon-btn"
              onClick={() => shareJobLink("linkedin")}
            >
              <FaLinkedin className="social-icon" />
            </button>
            <button
              className="icon-btn"
              onClick={() => shareJobLink("whatsapp")}
            >
              <FaWhatsapp className="social-icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobApplicationSuccess;
