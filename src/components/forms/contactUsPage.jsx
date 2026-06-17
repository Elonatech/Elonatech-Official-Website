import { useState, useEffect, useRef } from "react";
import { toast } from "react-toastify";
import { BASEURL } from "../../BaseURL/BaseURL";
import axios from "axios";
import "../emptdp/applicationModal.css";

let lastSubmitTime = 0;

const ContactUsPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
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
    if (!name.trim()) errors.push("Name is required.");
    if (!email.trim()) errors.push("Email address is required.");
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) errors.push("Please enter a valid email address.");
    if (!subject.trim()) errors.push("Subject is required.");
    if (!number.trim()) errors.push("Phone number is required.");
    if (!message.trim()) errors.push("Please provide a reason for the call.");

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
      const response = await axios.post(
        `${BASEURL}/api/v1/email/reason`,
        { name, email, subject, number, message },
        { headers: { "Content-Type": "application/json" } }
      );
      if (response.data.status === "success") {
        toast.success("Your form request has been submitted successfully!");
        setName(""); setEmail(""); setSubject(""); setNumber(""); setMessage("");
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
      <button
        className="btn btn-primary cvb border border-light text-light mt-5"
        onClick={() => setShowModal(true)}
      >
        <h6 className="mt-1">Click Here</h6>
      </button>

      {showModal && (
        <>
          <div className="applymodal-backdrop" onClick={() => setShowModal(false)}></div>
          <div className="applymodal-wrapper" role="dialog" aria-modal="true" aria-labelledby="contact-modal-title">
            <div className="applymodal-box">
              <div className="applymodal-header">
                <div>
                  <h2 id="contact-modal-title" className="applymodal-title">Would you like us to Call you?</h2>
                  <p className="applymodal-subtitle">Fill in your details and we will reach out to you shortly.</p>
                </div>
                <div className="applymodal-header-right">
                  <span className="applymodal-badge">Request a Call</span>
                  <button className="applymodal-close" onClick={() => setShowModal(false)} aria-label="Close modal">&times;</button>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="applymodal-form">
                <div style={{ display: "none" }} aria-hidden="true">
                  <input type="text" name="website" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} tabIndex={-1} autoComplete="off" />
                </div>

                <div className="applymodal-row">
                  <div className="applymodal-field">
                    <label className="applymodal-label">Name</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your full name" className="applymodal-input" />
                  </div>
                  <div className="applymodal-field">
                    <label className="applymodal-label">Email Address</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@email.com" className="applymodal-input" />
                  </div>
                </div>

                <div className="applymodal-row">
                  <div className="applymodal-field">
                    <label className="applymodal-label">Subject</label>
                    <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="What is this about?" className="applymodal-input" />
                  </div>
                  <div className="applymodal-field">
                    <label className="applymodal-label">Phone Number</label>
                    <input type="tel" value={number} onChange={handleChangeNumber} placeholder="080 xxxx xxxx" className="applymodal-input" />
                  </div>
                </div>

                <div className="applymodal-field">
                  <label className="applymodal-label">Reason for the Call</label>
                  <textarea rows={4} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Tell us why you want us to call you..." className="applymodal-input applymodal-textarea" />
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

export default ContactUsPage;
