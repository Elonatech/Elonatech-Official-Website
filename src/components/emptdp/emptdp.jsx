import React, { useRef, useState, startTransition } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./emptdp.css";
import { cards } from "./data/emptdp.data.js";
import ApplicationModal from "./applicationModal";
import MDImage from "../main/captions/Ceo1.png";
import brocchurePDF from "./data/EMPTDP_brochure.pdf";

/* ── Static data ────────────────────────────────────────────────────────── */

const tabs = [
  {
    label: "Technology Foundations",
    image:
      "https://res.cloudinary.com/djogptxxc/image/upload/v1781171095/pexels-mikhail-nilov-9301314_gkohy1.jpg",
    skills: [
      "Computer fundamentals & architecture",
      "Operating systems & environments",
      "Hardware & software troubleshooting",
      "IT infrastructure basics",
      "Data management principles",
    ],
  },
  {
    label: "Networking & Systems",
    image:
      "https://res.cloudinary.com/djogptxxc/image/upload/v1781175713/pexels-brett-sayles-5326748_kjo74t.jpg",
    skills: [
      "Network design & administration",
      "Server configuration & management",
      "Cloud infrastructure (AWS, Azure)",
      "Cybersecurity fundamentals",
      "System monitoring & support",
    ],
  },
  {
    label: "Web & Digital",
    image:
      "https://res.cloudinary.com/djogptxxc/image/upload/v1781176056/pexels-pnw-prod-8091335_nca7aw.jpg",
    skills: [
      "HTML, CSS & JavaScript",
      "Frontend frameworks & libraries",
      "Backend development basics",
      "Database integration",
      "Web hosting & deployment",
    ],
  },
  {
    label: "Digital Marketing",
    image:
      "https://res.cloudinary.com/djogptxxc/image/upload/v1781176056/pexels-rdne-7414035_sbhtzl.jpg",
    skills: [
      "Social media strategy & management",
      "SEO & SEM fundamentals",
      "Content marketing & copywriting",
      "Email marketing automation",
      "Analytics & performance tracking",
    ],
  },
  {
    label: "Creative Design",
    image:
      "https://res.cloudinary.com/djogptxxc/image/upload/v1781171098/pexels-gabby-k-9432945_alnrcq.jpg",
    skills: [
      "UI/UX design principles",
      "Adobe Creative Suite tools",
      "Branding & visual identity",
      "Prototyping & wireframing",
      "Motion graphics basics",
    ],
  },
  {
    label: "Leadership & Career",
    image:
      "https://res.cloudinary.com/djogptxxc/image/upload/v1781171096/pexels-kampus-5940713_s9bdaz.jpg",
    skills: [
      "Professional communication skills",
      "Team leadership & collaboration",
      "Project management basics",
      "Personal branding & presence",
      "Career planning & goal setting",
    ],
  },
];

const differentiators = [
  {
    icon: "bi-bullseye",
    title: "Executive Mentorship",
    desc: "Learn under experienced technology professionals and business leaders.",
  },
  {
    icon: "bi-shield-lock",
    title: "Selective Admission",
    desc: "Limited cohort per intake to ensure personalized guidance.",
  },
  {
    icon: "bi-building",
    title: "Industry Exposure",
    desc: "Real-world insights into technology operations and business environments.",
  },
  {
    icon: "bi-people-fill",
    title: "Leadership Development",
    desc: "Develop discipline, professionalism, accountability, and leadership capacity.",
  },
  {
    icon: "bi-map",
    title: "Career Direction",
    desc: "Discover your strengths and build a clear professional pathway.",
  },
];

const steps = [
  { num: 1, title: "Application", desc: "Submit your application online" },
  {
    num: 2,
    title: "Interview & Assessment",
    desc: "Evaluation of aptitude & fit",
  },
  {
    num: 3,
    title: "Probation (1 Month)",
    desc: "Suitability assessment period",
  },
  {
    num: 4,
    title: "Full Enrolment",
    desc: "Formal admission into the program",
  },
  {
    num: 5,
    title: "Mentorship & Development",
    desc: "Core training & executive mentorship",
  },
  {
    num: 6,
    title: "Certification",
    desc: "Program completion & certificate award",
  },
];

