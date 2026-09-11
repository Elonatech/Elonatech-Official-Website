import React, { useState, useEffect, useRef } from "react";
import "./applicationModal.css";
import { toast } from "react-toastify";
import { BASEURL } from "../../BaseURL/BaseURL";
import axios from "axios";

// Rate limit: track last submission time outside component so it persists
let lastSubmitTime = 0;

const CORE_AREAS = [
  "Software Engineering",
  "Graphics, Motion Graphics & Brand Design",
  "Digital Marketing & Content Strategy",
  "IT Support, Networking & Infrastructure",
  "Computer Engineering",
  "Virtual Assistance & Digital Operations",
  "Data Analytics & Business Intelligence",
  "Cybersecurity & Information Security",
  "Not Sure Yet",
];

const IGNITE_TRACKS = [
  "Ignite Foundation (3 Months)",
  "Ignite Professional (4 Months)",
  "Ignite Executive (6 Months)",
];

// Residential Experience fees (accommodation only — separate from tuition).
const CORE_FEE = { total: 1000000, first: 600000, second: 400000 };
const IGNITE_FEES = {
  "Ignite Foundation (3 Months)": { total: 350000, first: 210000, second: 140000 },
  "Ignite Professional (4 Months)": { total: 450000, first: 270000, second: 180000 },
  "Ignite Executive (6 Months)": { total: 600000, first: 360000, second: 240000 },
};

const naira = (n) => `₦${n.toLocaleString("en-NG")}`;

const ACKNOWLEDGEMENT =
  "I understand that residential accommodation is optional, subject to availability, separately priced from Program tuition, and governed by applicable residential guidelines and terms. I also understand the applicable two-installment payment plan and residential refund policy.";

