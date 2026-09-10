import React, { useState, startTransition } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./emptdp.css";
import "./emptdpCore.css";
import ApplicationModal from "./applicationModal.jsx";
import MDImage from "../main/captions/Ceo1.png";
import brocchurePDF from "./data/EMPTDP_brochure.pdf";
import { MoveRight } from "lucide-react";
import CardDeck from "./CardDeck";

/* ── Static data ────────────────────────────────────────────────────────── */

const coreTracks = [
  {
    tab: "Software Engineering",
    title: "Software Engineering",
    tagline: "Build Digital Solutions.",
    image:
      "https://res.cloudinary.com/dahnwukbz/image/upload/v1784039005/pexels-naboth-otieno-83498565-19805876_ziwrjo.jpg",
    areas: [
      "Programming Fundamentals",
      "Web Development",
      "Frontend & Backend Development",
      "Databases",
      "Software Development",
      "Testing & Debugging",
      "Version Control",
      "AI-Assisted Development",
    ],
  },
  {
    tab: "Graphics & Brand Design",
    title: "Graphics, Motion Graphics & Brand Design",
    tagline: "Create. Communicate. Build Brands.",
    image:
      "https://res.cloudinary.com/dahnwukbz/image/upload/v1784039003/pexels-darlene-alderson-7971537_lqlqy9.jpg",
    areas: [
      "Graphic Design",
      "Brand Identity",
      "Digital Content Design",
      "Motion Graphics",
      "Video Editing",
      "Visual Communication",
      "AI-Assisted Creative Workflows",
    ],
  },
  {
    tab: "Digital Marketing",
    title: "Digital Marketing & Content Strategy",
    tagline: "Reach. Engage. Grow.",
    image:
      "https://res.cloudinary.com/dahnwukbz/image/upload/v1784039003/pexels-rdne-8370329_j6gibu.jpg",
    areas: [
      "Social Media Marketing",
      "Content Strategy",
      "Email Marketing",
      "SEO",
      "Audience Engagement",
      "Campaign Planning",
      "Content Performance",
      "AI-Assisted Marketing Workflows",
    ],
  },
  {
    tab: "IT & Networking",
    title: "IT Support, Networking & Infrastructure",
    tagline: "Connect. Configure. Maintain. Secure.",
    image:
      "https://res.cloudinary.com/dahnwukbz/image/upload/v1784103672/Network_engineer_in_server_room_using_laptop_minimal___Premium_Photo_ayqzyn.jpg",
    areas: [
      "Hardware & Technical Support",
      "Networking",
      "LAN/WAN Infrastructure",
      "Configuration & Troubleshooting",
      "Structured Cabling",
      "Systems Administration",
      "Server Concepts",
      "Network Security",
    ],
  },
  {
    tab: "Computer Engineering",
    title: "Computer Engineering",
    tagline: "Build. Diagnose. Integrate.",
    image:
      "https://res.cloudinary.com/dahnwukbz/image/upload/v1784039620/pexels-mikhail-nilov-9242178_qz3i57.jpg",
    areas: [
      "Computer Systems",
      "Hardware Diagnostics",
      "Assembly & Maintenance",
      "Operating Systems",
      "Hardware/Software Integration",
      "Embedded Systems Concepts",
      "Technical Troubleshooting",
      "Practical Projects",
    ],
  },
  {
    tab: "Virtual Assistance",
    title: "Virtual Assistance & Digital Operations",
    tagline: "Organize. Execute. Optimize.",
    image:
      "https://res.cloudinary.com/dahnwukbz/image/upload/v1784905744/pexels-kampus-5940713_s9bdaz_bzeilg.jpg",
    areas: [
      "Administrative Support",
      "Digital Workplace Tools",
      "Calendar, Email & Task Management",
      "Research & Documentation",
      "Customer Support",
      "Information Management",
      "Workflow Coordination",
      "AI-Assisted Productivity",
    ],
  },
  {
    tab: "Data Analytics",
    title: "Data Analytics & Business Intelligence",
    tagline: "Turn Data Into Insight.",
    image:
      "https://images.pexels.com/photos/7876494/pexels-photo-7876494.jpeg?auto=compress&cs=tinysrgb&w=1400",
    areas: [
      "Data Fundamentals",
      "Data Preparation",
      "Spreadsheet Analysis",
      "Visualization",
      "Business Reporting",
      "Dashboards & Metrics",
      "BI Concepts",
      "AI-Assisted Data Analysis",
    ],
  },
  {
    tab: "Cybersecurity",
    title: "Cybersecurity & Information Security",
    tagline: "Protect. Detect. Respond.",
    image:
      "https://images.pexels.com/photos/1181341/pexels-photo-1181341.jpeg?auto=compress&cs=tinysrgb&w=1400",
    areas: [
      "Cybersecurity Foundations",
      "Information Security",
      "Network & Infrastructure Security",
      "Identity & Access Security",
      "Threats & Vulnerabilities",
      "Security Monitoring",
      "Incident Response Concepts",
      "Security Assessment",
    ],
  },
];

