import React, { useState, startTransition } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./emptdp.css";
import "./emptdpCore.css";
import ApplicationModal from "./applicationModal.jsx";
import MDImage from "../main/captions/Ceo1.png";
import brocchurePDF from "./data/EMPTDP_brochure.pdf";
import { MoveRight } from "lucide-react";

/* ── Static data ────────────────────────────────────────────────────────── */

/* Eight professional technology tracks. `tab` is the short label for the
   tab row; `title` is the full name shown in the panel.
   NOTE: the Virtual Assistance, Data Analytics and Cybersecurity images
   reuse existing repo photos as placeholders — swap for dedicated shots. */
const coreTracks = [
  {
    tab: "Software Engineering",
    title: "Software Engineering",
    desc: "Build practical foundations in software development, web technologies, databases, development workflows and AI-assisted programming.",
    image:
      "https://res.cloudinary.com/dahnwukbz/image/upload/v1784039005/pexels-naboth-otieno-83498565-19805876_ziwrjo.jpg",
  },
  {
    tab: "Graphics & Brand Design",
    title: "Graphics, Motion Graphics & Brand Design",
    desc: "Develop creative and visual communication skills across graphic design, branding, motion graphics, video and digital content.",
    image:
      "https://res.cloudinary.com/dahnwukbz/image/upload/v1784039003/pexels-darlene-alderson-7971537_lqlqy9.jpg",
  },
  {
    tab: "Digital Marketing",
    title: "Digital Marketing & Content Strategy",
    desc: "Understand digital marketing, content strategy, social media, SEO, campaigns, audience engagement and marketing analytics.",
    image:
      "https://res.cloudinary.com/dahnwukbz/image/upload/v1784039003/pexels-rdne-8370329_j6gibu.jpg",
  },
  {
    tab: "IT & Networking",
    title: "IT Support, Networking & Infrastructure",
    desc: "Develop practical understanding of computer systems, technical support, networking, infrastructure, systems administration and troubleshooting.",
    image:
      "https://res.cloudinary.com/dahnwukbz/image/upload/v1784103672/Network_engineer_in_server_room_using_laptop_minimal___Premium_Photo_ayqzyn.jpg",
  },
  {
    tab: "Computer Engineering",
    title: "Computer Engineering",
    desc: "Explore computer systems, hardware, diagnostics, maintenance, integration and practical engineering concepts.",
    image:
      "https://res.cloudinary.com/dahnwukbz/image/upload/v1784039620/pexels-mikhail-nilov-9242178_qz3i57.jpg",
  },
  {
    tab: "Virtual Assistance",
    title: "Virtual Assistance & Digital Operations",
    desc: "Develop capabilities in digital workplace support, administration, research, documentation, workflow coordination and productivity.",
    image:
      "https://res.cloudinary.com/dahnwukbz/image/upload/v1784905744/pexels-kampus-5940713_s9bdaz_bzeilg.jpg",
  },
  {
    tab: "Data Analytics",
    title: "Data Analytics & Business Intelligence",
    desc: "Learn the foundations of data preparation, analysis, visualization, reporting, dashboards and business intelligence.",
    image:
      "https://res.cloudinary.com/dahnwukbz/image/upload/v1784905632/pexels-mikhail-nilov-9301314_gkohy1_zbay4p.jpg",
  },
  {
    tab: "Cybersecurity",
    title: "Cybersecurity & Information Security",
    desc: "Build foundational understanding of cybersecurity, information security, network security, identity and access, vulnerabilities, monitoring and incident response.",
    image:
      "https://res.cloudinary.com/dahnwukbz/image/upload/v1784905669/pexels-brett-sayles-5326748_kjo74t_tdxhmg.jpg",
  },
];

