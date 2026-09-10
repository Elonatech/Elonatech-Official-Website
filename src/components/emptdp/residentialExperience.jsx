import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./emptdp.css";
import "./residentialExperience.css";
import ResidentialModal from "./residentialModal";
import CardDeck from "./CardDeck";
import guideFile from "./data/ETMPDP_Residential_Experience_Accommodation_Guide.pdf";

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
    desc: "Individual lockable storage compartments.",
  },
  {
    icon: "bi-book",
    title: "Study Space",
    desc: "Dedicated reading/study space with seating.",
  },
  {
    icon: "bi-droplet",
    title: "Private Ensuite Facilities",
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
    desc: "Wi-Fi/internet connectivity provided.",
  },
  {
    icon: "bi-shield-check",
    title: "Secured Environment",
    desc: "Residential accommodation within a secure environment.",
  },
  {
    icon: "bi-geo-alt",
    title: "Convenient Location",
    desc: "Convenient access to the ETMPDP onsite learning environment.",
  },
];

const fees = [
  {
    name: "Ignite Foundation Residential",
    duration: "3 Months",
    total: "₦350,000",
    plan: "₦210,000 first + ₦140,000 second",
  },
  {
    name: "Ignite Professional Residential",
    duration: "4 Months",
    total: "₦450,000",
    plan: "₦270,000 first + ₦180,000 second",
  },
  {
    name: "Ignite Executive Residential",
    duration: "6 Months",
    total: "₦600,000",
    plan: "₦360,000 first + ₦240,000 second",
  },
  {
    name: "ETMPDP Core Residential",
    duration: "12 Months",
    total: "₦1,000,000",
    plan: "₦600,000 first + ₦400,000 second",
  },
];

const bookingSteps = [
  {
    title: "Indicate Interest",
    desc: "Submit the Residential Accommodation Request Form.",
  },
  {
    title: "Availability Check",
    desc: "Elonatech confirms available residential space for the required period.",
  },
  {
    title: "Receive Details",
    desc: "Elonatech confirms the applicable Residential Experience fee, two-installment payment schedule and residential requirements.",
  },
  {
    title: "Complete Booking",
    desc: "Complete the required documentation and pay the first residential installment to secure the accommodation. The second installment is due before check-in.",
  },
];

const houseRules = [
  "Hotplates are not permitted.",
  "Participants should bring an appropriate camp-gas arrangement where cooking is required.",
  "Electricity and other residential resources must be used responsibly; abuse, excessive use or misuse is not permitted.",
  "Noise or activities that disturb the surrounding neighbourhood are not permitted.",
  "Late-night movements are not permitted.",
  "Visitors are not permitted beyond 7:00 PM.",
  "Visitors are not permitted inside residential rooms. Approved visitors may only be received during permitted visiting hours and in accordance with Management's visitor arrangements.",
  "Overnight visitors or sleepover guests are strictly prohibited.",
  "Residents must comply with applicable residential instructions and house rules.",
];

