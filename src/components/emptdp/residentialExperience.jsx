import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import "./emptdp.css";
import "./residentialExperience.css";
import ApplicationModal from "./applicationModal.jsx";
import IgniteApplicationModal from "./igniteApplicationModal";

const IMG_LIVING =
  "https://res.cloudinary.com/dahnwukbz/image/upload/v1789050574/pexels-photo-17527758_lwxrk0.jpg";
const IMG_ROOM =
  "https://res.cloudinary.com/dahnwukbz/image/upload/v1789050796/Turnkey_Educational_Infrastructure_mbh4kh.jpg";

const roomFeatures = [
  {
    icon: "bi-house-door",
    title: "Sleeping Facilities",
    desc: "Bunk-bed accommodation with mattresses for up to four participants.",
  },
  {
    icon: "bi-lock",
    title: "Personal Storage",
    desc: "Individual lockable storage compartments for each resident.",
  },
  {
    icon: "bi-book",
    title: "Study Space",
    desc: "Dedicated reading and study space with seating.",
  },
  {
    icon: "bi-droplet",
    title: "Private Ensuite",
    desc: "Self-contained toilet and kitchen facilities.",
  },
  {
    icon: "bi-lightning-charge",
    title: "Essential Utilities",
    desc: "Electricity and water supply provided.",
  },
  {
    icon: "bi-wifi",
    title: "Internet Access",
    desc: "Wi-Fi / internet connectivity provided.",
  },
  {
    icon: "bi-shield-check",
    title: "Secured Environment",
    desc: "Accommodation within a secure environment.",
  },
  {
    icon: "bi-geo-alt",
    title: "Convenient Location",
    desc: "Close to the ETMPDP onsite learning environment.",
  },
];

const fees = [
  {
    name: "Ignite Foundation Residential",
    duration: "3 Months",
    total: "₦350,000",
    plan: "₦210,000 + ₦140,000",
  },
  {
    name: "Ignite Professional Residential",
    duration: "4 Months",
    total: "₦450,000",
    plan: "₦270,000 + ₦180,000",
  },
  {
    name: "Ignite Executive Residential",
    duration: "6 Months",
    total: "₦600,000",
    plan: "₦360,000 + ₦240,000",
  },
  {
    name: "ETMPDP Core Residential",
    duration: "12 Months",
    total: "₦1,000,000",
    plan: "₦600,000 + ₦400,000",
  },
];

const bookingSteps = [
  {
    title: "Indicate Interest",
    desc: "Tick the Residential Experience option on your ETMPDP Core or Ignite application, or submit the Residential Accommodation Request Form.",
  },
  {
    title: "Availability Check",
    desc: "Elonatech confirms available residential space for your Program period.",
  },
  {
    title: "Receive Details",
    desc: "You receive the applicable residential fee, the two-installment payment schedule and residential requirements.",
  },
  {
    title: "Complete Booking",
    desc: "Complete the required documentation and pay the first installment to secure the accommodation. The second installment is due before check-in.",
  },
];

const houseRules = [
  "Hotplates are not permitted — bring an appropriate camp-gas arrangement where cooking is required.",
  "Electricity and residential resources must be used responsibly; abuse or excessive use is not permitted.",
  "Residents must maintain a respectful and responsible environment.",
  "Noise or activities that disturb the surrounding neighbourhood are not permitted.",
  "Late-night movements are not permitted.",
  "Visitors are not permitted beyond 7:00 PM.",
  "Visitors are not permitted inside residential rooms; approved visitors only during permitted hours.",
  "Overnight visitors or sleepover guests are strictly prohibited.",
  "Residents must comply with additional instructions issued by Management.",
];