const whyCore = [
  {
    icon: "bi-wrench-adjustable",
    title: "Technical Development",
    desc: "Develop practical capability across multiple technology disciplines.",
  },
  {
    icon: "bi-patch-check",
    title: "Professional Excellence",
    desc: "Build communication, workplace effectiveness and professional confidence.",
  },
  {
    icon: "bi-award",
    title: "Leadership Development",
    desc: "Develop responsibility, initiative and leadership capability.",
  },
  {
    icon: "bi-graph-up-arrow",
    title: "Business Awareness",
    desc: "Understand technology within the context of organizations, customers and value creation.",
  },
  {
    icon: "bi-robot",
    title: "AI-Integrated Learning",
    desc: "Learn to use AI responsibly across modern professional workflows.",
  },
  {
    icon: "bi-person-workspace",
    title: "Executive Mentorship",
    desc: "Gain guidance, feedback and strategic professional perspective.",
  },
];

const phases = [
  {
    num: 1,
    title: "Professional Foundation",
    desc: "Workplace readiness, professional discipline, communication and technology foundations.",
  },
  {
    num: 2,
    title: "Technology Professional",
    desc: "Multidisciplinary technical development, practical assignments and applied learning.",
  },
  {
    num: 3,
    title: "Leadership",
    desc: "Leadership development, responsibility, collaboration and executive mindset.",
  },
  {
    num: 4,
    title: "Business",
    desc: "Business awareness, customer value, operations and the relationship between technology and business.",
  },
  {
    num: 5,
    title: "Executive Excellence",
    desc: "Professional direction, strategic thinking, executive presence, career development and value creation.",
  },
];

const coreProfDevItems = [
  "Business Communication",
  "Professional Etiquette & Workplace Conduct",
  "Time Management",
  "Critical Thinking",
  "Accountability & Ownership",
  "Problem Solving",
  "Team Collaboration",
  "Leadership Development",
  "Emotional Intelligence",
  "Career Development",
  "Responsible AI Use",
  "Executive Presence & Strategic Thinking",
];

const coreWhoApply = [
  {
    icon: "bi-stars",
    title: "Aspiring Technology Professionals",
    desc: "Individuals building a long-term career in technology.",
  },
  {
    icon: "bi-mortarboard",
    title: "Graduates & Emerging Professionals",
    desc: "Those seeking stronger practical and professional capability.",
  },
  {
    icon: "bi-arrow-repeat",
    title: "Career Changers",
    desc: "Individuals developing a new technology direction.",
  },
  {
    icon: "bi-compass",
    title: "Technology Enthusiasts",
    desc: "Those seeking structured multidisciplinary exposure and guided development.",
  },
  {
    icon: "bi-award",
    title: "Future Technology Leaders",
    desc: "Individuals seeking to combine technology capability with leadership and professional growth.",
  },
];

