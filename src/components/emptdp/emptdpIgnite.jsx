import React, { useState, startTransition } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";
import "./emptdp.css";
import "./emptdpIgnite.css";
import IgniteApplicationModal from "./igniteApplicationModal";
import brochurePDF from "./data/ETMPDP Ignite (2).pdf";
import MDImage from "../main/captions/Ceo1.png";
import CardDeck from "./CardDeck";

/* ── Static data ────────────────────────────────────────────────────────── */

/* Section 3 — "From Classroom Knowledge to Industry Capability" is now a
   short run of rhetorical questions instead of a progression chain + card
   grid (younger, more direct tone). */
const classroomQuestions = [
  "Can you apply what you know?",
  "Can you communicate professionally?",
  "Can you learn new tools?",
  "Can you work with others?",
  "Can you solve problems?",
  "Can you take responsibility?",
];

/* Eight specialization tracks. `tab` is the short label for the tab row;
   `title` is the full name shown in the panel. Core Areas are per the
   ETMPDP Ignite spec.
   NOTE: the Virtual Assistance image still reuses a repo photo as a
   placeholder — swap for a dedicated shot. Every other track has a
   topic-specific image (kept in sync with the Core page's coreTracks). */
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
      "https://images.pexels.com/photos/7876494/pexels-photo-7876494.jpeg?auto=compress&cs=tinysrgb&w=1400",
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
      "https://images.pexels.com/photos/1181341/pexels-photo-1181341.jpeg?auto=compress&cs=tinysrgb&w=1400",
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
    desc: "Structured instructor-led learning.",
  },
  {
    icon: "bi-tools",
    title: "Practice",
    desc: "Guided practical exercises and technical tasks.",
  },
  {
    icon: "bi-clipboard-check",
    title: "Review",
    desc: "Technical reviews, feedback and performance coaching.",
  },
  {
    icon: "bi-people",
    title: "Collaborate",
    desc: "Team-based learning and professional collaboration.",
  },
  {
    icon: "bi-lightning-charge-fill",
    title: "Apply",
    desc: "Practical projects and supervised industry exposure where appropriate.",
  },
  {
    icon: "bi-arrow-repeat",
    title: "Reflect",
    desc: "Continuous evaluation, improvement and professional development.",
  },
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
  "Leadership Development",
  "Career Development",
  "Emotional Intelligence",
  "Workplace Leadership & Executive Presence",
  "Responsible AI in the Workplace",
];

