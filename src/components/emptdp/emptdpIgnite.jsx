import React, { useState, startTransition } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";
import "./emptdp.css";
import "./emptdpIgnite.css";
import IgniteApplicationModal from "./igniteApplicationModal";
import MDImage from "../main/captions/Ceo1.png";

/* ── Static data ────────────────────────────────────────────────────────── */

const highlights = [
  "Practical Technical Skills",
  "Executive Mentorship",
  "Leadership Development",
  "AI-Integrated Learning",
  "Industry Exposure",
  "Small Cohorts (5–10 Participants)",
  "SIWES Documentation Support (Where Applicable)",
];

const journey = [
  {
    num: 1,
    title: "Professional Onboarding",
    desc: "Workplace culture, professional ethics, communication, and collaboration foundations.",
  },
  {
    num: 2,
    title: "Technical Development",
    desc: "Practical competencies within your chosen specialization through structured learning.",
  },
  {
    num: 3,
    title: "Guided Practical Experience",
    desc: "Apply your knowledge through assignments, technical challenges, and mentor-guided activities.",
  },
  {
    num: 4,
    title: "Executive Mentorship",
    desc: "Continuous guidance from experienced professionals committed to your growth.",
  },
  {
    num: 5,
    title: "Leadership Development",
    desc: "Confidence, accountability, communication skills, and workplace discipline.",
  },
  {
    num: 6,
    title: "Industry Exposure",
    desc: "Supervised exposure to selected real-world technology environments where applicable.",
  },
  {
    num: 7,
    title: "Career Readiness",
    desc: "Graduate with stronger technical competence, professional maturity, and industry confidence.",
  },
];

const specializations = [
  {
    icon: "bi-code-slash",
    title: "Software Engineering",
    desc: "Design and develop responsive websites, web applications, backend systems, APIs, databases, and AI-assisted software solutions.",
    image:
      "https://res.cloudinary.com/dahnwukbz/image/upload/v1784039005/pexels-naboth-otieno-83498565-19805876_ziwrjo.jpg",
  },
  {
    icon: "bi-palette",
    title: "Graphics, Motion Graphics & Brand Design",
    desc: "Develop professional expertise in branding, graphic design, motion graphics, multimedia production, video editing, and AI-assisted creative workflows.",
    image:
      "https://res.cloudinary.com/dahnwukbz/image/upload/v1784039003/pexels-darlene-alderson-7971537_lqlqy9.jpg",
  },
  {
    icon: "bi-megaphone",
    title: "Digital Marketing & Content Strategy",
    desc: "Learn SEO, social media marketing, analytics, content strategy, campaign planning, email marketing, and AI-powered marketing techniques.",
    image:
      "https://res.cloudinary.com/dahnwukbz/image/upload/v1784039003/pexels-rdne-8370329_j6gibu.jpg",
  },
  {
    icon: "bi-hdd-network",
    title: "IT Support, Networking & Infrastructure",
    desc: "Develop practical skills in networking, systems administration, structured cabling, technical support, computer hardware, and AI-assisted diagnostics.",
    image:
      "https://res.cloudinary.com/dahnwukbz/image/upload/v1784039002/pexels-mikhail-nilov-9242892_wk1o7n.jpg",
  },
  {
    icon: "bi-cpu",
    title: "Computer Engineering",
    desc: "Build competencies in computer systems, hardware assembly, diagnostics, preventive maintenance, peripheral integration, and AI-assisted engineering workflows.",
    image:
      "https://res.cloudinary.com/dahnwukbz/image/upload/v1784039620/pexels-mikhail-nilov-9242178_qz3i57.jpg",
  },
];

const experienceItems = [
  "Instructor-led learning",
  "Guided practical exercises",
  "Hands-on technical tasks",
  "Weekly Executive Mentorship Classes",
  "Weekly Leadership Development Sessions",
  "Weekly Technical Review Meetings",
  "Team Collaboration",
  "Continuous Performance Coaching",
  "Supervised Industry Exposure",
  "Continuous Feedback & Evaluation",
];

