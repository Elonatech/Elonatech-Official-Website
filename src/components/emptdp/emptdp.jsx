import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./emptdp.css";
import "./emptdpHub.css";
import CardDeck from "./CardDeck";

/* ── Static data ────────────────────────────────────────────────────────── */

const whatDefines = [
  {
    icon: "bi-wrench-adjustable",
    title: "Technical Development",
    desc: "Build practical technology capability through structured learning and application.",
  },
  {
    icon: "bi-person-workspace",
    title: "Executive Mentorship",
    desc: "Gain guidance, perspective and professional insight from experienced mentors.",
  },
  {
    icon: "bi-patch-check",
    title: "Professional Excellence",
    desc: "Develop communication, workplace effectiveness, discipline and professional confidence.",
  },
  {
    icon: "bi-award",
    title: "Leadership Development",
    desc: "Build the mindset and capabilities required to take responsibility and lead.",
  },
  {
    icon: "bi-graph-up-arrow",
    title: "Business Awareness",
    desc: "Understand how technology, people and business operations work together.",
  },
  {
    icon: "bi-robot",
    title: "AI Readiness",
    desc: "Develop the ability to use AI responsibly as part of modern professional practice.",
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
            Program
          </h2>
          <h5>Transforming Potential into Professional Excellence.</h5>
          <p className="lead">
            A structured professional development experience designed to
            develop practical technology capability, professional discipline,
            leadership capacity, business awareness, AI readiness and career
            direction.
          </p>
        </div>
        <div className="emptdp-cta-buttons">
          <Link to="/emptdp-core">
            <button className="emptdp-btn emptdp-btn--primary">
              Explore ETMPDP Core
            </button>
          </Link>
          <Link to="/emptdp-ignite">
            <button className="emptdp-btn hub-btn-ignite">
              Explore ETMPDP Ignite
            </button>
          </Link>
        </div>
        <div className="hub-learning-mode">
          <h6>
            Build. Lead. Excel. | Enter the Industry. Build Your Edge.
          </h6>
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
              Developing Technology &amp; Professional Excellence.
            </p>
          </div>
          <div className="hub-textblock">
            <p>
              Technology skills are increasingly important, but professional
              success requires more than technical knowledge alone. ETMPDP
              brings technical development together with practical experience,
              mentorship, leadership, professional development, business
              awareness and responsible use of emerging technologies.
            </p>
            <p>
              The result is a structured development journey designed to help
              participants become more capable, confident and workplace-ready
              technology professionals.
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
            <p className="emptdp-section-subtitle">
              Choose the professional development pathway that best fits your
              stage and goals.
            </p>
          </div>
          <div className="hub-experience-grid">
            <div className="hub-experience-card hub-card-core">
              <h3 className="hub-experience-name">ETMPDP Core</h3>
              <p className="hub-experience-tag">Build. Lead. Excel.</p>
              <p className="hub-experience-desc">
                A 12-month multidisciplinary Executive Technology Mentorship
                &amp; Professional Development journey designed for aspiring and
                emerging technology professionals seeking broader technical,
                professional and leadership development.
              </p>
              <Link to="/emptdp-core" className="hub-experience-link hub-link-core">
                Explore ETMPDP Core <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
            <div className="hub-experience-card hub-card-ignite">
              <h3 className="hub-experience-name">ETMPDP Ignite</h3>
              <p className="hub-experience-tag">
                Enter the Industry. Build Your Edge.
              </p>
              <p className="hub-experience-desc">
                A structured Professional Development Experience for
                undergraduate students designed to bridge academic learning and
                industry practice through specialization, practical exposure,
                mentorship and professional development.
              </p>
              <Link to="/emptdp-ignite" className="hub-experience-link hub-link-ignite">
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
            <p
              className="emptdp-section-subtitle"
              style={{ color: "rgba(255,255,255,0.75)" }}
            >
              A professional development experience built around more than
              technical training.
            </p>
          </div>
          <CardDeck className="emptdp-diff-grid hub-defines-grid" onDark>
            {whatDefines.map((c, i) => (
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

      {/* ── 5. Our Vision — full-bleed photo band ────────────────────────── */}
      <section className="emptdp-why-section hub-vision-band">
        <div className="container">
          <div className="hub-vision">
            <p className="hub-vision-eyebrow">Our Vision</p>
            <h2 className="hub-vision-statement">
              Developing Competent, Disciplined, Future-Ready Professionals.
            </h2>
            <p className="hub-vision-body">
              ETMPDP develops more than technical ability.
            </p>
            <p className="hub-vision-body">
              Through structured learning, practical exposure, mentorship,
              leadership development and continuous professional growth, ETMPDP
              helps participants develop the competence, discipline, confidence
              and professional mindset required to contribute effectively in
              today&apos;s technology environment.
            </p>
          </div>
        </div>
      </section>

      {/* ── 6. Find Your Path ────────────────────────────────────────────── */}
      <section className="emptdp-who-section">
        <div className="container">
          <div className="emptdp-section-header">
            <h2 className="emptdp-section-title">Find Your Path</h2>
            <p className="emptdp-section-subtitle">
              Choose the ETMPDP experience that fits your current stage and
              professional direction.
            </p>
          </div>
          <div className="hub-path-grid">
            <div className="hub-path-card hub-path-card--ignite">
              <p className="hub-path-q">
                Are you an undergraduate preparing to enter the technology
                industry?
              </p>
              <Link to="/emptdp-ignite" className="hub-path-link">
                Explore ETMPDP Ignite <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
            <div className="hub-path-card hub-path-card--core">
              <p className="hub-path-r">
                Are you ready to develop broader professional and technology
                capability?
              </p>
              <Link to="/emptdp-core" className="hub-path-link">
                Explore ETMPDP Core <i className="bi bi-arrow-right"></i>
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
          <p className="emptdp-cta-sub">
            Technology changes quickly. Your professional development should
            keep moving with it.
          </p>
          <p className="emptdp-cta-sub">
            Explore the ETMPDP experience designed for your stage, interests
            and professional goals.
          </p>
          <div className="emptdp-cta-buttons">
            <Link to="/emptdp-core">
              <button className="emptdp-btn emptdp-btn--primary">
                Explore ETMPDP Core
              </button>
            </Link>
            <Link to="/emptdp-ignite">
              <button className="emptdp-btn emptdp-btn--outline-dark hub-btn-ignite-dark">
                Explore ETMPDP Ignite
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