/* Section 13 — Your Ignite Outcomes */
const outcomeCards = [
  {
    icon: "bi-cpu",
    title: "Technical Capability",
    desc: "Build practical skills within your primary specialization.",
  },
  {
    icon: "bi-chat-square-text",
    title: "Professional Confidence",
    desc: "Develop stronger communication, discipline and workplace readiness.",
  },
  {
    icon: "bi-building",
    title: "Industry Awareness",
    desc: "Understand how technology work happens in real organizations.",
  },
  {
    icon: "bi-award",
    title: "Leadership Development",
    desc: "Develop responsibility, collaboration and leadership capability.",
  },
  {
    icon: "bi-signpost-split",
    title: "Career Direction",
    desc: "Gain clearer perspective on your professional interests and next steps.",
  },
  {
    icon: "bi-folder2-open",
    title: "Professional Portfolio",
    desc: "Build evidence of practical learning and professional development.",
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
  "Eligible SIWES / Industrial Training / Internship documentation support",
  "Employment Consideration, where applicable",
];

/* Section 16 — Who Should Apply? */
const whoShouldApplyItems = [
  {
    icon: "bi-mortarboard",
    title: "Undergraduate Technology Students",
    desc: "Students seeking structured practical and professional development.",
  },
  {
    icon: "bi-file-earmark-text",
    title: "SIWES Students",
    desc: "Students completing institutionally required industrial experience.",
  },
  {
    icon: "bi-building",
    title: "Industrial Training Participants",
    desc: "Students seeking a more structured technology-industry environment.",
  },
  {
    icon: "bi-briefcase",
    title: "Internship Seekers",
    desc: "Students seeking practical exposure and workplace development.",
  },
  {
    icon: "bi-graph-up-arrow",
    title: "Career-Focused Undergraduates",
    desc: "Students who want to begin building their professional edge before graduation.",
  },
];

/* Section 16 — Delivery Options */
const deliveryOptions = [
  {
    icon: "bi-building",
    title: "Onsite",
    desc: "Structured in-person learning, practical engagement and direct interaction.",
  },
  {
    icon: "bi-laptop",
    title: "Remote",
    desc: "Structured virtual learning, collaboration, mentorship and practical assignments.",
    featured: true,
  },
  {
    icon: "bi-arrow-left-right",
    title: "Hybrid",
    desc: "A combination of remote learning and scheduled onsite engagement where appropriate.",
  },
];

/* Section 18 — "Why Choose ETMPDP Ignite?" (near the end, before FAQ) */
const whyChooseItems = [
  "Structured Executive Mentorship",
  "Primary Technology Specialization",
  "Weekly Leadership Development",
  "Practical Hands-on Technical Learning",
  "AI-Integrated Learning",
  "Small Cohort Learning",
  "Ignite 360° Experience — Six-Month Track",
  "Supervised Real-World Project Exposure",
  "Continuous Performance Evaluation",
  "Career Development Guidance",
  "Professional Workplace Experience",
  "SIWES & Institutional Documentation Support",
];

const pricingTiers = [
  {
    name: "Ignite Foundation",
    duration: "3 Months",
    desc: "A focused professional-development experience built around your primary specialization.",
    amount: "₦120,000",
    plan: ["₦80,000 on Admission", "₦40,000 within 30 Days"],
    cta: "Apply for Ignite Foundation",
  },
  {
    name: "Ignite Professional",
    duration: "4 Months",
    desc: "Extended specialization development with deeper practical and professional exposure.",
    amount: "₦160,000",
    plan: ["₦120,000 on Admission", "₦40,000 before the End of Month One"],
    cta: "Apply for Ignite Professional",
    featured: true,
  },
  {
    name: "Ignite Executive",
    duration: "6 Months",
    desc: "The most comprehensive Ignite experience, with eligibility for Ignite 360° subject to applicable requirements.",
    amount: "₦240,000",
    plan: ["₦160,000 on Admission", "₦80,000 before the End of Month One"],
    cta: "Apply for Ignite Executive",
  },
];

/* FAQ — the 12 questions from the final content spec, in that order. */
const faqs = [
  {
    q: "Who can apply for ETMPDP Ignite?",
    a: "Undergraduate technology students — including those preparing for or undertaking SIWES, Industrial Training or an internship, and any student who wants to develop professionally before graduation. No prior technical experience is required.",
  },
  {
    q: "Is Ignite only for SIWES or Industrial Training?",
    a: "No. Ignite supports SIWES and Industrial Training, but students may also join for an internship, practical technology exposure or career development.",
  },
  {
    q: "Do I choose a specialization?",
    a: "Yes. Every participant selects one primary specialization for the duration of the experience.",
  },
  {
    q: "What is Ignite 360°?",
    a: "A structured cross-disciplinary experience that lets eligible participants observe, collaborate with or take selected learning activities across complementary specializations, beyond their primary one.",
  },
  {
    q: "Who qualifies for Ignite 360°?",
    a: "Participants on the Six-Month Ignite Executive Track, based on performance, mentor recommendation, operational requirements and Program scheduling.",
  },
  {
    q: "What are the 3-, 4- and 6-month options?",
    a: "Ignite Foundation (3 months, ₦120,000), Ignite Professional (4 months, ₦160,000) and Ignite Executive (6 months, ₦240,000). Executive is the most comprehensive and includes eligibility for Ignite 360°.",
  },
  {
    q: "Can I participate remotely?",
    a: "Yes. Ignite is available Onsite, Remote or Hybrid. Some specializations have practical requirements that influence the delivery mode, confirmed during selection.",
  },
  {
    q: "Is residential accommodation compulsory?",
    a: "No. The Residential Experience is optional, for participants attending onsite, and is priced separately from the Ignite fee.",
  },
  {
    q: "Do I need my own laptop?",
    a: "Yes. Participants are expected to provide and maintain a laptop that meets the requirements of their selected specialization.",
  },
  {
    q: "Does Ignite guarantee employment?",
    a: "No. Participation is not employment and completion does not guarantee employment. Strong participants may be considered for opportunities at Elonatech where suitable roles exist.",
  },
  {
    q: "What documentation can Elonatech provide for SIWES/IT?",
    a: "Where applicable, Elonatech can serve as the official host organization and complete or endorse the institutional documentation required for SIWES, Industrial Training or an internship.",
  },
  {
    q: "Are payments refundable?",
    a: "No. All payments made under the Program are strictly non-refundable.",
  },
];

/* ── Component ──────────────────────────────────────────────────────────── */

const EmptdpIgnite = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [activeSpec, setActiveSpec] = useState(0);

  const toggleFaq = (i) => setOpenFaq(openFaq === i ? null : i);


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

      <div className="etmpdp-ignite">
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
                office.
              </p>
              <p>
                ETMPDP Ignite gives undergraduate students a structured
                environment where they can learn, practice, collaborate, receive
                mentorship, develop professionally and experience how technology
                work is actually done.
              </p>
              <p>
                Whether you're completing SIWES, Industrial Training, an
                internship or investing in your professional development, Ignite
                is designed to help you enter the technology industry with
                greater confidence and capability.
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
            But the technology industry demands more.
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
              Develop practical and professional capability around a technology
              direction aligned with your interests, academic background and
              career goals.
            </p>
          </div>

          <p className="ignite-spec-keynote">
            <strong>Key distinction:</strong> Every participant is admitted into
            a primary specialization while benefiting from multidisciplinary
            learning opportunities designed to broaden professional competence
            and industry awareness.
          </p>

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
              Broaden your industry perspective beyond your primary
              specialization.
            </p>
          </div>

          <p className="ignite-360-lead">
            Participants in the Six-Month Ignite Executive Track may qualify for
            the Ignite 360&deg; Experience, providing structured
            cross-disciplinary exposure to complementary technology areas.
          </p>

          <p className="ignite-360-lead" style={{ marginTop: "16px" }}>
            Eligible participants may have opportunities to observe, collaborate
            with or undertake selected learning activities across complementary
            specializations based on performance, mentor recommendation,
            operational requirements and Program scheduling.
          </p>

          <p className="ignite-360-highlight">
            <strong>
              Your primary specialization remains your core development
              direction.
            </strong>{" "}
            Ignite 360&deg; adds broader industry exposure.
          </p>
        </div>
      </section>

      {/* ── 6. Ignite Experience Options ──────────────────────────────────── */}
      <section className="emptdp-invest-section">
        <div className="container">
          <div className="emptdp-section-header">
            <h2 className="emptdp-section-title">
              Choose Your Ignite Experience
            </h2>
            <p className="emptdp-section-subtitle">
              Select the duration that fits your academic schedule and
              professional-development goals.
            </p>
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
            All payments made under the Program are strictly non-refundable.
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
              Learn. Practice. Review. Collaborate. Apply. Reflect.
            </p>
          </div>
          <CardDeck className="emptdp-diff-grid ignite-how-grid">
            {learningExperience.map((c, i) => (
              <div className="emptdp-diff-card" key={i}>
                <div className="emptdp-diff-icon">
                  <i className={`bi ${c.icon}`}></i>
                </div>
                <h6 className="emptdp-diff-title">{c.title}</h6>
                <p className="emptdp-diff-desc">{c.desc}</p>
              </div>
            ))}
          </CardDeck>
        </div>
      </section>

      {/* ── 7. Meet Your Lead Mentor ─────────────────────────────────────────── */}
      <section className="emptdp-mentor-section">
        <div className="container">
          <div className="emptdp-section-header emptdp-section-header--light">
            <h2 className="emptdp-section-title emptdp-section-title--white">
              Meet our mentors
            </h2>
            <p
              className="emptdp-section-subtitle"
              style={{ color: "rgba(255,255,255,0.75)" }}
            >
              Learn from experienced professionals. Develop with guidance.
            </p>
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
              <Link to="/oreva-p-oku" className="emptdp-mentor-link">
                View Mentor Profile <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7b. Other Mentors — middle block on a light band so the run of
             three navy mentor sections gets a visual break. ───────────────── */}
      <section className="emptdp-mentor-section emptdp-mentor-section--light">
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
              <Link to="/violet-oku" className="emptdp-mentor-link">
                View Mentor Profile <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>

            <div className="emptdp-mentor-photo-col">
              <Link to="/violet-oku">
                <img
                  src="https://res.cloudinary.com/dahnwukbz/image/upload/v1784908688/Image-Resize-2_1_vlwrnr_zafov0.png"
                  alt="Violet Laura O."
                  className="emptdp-mentor-photo ignite-mentor-photo--zoomout"
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
              <Link to="/enoch-enebeli" className="emptdp-mentor-link">
                View Mentor Profile <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>

            <div className="emptdp-mentor-photo-col">
              <Link to="/enoch-enebeli">
                <img
                  src="https://res.cloudinary.com/dahnwukbz/image/upload/v1788189916/Enoch_J._Enebeli_last_chance_2_jispeq.png"
                  alt="Enoch J. Enebeli"
                  className="emptdp-mentor-photo ignite-mentor-photo--zoomout"
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
              Build the professional capabilities that help technical skills
              create real value.
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
              Professional perspective beyond the classroom.
            </p>
          </div>
          <p className="ignite-360-lead">
            Weekly executive mentorship sessions help participants develop
            professional perspective, confidence, leadership awareness and a
            stronger understanding of workplace expectations.
          </p>
          <p className="ignite-360-lead" style={{ marginTop: "16px" }}>
            Mentorship complements technical development by connecting learning
            with professional growth and career direction.
          </p>
        </div>
      </section>

      {/* ── 10. AI-Integrated Learning ───────────────────────────────────────── */}
      <section className="emptdp-who-section">
        <div className="container">
          <div className="emptdp-section-header">
            <h2 className="emptdp-section-title">AI-Integrated Learning</h2>
            <p className="emptdp-section-subtitle">
              Learn to use AI as a responsible professional tool.
            </p>
          </div>
          <p className="ignite-siwes-lead">
            AI is integrated across Ignite learning and professional workflows
            to support research, problem-solving, communication, software
            development, creative production, marketing, data analysis and
            productivity.
          </p>
          <p className="ignite-check-note">
            Participants are expected to verify, refine and take responsibility
            for AI-assisted work.
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
            <p
              className="emptdp-section-subtitle"
              style={{ color: "rgba(255,255,255,0.75)" }}
            >
              Where appropriate, learning can extend beyond the classroom into
              real-world technology work.
            </p>
          </div>
          <p className="ignite-360-lead">
            Participants may receive supervised exposure to selected real-world
            projects based on demonstrated competence, project availability,
            confidentiality requirements and Management approval.
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
              Professional development that can support your institutionally
              required industry experience.
            </p>
          </div>
          <p className="ignite-siwes-lead">
            Where applicable, Elonatech may serve as the official host
            organization for SIWES, Industrial Training, Internship or other
            approved work-integrated learning requirements and complete the
            relevant institutional documentation in accordance with your
            institution&apos;s requirements.
          </p>
          <p className="ignite-siwes-tags">
            SIWES &bull; Industrial Training &bull; Internship &bull;
            Institutional Documentation
          </p>
          <p className="ignite-check-note">
            Participants are responsible for submitting required institutional
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
              Develop practical capability, professional confidence and
              industry awareness.
            </p>
          </div>
          <CardDeck className="emptdp-diff-grid ignite-how-grid" onDark>
            {outcomeCards.map((c, i) => (
              <div className="emptdp-diff-card" key={i}>
                <div className="emptdp-diff-icon">
                  <i className={`bi ${c.icon}`}></i>
                </div>
                <h6 className="emptdp-diff-title">{c.title}</h6>
                <p className="emptdp-diff-desc">{c.desc}</p>
              </div>
            ))}
          </CardDeck>
        </div>
      </section>

      {/* ── 14. What You Receive ─────────────────────────────────────────────── */}
      <section className="emptdp-who-section">
        <div className="container">
          <div className="emptdp-section-header">
            <h2 className="emptdp-section-title">What You Receive</h2>
            <p className="emptdp-section-subtitle">
              Tangible outcomes from your professional-development experience.
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
            <p className="emptdp-section-subtitle">
              Ignite is designed for undergraduate students who want more from
              their industry experience.
            </p>
          </div>
          <CardDeck className="emptdp-diff-grid ignite-why-grid">
            {whoShouldApplyItems.map((c, i) => (
              <div className="emptdp-diff-card" key={i}>
                <div className="emptdp-diff-icon">
                  <i className={`bi ${c.icon}`}></i>
                </div>
                <h6 className="emptdp-diff-title">{c.title}</h6>
                <p className="emptdp-diff-desc">{c.desc}</p>
              </div>
            ))}
          </CardDeck>
          <p
            className="ignite-questions-closer ignite-questions-closer--dark"
            style={{ marginTop: "24px" }}
          >
            You don&apos;t have to wait until graduation to start developing
            professionally.
          </p>
        </div>
      </section>

      {/* ── 16. Delivery Options ─────────────────────────────────────────────── */}
      <section className="emptdp-why-section">
        <div className="container">
          <div className="emptdp-section-header">
            <h2 className="emptdp-section-title">Delivery Options</h2>
            <p className="emptdp-section-subtitle">
              Choose the learning environment that fits your circumstances.
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
          <p className="ignite-check-note">
            Program requirements may vary by specialization and practical
            activity.
          </p>
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
              An optional accommodation arrangement for eligible onsite
              participants.
            </p>
          </div>
          <p className="ignite-360-lead">
            Participants who require accommodation may request the ETMPDP
            Residential Experience, subject to availability and applicable
            accommodation terms.
          </p>
          <div className="ignite-spec-cta">
            <Link to="/get-in-touch">
              <button className="emptdp-btn emptdp-btn--outline ignite-residential-cta">
                Request Residential Experience{" "}
                <span aria-hidden="true">&rarr;</span>
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
            <p className="emptdp-section-subtitle">
              A structured alternative to conventional industrial training.
            </p>
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
          {/* Two-column grid — contiguous split. The first item is open by
             default, so the left column carries fewer items to keep the two
             columns roughly level in height. */}
          <div className="emptdp-faq-grid">
            {[
              [0, 5],
              [5, faqs.length],
            ].map(([start, end], colIndex) => (
              <div className="emptdp-faq-col" key={colIndex}>
                {faqs.slice(start, end).map((faq, i) => {
                  const realIndex = start + i;
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
            ))}
          </div>
        </div>
      </section>

      {/* ── Sibling programme — points across to ETMPDP Core ──────────────── */}
      <section className="emptdp-why-section ignite-sibling">
        <div className="container">
          <div className="ignite-sibling-inner">
            <h3 className="ignite-sibling-title">
              Ready for a deeper professional-development journey?
            </h3>
            <p className="ignite-sibling-text">
              Explore <strong>ETMPDP Core</strong> &mdash; the 12-month
              multidisciplinary pathway for broader technology, professional
              and leadership development.
            </p>
            <Link to="/emptdp-core">
              <button className="emptdp-btn emptdp-btn--outline-dark ignite-sibling-cta">
                Explore ETMPDP Core <span aria-hidden="true">&rarr;</span>
              </button>
            </Link>
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
            Start developing the technical capability, professional confidence
            and industry awareness that can give you an edge before
            graduation.
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
      </div>

      <IgniteApplicationModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
    </>
  );
};

export default EmptdpIgnite;