const ResidentialExperience = () => {
  const [resModal, setResModal] = useState(false);

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
          href="https://elonatech.com.ng/etmpdp-residential"
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
              ETMPDP Residential Experience
            </span>
            <h2>An Optional Residential Experience</h2>
            <h5>
              Comfortable, self-contained accommodation for eligible participants
              undertaking onsite ETMPDP.
            </h5>
            <p className="lead">
              Available to eligible ETMPDP Core and ETMPDP Ignite participants,
              subject to availability.
            </p>
            <div className="emptdp-cta-buttons">
              <button
                className="emptdp-btn emptdp-btn--primary"
                onClick={() => setResModal(true)}
              >
                <span className="res-cta-long">
                  Request Residential Accommodation
                </span>
                <span className="res-cta-short">Request Accommodation</span>
              </button>
              <a href={guideFile} target="_blank" rel="noopener noreferrer">
                <button className="emptdp-btn emptdp-btn--outline">
                  <span className="res-cta-long">
                    Download Residential Accommodation Guide
                  </span>
                  <span className="res-cta-short">Download Guide</span>
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* ── 2. A practical place to stay while you learn ────────────────── */}
        <section className="emptdp-why-section">
          <div className="container">
            <div className="emptdp-why-content">
              <div className="emptdp-why-text">
                <h2
                  className="emptdp-section-title"
                  style={{ textAlign: "left" }}
                >
                  A Practical Place to Stay While You Learn
                </h2>
                <p>
                  The ETMPDP Residential Experience provides optional shared
                  accommodation for participants who require a convenient place to
                  stay while undertaking onsite ETMPDP. The accommodation is
                  designed around essential living, study and connectivity needs,
                  with separate male and female residential arrangements.
                </p>
                <p className="res-highlight">
                  Residential accommodation is separate from Program tuition and
                  priced independently.
                </p>
              </div>
              <div className="emptdp-why-image">
                <img src={IMG_LIVING} alt="Shared residential accommodation" />
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. Accommodation features ──────────────────────────────────── */}
        <section className="emptdp-diff-section res-features">
          <div className="container">
            <div className="emptdp-section-header emptdp-section-header--light">
              <h2 className="emptdp-section-title emptdp-section-title--white">
                Accommodation Features
              </h2>
              <p
                className="emptdp-section-subtitle"
                style={{ color: "rgba(255,255,255,0.75)" }}
              >
                Each residential room is designed to provide the essential
                facilities participants need for comfortable living and personal
                study during their ETMPDP experience.
              </p>
            </div>
            <CardDeck className="emptdp-diff-grid" onDark>
              {roomFeatures.map((f, i) => (
                <div className="emptdp-diff-card" key={i}>
                  <div className="emptdp-diff-icon">
                    <i className={`bi ${f.icon}`}></i>
                  </div>
                  <h6 className="emptdp-diff-title">{f.title}</h6>
                  <p className="emptdp-diff-desc">{f.desc}</p>
                </div>
              ))}
            </CardDeck>
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
                  Shared Residential Accommodation
                </h2>
                <p>
                  Residential accommodation is arranged on a shared basis, with
                  up to four participants per room. Each room provides bunk-bed
                  sleeping facilities, individual lockable storage, a dedicated
                  study area, and private ensuite toilet and kitchen facilities.
                </p>
                <p className="res-highlight">
                  Male and female participants are accommodated separately.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. Who can request residential accommodation? ──────────────── */}
        <section className="emptdp-who-section">
          <div className="container">
            <div className="emptdp-section-header">
              <h2 className="emptdp-section-title">
                Who Can Request Residential Accommodation?
              </h2>
            </div>
            <ul className="res-eligibility res-who-list">
              <li>Participants accepted/enrolled for onsite ETMPDP Core.</li>
              <li>Participants accepted/enrolled for onsite ETMPDP Ignite.</li>
              <li>
                Participants who require accommodation during their approved
                Program period.
              </li>
            </ul>
            <p className="res-fineprint res-who-note">
              Availability is subject to available residential space and
              applicable residential requirements.
            </p>
          </div>
        </section>

        {/* ── 6. Residential guidelines & house rules ────────────────────── */}
        <section className="res-rules-section">
          <div className="container">
            <div className="emptdp-section-header">
              <h2 className="emptdp-section-title">
                Residential Guidelines &amp; House Rules
              </h2>
              <p className="emptdp-section-subtitle">
                The Residential Experience is intended to provide a safe,
                respectful and conducive environment. Residents are expected to
                observe the following rules:
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
              A more detailed Residential Agreement/House Rules document may be
              issued and acknowledged during the booking process.
            </p>
          </div>
        </section>

        {/* ── 7. Booking process ─────────────────────────────────────────── */}
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
            <div className="res-booking-cta">
              <button
                className="emptdp-btn emptdp-btn--primary"
                onClick={() => setResModal(true)}
              >
                Book Now
              </button>
            </div>
            <p className="res-highlight res-booking-important">
              <strong>Important:</strong> Submission of a request does not itself
              guarantee accommodation. Residential space is confirmed only after
              availability and applicable booking requirements have been formally
              confirmed.
            </p>
          </div>
        </section>

        {/* ── 8. Residential investment ─────────────────────────────────── */}
        <section className="res-fees-section">
          <div className="container">
            <div className="emptdp-section-header">
              <h2 className="emptdp-section-title">Residential Investment</h2>
              <p className="emptdp-section-subtitle">
                The Residential Experience fees below apply according to the
                participant&apos;s ETMPDP Program duration. These are
                accommodation fees and are separate from ETMPDP Program tuition.
              </p>
            </div>

            <div className="res-fees-table-wrap">
              <table className="res-fees-table">
                <thead>
                  <tr>
                    <th>Residential Experience</th>
                    <th>Duration</th>
                    <th>Total Fee</th>
                    <th>Payment Plan</th>
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
                      <td data-label="Payment Plan">{f.plan}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="res-pay-notes">
              <p>
                <strong>Residential Payment Plan:</strong> The Residential
                Experience fee is payable in two installments. The first
                installment (60%) is required to secure the residential booking,
                while the remaining 40% is payable before check-in. Full payment
                and required documentation must be completed before occupancy.
              </p>
              <p>
                <strong>Residential Refund Policy:</strong> Residential
                Experience fees are non-refundable once the residential booking
                has been confirmed and the first installment has been paid, as
                the payment secures residential space for the participant for the
                approved Program period. The second installment is also
                non-refundable once paid.
              </p>
              <p>
                Where Elonatech is unable to provide confirmed residential
                accommodation due to circumstances attributable to Elonatech, any
                applicable refund or alternative arrangement will be determined
                by Management.
              </p>
              <p>
                Residential space is not confirmed until availability, applicable
                terms and the required payment/documentation have been formally
                confirmed by Elonatech.
              </p>
            </div>
          </div>
        </section>

        {/* ── 11. Final CTA ─────────────────────────────────────────────── */}
        <section className="emptdp-cta-section">
          <div className="emptdp-cta-inner">
            <h2 className="emptdp-cta-heading emptdp-cta-heading--dark">
              Need a Place to Stay While You Learn?
            </h2>
            <p className="emptdp-cta-sub">
              If you are joining ETMPDP onsite and require accommodation, submit
              a residential request and our team will confirm availability and
              the applicable details.
            </p>
            <div className="emptdp-cta-buttons">
              <button
                className="emptdp-btn emptdp-btn--primary"
                onClick={() => setResModal(true)}
              >
                Request Residential Accommodation
              </button>
            </div>
            <p className="res-cta-links">
              Joining ETMPDP?{" "}
              <Link to="/emptdp-core">ETMPDP Core</Link>
              {" · "}
              <Link to="/emptdp-ignite">ETMPDP Ignite</Link>
            </p>
          </div>
        </section>

        <ResidentialModal
          isOpen={resModal}
          onClose={() => setResModal(false)}
        />
      </div>
    </>
  );
};

export default ResidentialExperience;