const admissionSteps = [
  {
    num: 1,
    title: "Application",
    desc: "Submit the required application and supporting documents.",
  },
  {
    num: 2,
    title: "Interview & Assessment",
    desc: "Personal interview, character assessment, aptitude evaluation and career/professional-development assessment.",
  },
  {
    num: 3,
    title: "Initial Assessment Period",
    desc: "Assessment of discipline, professional conduct, commitment, communication, learning capacity and work ethic.",
  },
  {
    num: 4,
    title: "Program Continuation",
    desc: "Successful participants continue into the full 12-month ETMPDP Core experience.",
  },
];

const deliveryOptions = [
  {
    icon: "bi-building",
    title: "Onsite",
    desc: "Structured in-person learning, practical engagement and direct workplace interaction.",
  },
  {
    icon: "bi-laptop",
    title: "Remote",
    desc: "A structured virtual learning environment with live sessions, digital collaboration, practical assignments, mentorship and progress tracking.",
    featured: true,
  },
  {
    icon: "bi-arrow-left-right",
    title: "Hybrid",
    desc: "A combination of remote learning and scheduled onsite engagement where appropriate.",
  },
];

const faqs = [
  {
    q: "What is ETMPDP Core?",
    a: "A 12-month multidisciplinary Executive Technology Mentorship & Professional Development experience that builds technical capability, professional excellence, leadership capacity, business awareness, AI readiness and career direction.",
  },
  {
    q: "Who is eligible for ETMPDP Core?",
    a: "Aspiring and emerging technology professionals, graduates, career changers, technology enthusiasts and future technology leaders who are ready to develop beyond short-term technical training. A selection process applies.",
  },
  {
    q: "Is ETMPDP Core a training course or employment program?",
    a: "Neither. It is a professional development and executive mentorship experience. Participation is not employment and does not create an employment relationship with Elonatech.",
  },
  {
    q: "Do I need prior technology experience?",
    a: "No. Extensive technical experience is not required. Core builds capability from the ground up, although applicants must show genuine commitment and the aptitude to keep pace.",
  },
  {
    q: "How does the multidisciplinary track structure work?",
    a: "Core is not eight separate courses. Participants gain exposure across all eight technology tracks and develop deeper competence in the directions that fit their interests, demonstrated ability, projects and professional goals.",
  },
  {
    q: "Can I participate remotely?",
    a: "Yes. Core can be completed Onsite, Remote or Hybrid, and the ₦375,000 investment is the same for all three. Selected activities take place in person where applicable.",
  },
  {
    q: "Is the Residential Experience compulsory?",
    a: "No. The Residential Experience is optional and separately priced. It is available for participants attending onsite who require accommodation.",
  },
  {
    q: "How does the ₦300,000 + ₦75,000 payment structure work?",
    a: "The total is ₦375,000. ₦300,000 (80%) is the Initial Enrollment, due on enrollment and before commencement. The ₦75,000 (20%) Continuation Balance is due after the initial assessment period.",
  },
  {
    q: "Are payments refundable?",
    a: "No. All payments made under the Program are strictly non-refundable.",
  },
  {
    q: "Does completing ETMPDP guarantee employment?",
    a: "No. Completion does not guarantee employment. Exceptional participants may be considered for employment opportunities at Elonatech where suitable roles exist.",
  },
];

/* ── Component ──────────────────────────────────────────────────────────── */