const ResidentialExperience = () => {
  const [coreModal, setCoreModal] = useState(false);
  const [igniteModal, setIgniteModal] = useState(false);

  return (
    <>
      <Helmet>
        <title>
          ETMPDP Residential Experience — Accommodation Guide | Elonatech
        </title>
        <meta
          name="description"
          content="Optional shared accommodation for participants attending onsite ETMPDP Core or Ignite — room features, arrangement, fees, booking process and house rules."
        />
        <link
          rel="canonical"
          href="https://elonatech.com.ng/residential-experience"
        />
      </Helmet>

      <div className="residential-experience">
        {/* ── 1. Hero ─────────────────────────────────────────────────────── */}
        <div className="container-fluid emptdp-section res-hero">
          <div className="emptdp-hero-text">
            <span
              className="emptdp-mentor-badge"
              style={{ marginBottom: "16px" }}
            >
              ETMPDP
            </span>
            <h2>Residential Experience</h2>
            <h5>
              Optional accommodation for participants attending onsite ETMPDP
            </h5>
            <p className="lead">
              Optional shared accommodation for participants undertaking onsite
              ETMPDP Core or ETMPDP Ignite. Accommodation is subject to
              availability and applicable residential requirements.
            </p>
            <div className="emptdp-cta-buttons">
              <a href="mailto:training@elonatech.com.ng?subject=Residential%20Accommodation%20Request">
                <button className="emptdp-btn emptdp-btn--primary">
                  Request Accommodation
                </button>
              </a>
            </div>
            <p className="res-hero-note">
              Separate from Program tuition &bull; Priced independently
            </p>
          </div>
        </div>

        {/* ── 2. Who it's for ─────────────────────────────────────────────── */}
        <section className="emptdp-why-section">
          <div className="container">
            <div className="emptdp-why-content">
              <div className="emptdp-why-text">
                <h2
                  className="emptdp-section-title"
                  style={{ textAlign: "left" }}
                >
                  Immersive Living, Focused Learning
                </h2>
                <p>
                  The Residential Experience is for participants accepted into
                  an onsite ETMPDP experience who require accommodation during
                  their participation.
                </p>
                <p>It is available to eligible participants in:</p>
                <ul className="res-eligibility">
                  <li>
                    <strong>ETMPDP Core</strong> — the 12-month Executive
                    Technology Mentorship &amp; Professional Development
                    Program.
                  </li>
                  <li>
                    <strong>ETMPDP Ignite</strong> — the 3-, 4- or 6-month
                    undergraduate professional development experience.
                  </li>
                </ul>
                <p className="res-fineprint">
                  Residential space is subject to availability.
                </p>
              </div>
              <div className="emptdp-why-image">
                <img src={IMG_LIVING} alt="Participants studying together" />
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. What each room provides ──────────────────────────────────── */}
        <section className="emptdp-diff-section res-features">
          <div className="container">
            <div className="emptdp-section-header emptdp-section-header--light">
              <h2 className="emptdp-section-title emptdp-section-title--white">
                What Each Room Provides
              </h2>
              <p
                className="emptdp-section-subtitle"
                style={{ color: "rgba(255,255,255,0.75)" }}
              >
                The essentials for comfortable living and personal study.
              </p>
            </div>
            <div className="emptdp-diff-grid">
              {roomFeatures.map((f, i) => (
                <div className="emptdp-diff-card" key={i}>
                  <div className="emptdp-diff-icon">
                    <i className={`bi ${f.icon}`}></i>
                  </div>
                  <h6 className="emptdp-diff-title">{f.title}</h6>
                  <p className="emptdp-diff-desc">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. Room arrangement ────────────────────────────────────────── */}
        <section className="emptdp-why-section">
          <div className="container">
            <div className="emptdp-why-content res-reverse">
              <div className="emptdp-why-image">
                <img src={IMG_ROOM} alt="Shared residential room" />
              </div>
              <div className="emptdp-why-text">
                <h2
                  className="emptdp-section-title"
                  style={{ textAlign: "left" }}
                >
                  Room Arrangement
                </h2>
                <p>
                  Accommodation is arranged on a shared basis, with up to four
                  participants per room. Each room provides bunk-bed sleeping
                  facilities, individual lockable storage, a dedicated study
                  area, and private ensuite toilet and kitchen facilities.
                </p>
                <p className="res-fineprint">
                  Male and female participants are accommodated separately.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. Fees ────────────────────────────────────────────────────── */}
        <section className="res-fees-section">
          <div className="container">
            <div className="emptdp-section-header">
              <h2 className="emptdp-section-title">
                Residential Experience Fees
              </h2>
              <p className="emptdp-section-subtitle">
                Accommodation fees only — separate from ETMPDP Program tuition.
              </p>
            </div>

            <div className="res-fees-table-wrap">
              <table className="res-fees-table">
                <thead>
                  <tr>
                    <th>Residential Experience</th>
                    <th>Duration</th>
                    <th>Total Fee</th>
                    <th>Instalments</th>
                  </tr>
                </thead>
                <tbody>
                  {fees.map((f, i) => (
                    <tr key={i}>
                      <td data-label="Residential Experience">{f.name}</td>
                      <td data-label="Duration">{f.duration}</td>
                      <td data-label="Total Fee" className="res-fee-total">
                        {f.total}
                      </td>
                      <td data-label="Instalments">{f.plan}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="res-pay-notes">
              <p>
                <strong>Payment plan.</strong> The fee is payable in two
                instalments — 60% to secure the booking, and the remaining 40%
                before check-in. Full payment and documentation must be
                completed before occupancy.
              </p>
              <p>
                <strong>Refunds.</strong> Residential fees are non-refundable
                once the booking is confirmed and the first installment is paid,
                as payment secures the space for the approved Program period.
                The second installment is also non-refundable once paid.
              </p>
            </div>
          </div>
        </section>

        {/* ── 6. Booking process ─────────────────────────────────────────── */}
        <section className="emptdp-why-section res-booking-section">
          <div className="container">
            <div className="emptdp-section-header">
              <h2 className="emptdp-section-title">Booking Process</h2>
            </div>
            <ol className="res-steps">
              {bookingSteps.map((s, i) => (
                <li key={i}>
                  <span className="res-step-num">{i + 1}</span>
                  <span className="res-step-body">
                    <strong>{s.title}</strong>
                    <span>{s.desc}</span>
                  </span>
                </li>
              ))}
            </ol>
            <div className="res-before-checkin">
              <p className="res-before-title">
                Before check-in you will receive:
              </p>
              <ul>
                <li>
                  Confirmation of residential availability and the applicable
                  fee.
                </li>
                <li>Residential terms and house rules.</li>
                <li>Required documentation and payment instructions.</li>
                <li>
                  Confirmation that the required residential payment is
                  complete.
                </li>
                <li>Check-in information and residential instructions.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── 7. House rules ─────────────────────────────────────────────── */}
        <section className="res-rules-section">
          <div className="container">
            <div className="emptdp-section-header">
              <h2 className="emptdp-section-title">House Rules</h2>
              <p className="emptdp-section-subtitle">
                A safe, respectful and conducive environment for every resident.
              </p>
            </div>
            <ul className="res-rules">
              {houseRules.map((r, i) => (
                <li key={i}>
                  <i className="bi bi-shield-check"></i>
                  <span>{r}</span>
                </li>
              ))}
            </ul>
            <p className="res-fineprint res-rules-note">
              A more detailed Residential Agreement / House Rules document may
              be issued and acknowledged during the booking process.
            </p>
          </div>
        </section>

        {/* ── 8. CTA ─────────────────────────────────────────────────────── */}
        <section className="emptdp-cta-section">
          <div className="emptdp-cta-inner">
            <h2 className="emptdp-cta-heading emptdp-cta-heading--dark">
              Interested in the Residential Experience?
            </h2>
            <p className="emptdp-cta-sub">
              Apply to ETMPDP below and tick the Residential Experience option
              on the form. The training team will follow up with availability
              and booking details.
            </p>
            <div className="emptdp-cta-buttons">
              <button
                className="emptdp-btn emptdp-btn--primary"
                onClick={() => setCoreModal(true)}
              >
                Apply to ETMPDP Core
              </button>
              <button
                className="emptdp-btn emptdp-btn--outline-dark"
                onClick={() => setIgniteModal(true)}
              >
                Apply to ETMPDP Ignite
              </button>
            </div>
          </div>
        </section>

        <ApplicationModal
          isOpen={coreModal}
          onClose={() => setCoreModal(false)}
        />
        <IgniteApplicationModal
          isOpen={igniteModal}
          onClose={() => setIgniteModal(false)}
        />
      </div>
    </>
  );
};

export default ResidentialExperience;
