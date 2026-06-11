import React, { useState, useEffect } from "react";
import "./applicationModal.css";
import { toast } from "react-toastify";
import { BASEURL } from "../../BaseURL/BaseURL";
import axios from "axios";

const ApplicationModal = ({ isOpen, onClose }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [qualification, setQualification] = useState("");
  const [areaOfInterest, setAreaOfInterest] = useState("");
  const [statement, setStatement] = useState("");
  const [file, setFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (!file) {
        toast.error("Please upload a file");
        setIsSubmitting(false);
        return;
      }
      if (file.type !== "application/pdf") {
        toast.error("Only PDF files are allowed");
        setIsSubmitting(false);
        return;
      }

      const formData = new FormData();
      formData.append("fullName", fullName.trim());
      formData.append("email", email.trim());
      formData.append("phone", phone.trim());
      formData.append("location", location.trim());
      formData.append("qualification", qualification.trim());
      formData.append("areaOfInterest", areaOfInterest.trim());
      formData.append("statement", statement.trim());
      formData.append("file", file);

      // for (let [key, value] of formData.entries()) {
      //   if (value instanceof File) {
      //     console.log(`${key}: [File] ${value.name}`);
      //   } else {
      //     console.log(`${key}: ${value}`);
      //   }
      // }

      const res = await axios.post(`${BASEURL}/api/v1/email/emptdp`, formData);

      // console.log("Submission response:", res);

      if (res.data.status === "success") {
        toast.success("Application Sent Successfully");

        setFullName("");
        setEmail("");
        setPhone("");
        setLocation("");
        setQualification("");
        setAreaOfInterest("");
        setStatement("");
        setFile(null);

        onClose();
      } else {
        toast.error(res.data.message || "Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  /* Lock body scroll while modal is open */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="applymodal-backdrop" onClick={onClose}></div>

      {/* Modal box */}
      <div
        className="applymodal-wrapper"
        role="dialog"
        aria-modal="true"
        aria-labelledby="applymodal-title"
      >
        <div className="applymodal-box">
          {/* Header */}
          <div className="applymodal-header">
            <div>
              <h2 id="applymodal-title" className="applymodal-title">
                Apply Now
              </h2>
              <p className="applymodal-subtitle">
                Limited spaces available per cohort.
              </p>
            </div>
            <div className="applymodal-header-right">
              <span className="applymodal-badge">
                Now Accepting Applications
              </span>
              <button
                className="applymodal-close"
                onClick={onClose}
                aria-label="Close modal"
              >
                &times;
              </button>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="applymodal-form">
            {/* Full Name */}
            <div className="applymodal-field">
              <label className="applymodal-label">Full Name</label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                placeholder="Enter your full name"
                className="applymodal-input"
              />
            </div>

            {/* Email + Phone */}
            <div className="applymodal-row">
              <div className="applymodal-field">
                <label className="applymodal-label">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="you@email.com"
                  className="applymodal-input"
                />
              </div>
              <div className="applymodal-field">
                <label className="applymodal-label">Phone Number</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  placeholder="+234 000 000 0000"
                  className="applymodal-input"
                />
              </div>
            </div>

            {/* Location */}
            <div className="applymodal-field">
              <label className="applymodal-label">
                Location — City / State
              </label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
                placeholder="e.g. Lagos, Abuja"
                className="applymodal-input"
              />
            </div>

            {/* Qualification + Area of Interest */}
            <div className="applymodal-row">
              <div className="applymodal-field">
                <label className="applymodal-label">
                  Highest Qualification
                </label>
                <select
                  value={qualification}
                  onChange={(e) => setQualification(e.target.value)}
                  required
                  className="applymodal-input applymodal-select"
                >
                  <option value="">Select qualification</option>
                  <option>SSCE</option>
                  <option>OND</option>
                  <option>HND</option>
                  <option>B.Sc</option>
                  <option>M.Sc</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="applymodal-field">
                <label className="applymodal-label">Area of Interest</label>
                <select
                  value={areaOfInterest}
                  onChange={(e) => setAreaOfInterest(e.target.value)}
                  required
                  className="applymodal-input applymodal-select"
                >
                  <option value="">Select area of interest</option>
                  <option>Technology Foundations</option>
                  <option>Networking</option>
                  <option>Web Design</option>
                  <option>Digital Marketing</option>
                  <option>Creative Design</option>
                  <option>Leadership</option>
                  <option>Not Sure Yet</option>
                </select>
              </div>
            </div>

            {/* CV Upload */}
            <div className="applymodal-field">
              <label className="applymodal-label">Upload CV (PDF only)</label>
              <input
                type="file"
                accept=".pdf"
                onChange={(e) => setFile(e.target.files[0])}
                className="applymodal-input applymodal-file"
              />
              {file && (
                <span
                  className="applymodal-file-hint"
                  style={{ color: "#28a745" }}
                >
                  Selected: {file.name}
                </span>
              )}
              {!file && (
                <span className="applymodal-file-hint">
                  PDF only — max 150 MB
                </span>
              )}
            </div>

            {/* Statement */}
            <div className="applymodal-field">
              <label className="applymodal-label">
                Short Statement of Purpose
              </label>
              <textarea
                rows={4}
                value={statement}
                onChange={(e) => setStatement(e.target.value)}
                required
                placeholder="Tell us why you want to join ETMPDP and what you hope to achieve..."
                className="applymodal-input applymodal-textarea"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="applymodal-submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ApplicationModal;