const EmptdpCore = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const toggleFaq = (i) => setOpenFaq(openFaq === i ? null : i);

  return (
    <>
      <Helmet>
        <title>
          ETMPDP CORE | Executive Technology Mentorship & Professional
          Development
        </title>
        <meta
          name="description"
          content="A 12-month professional development and executive mentorship experience designed to develop technically competent, professionally disciplined, business-aware and future-ready technology professionals"
        />
        <link rel="canonical" href="https://elonatech.com.ng/emptdp-core" />
      </Helmet>

      <div className="etmpdp-core">
        {/* ── 1. Hero ────────────────────────────────────────────── */}
        <div className="container-fluid emptdp-section core-hero-section">
          <div className="emptdp-hero-text">
            <span
              className="emptdp-mentor-badge"
              style={{ marginBottom: "16px" }}
            >
              ETMPDP Core
            </span>
            <h2>Build. Lead. Excel.</h2>
            <h5>
              The 12-Month Executive Technology Mentorship &amp; Professional
              Development Journey
            </h5>
            <p className="lead">
              A multidisciplinary professional development experience designed
              to develop practical technology capability, professional
              excellence, leadership capacity, business awareness, AI readiness
              and career direction.
            </p>
            <p className="core-hero-tag">
              Technology &bull; Leadership &bull; Business &bull; AI &bull;
              Career
            </p>
          </div>
          <div className="emptdp-cta-buttons">
            <button
              className="emptdp-btn emptdp-btn--primary"
              onClick={() => startTransition(() => setShowModal(true))}
            >
              Apply for ETMPDP Core
            </button>
            <a href={brocchurePDF} target="_blank" rel="noopener noreferrer">
              <button className="emptdp-btn emptdp-btn--outline">
                Download Core Brochure
              </button>
            </a>
          </div>
          <div className="learning-mode">
            <h6>Onsite | Remote | Hybrid</h6>
          </div>
        </div>

        {/* ── 2. More Than Learning Technology ──────────────────────────────── */}
        <section className="emptdp-why-section">
          <div className="container">
            <div className="emptdp-section-header">
              <h2 className="emptdp-section-title">
                More Than Learning Technology.
              </h2>
              <p className="emptdp-section-subtitle">
                A broader approach to becoming a technology professional.
              </p>
            </div>
            <div className="emptdp-why-content">
              <div className="emptdp-why-text">
                <p>
                  Learning technology is only one part of professional
                  development.
                </p>
                <p>
                  ETMPDP Core combines multidisciplinary technology exposure
                  with practical experience, executive mentorship, leadership
                  development, business awareness and professional excellence.
                </p>
                <p>
                  Rather than limiting participants to one narrow training
                  course, Core provides a broader development journey through
                  which participants can explore multiple technology directions
                  and develop deeper competence according to their interests,
                  demonstrated ability, projects and professional goals.
                </p>
              </div>
              <div className="emptdp-why-image">
                {/* Replace src with actual image when ready */}
                <img
                  src={
                    "https://res.cloudinary.com/dahnwukbz/image/upload/v1784905771/pexels-jep-gambardella-7689856_hltynt_gwrlaz.jpg"
                  }
                  alt="Mentorship session"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. Why ETMPDP Core? ──────────────────────────────────────────── */}
        <section className="emptdp-diff-section">
          <div className="container">
            <div className="emptdp-section-header emptdp-section-header--light">
              <h2 className="emptdp-section-title emptdp-section-title--white">
                Why ETMPDP Core?
              </h2>
              <p
                className="emptdp-section-subtitle"
                style={{ color: "rgba(255,255,255,0.75)" }}
              >
                A 12-month journey designed to develop complete technology
                professionals.
              </p>
            </div>
            <CardDeck className="emptdp-diff-grid core-why-grid" onDark>
              {whyCore.map((c, i) => (
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

        {/* ── 4. What Participants Will Learn ────────────────────────────────── */}
        <section className="emptdp-learn-section">
          <div className="container">
            <div className="emptdp-section-header">
              <h2 className="emptdp-section-title">
                Explore Eight Professional Technology Tracks
              </h2>
            </div>

            <p className="core-tracks-intro">
              Core provides multidisciplinary exposure across the technology
              ecosystem, with deeper competence developed through practical
              work, demonstrated ability, interests, projects and professional
              objectives.
            </p>

            <div className="emptdp-learn-tabs">
              {coreTracks.map((t, i) => (
                <button
                  key={i}
                  className={`emptdp-tab-btn${
                    activeTab === i ? " emptdp-tab-btn--active" : ""
                  }`}
                  onClick={() => setActiveTab(i)}
                >
                  {t.tab}
                </button>
              ))}
            </div>

            <div className="emptdp-learn-content">
              <div className="emptdp-learn-image-wrap">
                <img
                  src={coreTracks[activeTab].image}
                  alt={coreTracks[activeTab].title}
                  className="emptdp-learn-image"
                />
              </div>
              <div className="emptdp-learn-skills">
                <h4 className="emptdp-learn-skills-title">
                  <span className="core-track-num">
                    {String(activeTab + 1).padStart(2, "0")}
                  </span>
                  {coreTracks[activeTab].title}
                </h4>
                <p className="core-track-tagline">
                  {coreTracks[activeTab].tagline}
                </p>
                <ul className="emptdp-skills-list">
                  {coreTracks[activeTab].areas.map((s, i) => (
                    <li key={i} className="emptdp-skill-item">
                      <span className="emptdp-skill-dot"></span>
                      <span className="emptdp-skill-text">{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="core-tracks-cta">
              <a href={brocchurePDF} target="_blank" rel="noopener noreferrer">
                <button className="emptdp-btn emptdp-btn--primary">
                  Explore the ETMPDP Technology Ecosystem <MoveRight />
                </button>
              </a>
            </div>
          </div>
        </section>

        {/* ── 5. How The Core Experience Works ──────────────────────────────── */}
        <section className="emptdp-diff-section">
          <div className="container">
            <div className="emptdp-section-header emptdp-section-header--light">
              <h2 className="emptdp-section-title emptdp-section-title--white">
                How The Core Experience Works
              </h2>
              <p
                className="emptdp-section-subtitle"
                style={{ color: "rgba(255,255,255,0.75)" }}
              >
                A structured learning model built around progressive
                professional development.
              </p>
            </div>

            <p className="core-cycle-label">Learning Model</p>
            <div className="core-cycle">
              {[
                "Observe",
                "Understand",
                "Practice",
                "Review",
                "Own",
                "Improve",
              ].map((s, i) => (
                <span className="core-cycle-step" key={i}>
                  {s}
                </span>
              ))}
            </div>

            <p className="core-cycle-lead">
              Participants learn through guided instruction, practical
              assignments, collaboration, mentorship, independent development,
              project exposure and continuous feedback.
            </p>
          </div>
        </section>

        {/* ── 6. A 12-Month Journey of Professional Development ──────────────── */}
        <section className="emptdp-structure-section">
          <div className="container">
            <div className="emptdp-section-header">
              <h2 className="emptdp-section-title">
                A 12-Month Journey of Professional Development
              </h2>
              <p className="emptdp-section-subtitle">
                Progressive development across technology, professional
                capability, leadership and business awareness.
              </p>
            </div>

            {/* Desktop timeline */}
            <div className="emptdp-timeline-desktop">
              {phases.map((s, i) => (
                <div className="emptdp-timeline-step" key={i}>
                  {i < phases.length - 1 && (
                    <div className="emptdp-timeline-connector"></div>
                  )}
                  <div className="emptdp-step-circle">{s.num}</div>
                  <p className="core-phase-label">PHASE 0{s.num}</p>
                  <h6 className="emptdp-step-title">{s.title}</h6>
                  <p className="emptdp-step-desc">{s.desc}</p>
                </div>
              ))}
            </div>

            {/* Mobile timeline */}
            <div className="emptdp-timeline-mobile">
              {phases.map((s, i) => (
                <div className="emptdp-timeline-step-mobile" key={i}>
                  <div className="emptdp-step-mobile-left">
                    <div className="emptdp-step-circle">{s.num}</div>
                    {i < phases.length - 1 && (
                      <div className="emptdp-timeline-connector-mobile"></div>
                    )}
                  </div>
                  <div>
                    <p className="core-phase-label">PHASE 0{s.num}</p>
                    <h6 className="emptdp-step-title">{s.title}</h6>
                    <p className="emptdp-step-desc">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 7. Executive Mentorship ──────────────────────────────────────── */}
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
                Learn from experience. Develop with perspective.
              </p>
            </div>
            <div className="core-textblock">
              <p>
                ETMPDP Core provides structured executive mentorship designed
                to broaden participants&apos; professional perspective,
                strengthen decision-making, develop leadership capacity and
                connect technical development with real workplace expectations.
              </p>
              <p>
                Mentorship complements technical learning through guidance,
                feedback, professional conversations and strategic insight.
              </p>
            </div>
          </div>
        </section>

        {/* ── 8. Professional Development ──────────────────────────────────── */}
        <section className="emptdp-who-section">
          <div className="container">
            <div className="core-split">
              <div className="core-split-image">
                <img
                  src="https://res.cloudinary.com/dahnwukbz/image/upload/v1788796203/pexels-photo-9301256_fmnzja.jpg"
                  alt="Colleagues collaborating and sharing professional feedback"
                />
              </div>
              <div className="core-split-body">
                <div className="emptdp-section-header core-split-header">
                  <h2 className="emptdp-section-title">
                    Professional Development
                  </h2>
                  <p className="emptdp-section-subtitle">
                    Technical skill is only part of professional capability.
                  </p>
                </div>
                <div className="core-split-list">
                  {coreProfDevItems.map((item, i) => (
                    <div className="core-check-item" key={i}>
                      <i className="bi bi-check-circle-fill"></i>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 9. AI Is Part Of How You Learn ───────────────────────────────── */}
        <section className="emptdp-why-section core-tint">
          <div className="container">
            <div className="core-split">
              <div className="core-split-body">
                <div className="emptdp-section-header core-split-header">
                  <h2 className="emptdp-section-title">
                    AI Is Part Of How You Learn
                  </h2>
                </div>
                <p className="core-split-intro">
                  AI is integrated into modern professional practice &mdash; not
                  treated as a separate technology topic.
                </p>
                <p className="core-split-intro">
                  Participants learn to use Artificial Intelligence responsibly
                  to support research, problem-solving, communication, software
                  development, creative production, marketing, data analysis,
                  productivity and workflow improvement.
                </p>
                <p className="core-split-note">
                  AI is used to enhance human capability while participants
                  remain responsible for the accuracy, originality, quality,
                  judgment and integrity of their work.
                </p>
              </div>
              <div className="core-split-image">
                <img
                  src="https://res.cloudinary.com/dahnwukbz/image/upload/v1788795238/pexels-photo-9301524_xzffwo.jpg"
                  alt="Participants working hands-on with technology"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── 10. Practical Experience ─────────────────────────────────────── */}
        <section className="emptdp-who-section">
          <div className="container">
            <div className="core-split">
              <div className="core-split-image">
                <img
                  src="https://res.cloudinary.com/dahnwukbz/image/upload/v1784905691/pexels-pnw-prod-8091335_nca7aw_owcdzq.jpg"
                  alt="Hands-on practical experience"
                />
              </div>
              <div className="core-split-body">
                <div className="emptdp-section-header core-split-header">
                  <h2 className="emptdp-section-title">Practical Experience</h2>
                  <p className="emptdp-section-subtitle">
                    Learn it. Apply it. Improve it.
                  </p>
                </div>
                <p className="core-split-intro">
                  ETMPDP Core connects learning with practical application
                  through assignments, technical exercises, collaborative work,
                  project activities and supervised exposure to relevant
                  real-world technology environments.
                </p>
                <p className="core-split-intro">
                  Participants are encouraged to apply what they develop,
                  receive feedback and progressively take greater ownership of
                  their work.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 11. Who Should Apply? ────────────────────────────────────────── */}
        <section className="emptdp-who-section">
          <div className="container">
            <div className="emptdp-section-header">
              <h2 className="emptdp-section-title">Who Should Apply?</h2>
              <p className="emptdp-section-subtitle">
                ETMPDP Core is designed for individuals ready to develop
                themselves beyond technical training.
              </p>
            </div>
            <CardDeck className="emptdp-diff-grid core-who-grid">
              {coreWhoApply.map((c, i) => (
                <div className="emptdp-diff-card" key={i}>
                  <div className="emptdp-diff-icon">
                    <i className={`bi ${c.icon}`}></i>
                  </div>
                  <h6 className="emptdp-diff-title">{c.title}</h6>
                  <p className="emptdp-diff-desc">{c.desc}</p>
                </div>
              ))}
            </CardDeck>
            <p className="core-who-closer">
              You do not have to know everything before you begin. You need the
              commitment to learn, practice, improve and grow.
            </p>
          </div>
        </section>

        {/* ── 12. Delivery Options ─────────────────────────────────────────── */}
        <section className="emptdp-why-section">
          <div className="container">
            <div className="emptdp-section-header">
              <h2 className="emptdp-section-title">Delivery Options</h2>
              <p className="emptdp-section-subtitle">
                Choose the learning environment that best fits your
                circumstances.
              </p>
            </div>
            <div className="emptdp-diff-grid core-delivery-grid">
              {deliveryOptions.map((c, i) => (
                <div
                  className={`emptdp-diff-card${
                    c.featured ? " core-delivery-card--featured" : ""
                  }`}
                  key={i}
                >
                  <div className="emptdp-diff-icon">
                    <i className={`bi ${c.icon}`}></i>
                  </div>
                  <h6 className="emptdp-diff-title">{c.title}</h6>
                  <p className="emptdp-diff-desc">{c.desc}</p>
                </div>
              ))}
            </div>
            <p
              className="core-delivery-note"
              style={{ marginTop: "16px", fontStyle: "italic" }}
            >
              Program investment is <strong>&#8358;375,000</strong>, the same
              across Onsite, Remote and Hybrid participation.
            </p>
          </div>
        </section>

        {/* ── 13. Residential Experience ───────────────────────────────────── */}
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
                An optional residential arrangement for eligible onsite
                participants.
              </p>
            </div>
            <div className="core-textblock">
              <p>
                Participants who require accommodation may request the ETMPDP
                Residential Experience, subject to availability and applicable
                accommodation terms.
              </p>
            </div>
            <div className="core-tracks-cta">
              <Link to="/residential-experience">
                <button className="emptdp-btn emptdp-btn--outline core-residential-cta">
                  Request Residential Experience <MoveRight />
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* ── 14. Program Investment ───────────────────────────────────────── */}
        <section className="emptdp-invest-section">
          <div className="container">
            <div className="core-invest-card">
              <h3 className="emptdp-invest-heading">Program Investment</h3>
              <div className="core-invest-cols">
                {/* left — the 80 / 20 breakdown */}
                <div className="core-invest-breakdown">
                  <div className="emptdp-price-cards">
                    <div className="emptdp-price-card emptdp-price-card--light">
                      <p className="emptdp-price-phase">Initial Enrollment</p>
                      <p className="emptdp-price-amount">₦300,000</p>
                      <p className="emptdp-price-note">
                        80% of total <br />
                        <span className="emptdp-price-note-subtext">
                          Due on enrollment, before commencement.
                        </span>
                      </p>
                    </div>
                    <div className="emptdp-price-divider"></div>
                    <div className="emptdp-price-card emptdp-price-card--dark">
                      <p className="emptdp-price-phase emptdp-price-phase--white">
                        Continuation Balance
                      </p>
                      <p className="emptdp-price-amount emptdp-price-amount--white">
                        ₦75,000
                      </p>
                      <p className="emptdp-price-note emptdp-price-note--white">
                        20% of total <br />
                        <span className="emptdp-price-note-subtext">
                          Due after the initial assessment period.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* right — total + terms + CTA */}
                <div className="core-invest-summary">
                  <p className="core-invest-eyebrow">Total Program Investment</p>
                  <p className="core-invest-figure">&#8358;375,000</p>
                  <p className="core-invest-note">
                    The ₦375,000 investment is the same for Onsite, Hybrid and
                    Remote participation. Residential accommodation is optional
                    and separately priced.
                  </p>
                  <p className="emptdp-refund-note">
                    All payments made under the Program are strictly
                    non-refundable.
                  </p>
                  <button
                    className="emptdp-btn emptdp-btn--primary core-invest-cta"
                    onClick={() => startTransition(() => setShowModal(true))}
                  >
                    Apply for ETMPDP Core
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 16. Admission Process ────────────────────────────────────────── */}
        <section className="emptdp-structure-section">
          <div className="container">
            <div className="emptdp-section-header">
              <h2 className="emptdp-section-title">Admission Process</h2>
            </div>

            <div className="emptdp-timeline-desktop">
              {admissionSteps.map((s, i) => (
                <div className="emptdp-timeline-step" key={i}>
                  {i < admissionSteps.length - 1 && (
                    <div className="emptdp-timeline-connector"></div>
                  )}
                  <div className="emptdp-step-circle">{s.num}</div>
                  <h6 className="emptdp-step-title">{s.title}</h6>
                  <p className="emptdp-step-desc">{s.desc}</p>
                </div>
              ))}
            </div>

            <div className="emptdp-timeline-mobile">
              {admissionSteps.map((s, i) => (
                <div className="emptdp-timeline-step-mobile" key={i}>
                  <div className="emptdp-step-mobile-left">
                    <div className="emptdp-step-circle">{s.num}</div>
                    {i < admissionSteps.length - 1 && (
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

        {/* ── 16. Executive Mentor ─────────────────────────────────────────── */}
        <section className="emptdp-mentor-section">
          <div className="container">
            <div className="emptdp-section-header emptdp-section-header--light">
              <h2 className="emptdp-section-title emptdp-section-title--white">
                Executive Mentor
              </h2>
              <p
                className="emptdp-section-subtitle"
                style={{ color: "rgba(255,255,255,0.75)" }}
              >
                Leadership. Experience. Perspective.
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
                <p className="emptdp-mentor-label">Executive Mentor</p>
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
                <Link to="/oreva-p-oku" className="emptdp-mentor-link">
                  View Executive Mentor Profile{" "}
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── 9. FAQ ─────────────────────────────────────────────────────────── */}
        <section className="emptdp-faq-section">
          <div className="container emptdp-faq-container">
            <div className="emptdp-section-header">
              <h2 className="emptdp-section-title">
                Frequently Asked Questions
              </h2>
            </div>

            {/* Two-column grid — contiguous split. The first item is open by
             default, so the left column carries fewer items to keep the two
             columns roughly level in height. */}
            <div className="emptdp-faq-grid">
              {[
                [0, 4],
                [4, faqs.length],
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

        {/* ── Sibling programme — points across to ETMPDP Ignite ────────────── */}
        <section className="emptdp-why-section core-sibling">
          <div className="container">
            <div className="core-sibling-inner">
              <h3 className="core-sibling-title">
                Looking for an undergraduate industry experience?
              </h3>
              <p className="core-sibling-text">
                Discover <strong>ETMPDP Ignite</strong> &mdash; a structured
                Professional Development Experience designed to bridge academic
                learning and industry practice.
              </p>


              <Link to="/emptdp-ignite">
                <button className="emptdp-btn emptdp-btn--outline-dark core-sibling-cta">
                  Explore ETMPDP Ignite <span aria-hidden="true">&rarr;</span>
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* ── 18. Final CTA ──────────────────────────────────────────────────── */}
        <section className="emptdp-cta-section">
          <div className="container emptdp-cta-inner">
            <h2 className="emptdp-cta-heading">
              Ready To Become A{" "}
              <span className="emptdp-cta-heading--dark">
                Technology Professional?
              </span>
            </h2>
            <p className="core-cta-tagline">Build. Lead. Excel.</p>
            <p className="emptdp-cta-sub">
              Develop technical capability. Build professional confidence. Grow
              into greater responsibility.
            </p>
            <div className="emptdp-cta-buttons">
              <button
                className="emptdp-btn emptdp-btn--primary"
                onClick={() => startTransition(() => setShowModal(true))}
              >
                Apply for ETMPDP Core
              </button>
              <a href={brocchurePDF} target="_blank" rel="noopener noreferrer">
                <button className="emptdp-btn emptdp-btn--outline-dark">
                  Download Core Brochure
                </button>
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Application Modal — opens when any "Apply Now" button is clicked */}
      <ApplicationModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
    </>
  );
};

export default EmptdpCore;