const ignite360Disciplines = [
  {
    icon: "bi-code-slash",
    title: "Software Engineers",
    desc: "Collaborate with designers and marketers on real product work.",
  },
  {
    icon: "bi-palette",
    title: "Designers",
    desc: "Work alongside engineers and marketers to shape brand experiences.",
  },
  {
    icon: "bi-megaphone",
    title: "Digital Marketers",
    desc: "Partner with engineering and design on campaigns and content.",
  },
  {
    icon: "bi-hdd-network",
    title: "Network & IT",
    desc: "Support software teams with infrastructure and systems knowledge.",
  },
  {
    icon: "bi-cpu",
    title: "Computer Engineers",
    desc: "Support infrastructure and hardware across every specialization.",
  },
  {
    icon: "bi-people-fill",
    title: "All Thrive Together",
    desc: "Understand the full lifecycle of technology product development.",
  },
];

const leadershipItems = [
  { icon: "bi-award", title: "Leadership" },
  { icon: "bi-chat-dots", title: "Communication" },
  { icon: "bi-shield-check", title: "Professional Ethics" },
  { icon: "bi-briefcase-fill", title: "Workplace Discipline" },
  { icon: "bi-clipboard-check", title: "Accountability" },
  { icon: "bi-clock-history", title: "Time Management" },
  { icon: "bi-lightbulb", title: "Critical Thinking" },
  { icon: "bi-heart", title: "Emotional Intelligence" },
  { icon: "bi-people", title: "Team Collaboration" },
  { icon: "bi-robot", title: "Responsible AI Usage" },
  { icon: "bi-graph-up-arrow", title: "Career Development" },
];

const whyChooseItems = [
  "Structured Executive Mentorship",
  "Weekly Leadership Development Sessions",
  "Practical Hands-on Learning",
  "AI-Integrated Professional Development",
  "Small Cohorts (5–10 Participants)",
  "Ignite 360° Experience (6-Month Track)",
  "Supervised Industry Exposure",
  "Continuous Performance Evaluation",
  "Career Development Support",
  "Professional Workplace Experience",
  "SIWES Documentation Support (Where Applicable)",
];

const pricingTiers = [
  {
    name: "Ignite Foundation",
    duration: "Three (3) Months",
    desc: "Ideal for standard SIWES and Industrial Training placements.",
    amount: "₦120,000",
    plan: ["₦80,000 on Admission", "₦40,000 within 30 Days"],
    cta: "Apply for Foundation",
  },
  {
    name: "Ignite Professional",
    duration: "Four (4) Months",
    desc: "Extended practical exposure with additional project participation and mentorship.",
    amount: "₦160,000",
    plan: ["₦120,000 on Admission", "₦40,000 before the End of Month One"],
    cta: "Apply for Professional",
    featured: true,
  },
  {
    name: "Ignite Executive",
    duration: "Six (6) Months",
    desc: "Our most comprehensive Professional Development Experience. Includes eligibility for the Ignite 360° Experience.",
    amount: "₦240,000",
    plan: ["₦160,000 on Admission", "₦80,000 before the End of Month One"],
    cta: "Apply for Executive",
  },
];

const faqs = [
  {
    q: "Do I have to be on SIWES before applying?",
    a: "No. ETMPDP Ignite is open to eligible undergraduate students seeking SIWES placement, Industrial Training, internship opportunities, or practical professional development experience.",
  },
  {
    q: "Do I need my own laptop?",
    a: "Yes. Participants are required to provide a laptop that meets the minimum technical requirements for their chosen specialization.",
  },
  {
    q: "Will Elonatech sign my SIWES Logbook?",
    a: "Yes. Where applicable and where Elonatech serves as the approved host organization, we will complete and endorse the required institutional documentation.",
  },
  {
    q: "Will I work on real projects?",
    a: "Participants may receive supervised exposure to selected real-world projects based on demonstrated competence, project availability, confidentiality requirements, and Management approval.",
  },
  {
    q: "Is employment guaranteed?",
    a: "No. Participation in ETMPDP Ignite does not constitute employment. Outstanding participants may, however, be considered for employment opportunities where vacancies exist.",
  },
];

