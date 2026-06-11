import "./css/team.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const TeamMd = () => {
  return (
    <>
      <Helmet>
        <title>Oreva P. Oku — Managing Director | Elonatech Nigeria Limited</title>
        <meta
          name="description"
          content="Oreva P. Oku is the Managing Director, Lead Consultant and Creative Director of Elonatech Nigeria Limited. Technology Consultant, Brand Developer, and Corporate IT CEO of the Year 2024 (Innovation in Business). Expert in Network Administration, Web Design, Graphic Design, Branding and Digital Marketing."
        />
        <link rel="canonical" href="https://elonatech.com.ng/oreva-p-oku/" />
        <meta property="og:title" content="Oreva P. Oku — Managing Director | Elonatech Nigeria Limited" />
        <meta property="og:description" content="Oreva P. Oku is the Managing Director and Creative Director of Elonatech Nigeria Limited. Technology Consultant, Brand Developer, and Corporate IT CEO of the Year 2024." />
        <meta property="og:url" content="https://elonatech.com.ng/oreva-p-oku/" />
        <meta property="og:type" content="profile" />
        <meta property="og:image" content="https://res.cloudinary.com/djogptxxc/image/upload/v1778154939/Image-Resize-1_4_flng2u.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Oreva P. Oku — Managing Director | Elonatech Nigeria Limited" />
        <meta name="twitter:description" content="Oreva P. Oku is the Managing Director and Creative Director of Elonatech Nigeria Limited. Corporate IT CEO of the Year 2024." />
        <meta name="twitter:image" content="https://res.cloudinary.com/djogptxxc/image/upload/v1778154939/Image-Resize-1_4_flng2u.png" />
      </Helmet>

      <div class="container-fluid team-section">
        <div class="text-content">
          <h2>Our Team</h2>
          <h5>
            We Are Passionate About Technology, Business, And Customer Relation
          </h5>
          <p class="lead">
            The Elonatech team consists of young, talented, educated, proud and
            highly motivated people that bring positive changes to our
            technologically advancing world.
          </p>
        </div>
      </div>
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-md-4">
            <div className="card border-0">
              <img
                src="https://res.cloudinary.com/djogptxxc/image/upload/v1778154939/Image-Resize-1_4_flng2u.png"
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
          <div className="col-md-8">
            <div className="card border-0">
              <h1 className="fw-bold" style={{ color: "#34548c" }}>
                Oreva P. Oku
              </h1>
              <h6 className="text-danger mt-0">
                MD and Innovation & IT Solutions Consultant
              </h6>
              <p>
                Oreva P. Oku is the Managing Director and Innovation & IT
                Solutions Consultant at Elonatech Nigeria Limited, where he
                leads the delivery of innovative, scalable, and results-driven
                technology solutions for businesses across Nigeria.
              </p>

              <p>
                With over 16 years of experience, he has built a strong
                reputation for leveraging technology to optimize business
                processes, enhance operational efficiency, and solve complex
                technical challenges. He works at the intersection of technology
                and business strategy, helping organizations integrate digital
                solutions that drive measurable growth.
              </p>
              <p>
                His expertise spans IT infrastructure and networking, systems
                implementation and security, software and web solutions,
                technical support, branding, and digital transformation. Through
                his leadership, Elonatech has become a trusted partner for
                organizations seeking reliable and forward-thinking technology
                solutions.
              </p>
              <p>
                Oreva has played key roles in IT consulting, system deployment,
                and technical strategy across both backend and frontend
                environments. His ability to align technology with business
                objectives positions him as a strategic advisor to organizations
                pursuing innovation and long-term efficiency.
              </p>
              <p>
                He is recognized as the{" "}
                <Link
                  to="https://www.innovationinbusiness.com/winners/elonatech-nigeria-limited/"
                  target="_blank"
                >
                  Technology CEO of Year 2024 by Innovation in Business
                  (Innovation in Business)
                </Link>{" "}
                and holds professional certifications including Cisco Certified
                Network Associate (CCNA), alongside qualifications in
                Telecommunications, Network Security, Server Administration, and
                Web Technologies.
              </p>
              <p>
                He is passionate about delivering practical, high-impact
                technology solutions that empower businesses to scale with
                confidence.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*=============================================================================================================================  */}

      <div class="container-fluid mt-5">
        <p className="fw-bold fs-1 text-center" style={{ color: "#34548c" }}>
          Leadership <span className="fst-italic  text-danger"> Team</span>
        </p>
        <div class="row mt-5   justify-content-md-center">
          <div class="col-lg-2 mx-1 p-3 mb-5  rounded">
            <div class="kontribusi">
              <div class="team-item rounded overflow-hidden pb-4">
                <Link
                  className="text-decoration-none"
                  to={"/israel-uhwonuwoma-o"}
                >
                  <img
                    class="img-fluid mb-4"
                    src="https://res.cloudinary.com/elonatech/image/upload/v1710243151/teamPage/chairman_esjmiy.jpg"
                    alt=""
                  />
                  <h4
                    className="fw-bold text-decoration-none"
                    style={{ color: "#34548c" }}
                  >
                    Dr. Israel Uwohnuwoma O.
                  </h4>
                  <h6 class="text-danger">Executive Chairman</h6>
                </Link>
                <ul class="team-social">
                  <li>
                    <Link
                      class="btn btn-square"
                      target="_blank"
                      rel="noopener noreferrer"
                      to={"https://www.linkedin.com/in/israel-oku-65285969/"}
                    >
                      <i class="fab fa-linkedin-in"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      class="btn btn-square"
                      target="_blank"
                      rel="noopener noreferrer"
                      to={"https://twitter.com/OkuIsrael"}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-twitter-x"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link
                      class="btn btn-square"
                      target="_blank"
                      rel="noopener noreferrer"
                      to={"https://www.facebook.com/uwoma.280247"}
                    >
                      <i class="fab fa-facebook-f"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      class="btn btn-square"
                      target="_blank"
                      rel="noopener noreferrer"
                      to={"https://www.instagram.com/israeloku/"}
                    >
                      <i class="fab fa-instagram"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col-lg-2 mx-1  p-3 mb-5 rounded ">
            <div class="kontribusi">
              <div class="team-item rounded overflow-hidden pb-4">
                <Link className="text-decoration-none" to={"/violet-oku"}>
                  <img
                    class="img-fluid mb-4"
                    src="https://res.cloudinary.com/djogptxxc/image/upload/v1778082344/Image-Resize-2_1_vlwrnr.png"
                    alt=""
                  />
                  <h4 className="fw-bold" style={{ color: "#34548c" }}>
                    Violet Laura O.
                  </h4>
                  <h6 class="text-danger">Employee Relations/Admin Manager</h6>
                </Link>
                <ul class="team-social">
                  <li>
                    <Link
                      class="btn btn-square"
                      target="_blank"
                      rel="noopener noreferrer"
                      to={"https://www.linkedin.com/in/laura-oku-a0597b17b"}
                    >
                      <i class="fab fa-linkedin-in"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      class="btn btn-square"
                      target="_blank"
                      rel="noopener noreferrer"
                      to={"https://twitter.com/V4reva"}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-twitter-x"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link
                      class="btn btn-square"
                      target="_blank"
                      rel="noopener noreferrer"
                      to={"https://www.facebook.com/violetoku"}
                    >
                      <i class="fab fa-facebook-f"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      class="btn btn-square"
                      target="_blank"
                      rel="noopener noreferrer"
                      to={"https://www.instagram.com/vioreva"}
                    >
                      <i class="fab fa-instagram"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col-lg-2  mx-1 p-3 mb-5 rounded">
            <div class="kontribusi">
              <div class="team-item rounded overflow-hidden pb-4">
                <Link className="text-decoration-none" to={"/toju-okenejoe"}>
                  <img
                    class="img-fluid mb-4"
                    src="https://res.cloudinary.com/djogptxxc/image/upload/v1778154940/Image-Resize-3_1_pyikij.png"
                    alt=""
                  />
                  <h4 className="fw-bold" style={{ color: "#34548c" }}>
                    Toju Okene-Joe
                  </h4>
                  <h6 class="text-danger">Creative Designer | Team Lead</h6>
                </Link>
                <ul class="team-social">
                  <li>
                    <Link
                      class="btn btn-square"
                      target="_blank"
                      rel="noopener noreferrer"
                      to={"http://www.linkedin.com/in/okene-joe-toju"}
                    >
                      <i class="fab fa-linkedin-in"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      class="btn btn-square"
                      target="_blank"
                      rel="noopener noreferrer"
                      to={"https://x.com/OkeneJoeToju"}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-twitter-x"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link
                      class="btn btn-square"
                      target="_blank"
                      rel="noopener noreferrer"
                      to={"https://web.facebook.com/tojujoe"}
                    >
                      <i class="fab fa-facebook-f"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      class="btn btn-square"
                      target="_blank"
                      rel="noopener noreferrer"
                      to={
                        "https://www.instagram.com/teajay_creations?igsh=OHF1NXg5bTB2NmZx"
                      }
                    >
                      <i class="fab fa-instagram"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-2  mx-1  p-3 mb-5 rounded ">
            <div class="kontribusi">
              <div class="team-item rounded overflow-hidden pb-4">
                <Link className="text-decoration-none" to={"/jamiu-noah"}>
                  <img
                    class="img-fluid mb-4"
                    src="https://res.cloudinary.com/elonatech/image/upload/v1709808291/teamPage/Jamiu_noah_ghhfjl.png"
                    alt=""
                  />
                  <h4 className="fw-bold" style={{ color: "#34548c" }}>
                    Jamiu Noah
                  </h4>
                  <h6 class="text-danger">Systems & Network Engineer</h6>
                </Link>
                <ul class="team-social">
                  <li>
                    <Link
                      class="btn btn-square"
                      target="_blank"
                      rel="noopener noreferrer"
                      to={"http://linkedin.com/in/jamiu-noah-5267b0242"}
                    >
                      <i class="fab fa-linkedin-in"></i>
                    </Link>
                  </li>
                  <li>
                    <Link class="btn btn-square">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-twitter-x"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <div class="btn btn-square">
                      <i class="fab fa-facebook-f"></i>
                    </div>
                  </li>
                  <li>
                    <div class="btn btn-square">
                      <i class="fab fa-instagram"></i>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col-lg-2 mx-1 p-3 mb-5 rounded">
            <div class="kontribusi">
              <div class="team-item rounded overflow-hidden pb-4">
                <Link className="text-decoration-none" to={"/joseph-okoronkwo"}>
                  <img
                    class="img-fluid mb-4"
                    src="https://res.cloudinary.com/elonatech/image/upload/v1733493382/joseph_picture_rurbzo.jpg"
                    alt=""
                  />
                  <h5 className="fw-bold" style={{ color: "#34548c" }}>
                    Joseph Okoronkwo
                  </h5>
                  <h6 class="text-danger">Lead Full Stack Developer</h6>
                </Link>
                <ul class="team-social">
                  <li>
                    <Link
                      class="btn btn-square"
                      target="_blank"
                      rel="noopener noreferrer"
                      to={"https://www.linkedin.com/in/joe40/"}
                    >
                      <i class="fab fa-linkedin-in"></i>
                    </Link>
                  </li>
                  <li>
                    <Link class="btn btn-square">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-twitter-x"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <div class="btn btn-square">
                      <i class="fab fa-facebook-f"></i>
                    </div>
                  </li>
                  <li>
                    <div class="btn btn-square">
                      <i class="fab fa-instagram"></i>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*=============================================================================================================================  */}
      <div className="text-center mb-5">
        <Link to={"/our-team"} className="btn btn-danger">
          Back to our team
        </Link>
      </div>
      {/* ========================================================================== */}
    </>
  );
};

export default TeamMd;
