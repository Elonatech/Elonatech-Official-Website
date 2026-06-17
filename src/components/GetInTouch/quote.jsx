import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { BASEURL } from "../../BaseURL/BaseURL";
import "../emptdp/applicationModal.css";

let lastSubmitTime = 0;

const Quote = () => {
  const [showModal, setShowModal] = useState(false);
  const [fullname, setFullname] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [project, setProject] = useState("");
  const [location, setLocation] = useState("");
  const [letter, setLetter] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const formOpenTime = useRef(Date.now());

  useEffect(() => {
    if (showModal) formOpenTime.current = Date.now();
  }, [showModal]);

  useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [showModal]);

  const handleChangeNumber = (e) => setNumber(e.target.value.replace(/\D/g, ""));

  const validateForm = () => {
    if (honeypot) return false;

    const timeOnForm = (Date.now() - formOpenTime.current) / 1000;
    if (timeOnForm < 3) {
      toast.error("Please take your time filling out the form.");
      return false;
    }

    const secondsSinceLastSubmit = (Date.now() - lastSubmitTime) / 1000;
    if (lastSubmitTime && secondsSinceLastSubmit < 60) {
      toast.error(`Please wait ${Math.ceil(60 - secondsSinceLastSubmit)} seconds before submitting again.`);
      return false;
    }

    const errors = [];
    if (!fullname.trim()) errors.push("Full name is required.");
    if (!email.trim()) errors.push("Email address is required.");
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) errors.push("Please enter a valid email address.");
    if (!company.trim()) errors.push("Company name is required.");
    if (!number.trim()) errors.push("Phone number is required.");
    if (!project.trim()) errors.push("Project title is required.");
    if (!location.trim()) errors.push("Project location is required.");
    if (!letter.trim()) errors.push("Project description is required.");

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
      const response = await axios.post(`${BASEURL}/api/v1/email/quote`, { fullname, company, email, number, project, location, letter });
      if (response.data.status === "success") {
        toast.success("Your quote request has been submitted successfully!");
        setFullname(""); setCompany(""); setEmail(""); setNumber("");
        setProject(""); setLocation(""); setLetter("");
        setShowModal(false);
      } else {
        toast.error(response.data.message || "Submission failed");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <button className="btn btn-danger cvb" onClick={() => setShowModal(true)}>
        <h5>Request A Quote</h5>
      </button>

      {showModal && (
        <>
          <div className="applymodal-backdrop" onClick={() => setShowModal(false)}></div>
          <div className="applymodal-wrapper" role="dialog" aria-modal="true" aria-labelledby="quote-modal-title">
            <div className="applymodal-box">
              <div className="applymodal-header">
                <div>
                  <h2 id="quote-modal-title" className="applymodal-title">Request A Quote</h2>
                  <p className="applymodal-subtitle">Let us know about your project and we will get back to you.</p>
                </div>
                <div className="applymodal-header-right">
                  <span className="applymodal-badge">Get A Quote</span>
                  <button className="applymodal-close" onClick={() => setShowModal(false)} aria-label="Close modal">&times;</button>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="applymodal-form">
                <div style={{ display: "none" }} aria-hidden="true">
                  <input type="text" name="website" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} tabIndex={-1} autoComplete="off" />
                </div>

                <div className="applymodal-row">
                  <div className="applymodal-field">
                    <label className="applymodal-label">Full Name</label>
                    <input type="text" value={fullname} onChange={(e) => setFullname(e.target.value)} placeholder="Your full name" className="applymodal-input" />
                  </div>
                  <div className="applymodal-field">
                    <label className="applymodal-label">Email Address</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@email.com" className="applymodal-input" />
                  </div>
                </div>

                <div className="applymodal-field">
                  <label className="applymodal-label">Company Name</label>
                  <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Your company name" className="applymodal-input" />
                </div>

                <div className="applymodal-row">
                  <div className="applymodal-field">
                    <label className="applymodal-label">Phone Number</label>
                    <input type="tel" value={number} onChange={handleChangeNumber} placeholder="080 xxxx xxxx" className="applymodal-input" />
                  </div>
                  <div className="applymodal-field">
                    <label className="applymodal-label">Title of Project</label>
                    <input type="text" value={project} onChange={(e) => setProject(e.target.value)} placeholder="Project title" className="applymodal-input" />
                  </div>
                </div>

                <div className="applymodal-field">
                  <label className="applymodal-label">Project Location</label>
                  <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="e.g. Lagos, Abuja" className="applymodal-input" />
                </div>

                <div className="applymodal-field">
                  <label className="applymodal-label">Project Description</label>
                  <textarea rows={5} value={letter} onChange={(e) => setLetter(e.target.value)} placeholder="Describe your project..." className="applymodal-input applymodal-textarea" />
                </div>

                <button type="submit" className="applymodal-submit" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Quote;