/* ── Component ──────────────────────────────────────────────────────────── */

const EmptdpIgnite = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const toggleFaq = (i) => setOpenFaq(openFaq === i ? null : i);

  const handleDownloadGuide = () => {
    toast.info(
      "The ETMPDP Ignite program guide is being finalized — Apply Now and our team will send you full details."
    );
  };

  return (
    <>
      <Helmet>
        <title>
          ETMPDP Ignite — The Undergraduate Professional Development Experience
        </title>
        <meta
          name="description"
          content="ETMPDP Ignite is the undergraduate Professional Development Experience of the Executive Technology Mentorship & Professional Development Program — ideal for SIWES, Industrial Training, Internship & Career Development."
        />
        <link rel="canonical" href="https://elonatech.com.ng/siwes" />
      </Helmet>

      {/* ── 1. Hero ────────────────────────────────────────────────────────── */}
      <div className="container-fluid emptdp-section ignite-hero-section">
        <div className="emptdp-hero-text">
          {/* <span className="emptdp-mentor-badge" style={{ marginBottom: "16px", display: "inline-block" }}>
            ETMPDP Ignite
          </span> */}
          <h2>Ignite Your Future Before Graduation</h2>
          <h5>
            The Undergraduate Professional Development Experience of the
            Executive Technology Mentorship &amp; Professional Development
            Program (ETMPDP)
          </h5>
          <p className="lead">
            Designed for Undergraduate Technology Students — Ideal for SIWES,
            Industrial Training, Internship &amp; Career Development. Bridge the
            gap between academic learning and professional practice through a
            structured Professional Development Experience combining practical
            technical skills, executive mentorship, leadership development,
            AI-powered learning, workplace readiness, and supervised industry
            exposure.
          </p>
        </div>
        <div className="emptdp-cta-buttons">
          <button
            className="emptdp-btn emptdp-btn--primary"
            onClick={() => startTransition(() => setShowModal(true))}
          >
            Apply Now
          </button>
          <button
            className="emptdp-btn emptdp-btn--outline"
            onClick={handleDownloadGuide}
          >
            Download Program Guide
          </button>
        </div>
      </div>

      {/* ── 2. More Than Just SIWES ────────────────────────────────────────── */}
      <section className="emptdp-why-section">
        <div className="container">
          <div className="emptdp-section-header">
            <h2 className="emptdp-section-title">
              A Professional Development Experience Designed For Your Future
            </h2>
            <p className="emptdp-section-subtitle">More Than Just SIWES</p>
          </div>
          <div className="emptdp-why-content">
            <div className="emptdp-why-text">
              <p>
                Many industrial training placements simply help students fulfil
                an academic requirement. ETMPDP Ignite goes much further. It is
                a structured Professional Development Experience designed to
                prepare undergraduate students for successful careers by
                combining practical technical learning, executive mentorship,
                leadership development, workplace professionalism, and
                supervised exposure to industry practices. Whether you are
                completing SIWES, Industrial Training, Internship, or simply
                seeking practical experience before graduation, ETMPDP Ignite
                helps you build the confidence, competence, and discipline
                required to succeed in today's technology industry.
              </p>
              <div className="ignite-compare-grid">
                <div className="ignite-compare-card ignite-compare-card--light">
                  <p className="ignite-compare-title">Traditional SIWES</p>
                  <p className="ignite-compare-desc">
                    Routine tasks, disconnected supervision, and limited
                    exposure to real workplace practice.
                  </p>
                </div>
                <div className="ignite-compare-card ignite-compare-card--dark">
                  <p className="ignite-compare-title">ETMPDP Ignite</p>
                  <p className="ignite-compare-desc">
                    Executive mentorship, structured leadership development, and
                    real technical specialization.
                  </p>
                </div>
              </div>
            </div>
            <div className="emptdp-why-image">
              <img
                src="https://res.cloudinary.com/dahnwukbz/image/upload/v1784039004/pexels-gabby-k-9432424_o33eir.jpg"
                alt="ETMPDP Ignite participants"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Your Professional Development Journey ───────────────────────── */}
      <section className="emptdp-structure-section ignite-journey-section">
        <div className="container">
          <div className="emptdp-section-header">
            <h2 className="emptdp-section-title">
              Your Professional Development Journey
            </h2>
            <p className="emptdp-section-subtitle">
              Your transformation at ETMPDP Ignite follows a structured pathway
            </p>
          </div>

          <div className="emptdp-timeline-desktop">
            {journey.map((s, i) => (
              <div className="emptdp-timeline-step" key={i}>
                {i < journey.length - 1 && (
                  <div className="emptdp-timeline-connector"></div>
                )}
                <div className="emptdp-step-circle">{s.num}</div>
                <h6 className="emptdp-step-title">{s.title}</h6>
                <p className="emptdp-step-desc">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="emptdp-timeline-mobile">
            {journey.map((s, i) => (
              <div className="emptdp-timeline-step-mobile" key={i}>
                <div className="emptdp-step-mobile-left">
                  <div className="emptdp-step-circle">{s.num}</div>
                  {i < journey.length - 1 && (
                    <div className="emptdp-timeline-connector-mobile"></div>
                  )}
                </div>
                <div>
                  <h6 className="emptdp-step-title">{s.title}</h6>
                  <p className="emptdp-step-desc">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Choose Your Specialization ───────────────────────────────────── */}
      <section className="emptdp-who-section">
        <div className="container">
          <div className="emptdp-section-header">
            <h2 className="emptdp-section-title">Choose Your Specialization</h2>
            <p className="emptdp-section-subtitle">
              Five tracks, one Professional Development Experience
            </p>
          </div>

          <div className="ignite-zigzag">
            {specializations.map((s, i) => (
              <div
                className={`ignite-zigzag-row${
                  i % 2 === 1 ? " ignite-zigzag-row--reverse" : ""
                }`}
                key={i}
              >
                <div className="ignite-zigzag-image-wrap">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="ignite-zigzag-image"
                  />
                </div>
                <div className="ignite-zigzag-content">
                  <div className="ignite-spec-icon">
                    <i className={`bi ${s.icon}`}></i>
                  </div>
                  <h4 className="ignite-zigzag-title">{s.title}</h4>
                  <p
                    className="ignite-spec-desc"
                    style={{ fontSize: "0.95rem", lineHeight: 1.8 }}
                  >
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. The ETMPDP Ignite Experience ─────────────────────────────────── */}
      <section className="emptdp-learn-section">
        <div className="container">
          <div className="emptdp-section-header">
            <h2 className="emptdp-section-title">
              The ETMPDP Ignite Experience
            </h2>
            <p className="emptdp-section-subtitle">
              Every participant benefits from a balanced learning approach
            </p>
          </div>
          <div className="ignite-check-grid">
            {experienceItems.map((item, i) => (
              <div
                className="ignite-check-item ignite-check-item--dark"
                key={i}
              >
                <i className="bi bi-check-circle-fill"></i>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <p className="ignite-check-note">
            Participants may receive supervised exposure to selected live
            projects based on demonstrated competence, project availability,
            confidentiality requirements, and Management approval.
          </p>
        </div>
      </section>

      {/* ── 6. Ignite 360° ───────────────────────────────────────────────────── */}
      <section className="emptdp-diff-section">
        <div className="container">
          <div className="emptdp-section-header emptdp-section-header--light">
            <h2 className="emptdp-section-title emptdp-section-title--white">
              Ignite 360° — See Beyond Your Specialization
            </h2>
            <p
              className="emptdp-section-subtitle"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              Technology professionals rarely work in isolation
            </p>
          </div>
          <div className="emptdp-diff-grid">
            {ignite360Disciplines.map((c, i) => (
              <div className="emptdp-diff-card" key={i}>
                <div className="emptdp-diff-icon">
                  <i className={`bi ${c.icon}`}></i>
                </div>
                <h6 className="emptdp-diff-title">{c.title}</h6>
                <p className="emptdp-diff-desc">{c.desc}</p>
              </div>
            ))}
          </div>
          <p
            className="ignite-check-note"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            Participants enrolled in the Ignite Executive (6-Month Track) may
            qualify for the Ignite 360° Experience. Participation is based on
            performance, mentor recommendation, operational requirements, and
            program scheduling.
          </p>
        </div>
      </section>

      {/* ── 7. Meet Your Lead Mentor ─────────────────────────────────────────── */}
      <section className="emptdp-mentor-section">
        <div className="container">
          <div className="emptdp-mentor-grid">
            <div className="emptdp-mentor-photo-col">
              <Link to="/oreva-p-oku">
                <img
                  src={MDImage}
                  alt="Oreva Oku"
                  className="emptdp-mentor-photo"
                />
                <span className="emptdp-mentor-badge">
                  Technology CEO of the Year 2024
                </span>
              </Link>
            </div>
            <div className="emptdp-mentor-bio">
              <p className="emptdp-mentor-label">Lead Mentor, ETMPDP Ignite</p>
              <h3 className="emptdp-mentor-name">Oreva Oku</h3>
              <p className="emptdp-mentor-role">
                Managing Director | Innovation &amp; IT Solutions Consultant
              </p>

              <p className="emptdp-mentor-title">
                Technology CEO of the Year 2024 (Innovation in Business)
              </p>
              <p className="emptdp-mentor-bio-text">
                With over a decade and a half of industry experience, Oreva has
                successfully delivered technology solutions across software
                engineering, networking, IT infrastructure, digital
                transformation, branding, consulting, business strategy, and
                executive leadership. Through ETMPDP Ignite, he provides
                executive mentorship, leadership coaching, career guidance, and
                professional development to help participants become competent,
                ethical, and industry-ready professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. Leadership Development ────────────────────────────────────────── */}
      <section className="emptdp-who-section">
        <div className="container">
          <div className="emptdp-section-header">
            <h2 className="emptdp-section-title">Leadership Development</h2>
            <p className="emptdp-section-subtitle">
              Technical knowledge alone does not guarantee professional success
            </p>
          </div>
          <div className="emptdp-diff-grid">
            {leadershipItems.map((c, i) => (
              <div className="emptdp-diff-card" key={i}>
                <div className="emptdp-diff-icon">
                  <i className={`bi ${c.icon}`}></i>
                </div>
                <h6 className="emptdp-diff-title">{c.title}</h6>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. Why Students & Parents Choose ETMPDP Ignite ──────────────────── */}
      <section className="emptdp-diff-section">
        <div className="container">
          <div className="emptdp-section-header emptdp-section-header--light">
            <h2 className="emptdp-section-title emptdp-section-title--white">
              Why Students &amp; Parents Choose ETMPDP Ignite
            </h2>
          </div>
          <div className="ignite-check-grid">
            {whyChooseItems.map((item, i) => (
              <div
                className="ignite-check-item ignite-check-item--light"
                key={i}
              >
                <i className="bi bi-check-circle-fill"></i>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 10. Program Options ──────────────────────────────────────────────── */}
      <section className="emptdp-invest-section">
        <div className="container">
          <div className="emptdp-section-header">
            <h2 className="emptdp-section-title">Program Options</h2>
          </div>
          <div className="ignite-pricing-grid">
            {pricingTiers.map((tier, i) => (
              <div
                className={`ignite-pricing-card${
                  tier.featured ? " ignite-pricing-card--featured" : ""
                }`}
                key={i}
              >
                {tier.featured && (
                  <span className="ignite-pricing-badge">Most Popular</span>
                )}
                <p className="ignite-pricing-name">{tier.name}</p>
                <p className="ignite-pricing-duration">{tier.duration}</p>
                <p className="ignite-pricing-desc">{tier.desc}</p>
                <p className="ignite-pricing-amount">{tier.amount}</p>
                <ul className="ignite-pricing-plan">
                  {tier.plan.map((line, j) => (
                    <li key={j}>{line}</li>
                  ))}
                </ul>
                <button
                  className={`emptdp-btn ignite-pricing-cta ${
                    tier.featured
                      ? "emptdp-btn--primary"
                      : "emptdp-btn--outline-dark"
                  }`}
                  onClick={() => startTransition(() => setShowModal(true))}
                >
                  {tier.cta}
                </button>
              </div>
            ))}
          </div>
          <p className="ignite-check-note">
            All payments are strictly non-refundable.
          </p>
        </div>
      </section>

      {/* ── 11. SIWES & Institutional Documentation Support ─────────────────── */}
      <section className="emptdp-why-section">
        <div className="container">
          <div className="ignite-siwes-banner">
            <div className="ignite-siwes-icon">
              <i className="bi bi-file-earmark-check"></i>
            </div>
            <p className="ignite-siwes-text">
              <strong>SIWES &amp; Institutional Documentation Support.</strong>{" "}
              Where applicable, Elonatech Nigeria Limited serves as the official
              host organization and completes, endorses, and signs the required
              institutional documentation, including SIWES logbooks, employer
              evaluation forms, industrial training assessment forms, and other
              relevant institutional documents in accordance with the
              requirements of the participant's institution.
            </p>
          </div>
        </div>
      </section>

      {/* ── 12. FAQ ──────────────────────────────────────────────────────────── */}
      <section className="emptdp-faq-section">
        <div className="container emptdp-faq-container">
          <div className="emptdp-section-header">
            <h2 className="emptdp-section-title">Frequently Asked Questions</h2>
          </div>
          <div className="emptdp-faq-grid">
            <div className="emptdp-faq-col">
              {faqs
                .filter((_, i) => i % 2 === 0)
                .map((faq, i) => {
                  const realIndex = i * 2;
                  return (
                    <div className="emptdp-faq-item" key={realIndex}>
                      <button
                        className="emptdp-faq-trigger"
                        onClick={() => toggleFaq(realIndex)}
                      >
                        <span className="emptdp-faq-q">{faq.q}</span>
                        <i
                          className={`bi ${
                            openFaq === realIndex
                              ? "bi-chevron-up"
                              : "bi-chevron-down"
                          } emptdp-faq-icon`}
                        ></i>
                      </button>
                      {openFaq === realIndex && (
                        <div className="emptdp-faq-answer">
                          <p>{faq.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
            </div>
            <div className="emptdp-faq-col">
              {faqs
                .filter((_, i) => i % 2 !== 0)
                .map((faq, i) => {
                  const realIndex = i * 2 + 1;
                  return (
                    <div className="emptdp-faq-item" key={realIndex}>
                      <button
                        className="emptdp-faq-trigger"
                        onClick={() => toggleFaq(realIndex)}
                      >
                        <span className="emptdp-faq-q">{faq.q}</span>
                        <i
                          className={`bi ${
                            openFaq === realIndex
                              ? "bi-chevron-up"
                              : "bi-chevron-down"
                          } emptdp-faq-icon`}
                        ></i>
                      </button>
                      {openFaq === realIndex && (
                        <div className="emptdp-faq-answer">
                          <p>{faq.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </section>

      {/* ── 13. Final CTA ────────────────────────────────────────────────────── */}
      <section className="emptdp-cta-section">
        <div className="container emptdp-cta-inner">
          <h2 className="emptdp-cta-heading">
            Ready To{" "}
            <span className="emptdp-cta-heading--dark">
              Ignite Your Future?
            </span>
          </h2>
          <p className="emptdp-cta-sub">
            Don't settle for an industrial attachment that only helps you
            complete a requirement. Choose a Professional Development Experience
            that prepares you for a successful technology career. ETMPDP Ignite
            — Ignite Your Potential. Empower Your Future.
          </p>
          <div className="emptdp-cta-buttons">
            <button
              className="emptdp-btn emptdp-btn--primary"
              onClick={() => startTransition(() => setShowModal(true))}
            >
              Apply Now
            </button>
            <button
              className="emptdp-btn emptdp-btn--outline-dark"
              onClick={handleDownloadGuide}
            >
              Download Program Guide
            </button>
          </div>
        </div>
      </section>

      <IgniteApplicationModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
    </>
  );
};

export default EmptdpIgnite;
