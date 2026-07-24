import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect, useRef, useState } from "react";
import { BASEURL } from "../../BaseURL/BaseURL";
import { sanitizeName } from "../../utils/sanitizeName";
import axios from "axios";
import "../emptdp/applicationModal.css";
import Serve from "../serve/serve";
import Loading from "../../components/Loading/Loading";
import Clients from "../clients/clients";
import { LazyLoadImage } from "react-lazy-load-image-component";

// Images
import ElonatechSupport from "./captions/Elonatech_suupport-min_hrc21l.png";
import ElonatechOneStop from "./captions/One_stop_IT_solution-min_lqmw0y.png";
// others
import MDImage from "./captions/Ceo1.png";
import "./main.css";

let lastSubmitTimeMain = 0;

const Main = () => {
  const [showConsultModal, setShowConsultModal] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const consultFormOpenTime = useRef(Date.now());
  let navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [occupation, setOccupation] = useState("");
  const [challenge, setChallenge] = useState("");
  const [business, setBusiness] = useState("");
  const [cost, setCost] = useState("");
  const [invest, setInvest] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [latestProducts, setLatestProducts] = useState([]);
  const [loadingLatest, setLoadingLatest] = useState(true);
  const [filteredProductCategory, setFilteredProductCategory] = useState(null);

  useEffect(() => {
    const fetchLatestProducts = async () => {
      setLoadingLatest(true);
      try {
        const response = await axios.get(
          `${BASEURL}/api/v1/product/filter/all`
        );
        if (response.data.success) {
          const allProducts = response.data.data;

          const productsCategory = allProducts.filter(
            (el) => el.category === "Products"
          );

          let latestProductInProductsCategory = null;
          if (productsCategory.length > 0) {
            latestProductInProductsCategory = productsCategory.sort(
              (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
            )[0];
            setFilteredProductCategory(latestProductInProductsCategory);
          }

          const productsByCategory = allProducts.reduce((acc, product) => {
            if (product.category === "Products") {
              return acc;
            }

            acc[product.category] = acc[product.category] || [];
            acc[product.category].push(product);
            return acc;
          }, {});

          const latest = Object.values(productsByCategory).map((products) => {
            return products.sort(
              (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
            )[0];
          });

          setLatestProducts(latest);
        }
      } catch (error) {
        console.error("Error fetching latest products:", error);
      } finally {
        setLoadingLatest(false);
      }
    };

    fetchLatestProducts();
  }, []);

  useEffect(() => {
    if (showConsultModal) consultFormOpenTime.current = Date.now();
  }, [showConsultModal]);

  useEffect(() => {
    document.body.style.overflow = showConsultModal ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [showConsultModal]);

  const validateConsultForm = () => {
    if (honeypot) return false;
    const timeOnForm = (Date.now() - consultFormOpenTime.current) / 1000;
    if (timeOnForm < 3) {
      toast.error("Please take your time filling out the form.");
      return false;
    }
    const secondsSinceLastSubmit = (Date.now() - lastSubmitTimeMain) / 1000;
    if (lastSubmitTimeMain && secondsSinceLastSubmit < 60) {
      toast.error(
        `Please wait ${Math.ceil(60 - secondsSinceLastSubmit)} seconds before submitting again.`
      );
      return false;
    }
    const errors = [];
    if (!name.trim()) errors.push("Name is required.");
    if (!email.trim()) errors.push("Email address is required.");
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()))
      errors.push("Please enter a valid email address.");
    if (!occupation.trim()) errors.push("Please tell us what you do.");
    if (!challenge.trim()) errors.push("Please describe your challenges.");
    if (!business.trim())
      errors.push("Please tell us what you would change in your business.");
    if (!cost.trim()) errors.push("Please enter the cost amount.");
    if (!invest.trim()) errors.push("Please enter your investment amount.");
    if (errors.length > 0) {
      errors.forEach((err) => toast.error(err));
      return false;
    }
    return true;
  };

  const handleProductClick = (product) => {
    if (product && product.slug && product._id) {
      localStorage.setItem("product _id", product._id);
      navigate(`/product/${product.slug}/${product._id}`);
    } else {
      toast.error("Product information is incomplete");
    }
  };

  const handleChangeCost = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setCost(value);
  };
  const handleChangeInvest = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setInvest(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!validateConsultForm()) {
      setIsSubmitting(false);
      return;
    }

    try {
      const newData = {
        name,
        email,
        occupation,
        challenge,
        business,
        cost,
        invest,
      };

      const response = await axios.post(
        `${BASEURL}/api/v1/email/consult`,
        newData,
        { headers: { "Content-Type": "application/json" } }
      );
      if (response) {
        toast.success("Consult Sent!!!");
        lastSubmitTimeMain = Date.now();
        setTimeout(() => {
          navigate(0);
        }, 1000);
      }
    } catch (error) {
      console.log(error);
      const msg =
        (error.response && error.response.data) ||
        error.message ||
        "Submission failed";
      toast.error(msg);
      setError(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/*================================================================ Card ===================================================================*/}
      <div className="py-3">
        <h2 className="text-center fw-bold"> Elonatech Nigeria Limited </h2>
        <div
          style={{
            backgroundColor: "#dc3545",
            height: "2px",
            width: "80px",
            margin: "auto",
          }}
        ></div>
        <h4 className="text-center pt-3">
          Top-Notch Technology Service Provider.
        </h4>
        <h5 className="text-center pt-3"></h5>
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div className="col-md-6 ">
              <div
                className="card shadow-sm me-auto "
                style={{
                  backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.99), rgba(0, 0, 0, 0.5)), url(https://res.cloudinary.com/elonatech/image/upload/v1709804949/homePage/main/Scalable_IT_left-min_c8po5r.png)`,
                }}
              >
                <div className="card-body">
                  <h5 className="card-title text-white mt-3">
                    Website and App Solutions
                  </h5>
                  <p className="card-text  text-white pt-2">
                    At Elonatech, we build Apps that are not only visually
                    beautiful but also functionally effective. Our team of web
                    strategists, designers, developers, and project managers
                    work together to help clients meet their business objective
                  </p>
                  <div className="d-flex justify-content-between align-items-center pt-3">
                    <Link className="btn btn-danger" to={"/app-development"}>
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 me-auto">
              <div
                className="card shadow-sm"
                style={{
                  backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.99)), url(https://res.cloudinary.com/elonatech/image/upload/v1709804949/homePage/main/Scalable_IT_right-min_cjn5fe.png)`,
                }}
              >
                <div className="card-body">
                  <h5 className="card-title text-white mt-3">
                    Flexible, Scalable IT Solutions
                  </h5>
                  <p className="card-text text-white pt-2">
                    Having the right company behind your IT system is as
                    important as the network itself. Implementing a
                    well-designed, secured enterprise network and utilizing the
                    right combination of IT solutions will drive your business
                    to the desired level.
                  </p>
                  <div className="d-flex justify-content-between align-items-center pt-3">
                    <Link className="btn btn-danger" to={"/system-integration"}>
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*================================================================= Support ================================================================*/}
      <div className="container mt-5 rounded">
        <div className="row align-content-center">
          <div className="col-md-7">
            <div className="border-0">
              <ul className="list-unstyled">
                <li className="mb-3">
                  <div className="d-flex">
                    <i className="bi bi-headset" style={{ fontSize: "30px" }}></i>
                    <div className="">
                      <Link
                        className="ps-5"
                        style={{ color: "#34548C" }}
                        to={"/technical-support"}
                      >
                        Onsite Support And Installations{" "}
                      </Link>
                      <h6 className="ps-5 mt-2 mb-3">
                        Expertise. Convenience. Customer Experience.
                        <div className="support-line mt-2"></div>
                      </h6>
                    </div>
                  </div>
                </li>

                <li className="mb-3">
                  <div className="d-flex">
                    <i className="bi bi-gear" style={{ fontSize: "30px" }}></i>
                    <div className="">
                      <Link
                        className="ps-5"
                        style={{ color: "#34548C" }}
                        to={"/get-in-touch"}
                      >
                        Contact Support
                      </Link>
                      <h6 className="ps-5 ">
                        Let us assist you with any product or service questions.
                        <div className="support-line mt-2"></div>
                      </h6>
                    </div>
                  </div>
                </li>

                <li className="mb-3">
                  <div className="d-flex">
                    <i className="bi bi-laptop" style={{ fontSize: "30px" }}></i>
                    <div className="">
                      <Link
                        className="ps-5"
                        style={{ color: "#34548C" }}
                        to={"/products"}
                      >
                        Laptops. Network Servers. Workstations
                      </Link>
                      <h6 className="ps-5 ">
                        Get what you need to run your business
                        <div className="support-line mt-2"></div>
                      </h6>
                    </div>
                  </div>
                </li>

                <li className="mb-3">
                  <div className="d-flex">
                    <div className="mb-4">
                      <svg
                        width="32px"
                        height="32px"
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M16 6.459l-13.855-6.417v25.5l13.855 6.417 13.855-6.417v-25.5zM24.208 21.917l-8.172 3.78-8.167-3.78v-12.98l8.167 3.781 8.172-3.781z" />
                      </svg>
                    </div>
                    <div className="">
                      <Link
                        className="ps-5"
                        style={{ color: "#34548C" }}
                        to={"/business-software"}
                      >
                        Premium Software Retail & Installation
                      </Link>
                      <h6 className="ps-5 ">
                        {" "}
                        Ensures users perform tasks more effectively
                        <div className="support-line mt-2"></div>
                      </h6>
                    </div>
                  </div>
                </li>

                <li className="mt-1">
                  <div className="d-flex">
                    <i className="bi bi-printer" style={{ fontSize: "30px" }}></i>
                    <div className="">
                      <Link
                        className="ps-5"
                        style={{ color: "#34548C" }}
                        to={"/printer-repair"}
                      >
                        Printer and Print Solutions
                      </Link>
                      <h6 className="ps-5 ">
                        Efficient running of business operations
                        <div className="support-line mt-2"></div>
                      </h6>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-5 align-self-center">
            <div className="border-0">
              <img
                src=""
                data-src={ElonatechSupport}
                className="img-fluid lazyload"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      {/*==================================================================== Marketing ============================================================*/}
      <div className="container marketing">
        <div className="row  mt-5 ">
          <div className="col-lg-7">
            <h3 className="fw-bold">
              {" "}
              The IT Solutions and Corporate Consultant Company
            </h3>
            <p className="fs-6 p-2" style={{ textAlign: "justify" }}>
              We, at Elonatech are aware of your need for quality IT Services.
              Beyond reasonable doubt, the management of information technology
              for business is not inherently a do-it-yourself project. Business
              owners who aren't tech-savvy need to find quality IT solution
              providers. We are experts in IT related matters, poised to shape
              the industry, by helping clients solve complex IT challenges.{" "}
              <br /> <br />
              Our Company's logistical services are designed for the
              top-of-the-market corporate clientele; we serve as an interface
              keeping you above the turmoil of working in today's Nigeria with
              minimum hassle. We strive to be the leading provider of innovative
              information technologies that improve the quality of lives. <br />{" "}
              <br /> We delight in satisfying our clients through the provision
              of innovative, quality, timely, relevant, accurate and affordable
              solutions to their needs. "Our concept is to provide One-Stop 'IT'
              solution
            </p>
          </div>
          <div className="col-lg-5">
            <img
              src=""
              data-src={ElonatechOneStop}
              className="img-fluid lazyload"
              alt=""
            />
          </div>
        </div>
      </div>

      {/*==============================================================  Services =============================================================== */}
      <Serve />

      {/*============================================================ Our clients ================================================================ */}
      <div className="container mt-5 mb-5 custom-container">
        <h2 className="text-center fw-bold">Some Of Our Clients</h2>
        <div
          style={{
            backgroundColor: "#dc3545",
            height: "2px",
            width: "80px",
            margin: "auto",
          }}
        ></div>
        <div
          id="carouselExampleControls"
          className="carousel slide mt-5 mySSSS"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {/* carousel items (kept structure) */}
            <div className="carousel-item active">
              <div className="container">
                <div className="row">
                  <div className="col-md-2 col-6">
                    <div className="card border-0">
                      <img
                        src=""
                        data-src="https://res.cloudinary.com/elonatech/image/upload/v1707234681/homePage/clientLogo/amp-featured-image_fincna.png"
                        className="img-fluid lazyload"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-md-2 col-6">
                    <div className="card border-0">
                      <img
                        src=""
                        data-src="https://res.cloudinary.com/elonatech/image/upload/v1707234684/homePage/clientLogo/lsg_iph8mx.png"
                        className="img-fluid lazyload"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-md-2 col-6">
                    <div className="card border-0">
                      <img
                        src=""
                        data-src="https://res.cloudinary.com/elonatech/image/upload/v1707234695/homePage/clientLogo/hv_nzxyt1.png"
                        className="img-fluid lazyload"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-md-2 col-6">
                    <div className="card border-0">
                      <img
                        src=""
                        data-src="https://res.cloudinary.com/elonatech/image/upload/v1707234749/homePage/clientLogo/kosofe_yuqg5x.png"
                        className="img-fluid lazyload"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-md-2 col-6">
                    <div className="card border-0">
                      <img
                        src=""
                        data-src="https://res.cloudinary.com/elonatech/image/upload/v1707234691/homePage/clientLogo/tru_h9afyy.png"
                        className="img-fluid lazyload"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-md-2 col-6">
                    <div className="card border-0">
                      <img
                        src=""
                        data-src="https://res.cloudinary.com/elonatech/image/upload/v1707234742/homePage/clientLogo/feii_a8rzqg.png"
                        className="img-fluid lazyload"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* other carousel items preserved similarly... */}
            <div className="carousel-item">
              <div className="container">
                <div className="row">
                  <div className="col-md-2 col-6">
                    <div className="card border-0">
                      <img
                        src=""
                        data-src="https://res.cloudinary.com/elonatech/image/upload/v1707234686/homePage/clientLogo/ireti_whpffr.png"
                        className="img-fluid lazyload"
                        alt=""
                      />
                    </div>
                  </div>
                  {/* ... */}
                </div>
              </div>
            </div>

            {/* remaining carousel items omitted for brevity but unchanged structurally */}
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* ========================================================= What They Say About Us ======================================================= */}
      <Clients />

      {/*=============================================================  Three cards ================================================================ */}
      <div className="text-center mb-5">
        <div className="container">
          <div className="row mt-5 row-sm-gutter">
            <div className="col-md-4">
              <div
                className="rounded bg-lazy h-100"
                style={{
                  backgroundImage: `url(https://res.cloudinary.com/elonatech/image/upload/v1707488914/homePage/main/User_experience_t6dbvw.png)`,
                }}
              >
                <div className="text-center">
                  <p className="p-5 text-white">
                    We offer bespoke user experience, web design, app design and
                    software development services.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="rounded bg-lazy h-100"
                style={{
                  backgroundImage: `url(https://res.cloudinary.com/elonatech/image/upload/v1707488913/homePage/main/Solution_client_expectation_doxygk.png)`,
                }}
              >
                <div className="text-center">
                  <p className="p-5 text-white">
                    We endeavor to exceed our clients' expectations with the
                    solutions we provide, at competitive prices.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="rounded bg-lazy h-100"
                style={{
                  backgroundImage: `url(https://res.cloudinary.com/elonatech/image/upload/v1707488915/homePage/main/budget_and_time_xv2dk6.png)`,
                }}
              >
                <div className="text-center text-white">
                  <p className="p-5">
                    We deliver projects within budget and deadline while
                    continuously maintain quality & standard.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================== Consult ================================================================== */}
      <nav className="" style={{ backgroundColor: "#cccccc " }}>
        <div className="container ">
          <div className="row">
            <div className="col-lg-7 snd">
              <div className="mt-5">
                <h3 className="fs-5 mt-5 fw-bold ">
                  How about a FREE Consultation on the Best Digital Marketing
                  Strategy for your Business?
                </h3>
                <p className="fs-6 mt-4">
                  Want to know how to increase your brand visibility, boost
                  audience engagement, drive traffic, increase social media
                  followers, promote your products and services online, and
                  increase sales for your business? Elonatech offers tailored
                  advice on how to reach and engage your audience better,
                  increase conversions, and maximize profit through a bespoke
                  monthly/{" "}
                  <span className="d-sm-none ttu">
                    <br />
                  </span>{" "}
                  yearly digital{" "}
                  <span className="d-sm-none ttt">
                    <br />
                  </span>
                  marketing plan for
                  <span className="d-sm-none ttu">
                    <br />
                  </span>{" "}
                  your{" "}
                  <span className="d-sm-none ttt">
                    <br />
                  </span>
                  business.
                </p>
              </div>
              {/* ConsultForm */}
              <div
                className="btn btn-danger form-controli btn-md  mt-4 mb-2 d-none d-md-inline"
                onClick={() => setShowConsultModal(true)}
              >
                Get Free Consultation
              </div>

              {showConsultModal && (
                <>
                  <div
                    className="applymodal-backdrop"
                    onClick={() => setShowConsultModal(false)}
                  ></div>
                  <div
                    className="applymodal-wrapper"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="consult-main-modal-title"
                  >
                    <div className="applymodal-box">
                      <div className="applymodal-header">
                        <div>
                          <h2
                            id="consult-main-modal-title"
                            className="applymodal-title"
                          >
                            Free Consulting
                          </h2>
                          <p className="applymodal-subtitle">
                            Tell us about your business needs.
                          </p>
                        </div>
                        <div className="applymodal-header-right">
                          <span className="applymodal-badge">Free Session</span>
                          <button
                            className="applymodal-close"
                            onClick={() => setShowConsultModal(false)}
                            aria-label="Close modal"
                          >
                            &times;
                          </button>
                        </div>
                      </div>
                      <form onSubmit={handleSubmit} className="applymodal-form">
                        <div style={{ display: "none" }} aria-hidden="true">
                          <input
                            type="text"
                            name="website"
                            value={honeypot}
                            onChange={(e) => setHoneypot(e.target.value)}
                            tabIndex={-1}
                            autoComplete="off"
                          />
                        </div>
                        <div className="applymodal-row">
                          <div className="applymodal-field">
                            <label className="applymodal-label">Name</label>
                            <input
                              type="text"
                              value={name}
                              onChange={(e) => setName(sanitizeName(e.target.value))}
                              placeholder="Your full name"
                              className="applymodal-input"
                            />
                          </div>
                          <div className="applymodal-field">
                            <label className="applymodal-label">
                              Email Address
                            </label>
                            <input
                              type="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              placeholder="you@email.com"
                              className="applymodal-input"
                            />
                          </div>
                        </div>
                        <div className="applymodal-field">
                          <label className="applymodal-label">What do you do?</label>
                          <input
                            type="text"
                            value={occupation}
                            onChange={(e) => setOccupation(e.target.value)}
                            placeholder="Your occupation or role"
                            className="applymodal-input"
                          />
                        </div>
                        <div className="applymodal-field">
                          <label className="applymodal-label">
                            What challenges do you currently face?
                          </label>
                          <textarea
                            rows={3}
                            value={challenge}
                            onChange={(e) => setChallenge(e.target.value)}
                            placeholder="Describe your current challenges..."
                            className="applymodal-input applymodal-textarea"
                          />
                        </div>
                        <div className="applymodal-field">
                          <label className="applymodal-label">
                            What would you change in your business?
                          </label>
                          <textarea
                            rows={3}
                            value={business}
                            onChange={(e) => setBusiness(e.target.value)}
                            placeholder="What improvements would you make?"
                            className="applymodal-input applymodal-textarea"
                          />
                        </div>
                        <div className="applymodal-row">
                          <div className="applymodal-field">
                            <label className="applymodal-label">
                              How much does it cost you? (in Naira)
                            </label>
                            <input
                              type="text"
                              value={cost}
                              onChange={handleChangeCost}
                              placeholder="Amount in Naira"
                              className="applymodal-input"
                            />
                          </div>
                          <div className="applymodal-field">
                            <label className="applymodal-label">
                              How much are you willing to invest? (in Naira)
                            </label>
                            <input
                              type="text"
                              value={invest}
                              onChange={handleChangeInvest}
                              placeholder="Amount in Naira"
                              className="applymodal-input"
                            />
                          </div>
                        </div>
                        <button
                          type="submit"
                          className="applymodal-submit"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Submitting..." : "Submit"}
                        </button>
                      </form>
                    </div>
                  </div>
                </>
              )}
            </div>

            <div className="col-lg-5  align-self-center fst">
              <div className="d-none d-md-inline">
                <img data-src={MDImage} className="lazyload img-fluid mt-2" alt="Md image" />
              </div>
            </div>

            <div className=" d-sm-none showOnMobile">
              <div className="row">
                <div
                  className="btn btn-danger form-controli btn-sm mt-4 mb-2 col-6 h-25 align-self-center"
                  onClick={() => setShowConsultModal(true)}
                >
                  Get Free Consultation
                </div>

                <div className="col-6">
                  <img
                    data-src={MDImage}
                    className="lazyload img-fluid"
                    alt=""
                    style={{
                      objectFit: "cover",
                      height: "200px",
                      marginLeft: "20px",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <h2 className="text-center fw-bold mt-5">Latest Products</h2>
      <div
        style={{
          backgroundColor: "#dc3545",
          height: "2px",
          width: "80px",
          margin: "auto",
        }}
      ></div>
      <div className="container-fluid mt-5">
        <div className="row mt-5 justify-content-center">
          {/* Display latest product from "Products" category */}
          {filteredProductCategory?.images?.length > 0 ? (
            <div className="col-2 px-1">
              <div
                className="border shadow-sm p-2 mb-3 bg-body product-card rounded"
                style={{
                  height: "350px",
                  display: "flex",
                  flexDirection: "column",
                  cursor: "pointer",
                }}
                onClick={() => handleProductClick(filteredProductCategory)}
              >
                <div className="text-decoration-none text-dark d-flex flex-column h-100">
                  <div
                    className="text-center"
                    style={{ height: "150px", overflow: "hidden" }}
                  >
                    <LazyLoadImage
                      src={
                        filteredProductCategory.images[0]?.url ||
                        "/fallback.jpg"
                      }
                      placeholderSrc="https://res.cloudinary.com/elonatech/image/upload/v1710503902/loaderImage/blurred_Loader_ufozvn.png"
                      className="lazyload img-fluid"
                      alt={filteredProductCategory.name || "Product image"}
                      width="150"
                      height="150"
                      style={{ objectFit: "contain", maxHeight: "150px" }}
                    />
                  </div>
                  <h5
                    className="fw-normal mt-2 text-truncate"
                    title={filteredProductCategory.name}
                  >
                    {filteredProductCategory.name}
                  </h5>
                  <p className="small mb-1">Products</p>
                  <div className="stars mb-1" style={{ color: "#f6b01e" }}>
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="bi bi-star-fill"></i>
                    ))}
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <p className="m-0 text-danger small">
                      ₦{filteredProductCategory.price?.toLocaleString() || "0"}
                    </p>
                    <i className="bi bi-cart" style={{ fontSize: "18px" }}></i>
                  </div>
                  <div className="mt-auto">
                    <button className="btn btn-sm btn-dark w-100 rounded-pill">
                      View More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            !loadingLatest && (
              <div className="col-12 text-center">
                {/* <p>No featured product available</p> */}
              </div>
            )
          )}

          {/* Display latest products from all other categories */}
          {loadingLatest ? (
            <Loading />
          ) : (
            latestProducts.map((product) =>
              product && product._id && product.slug ? (
                <div key={product._id} className="col-2 px-1">
                  <div
                    className="border shadow-sm p-2 mb-3 bg-body product-card rounded"
                    style={{
                      height: "350px",
                      display: "flex",
                      flexDirection: "column",
                      cursor: "pointer",
                    }}
                    onClick={() => handleProductClick(product)}
                  >
                    <div className="text-decoration-none text-dark d-flex flex-column h-100">
                      <div
                        className="text-center"
                        style={{ height: "150px", overflow: "hidden" }}
                      >
                        <LazyLoadImage
                          src={product.images?.[0]?.url || "/fallback.jpg"}
                          placeholderSrc="https://res.cloudinary.com/elonatech/image/upload/v1710503902/loaderImage/blurred_Loader_ufozvn.png"
                          className="lazyload img-fluid"
                          alt={product.name}
                          width="150"
                          height="150"
                          style={{ objectFit: "contain", maxHeight: "150px" }}
                        />
                      </div>
                      <h5
                        className="fw-normal mt-2 text-truncate"
                        title={product.name}
                      >
                        {product.name}
                      </h5>
                      <p className="fs-6">
                        {product.category === "Office"
                          ? "Office Equipment"
                          : product.category === "Pos"
                          ? "POS"
                          : product.category === "Network"
                          ? "Network Device"
                          : product.category === "Printer"
                          ? "Printer"
                          : product.category}
                      </p>
                      <div className="stars mb-1" style={{ color: "#f6b01e" }}>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                      </div>
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <p className="m-0 text-danger small">
                          ₦ {product.price?.toLocaleString() || "0"}
                        </p>
                        <i className="bi bi-cart" style={{ fontSize: "18px" }}></i>
                      </div>
                      <div className="mt-auto">
                        <button className="btn btn-sm btn-dark w-100 rounded-pill">
                          View More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null
            )
          )}
        </div>
      </div>

      {/*====================================================================== End  ============================================================= */}
    </>
  );
};

export default Main;