const checklist = [
  "Executive Technology Mentorship Certificate",
  "Professional Development Evaluation Report",
  "Practical Industry Exposure",
  "Career Development Guidance",
  "Employment Consideration (Where Applicable)",
];

const faqs = [
  {
    q: "Is this an internship?",
    a: "No. ETMPDP is a structured mentorship and professional development program designed to develop future technology professionals and leaders.",
  },
  {
    q: "Does completion guarantee employment?",
    a: "No. However, outstanding participants may be considered for future opportunities where available.",
  },
  {
    q: "Is it open to non-Computer Science graduates?",
    a: "Yes. Applicants with strong interest, commitment, and aptitude for technology may be considered.",
  },
  {
    q: "Is the programme investment refundable?",
    a: "No. All programme investments are strictly non-refundable.",
  },
  {
    q: "Is admission automatic after application?",
    a: "No. Applicants must successfully pass the interview and assessment process.",
  },
];

/* ── Component ──────────────────────────────────────────────────────────── */

const Emptdp = () => {
  const scrollRef = useRef(null);
  const [activeTab, setActiveTab] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [activeCard, setActiveCard] = useState(0);

  const scroll = (dir) => {
    if (scrollRef.current) {
      const next =
        dir === "right"
          ? (activeCard + 1) % cards.length
          : (activeCard - 1 + cards.length) % cards.length;
      setActiveCard(next);
      scrollRef.current.scrollTo({
        left: next * 340,
        behavior: "smooth",
      });
    }
  };

  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveCard((prev) => {
        const next = (prev + 1) % cards.length;
        if (scrollRef.current) {
          scrollRef.current.scrollTo({ left: next * 340, behavior: "smooth" });
        }
        return next;
      });
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const toggleFaq = (i) => setOpenFaq(openFaq === i ? null : i);

  return (
    <>
      <Helmet>
        <title>
          Executive Technology Mentorship &amp; Professional Development Program
        </title>
        <meta
          name="description"
          content="A selective 12-month mentorship and professional development program designed to equip aspiring technology professionals with practical skills, leadership capacity, business awareness, and career direction."
        />
        <link rel="canonical" href="https://elonatech.com.ng/emptdp" />
      </Helmet>

      {/* ── 1. Hero ────────────────────────────────────────────────────────── */}
      <div className="container-fluid emptdp-section">
        <div className="emptdp-hero-text">
          <h2>
            Executive Technology Mentorship &amp; Professional Development
            Program
          </h2>
          <h5>Transforming Potential into Professional Excellence</h5>
          <p className="lead">
            A selective 12-month mentorship and professional development program
            designed to equip aspiring technology professionals with practical
            skills, <br />
            leadership capacity, business awareness, and career direction.
          </p>
        </div>
        <div className="emptdp-cta-buttons">
          <button
            className="emptdp-btn emptdp-btn--primary"
            onClick={() => startTransition(() => setShowModal(true))}
          >
            Apply Now
          </button>
          <a href={brocchurePDF} target="_blank" rel="noopener noreferrer">
            <button className="emptdp-btn emptdp-btn--outline">
              Download Brochure
            </button>
          </a>
        </div>
      </div>

      {/* ── 2. Why This Program ────────────────────────────────────────────── */}
      <section className="emptdp-why-section">
        <div className="container">
          <div className="emptdp-section-header">
            <h2 className="emptdp-section-title">More Than Training</h2>
            <p className="emptdp-section-subtitle">
              A Professional Transformation Journey
            </p>
          </div>
          <div className="emptdp-why-content">
            <div className="emptdp-why-text">
              <p>
                Many graduates leave school with academic knowledge but little
                exposure to real-world technology operations, workplace
                expectations, leadership development, and career planning.
                ETMPDP bridges this gap by combining technical development,
                professional grooming, executive mentorship, and industry
                exposure in a structured twelve-month experience. Participants
                learn not only how technology works — but how successful
                technology professionals think, communicate, lead, and create
                value.
              </p>
            </div>
            <div className="emptdp-why-image">
              {/* Replace src with actual image when ready */}
              <img
                src={
                  "https://res.cloudinary.com/djogptxxc/image/upload/v1781171098/pexels-jep-gambardella-7689856_hltynt.jpg"
                }
                alt="Mentorship session"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. What Participants Will Learn ────────────────────────────────── */}
      <section className="emptdp-learn-section">
        <div className="container">
          <div className="emptdp-section-header">
            <h2 className="emptdp-section-title">
              What Participants Will Learn
            </h2>
            <p className="emptdp-section-subtitle">
              Six core pillars of development
            </p>
          </div>

          <div className="emptdp-learn-tabs">
            {tabs.map((t, i) => (
              <button
                key={i}
                className={`emptdp-tab-btn${
                  activeTab === i ? " emptdp-tab-btn--active" : ""
                }`}
                onClick={() => setActiveTab(i)}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="emptdp-learn-content">
            <div className="emptdp-learn-image-wrap">
              <img
                src={tabs[activeTab].image}
                alt={tabs[activeTab].label}
                className="emptdp-learn-image"
              />
            </div>
            <div className="emptdp-learn-skills">
              <h4 className="emptdp-learn-skills-title">
                {tabs[activeTab].label}
              </h4>
              <ul className="emptdp-skills-list">
                {tabs[activeTab].skills.map((s, i) => (
                  <li key={i} className="emptdp-skill-item">
                    <span className="emptdp-skill-dot"></span>
                    <span className="emptdp-skill-text">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Who Should Apply ────────────────────────────────────────────── */}
      <section className="emptdp-who-section">
        <div className="container">
          <div className="emptdp-section-header">
            <h2 className="emptdp-section-title">Who Should Apply?</h2>
            <p className="emptdp-section-subtitle">
              This program is designed for ambitious individuals ready to grow.
            </p>
          </div>
          <div className="emptdp-scroll-wrapper">
            <button
              className="emptdp-scroll-btn emptdp-scroll-btn--left"
              onClick={() => scroll("left")}
              aria-label="Scroll left"
            >
              <i className="bi bi-chevron-left"></i>
            </button>
            <div className="emptdp-cards-track" ref={scrollRef}>
              {cards.map((c, i) => (
                <div className="emptdp-card" key={i}>
                  <div className="emptdp-card-icon">
                    <i className="bi bi-check-lg"></i>
                  </div>
                  <h5 className="emptdp-card-title">{c.title}</h5>
                  <p className="emptdp-card-desc">{c.desc}</p>
                </div>
              ))}
            </div>
            <button
              className="emptdp-scroll-btn emptdp-scroll-btn--right"
              onClick={() => scroll("right")}
              aria-label="Scroll right"
            >
              <i className="bi bi-chevron-right"></i>
            </button>
          </div>

          {/* Dots */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "8px",
              marginTop: "1.5rem",
            }}
            className="d-flex d-md-none justify-content-center gap-2 mt-4"
          >
            {cards.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setActiveCard(i);
                  scrollRef.current?.scrollTo({
                    left: i * 340,
                    behavior: "smooth",
                  });
                }}
                style={{
                  width: activeCard === i ? "20px" : "10px",
                  height: "10px",
                  borderRadius: "100px",
                  background: activeCard === i ? "#dc3545" : "#ccc",
                  border: "none",
                  padding: 0,
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
                aria-label={`Go to card ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Why ETMPDP Is Different ─────────────────────────────────────── */}
      <section className="emptdp-diff-section">
        <div className="container">
          <div className="emptdp-section-header emptdp-section-header--light">
            <h2 className="emptdp-section-title emptdp-section-title--white">
              Why ETMPDP Is Different
            </h2>
          </div>
          <div className="emptdp-diff-grid">
            {differentiators.map((c, i) => (
              <div className="emptdp-diff-card" key={i}>
                <div className="emptdp-diff-icon">
                  <i className={`bi ${c.icon}`}></i>
                </div>
                <h6 className="emptdp-diff-title">{c.title}</h6>
                <p className="emptdp-diff-desc">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Programme Structure ─────────────────────────────────────────── */}
      <section className="emptdp-structure-section">
        <div className="container">
          <div className="emptdp-section-header">
            <h2 className="emptdp-section-title">Programme Structure</h2>
          </div>

          {/* Desktop timeline */}
          <div className="emptdp-timeline-desktop">
            {steps.map((s, i) => (
              <div className="emptdp-timeline-step" key={i}>
                {i < steps.length - 1 && (
                  <div className="emptdp-timeline-connector"></div>
                )}
                <div className="emptdp-step-circle">{s.num}</div>
                <h6 className="emptdp-step-title">{s.title}</h6>
                <p className="emptdp-step-desc">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Mobile timeline */}
          <div className="emptdp-timeline-mobile">
            {steps.map((s, i) => (
              <div className="emptdp-timeline-step-mobile" key={i}>
                <div className="emptdp-step-mobile-left">
                  <div className="emptdp-step-circle">{s.num}</div>
                  {i < steps.length - 1 && (
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

      {/* ── 7. Investment + What You Receive (side by side) ────────────────── */}
      <section className="emptdp-invest-section">
        <div className="container">
          <div className="emptdp-invest-grid">
            {/* Left — pricing */}
            <div className="emptdp-invest-left">
              <h3 className="emptdp-invest-heading">Programme Investment</h3>
              <div className="emptdp-price-cards">
                <div className="emptdp-price-card emptdp-price-card--light">
                  <p className="emptdp-price-phase">Phase 1 — Probation</p>
                  <p className="emptdp-price-amount">₦75,000</p>
                  <p className="emptdp-price-note">
                    One-month probation and suitability assessment
                  </p>
                </div>
                <div className="emptdp-price-divider"></div>
                <div className="emptdp-price-card emptdp-price-card--dark">
                  <p className="emptdp-price-phase emptdp-price-phase--white">
                    Phase 2 — Full Enrolment
                  </p>
                  <p className="emptdp-price-amount emptdp-price-amount--white">
                    ₦300,000
                  </p>
                  <p className="emptdp-price-note emptdp-price-note--white">
                    Upon successful completion of probation
                  </p>
                </div>
              </div>
              <p className="emptdp-total-label">
                Total Investment: <strong>₦375,000</strong>
              </p>
              <p className="emptdp-refund-note">
                All payments are strictly non-refundable.
              </p>
            </div>

            <div className="emptdp-invest-divider"></div>

            {/* Right — what you receive */}
            <div className="emptdp-invest-right">
              <h3 className="emptdp-invest-heading">
                What Participants Receive
              </h3>
              <ul className="emptdp-receive-list">
                {checklist.map((item, i) => (
                  <li key={i} className="emptdp-receive-item">
                    <i className="bi bi-check-circle-fill emptdp-receive-icon"></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. Programme Mentor ────────────────────────────────────────────── */}
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
              <p className="emptdp-mentor-label">Programme Mentor</p>
              <h3 className="emptdp-mentor-name">Oreva Oku</h3>
              <p className="emptdp-mentor-role">
                Managing Director, Elonatech Nigeria Limited
              </p>
              <p className="emptdp-mentor-title">
                Technology Consultant | Brand Development &amp; Digital
                Transformation Strategist | Business Leader
              </p>
              <p className="emptdp-mentor-bio-text">
                With years of experience delivering technology solutions,
                consulting services, digital transformation initiatives, and
                leadership development across multiple sectors, Oreva Oku
                provides direct mentorship designed to help participants
                accelerate their professional growth and career readiness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. FAQ ─────────────────────────────────────────────────────────── */}
      <section className="emptdp-faq-section">
        <div className="container emptdp-faq-container">
          <div className="emptdp-section-header">
            <h2 className="emptdp-section-title">Frequently Asked Questions</h2>
          </div>

          {/* Two-column grid — left col gets odd items, right col gets even items */}
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

      {/* ── 10. Final CTA ──────────────────────────────────────────────────── */}
      <section className="emptdp-cta-section">
        <div className="container emptdp-cta-inner">
          <h2 className="emptdp-cta-heading">
            Ready To Transform Your Potential{" "}
            <span className="emptdp-cta-heading--dark">
              Into Professional Excellence?
            </span>
          </h2>
          <p className="emptdp-cta-sub">
            Applications are now open for the next ETMPDP Cohort. Limited Spaces
            Available.
          </p>
          <div className="emptdp-cta-buttons">
            <button
              className="emptdp-btn emptdp-btn--primary"
              onClick={() => startTransition(() => setShowModal(true))}
            >
              Apply Now
            </button>
            <a href={brocchurePDF} target="_blank" rel="noopener noreferrer">
              <button className="emptdp-btn emptdp-btn--outline-dark">
                Download Brochure
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Application Modal — opens when any "Apply Now" button is clicked */}
      <ApplicationModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
    </>
  );
};

export default Emptdp;
