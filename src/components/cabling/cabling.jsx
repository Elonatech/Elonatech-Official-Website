import Getintouch2 from "../GetInTouch/getintouch2";
import "./cabling.css";
import { Link } from "react-router-dom";

import CablingHeader from "./captions/structured_cabling_niejuu.jpg";
import FirstCabling from "./captions/Untitled-8_txf0ku.png";
import SecondCabling from "./captions/Untitled-7_k1jxj1.png";
import { Helmet } from "react-helmet-async";

const Cabling = () => {
  return (
    <>
      <Helmet>
        <title>
          Structured Cabling Solutions - Network & Data Infrastructure
        </title>
        <meta
          name="description"
          content="The standardized infrastructure of communications cabling that supports network components
        Structured cabling design and installation is governed by a set of standards that 
        specify wiring data centers, offices, and apartment buildings for 
        data or voice communications using various kinds of cable, most commonly; category 
        5e (Cat 5e), category 6 (Cat 6), and fiber optic cabling and modular connectors.
        network 
        use or into an IP or PBX (private branch exchange) telephone system patch panel
       "
        />
        <link
          rel="canonical"
          href="https://elonatech.com.ng/structure-cabling"
        />
      </Helmet>

      {/*============================================================= header ============================================================================*/}
      <div class="container-fluid structured-cabling-section">
        <div class="text-content">
          <h2>Structured Cabling</h2>
          <h5>Any System is Only As Reliable As Its Weakest Link.</h5>
          <p class="lead">
            The standardized infrastructure of communications cabling that
            supports network components
          </p>
        </div>
      </div>

      {/*================================================================= Cabling =========================================================================*/}
      <div className="container mb-5">
        <p className="text-center"></p>
        <div className="row">
          <div className="col-lg-6">
            <div className="mt-4">
              <p className="" style={{ textAlign: "justify" }}>
                <span className="fw-bold">Structured cabling</span> is the
                design and installation of a cabling system that will support
                multiple hardware uses and be suitable for today's needs and
                those of the future.
                <br />
                <br />
                With a correctly installed system, current and future
                requirements can be met, and hardware that is added in the
                future will be supported.
                <br />
                <br />
                Structured cabling design and installation is governed by a set
                of standards that specify wiring data centers, offices, and
                apartment buildings for data or voice communications using
                various kinds of cable, most commonly; category 5e (Cat 5e),
                category 6 (Cat 6), and fiber optic cabling and modular
                connectors.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="text-center">
              <img
                src="https://res.cloudinary.com/dahnwukbz/image/upload/v1784735122/qq8AE_a5blke_on16ik.gif"
                data-src={FirstCabling}
                className="img-fluid rounded lazyload"
                alt="Structured cabling installation"
              />
            </div>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-lg-6">
            <div className="text-center">
              <img
                src="https://res.cloudinary.com/dahnwukbz/image/upload/v1784735122/qq8AE_a5blke_on16ik.gif"
                data-src={SecondCabling}
                className="img-fluid rounded lazyload"
                alt="Network rack wiring"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="mt-3">
              <p className="" style={{ textAlign: "justify" }}>
                These standards define how to lay the cabling in various
                topologies in order to meet the needs of the customer, typically
                using a central patch panel (which is 19-inch rack-mounted),
                from where each modular connection can be used as needed.
                <br />
                <br />
                Each outlet is patched into a network switch (normally also
                rack-mounted) for network use or into an IP or PBX (private
                branch exchange) telephone system patch panel. Structured
                cabling is the infrastructure that supports the performance of
                an organization's network. It is the glue that binds all PCs &
                devices used within the business together. Since it is the most
                critical part of your voice and data network, choosing a
                qualified provider is a critical decision. We use only high-end
                quality products in our structured wiring solutions, backed by
                manufacturer warranties.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*========================================================= completed project =====================================================================*/}
      <div className="container ">
        <h4 className="text-center">Some Of Our Recently Completed Projects</h4>
        <div class="text-bg-light shadow py-4 rounded">
          <h6 className="text-center p-3">
            Network Installation, Points tracing, correction and labelling,
            recently done on a 3 floor building for LSG Sky Chef, Ikeja, Lagos.
          </h6>
          <div class="slider">
            <div class="slide-track">
              <div class="slide">
                <img
                  src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783679802/img_1_c4yjoe_uznso7.png"
                  className="img-fluid p-2"
                  style={{ height: "25rem" }}
                  alt="Cat6 cable routing"
                />
              </div>
              <div class="slide">
                <img
                  src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783679796/img_8_c1h674_tfkumu.png"
                  className="img-fluid p-2"
                  style={{ height: "25rem" }}
                  alt=""
                />
              </div>
              <div class="slide">
                <img
                  src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783679789/img_7_szcrgh_l9wuci.png"
                  className="img-fluid p-2"
                  style={{ height: "25rem" }}
                  alt=""
                />
              </div>
              <div class="slide">
                <img
                  src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783679806/img_2_r8qqer_nlj6zt.png"
                  className="img-fluid p-2"
                  style={{ height: "25rem" }}
                  alt=""
                />
              </div>
              <div class="slide">
                <img
                  src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783679780/img_6_moib5j_jzcs0j.png"
                  className="img-fluid p-2"
                  style={{ height: "25rem" }}
                  alt=""
                />
              </div>
              <div class="slide">
                <img
                  src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783679740/img_5_morysq_ylclwj.png"
                  className="img-fluid p-2"
                  style={{ height: "25rem" }}
                  alt=""
                />
              </div>
              <div class="slide">
                <img
                  data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783679729/img_3_sexrtq_im5q6c.png"
                  className="img-fluid lazyload p-2"
                  style={{ height: "25rem" }}
                  alt=""
                />
              </div>
              <div class="slide">
                <img
                  data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783679717/img_4_ma29jk_e3nnbx.png"
                  className="img-fluid lazyload p-2"
                  style={{ height: "25rem" }}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*========================================================= completed project 2 =====================================================================*/}
      <div className="container ">
        {/* <h4 className='text-center'>Some Of Our Recently Completed Projects</h4> */}
        <div class="text-bg-light shadow py-4 rounded">
          <h6 className="text-center p-3" style={{ textAlign: "justify" }}>
            Sub-Contractor To Pine Height Systems On Networking/Structure
            Cabling Of An 8 Floor Luxury Flat BUILDING (96 Points) LAN Setup For
            Samsung Electronics Nigeria Ltd. at Admiralty Way, Lekki Phase 1.
            Project Phase 1
          </h6>
          <div class="slider">
            <div class="slide-track">
              <div class="slide">
                <img
                  src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783674666/IMG-20130627-00055_mif7x9_wbjgbg.png"
                  className="img-fluid p-2"
                  style={{ height: "25rem" }}
                  alt=""
                />
              </div>
              <div class="slide">
                <img
                  src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783674704/IMG-20130923-00302_b6gily_wza1lf.png"
                  className="img-fluid p-2"
                  style={{ height: "25rem" }}
                  alt=""
                />
              </div>
              <div class="slide">
                <img
                  src="https://res.cloudinary.com/dahnwukbz/image/upload/v1784735450/IMG-20130627-00058_oamrun_rywptz.png"
                  className="img-fluid p-2"
                  style={{ height: "25rem" }}
                  alt=""
                />
              </div>
              <div class="slide">
                <img
                  src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783674678/IMG-20130629-00070_wpdjab_dwxbcb.png"
                  className="img-fluid p-2"
                  style={{ height: "25rem" }}
                  alt=""
                />
              </div>
              <div class="slide">
                <img
                  src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783674686/IMG-20130910-00269_w38omt_pwriat.png"
                  className="img-fluid p-2"
                  style={{ height: "25rem" }}
                  alt=""
                />
              </div>
              <div class="slide">
                <img
                  src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783674696/IMG-20130911-00204_z9hr1t_h3nk1g.png"
                  className="img-fluid p-2"
                  style={{ height: "25rem" }}
                  alt=""
                />
              </div>
              <div class="slide">
                <img
                  data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783674711/Lagos-20130908-00189_utw2mo_fyjrgb.png"
                  className="img-fluid lazyload p-2"
                  style={{ height: "25rem" }}
                  alt=""
                />
              </div>
              <div class="slide">
                <img
                  data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783674704/IMG-20130923-00302_b6gily_wza1lf.png"
                  className="img-fluid lazyload p-2"
                  style={{ height: "25rem" }}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*=========================================================== completed project 3 ===========================================*/}
      <div className="container mb-5">
        <div class="text-bg-light shadow py-4 rounded">
          <h6 className="text-center p-3">
            Sub-Contractor To Pine Height Systems On Networking/Structure
            Cabling Of An 8 Floor Luxury Flat BUILDING (96 Points) LAN Setup For
            Samsung Electronics Nigeria Ltd. at Admiralty Way, Lekki Phase 1.
            Project Phase 2
          </h6>
          <div class="slider">
            <div class="slide-track">
              <div class="slide">
                <img
                  src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783674753/DSC06972_rtglhc_wxexq0.png"
                  className="img-fluid p-2"
                  style={{ height: "25rem" }}
                  alt=""
                />
              </div>
              <div class="slide">
                <img
                  src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783674799/DSC06951_h3seuk_vlaq0o.png"
                  className="img-fluid p-2"
                  style={{ height: "25rem" }}
                  alt=""
                />
              </div>
              <div class="slide">
                <img
                  src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783674790/DSC06947_u7elgy_ac5xoa.png"
                  className="img-fluid p-2"
                  style={{ height: "25rem" }}
                  alt=""
                />
              </div>
              <div class="slide">
                <img
                  src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783674785/DSC06940_m2jdcm_crsr6g.png"
                  className="img-fluid p-2"
                  style={{ height: "25rem" }}
                  alt=""
                />
              </div>
              <div class="slide">
                <img
                  src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783674779/DSC06935_pfmijp_tofrwm.png"
                  className="img-fluid p-2"
                  style={{ height: "25rem" }}
                  alt=""
                />
              </div>
              <div class="slide">
                <img
                  src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783674717/DSC06969_ork4sg_a2gyyc.png"
                  className="img-fluid p-2"
                  style={{ height: "25rem" }}
                  alt=""
                />
              </div>
              <div class="slide">
                <img
                  src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783674774/DSC06909_llhahz_sbmxze.png"
                  className="img-fluid p-2"
                  style={{ height: "25rem" }}
                  alt=""
                />
              </div>
              <div class="slide">
                <img
                  src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783674765/DSC06949_pgrg0v_eaaodz.png"
                  className="img-fluid p-2"
                  style={{ height: "25rem" }}
                  alt=""
                />
              </div>
              <div class="slide">
                <img
                  src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783674717/DSC06969_ork4sg_a2gyyc.png"
                  className="img-fluid p-2"
                  style={{ height: "25rem" }}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =================================================== hhdff ================================================================= */}
      <Getintouch2 />
      {/* =================================================== hhdff ================================================================= */}
    </>
  );
};

export default Cabling;