const whyCore = [
  {
    icon: "bi-wrench-adjustable",
    title: "Technical Competence",
    desc: "Develop practical knowledge and hands-on capability across key areas of the technology ecosystem.",
  },
  {
    icon: "bi-patch-check",
    title: "Professional Excellence",
    desc: "Build communication, discipline, accountability, teamwork, critical thinking and workplace professionalism.",
  },
  {
    icon: "bi-award",
    title: "Leadership Development",
    desc: "Develop initiative, ownership, decision-making ability and the mindset required to grow into leadership.",
  },
  {
    icon: "bi-graph-up-arrow",
    title: "Business Awareness",
    desc: "Understand how technology connects with customers, business operations, service delivery, value creation and organizational growth.",
  },
  {
    icon: "bi-robot",
    title: "AI Readiness",
    desc: "Learn to use Artificial Intelligence responsibly as a productivity, research, creative, analytical and problem-solving tool.",
  },
  {
    icon: "bi-person-workspace",
    title: "Executive Mentorship",
    desc: "Gain structured guidance designed to help you develop professional maturity, career direction and strategic thinking.",
  },
];

const phases = [
  {
    num: 1,
    title: "Professional Foundation",
    desc: "Develop professional identity, discipline, communication, workplace awareness and the mindset required for continuous learning.",
  },
  {
    num: 2,
    title: "Technology Professional",
    desc: "Develop technical competence, practical skills, digital capability and problem-solving ability.",
  },
  {
    num: 3,
    title: "Leadership",
    desc: "Develop initiative, accountability, teamwork, communication, decision-making and leadership capacity.",
  },
  {
    num: 4,
    title: "Business",
    desc: "Understand customers, operations, value creation and the relationship between technology and business.",
  },
  {
    num: 5,
    title: "Executive Excellence",
    desc: "Develop professional maturity, executive presence, strategic thinking, career direction and continuous improvement.",
  },
];

const coreProfDevItems = [
  "Business Communication",
  "Professional Etiquette",
  "Time Management",
  "Critical Thinking",
  "Accountability",
  "Problem Solving",
  "Team Collaboration",
  "Leadership Development",
  "Emotional Intelligence",
  "Career Development",
  "Professional Networking",
  "Responsible AI Use",
];

const coreAiItems = [
  "Research",
  "Brainstorming",
  "Problem Solving",
  "Software Development",
  "Creative Work",
  "Marketing",
  "Data Analysis",
  "Documentation",
  "Productivity",
  "Workflow Support",
];

const corePracticalItems = [
  "Guided practical exercises",
  "Technical assignments",
  "Project-based learning",
  "Team collaboration",
  "Technical reviews",
  "Research and presentations",
  "Executive mentorship",
  "Leadership development",
  "Continuous performance feedback",
  "Supervised exposure to selected real-world projects",
];

const coreWhoApply = [
  {
    icon: "bi-stars",
    title: "Aspiring Technology Professionals",
    desc: "Individuals beginning or transitioning into a technology career.",
  },
  {
    icon: "bi-mortarboard",
    title: "Students & Recent Graduates",
    desc: "Individuals seeking structured professional development alongside or beyond academic education.",
  },
  {
    icon: "bi-graph-up-arrow",
    title: "Emerging Technology Professionals",
    desc: "Individuals who want to broaden their technical exposure and strengthen their professional capabilities.",
  },
  {
    icon: "bi-arrow-repeat",
    title: "Career Changers",
    desc: "Individuals seeking a structured pathway into the technology ecosystem.",
  },
  {
    icon: "bi-award",
    title: "Future Technology Leaders",
    desc: "Individuals interested in developing not only technical competence, but also leadership, business awareness and professional maturity.",
  },
];

const admissionSteps = [
  {
    num: 1,
    title: "Apply",
    desc: "Submit your application and required documents.",
  },
  {
    num: 2,
    title: "Interview & Assessment",
    desc: "Participate in the required interview and assessment process.",
  },
  {
    num: 3,
    title: "Initial Assessment",
    desc: "Successful applicants begin the structured initial assessment period.",
  },
  {
    num: 4,
    title: "Continue",
    desc: "Participants who satisfy the required standards continue through the full ETMPDP Core experience.",
  },
];

