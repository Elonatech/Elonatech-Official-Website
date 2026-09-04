import React, { useState, startTransition } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";
import "./emptdp.css";
import "./emptdpIgnite.css";
import IgniteApplicationModal from "./igniteApplicationModal";
import brochurePDF from "./data/ETMPDP Ignite (2).pdf";
import MDImage from "../main/captions/Ceo1.png";

/* ── Static data ────────────────────────────────────────────────────────── */

/* Section 3 — "From Classroom Knowledge to Industry Capability" is now a
   short run of rhetorical questions instead of a progression chain + card
   grid (younger, more direct tone). */
const classroomQuestions = [
  "Can you apply what you know?",
  "Can you work with others?",
  "Can you communicate professionally?",
  "Can you solve problems?",
  "Can you learn new tools?",
  "Can you take responsibility?",
];

/* Eight specialization tracks. `tab` is the short label for the tab row;
   `title` is the full name shown in the panel. Core Areas are per the
   ETMPDP Ignite spec.
   NOTE: the Virtual Assistance and Data Analytics images are placeholders
   reusing existing repo photos — swap for dedicated shots when available. */
const specializationTracks = [
  {
    tab: "Software Engineering",
    title: "Software Engineering",
    tagline: "Build Digital Solutions.",
    image:
      "https://res.cloudinary.com/dahnwukbz/image/upload/v1784039005/pexels-naboth-otieno-83498565-19805876_ziwrjo.jpg",
    coreAreas: [
      "Web Design & Development",
      "Frontend Development",
      "Backend Development",
      "Database Fundamentals",
      "APIs & Integrations",
      "AI-Assisted Software Development",
    ],
  },
  {
    tab: "Graphics & Brand Design",
    title: "Graphics, Motion Graphics & Brand Design",
    tagline: "Create. Communicate. Build Brands.",
    image:
      "https://res.cloudinary.com/dahnwukbz/image/upload/v1784039003/pexels-darlene-alderson-7971537_lqlqy9.jpg",
    coreAreas: [
      "Graphic Design",
      "Motion Graphics",
      "Video Editing",
      "Brand Identity Development",
      "Creative Content Production",
      "AI-Assisted Creative Workflow",
    ],
  },
  {
    tab: "Digital Marketing",
    title: "Digital Marketing & Content Strategy",
    tagline: "Turn Digital Attention into Business Value.",
    image:
      "https://res.cloudinary.com/dahnwukbz/image/upload/v1784039003/pexels-rdne-8370329_j6gibu.jpg",
    coreAreas: [
      "Social Media Marketing",
      "SEO",
      "Content Marketing",
      "Email Marketing",
      "Digital Campaign Planning",
      "Marketing Analytics",
      "AI-Assisted Digital Marketing",
    ],
  },
  {
    tab: "IT & Networking",
    title: "IT Support, Networking & Infrastructure",
    tagline: "Keep Technology Connected and Working.",
    image:
      "https://res.cloudinary.com/dahnwukbz/image/upload/v1784103672/Network_engineer_in_server_room_using_laptop_minimal___Premium_Photo_ayqzyn.jpg",
    coreAreas: [
      "Computer Hardware",
      "Networking",
      "Technical Support",
      "Systems Administration",
      "Structured Cabling",
      "AI-Assisted Troubleshooting",
    ],
  },
  {
    tab: "Computer Engineering",
    title: "Computer Engineering",
    tagline: "Understand the Technology Behind the Technology.",
    image:
      "https://res.cloudinary.com/dahnwukbz/image/upload/v1784039620/pexels-mikhail-nilov-9242178_qz3i57.jpg",
    coreAreas: [
      "Computer Systems",
      "Hardware Assembly",
      "Preventive Maintenance",
      "System Diagnostics",
      "Peripheral Integration",
      "AI-Assisted Engineering Workflow",
    ],
  },
  {
    tab: "Virtual Assistance",
    title: "Virtual Assistance & Digital Operations",
    tagline: "Organize. Support. Execute.",
    image:
      "https://res.cloudinary.com/dahnwukbz/image/upload/v1784905744/pexels-kampus-5940713_s9bdaz_bzeilg.jpg",
    coreAreas: [
      "Digital Workplace Tools",
      "Administrative Operations",
      "Executive & Client Support",
      "Digital Documentation",
      "Task & Workflow Management",
      "Business Support Operations",
      "AI-Powered Productivity",
    ],
  },
  {
    tab: "Data Analytics",
    title: "Data Analytics & Business Intelligence",
    tagline: "Turn Data into Insight.",
    image:
      "https://res.cloudinary.com/dahnwukbz/image/upload/v1784905632/pexels-mikhail-nilov-9301314_gkohy1_zbay4p.jpg",
    coreAreas: [
      "Data Fundamentals",
      "Excel for Data Analysis",
      "Data Cleaning",
      "Data Analysis",
      "Data Visualization",
      "Power BI",
      "SQL Fundamentals",
      "Business Intelligence",
      "AI-Assisted Data Analysis",
    ],
  },
  {
    tab: "Cybersecurity",
    title: "Cybersecurity & Information Security",
    tagline: "Protect What Technology Depends On.",
    image:
      "https://res.cloudinary.com/dahnwukbz/image/upload/v1784905669/pexels-brett-sayles-5326748_kjo74t_tdxhmg.jpg",
    coreAreas: [
      "Security Foundations",
      "Network Security",
      "Identity & Access",
      "Threat Awareness",
      "Monitoring",
      "Incident Response",
    ],
  },
];

