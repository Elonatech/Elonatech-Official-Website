import "./css/portfolio.css";
import computerHardware from "./captions/projects/engineer.png";
import networkEngineering from "./captions/projects/Adminstrator.png";
import structuredCabling from "./captions/projects/two.jpg";
import digitalMarketing from "./captions/projects/group_discussion.png";

// why choose us
import MD from "./captions/md_new_jnp7nj.jpg";
import { Helmet } from "react-helmet-async";

const scrollToHeader = () => {
  let tab_lists = document.querySelectorAll(".tabs_list ul li");
  let tab_items = document.querySelectorAll(".tab_item");

  tab_lists.forEach(function (list) {
    list.addEventListener("mouseover", function () {
      var tab_data = list.getAttribute("data-tc");

      tab_lists.forEach(function (list) {
        list.classList.remove("active");
      });
      list.classList.add("active");
      tab_items.forEach(function (item) {
        var tab_class = item.getAttribute("class").split(" ");
        if (tab_class.includes(tab_data)) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });
};

const Portfolio = () => {
  const services = [
    {
      title: "Computer Hardware Projects",
      description:
        "Your business works when your hardware works. While computer hardware configurations vary widely, we have worked on major categories of hardware for clients in the Medical Science, Financial, Telecoms, Aviation, ICT, Government & NGOs, etc.",
      image: computerHardware,
    },
    {
      title: "Network Engineering Projects",
      description:
        "We implement and design both complex and simple data/voice LANs for all types of organizations. Implementing a well-designed, secured enterprise network and utilizing the right combination of IT solutions so as to drive that business to the desired level.",
      image: networkEngineering,
    },
    {
      title: "Infrastructure & Integration",
      description:
        "We provide the infrastructure that supports the performance of organizations' network. It is the most critical part of your voice and data network. Choosing a qualified provider is a critical decision. We use only high-end quality products in our structured wiring solutions.",
      image: structuredCabling,
    },
    {
      title: "Digital Marketing Campaigns",
      description:
        "Developing effective digital marketing in any market is tough, demanding, & technical. We achieve this by working closely with clients to craft & deliver successful & oriented online marketing strategies which integrate customer needs, business objectives & technology.",
      image: digitalMarketing,
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Our Portfolio - Web Development, Network Engineering & Digital
          Marketing Solutions | Tech Solutions
        </title>
        <meta
          name="description"
          content="From website development, Computer Hardware Projects Network Engineering Infrastructure & System Integration Digital Marketing Campaigns
          digital marketing campaigns, network management to graphics etc... We pride ourselves to getting it done 24/7 Support "
        />
        <link rel="canonical" href="https://elonatech.com.ng/portfolio" />
      </Helmet>

      {/*================================================================ header ===========================================================*/}
      <div class="container-fluid our-portfolio-section">
        <div class="text-content">
          <h2 class="wow zoomIn" data-wow-delay="0.1s">
            Our Portfolio
          </h2>
          <h5 data-wow-delay="0.2s">
            At the heart of everything we do is a passion to deliver success
            stories.
          </h5>
          <p class="lead" data-wow-delay="0.2s">
            From website development, digital marketing campaigns, network
            management to graphics etc... We pride ourselves to getting it
            done!!
          </p>
        </div>
      </div>

      {/*============================================= why choose us ======================================================================*/}
      <div class="container py-5">
        <div
          class=" text-center position-relative pb-3 mb-5"
          style={{ minWidth: "100px" }}
        >
          <h3 class="fw-bold  text-uppercase" style={{ color: "#34548c" }}>
            Why Choose Us
          </h3>
          <h2 class="mb-0 fw-bold">
            We Are Here to Grow Your Business <br /> Exponentially
          </h2>
        </div>
        <div class="row g-5">
          <div class="col-lg-4">
            <div class="row g-5">
              <div
                class="col-12 col-md-6 col-lg-12 wow zoomIn"
                data-wow-delay="0.2s"
              >
                <div
                  class="rounded d-flex align-items-center justify-content-center mb-3"
                  style={{
                    width: "60px",
                    height: "60px",
                    backgroundColor: "#34548c",
                  }}
                >
                  <i class="fa fa-cubes text-white"></i>
                </div>
                <h4>Best In Industry</h4>
                <p class="mb-0">
                  We are committed to finding advanced solutions to problems and
                  igniting the world with smarter and brighter solutions
                </p>
              </div>
              <div
                class="col-12 col-md-6 col-lg-12 wow zoomIn"
                data-wow-delay="0.6s"
              >
                <div
                  class="rounded d-flex align-items-center justify-content-center mb-3"
                  style={{
                    width: "60px",
                    height: "60px",
                    backgroundColor: "#34548c",
                  }}
                >
                  <i class="fa fa-award text-white"></i>
                </div>
                <h4>Our Work Speaks For Itself</h4>
                <p class="mb-0">
                  Nothing speaks as loud as continuously executing at a high
                  level. It shows we have a well-established process. It shows
                  we can manage your brand.
                </p>
              </div>
            </div>
          </div>
          <div
            class="col-lg-4  wow zoomIn"
            data-wow-delay="0.9s"
            style={{ minHeight: "350px" }}
          >
            <div class="position-relative h-100">
              <img
                class="position-absolute w-100 h-100 rounded wow zoomIn lazyload"
                data-wow-delay="0.1s"
                data-src={MD}
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div class="col-lg-4">
            <div class="row g-5">
              <div
                class="col-12 col-md-6 col-lg-12 wow zoomIn"
                data-wow-delay="0.4s"
              >
                <div
                  class="rounded d-flex align-items-center justify-content-center mb-3"
                  style={{
                    width: "60px",
                    height: "60px",
                    backgroundColor: "#34548c",
                  }}
                >
                  <i class="fa fa-users-cog text-white"></i>
                </div>
                <h4>Professional Staff</h4>
                <p class="mb-0">
                  We are typically responsible for providing specialized
                  services or expert professional solutions to organizations
                </p>
              </div>
              <div
                class="col-12 col-md-6 col-lg-12 wow zoomIn"
                data-wow-delay="0.8s"
              >
                <div
                  class="rounded d-flex align-items-center justify-content-center mb-3"
                  style={{
                    width: "60px",
                    height: "60px",
                    backgroundColor: "#34548c",
                  }}
                >
                  <i class="fa fa-phone-alt text-white"></i>
                </div>
                <h4>24/7 Support</h4>
                <p class="mb-0">
                  Our support team is available round the clock to assist
                  customers with their queries and concerns.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*======================================================= feature ===================================================================*/}
      <section id="portfolio" class="portfolio">
        <h2 className="fw-bold text-center mb-3">
          Some of The Brands We Manage
        </h2>
        <div class="container mb-5">
          <ul class="nav nav-tabs row bg-secondary  d-flex">
            <li class="nav-item col-6 col-md-2 ">
              <a
                class="nav-link computer-bg active show"
                data-bs-toggle="tab"
                data-bs-target="#tab-1"
              >
                <h5 className="fw-bold">Remaben</h5>
              </a>
            </li>
            <li class="nav-item  col-6 col-md-2 ">
              <a
                class="nav-link computer-bg"
                data-bs-toggle="tab"
                data-bs-target="#tab-2"
              >
                <h5 className="fw-bold">Elonatech</h5>
              </a>
            </li>
            <li class="nav-item  col-6 col-md-2 ">
              <a
                class="nav-link computer-bg"
                data-bs-toggle="tab"
                data-bs-target="#tab-3"
              >
                <h5 className="fw-bold">Safebrooks</h5>
              </a>
            </li>
            <li class="nav-item  col-6 col-md-2 ">
              <a
                class="nav-link computer-bg"
                data-bs-toggle="tab"
                data-bs-target="#tab-4"
              >
                <h5 className="fw-bold">Ozone</h5>
              </a>
            </li>
            <li class="nav-item  col-6 col-md-2 ">
              <a
                class="nav-link computer-bg"
                data-bs-toggle="tab"
                data-bs-target="#tab-5"
              >
                <h5 className="fw-bold">Western</h5>
              </a>
            </li>
            <li class="nav-item  col-6 col-md-2 ">
              <a
                class="nav-link computer-bg"
                data-bs-toggle="tab"
                data-bs-target="#tab-6"
              >
                <h5 className="fw-bold">Pfn</h5>
              </a>
            </li>
          </ul>

          <div class="tab-content " data-wow-delay="0.8s">
            {/*============================================================= Remaben =================================================*/}
            <div class="tab-pane active show" id="tab-1">
              <div class="row gy-4">
                <div class="col-lg-12 order-2 order-lg-1">
                  <div className="container mb-5">
                    <div className="row g-0">
                      <div className="col-md-2">
                        <div className="card rounded-0">
                          <div class="ts_body ">
                            <div class="tabs_list mt-3 mb-5">
                              <ul class=" text-center mb-5 pt-4 p-2">
                                <li
                                  data-tc="tab_item_1"
                                  class="dropdown-item mt-2 p-3 col-6 col-md-4 col-lg-2  active"
                                >
                                  {" "}
                                  <h6>Web Design</h6>
                                </li>
                                <li
                                  data-tc="tab_item_2"
                                  onMouseEnter={scrollToHeader}
                                  class="dropdown-item col-6 col-md-4 col-lg-2 mt-2 p-3 pe-5"
                                >
                                  <h6>Motion Graphic</h6>
                                </li>
                                <li
                                  data-tc="tab_item_3"
                                  class="dropdown-item mt-2 p-4 col-6 col-md-4 col-lg-2 ps-1"
                                >
                                  <h6>Digital Marketing</h6>
                                </li>
                                <li
                                  data-tc="tab_item_4"
                                  class="dropdown-item col-6 mt-2 p-3 col-6 col-md-4 col-lg-2"
                                  style={{ marginBottom: "21px" }}
                                >
                                  <h6>Branding</h6>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-10">
                        <div className="card rounded-0">
                          <div class="ts_body">
                            <div class="tabs_content">
                              {/*============================================================================= web ===========================================================*/}
                              <div
                                class="tab_body"
                                style={{ overflow: "auto", height: "30rem" }}
                              >
                                <div
                                  class="tab_item tab_item_1"
                                  style={{ minHeight: "100px" }}
                                >
                                  <div className="row">
                                    <div className="col-md-12">
                                      <div className="card">
                                        <img
                                          data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1784904763/remeban_new_j3fijv_eo2wlv.jpg"
                                          alt=""
                                          className="img-fluid lazyload"
                                        />
                                      </div>
                                      ``
                                    </div>
                                    <div className="col-md-7 mt-5">
                                      <div className="">
                                        <img
                                          data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783690252/image_13_.885229344d4f7190611a_1_pzmzlf_jjszxy.png"
                                          className="img-fluid shadow lazyload"
                                          alt=""
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-5 mt-5">
                                      <div className="shadow">
                                        <img
                                          data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783690247/remaben-3333.6bf2a5e13755b8d3a90c_kqw08s_puh2vm.jpg"
                                          className="img-fluid rounded lazyload shadow"
                                          alt=""
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-6 mt-5">
                                      <div className="">
                                        <img
                                          data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783690242/web2.711211b78ebdaad7caa2_1_qsyknu_etenfa.png"
                                          className="img-fluid rounded lazyload shadow"
                                          alt=""
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-6 mt-5">
                                      <div className="">
                                        <img
                                          data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783690236/web3.48503773bb5890237fcc_1_o5jiqs_yseuz3.png"
                                          className="img-fluid rounded lazyload shadow"
                                          alt=""
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/*================================================================= Motion graphics ===========================================================*/}
                                <div
                                  class="tab_item tab_item_2"
                                  style={{ display: "none" }}
                                >
                                  <div className="text-center">
                                    <iframe
                                      width="905"
                                      height="450"
                                      className="motionGraphicVideo lazyload"
                                      data-src="https://www.youtube.com/embed/RKEwt_8Kk6A?si=DhPg9CQUn6lddURC"
                                      title="YouTube video player"
                                      frameborder="0"
                                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                      allowfullscreen
                                    ></iframe>
                                  </div>
                                </div>

                                {/*=============================================================== Digital marketing ===========================================================*/}
                                <div
                                  class="tab_item tab_item_3"
                                  style={{ display: "none" }}
                                >
                                  <div className="container">
                                    <div className="row">
                                      <div className="col-md-4">
                                        <div className="shadow">
                                          <img
                                            data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783690327/digital6.e32f6a20512bf7f4a446_lsoumk_lia56d.jpg"
                                            className="img-fluid lazyload rounded"
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-4">
                                        <div className="shadow">
                                          <img
                                            data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783690322/digital5.5c6d288e85583e24f034_wlf2zm_gdcszk.jpg"
                                            className="img-fluid lazyload rounded"
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-4">
                                        <div className="shadow">
                                          <img
                                            data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783690322/digital5.5c6d288e85583e24f034_wlf2zm_gdcszk.jpg"
                                            className="img-fluid lazyload rounded"
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-4 mt-4">
                                        <div className="shadow">
                                          <img
                                            data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783690310/digital3.b36a8219b5ed4793c918_tbfjkd_b44xhp.jpg"
                                            className="img-fluid lazyload rounded"
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-4 mt-4">
                                        <div className="shadow">
                                          <img
                                            data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783690303/digital2.ac6b48faa0f11021e53d_l31c1t_p9amjg.jpg"
                                            className="img-fluid lazyload rounded"
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-4 mt-4">
                                        <div className="shadow">
                                          <img
                                            data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783690303/digital2.ac6b48faa0f11021e53d_l31c1t_p9amjg.jpg"
                                            className="img-fluid lazyload rounded"
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-4 mt-4">
                                        <div className="shadow">
                                          <img
                                            data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783690288/sabddf111_tgroxq_otsfxr.png"
                                            className="img-fluid lazyload rounded"
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-4 mt-4">
                                        <div className="shadow">
                                          <img
                                            data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783690257/digital7.ef921aab252084237a7c_qd7ai9_sfemt9.jpg"
                                            className="img-fluid lazyload rounded"
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/*============================================================ Branding =======================================================================*/}
                                <div
                                  class="tab_item tab_item_4"
                                  style={{ display: "none" }}
                                >
                                  <div className="container">
                                    <div className="row">
                                      <div className="col-md-4">
                                        <div className="shadow">
                                          <img
                                            data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783690083/Remaben_-_Table_calender_2_a4tsuy_qkw9nz.jpg"
                                            className="img-fluid lazyload rounded"
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-4">
                                        <div className="shadow">
                                          <img
                                            data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783690097/Pin_badage_jxqkmh_rvbjme.jpg"
                                            className="img-fluid lazyload rounded"
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-4">
                                        <div className="shadow">
                                          <img
                                            data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783690088/Remaben_-_Table_calender_1_jvnleo_d8bmti.jpg"
                                            className="img-fluid lazyload rounded"
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-4 mt-4">
                                        <div className="shadow">
                                          <img
                                            data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783690078/Lab_Coat_qqwzdc_ej9aag.jpg"
                                            className="img-fluid lazyload rounded"
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-4 mt-4">
                                        <div className="shadow">
                                          <img
                                            data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783690071/T_shirt_-_2_k2pxza_wg76ce.jpg"
                                            className="img-fluid lazyload rounded"
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-4 mt-4">
                                        <div className="shadow">
                                          <img
                                            data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783690065/T_shirt_jqsvtz_aobq3m.jpg"
                                            className="img-fluid lazyload rounded"
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*================================================================== Elonatech ================================================*/}
            <div class="tab-pane" id="tab-2">
              <div class="row gy-4">
                <div class="col-lg-12 order-2 order-lg-1">
                  <div className="container mb-5">
                    <div className="row g-0">
                      <div className="col-md-2">
                        <div className="card rounded-0">
                          <div class="ts_body">
                            <div class="tabs_list mt-3 mb-5">
                              <ul class=" text-center mb-5 pt-4 p-2">
                                <li
                                  data-tc="tab_item_1"
                                  class="dropdown-item mt-2 p-3 active"
                                >
                                  {" "}
                                  <h6>Web Design</h6>
                                </li>
                                <li
                                  data-tc="tab_item_2"
                                  onMouseEnter={scrollToHeader}
                                  class="dropdown-item mt-2 p-3 pe-5"
                                >
                                  <h6>Motion Graphic</h6>
                                </li>
                                <li
                                  data-tc="tab_item_3"
                                  onMouseEnter={scrollToHeader}
                                  class="dropdown-item mt-2 p-4 col-6 col-md-4 col-lg-2 ps-1"
                                >
                                  <h6>Digital Marketing</h6>
                                </li>
                                <li
                                  data-tc="tab_item_4"
                                  class="dropdown-item mt-2 p-3"
                                  style={{ marginBottom: "37px" }}
                                >
                                  <h6>Branding</h6>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-10">
                        <div className="card rounded-0">
                          <div class="ts_body">
                            <div class="tabs_content">
                              <div
                                class="tab_body "
                                style={{ overflow: "auto", height: "30rem" }}
                              >
                                {/*========================================================== web ===========================================================*/}
                                <div
                                  class="tab_item tab_item_1"
                                  style={{ minHeight: "100px" }}
                                >
                                  <div className="row">
                                    <div className="col-md-12 mb-3 ">
                                      <div className="shadow">
                                        <img
                                          data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783690002/2024_template_for_web_elonatech_mrl2wc_caj3sg.jpg"
                                          className="img-fluid lazyload rounded"
                                          alt=""
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-12">
                                      <div className="shadow">
                                        <img
                                          data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783690021/poty-2_tld6ig_yuyatn.png"
                                          alt=""
                                          className="img-fluid lazyload"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-6 mt-5">
                                      <div className="shadow">
                                        <img
                                          data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783690009/Untitled-2_lbufe5_hdm71s.jpg"
                                          className="img-fluid lazyload rounded"
                                          alt=""
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-6 mt-5">
                                      <div className="shadow">
                                        <img
                                          data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783689977/3_fuajze_dkwusv.jpg"
                                          className="img-fluid lazyload rounded"
                                          alt=""
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-12  mt-5">
                                      <div className="shadow">
                                        <img
                                          data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783690014/1_rfm6ch_zonyrf.jpg"
                                          className="img-fluid lazyload rounded"
                                          alt=""
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                {/*========================================================== motion graphics ==================================================*/}
                                <div
                                  class="tab_item tab_item_2"
                                  style={{ display: "none" }}
                                >
                                  <div className="text-center">
                                    <iframe
                                      width="905"
                                      height="450"
                                      className="motionGraphicVideo lazyload"
                                      data-src="https://www.youtube.com/embed/7p6FQeZEPNQ?si=PKt7zweMxDnT8Wpj"
                                      title="YouTube video player"
                                      frameborder="0"
                                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                      allowfullscreen
                                    ></iframe>

                                    <iframe
                                      width="905"
                                      height="450"
                                      className="motionGraphicVideo lazyload"
                                      data-src="https://www.youtube.com/embed/hecFq98Uoq4?si=cIX9m7bz9KpuPfmi"
                                      title="YouTube video player"
                                      frameborder="0"
                                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                      allowfullscreen
                                    ></iframe>

                                    <iframe
                                      width="905"
                                      height="450"
                                      className="motionGraphicVideo lazyload"
                                      data-src="https://www.youtube.com/embed/EmkNTtbWmic?si=_tz-YlXUrNiL2xsp"
                                      title="YouTube video player"
                                      frameborder="0"
                                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                      allowfullscreen
                                    ></iframe>

                                    <iframe
                                      width="905"
                                      height="450"
                                      className="motionGraphicVideo lazyload"
                                      data-src="https://www.youtube.com/embed/jE_-CUX0QOI?si=jkP_prwmyLKuu136"
                                      title="YouTube video player"
                                      frameborder="0"
                                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                      allowfullscreen
                                    ></iframe>

                                    <iframe
                                      width="905"
                                      height="450"
                                      className="motionGraphicVideo lazyload"
                                      data-src="https://www.youtube.com/embed/ACa2bWgmYr4?si=pEEHl3LudvJIFkzh"
                                      title="YouTube video player"
                                      frameborder="0"
                                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                      allowfullscreen
                                    ></iframe>
                                  </div>
                                </div>
                                {/*================================================================== Digital marketing ===============================================*/}
                                <div
                                  class="tab_item tab_item_3"
                                  style={{ display: "none" }}
                                >
                                  <div className="container">
                                    <div className="row">
                                      <div className="col-md-4">
                                        <div className="shadow">
                                          <img
                                            data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1784905674/jpeg-optimizer_digital-marketing-elonatech-555_gaobcl_v4hlgy.jpg"
                                            className="img-fluid  lazyload rounded"
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-4">
                                        <div className="shadow">
                                          <img
                                            data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1784905674/jpeg-optimizer_digital-marketing-elonatech-555_gaobcl_v4hlgy.jpg"
                                            className="img-fluid lazyload rounded"
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-4">
                                        <div className="shadow">
                                          <img
                                            data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1784905757/jpeg-optimizer_elonatech-bulk-sales_duyquu_pelkfl.jpg"
                                            className="img-fluid lazyload rounded"
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-4 mt-4">
                                        <div className="shadow">
                                          <img
                                            data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783692370/jpeg-optimizer_elonatech-website-design_qbtvo8_eebzav.jpg"
                                            className="img-fluid lazyload rounded"
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-4 mt-4">
                                        <div className="shadow">
                                          <img
                                            data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783692355/jpeg-optimizer_Network_Administration_Implementation_k1ek5g_c59sph.jpg"
                                            className="img-fluid lazyload rounded"
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-4 mt-4">
                                        <div className="shadow">
                                          <img
                                            data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783692281/jpeg-optimizer_Specialized_Computer_Repair_Service_fepuxl_htjy9l.png"
                                            className="img-fluid lazyload rounded"
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-4 mt-4">
                                        <div className="shadow">
                                          <img
                                            data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783692336/jpeg-optimizer_We_are_the_p1s6xz_y8abgv.png"
                                            className="img-fluid lazyload rounded"
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-4 mt-4">
                                        <div className="shadow">
                                          <img
                                            data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783692349/jpeg-optimizer_Wwebsite-2-elonatech-new_vy0cm9_yn4ssd.jpg"
                                            className="img-fluid lazyload rounded"
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/*=========================================================================== branding =============================================================*/}
                                <div
                                  class="tab_item tab_item_4"
                                  style={{ display: "none" }}
                                >
                                  <div className="container">
                                    <div className="row">
                                      <div className="col-md-4">
                                        <div className="">
                                          <img
                                            data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783692268/jpeg-optimizer_bangetelo2_dx0kcc_tugurx.jpg"
                                            className="img-fluid lazyload rounded"
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-4">
                                        <div className="">
                                          <img
                                            data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783692252/jpeg-optimizer_elona_jersey_pwi8pu_isj9ze.jpg"
                                            className="img-fluid lazyload rounded"
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-4">
                                        <div className="">
                                          <img
                                            src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783692170/jpeg-optimizer_elona_kit_bjtbeb_kjy1wz.jpg"
                                            className="img-fluid lazyload rounded"
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-4 mt-4">
                                        <div className="">
                                          <img
                                            data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783692122/jpeg-optimizer_elona_paper_bag_jhrcpy_nvmy1v.jpg"
                                            className="img-fluid lazyload rounded"
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-4 mt-4">
                                        <div className="">
                                          <img
                                            data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783692098/jpeg-optimizer_elona_sationaries_brand_sr9ook_iu0dxi.jpg"
                                            className="img-fluid lazyload rounded"
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-4 mt-4">
                                        <div className="">
                                          <img
                                            data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783692070/jpeg-optimizer_elonatech_Business_cards_preview_gbfgas_h3nnlo.jpg"
                                            className="img-fluid lazyload rounded"
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-4 mt-4">
                                        <div className="">
                                          <img
                                            data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783692087/jpeg-optimizer_cup_jokvgp_mnn3uz.png"
                                            className="img-fluid lazyload rounded"
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*================================================================ Safebrook ==================================================*/}
            <div class="tab-pane" id="tab-3">
              <div class="row gy-4">
                <div class="col-lg-12 order-2 order-lg-1">
                  <div className="container mb-5">
                    <div className="row g-0">
                      <div className="col-md-2">
                        <div className="card rounded-0">
                          <div class="ts_body pt-4 mb-5">
                            <div class="tabs_list">
                              <ul class=" text-center mb-5 p-2">
                                <li
                                  data-tc="tab_item_1"
                                  class="dropdown-item mt-2 active p-3 "
                                >
                                  {" "}
                                  <h6>Web Design</h6>
                                </li>
                                <li
                                  data-tc="tab_item_2"
                                  onMouseEnter={scrollToHeader}
                                  class="dropdown-item mt-2 p-3 pe-5"
                                >
                                  <h6>Motion Graphic</h6>
                                </li>
                                <li
                                  data-tc="tab_item_3"
                                  class="dropdown-item mt-2 p-4 ps-1"
                                >
                                  <h6>Digital Marketing</h6>
                                </li>
                                <li
                                  data-tc="tab_item_4"
                                  class="dropdown-item mt-2 p-3"
                                  style={{ marginBottom: "29px" }}
                                >
                                  <h6>Branding</h6>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-10">
                        <div className="card rounded-0">
                          <div class="ts_body">
                            <div class="tabs_content">
                              <div
                                class="tab_body"
                                style={{ overflow: "auto", height: "30rem" }}
                              >
                                <div
                                  class="tab_item tab_item_1"
                                  style={{ minHeight: "100px" }}
                                >
                                  {/*=======================================  web =====================================*/}
                                  <div className="row">
                                    <div className="col-md-12">
                                      <div className="shadow">
                                        <img
                                          data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783691499/web_template_2_safebrooks_gnptyq_obfw9g.jpg"
                                          alt=""
                                          className="img-fluid lazyload"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-12 mt-5">
                                      <div className="shadow">
                                        <img
                                          data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783691520/3_m2z2tw_yvcnhk.jpg"
                                          alt=""
                                          className="img-fluid lazyload"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-6 mt-5">
                                      <div className="">
                                        <img
                                          data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783691487/1_xuicmd_nomnk2.jpg"
                                          className="img-fluid rounded lazyload shadow"
                                          alt=""
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-6 mt-5">
                                      <div className="">
                                        <img
                                          data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783691528/4_yxqfqb_mj5lht.jpg"
                                          className="img-fluid rounded lazyload shadow"
                                          alt=""
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-12 mt-2 mb-5">
                                      <div className="">
                                        <img
                                          data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783691512/2_isks2h_cjv2jq.jpg"
                                          alt=""
                                          className="img-fluid lazyload"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div
                                  class="tab_item tab_item_2"
                                  style={{ display: "none" }}
                                >
                                  <div className="text-center">
                                    <iframe
                                      width="905"
                                      height="450"
                                      className="motionGraphicVideo lazyload"
                                      data-src="https://www.youtube.com/embed/fMAjMMCg_ls?si=kRloBeVzQjtO8EsO"
                                      title="YouTube video player"
                                      frameborder="0"
                                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                      allowfullscreen
                                    ></iframe>

                                    <iframe
                                      width="905"
                                      height="450"
                                      className="motionGraphicVideo lazyload"
                                      data-src="https://www.youtube.com/embed/XdWrJVY2wQY?si=d7DylbDfRQV9OhrS"
                                      title="YouTube video player"
                                      frameborder="0"
                                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                      allowfullscreen
                                    ></iframe>

                                    <iframe
                                      width="905"
                                      height="450"
                                      className="motionGraphicVideo lazyload"
                                      data-src="https://www.youtube.com/embed/5TsDCpWZUEs?si=AWNI3fJgM581UXV5"
                                      title="YouTube video player"
                                      frameborder="0"
                                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                      allowfullscreen
                                    ></iframe>

                                    <iframe
                                      width="905"
                                      height="450"
                                      className="motionGraphicVideo lazyload"
                                      data-src="https://www.youtube.com/embed/LEBQXiPK1XM?si=_EsbWxhCCIFXir9x"
                                      title="YouTube video player"
                                      frameborder="0"
                                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                      allowfullscreen
                                    ></iframe>
                                  </div>
                                </div>
                                {/*=============================================================== digital============================================= */}
                                <div
                                  class="tab_item tab_item_3"
                                  style={{ display: "none" }}
                                >
                                  <div className="container">
                                    <div className="row">
                                      <div className="col-md-4">
                                        <div className="shadow">
                                          <img
                                            data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783691558/d6b6b8b73_wxttf0_xksgq6.jpg"
                                            className="img-fluid rounded lazyload"
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-4">
                                        <div className="shadow">
                                          <img
                                            data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783691540/00ace_uzvg6k_x8myux.jpg"
                                            className="img-fluid rounded lazyload"
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-4">
                                        <div className="shadow">
                                          <img
                                            data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783691545/0aa70382f79a_uxvqyf_fpnvbu.jpg"
                                            className="img-fluid rounded lazyload"
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-4 mt-4">
                                        <div className="shadow">
                                          <img
                                            data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783691552/765d1bb1e5_xnhuqx_mltdrx.png"
                                            className="img-fluid rounded lazyload"
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-4">
                                        <div className="shadow">
                                          <img
                                            data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783691533/Untitled-1_s30pe4_mjaymj.png"
                                            className="img-fluid rounded lazyload"
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-4 mt-4">
                                        <div className="shadow">
                                          <img
                                            data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783691552/765d1bb1e5_xnhuqx_mltdrx.png"
                                            className="img-fluid rounded lazyload"
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/*========================================================================= Brand ================================================== */}
                                <div
                                  class="tab_item tab_item_4"
                                  style={{ display: "none" }}
                                >
                                  <div className="container">
                                    <div className="row jsutify-centent-md-centent">
                                      <div className="col-md-6">
                                        <div className="">
                                          <img
                                            data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783691942/Safebrooks_complimentary_card_back_v2ywau_xl28iw.jpg"
                                            className="img-fluid lazyload rounded"
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-6">
                                        <div className="">
                                          <img
                                            data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783692053/ut-1_farjuc_ldg9c4.jpg"
                                            className="img-fluid lazyload rounded"
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-4 mt-4">
                                        <div className="">
                                          <img
                                            data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1784906487/safebrook_book_desi_nxj2ch_kdddzk.jpg"
                                            className="img-fluid lazyload rounded"
                                            alt=""
                                          />
                                          <div className="text-center mt-5">
                                            <img
                                              data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783691570/Safebrooks_jbhrtz_mtrkir.png"
                                              className="img-fluid lazyload rounded"
                                              alt=""
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-md-4 mt-4">
                                        <div className="">
                                          <img
                                            data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783691732/SAFEBROOK-2_g3khqt_xe1dad.jpg"
                                            className="img-fluid lazyload rounded"
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-4 mt-4">
                                        <div className="">
                                          <img
                                            data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783692015/Safebrooks_ID_Back_s9swir_wi82v5.jpg"
                                            className="img-fluid lazyload rounded"
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-4 mt-4">
                                        <div className="">
                                          <img
                                            data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783691576/Nnenna_Nkkwo_ID._jqyqpm_mdewdo.jpg"
                                            className="img-fluid lazyload rounded"
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-4 mt-4">
                                        <div className="">
                                          <img
                                            data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783691564/2_1_o5cxsj_dxbtfe.png"
                                            className="img-fluid lazyload rounded"
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*================================================================ Ozone ======================================================*/}
            <div class="tab-pane" id="tab-4">
              <div class="row gy-4">
                <div class="col-lg-12 order-2 order-lg-1">
                  <div className="container mb-5">
                    <div className="row g-0">
                      <div className="col-md-2">
                        <div className="card rounded-0">
                          <div class="ts_body mb-5">
                            <div class="tabs_list">
                              <ul class=" text-center mb-5 pt-4 p-2">
                                <li
                                  data-tc="tab_item_1"
                                  class="dropdown-item mt-2 p-3 active"
                                >
                                  {" "}
                                  <h6>Web Design</h6>
                                </li>
                                <li
                                  data-tc="tab_item_2"
                                  onMouseEnter={scrollToHeader}
                                  class="dropdown-item mt-2 p-3 pe-5"
                                >
                                  <h6>Motion Graphic</h6>
                                </li>
                                <li
                                  data-tc="tab_item_3"
                                  class="dropdown-item mt-2 p-4 ps-1"
                                >
                                  <h6>Digital Marketing</h6>
                                </li>
                                <li
                                  data-tc="tab_item_4"
                                  class="dropdown-item mt-2 p-3"
                                  style={{ marginBottom: "21px" }}
                                >
                                  <h6>Branding</h6>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-10">
                        <div className="card rounded-0">
                          <div class="ts_body">
                            <div class="tabs_content">
                              {/*============================================================ ozone ==========================================*/}
                              <div
                                class="tab_body"
                                style={{ overflow: "auto", height: "29rem" }}
                              >
                                {/*===================================================== web ==================================================*/}
                                <div
                                  class="tab_item tab_item_1"
                                  style={{ minHeight: "100px" }}
                                >
                                  <div className="row">
                                    <div className="col-md-12">
                                      <div className="">
                                        <img
                                          data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783692403/2024_template_for_web_ozone_cinema_kkcxzo_eewatk.jpg"
                                          className="img-fluid lazyload rounded shadow"
                                          alt=""
                                        />
                                      </div>
                                    </div>

                                    <div className="col-md-12 mt-5">
                                      <div className="">
                                        <img
                                          data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783692414/4_ykd3jc_zl5wgu.jpg"
                                          className="img-fluid lazyload rounded shadow"
                                          alt=""
                                        />
                                      </div>
                                    </div>

                                    <div className="col-md-6 mt-5">
                                      <div className="">
                                        <img
                                          data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783692441/1_k9y17u_hn5qtn.jpg"
                                          className="img-fluid lazyload shadow"
                                          alt=""
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-6 mt-5">
                                      <div className="shadow">
                                        <img
                                          data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783692396/3_agd1q2_bllcku.jpg"
                                          className="img-fluid lazyload rounded shadow"
                                          alt=""
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-12 mt-5">
                                      <div className="">
                                        <img
                                          data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783692425/2_ts94bm_qm2yvd.jpg"
                                          alt=""
                                          className="img-fluid lazyload"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                {/*====================================================== motion grahic ======================================= */}
                                <div
                                  class="tab_item tab_item_2"
                                  style={{ display: "none" }}
                                >
                                  <div className="text-center">
                                    <iframe
                                      width="905"
                                      height="450"
                                      className="motionGraphicVideo lazyload"
                                      data-src="https://www.youtube.com/embed/VOLpQA0j744?si=GYFzTisTIKC3hwvf"
                                      title="YouTube video player"
                                      frameborder="0"
                                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                      allowfullscreen
                                    ></iframe>

                                    <iframe
                                      width="905"
                                      height="450"
                                      className="motionGraphicVideo lazyload"
                                      data-src="https://www.youtube.com/embed/nDCK0wk0kQY?si=xezoDj4BHYDULwd5"
                                      title="YouTube video player"
                                      frameborder="0"
                                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                      allowfullscreen
                                    ></iframe>

                                    <iframe
                                      width="905"
                                      height="450"
                                      className="motionGraphicVideo lazyload"
                                      data-src="https://www.youtube.com/embed/Sd0HBnKO7Sg?si=bWnDLTCRsh3lQDKc"
                                      title="YouTube video player"
                                      frameborder="0"
                                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                      allowfullscreen
                                    ></iframe>

                                    <iframe
                                      width="905"
                                      height="450"
                                      className="motionGraphicVideo lazyload"
                                      data-src="https://www.youtube.com/embed/hdWulRpSsb8?si=9qCGvY5aBQ5bwvor"
                                      title="YouTube video player"
                                      frameborder="0"
                                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                      allowfullscreen
                                    ></iframe>
                                  </div>
                                </div>

                                {/*========================================================= digital ================================================*/}
                                <div
                                  class="tab_item tab_item_3"
                                  style={{ display: "none" }}
                                >
                                  <div className="container">
                                    <div className="row">
                                      <div className="col-md-6">
                                        <div className="">
                                          <img
                                            data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783692802/jpeg-optimizer_ozone-cinema-independence-day-design_bouvoy_mkrgl3.jpg"
                                            className="img-fluid lazyload rounded"
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-6">
                                        <div className="">
                                          <img
                                            data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783692504/jpeg-optimizer_biodun_okeowo_fire_wnasek_ouni4j.png"
                                            className="img-fluid lazyload rounded"
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                      {/*=================================================================================================================  */}
                                      <div className="col-md-4 mt-4">
                                        <div className="">
                                          <img
                                            data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783692496/jpeg-optimizer_The-Marvel-movie-premiere-new_xji8ls_ntcqze.jpg"
                                            className="img-fluid lazyload rounded"
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-8 mt-4">
                                        <div className="">
                                          <img
                                            data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783692451/jpeg-optimizer_ozone-treasure-hunt_z4l3ei_wngayi.jpg"
                                            className="img-fluid lazyload rounded"
                                            alt=""
                                          />
                                        </div>
                                      </div>

                                      {/*===================================================================================================================  */}
                                      <div className="col-md-4 mt-4">
                                        <div className="">
                                          <img
                                            data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783692741/jpeg-optimizer_ozone-cinema-day_clsa4e_m0z47s.jpg"
                                            className="img-fluid rounded lazyload"
                                            alt=""
                                          />
                                        </div>
                                      </div>

                                      <div className="col-md-4 mt-4">
                                        <div className="">
                                          <img
                                            data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1784907181/jpeg-optimizer_mission-impossible-promo_d7wciw_rbkxz0.png"
                                            className="img-fluid rounded lazyload"
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-4 mt-4">
                                        <div className="">
                                          <img
                                            data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783692533/jpeg-optimizer_concessions_2_zbw0g9_gcv4aw.png"
                                            className="img-fluid rounded lazyload"
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-4 mt-4">
                                        <div className="">
                                          <img
                                            data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783692522/jpeg-optimizer_Blue-bettle-movie-poster_ox0mhj_g7cq9g.jpg"
                                            className="img-fluid rounded lazyload"
                                            alt=""
                                          />
                                        </div>
                                      </div>

                                      <div className="col-md-4 mt-4">
                                        <div className="">
                                          <img
                                            data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783692661/jpeg-optimizer_monday-special-new-2_sglt8g_c6lmbk.jpg"
                                            className="img-fluid rounded lazyload"
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  class="tab_item tab_item_4"
                                  style={{ display: "none" }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*=============================================================== Western buckland ============================================*/}
            <div class="tab-pane" id="tab-5">
              <div class="row gy-4">
                <div class="col-lg-12 order-2 order-lg-1">
                  <div className="container mb-5">
                    <div className="row g-0">
                      <div className="col-md-2">
                        <div className="card rounded-0">
                          <div class="ts_body mb-5">
                            <div class="tabs_list">
                              <ul class=" text-center mb-5 pt-4 p-2">
                                <li
                                  data-tc="tab_item_1"
                                  class="dropdown-item mt-2 p-3 active "
                                >
                                  {" "}
                                  <h6>Web Design</h6>
                                </li>
                                <li
                                  data-tc="tab_item_2"
                                  onMouseEnter={scrollToHeader}
                                  class="dropdown-item mt-2 p-3 pe-5"
                                >
                                  <h6>Motion Graphic</h6>
                                </li>
                                <li
                                  data-tc="tab_item_3"
                                  class="dropdown-item mt-2 p-4 ps-1"
                                >
                                  <h6>Digital Marketing</h6>
                                </li>
                                <li
                                  data-tc="tab_item_4"
                                  class="dropdown-item mt-2 p-3"
                                  style={{ marginBottom: "21px" }}
                                >
                                  <h6>Branding</h6>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-10">
                        <div className="card rounded-0">
                          <div class="ts_body">
                            <div class="tabs_content">
                              <div
                                class="tab_body"
                                style={{ overflow: "auto", height: "29rem" }}
                              >
                                {/*====================================================== web =====================================================================*/}
                                <div
                                  class="tab_item tab_item_1"
                                  style={{ minHeight: "100px" }}
                                >
                                  <div className="row">
                                    <div className="col-md-12">
                                      <div className="">
                                        <img
                                          data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783690186/2024_template_for_web_qjnadw_dfr0a8.jpg"
                                          alt=""
                                          className="img-fluid lazyload"
                                          style={{ height: "28rem" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-6 mt-5">
                                      <div className="">
                                        <img
                                          data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783690216/wb_4_nhqbr4_yhkvwy.jpg"
                                          className="img-fluid rounded lazyload shadow"
                                          alt=""
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-6 mt-5">
                                      <div className="shadow">
                                        <img
                                          data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783690193/web-22_g9wjmw_o4jda8.jpg"
                                          className="img-fluid lazyload shadow"
                                          alt=""
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-12 mt-5">
                                      <div className="">
                                        <img
                                          data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783690210/wb_3_r3djf0_d0u3nd.jpg"
                                          className="img-fluid lazyload rounded shadow"
                                          alt=""
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-12 mt-5">
                                      <div className="">
                                        <img
                                          data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783690202/wb_1_mrnau8_dnsaz4.jpg"
                                          className="img-fluid lazyload rounded shadow"
                                          alt=""
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                {/*=================================================================== Video =============================================================*/}
                                <div
                                  class="tab_item tab_item_2"
                                  style={{ display: "none" }}
                                >
                                  <div className="text-center">
                                    <iframe
                                      width="905"
                                      height="450"
                                      className="motionGraphicVideo lazyload"
                                      data-src="https://www.youtube.com/embed/w40Fr0gKFJ0?si=l-E789I_cwvdWc1J"
                                      title="YouTube video player"
                                      frameborder="0"
                                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                      allowfullscreen
                                    ></iframe>

                                    <iframe
                                      width="905"
                                      height="450"
                                      className="motionGraphicVideo lazyload"
                                      data-src="https://www.youtube.com/embed/O8odtwVeyeE?si=FM2VhkkfzEv6LvJU"
                                      title="YouTube video player"
                                      frameborder="0"
                                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                      allowfullscreen
                                    ></iframe>

                                    <iframe
                                      width="905"
                                      height="450"
                                      className="motionGraphicVideo lazyload"
                                      data-src="https://www.youtube.com/embed/2wBVCL0NGDg?si=rK4dG84fh6wm_5dY"
                                      title="YouTube video player"
                                      frameborder="0"
                                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                      allowfullscreen
                                    ></iframe>
                                  </div>
                                </div>

                                {/*================================================================= digital ====================================================================*/}
                                <div
                                  class="tab_item tab_item_3"
                                  style={{ display: "none" }}
                                >
                                  <div className="container">
                                    <div className="row">
                                      <div className="col-md-4">
                                        <div className="shadow">
                                          <img
                                            data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783690176/Ws_Q_A_hepcuw_xpmtfi.jpg"
                                            className="img-fluid lazyload rounded"
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-4">
                                        <div className="shadow">
                                          <img
                                            data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783690181/Ws_Site_Acquisition_vgkiwa_d1yaax.jpg"
                                            className="img-fluid lazyload rounded"
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-4">
                                        <div className="shadow">
                                          <img
                                            data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783690159/WS_Commercial_psumww_brztpi.jpg"
                                            className="img-fluid lazyload rounded"
                                            style={{ height: "18rem" }}
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-4 mt-4">
                                        <div className="shadow">
                                          <img
                                            data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783690167/Ws_Microgrid_3_rm4tvk_u57fv2.jpg"
                                            className="img-fluid lazyload rounded"
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-4 mt-4">
                                        <div className="shadow">
                                          <img
                                            data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783690155/Maintenance_1_b1cpks_ypox0h.jpg"
                                            className="img-fluid lazyload rounded"
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-4 mt-4">
                                        <div className="shadow">
                                          <img
                                            data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783690144/WS_System_Optimization_npwwnd_hwql8t.jpg"
                                            className="img-fluid lazyload rounded"
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/*====================================================================== branding ============================================================*/}
                                <div
                                  class="tab_item tab_item_4"
                                  style={{ display: "none" }}
                                >
                                  <div className="row">
                                    <div className="col-md-6">
                                      <div className="">
                                        <img
                                          data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783690136/western_buckland_helemt_mockup_es9vxf_vcmhom.png"
                                          className="img-fluid lazyload rounded"
                                          alt=""
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="">
                                        <img
                                          data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783690106/western_buckland_safety_jacket_mockup_urfyky_xbir8k.png"
                                          className="img-fluid lazyload rounded"
                                          alt=""
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-6 mt-4">
                                      <div className="">
                                        <img
                                          data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783690130/western_buckland_cup_mockup_dmnnog_fkxqbv.png"
                                          className="img-fluid rounded lazyload"
                                          alt=""
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-6 mt-4">
                                      <div className="">
                                        <img
                                          data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783690123/western_buckland_book_mockup_sbbmbd_gqzjft.png"
                                          className="img-fluid rounded lazyload"
                                          alt=""
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*==================================================================== Pfn ====================================================*/}
            <div class="tab-pane" id="tab-6">
              <div class="row gy-4">
                <div class="col-lg-12 order-2 order-lg-1">
                  <div className="container mb-5">
                    <div className="row g-0">
                      <div className="col-md-2">
                        <div className="card rounded-0">
                          <div class="ts_body mb-5">
                            <div class="tabs_list">
                              <ul class=" text-center mb-5 pt-4 p-2">
                                <li
                                  data-tc="tab_item_1"
                                  class="dropdown-item mt-2 p-3 active"
                                >
                                  {" "}
                                  <h6>Web Design</h6>
                                </li>
                                <li
                                  data-tc="tab_item_2"
                                  onMouseEnter={scrollToHeader}
                                  class="dropdown-item mt-2 p-3 pe-5"
                                >
                                  <h6>Motion Graphic</h6>
                                </li>
                                <li
                                  data-tc="tab_item_3"
                                  class="dropdown-item mt-2 p-4 ps-1"
                                >
                                  <h6>Digital Marketing</h6>
                                </li>
                                <li
                                  data-tc="tab_item_4"
                                  class="dropdown-item mt-2 p-3"
                                  style={{ marginBottom: "21px" }}
                                >
                                  <h6>Branding</h6>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-10">
                        <div className="card rounded-0">
                          <div class="ts_body">
                            <div class="tabs_content">
                              <div
                                class="tab_body"
                                style={{ overflow: "auto", height: "29rem" }}
                              >
                                {/*================================================================ Web ============================================================*/}
                                <div
                                  class="tab_item tab_item_1"
                                  style={{ minHeight: "100px" }}
                                >
                                  <div className="row">
                                    <div className="col-md-12">
                                      <div className="shadow">
                                        <img
                                          data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783690037/web_template_2_pfn_bzoueu_djytpm.jpg"
                                          className="img-fluid shadow lazyload"
                                          alt=""
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-12 mt-5">
                                      <div className="shadow">
                                        <img
                                          data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783690048/1_r4mnbb_bt9t00.jpg"
                                          alt=""
                                          className="img-fluid lazyload"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-6 mt-5">
                                      <div className="shadow">
                                        <img
                                          data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783690042/3_x5hvq0_fuhc4e.jpg"
                                          className="img-fluid rounded shadow lazyload"
                                          alt=""
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-6 mt-5">
                                      <div className="shadow">
                                        <img
                                          data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783690032/2_n7ksv7_cuv74d.jpg"
                                          className="img-fluid rounded shadow lazyload"
                                          alt=""
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-12 mt-5">
                                      <div className="shadow">
                                        <img
                                          data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783690026/4_d3ccar_nul4ig.jpg"
                                          className="img-fluid rounded shadow lazyload"
                                          alt=""
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                {/* ================================================================= Video  ==================================================*/}
                                <div
                                  class="tab_item tab_item_2"
                                  style={{ display: "none" }}
                                >
                                  <div className="text-center">
                                    <iframe
                                      width="950"
                                      height="450"
                                      className="motionGraphicVideo lazyload"
                                      data-src="https://www.youtube.com/embed/T-ubYjO-b-0?si=Sl-KnTVIqpxYFS8-"
                                      title="YouTube video player"
                                      frameborder="0"
                                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                      allowfullscreen
                                    ></iframe>
                                  </div>
                                </div>

                                {/*====================================================================== digital ==============================================*/}
                                <div
                                  class="tab_item tab_item_3"
                                  style={{ display: "none" }}
                                >
                                  <div className="container">
                                    <div className="row">
                                      <div className="col-md-4">
                                        <div className="">
                                          <img
                                            data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783690053/Flyer_Two_eqxzd7_djcdvu.jpg"
                                            className="img-fluid lazyload rounded"
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-4">
                                        <div className="">
                                          <img
                                            data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783691370/Lagos_tfvcdu_eim5fg.jpg"
                                            className="img-fluid lazyload rounded"
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-4">
                                        <div className="">
                                          <img
                                            data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783691474/You_can_Watch_qwnstt_mdyjwz.jpg"
                                            className="img-fluid lazyload rounded"
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-4 mt-4">
                                        <div className="shadow">
                                          <img
                                            data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783691453/Wishing_everyone_n3jjjm_oin7d2.jpg"
                                            className="img-fluid lazyload rounded"
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-4 mt-4">
                                        <div className="shadow">
                                          <img
                                            data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783691416/Pentecostal_Fellowship_acviqn_yipijs.jpg"
                                            className="img-fluid lazyload rounded"
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  class="tab_item tab_item_4"
                                  style={{ display: "none" }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*==================================================================== Our  ====================================================*/}
      <div className="container mt-5 mb-5">
        <h4 class="text-primary fw-bold">Our Projects</h4>
        <h2 class="fw-bold mb-5">We've Done Lot's of Awesome Projects</h2>
        <div className="row g-3">
          {services.map((service, index) => (
            <div className="col-lg-3 col-md-6 d-flex" key={index}>
              <div className="shadow d-flex flex-column">
                <img
                  className="img-fluid lazyload"
                  data-src={service.image}
                  alt={service.title}
                />
                <div className="ps-2 pt-2 flex-grow-1">
                  <h5 className="pt-3">{service.title}</h5>
                  <p className="pb-4 pe-2">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/*==============================================================================================================================*/}
    </>
  );
};

export default Portfolio;