const deliveryOptions = [
  {
    icon: "bi-building",
    title: "Onsite",
    desc: "Structured physical learning, hands-on activities and direct workplace exposure.",
  },
  {
    icon: "bi-laptop",
    title: "Remote",
    desc: "Structured virtual learning with live instruction, mentorship and technical reviews.",
    featured: true,
  },
  {
    icon: "bi-arrow-left-right",
    title: "Hybrid",
    desc: "A combination of onsite and remote learning tailored to your practical requirements.",
  },
];

const checklist = [
  "Executive Technology Mentorship Certificate",
  "Professional Development Evaluation Report",
  "Career Guidance & Professional Recommendation",
  "Professional Portfolio Development Guidance",
  "Practical Industry Exposure",
  "Mentorship & Leadership Development Recognition",
  "Employment Consideration, Where Applicable",
];

const faqs = [
  {
    q: "Is ETMPDP Core an employment program?",
    a: "No. ETMPDP Core is a professional development and executive mentorship experience. Participation does not constitute employment.",
  },
  {
    q: "Will I become an Elonatech employee after completion?",
    a: "Completion does not guarantee employment. Exceptional participants may, however, be considered for employment where suitable opportunities exist.",
  },
  {
    q: "Do I have to choose only one technology track?",
    a: "No. ETMPDP Core provides multidisciplinary exposure across the eight technology tracks, with deeper development based on interests, demonstrated ability, assignments and project work.",
  },
  {
    q: "Is the ₦375,000 different for Remote or Hybrid participants?",
    a: "No. The Program investment is ₦375,000 regardless of whether participation is Onsite, Remote or Hybrid.",
  },
  {
    q: "Is accommodation included?",
    a: "No. Residential accommodation is optional and separately priced.",
  },
  {
    q: "Do I need my own laptop?",
    a: "Yes. Participants are expected to have access to a suitable laptop for their learning activities.",
  },
  {
    q: "Is ETMPDP Core suitable for someone without extensive technology experience?",
    a: "Yes. The Program is designed as a structured professional-development journey, although applicants must demonstrate the commitment and potential required for participation.",
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
          ETMPDP CORE | Executive Technology Mentorship & Professional Development
        </title>
        <meta
          name="description"
          content="A 12-month professional development and executive mentorship experience designed to develop technically competent, professionally disciplined, business-aware and future-ready technology professionals"
        />
        <link rel="canonical" href="https://elonatech.com.ng/etmpdpCore" />
      </Helmet>

      {/* ── 1. Hero ────────────────────────────────────────────── */}
      <div className="container-fluid emptdp-section core-hero-section">
        <div className="emptdp-hero-text">
          <span
            className="emptdp-mentor-badge"
            style={{ marginBottom: "16px" }}
          >
            ETMPDP Core
          </span>
          <h2>
            Executive Technology Mentorship &amp; Professional Development
            Program
          </h2>
          <h6
            style={{
              fontStyle: "italic",
              marginBottom: "16px",
              color: "#dc3545",
            }}
          >
            Build. Lead. Excel.
          </h6>
          <h5>Transforming Potential into Professional Excellence</h5>
          <p className="lead">
            A 12-month professional development and executive mentorship
            experience designed to develop technically competent,
            professionally disciplined, business-aware and future-ready
            technology professionals.
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
              Download Program Brochure
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
              Becoming A Technology Professional.
            </p>
          </div>
          <div className="emptdp-why-content">
            <div className="emptdp-why-text">
              <p>Technology careers demand more than technical knowledge.</p>
              <p>
                ETMPDP Core is a structured 12-month professional development
                experience designed to help participants develop the technical
                capability, professional discipline, leadership mindset,
                business awareness and career direction required to thrive in a
                rapidly evolving technology industry.
              </p>
              <p>
                Through multidisciplinary technology exposure, practical
                experience, executive mentorship, leadership development and
                AI-integrated learning, participants are challenged to learn,
                practice, contribute and continuously improve.
              </p>
              <p className="emptdp-why-closer">
                This is not simply about learning technology. It is about
                becoming a professional who can create value with technology.
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
          </div>
          <div className="emptdp-diff-grid core-why-grid">
            {whyCore.map((c, i) => (
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

      {/* ── 4. What Participants Will Learn ────────────────────────────────── */}
      <section className="emptdp-learn-section">
        <div className="container">
          <div className="emptdp-section-header">
            <h2 className="emptdp-section-title">
              Explore Eight Professional Technology Tracks
            </h2>
            <p className="emptdp-section-subtitle">
              Multidisciplinary exposure across eight professional technology
              tracks
            </p>
          </div>

          <p className="core-tracks-intro">
            Participants are not expected to become experts in every area.
            The experience provides broad technology exposure while allowing
            deeper competence to develop through practical assignments,
            demonstrated ability, individual interests, project work and
            professional development objectives.
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
              <p className="core-track-desc">
                {coreTracks[activeTab].desc}
              </p>
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
              A progressive professional-development model
            </p>
          </div>

          <div className="core-cycle">
            {["Observe", "Understand", "Practice", "Review", "Own", "Improve"].map(
              (s, i) => (
                <span className="core-cycle-step" key={i}>
                  {s}
                </span>
              )
            )}
          </div>

          <p className="core-cycle-lead">
            Participants move from guided exposure and understanding into
            practical application, feedback, ownership and continuous
            improvement.
          </p>
          <p className="core-cycle-closer">
            The objective is not merely to complete lessons. It is to develop
            the ability to understand problems, apply knowledge, work
            professionally, accept responsibility and continually improve.
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
              ETMPDP Core is designed as a progressive professional journey.
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
              Learn From Experience. Develop With Direction.
            </p>
          </div>
          <div className="core-textblock">
            <p>ETMPDP Core goes beyond technical instruction.</p>
            <p>
              Executive mentorship provides participants with structured
              opportunities to understand professional expectations, develop
              stronger judgment, receive guidance, reflect on their progress
              and gain perspective on career and professional growth.
            </p>
            <p className="emptdp-why-closer">
              Mentorship is integrated into the wider learning experience
              rather than treated as an occasional session.
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
                src="https://res.cloudinary.com/dahnwukbz/image/upload/v1784905744/pexels-kampus-5940713_s9bdaz_bzeilg.jpg"
                alt="Professional development session"
              />
            </div>
            <div className="core-split-body">
              <div className="emptdp-section-header core-split-header">
                <h2 className="emptdp-section-title">
                  Professional Development
                </h2>
                <p className="emptdp-section-subtitle">
                  Technical Skills Get You Started. Professional Excellence
                  Takes You Further.
                </p>
              </div>
              <p className="core-split-intro">
                Participants develop the professional capabilities that
                influence how effectively they work with people, clients,
                teams and organizations.
              </p>
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
                Artificial Intelligence is integrated throughout ETMPDP Core.
                Participants learn to use AI responsibly for:
              </p>
              <div className="core-split-list">
                {coreAiItems.map((item, i) => (
                  <div className="core-check-item" key={i}>
                    <i className="bi bi-check-circle-fill"></i>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p className="core-split-note">
                AI does not replace professional judgment. Participants remain
                responsible for the accuracy, originality, quality, integrity
                and outcome of their work.
              </p>
            </div>
            <div className="core-split-image">
              <img
                src="https://res.cloudinary.com/dahnwukbz/image/upload/v1784905632/pexels-mikhail-nilov-9301314_gkohy1_zbay4p.jpg"
                alt="AI-integrated learning"
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
                  From Knowledge to Application.
                </p>
              </div>
              <p className="core-split-intro">
                ETMPDP Core combines structured learning with practical
                experience through:
              </p>
              <div className="core-split-list">
                {corePracticalItems.map((item, i) => (
                  <div className="core-check-item" key={i}>
                    <i className="bi bi-check-circle-fill"></i>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p className="core-split-note">
                Where appropriate, participants may receive supervised
                exposure to selected projects based on competence, project
                availability, confidentiality requirements and Management
                approval.
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
              ETMPDP Core is designed for individuals who want more than
              short-term technical training.
            </p>
          </div>
          <div className="emptdp-diff-grid core-who-grid">
            {coreWhoApply.map((c, i) => (
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

      {/* ── 12. Delivery Options ─────────────────────────────────────────── */}
      <section className="emptdp-why-section">
        <div className="container">
          <div className="emptdp-section-header">
            <h2 className="emptdp-section-title">Delivery Options</h2>
            <p className="emptdp-section-subtitle">
              Learn In The Format That Works For You.
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
          <p className="core-delivery-note" style={{ marginTop: "16px", fontStyle: "italic" }}>
            Program Investment: <strong>&#8358;375,000</strong> across all
            three delivery formats.
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
              An Optional Residential Experience
            </p>
          </div>
          <div className="core-textblock">
            <p>
              Participants who require accommodation while undertaking onsite
              ETMPDP Core may opt for the ETMPDP Residential Experience,
              subject to availability.
            </p>
            <p className="emptdp-why-closer">
              Residential accommodation is separate from Program tuition and
              priced independently.
            </p>
          </div>
          <div className="core-tracks-cta">
            <Link to="/get-in-touch">
              <button className="emptdp-btn emptdp-btn--outline core-residential-cta">
                Enquire About Residential Experience <MoveRight />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── 15. Investment + What You Receive (side by side) ───────────────── */}
      <section className="emptdp-invest-section">
        <div className="container">
          <div className="emptdp-invest-grid">
            {/* Left — pricing */}
            <div className="emptdp-invest-left">
              <h3 className="emptdp-invest-heading">Program Investment</h3>
              <div className="emptdp-price-cards">
                <div className="emptdp-price-card emptdp-price-card--light">
                  <p className="emptdp-price-phase">Initial Enrollment</p>
                  <p className="emptdp-price-amount">₦300,000</p>
                  <p className="emptdp-price-note">
                    80% of Total Program Investment <br />
                    <span className="emptdp-price-note-subtext">
                      Payable upon enrollment and before commencement.
                    </span>
                  </p>
                </div>
                <div className="emptdp-price-divider"></div>
                <div className="emptdp-price-card emptdp-price-card--dark">
                  <p className="emptdp-price-phase emptdp-price-phase--white">
                    Continuation Balance
                  </p>
                  <p className="emptdp-price-amount emptdp-price-amount--white">
                    ₦75,000{" "}
                  </p>
                  <p className="emptdp-price-note emptdp-price-note--white">
                    20% of Total Program Investment <br />
                    <span className="emptdp-price-note-subtext">
                      Payable at the completion of the initial assessment
                      period.
                    </span>
                  </p>
                </div>
              </div>
              <p className="emptdp-total-label">
                Total Program Investment: <strong>₦375,000</strong>
              </p>
              <p className="emptdp-refund-note">
                All payments are strictly non-refundable.
              </p>
              <p className="core-invest-note">
                The investment is the same for Onsite, Remote and Hybrid
                participation. Residential accommodation, where required, is
                separate.
              </p>
              <button
                className="emptdp-btn emptdp-btn--primary core-invest-cta"
                onClick={() => startTransition(() => setShowModal(true))}
              >
                Apply for ETMPDP Core
              </button>
            </div>

            <div className="emptdp-invest-divider"></div>

            {/* Right — what you receive */}
            <div className="emptdp-invest-right">
              <h3 className="emptdp-invest-heading">What You Receive</h3>
              <p className="core-invest-receive-intro">
                Successful participants may receive:
              </p>
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

          {/* Two-column grid — contiguous split: left gets the first 3, right
             gets the last 4. The first item is open by default, so the
             shorter left column balances against its extra height. */}
          <div className="emptdp-faq-grid">
            {[
              [0, 3],
              [3, faqs.length],
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
            Develop the technical competence, professional discipline,
            leadership mindset and business awareness to take your next step
            with confidence.
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

export default EmptdpCore;