/* Section 7 — "The Ignite Learning Experience" */
const learningExperience = [
  {
    icon: "bi-book",
    title: "Learn",
    desc: "Instructor-led sessions and guided technical learning.",
  },
  {
    icon: "bi-tools",
    title: "Practice",
    desc: "Hands-on exercises and technical assignments.",
  },
  {
    icon: "bi-clipboard-check",
    title: "Review",
    desc: "Technical reviews, feedback and performance evaluation.",
  },
  {
    icon: "bi-people",
    title: "Collaborate",
    desc: "Team activities and professional workplace interaction.",
  },
  {
    icon: "bi-award",
    title: "Develop",
    desc: "Leadership, communication, accountability and professional skills.",
  },
  {
    icon: "bi-building",
    title: "Experience",
    desc: "Supervised exposure to selected real-world projects where appropriate.",
  },
];

const ignite360CrossExamples = [
  "Software interacts with infrastructure.",
  "Marketing interacts with data.",
  "Cybersecurity interacts with networks.",
  "Design interacts with digital marketing.",
  "Business operations depend on technology.",
];

const ignite360Eligibility = [
  "Performance",
  "Mentor recommendation",
  "Operational requirements",
  "Program scheduling",
];

/* Section 10 — AI-Integrated Learning */
const aiUseAreas = [
  "Research",
  "Productivity",
  "Content Creation",
  "Software Development",
  "Creative Workflows",
  "Data Analysis",
  "Documentation",
  "Problem Solving",
  "Digital Marketing",
  "Automation",
];

const professionalDevItems = [
  "Business Communication",
  "Professional Etiquette",
  "Workplace Ethics",
  "Time Management",
  "Critical Thinking",
  "Accountability",
  "Problem Solving",
  "Team Collaboration",
  "Leadership",
  "Career Development",
  "Emotional Intelligence",
  "Responsible AI Use",
];

/* Section 11 — Real Industry Exposure */
const realExposureConditions = [
  "Demonstrated competence",
  "Project availability",
  "Confidentiality requirements",
  "Operational requirements",
  "Management approval",
];

