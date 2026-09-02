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

const highlights = [
  "Practical Technical Skills",
  "Executive Mentorship",
  "Leadership Development",
  "AI-Integrated Learning",
  "Industry Exposure",
  "Small Cohorts (5–10 Participants)",
  "SIWES Documentation Support (Where Applicable)",
];

const whyIgnite = [
  {
    icon: "bi-wrench-adjustable",
    title: "Practical Technical Learning",
    desc: "Build practical skills through guided exercises and hands-on technical tasks.",
  },
  {
    icon: "bi-briefcase",
    title: "Professional Development",
    desc: "Develop workplace communication, discipline, accountability and professional etiquette.",
  },
  {
    icon: "bi-person-workspace",
    title: "Executive Mentorship",
    desc: "Learn from experienced professionals and gain exposure to real workplace thinking.",
  },
  {
    icon: "bi-award",
    title: "Leadership Development",
    desc: "Develop initiative, responsibility, confidence and leadership capacity.",
  },
  {
    icon: "bi-robot",
    title: "AI-Integrated Learning",
    desc: "Learn how AI can support your chosen specialization and professional productivity.",
  },
  {
    icon: "bi-building",
    title: "Industry Exposure",
    desc: "Gain supervised exposure to selected real-world technology projects.",
  },
];

const progression = [
  "Learning",
  "Practicing",
  "Applying",
  "Contributing",
  "Growing",
];

/* Seven specialization tracks. `tab` is the short label for the tab row;
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
];

const howIgniteWorks = [
  {
    icon: "bi-person-video3",
    title: "Instructor-Led Learning",
    desc: "Structured technical and professional instruction.",
  },
  {
    icon: "bi-tools",
    title: "Hands-On Practice",
    desc: "Guided exercises and practical technical tasks.",
  },
  {
    icon: "bi-person-workspace",
    title: "Executive Mentorship",
    desc: "Weekly executive mentorship sessions.",
  },
  {
    icon: "bi-award",
    title: "Leadership Development",
    desc: "Weekly leadership development sessions.",
  },
  {
    icon: "bi-clipboard-check",
    title: "Technical Review",
    desc: "Weekly technical review meetings.",
  },
  {
    icon: "bi-graph-up-arrow",
    title: "Performance Coaching",
    desc: "Continuous feedback, evaluation and professional coaching.",
  },
  {
    icon: "bi-building",
    title: "Industry Exposure",
    desc: "Supervised exposure to selected real-world projects.",
  },
];

const ignite360Eligibility = [
  "Performance",
  "Mentor recommendation",
  "Operational requirements",
  "Program scheduling",
];

const aiAcrossSpecs = [
  {
    title: "Software Engineering",
    desc: "AI-assisted development and debugging.",
  },
  {
    title: "Digital Marketing",
    desc: "AI-assisted research, content and campaign planning.",
  },
  { title: "Creative Media", desc: "AI-assisted creative workflows." },
  { title: "IT Support", desc: "AI-assisted troubleshooting." },
  {
    title: "Computer Engineering",
    desc: "AI-assisted engineering workflows.",
  },
  {
    title: "Virtual Assistance",
    desc: "AI-powered productivity and workflow support.",
  },
  {
    title: "Data Analytics",
    desc: "AI-assisted data analysis and insight generation.",
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
  "Responsible AI in the Workplace",
  "Workplace Leadership & Executive Presence",
];

const whyChooseItems = [
  "ETMPDP Ignite Certificate of Completion",
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
  {
    q: "Will I be issued a certificate?",
    a: "Yes. Participants who successfully complete the program will receive a certificate of participation.",
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
          <h5>
            The undergraduate Professional Development Experience of the
            Executive Technology Mentorship &amp; Professional Development
            Program (ETMPDP), designed to bridge the gap between academic
            learning and the technology industry.
          </h5>

          <p className="ignite-hero-tag">
            Practical learning. Executive mentorship. Leadership development.
            Professional experience. AI-integrated skills.
          </p>
          <p className="ignite-hero-tag ignite-hero-tag--italic">
            Ideal for SIWES &bull; Industrial Training &bull; Internship &bull;
            Career Development
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
                ETMPDP Ignite is designed for undergraduate technology students
                seeking practical industry experience, professional development
                and workplace readiness. Whether participating through SIWES,
                Industrial Training, internship or personal professional
                development, Ignite combines structured technical learning,
                practical experience, executive mentorship, leadership
                development, workplace professionalism and supervised exposure
                to real-world technology projects.
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

      {/* ── 3. Why Ignite? ────────────────────────────────────────────────── */}
      <section className="emptdp-diff-section">
        <div className="container">
          <div className="emptdp-section-header emptdp-section-header--light">
            <h2 className="emptdp-section-title emptdp-section-title--white">
              From Classroom Knowledge to Industry Capability
            </h2>
          </div>

          <div className="ignite-progression">
            {progression.map((step, i) => (
              <span className="ignite-progression-step" key={i}>
                {step}
              </span>
            ))}
          </div>

          <div className="emptdp-diff-grid ignite-why-grid">
            {whyIgnite.map((c, i) => (
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

      {/* ── 4. Choose Your Primary Specialization ─────────────────────────── */}
      <section className="emptdp-who-section">
        <div className="container">
          <div className="emptdp-section-header">
            <h2 className="emptdp-section-title">
              Choose Your Primary Specialization
            </h2>
            <p className="emptdp-section-subtitle">
              Every participant is admitted into a primary specialization while
              benefiting from multidisciplinary learning opportunities designed
              to broaden professional competence and industry awareness.
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
            Technology does not operate in isolated departments. Ignite
            360&deg; provides structured cross-disciplinary exposure designed
            to broaden your understanding of how different technology
            disciplines connect. While every participant has a primary
            specialization, eligible participants may observe, collaborate
            with, or undertake selected learning activities across
            complementary technology tracks.
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
          </div>
          <div className="emptdp-diff-grid ignite-how-grid">
            {howIgniteWorks.map((c, i) => (
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

      {/* ── 8. Professional Development ───────────────────────────────────── */}
      <section className="emptdp-who-section">
        <div className="container">
          <div className="emptdp-section-header">
            <h2 className="emptdp-section-title">
              Technical Skills Are Only Part of the Journey
            </h2>
            <p className="emptdp-section-subtitle">
              Ignite develops the professional behind the skill
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

      {/* ── 9. AI Across Every Specialization ─────────────────────────────── */}
      <section className="emptdp-diff-section">
        <div className="container">
          <div className="emptdp-section-header emptdp-section-header--light">
            <h2 className="emptdp-section-title emptdp-section-title--white">
              AI-Integrated Learning
            </h2>
            <p
              className="emptdp-section-subtitle"
              style={{ color: "rgba(255,255,255,0.75)" }}
            >
              AI is integrated across all Ignite specializations
            </p>
          </div>
          <div className="ignite-ai-grid">
            {aiAcrossSpecs.map((a, i) => (
              <div className="ignite-ai-card" key={i}>
                <p className="ignite-ai-card-title">{a.title}</p>
                <p className="ignite-ai-card-desc">{a.desc}</p>
              </div>
            ))}
          </div>
          <p
            className="ignite-check-note"
            style={{ color: "rgba(255,255,255,0.65)" }}
          >
            AI enhances your capability. It does not replace your judgement.
          </p>
        </div>
      </section>

      {/* ── 12. Why Students & Parents Choose ETMPDP Ignite ─────────────────── */}
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
            <a href={brochurePDF} target="_blank" rel="noopener noreferrer">
              <button className="emptdp-btn emptdp-btn--outline border-danger text-danger">
                Download Program Guide
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
