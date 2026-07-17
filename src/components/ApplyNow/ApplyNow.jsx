import { useState, useEffect, useRef } from "react";
import { toast } from "react-toastify";
import { BASEURL } from "../../BaseURL/BaseURL";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../emptdp/applicationModal.css";

let lastSubmitTime = 0;

const ApplyNow = () => {
  let navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [gender, setGender] = useState("Male");
  const [address, setAddress] = useState("");
  const [dob, setDob] = useState("");
  const [skill, setSkill] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("Unemployed");
  const [file, setFile] = useState(null);
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
    if (!firstname.trim()) errors.push("First name is required.");
    if (!lastname.trim()) errors.push("Last name is required.");
    if (!email.trim()) errors.push("Email address is required.");
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) errors.push("Please enter a valid email address.");
    if (!number.trim()) errors.push("Phone number is required.");
    if (!address.trim()) errors.push("Residence is required.");
    if (!dob) errors.push("Date of birth is required.");
    if (!skill.trim()) errors.push("Skills/Specialty is required.");
    if (!category) errors.push("Please select a job category.");
    if (!file) errors.push("Please upload your CV (PDF).");
    else if (file.type !== "application/pdf") errors.push("Only PDF files are allowed.");
    else if (file.size > 15 * 1024 * 1024) errors.push("CV file must not exceed 15 MB.");

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
      formData.append("firstname", firstname.trim());
      formData.append("lastname", lastname.trim());
      formData.append("email", email.trim());
      formData.append("number", number.trim());
      formData.append("gender", gender.trim());
      formData.append("address", address.trim());
      formData.append("dob", dob.trim());
      formData.append("category", category.trim());
      formData.append("status", status.trim());
      formData.append("letter", letter);
      formData.append("skill", skill.trim());
      formData.append("file", file);

      const res = await axios.post(`${BASEURL}/api/v1/email/job`, formData, { timeout: 25000 });

      if (res.data.status === "success") {
        toast.success("Job Application Sent Successfully");
        setFirstname(""); setLastname(""); setEmail(""); setNumber("");
        setGender("Male"); setAddress(""); setDob(""); setSkill("");
        setCategory(""); setStatus("Unemployed"); setFile(null); setLetter("");
        setShowModal(false);
        navigate("/application-success");
      } else {
        toast.error(res.data.message || "Submission failed");
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error(
        error.code === "ECONNABORTED"
          ? "This is taking too long — please check your connection and try again."
          : error.response?.data?.message || "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div>
        <button
          className="btn btn-primary border border-light text-light mt- mb-3"
          onClick={() => setShowModal(true)}
        >
          <h6 className="mt-1">Apply Now</h6>
        </button>

        {showModal && (
          <>
            <div className="applymodal-backdrop" onClick={() => setShowModal(false)}></div>
            <div className="applymodal-wrapper" role="dialog" aria-modal="true" aria-labelledby="applynow-modal-title">
              <div className="applymodal-box">
                <div className="applymodal-header">
                  <div>
                    <h2 id="applynow-modal-title" className="applymodal-title">Apply Now</h2>
                    <p className="applymodal-subtitle">Join the Elonatech team — fill in your details below.</p>
                  </div>
                  <div className="applymodal-header-right">
                    <span className="applymodal-badge">Now Hiring</span>
                    <button className="applymodal-close" onClick={() => setShowModal(false)} aria-label="Close modal">&times;</button>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="applymodal-form">
                  <div style={{ display: "none" }} aria-hidden="true">
                    <input type="text" name="website" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} tabIndex={-1} autoComplete="off" />
                  </div>

                  <div className="applymodal-row">
                    <div className="applymodal-field">
                      <label className="applymodal-label">First Name</label>
                      <input type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)} placeholder="First name" className="applymodal-input" />
                    </div>
                    <div className="applymodal-field">
                      <label className="applymodal-label">Last Name</label>
                      <input type="text" value={lastname} onChange={(e) => setLastname(e.target.value)} placeholder="Last name" className="applymodal-input" />
                    </div>
                  </div>

                  <div className="applymodal-row">
                    <div className="applymodal-field">
                      <label className="applymodal-label">Email Address</label>
                      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@email.com" className="applymodal-input" />
                    </div>
                    <div className="applymodal-field">
                      <label className="applymodal-label">Phone Number</label>
                      <input type="tel" value={number} maxLength="11" onChange={(e) => setNumber(e.target.value)} placeholder="080 xxxx xxxx" className="applymodal-input" />
                    </div>
                  </div>

                  <div className="applymodal-row">
                    <div className="applymodal-field">
                      <label className="applymodal-label">Gender</label>
                      <select value={gender} onChange={(e) => setGender(e.target.value)} className="applymodal-input applymodal-select">
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
                    </div>
                    <div className="applymodal-field">
                      <label className="applymodal-label">Date of Birth</label>
                      <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} className="applymodal-input" />
                    </div>
                  </div>

                  <div className="applymodal-field">
                    <label className="applymodal-label">Residence</label>
                    <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Current residence (State, Area, Nearest Bus Stop)" className="applymodal-input" />
                  </div>

                  <div className="applymodal-field">
                    <label className="applymodal-label">Skills / Specialty</label>
                    <input type="text" value={skill} onChange={(e) => setSkill(e.target.value)} placeholder="Separate each skill with a comma" className="applymodal-input" />
                  </div>

                  <div className="applymodal-row">
                    <div className="applymodal-field">
                      <label className="applymodal-label">Job Category</label>
                      <select value={category} onChange={(e) => setCategory(e.target.value)} className="applymodal-input applymodal-select">
                        <option value="">Select a category</option>
                        <option value="Graphic Designer/Digital Marketer">Graphic Designer/Digital Marketer</option>
                        <option value="Full Stack Web developer">Full Stack Web Developer</option>
                        <option value="Digital Marketer">Digital Marketer</option>
                        <option value="Motion Graphics Designer/Animator">Motion Graphics Designer/Animator</option>
                        <option value="Systems/Network Engineer">Systems/Network Engineer</option>
                        <option value="Marketing & Sales Representative">Marketing & Sales Representative</option>
                      </select>
                    </div>
                    <div className="applymodal-field">
                      <label className="applymodal-label">Current Employment Status</label>
                      <select value={status} onChange={(e) => setStatus(e.target.value)} className="applymodal-input applymodal-select">
                        <option value="Unemployed">Unemployed</option>
                        <option value="Employed">Employed</option>
                        <option value="Freelance">Freelance</option>
                      </select>
                    </div>
                  </div>

                  <div className="applymodal-field">
                    <label className="applymodal-label">Upload your CV (PDF only)</label>
                    <input type="file" accept=".pdf" onChange={(e) => setFile(e.target.files[0])} className="applymodal-input applymodal-file" />
                    {file ? (
                      <span className="applymodal-file-hint" style={{ color: "#28a745" }}>Selected: {file.name}</span>
                    ) : (
                      <span className="applymodal-file-hint">PDF only — max 15 MB</span>
                    )}
                  </div>

                  <div className="applymodal-field">
                    <label className="applymodal-label">Cover Letter</label>
                    <textarea rows={5} value={letter} onChange={(e) => setLetter(e.target.value)} placeholder="Write your cover letter here..." className="applymodal-input applymodal-textarea" />
                  </div>

                  <button type="submit" className="applymodal-submit" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                  </button>
                </form>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ApplyNow;