/* Section 12 — SIWES & Industrial Training Support */
const siwesSupportItems = [
  "SIWES logbooks",
  "Employer evaluation forms",
  "Industrial training assessment forms",
  "Institutional completion documentation",
  "Other approved institutional requirements",
];

/* Section 13 — Your Ignite Outcomes */
const outcomeCards = [
  {
    icon: "bi-cpu",
    title: "Technical Capability",
    desc: "Practical exposure within their chosen specialization.",
  },
  {
    icon: "bi-chat-square-text",
    title: "Professional Confidence",
    desc: "Greater confidence communicating, collaborating and operating in a professional environment.",
  },
  {
    icon: "bi-briefcase",
    title: "Workplace Readiness",
    desc: "A better understanding of professional expectations and workplace culture.",
  },
  {
    icon: "bi-award",
    title: "Leadership Foundation",
    desc: "Experience with accountability, teamwork, initiative and leadership development.",
  },
  {
    icon: "bi-signpost-split",
    title: "Career Direction",
    desc: "Greater clarity around technology career possibilities and areas of interest.",
  },
  {
    icon: "bi-folder2-open",
    title: "Professional Portfolio",
    desc: "Guidance toward documenting and presenting relevant work and achievements.",
  },
];

/* Section 14 — What You Receive */
const whatYouReceiveItems = [
  "ETMPDP Ignite Executive Technology Mentorship Certificate",
  "Professional Development Evaluation Report",
  "Career Guidance & Professional Recommendation",
  "Professional Portfolio Development Guidance",
  "Practical Industry Exposure",
  "Leadership Development Recognition",
  "Eligible SIWES/Industrial Training/Internship Documentation",
  "Employment Consideration, Where Applicable",
];

/* Section 15 — Who Should Apply? */
const whoShouldApplyItems = [
  "Undergraduate technology students",
  "Students preparing for SIWES",
  "Students undertaking Industrial Training",
  "Students seeking structured internship experience",
  "Students seeking practical technology exposure",
  "Students preparing for technology careers",
  "Students who want to develop professionally before graduation",
];

/* Section 16 — Delivery Options */
const deliveryOptions = [
  {
    icon: "bi-building",
    title: "Onsite",
    desc: "Direct practical learning, collaboration and workplace exposure.",
  },
  {
    icon: "bi-laptop",
    title: "Remote",
    desc: "Structured virtual learning, practical assignments, mentorship, technical reviews and collaboration.",
    featured: true,
  },
  {
    icon: "bi-arrow-left-right",
    title: "Hybrid",
    desc: "A combination of onsite and remote learning, subject to specialization and practical requirements.",
  },
];

/* Section 18 — "Why Choose ETMPDP Ignite?" (near the end, before FAQ) */
const whyChooseItems = [
  "Structured Executive Mentorship",
  "Practical Hands-On Experience",
  "Primary Technology Specialization",
  "AI-Integrated Learning",
  "Leadership Development",
  "Professional Workplace Experience",
  "Small Cohort Learning",
  "Ignite 360° Cross-Track Exposure",
  "Supervised Real-World Project Exposure",
  "Continuous Performance Feedback",
  "Career Development Guidance",
  "SIWES & Institutional Documentation Support",
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
    q: "Is Ignite only for SIWES students?",
    a: "No. Ignite is ideal for SIWES and Industrial Training, but students may also participate for internship, career development and professional growth.",
  },
  {
    q: "Do I choose a specialization?",
    a: "Yes. Every participant selects one primary specialization.",
  },
  {
    q: "Can I learn other technology areas?",
    a: "Yes. Selected participants may receive cross-disciplinary exposure. Eligible participants in the 6-month Ignite Executive experience may participate in Ignite 360° subject to the applicable requirements.",
  },
  {
    q: "Which Ignite option should I choose?",
    a: "Ignite Foundation is 3 months, Ignite Professional is 4 months, while Ignite Executive is 6 months and provides the most comprehensive experience.",
  },
  {
    q: "Is Ignite an employment program?",
    a: "No. Participation does not constitute employment and completion does not guarantee employment.",
  },
  {
    q: "Can Elonatech sign my SIWES documents?",
    a: "Where applicable, Elonatech may serve as the official host organization and complete or endorse required institutional documentation.",
  },
  {
    q: "Do I need my own laptop?",
    a: "Yes. Participants are expected to provide and maintain a laptop that meets the requirements of their selected specialization.",
  },
  {
    q: "Is accommodation included in the fee?",
    a: "No. Residential accommodation is optional and separately priced.",
  },
];