const ResidentialModal = ({ isOpen, onClose }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [pathway, setPathway] = useState("");
  const [areaOfInterest, setAreaOfInterest] = useState("");
  const [programTrack, setProgramTrack] = useState("");
  const [paymentPreference, setPaymentPreference] = useState("");
  const [deliveryMode, setDeliveryMode] = useState("");
  const [startPeriod, setStartPeriod] = useState("");
  const [requiresAccommodation, setRequiresAccommodation] = useState(false);
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [acknowledged, setAcknowledged] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [honeypot, setHoneypot] = useState("");
  const formOpenTime = useRef(Date.now());

  useEffect(() => {
    if (isOpen) formOpenTime.current = Date.now();
  }, [isOpen]);

  // Compute the applicable residential fee from the current selections.
  const fee =
    pathway === "ETMPDP Core"
      ? CORE_FEE
      : pathway === "ETMPDP Ignite" && programTrack
      ? IGNITE_FEES[programTrack]
      : null;

  const feeSummary = fee
    ? `${naira(fee.total)} total — ${naira(fee.first)} first + ${naira(
        fee.second
      )} second`
    : "";

  const validateForm = () => {
    const errors = [];

    if (honeypot) return false;

    const timeOnForm = (Date.now() - formOpenTime.current) / 1000;
    if (timeOnForm < 3) {
      toast.error("Please take your time filling out the form.");
      return false;
    }

    const secondsSinceLastSubmit = (Date.now() - lastSubmitTime) / 1000;
    if (lastSubmitTime && secondsSinceLastSubmit < 60) {
      toast.error(
        `Please wait ${Math.ceil(
          60 - secondsSinceLastSubmit
        )} seconds before submitting again.`
      );
      return false;
    }

    if (!fullName.trim()) {
      errors.push("Full name is required.");
    } else if (fullName.trim().length < 3) {
      errors.push("Full name must be at least 3 characters.");
    } else if (!/^[a-zA-Z\s'-]+$/.test(fullName.trim())) {
      errors.push(
        "Full name can only contain letters, spaces, hyphens, and apostrophes."
      );
    }

    if (!email.trim()) {
      errors.push("Email address is required.");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      errors.push("Please enter a valid email address.");
    }

    if (!phone.trim()) {
      errors.push("Phone number is required.");
    } else if (!/^[+\d][\d\s\-()]{7,14}$/.test(phone.trim())) {
      errors.push("Please enter a valid phone number.");
    }

    if (!pathway) errors.push("Please select your ETMPDP pathway.");

    if (pathway === "ETMPDP Core" && !areaOfInterest) {
      errors.push("Please select your area of interest.");
    }
    if (pathway === "ETMPDP Ignite" && !programTrack) {
      errors.push("Please select your program track.");
    }

    if (!paymentPreference) errors.push("Please select a payment preference.");
    if (!deliveryMode) errors.push("Please select your delivery mode.");
    if (!startPeriod.trim()) {
      errors.push("Please provide your preferred start date or period.");
    }
    if (!requiresAccommodation) {
      errors.push("Please confirm that you require accommodation.");
    }
    if (!acknowledged) {
      errors.push("Please accept the residential acknowledgement.");
    }
    if (additionalInfo.trim().length > 1000) {
      errors.push("Additional information must not exceed 1000 characters.");
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
      formData.append("pathway", pathway);
      formData.append(
        "programChoice",
        pathway === "ETMPDP Core" ? areaOfInterest : programTrack
      );
      formData.append(
        "programChoiceLabel",
        pathway === "ETMPDP Core" ? "Area of Interest" : "Program Track"
      );
      formData.append("residentialFeeTotal", fee ? naira(fee.total) : "");
      formData.append("residentialFeeFirst", fee ? naira(fee.first) : "");
      formData.append("residentialFeeSecond", fee ? naira(fee.second) : "");
      formData.append("paymentPreference", paymentPreference);
      formData.append("deliveryMode", deliveryMode);
      formData.append("startPeriod", startPeriod.trim());
      formData.append(
        "requiresAccommodation",
        requiresAccommodation ? "Yes" : "No"
      );
      formData.append("additionalInfo", additionalInfo.trim());
      formData.append("acknowledged", acknowledged ? "Yes" : "No");

      const res = await axios.post(
        `${BASEURL}/api/v1/email/residential`,
        formData,
        { timeout: 25000 }
      );

      if (res.data.status === "success") {
        toast.success("Residential request sent successfully");
        setFullName("");
        setEmail("");
        setPhone("");
        setPathway("");
        setAreaOfInterest("");
        setProgramTrack("");
        setPaymentPreference("");
        setDeliveryMode("");
        setStartPeriod("");
        setRequiresAccommodation(false);
        setAdditionalInfo("");
        setAcknowledged(false);
        setSubmitted(true);
      } else {
        toast.error(res.data.message || "Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Residential request error:", error);
      toast.error(
        error.code === "ECONNABORTED"
          ? "This is taking too long — please check your connection and try again."
          : error.response?.data?.message ||
              "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <div className="applymodal-backdrop" onClick={handleClose}></div>

      <div
        className="applymodal-wrapper"
        role="dialog"
        aria-modal="true"
        aria-labelledby="residentialmodal-title"
      >
        <div className="applymodal-box">
          <div className="applymodal-header">
            <div>
              <h2 id="residentialmodal-title" className="applymodal-title">
                {submitted
                  ? "Request Received"
                  : "Request Residential Accommodation"}
              </h2>
              <p className="applymodal-subtitle">
                {submitted
                  ? "We'll confirm availability and the applicable details."
                  : "Tell us about your Program and accommodation requirement. Our team will confirm availability and provide the applicable residential details."}
              </p>
            </div>
            <div className="applymodal-header-right">
              <button
                className="applymodal-close"
                onClick={handleClose}
                aria-label="Close modal"
              >
                &times;
              </button>
            </div>
          </div>

          {submitted ? (
            <div className="applymodal-success">
              <div className="applymodal-success-icon" aria-hidden="true">
                &#10003;
              </div>
              <p className="applymodal-success-text">
                We&apos;ve received your residential accommodation request. Our
                team will confirm available residential space and provide the
                applicable fee, payment schedule and requirements. This is not a
                confirmed booking until availability and the required
                payment/documentation are formally confirmed.
              </p>
              <button
                type="button"
                className="applymodal-submit"
                onClick={handleClose}
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="applymodal-form">
              {/* Honeypot */}
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

              {/* Pathway + (Area of Interest | Program Track) */}
              <div className="applymodal-row">
                <div className="applymodal-field">
                  <label className="applymodal-label">ETMPDP Pathway</label>
                  <select
                    value={pathway}
                    onChange={(e) => {
                      setPathway(e.target.value);
                      setAreaOfInterest("");
                      setProgramTrack("");
                    }}
                    className="applymodal-input applymodal-select"
                  >
                    <option value="">Select pathway</option>
                    <option>ETMPDP Core</option>
                    <option>ETMPDP Ignite</option>
                  </select>
                </div>

                {pathway === "ETMPDP Ignite" ? (
                  <div className="applymodal-field">
                    <label className="applymodal-label">Program Track</label>
                    <select
                      value={programTrack}
                      onChange={(e) => setProgramTrack(e.target.value)}
                      className="applymodal-input applymodal-select"
                    >
                      <option value="">Select program track</option>
                      {IGNITE_TRACKS.map((t) => (
                        <option key={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                ) : (
                  <div className="applymodal-field">
                    <label className="applymodal-label">Area of Interest</label>
                    <select
                      value={areaOfInterest}
                      onChange={(e) => setAreaOfInterest(e.target.value)}
                      className="applymodal-input applymodal-select"
                      disabled={pathway !== "ETMPDP Core"}
                    >
                      <option value="">
                        {pathway === "ETMPDP Core"
                          ? "Select area of interest"
                          : "Select pathway first"}
                      </option>
                      {CORE_AREAS.map((a) => (
                        <option key={a}>{a}</option>
                      ))}
                    </select>
                  </div>
                )}
              </div>

              {/* Applicable residential fee (auto) */}
              <div className="applymodal-field">
                <label className="applymodal-label">
                  Applicable Residential Fee
                </label>
                <div className="res-fee-readout">
                  {feeSummary ||
                    (pathway === "ETMPDP Ignite"
                      ? "Select a program track to see the fee"
                      : "Select your pathway to see the fee")}
                </div>
                <span className="applymodal-file-hint">
                  Accommodation fee only — separate from ETMPDP Program tuition.
                </span>
              </div>

              {/* Payment preference + Delivery mode */}
              <div className="applymodal-row">
                <div className="applymodal-field">
                  <label className="applymodal-label">Payment Preference</label>
                  <select
                    value={paymentPreference}
                    onChange={(e) => setPaymentPreference(e.target.value)}
                    className="applymodal-input applymodal-select"
                  >
                    <option value="">Select payment preference</option>
                    <option>Pay in full</option>
                    <option>
                      Pay in two installments (60% now, 40% before check-in)
                    </option>
                  </select>
                </div>
                <div className="applymodal-field">
                  <label className="applymodal-label">Delivery Mode</label>
                  <select
                    value={deliveryMode}
                    onChange={(e) => setDeliveryMode(e.target.value)}
                    className="applymodal-input applymodal-select"
                  >
                    <option value="">Select delivery mode</option>
                    <option>Onsite</option>
                    <option>Hybrid</option>
                  </select>
                </div>
              </div>

              {/* Preferred start */}
              <div className="applymodal-field">
                <label className="applymodal-label">Preferred Start Date</label>
                <input
                  type="date"
                  value={startPeriod}
                  onChange={(e) => setStartPeriod(e.target.value)}
                  min={new Date().toISOString().slice(0, 10)}
                  className="applymodal-input"
                />
              </div>

              {/* Additional Information */}
              <div className="applymodal-field">
                <label className="applymodal-label">
                  Additional Information (optional)
                </label>
                <textarea
                  rows={3}
                  value={additionalInfo}
                  onChange={(e) => setAdditionalInfo(e.target.value)}
                  placeholder="Anything else the team should know about your accommodation requirement..."
                  className="applymodal-input applymodal-textarea"
                />
                <span className="applymodal-file-hint">
                  {additionalInfo.length}/1000 characters
                </span>
              </div>

              {/* Residential Requirement */}
              <label className="applymodal-check">
                <input
                  type="checkbox"
                  checked={requiresAccommodation}
                  onChange={(e) => setRequiresAccommodation(e.target.checked)}
                />
                <span>Yes, I require accommodation.</span>
              </label>

              {/* Acknowledgement */}
              <label className="applymodal-check">
                <input
                  type="checkbox"
                  checked={acknowledged}
                  onChange={(e) => setAcknowledged(e.target.checked)}
                />
                <span>{ACKNOWLEDGEMENT}</span>
              </label>

              <button
                type="submit"
                className="applymodal-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Residential Request"}
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default ResidentialModal;
