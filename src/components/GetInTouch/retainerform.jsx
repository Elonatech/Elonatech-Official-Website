import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { BASEURL } from "../../BaseURL/BaseURL";
import "../emptdp/applicationModal.css";

const options = ["2 times a week", "3 times a week", "5 times a week", "Other"];

let lastSubmitTime = 0;

const Retainerform = () => {
  const [showModal, setShowModal] = useState(false);
  const [fullname, setFullname] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [state, setState] = useState("");
  const [address, setAddress] = useState("");
  const [service, setService] = useState("Retainer Services Required");
  const [contract, setContract] = useState("Contract Renewable");
  const [frequency, setFrequency] = useState("Weekly");
  const [selected, setSelected] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const formOpenTime = useRef(Date.now());

  const days = options[selected];

  useEffect(() => {
    if (showModal) formOpenTime.current = Date.now();
  }, [showModal]);

  useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [showModal]);

  function onChange(i) {
    setSelected((prev) => (i === prev ? null : i));
  }

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
    if (!company.trim()) errors.push("Company name is required.");
    if (!email.trim()) errors.push("Email address is required.");
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) errors.push("Please enter a valid email address.");
    if (!number.trim()) errors.push("Phone number is required.");
    if (service === "Retainer Services Required") errors.push("Please select a retainer service.");
    if (contract === "Contract Renewable") errors.push("Please select a contract renewal option.");
    if (!state.trim()) errors.push("State/Location is required.");
    if (!address.trim()) errors.push("Company address is required.");

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
      const newData = { fullname, company, email, number, service, contract, address, state, frequency, days };
      const response = await axios.post(`${BASEURL}/api/v1/email/retainership`, newData);
      if (response.data.status === "success") {
        toast.success("Your request has been submitted successfully!");
        setFullname(""); setCompany(""); setEmail(""); setNumber(""); setState("");
        setAddress(""); setService("Retainer Services Required"); setContract("Contract Renewable");
        setFrequency("Weekly"); setSelected(null);
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
      <button type="button" className="btn btn-danger" onClick={() => setShowModal(true)}>
        <h6 className="p-1">Need a Retainer?</h6>
      </button>

      {showModal && (
        <>
          <div className="applymodal-backdrop" onClick={() => setShowModal(false)}></div>
          <div className="applymodal-wrapper" role="dialog" aria-modal="true" aria-labelledby="retainer-modal-title">
            <div className="applymodal-box">
              <div className="applymodal-header">
                <div>
                  <h2 id="retainer-modal-title" className="applymodal-title">Need a Retainer Partnership?</h2>
                  <p className="applymodal-subtitle">Let us handle your ongoing IT needs on a retainer basis.</p>
                </div>
                <div className="applymodal-header-right">
                  <span className="applymodal-badge">Retainer Services</span>
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
                    <label className="applymodal-label">Company Name</label>
                    <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Your company name" className="applymodal-input" />
                  </div>
                </div>

                <div className="applymodal-row">
                  <div className="applymodal-field">
                    <label className="applymodal-label">Email Address</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@email.com" className="applymodal-input" />
                  </div>
                  <div className="applymodal-field">
                    <label className="applymodal-label">Phone Number</label>
                    <input type="tel" value={number} onChange={handleChangeNumber} placeholder="080 xxxx xxxx" className="applymodal-input" />
                  </div>
                </div>

                <div className="applymodal-field">
                  <label className="applymodal-label">Retainer Services Required</label>
                  <span className="applymodal-file-hint">What Retainer Services would you like us to handle for you?</span>
                  <select value={service} onChange={(e) => setService(e.target.value)} className="applymodal-input applymodal-select">
                    <option value="Retainer Services Required">Select a service</option>
                    <option value="Technical Support Retainer">Technical Support Retainer</option>
                    <option value="Graphics and Social Media Marketing">Graphics and Social Media Marketing</option>
                    <option value="Website and Email Adminstration">Website and Email Administration</option>
                    <option value="Others">Others</option>
                  </select>
                </div>

                <div className="applymodal-row">
                  <div className="applymodal-field">
                    <label className="applymodal-label">Contract Renewal</label>
                    <select value={contract} onChange={(e) => setContract(e.target.value)} className="applymodal-input applymodal-select">
                      <option value="Contract Renewable">Select renewal period</option>
                      <option value="Annually">Annually</option>
                      <option value="Bi-Annual">Bi-Annual</option>
                      <option value="Others">Others</option>
                    </select>
                  </div>
                  <div className="applymodal-field">
                    <label className="applymodal-label">Frequency</label>
                    <select value={frequency} onChange={(e) => setFrequency(e.target.value)} className="applymodal-input applymodal-select">
                      <option value="Weekly">Weekly</option>
                      <option value="Bi-weekly">Bi-Weekly</option>
                      <option value="Monthly">Monthly</option>
                    </select>
                  </div>
                </div>

                {frequency === "Weekly" && (
                  <div className="applymodal-field">
                    <label className="applymodal-label">Number of Days per Week</label>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                      {options.map((o, i) => (
                        <label key={i} style={{ display: "flex", alignItems: "center", gap: "0.5rem", cursor: "pointer" }}>
                          <input
                            type="radio"
                            name="retainerDays"
                            checked={i === selected}
                            onChange={() => onChange(i)}
                            style={{ accentColor: "#dc3545", flexShrink: 0 }}
                          />
                          <span style={{ color: "#495057", fontSize: "0.9rem" }}>{o}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                <div className="applymodal-row">
                  <div className="applymodal-field">
                    <label className="applymodal-label">State / Location</label>
                    <input type="text" value={state} onChange={(e) => setState(e.target.value)} placeholder="e.g. Lagos" className="applymodal-input" />
                  </div>
                  <div className="applymodal-field">
                    <label className="applymodal-label">Address of Company</label>
                    <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Company address" className="applymodal-input" />
                  </div>
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

export default Retainerform;