/* ── Component ──────────────────────────────────────────────────────────── */

const EmptdpIgnite = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [activeSpec, setActiveSpec] = useState(0);

  const toggleFaq = (i) => setOpenFaq(openFaq === i ? null : i);

  // const handleDownloadGuide = () => {
  //   toast.info(
  //     "The ETMPDP Ignite program guide is being finalized — Apply Now and our team will send you full details."
  //   );
  // };

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
        <link rel="canonical" href="https://elonatech.com.ng/emptdp-ignite" />
      </Helmet>

      {/* ── 1. Hero ────────────────────────────────────────────────────────── */}
      <div className="container-fluid emptdp-section ignite-hero-section">
        <div className="emptdp-hero-text">
          <span
            className="emptdp-mentor-badge"
            style={{ marginBottom: "16px" }}
          >
            ETMPDP Ignite
          </span>
          <h2>Enter the Industry. Build Your Edge.</h2>
          <h5>The Undergraduate Professional Development Experience</h5>
          <p className="lead">
            A structured industry-based professional development experience
            designed to bridge the gap between academic learning and the
            technology industry.
          </p>
          <p className="ignite-hero-tag ignite-hero-tag--italic">
            SIWES &bull; Industrial Training &bull; Internship &bull; Career
            Development
          </p>
        </div>
        <div className="emptdp-cta-buttons">
          <button
            className="emptdp-btn emptdp-btn--primary"
            onClick={() => startTransition(() => setShowModal(true))}
          >
            Apply for Ignite
          </button>
          <a href={brochurePDF} target="_blank" rel="noopener noreferrer">
            <button className="emptdp-btn emptdp-btn--outline">
              Download Ignite Brochure
            </button>
          </a>
        </div>
        <div className="ignite-learning-mode">
          <h6>Onsite | Remote | Hybrid</h6>
        </div>
      </div>

      {/* ── 2. Introduction ───────────────────────────────────────────────── */}
      <section className="emptdp-why-section">
        <div className="container">
          <div className="emptdp-section-header">
            <h2 className="emptdp-section-title">
              Not Just Industrial Training. An Industry Experience.
            </h2>
          </div>
          <div className="emptdp-why-content">
            <div className="emptdp-why-text">
              <p>
                Industrial training should be more than simply showing up at an
                office. ETMPDP Ignite gives undergraduate students a structured
                environment where they can learn, practice, collaborate, receive
                mentorship, develop professionally and experience how technology
                work is actually done. Whether you're completing SIWES,
                Industrial Training, an internship, or simply investing in your
                professional development, Ignite is designed to help you enter
                the technology industry with greater confidence and capability.
              </p>
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

      {/* ── 3. From Classroom Knowledge to Industry Capability ─────────────── */}
      <section className="emptdp-diff-section">
        <div className="container">
          <div className="emptdp-section-header emptdp-section-header--light">
            <h2 className="emptdp-section-title emptdp-section-title--white">
              From Classroom Knowledge to Industry Capability
            </h2>
          </div>

          <p className="ignite-questions-intro">
            University and classroom learning provide important foundations.
            <br />
            But the technology industry demands more:
          </p>

          <ul className="ignite-questions-list">
            {classroomQuestions.map((q, i) => (
              <li key={i}>{q}</li>
            ))}
          </ul>

          <p className="ignite-questions-closer">
            ETMPDP Ignite is designed to help students begin answering those
            questions before they graduate.
          </p>
        </div>
      </section>

      {/* ── 4. Choose Your Primary Specialization ─────────────────────────── */}
      <section className="emptdp-who-section">
        <div className="container">
          <div className="emptdp-section-header">
            <h2 className="emptdp-section-title">
              Choose Your Primary Specialization
            </h2>
            <p className="emptdp-section-subtitle">
              Ignite gives every participant a primary specialization aligned
              with their interests, academic background and career direction.
            </p>
          </div>

          <div className="emptdp-learn-tabs">
            {specializationTracks.map((t, i) => (
              <button
                key={i}
                className={`emptdp-tab-btn${
                  activeSpec === i ? " emptdp-tab-btn--active" : ""
                }`}
                onClick={() => setActiveSpec(i)}
              >
                {t.tab}
              </button>
            ))}
          </div>

          <div className="emptdp-learn-content">
            <div className="emptdp-learn-image-wrap">
              <img
                src={specializationTracks[activeSpec].image}
                alt={specializationTracks[activeSpec].title}
                className="emptdp-learn-image"
              />
            </div>
            <div className="emptdp-learn-skills">
              <h4 className="emptdp-learn-skills-title">
                {specializationTracks[activeSpec].title}
              </h4>
              <p className="ignite-spec-tagline">
                {specializationTracks[activeSpec].tagline}
              </p>
              <ul className="emptdp-skills-list">
                {specializationTracks[activeSpec].coreAreas.map((s, i) => (
                  <li key={i} className="emptdp-skill-item">
                    <span className="emptdp-skill-dot"></span>
                    <span className="emptdp-skill-text">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="ignite-spec-cta">
            <a href={brochurePDF} target="_blank" rel="noopener noreferrer">
              <button className="emptdp-btn emptdp-btn--outline-dark">
                Explore Specializations
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* ── 5. Ignite 360° ───────────────────────────────────────────────── */}
      <section className="emptdp-diff-section">
        <div className="container">
          <div className="emptdp-section-header emptdp-section-header--light">
            <h2 className="emptdp-section-title emptdp-section-title--white">
              Ignite 360&deg;
            </h2>
            <p
              className="emptdp-section-subtitle"
              style={{ color: "rgba(255,255,255,0.75)" }}
            >
              Your specialization gives you depth. Ignite 360&deg; gives you
              perspective.
            </p>
          </div>

          <p className="ignite-360-lead">
            Every Ignite participant has a primary specialization. But
            technology does not exist in isolated departments.
          </p>

          <ul className="ignite-360-examples">
            {ignite360CrossExamples.map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>

          <p className="ignite-360-lead">
            Ignite 360&deg; introduces eligible participants to this
            interconnected technology ecosystem. Participants may observe,
            collaborate or undertake selected activities across complementary
            technology areas.
          </p>

          <div className="ignite-360-elig">
            <p className="ignite-360-elig-title">
              Ignite Executive &mdash; Six-Month Track
            </p>
            <p className="ignite-360-elig-sub">
              Eligible participants may qualify for structured cross-track
              rotations, based on:
            </p>
            <ul className="ignite-360-elig-list">
              {ignite360Eligibility.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── 6. Ignite Experience Options ──────────────────────────────────── */}
      <section className="emptdp-invest-section">
        <div className="container">
          <div className="emptdp-section-header">
            <h2 className="emptdp-section-title">
              Choose Your Ignite Experience
            </h2>
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

      {/* ── 7. How Ignite Works ──────────────────────────────────────────── */}
      <section className="emptdp-learn-section">
        <div className="container">
          <div className="emptdp-section-header">
            <h2 className="emptdp-section-title">
              The Ignite Learning Experience
            </h2>
            <p className="emptdp-section-subtitle">
              Ignite combines structured learning with practical industry
              exposure.
            </p>
          </div>
          <div className="emptdp-diff-grid ignite-how-grid">
            {learningExperience.map((c, i) => (
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

      {/* ── 7. Meet Your Lead Mentor ─────────────────────────────────────────── */}
      <section className="emptdp-mentor-section">
        <div className="container">
          <div className="emptdp-section-header emptdp-section-header--light">
            <h2 className="emptdp-section-title emptdp-section-title--white">
              Meet our mentors
            </h2>
          </div>

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

      {/* ── 7b. Other Mentors ────────────────────────────────────────────────── */}
      <section className="emptdp-mentor-section">
        <div className="container">
          <div className="emptdp-mentor-grid">
            <div className="emptdp-mentor-bio">
              <p className="emptdp-mentor-label">Mentor, ETMPDP Ignite</p>
              <h3 className="emptdp-mentor-name">Violet Laura O.</h3>
              <p className="emptdp-mentor-role">
                Employee Relations/Admin Manager
              </p>
              <p className="emptdp-mentor-bio-text">
                With over 11 years of professional experience, Violet has
                developed strong expertise across employee relations, document
                control, records management, administration, and organizational
                support within engineering environments. Through ETMPDP Ignite,
                she provides guidance in workplace professionalism,
                administrative practices, employee relations, and organizational
                effectiveness to help participants become responsible and
                workplace-ready professionals.
              </p>
            </div>

            <div className="emptdp-mentor-photo-col">
              <Link to="/violet-oku">
                <img
                  src="https://res.cloudinary.com/dahnwukbz/image/upload/v1784908688/Image-Resize-2_1_vlwrnr_zafov0.png"
                  alt="Violet Laura O."
                  className="emptdp-mentor-photo"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="emptdp-mentor-section">
        <div className="container">
          <div className="emptdp-mentor-grid emptdp-mentor-grid--reverse">
            <div className="emptdp-mentor-bio">
              <p className="emptdp-mentor-label">Mentor, ETMPDP Ignite</p>
              <h3 className="emptdp-mentor-name">Enoch J. Enebeli</h3>
              <p className="emptdp-mentor-role">
                Lead Full Stack Software Developer
              </p>
              <p className="emptdp-mentor-bio-text">
                With strong experience in software engineering and modern web
                development, Enoch has developed expertise across full stack
                development, software architecture, quality assurance, website
                testing, and programming instruction. Through ETMPDP Ignite, he
                provides technical mentorship and practical guidance in software
                development, emerging technologies, and building scalable,
                user-focused solutions to help participants become technically
                competent professionals.
              </p>
            </div>

            <div className="emptdp-mentor-photo-col">
              <Link to="/enoch-enebeli">
                <img
                  src="https://res.cloudinary.com/dahnwukbz/image/upload/v1788189916/Enoch_J._Enebeli_last_chance_2_jispeq.png"
                  alt="Enoch J. Enebeli"
                  className="emptdp-mentor-photo"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. Weekly Professional Development ──────────────────────────────── */}
      <section className="emptdp-who-section">
        <div className="container">
          <div className="emptdp-section-header">
            <h2 className="emptdp-section-title">
              Weekly Professional Development
            </h2>
            <p className="emptdp-section-subtitle">
              Ignite goes beyond technical specialization. Participants
              develop:
            </p>
          </div>
          <div className="ignite-check-grid ignite-pd-grid">
            {professionalDevItems.map((item, i) => (
              <div
                className="ignite-check-item ignite-check-item--dark"
                key={i}
              >
                <i className="bi bi-check-circle-fill"></i>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. Executive Mentorship ──────────────────────────────────────────── */}
      <section className="emptdp-diff-section">
        <div className="container">
          <div className="emptdp-section-header emptdp-section-header--light">
            <h2 className="emptdp-section-title emptdp-section-title--white">
              Executive Mentorship
            </h2>
            <p
              className="emptdp-section-subtitle"
              style={{ color: "rgba(255,255,255,0.75)" }}
            >
              Don&apos;t Just Learn. Learn With Direction.
            </p>
          </div>
          <p className="ignite-360-lead">
            Weekly Executive Mentorship sessions provide participants with
            structured guidance on professional growth, workplace
            expectations, career development and the realities of working in
            technology.
          </p>
          <p className="ignite-questions-closer">
            The objective is to help students begin developing the mindset of
            a technology professional, not simply a student completing an
            attachment.
          </p>
        </div>
      </section>

      {/* ── 10. AI-Integrated Learning ───────────────────────────────────────── */}
      <section className="emptdp-who-section">
        <div className="container">
          <div className="emptdp-section-header">
            <h2 className="emptdp-section-title">AI-Integrated Learning</h2>
            <p className="emptdp-section-subtitle">
              AI is already changing the way technology professionals work.
              Ignite introduces participants to responsible AI use across
              their learning experience, including:
            </p>
          </div>
          <div className="ignite-check-grid ignite-pd-grid">
            {aiUseAreas.map((item, i) => (
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
            Participants are expected to maintain critical thinking,
            originality, accuracy and professional integrity when using AI.
          </p>
        </div>
      </section>

      {/* ── 11. Real Industry Exposure ───────────────────────────────────────── */}
      <section className="emptdp-diff-section">
        <div className="container">
          <div className="emptdp-section-header emptdp-section-header--light">
            <h2 className="emptdp-section-title emptdp-section-title--white">
              Real Industry Exposure
            </h2>
          </div>
          <p className="ignite-360-lead">
            Where appropriate, participants may receive supervised exposure to
            selected live or real-world projects. Such exposure depends on:
          </p>
          <ul className="ignite-360-elig-list" style={{ marginTop: "20px" }}>
            {realExposureConditions.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <p className="ignite-questions-closer" style={{ marginTop: "24px" }}>
            The goal is to help participants understand how technical
            knowledge is applied in an actual professional environment.
          </p>
        </div>
      </section>

      {/* ── 12. SIWES & Industrial Training Support ──────────────────────────── */}
      <section className="emptdp-why-section">
        <div className="container">
          <div className="emptdp-section-header">
            <h2 className="emptdp-section-title">
              SIWES &amp; Industrial Training Support
            </h2>
            <p className="emptdp-section-subtitle">
              Your Institution Requires Documentation. We Understand.
            </p>
          </div>
          <p className="ignite-siwes-lead">
            Where applicable, Elonatech Nigeria Limited may serve as the
            official host organization for participants undertaking SIWES,
            Industrial Training, Internship or approved Work-Integrated
            Learning. Support may include:
          </p>
          <div className="ignite-check-grid">
            {siwesSupportItems.map((item, i) => (
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
            Participants are responsible for submitting institutional
            documents promptly and in the required format.
          </p>
        </div>
      </section>

      {/* ── 13. Your Ignite Outcomes ─────────────────────────────────────────── */}
      <section className="emptdp-diff-section">
        <div className="container">
          <div className="emptdp-section-header emptdp-section-header--light">
            <h2 className="emptdp-section-title emptdp-section-title--white">
              Your Ignite Outcomes
            </h2>
            <p
              className="emptdp-section-subtitle"
              style={{ color: "rgba(255,255,255,0.75)" }}
            >
              By the end of the experience, participants should have developed
              more than technical knowledge.
            </p>
          </div>
          <div className="emptdp-diff-grid ignite-how-grid">
            {outcomeCards.map((c, i) => (
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

      {/* ── 14. What You Receive ─────────────────────────────────────────────── */}
      <section className="emptdp-who-section">
        <div className="container">
          <div className="emptdp-section-header">
            <h2 className="emptdp-section-title">What You Receive</h2>
            <p className="emptdp-section-subtitle">
              Successful participants may receive:
            </p>
          </div>
          <div className="ignite-check-grid">
            {whatYouReceiveItems.map((item, i) => (
              <div
                className="ignite-check-item ignite-check-item--dark"
                key={i}
              >
                <i className="bi bi-check-circle-fill"></i>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 15. Who Should Apply? ────────────────────────────────────────────── */}
      <section className="emptdp-who-section ignite-tint">
        <div className="container">
          <div className="emptdp-section-header">
            <h2 className="emptdp-section-title">Who Should Apply?</h2>
          </div>
          <p className="ignite-siwes-lead">
            ETMPDP Ignite is designed primarily for undergraduate technology
            students &mdash; whether you&apos;re preparing for SIWES,
            Industrial Training, a structured internship, or simply seeking
            practical technology exposure and professional development before
            graduation.
          </p>
          <p
            className="ignite-questions-closer ignite-questions-closer--dark"
            style={{ marginTop: "8px" }}
          >
            You don&apos;t have to know everything. You need the willingness
            to learn, practice, contribute and grow.
          </p>
        </div>
      </section>

      {/* ── 16. Delivery Options ─────────────────────────────────────────────── */}
      <section className="emptdp-why-section">
        <div className="container">
          <div className="emptdp-section-header">
            <h2 className="emptdp-section-title">Delivery Options</h2>
            <p className="emptdp-section-subtitle">
              Your Learning. Your Format.
            </p>
          </div>
          <div className="emptdp-diff-grid ignite-why-grid ignite-delivery-grid">
            {deliveryOptions.map((c, i) => (
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

      {/* ── 17. Residential Experience ───────────────────────────────────────── */}
      <section className="emptdp-diff-section">
        <div className="container">
          <div className="emptdp-section-header emptdp-section-header--light">
            <h2 className="emptdp-section-title emptdp-section-title--white">
              Residential Experience
            </h2>
            <p
              className="emptdp-section-subtitle"
              style={{ color: "rgba(255,255,255,0.75)" }}
            >
              Need Accommodation?
            </p>
          </div>
          <p className="ignite-360-lead">
            An optional ETMPDP Residential Experience may be available for
            participants who require accommodation while participating
            onsite. Residential accommodation is optional, separate from
            tuition and subject to availability.
          </p>
          <div className="ignite-spec-cta">
            <Link to="/get-in-touch">
              <button className="emptdp-btn emptdp-btn--outline ignite-residential-cta">
                Enquire About Residential Experience
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── 18. Why Choose ETMPDP Ignite? ────────────────────────────────────── */}
      <section className="emptdp-who-section ignite-tint">
        <div className="container">
          <div className="emptdp-section-header">
            <h2 className="emptdp-section-title">
              Why Choose ETMPDP Ignite?
            </h2>
          </div>
          <div className="ignite-check-grid">
            {whyChooseItems.map((item, i) => (
              <div
                className="ignite-check-item ignite-check-item--dark"
                key={i}
              >
                <i className="bi bi-check-circle-fill"></i>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 19. FAQ ──────────────────────────────────────────────────────────── */}
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
              Enter The Industry?
            </span>
          </h2>
          <p className="ignite-cta-tagline">
            Enter the Industry. Build Your Edge.
          </p>
          <p className="emptdp-cta-sub">
            Don&apos;t wait until graduation to start developing the
            professional skills the industry expects. Start building your
            technical capability, professional confidence, workplace
            readiness and career direction today.
          </p>
          <div className="emptdp-cta-buttons">
            <button
              className="emptdp-btn emptdp-btn--primary"
              onClick={() => startTransition(() => setShowModal(true))}
            >
              Apply for ETMPDP Ignite
            </button>
            <a href={brochurePDF} target="_blank" rel="noopener noreferrer">
              <button className="emptdp-btn emptdp-btn--outline-dark">
                Download Ignite Brochure
              </button>
            </a>
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
