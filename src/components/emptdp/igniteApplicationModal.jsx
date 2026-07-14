import React, { useState, useEffect, useRef } from "react";
import "./applicationModal.css";
import { toast } from "react-toastify";
import { BASEURL } from "../../BaseURL/BaseURL";
import axios from "axios";

// Rate limit: track last submission time outside component so it persists
let lastSubmitTime = 0;

const IgniteApplicationModal = ({ isOpen, onClose }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [qualification, setQualification] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [programTrack, setProgramTrack] = useState("");
  const [statement, setStatement] = useState("");
  const [file, setFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Honeypot — bots fill this, humans don't see it
  const [honeypot, setHoneypot] = useState("");

  // Track when the form was opened so we can detect instant bot submissions
  const formOpenTime = useRef(Date.now());

  useEffect(() => {
    if (isOpen) formOpenTime.current = Date.now();
  }, [isOpen]);

  const validateForm = () => {
    const errors = [];

    // Honeypot check — if filled, it's a bot
    if (honeypot) return false;

    // Bot speed check — reject if submitted in under 3 seconds
    const timeOnForm = (Date.now() - formOpenTime.current) / 1000;
    if (timeOnForm < 3) {
      toast.error("Please take your time filling out the form.");
      return false;
    }

    // Rate limit — prevent resubmission within 60 seconds
    const secondsSinceLastSubmit = (Date.now() - lastSubmitTime) / 1000;
    if (lastSubmitTime && secondsSinceLastSubmit < 60) {
      toast.error(
        `Please wait ${Math.ceil(60 - secondsSinceLastSubmit)} seconds before submitting again.`
      );
      return false;
    }

    // Full Name
    if (!fullName.trim()) {
      errors.push("Full name is required.");
    } else if (fullName.trim().length < 3) {
      errors.push("Full name must be at least 3 characters.");
    } else if (!/^[a-zA-Z\s'-]+$/.test(fullName.trim())) {
      errors.push("Full name can only contain letters, spaces, hyphens, and apostrophes.");
    }

    // Email
    if (!email.trim()) {
      errors.push("Email address is required.");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      errors.push("Please enter a valid email address.");
    }

    // Phone
    if (!phone.trim()) {
      errors.push("Phone number is required.");
    } else if (!/^[+\d][\d\s\-()]{7,14}$/.test(phone.trim())) {
      errors.push("Please enter a valid phone number.");
    }

    // Location
    if (!location.trim()) {
      errors.push("Location is required.");
    } else if (location.trim().length < 2) {
      errors.push("Please enter a valid location.");
    }

    // Qualification
    if (!qualification) {
      errors.push("Please select your current academic status.");
    }

    // Specialization
    if (!specialization) {
      errors.push("Please select a specialization.");
    }

    // Program Track
    if (!programTrack) {
      errors.push("Please select a program track.");
    }

    // Statement
    if (!statement.trim()) {
      errors.push("Statement of purpose is required.");
    } else if (statement.trim().length < 50) {
      errors.push("Statement of purpose must be at least 50 characters.");
    } else if (statement.trim().length > 1000) {
      errors.push("Statement of purpose must not exceed 1000 characters.");
    }

    // CV File
    if (!file) {
      errors.push("Please upload your CV.");
    } else if (file.type !== "application/pdf") {
      errors.push("Only PDF files are allowed.");
    } else if (file.size > 150 * 1024 * 1024) {
      errors.push("CV file must not exceed 150 MB.");
    }

    if (errors.length > 0) {
      errors.forEach((err) => toast.error(err));
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    lastSubmitTime = Date.now();

    try {
      const formData = new FormData();
      formData.append("fullName", fullName.trim());
      formData.append("email", email.trim());
      formData.append("phone", phone.trim());
      formData.append("location", location.trim());
      formData.append("qualification", qualification.trim());
      formData.append("specialization", specialization.trim());
      formData.append("programTrack", programTrack.trim());
      formData.append("statement", statement.trim());
      formData.append("file", file);

      const res = await axios.post(`${BASEURL}/api/v1/email/ignite`, formData);

      if (res.data.status === "success") {
        toast.success("Application Sent Successfully");

        setFullName("");
        setEmail("");
        setPhone("");
        setLocation("");
        setQualification("");
        setSpecialization("");
        setProgramTrack("");
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
      <div className="applymodal-wrapper" role="dialog" aria-modal="true" aria-labelledby="ignitemodal-title">
        <div className="applymodal-box">
          {/* Header */}
          <div className="applymodal-header">
            <div>
              <h2 id="ignitemodal-title" className="applymodal-title">
                Apply to ETMPDP Ignite
              </h2>
              <p className="applymodal-subtitle">Limited spaces available per cohort.</p>
            </div>
            <div className="applymodal-header-right">
              <span className="applymodal-badge">Now Accepting Applications</span>
              <button className="applymodal-close" onClick={onClose} aria-label="Close modal">
                &times;
              </button>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="applymodal-form">
            {/* Honeypot — hidden from humans, bots fill it */}
            <div style={{ display: "none" }} aria-hidden="true">
              <input
                type="text"
                name="website"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            {/* Full Name */}
            <div className="applymodal-field">
              <label className="applymodal-label">Full Name</label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
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
                  placeholder="+234 000 000 0000"
                  className="applymodal-input"
                />
              </div>
            </div>

            {/* Location */}
            <div className="applymodal-field">
              <label className="applymodal-label">Location — City / State</label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="e.g. Lagos, Abuja"
                className="applymodal-input"
              />
            </div>

            {/* Qualification + Specialization */}
            <div className="applymodal-row">
              <div className="applymodal-field">
                <label className="applymodal-label">Current Academic Status</label>
                <select
                  value={qualification}
                  onChange={(e) => setQualification(e.target.value)}
                  className="applymodal-input applymodal-select"
                >
                  <option value="">Select status</option>
                  <option>Awaiting SIWES Placement</option>
                  <option>Currently on SIWES</option>
                  <option>Awaiting Industrial Training</option>
                  <option>Final Year Student</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="applymodal-field">
                <label className="applymodal-label">Specialization</label>
                <select
                  value={specialization}
                  onChange={(e) => setSpecialization(e.target.value)}
                  className="applymodal-input applymodal-select"
                >
                  <option value="">Select specialization</option>
                  <option>Software Engineering</option>
                  <option>Graphics, Motion Graphics & Brand Design</option>
                  <option>Digital Marketing & Content Strategy</option>
                  <option>IT Support, Networking & Infrastructure</option>
                  <option>Computer Engineering</option>
                  <option>Not Sure Yet</option>
                </select>
              </div>
            </div>

            {/* Program Track */}
            <div className="applymodal-field">
              <label className="applymodal-label">Program Track</label>
              <select
                value={programTrack}
                onChange={(e) => setProgramTrack(e.target.value)}
                className="applymodal-input applymodal-select"
              >
                <option value="">Select a track</option>
                <option>Ignite Foundation — 3 Months (₦120,000)</option>
                <option>Ignite Professional — 4 Months (₦160,000)</option>
                <option>Ignite Executive — 6 Months (₦240,000)</option>
                <option>Not Sure Yet</option>
              </select>
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
              {file ? (
                <span className="applymodal-file-hint" style={{ color: "#28a745" }}>
                  Selected: {file.name}
                </span>
              ) : (
                <span className="applymodal-file-hint">PDF only — max 150 MB</span>
              )}
            </div>

            {/* Statement */}
            <div className="applymodal-field">
              <label className="applymodal-label">Short Statement of Purpose</label>
              <textarea
                rows={4}
                value={statement}
                onChange={(e) => setStatement(e.target.value)}
                placeholder="Tell us why you want to join ETMPDP Ignite and what you hope to achieve..."
                className="applymodal-input applymodal-textarea"
              />
              <span className="applymodal-file-hint">{statement.length}/1000 characters</span>
            </div>

            {/* Submit */}
            <button type="submit" className="applymodal-submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default IgniteApplicationModal;
