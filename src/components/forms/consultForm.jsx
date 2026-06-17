import { useState, useEffect, useRef } from "react";
import { toast } from "react-toastify";
import { BASEURL } from "../../BaseURL/BaseURL";
import axios from "axios";
import "../emptdp/applicationModal.css";

let lastSubmitTime = 0;

const ConsultForm = () => {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [occupation, setOccupation] = useState("");
  const [challenge, setChallenge] = useState("");
  const [business, setBusiness] = useState("");
  const [cost, setCost] = useState("");
  const [invest, setInvest] = useState("");
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

  const handleChangeCost = (e) => setCost(e.target.value.replace(/\D/g, ""));

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
    if (!occupation.trim()) errors.push("Please tell us what you do.");
    if (!challenge.trim()) errors.push("Please describe your challenges.");
    if (!business.trim()) errors.push("Please tell us what you would change in your business.");
    if (!cost.trim()) errors.push("Please enter the cost amount.");
    if (!invest.trim()) errors.push("Please enter your investment amount.");

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
        `${BASEURL}/api/v1/email/consult`,
        { name, email, occupation, challenge, business, cost, invest },
        { headers: { "Content-Type": "application/json" } }
      );
      if (response.data.status === "success") {
        toast.success("Your consultation request has been submitted successfully!");
        setName(""); setEmail(""); setOccupation(""); setChallenge("");
        setBusiness(""); setCost(""); setInvest("");
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
          <div className="applymodal-wrapper" role="dialog" aria-modal="true" aria-labelledby="consult-modal-title">
            <div className="applymodal-box">
              <div className="applymodal-header">
                <div>
                  <h2 id="consult-modal-title" className="applymodal-title">Free Consulting</h2>
                  <p className="applymodal-subtitle">Tell us about your business needs.</p>
                </div>
                <div className="applymodal-header-right">
                  <span className="applymodal-badge">Free Session</span>
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

                <div className="applymodal-field">
                  <label className="applymodal-label">What do you do?</label>
                  <input type="text" value={occupation} onChange={(e) => setOccupation(e.target.value)} placeholder="Your occupation or role" className="applymodal-input" />
                </div>

                <div className="applymodal-field">
                  <label className="applymodal-label">What challenges do you currently face?</label>
                  <textarea rows={3} value={challenge} onChange={(e) => setChallenge(e.target.value)} placeholder="Describe your current challenges..." className="applymodal-input applymodal-textarea" />
                </div>

                <div className="applymodal-field">
                  <label className="applymodal-label">What would you change in your business?</label>
                  <textarea rows={3} value={business} onChange={(e) => setBusiness(e.target.value)} placeholder="What improvements would you make?" className="applymodal-input applymodal-textarea" />
                </div>

                <div className="applymodal-row">
                  <div className="applymodal-field">
                    <label className="applymodal-label">How much does it cost you? (in Naira)</label>
                    <input type="text" value={cost} onChange={handleChangeCost} placeholder="Amount in Naira" className="applymodal-input" />
                  </div>
                  <div className="applymodal-field">
                    <label className="applymodal-label">How much are you willing to invest? (in Naira)</label>
                    <input type="text" value={invest} onChange={(e) => setInvest(e.target.value.replace(/\D/g, ""))} placeholder="Amount in Naira" className="applymodal-input" />
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

export default ConsultForm;
