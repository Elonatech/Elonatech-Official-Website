import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./emptdp.css";
import "./emptdpHub.css";

/* ── Static data ────────────────────────────────────────────────────────── */

const whatDefines = [
  {
    icon: "bi-wrench-adjustable",
    title: "Technical Development",
    desc: "Practical technology knowledge and hands-on experience.",
  },
  {
    icon: "bi-person-workspace",
    title: "Executive Mentorship",
    desc: "Guidance, perspective and professional insight.",
  },
  {
    icon: "bi-patch-check",
    title: "Professional Excellence",
    desc: "Communication, discipline, accountability and workplace readiness.",
  },
  {
    icon: "bi-award",
    title: "Leadership Development",
    desc: "Initiative, responsibility, teamwork and leadership capacity.",
  },
  {
    icon: "bi-graph-up-arrow",
    title: "Business Awareness",
    desc: "Understanding how technology creates organizational and customer value.",
  },
  {
    icon: "bi-robot",
    title: "AI Readiness",
    desc: "Responsible use of AI within modern professional practice.",
  },
];

/* ── Component ──────────────────────────────────────────────────────────── */

const Emptdp = () => {
  return (
    <>
      <Helmet>
        <title>
          ETMPDP | Executive Technology Mentorship &amp; Professional
          Development
        </title>
        <meta
          name="description"
          content="ETMPDP is Elonatech's professional development ecosystem combining technology, executive mentorship, leadership development, practical experience, business awareness and professional excellence."
        />
        <link rel="canonical" href="https://elonatech.com.ng/etmpdp" />
      </Helmet>

      <div className="etmpdp-hub">
      {/* ── 1. Hero ──────────────────────────────────────────────────────── */}
      <div className="container-fluid emptdp-section hub-hero-section">
        <div className="emptdp-hero-text">
          <span
            className="emptdp-mentor-badge"
            style={{ marginBottom: "16px" }}
          >
            ETMPDP
          </span>
          <h2>
            Executive Technology Mentorship &amp; Professional Development
          </h2>
          <h5>
            Developing technology professionals for the workplace, leadership
            and the future.
          </h5>
          <p className="lead">
            ETMPDP is Elonatech&apos;s professional development ecosystem
            combining technology, executive mentorship, leadership development,
            practical experience, business awareness and professional
            excellence.
          </p>
        </div>
        <div className="emptdp-cta-buttons">
          <Link to="/emptdp-core">
            <button className="emptdp-btn emptdp-btn--primary">
              Explore ETMPDP Core
            </button>
          </Link>
          <Link to="/emptdp-ignite">
            <button className="emptdp-btn emptdp-btn--outline">
              Explore ETMPDP Ignite
            </button>
          </Link>
        </div>
        <div className="hub-learning-mode">
          <h6>Onsite | Remote | Hybrid</h6>
        </div>
      </div>

      {/* ── 2. More Than Learning Technology ─────────────────────────────── */}
      <section className="emptdp-why-section">
        <div className="container">
          <div className="emptdp-section-header">
            <h2 className="emptdp-section-title">
              More Than Learning Technology.
            </h2>
            <p className="emptdp-section-subtitle">
              Becoming a Technology Professional.
            </p>
          </div>
          <div className="hub-textblock">
            <p>
              ETMPDP is built on the belief that technical knowledge alone is
              not enough.
            </p>
            <p>
              Our approach develops technical competence, professional
              discipline, leadership capacity, critical thinking,
              communication, business awareness and the mindset required to
              create value in a rapidly evolving technology industry.
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. Two Experiences. One ETMPDP Vision. ───────────────────────── */}
      <section className="emptdp-who-section hub-tint">
        <div className="container">
          <div className="emptdp-section-header">
            <h2 className="emptdp-section-title">
              Two Experiences. One ETMPDP Vision.
            </h2>
          </div>
          <div className="hub-experience-grid">
            <div className="hub-experience-card">
              <h3 className="hub-experience-name">ETMPDP Core</h3>
              <p className="hub-experience-tag">Build. Lead. Excel.</p>
              <p className="hub-experience-desc">
                A 12-month multidisciplinary professional development and
                executive mentorship experience for individuals seeking
                deeper technical, professional and leadership development.
              </p>
              <Link to="/emptdp-core" className="hub-experience-link">
                Explore ETMPDP Core <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
            <div className="hub-experience-card">
              <h3 className="hub-experience-name">ETMPDP Ignite</h3>
              <p className="hub-experience-tag">
                Enter the Industry. Build Your Edge.
              </p>
              <p className="hub-experience-desc">
                An undergraduate professional development experience designed
                to bridge academic learning and the technology industry.
              </p>
              <p className="hub-experience-ideal">
                Ideal for SIWES &bull; Industrial Training &bull; Internship
                &bull; Career Development.
              </p>
              <Link to="/emptdp-ignite" className="hub-experience-link">
                Explore ETMPDP Ignite <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. What Defines ETMPDP? ──────────────────────────────────────── */}
      <section className="emptdp-diff-section">
        <div className="container">
          <div className="emptdp-section-header emptdp-section-header--light">
            <h2 className="emptdp-section-title emptdp-section-title--white">
              What Defines ETMPDP?
            </h2>
          </div>
          <div className="emptdp-diff-grid hub-defines-grid">
            {whatDefines.map((c, i) => (
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

      {/* ── 5. Our Vision — full-bleed photo band ────────────────────────── */}
      <section className="emptdp-why-section hub-vision-band">
        <div className="container">
          <div className="hub-vision">
            <p className="hub-vision-eyebrow">Our Vision</p>
            <h2 className="hub-vision-statement">
              Developing Competent. Disciplined. Future-Ready Professionals.
            </h2>
            <p className="hub-vision-body">
              ETMPDP exists to help develop technology professionals equipped
              with practical skills, leadership capacity, business awareness
              and professional excellence to create lasting impact within the
              technology industry and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* ── 6. Find Your Path ────────────────────────────────────────────── */}
      <section className="emptdp-who-section">
        <div className="container">
          <div className="emptdp-section-header">
            <h2 className="emptdp-section-title">Find Your Path</h2>
          </div>
          <div className="hub-path-grid">
            <div className="hub-path-card hub-path-card--ignite">
              <p className="hub-path-q">
                Are you an undergraduate preparing to enter the industry?
              </p>
              <Link to="/emptdp-ignite" className="hub-path-link">
                Choose ETMPDP Ignite <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
            <div className="hub-path-card hub-path-card--core">
              <p className="hub-path-r">
                Are you ready for a deeper professional development journey?
              </p>
              <Link to="/emptdp-core" className="hub-path-link">
                Choose ETMPDP Core <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. Final CTA ─────────────────────────────────────────────────── */}
      <section className="emptdp-cta-section hub-tint">
        <div className="container emptdp-cta-inner">
          <h2 className="emptdp-cta-heading">
            Your Journey.{" "}
            <span className="emptdp-cta-heading--dark">Your Development.</span>{" "}
            Your Future.
          </h2>
          <p className="hub-cta-eyebrow">ETMPDP</p>
          <p className="emptdp-cta-sub">
            Executive Technology Mentorship &amp; Professional Development
          </p>
          <div className="emptdp-cta-buttons">
            <Link to="/emptdp-core">
              <button className="emptdp-btn emptdp-btn--primary">
                Explore Core
              </button>
            </Link>
            <Link to="/emptdp-ignite">
              <button className="emptdp-btn emptdp-btn--outline-dark">
                Explore Ignite
              </button>
            </Link>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default Emptdp;
