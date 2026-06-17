import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { BASEURL } from "../../BaseURL/BaseURL";
import "../emptdp/applicationModal.css";

let lastSubmitTime = 0;

const Session = () => {
  const [showModal, setShowModal] = useState(false);
  const [appointment, setAppointment] = useState("choose");
  const [online, setOnline] = useState("choose");
  const [offline, setOffline] = useState("choose");
  const [showHour, setShowHour] = useState(false);
  const [showMinute, setShowMinute] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [meet, setMeet] = useState("");
  const [address, setAddress] = useState("");
  const [discuss, setDiscuss] = useState("");
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [gmt, setGmt] = useState("AM");
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

  const handleChange = (e) => setPhone(e.target.value.replace(/\D/g, ""));
  const handleChangeMeet = (e) => setMeet(e.target.value);
  const handleAppointmentChange = (e) => setAppointment(e.target.value);
  const handleOfflineChange = (e) => setOffline(e.target.value);

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
    if (!email.trim()) errors.push("Email is required.");
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) errors.push("Please enter a valid email address.");
    if (!phone.trim()) errors.push("Phone number is required.");
    if (appointment === "choose") errors.push("Please pick an appointment type.");
    if (appointment === "online" && online === "choose") errors.push("Please select an online platform.");
    if (appointment === "offline" && offline === "choose") errors.push("Please select a meeting location.");
    if (appointment === "offline" && offline === "location" && !address.trim()) errors.push("Please provide your address.");
    if (!date) errors.push("Please pick a date for the meeting.");
    if (!hour) errors.push("Please select the meeting hour.");
    if (!minute) errors.push("Please select the meeting minute.");
    if (!discuss.trim()) errors.push("Please briefly describe what you would like to discuss.");

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
    const formValues = { name, email, phone, online, meet, address, discuss, date, hour, minute, gmt };
    try {
      const response = await axios.post(`${BASEURL}/api/v1/email/session`, formValues);
      if (response.data.status === "success") {
        toast.success("Your session request has been submitted successfully!");
        setName(""); setEmail(""); setPhone(""); setMeet(""); setAddress("");
        setDiscuss(""); setDate(""); setHour(""); setMinute(""); setGmt("AM");
        setAppointment("choose"); setOnline("choose"); setOffline("choose");
        setShowModal(false);
      }
    } catch (error) {
      toast.error(error.response?.data || "Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  };

  const pickerStyle = { border: "1px solid #ddd", borderRadius: "8px", padding: "0.5rem 1rem", cursor: "pointer", minWidth: "60px", textAlign: "center", background: "#fff" };
  const dropdownStyle = { position: "absolute", top: "100%", left: 0, background: "#fff", border: "1px solid #ddd", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", maxHeight: "150px", overflowY: "auto", zIndex: 20, minWidth: "60px" };

  return (
    <>
      <button type="button" className="btn btn-danger" onClick={() => setShowModal(true)}>
        <h5>Book A Session</h5>
      </button>

      {showModal && (
        <>
          <div className="applymodal-backdrop" onClick={() => setShowModal(false)}></div>
          <div className="applymodal-wrapper" role="dialog" aria-modal="true" aria-labelledby="session-modal-title">
            <div className="applymodal-box">
              <div className="applymodal-header">
                <div>
                  <h2 id="session-modal-title" className="applymodal-title">Book A Session</h2>
                  <p className="applymodal-subtitle">Schedule a meeting with our team.</p>
                </div>
                <div className="applymodal-header-right">
                  <span className="applymodal-badge">Book Now</span>
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
                    <label className="applymodal-label">Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@email.com" className="applymodal-input" />
                  </div>
                </div>

                <div className="applymodal-field">
                  <label className="applymodal-label">Phone Number</label>
                  <input type="tel" value={phone} onChange={handleChange} placeholder="080 xxxx xxxx" className="applymodal-input" />
                </div>

                <div className="applymodal-field">
                  <label className="applymodal-label">Pick your Appointment of Choice</label>
                  <select value={appointment} onChange={handleAppointmentChange} className="applymodal-input applymodal-select">
                    <option value="choose">You can only choose one</option>
                    <option value="online">Online Appointment</option>
                    <option value="offline">Offline Appointment</option>
                  </select>
                </div>

                {appointment === "online" && (
                  <>
                    <div className="applymodal-field">
                      <label className="applymodal-label">Choose a Platform</label>
                      <select value={online} onChange={(e) => setOnline(e.target.value)} className="applymodal-input applymodal-select">
                        <option value="choose">Select your preferred platform</option>
                        <option value="Zoom">Zoom</option>
                        <option value="Google Meet">Google Meet</option>
                        <option value="WhatApp Video Call">WhatsApp Video Call</option>
                        <option value="Facebook Video Call">Facebook Video Call</option>
                      </select>
                    </div>
                    {["Zoom", "Google Meet", "WhatApp Video Call", "Facebook Video Call"].includes(online) && (
                      <div className="applymodal-field">
                        <label className="applymodal-label">Your Online ID, Username or Number</label>
                        <input type="text" value={meet} onChange={handleChangeMeet} placeholder="Provide your Online ID or Number" className="applymodal-input" />
                        <span className="applymodal-file-hint">Provide your Online ID, Username or Number on this platform.</span>
                      </div>
                    )}
                  </>
                )}

                {appointment === "offline" && (
                  <>
                    <div className="applymodal-field">
                      <label className="applymodal-label">Choose a Meeting Location</label>
                      <select value={offline} onChange={handleOfflineChange} className="applymodal-input applymodal-select">
                        <option value="choose">Choose one Location</option>
                        <option value="location">Your Location (Lagos Only)</option>
                        <option value="3">Our Office</option>
                      </select>
                      <span className="applymodal-file-hint">Pick a place of your choice.</span>
                    </div>
                    {offline === "location" && (
                      <div className="applymodal-field">
                        <label className="applymodal-label">Your Address (Lagos Only)</label>
                        <input type="text" onChange={(e) => setAddress(e.target.value)} placeholder="Your Address (Lagos Only)" className="applymodal-input" />
                        <span className="applymodal-file-hint">If you stay outside Lagos, please pick the Online Platform.</span>
                      </div>
                    )}
                  </>
                )}

                <div className="applymodal-field">
                  <label className="applymodal-label">Pick a Date for the Meeting</label>
                  <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="applymodal-input" />
                  <span className="applymodal-file-hint">Which day are you proposing for this meeting?</span>
                </div>

                <div className="applymodal-field">
                  <label className="applymodal-label">Choose the Time Suited for You</label>
                  <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
                    <div style={{ position: "relative" }}>
                      <div onClick={() => setShowHour(!showHour)} style={pickerStyle}>{hour || "HH"}</div>
                      {showHour && (
                        <div style={dropdownStyle}>
                          {[1,2,3,4,5,6,7,8,9,10,11,12].map((h) => (
                            <div key={h} style={{ padding: "0.4rem 0.75rem", cursor: "pointer" }} onClick={() => { setHour(h.toString().padStart(2, "0")); setShowHour(false); }}>
                              {h.toString().padStart(2, "0")}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    <div style={{ position: "relative" }}>
                      <div onClick={() => setShowMinute(!showMinute)} style={pickerStyle}>{minute || "MM"}</div>
                      {showMinute && (
                        <div style={dropdownStyle}>
                          {Array.from({ length: 60 }, (_, i) => i).map((m) => (
                            <div key={m} style={{ padding: "0.4rem 0.75rem", cursor: "pointer" }} onClick={() => { setMinute(m.toString().padStart(2, "0")); setShowMinute(false); }}>
                              {m.toString().padStart(2, "0")}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    <select value={gmt} onChange={(e) => setGmt(e.target.value)} className="applymodal-input applymodal-select" style={{ width: "80px" }}>
                      <option value="AM">AM</option>
                      <option value="PM">PM</option>
                    </select>
                  </div>
                  <span className="applymodal-file-hint">Choose the time suited for you.</span>
                </div>

                <div className="applymodal-field">
                  <label className="applymodal-label">What would you like to discuss? (In Brief)</label>
                  <textarea rows={3} value={discuss} onChange={(e) => setDiscuss(e.target.value)} placeholder="Brief description of what you would like to discuss..." className="applymodal-input applymodal-textarea" />
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

export default Session;
