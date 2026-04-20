import { Link } from "react-router-dom";
import logo from "./captions/elonatech.png";
import Christmaslogo from "./captions/elonatech-christmas.png";
import { useState, useEffect } from "react";
import { useCart } from "react-use-cart";
import "./mobile-navbar.css"; // Changed to mobile CSS
import { useAuth } from "../admin/AuthContext";

// Tech
import hardwareComputer from "./icons/Tech/Hardware/computer.png";
import hardwareMaintenance from "./icons/Tech/Hardware/maintaince.png";
import hardwarePhone from "./icons/Tech/Hardware/phone.png";
import hardwareOffice from "./icons/Tech/Hardware/office.png";

// Network Admin
import networkAdmin from "./icons/Tech/Network Admin/networking-manager.png";
import networkServer from "./icons/Tech/Network Admin/server admin.png";
import networkInfastructure from "./icons/Tech/Network Admin/infastructure.png";
import networkCabling from "./icons/Tech/Network Admin/cabling.png";
import networkCctv from "./icons/Tech/Network Admin/cctv.png";
import networkInternet from "./icons/Tech/Network Admin/internet.png";
import networkSecurity from "./icons/Tech/Network Admin/network-security.png";

// System Security
import systemAccess from "./icons/Tech/System Security/behavior-blocker.png";
import systemSurveillnance from "./icons/Tech/System Security/surveillance.png";
import systemTime from "./icons/Tech/System Security/time.png";

// Telecoms
import telecomsIp from "./icons/Tech/Telecoms/ip.jpg";
import telecomsVoip from "./icons/Tech/Telecoms/voip.jpg";

// Software Solution
import softwareSystem from "./icons/Tech/Software Solution/System2-compressed.jpg";
import softwareApplication from "./icons/Tech/Software Solution/Application.png";
import softwareBusiness from "./icons/Tech/Software Solution/business.png";

// Web solution
import webDev from "./icons/Digitial//web-programming-12709.png";
import appDev from "./icons/Digitial/Web Solution/developer-mode.png";
import webDomain from "./icons/Digitial/Web Solution/domain-compressed.jpg";
import WebHost from "./icons/Digitial/Web Solution/hosting-compressed.jpg";

// Graphics
import graphicsGraphics from "./icons/Digitial/Graphics/graphics.png";
import graphicsBrand from "./icons/Digitial/Graphics/brand.png";
import graphicsUiux from "./icons/Digitial/Graphics/uiux.png";

// Video
import video3d from "./icons/Digitial/Video/3d-select.png";
import videoMotion from "./icons/Digitial/Video/motion.png";
import videoEdit from "./icons/Digitial/Video/video-editing.png";

// Tele
import teleLivestream from "./icons/Digitial/Tele/livestreaming.png";
import teleVideo from "./icons/Digitial/Tele/videoconferencing.png";

import digitalDigital from "./icons/Digitial/Digital/digital.png";
import digitalSocial from "./icons/Digitial/Digital/social.png";
import digitalEmail from "./icons/Digitial/Digital/email.png";
import digitalSeo from "./icons/Digitial/Digital/seo.png";
import digitalContent from "./icons/Digitial/Digital/content.png";
import digitalPpc from "./icons/Digitial/Digital/external-ppc.png";

// Sales Supply
import Salehardware from "./icons/Sales/workstation.png";
import SaleSoftware from "./icons/Sales/software.png";
import SaleConsumbles from "./icons/Sales/home-office.png";
import { set } from "date-fns";

const MobileHeader = () => {
  const [currentAdmin, setCurrentAdmin] = useState("");
  const { logout } = useAuth();

  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("token"));
    setCurrentAdmin(auth);
  }, []);

  const { totalUniqueItems } = useCart();

  // States for mobile dropdowns
  const [mobileTechMouseEnter, setMobileTechMouseEnter] = useState(true);
  const [mobileDigitalMouseEnter, setMobileDigitalMouseEnter] = useState(false);
  const [mobileSalesMouseEnter, setMobileSalesMouseEnter] = useState(false);
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState("hardware");
  const [mobileScroll, setMobileScroll] = useState(false);

  // Mobile-only handlers
  const handleMobileProductClick = () => {
    let x = document.getElementById("mobileDIV");
    if (x.style.display === "none" || x.style.display === "") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  };

  const handleMobileHardwareClick = () => {
    setMobileActiveDropdown(
      mobileActiveDropdown === "hardware" ? null : "hardware"
    );
  };

  const handleMobileNetworkClick = () => {
    setMobileActiveDropdown(
      mobileActiveDropdown === "network" ? null : "network"
    );
  };

  const handleMobileSystemClick = () => {
    setMobileActiveDropdown(
      mobileActiveDropdown === "system" ? null : "system"
    );
  };

  const handleMobileTelecomClick = () => {
    setMobileActiveDropdown(
      mobileActiveDropdown === "telecom" ? null : "telecom"
    );
  };

  const handleMobileSoftwareClick = () => {
    setMobileActiveDropdown(
      mobileActiveDropdown === "software" ? null : "software"
    );
  };

  const handleMobileWebClick = () => {
    setMobileActiveDropdown(mobileActiveDropdown === "web" ? null : "web");
  };

  const handleMobileDigitalMarketClick = () => {
    setMobileActiveDropdown(
      mobileActiveDropdown === "digitalMarketing" ? null : "digitalMarketing"
    );
  };

  const handleMobileGraphicsClick = () => {
    setMobileActiveDropdown(
      mobileActiveDropdown === "graphics" ? null : "graphics"
    );
  };

  const handleMobileVideoClick = () => {
    setMobileActiveDropdown(
      mobileActiveDropdown === "videoAnimations" ? null : "videoAnimations"
    );
  };

  const handleMobileTeleClick = () => {
    setMobileActiveDropdown(
      mobileActiveDropdown === "teleconferencing" ? null : "teleconferencing"
    );
  };

  const handleMobileSupportClick = () => {
    let x = document.getElementById("mobileDIV");
    if (x.style.display === "block") {
      x.style.display = "none";
    }
  };

  const handleMobileTechEnter = () => {
    setMobileTechMouseEnter(true);
    setMobileDigitalMouseEnter(false);
    setMobileSalesMouseEnter(false);
    setMobileActiveDropdown("hardware");
  };

  const handleMobileDigitalEnter = () => {
    setMobileDigitalMouseEnter(true);
    setMobileSalesMouseEnter(false);
    setMobileTechMouseEnter(false);
    setMobileActiveDropdown("web");
  };

  const handleMobileSalesEnter = () => {
    setMobileSalesMouseEnter(true);
    setMobileTechMouseEnter(false);
    setMobileDigitalMouseEnter(false);
    setMobileActiveDropdown(null);
  };

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setMobileScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Mobile hover effects
  useEffect(() => {
    // These can be added back if needed for mobile hover effects
  }, []);

  return (
    <nav
      id="mobileNavbarShow"
      className={`mobile-navbar navbar navbar-dark fixed-top ${
        mobileScroll ? "mobile-NAVbar" : "mobile-NAVba"
      }`}
    >
      <div className="container-fluid">
        <Link to={"/"} className="navbar-brand border-0">
          <img
            src={logo}
            id="mobile-elonatech-logo-home"
            className="lazyload border-0"
            alt="Elonatech Logo"
          />
        </Link>
        <button
          className="navbar-toggler mobile-custom-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#mobileOffcanvasNavbar"
          aria-controls="mobileOffcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end mobile-navbar-bg-change"
          tabIndex="-1"
          id="mobileOffcanvasNavbar"
          aria-labelledby="mobileOffcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5
              className="offcanvas-title text-dark"
              id="mobileOffcanvasNavbarLabel"
            ></h5>
            <div
              className="btn-close btn-close-white mobile-dismiss-nav-man"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></div>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav mx-auto">
              {/* Home */}
              <li className="nav-item pe-4">
                <Link
                  to={"/"}
                  className="nav-link fw-bold mobile-dismiss-nav-man"
                  data-bs-dismiss="offcanvas"
                >
                  <i className="bi bi-house-fill"></i>
                </Link>
              </li>

              {/* Solutions Dropdown - Mobile Accordion */}
              <li className="nav-item mx-0 pe-2 my-md-0 mobile-elonatechlistItem sol">
                <a
                  onClick={handleMobileProductClick}
                  style={{ fontWeight: "bold" }}
                  className="nav-link mobile-e-fonte text-white dropdown-toggle"
                >
                  Solutions
                </a>
               
                <ul
                  id="mobileDIV"
                  className="mobile-elonatechmainDropdownDone mobile-sol"
                  style={{ display: "none" }}
                >
                  <li className="mobile-elonatechinnerListItemLeft">
                    <ul className="mobile-elonatechinnerListContentLeft">
                      <li
                        className={`${
                          mobileTechMouseEnter
                            ? "mobile-elonatechinnerListItemContentLeftActive"
                            : "mobile-elonatechinnerListItemContentLeft"
                        }`}
                        onClick={handleMobileTechEnter}
                      >
                        <h6 className="mobile-techCenter">Tech Solutions</h6>
                      </li>
                      <li
                        className={`${
                          mobileDigitalMouseEnter
                            ? "mobile-elonatechinnerListItemContentLeftActive"
                            : "mobile-elonatechinnerListItemContentLeft"
                        }`}
                        onClick={handleMobileDigitalEnter}
                      >
                        <h6 className="mobile-techCenter">Digital Solutions</h6>
                      </li>
                      <li
                        className={`${
                          mobileSalesMouseEnter
                            ? "mobile-elonatechinnerListItemContentLeftActive"
                            : "mobile-elonatechinnerListItemContentLeft"
                        }`}
                        onClick={handleMobileSalesEnter}
                      >
                        <h6 className="mobile-techCenter">Sales/ Supply</h6>
                      </li>
                    </ul>
                  </li>
                  <div className="mobile-elonatechline"></div>
                  <li className="mobile-elonatechinnerListItemRight">
                    <ul className="mobile-elonatechinnerListContentRight">
                      {/* TECH SOLUTIONS - Show when active */}
                      {mobileTechMouseEnter && (
                        <li className="mobile-elonatechinnerListContentRight">
                          <ul className="mobile-elonatechinnerListItemContentRightTechListActive">
                            {/* HARDWARE SOLUTIONS - Expanded by default */}
                            <li className="mobile-elonatechinnerListItemContentRightTechListItem">
                              <div className="mobile-elonatechtest">
                                <h6
                                  onClick={handleMobileHardwareClick}
                                  className={
                                    mobileActiveDropdown === "hardware"
                                      ? "mobile-elonatechinnerListItemContentRightTechListTitleActive mobile-elonatechSolutionsTitle"
                                      : "mobile-elonatechinnerListItemContentRightTechListTitle mobile-elonatechSolutionsTitle"
                                  }
                                >
                                  Hardware Solutions
                                </h6>
                                <i className="bi bi-plus text-dark fs-3"></i>
                              </div>
                              {/* Show when hardware is active AND Tech Solutions is selected */}
                              {mobileActiveDropdown === "hardware" && (
                                <ul className="mobile-elonatechhardwareSolutionsListActive">
                                  <Link
                                    to={"/hardware-engineering"}
                                    className="text-decoration-none text-dark mobile-dismiss-nav-man"
                                    data-bs-dismiss="offcanvas"
                                  >
                                    <li className="mobile-elonatechhardwareSolutionsListItem">
                                      <img
                                        src={hardwareComputer}
                                        alt=""
                                        style={{
                                          width: "50px",
                                          height: "50px",
                                          objectFit: "contain",
                                          alignSelf: "center",
                                        }}
                                      />
                                      Computer Engineering
                                    </li>
                                  </Link>
                                  <Link
                                    to={"/printer-repair"}
                                    className="text-decoration-none text-dark mobile-dismiss-nav-man"
                                    data-bs-dismiss="offcanvas"
                                  >
                                    <li className="mobile-elonatechhardwareSolutionsListItem">
                                      <img
                                        src={hardwareOffice}
                                        alt=""
                                        style={{
                                          width: "50px",
                                          height: "50px",
                                          objectFit: "contain",
                                          alignSelf: "center",
                                        }}
                                      />
                                      Printers
                                    </li>
                                  </Link>
                                  <Link
                                    to={"/mobile-repair"}
                                    className="text-decoration-none text-dark mobile-dismiss-nav-man"
                                    data-bs-dismiss="offcanvas"
                                  >
                                    <li className="mobile-elonatechhardwareSolutionsListItem">
                                      <img
                                        src={hardwarePhone}
                                        alt=""
                                        style={{
                                          width: "50px",
                                          height: "50px",
                                          objectFit: "contain",
                                          alignSelf: "center",
                                        }}
                                      />
                                      Mobile Devices
                                    </li>
                                  </Link>
                                  <Link
                                    to={"/network"}
                                    className="text-decoration-none text-dark mobile-dismiss-nav-man"
                                    data-bs-dismiss="offcanvas"
                                  >
                                    <li className="mobile-elonatechhardwareSolutionsListItem">
                                      <img
                                        src={hardwareMaintenance}
                                        alt=""
                                        style={{
                                          width: "50px",
                                          height: "50px",
                                          objectFit: "contain",
                                          alignSelf: "center",
                                        }}
                                      />
                                      Networking Equipment
                                    </li>
                                  </Link>
                                </ul>
                              )}
                            </li>

                            {/* NETWORK SOLUTIONS */}
                            <li className="mobile-elonatechinnerListItemContentRightTechListItem">
                              <div className="mobile-elonatechtest">
                                <h6
                                  onClick={handleMobileNetworkClick}
                                  className={
                                    mobileActiveDropdown === "network"
                                      ? "mobile-elonatechinnerListItemContentRightTechListTitleActive mobile-elonatechSolutionsTitle"
                                      : "mobile-elonatechinnerListItemContentRightTechListTitle mobile-elonatechSolutionsTitle"
                                  }
                                >
                                  Network Solutions
                                </h6>
                                <i className="bi bi-plus text-dark fs-3"></i>
                              </div>
                              {mobileActiveDropdown === "network" && (
                                <ul className="mobile-elonatechnetworkAdministrationListActive">
                                  <Link
                                    to={
                                      "/network-administration-implementation"
                                    }
                                    className="text-decoration-none text-dark mobile-dismiss-nav-man"
                                    data-bs-dismiss="offcanvas"
                                  >
                                    <li className="mobile-elonatechnetworkAdministrationListItem">
                                      <img
                                        src={networkAdmin}
                                        alt=""
                                        style={{
                                          width: "50px",
                                          height: "50px",
                                          objectFit: "contain",
                                          alignSelf: "center",
                                        }}
                                      />
                                      Network Admin/Implementation
                                    </li>
                                  </Link>
                                  <Link
                                    to={"/network-security"}
                                    className="text-decoration-none text-dark mobile-dismiss-nav-man"
                                    data-bs-dismiss="offcanvas"
                                  >
                                    <li className="mobile-elonatechnetworkAdministrationListItem">
                                      <img
                                        src={networkSecurity}
                                        alt=""
                                        style={{
                                          width: "50px",
                                          height: "50px",
                                          objectFit: "contain",
                                          alignSelf: "center",
                                        }}
                                      />
                                      Network Security
                                    </li>
                                  </Link>
                                  <Link
                                    to={"/server-administration"}
                                    className="text-decoration-none text-dark mobile-dismiss-nav-man"
                                    data-bs-dismiss="offcanvas"
                                  >
                                    <li className="mobile-elonatechnetworkAdministrationListItem">
                                      <img
                                        src={networkServer}
                                        alt=""
                                        style={{
                                          width: "50px",
                                          height: "50px",
                                          objectFit: "contain",
                                          alignSelf: "center",
                                        }}
                                      />
                                      Server Administration
                                    </li>
                                  </Link>
                                  <Link
                                    to={"/system-integration"}
                                    className="text-decoration-none text-dark mobile-dismiss-nav-man"
                                    data-bs-dismiss="offcanvas"
                                  >
                                    <li className="mobile-elonatechnetworkAdministrationListItem">
                                      <img
                                        src={networkInfastructure}
                                        alt=""
                                        style={{
                                          width: "50px",
                                          height: "50px",
                                          objectFit: "contain",
                                          alignSelf: "center",
                                        }}
                                      />
                                      Infrastructure / System Integration
                                    </li>
                                  </Link>
                                  <Link
                                    to={"/structure-cabling"}
                                    className="text-decoration-none text-dark mobile-dismiss-nav-man"
                                    data-bs-dismiss="offcanvas"
                                  >
                                    <li className="mobile-elonatechnetworkAdministrationListItem">
                                      <img
                                        src={networkCabling}
                                        alt=""
                                        style={{
                                          width: "50px",
                                          height: "50px",
                                          objectFit: "contain",
                                          alignSelf: "center",
                                        }}
                                      />
                                      Structured Cabling
                                    </li>
                                  </Link>
                                  <Link
                                    to={"/cctv"}
                                    className="text-decoration-none text-dark mobile-dismiss-nav-man"
                                    data-bs-dismiss="offcanvas"
                                  >
                                    <li className="mobile-elonatechnetworkAdministrationListItem">
                                      <img
                                        src={networkCctv}
                                        alt=""
                                        style={{
                                          width: "50px",
                                          height: "50px",
                                          objectFit: "contain",
                                          alignSelf: "center",
                                        }}
                                      />
                                      CCTV Installation
                                    </li>
                                  </Link>
                                  <Link
                                    to={"/internet"}
                                    className="text-decoration-none text-dark mobile-dismiss-nav-man"
                                    data-bs-dismiss="offcanvas"
                                  >
                                    <li className="mobile-elonatechnetworkAdministrationListItem">
                                      <img
                                        src={networkInternet}
                                        alt=""
                                        style={{
                                          width: "50px",
                                          height: "50px",
                                          objectFit: "contain",
                                          alignSelf: "center",
                                        }}
                                      />
                                      Internet Solutions
                                    </li>
                                  </Link>
                                </ul>
                              )}
                            </li>

                            {/* SOFTWARE SOLUTIONS */}
                            <li className="mobile-elonatechinnerListItemContentRightTechListItem">
                              <div className="mobile-elonatechtest">
                                <h6
                                  onClick={handleMobileSoftwareClick}
                                  className={
                                    mobileActiveDropdown === "software"
                                      ? "mobile-elonatechinnerListItemContentRightTechListTitleActive mobile-elonatechSolutionsTitle"
                                      : "mobile-elonatechinnerListItemContentRightTechListTitle mobile-elonatechSolutionsTitle"
                                  }
                                >
                                  Software Solutions
                                </h6>
                                <i className="bi bi-plus text-dark fs-3"></i>
                              </div>
                              {mobileActiveDropdown === "software" && (
                                <ul className="mobile-elonatechsoftwareSolutionsListActive">
                                  <Link
                                    to={"/system-software"}
                                    className="text-decoration-none text-dark mobile-dismiss-nav-man"
                                    data-bs-dismiss="offcanvas"
                                  >
                                    <li className="mobile-elonatechsoftwareSolutionsListListItem">
                                      <img
                                        src={softwareSystem}
                                        alt=""
                                        style={{
                                          width: "50px",
                                          height: "50px",
                                          objectFit: "contain",
                                          alignSelf: "center",
                                        }}
                                      />
                                      System Software
                                    </li>
                                  </Link>
                                  <Link
                                    to={"/application-software"}
                                    className="text-decoration-none text-dark mobile-dismiss-nav-man"
                                    data-bs-dismiss="offcanvas"
                                  >
                                    <li className="mobile-elonatechsoftwareSolutionsListListItem">
                                      <img
                                        src={softwareApplication}
                                        alt=""
                                        style={{
                                          width: "50px",
                                          height: "50px",
                                          objectFit: "contain",
                                          alignSelf: "center",
                                        }}
                                      />
                                      Application Software
                                    </li>
                                  </Link>
                                  <Link
                                    to={"/business-software"}
                                    className="text-decoration-none text-dark mobile-dismiss-nav-man"
                                    data-bs-dismiss="offcanvas"
                                  >
                                    <li className="mobile-elonatechsoftwareSolutionsListListItem">
                                      <img
                                        src={softwareBusiness}
                                        alt=""
                                        style={{
                                          width: "50px",
                                          height: "50px",
                                          objectFit: "contain",
                                          alignSelf: "center",
                                        }}
                                      />
                                      Business Application Software
                                    </li>
                                  </Link>
                                </ul>
                              )}
                            </li>

                            {/* COMMUNICATION */}
                            <li className="mobile-elonatechinnerListItemContentRightTechListItem">
                              <div className="mobile-elonatechtest">
                                <h6
                                  onClick={handleMobileTelecomClick}
                                  className={
                                    mobileActiveDropdown === "telecom"
                                      ? "mobile-elonatechinnerListItemContentRightTechListTitleActive mobile-elonatechSolutionsTitle"
                                      : "mobile-elonatechinnerListItemContentRightTechListTitle mobile-elonatechSolutionsTitle"
                                  }
                                >
                                  Communication
                                </h6>
                                <i className="bi bi-plus text-dark fs-3"></i>
                              </div>
                              {mobileActiveDropdown === "telecom" && (
                                <ul className="mobile-elonatechtelecomsListActive">
                                  <Link
                                    to={"/ip-telephony"}
                                    className="text-decoration-none text-dark mobile-dismiss-nav-man"
                                    data-bs-dismiss="offcanvas"
                                  >
                                    <li className="mobile-elonatechtelecomsListListItem">
                                      <img
                                        src={telecomsIp}
                                        alt=""
                                        style={{
                                          width: "50px",
                                          height: "50px",
                                          objectFit: "contain",
                                          alignSelf: "center",
                                        }}
                                      />
                                      IP Telephony & PBX Systems
                                    </li>
                                  </Link>
                                  <Link
                                    to={"/voip"}
                                    className="text-decoration-none text-dark mobile-dismiss-nav-man"
                                    data-bs-dismiss="offcanvas"
                                  >
                                    <li className="mobile-elonatechtelecomsListListItem">
                                      <img
                                        src={telecomsVoip}
                                        alt=""
                                        style={{
                                          width: "50px",
                                          height: "50px",
                                          objectFit: "contain",
                                          alignSelf: "center",
                                        }}
                                      />
                                      VoIP
                                    </li>
                                  </Link>
                                </ul>
                              )}
                            </li>

                            {/* ACCESS & SECURITY */}
                            <li className="mobile-elonatechinnerListItemContentRightTechListItem">
                              <div className="mobile-elonatechtest">
                                <h6
                                  onClick={handleMobileSystemClick}
                                  className={
                                    mobileActiveDropdown === "system"
                                      ? "mobile-elonatechinnerListItemContentRightTechListTitleActive mobile-elonatechSolutionsTitle"
                                      : "mobile-elonatechinnerListItemContentRightTechListTitle mobile-elonatechSolutionsTitle"
                                  }
                                >
                                  Access & Security
                                </h6>
                                <i className="bi bi-plus text-dark fs-3"></i>
                              </div>
                              {mobileActiveDropdown === "system" && (
                                <ul className="mobile-elonatechsystemSecurityListActive">
                                  <Link
                                    to={"/access-control"}
                                    className="text-decoration-none text-dark mobile-dismiss-nav-man"
                                    data-bs-dismiss="offcanvas"
                                  >
                                    <li className="mobile-elonatechsystemSecurityListListItem">
                                      <img
                                        src={systemAccess}
                                        alt=""
                                        style={{
                                          width: "50px",
                                          height: "50px",
                                          objectFit: "contain",
                                          alignSelf: "center",
                                        }}
                                      />
                                      Access Control
                                    </li>
                                  </Link>
                                  <Link
                                    to={"/time-management"}
                                    className="text-decoration-none text-dark mobile-dismiss-nav-man"
                                    data-bs-dismiss="offcanvas"
                                  >
                                    <li className="mobile-elonatechsystemSecurityListListItem">
                                      <img
                                        src={systemTime}
                                        alt=""
                                        style={{
                                          width: "50px",
                                          height: "50px",
                                          objectFit: "contain",
                                          alignSelf: "center",
                                        }}
                                      />
                                      Time Management Solutions
                                    </li>
                                  </Link>
                                  <Link
                                    to={"/surveillance"}
                                    className="text-decoration-none text-dark mobile-dismiss-nav-man"
                                    data-bs-dismiss="offcanvas"
                                  >
                                    <li className="mobile-elonatechsystemSecurityListListItem">
                                      <img
                                        src={systemSurveillnance}
                                        alt=""
                                        style={{
                                          width: "50px",
                                          height: "50px",
                                          objectFit: "contain",
                                          alignSelf: "center",
                                        }}
                                      />
                                      Surveillance
                                    </li>
                                  </Link>
                                </ul>
                              )}
                            </li>
                          </ul>
                        </li>
                      )}

                      {/* DIGITAL SOLUTION CONTENT - Show when active */}
                      {mobileDigitalMouseEnter && (
                        <li className="mobile-elonatechinnerListContentRight">
                          <ul className="mobile-elonatechinnerListItemContentRightDigitalListActive">
                            {/* web solution - Expanded by default when Digital Solutions is active */}
                            <li className="mobile-elonatechinnerListItemContentRightDigitalListItem">
                              <div className="mobile-elonatechtest">
                                <h6
                                  onClick={handleMobileWebClick}
                                  className={
                                    mobileActiveDropdown === "web"
                                      ? "mobile-elonatechinnerListItemContentRightTechListTitleActive mobile-elonatechSolutionsTitle"
                                      : "mobile-elonatechinnerListItemContentRightTechListTitle mobile-elonatechSolutionsTitle"
                                  }
                                >
                                  Web & App Solutions
                                </h6>
                                <i className="bi bi-plus text-dark fs-3"></i>
                              </div>
                              {mobileActiveDropdown === "web" && (
                                <ul className="mobile-elonatechwebSolutionsListActive">
                                  <Link
                                    to={"/web-design"}
                                    className="text-decoration-none text-dark mobile-dismiss-nav-man"
                                    data-bs-dismiss="offcanvas"
                                  >
                                    <li className="mobile-elonatechwebSolutionsListItem">
                                      <img
                                        src={webDev}
                                        alt=""
                                        style={{
                                          width: "50px",
                                          height: "50px",
                                          objectFit: "contain",
                                          alignSelf: "center",
                                        }}
                                      />
                                      Web Design/Dev.
                                    </li>
                                  </Link>
                                  <Link
                                    to={"/app-development"}
                                    className="text-decoration-none text-dark mobile-dismiss-nav-man"
                                    data-bs-dismiss="offcanvas"
                                  >
                                    <li className="mobile-elonatechwebSolutionsListItem">
                                      <img
                                        src={appDev}
                                        alt=""
                                        style={{
                                          width: "50px",
                                          height: "50px",
                                          objectFit: "contain",
                                          alignSelf: "center",
                                        }}
                                      />
                                      App Design/Dev.
                                    </li>
                                  </Link>
                                  <Link
                                    to={"/domain"}
                                    className="text-decoration-none text-dark mobile-dismiss-nav-man"
                                    data-bs-dismiss="offcanvas"
                                  >
                                    <li className="mobile-elonatechwebSolutionsListItem">
                                      <img
                                        src={webDomain}
                                        alt=""
                                        style={{
                                          width: "50px",
                                          height: "50px",
                                          objectFit: "contain",
                                          alignSelf: "center",
                                        }}
                                      />
                                      Domain Reg./DNS Mgt
                                    </li>
                                  </Link>
                                  <Link
                                    to={"/hosting"}
                                    className="text-decoration-none text-dark mobile-dismiss-nav-man"
                                    data-bs-dismiss="offcanvas"
                                  >
                                    <li className="mobile-elonatechwebSolutionsListItem">
                                      <img
                                        src={WebHost}
                                        alt=""
                                        style={{
                                          width: "50px",
                                          height: "50px",
                                          objectFit: "contain",
                                          alignSelf: "center",
                                        }}
                                      />
                                      Web Hosting
                                    </li>
                                  </Link>
                                </ul>
                              )}
                            </li>

                            {/* digital marketing */}
                            <li className="mobile-elonatechinnerListItemContentRightDigitalListItem">
                              <div className="mobile-elonatechtest">
                                <h6
                                  onClick={handleMobileDigitalMarketClick}
                                  className={
                                    mobileActiveDropdown === "digitalMarketing"
                                      ? "mobile-elonatechinnerListItemContentRightTechListTitleActive mobile-elonatechSolutionsTitle"
                                      : "mobile-elonatechinnerListItemContentRightTechListTitle mobile-elonatechSolutionsTitle"
                                  }
                                >
                                  Digital Marketing
                                </h6>
                                <i className="bi bi-plus text-dark fs-3"></i>
                              </div>
                              {mobileActiveDropdown === "digitalMarketing" && (
                                <ul className="mobile-elonatechdigitalMarketingListActive">
                                  <Link
                                    to={"/digital-marketing"}
                                    className="text-decoration-none text-dark mobile-dismiss-nav-man"
                                    data-bs-dismiss="offcanvas"
                                  >
                                    <li className="mobile-elonatechdigitalMarketingListItem">
                                      <img
                                        src={digitalDigital}
                                        alt=""
                                        style={{
                                          width: "50px",
                                          height: "50px",
                                          objectFit: "contain",
                                          alignSelf: "center",
                                        }}
                                      />
                                      Digital Marketing
                                    </li>
                                  </Link>
                                  <Link
                                    to={"/social-media-marketing"}
                                    className="text-decoration-none text-dark mobile-dismiss-nav-man"
                                    data-bs-dismiss="offcanvas"
                                  >
                                    <li className="mobile-elonatechdigitalMarketingListItem">
                                      <img
                                        src={digitalSocial}
                                        alt=""
                                        style={{
                                          width: "50px",
                                          height: "50px",
                                          objectFit: "contain",
                                          alignSelf: "center",
                                        }}
                                      />
                                      Social Media Marketing
                                    </li>
                                  </Link>
                                  <Link
                                    to={"/email-marketing"}
                                    className="text-decoration-none text-dark mobile-dismiss-nav-man"
                                    data-bs-dismiss="offcanvas"
                                  >
                                    <li className="mobile-elonatechdigitalMarketingListItem">
                                      <img
                                        src={digitalEmail}
                                        alt=""
                                        style={{
                                          width: "50px",
                                          height: "50px",
                                          objectFit: "contain",
                                          alignSelf: "center",
                                        }}
                                      />
                                      Email Marketing
                                    </li>
                                  </Link>
                                  <Link
                                    to={"/seo"}
                                    className="text-decoration-none text-dark mobile-dismiss-nav-man"
                                    data-bs-dismiss="offcanvas"
                                  >
                                    <li className="mobile-elonatechdigitalMarketingListItem">
                                      <img
                                        src={digitalSeo}
                                        alt=""
                                        style={{
                                          width: "50px",
                                          height: "50px",
                                          objectFit: "contain",
                                          alignSelf: "center",
                                        }}
                                      />
                                      SEO
                                    </li>
                                  </Link>
                                  <Link
                                    to={"/content-marketing"}
                                    className="text-decoration-none text-dark mobile-dismiss-nav-man"
                                    data-bs-dismiss="offcanvas"
                                  >
                                    <li className="mobile-elonatechdigitalMarketingListItem">
                                      <img
                                        src={digitalContent}
                                        alt=""
                                        style={{
                                          width: "50px",
                                          height: "50px",
                                          objectFit: "contain",
                                          alignSelf: "center",
                                        }}
                                      />
                                      Content Marketing
                                    </li>
                                  </Link>
                                  <Link
                                    to={"/ppc"}
                                    className="text-decoration-none text-dark mobile-dismiss-nav-man"
                                    data-bs-dismiss="offcanvas"
                                  >
                                    <li className="mobile-elonatechdigitalMarketingListItem">
                                      <img
                                        src={digitalPpc}
                                        alt=""
                                        style={{
                                          width: "50px",
                                          height: "50px",
                                          objectFit: "contain",
                                          alignSelf: "center",
                                        }}
                                      />
                                      PPC/CPI
                                    </li>
                                  </Link>
                                </ul>
                              )}
                            </li>

                            {/* graphics */}
                            <li className="mobile-elonatechinnerListItemContentRightDigitalListItem">
                              <div className="mobile-elonatechtest">
                                <h6
                                  onClick={handleMobileGraphicsClick}
                                  className={
                                    mobileActiveDropdown === "graphics"
                                      ? "mobile-elonatechinnerListItemContentRightTechListTitleActive mobile-elonatechSolutionsTitle"
                                      : "mobile-elonatechinnerListItemContentRightTechListTitle mobile-elonatechSolutionsTitle"
                                  }
                                >
                                  Graphics
                                </h6>
                                <i className="bi bi-plus text-dark fs-3"></i>
                              </div>
                              {mobileActiveDropdown === "graphics" && (
                                <ul className="mobile-elonatechgraphicsListActive">
                                  <Link
                                    to={"/graphics-design"}
                                    className="text-decoration-none text-dark mobile-dismiss-nav-man"
                                    data-bs-dismiss="offcanvas"
                                  >
                                    <li className="mobile-elonatechgraphicsListListItem">
                                      <img
                                        src={graphicsGraphics}
                                        alt=""
                                        style={{
                                          width: "50px",
                                          height: "50px",
                                          objectFit: "contain",
                                          alignSelf: "center",
                                        }}
                                      />
                                      Graphic
                                    </li>
                                  </Link>
                                  <Link
                                    to={"/brand-identity"}
                                    className="text-decoration-none text-dark mobile-dismiss-nav-man"
                                    data-bs-dismiss="offcanvas"
                                  >
                                    <li className="mobile-elonatechgraphicsListListItem">
                                      <img
                                        src={graphicsBrand}
                                        alt=""
                                        style={{
                                          width: "50px",
                                          height: "50px",
                                          objectFit: "contain",
                                          alignSelf: "center",
                                        }}
                                      />
                                      Brand Development
                                    </li>
                                  </Link>
                                  <Link
                                    to={"/uiux"}
                                    className="text-decoration-none text-dark mobile-dismiss-nav-man"
                                    data-bs-dismiss="offcanvas"
                                  >
                                    <li className="mobile-elonatechgraphicsListListItem">
                                      <img
                                        src={graphicsUiux}
                                        alt=""
                                        style={{
                                          width: "50px",
                                          height: "50px",
                                          objectFit: "contain",
                                          alignSelf: "center",
                                        }}
                                      />
                                      UI/UX & Prototyping
                                    </li>
                                  </Link>
                                </ul>
                              )}
                            </li>

                            {/* video animation */}
                            <li className="mobile-elonatechinnerListItemContentRightDigitalListItem">
                              <div className="mobile-elonatechtest">
                                <h6
                                  onClick={handleMobileVideoClick}
                                  className={
                                    mobileActiveDropdown === "videoAnimations"
                                      ? "mobile-elonatechinnerListItemContentRightTechListTitleActive mobile-elonatechSolutionsTitle"
                                      : "mobile-elonatechinnerListItemContentRightTechListTitle mobile-elonatechSolutionsTitle"
                                  }
                                >
                                  Video Animations
                                </h6>
                                <i className="bi bi-plus text-dark fs-3"></i>
                              </div>
                              {mobileActiveDropdown === "videoAnimations" && (
                                <ul className="mobile-elonatechvideoAnimationsListActive">
                                  <Link
                                    to={"/animation"}
                                    className="text-decoration-none text-dark mobile-dismiss-nav-man"
                                    data-bs-dismiss="offcanvas"
                                  >
                                    <li className="mobile-elonatechvideoAnimationsListListItem">
                                      <img
                                        src={video3d}
                                        alt=""
                                        style={{
                                          width: "50px",
                                          height: "50px",
                                          objectFit: "contain",
                                          alignSelf: "center",
                                        }}
                                      />
                                      2D/3D Animations
                                    </li>
                                  </Link>
                                  <Link
                                    to={"/motion-graphics"}
                                    className="text-decoration-none text-dark mobile-dismiss-nav-man"
                                    data-bs-dismiss="offcanvas"
                                  >
                                    <li className="mobile-elonatechvideoAnimationsListListItem">
                                      <img
                                        src={videoMotion}
                                        alt=""
                                        style={{
                                          width: "50px",
                                          height: "50px",
                                          objectFit: "contain",
                                          alignSelf: "center",
                                        }}
                                      />
                                      Motion Graphics
                                    </li>
                                  </Link>
                                  <Link
                                    to={"/video-editing"}
                                    className="text-decoration-none text-dark mobile-dismiss-nav-man"
                                    data-bs-dismiss="offcanvas"
                                  >
                                    <li className="mobile-elonatechvideoAnimationsListListItem">
                                      <img
                                        src={videoEdit}
                                        alt=""
                                        style={{
                                          width: "50px",
                                          height: "50px",
                                          objectFit: "contain",
                                          alignSelf: "center",
                                        }}
                                      />
                                      Video Editing
                                    </li>
                                  </Link>
                                </ul>
                              )}
                            </li>

                            {/* teleconferencing */}
                            <li className="mobile-elonatechinnerListItemContentRightDigitalListItem">
                              <div className="mobile-elonatechtest">
                                <h6
                                  onClick={handleMobileTeleClick}
                                  className={
                                    mobileActiveDropdown === "teleconferencing"
                                      ? "mobile-elonatechinnerListItemContentRightTechListTitleActive mobile-elonatechSolutionsTitle"
                                      : "mobile-elonatechinnerListItemContentRightTechListTitle mobile-elonatechSolutionsTitle"
                                  }
                                >
                                  Teleconferencing
                                </h6>
                                <i className="bi bi-plus text-dark fs-3"></i>
                              </div>
                              {mobileActiveDropdown === "teleconferencing" && (
                                <ul className="mobile-elonatechteleconferencingListActive">
                                  <Link
                                    to={"/livestreaming"}
                                    className="text-decoration-none text-dark mobile-dismiss-nav-man"
                                    data-bs-dismiss="offcanvas"
                                  >
                                    <li className="mobile-elonatechteleconferencingListListItem">
                                      <img
                                        src={teleLivestream}
                                        alt=""
                                        style={{
                                          width: "50px",
                                          height: "50px",
                                          objectFit: "contain",
                                          alignSelf: "center",
                                          marginBottom: "1rem",
                                        }}
                                      />
                                      Livestreaming
                                    </li>
                                  </Link>
                                  <Link
                                    to={"/videoconferencing"}
                                    className="text-decoration-none text-dark mobile-dismiss-nav-man"
                                    data-bs-dismiss="offcanvas"
                                  >
                                    <li className="mobile-elonatechteleconferencingListListItem">
                                      <img
                                        src={teleVideo}
                                        alt=""
                                        style={{
                                          width: "50px",
                                          height: "50px",
                                          objectFit: "contain",
                                          alignSelf: "center",
                                          marginBottom: "1rem",
                                        }}
                                      />
                                      Videoconferencing
                                    </li>
                                  </Link>
                                </ul>
                              )}
                            </li>
                          </ul>
                        </li>
                      )}

                      {/* SALE CONTENT - Show when active */}
                      {mobileSalesMouseEnter && (
                        <li className="mobile-elonatechinnerListContentRight">
                          <ul className="mobile-elonatechinnerListItemContentRightSalesListActive">
                            <Link
                              to={"/hardware-supply"}
                              className="text-decoration-none text-dark mobile-salePad mobile-dismiss-nav-man"
                              data-bs-dismiss="offcanvas"
                            >
                              <li className="mobile-elonatechinnerListItemContentRightSalesListItem">
                                <img
                                  src={Salehardware}
                                  alt=""
                                  style={{
                                    width: "50px",
                                    height: "50px",
                                    objectFit: "contain",
                                    alignSelf: "center",
                                    marginBottom: "1rem",
                                  }}
                                />
                                Hardware
                              </li>
                            </Link>
                            <Link
                              to={"/software-supply"}
                              className="text-decoration-none text-dark mobile-salePad mobile-dismiss-nav-man"
                              data-bs-dismiss="offcanvas"
                            >
                              <li className="mobile-elonatechinnerListItemContentRightSalesListItem">
                                <img
                                  src={SaleSoftware}
                                  alt=""
                                  style={{
                                    width: "50px",
                                    height: "50px",
                                    objectFit: "contain",
                                    alignSelf: "center",
                                    marginBottom: "1rem",
                                  }}
                                />
                                Software
                              </li>
                            </Link>
                            <Link
                              to={"/consumables"}
                              className="text-decoration-none text-dark mobile-salePad mobile-dismiss-nav-man"
                              data-bs-dismiss="offcanvas"
                            >
                              <li className="mobile-elonatechinnerListItemContentRightSalesListItem">
                                <img
                                  src={SaleConsumbles}
                                  alt=""
                                  style={{
                                    width: "50px",
                                    height: "50px",
                                    objectFit: "contain",
                                    alignSelf: "center",
                                    marginBottom: "1rem",
                                  }}
                                />
                                Consumables
                              </li>
                            </Link>
                          </ul>
                        </li>
                      )}
                    </ul>
                  </li>
                </ul>
              </li>

              {/* Support Dropdown */}
              <li className="nav-item dropdown pe-1">
                <a
                  className="nav-link active mobile-e-fonte dropdown-toggle"
                  role="button"
                  onClick={handleMobileSupportClick}
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Support
                </a>
                <ul className="dropdown-menu border-0 text-center p-4">
                  <ul className="mobile-solutions-items list-unstyled">
                    <Link
                      to={"/technical-support"}
                      className="text-decoration-none text-dark"
                    >
                      <li
                        className="mobile-solutions-items-active dropdown-item mt-1 p-2 mobile-dismiss-nav-man"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      >
                        Technical Support
                      </li>
                    </Link>
                    <Link
                      to={"/network-support"}
                      className="text-decoration-none text-dark"
                    >
                      <li
                        className="dropdown-item mt-1 p-2 mobile-dismiss-nav-man"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      >
                        Network Support
                      </li>
                    </Link>
                    <Link
                      to={"/remote-support"}
                      className="text-decoration-none text-dark"
                    >
                      <li
                        className="dropdown-item mt-1 p-2 mobile-dismiss-nav-man"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      >
                        Remote Support
                      </li>
                    </Link>
                  </ul>
                </ul>
              </li>

              {/* Strategic Services Dropdown */}
              <li className="nav-item dropdown pe-1">
                <a
                  className="nav-link active mobile-e-fonte dropdown-toggle"
                  role="button"
                  onClick={handleMobileSupportClick}
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Strategic Services
                </a>
                <ul className="dropdown-menu border-0 text-center p-4">
                  <ul className="mobile-strategic-items list-unstyled">
                    <Link
                      to={"/consulting"}
                      className="text-decoration-none text-dark"
                    >
                      <li
                        className="mobile-strategic-items-active dropdown-item mt-1 p-2 mobile-dismiss-nav-man"
                        data-bs-dismiss="offcanvas"
                      >
                        Consulting
                      </li>
                    </Link>
                    <Link
                      to={"/retainer-partnership"}
                      className="text-decoration-none text-dark"
                    >
                      <li
                        className="dropdown-item mt-1 p-2 mobile-dismiss-nav-man"
                        data-bs-dismiss="offcanvas"
                      >
                        Retainership
                      </li>
                    </Link>
                    <Link
                      to={"/training"}
                      className="text-decoration-none text-dark"
                    >
                      <li
                        className="dropdown-item mt-1 p-2 mobile-dismiss-nav-man"
                        data-bs-dismiss="offcanvas"
                      >
                        Training
                      </li>
                    </Link>
                  </ul>
                </ul>
              </li>

              {/* Products Dropdown */}
              <li className="nav-item dropdown pe-1">
                <a
                  className="nav-link active mobile-e-fonte dropdown-toggle"
                  onClick={handleMobileSupportClick}
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Products
                </a>
                <ul className="dropdown-menu border-0 text-center p-4">
                  <ul className="mobile-productss-items list-unstyled">
                    <Link
                      to={"/products"}
                      className="text-decoration-none text-dark"
                    >
                      <li
                        className="mobile-productss-items-active dropdown-item mt-1 p-2 mobile-dismiss-nav-man"
                        data-bs-dismiss="offcanvas"
                      >
                        Products
                      </li>
                    </Link>
                    <Link
                      to={"/computers"}
                      className="text-decoration-none text-dark"
                    >
                      <li
                        className="dropdown-item mt-1 p-2 mobile-dismiss-nav-man"
                        data-bs-dismiss="offcanvas"
                      >
                        Computers
                      </li>
                    </Link>
                    <Link
                      to={"/printers"}
                      className="text-decoration-none text-dark"
                    >
                      <li
                        className="dropdown-item mt-1 p-2 mobile-dismiss-nav-man"
                        data-bs-dismiss="offcanvas"
                      >
                        Printers
                      </li>
                    </Link>
                    <Link
                      to={"/office-equipment"}
                      className="text-decoration-none text-dark"
                    >
                      <li
                        className="dropdown-item mt-1 p-2 mobile-dismiss-nav-man"
                        data-bs-dismiss="offcanvas"
                      >
                        Office Equipment
                      </li>
                    </Link>
                    <Link
                      to={"/pos-system"}
                      className="text-decoration-none text-dark"
                    >
                      <li
                        className="dropdown-item mt-1 p-2 mobile-dismiss-nav-man"
                        data-bs-dismiss="offcanvas"
                      >
                        POS Systems
                      </li>
                    </Link>
                    <Link
                      to={"/network-devices"}
                      className="text-decoration-none text-dark"
                    >
                      <li
                        className="dropdown-item mt-1 p-2 mobile-dismiss-nav-man"
                        data-bs-dismiss="offcanvas"
                      >
                        Network Devices
                      </li>
                    </Link>
                  </ul>
                </ul>
              </li>

              {/* Who we are Dropdown */}
              <li className="nav-item dropdown pe-1">
                <a
                  className="nav-link active mobile-e-fonte dropdown-toggle"
                  role="button"
                  onClick={handleMobileSupportClick}
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Who we are
                </a>
                <ul className="dropdown-menu border-0 text-center p-2">
                  <ul className="mobile-whoo-items list-unstyled">
                    <Link
                      to={"/who-we-are"}
                      className="text-decoration-none text-dark"
                    >
                      <li
                        className="mobile-whoo-items-active dropdown-item mt-1 p-2 mobile-dismiss-nav-man"
                        data-bs-dismiss="offcanvas"
                      >
                        Company
                      </li>
                    </Link>
                    <Link
                      to={"/our-team"}
                      className="text-decoration-none text-dark"
                    >
                      <li
                        className="dropdown-item mt-1 p-2 mobile-dismiss-nav-man"
                        data-bs-dismiss="offcanvas"
                      >
                        Team
                      </li>
                    </Link>
                    <Link
                      to={"/portfolio"}
                      className="text-decoration-none text-dark"
                    >
                      <li
                        className="dropdown-item mt-1 p-2 mobile-dismiss-nav-man"
                        data-bs-dismiss="offcanvas"
                      >
                        Portfolio
                      </li>
                    </Link>
                    <Link
                      to={"/blog"}
                      className="text-decoration-none text-dark"
                    >
                      <li
                        className="dropdown-item mt-1 p-2 mobile-dismiss-nav-man"
                        data-bs-dismiss="offcanvas"
                      >
                        Blog
                      </li>
                    </Link>
                    <Link
                      to={"/career"}
                      className="text-decoration-none text-dark"
                    >
                      <li
                        className="dropdown-item mt-1 p-2 mobile-dismiss-nav-man"
                        data-bs-dismiss="offcanvas"
                      >
                        Career
                      </li>
                    </Link>
                  </ul>
                </ul>
              </li>

              {/* Get in touch */}
              <li className="nav-item pe-1">
                <Link
                  to={"/get-in-touch"}
                  className="nav-link mobile-e-fonte hopper-color text-decoration-none mobile-dismiss-nav-man text-white"
                  data-bs-dismiss="offcanvas"
                >
                  Get in touch
                </Link>
              </li>

              {/* Logout if admin */}
              {currentAdmin === null ? (
                <div></div>
              ) : (
                <li className="nav-item pe-4">
                  <a
                    className="nav-link fw-bold"
                    aria-current="page"
                    style={{ cursor: "pointer" }}
                    href=""
                    onClick={logout}
                  >
                    <i
                      className="bi bi-box-arrow-right mobile-dismiss-nav-man"
                      data-bs-dismiss="offcanvas"
                    ></i>
                  </a>
                </li>
              )}
            </ul>
            <div className="d-flex ps-0">
              <div className="mobile-social-links d-flex justify-content-center mx-auto pe-3">
                <Link
                  to={"/cart"}
                  className="linkedin text-white nav-link fw-bold pe-3 ps-0"
                >
                  <i className="fas fa-shopping-cart position-relative">
                    <span
                      className="position-absolute top-0 start-120 translate-middle badge mobile-cart-badge rounded-pill bg-danger mobile-dismiss-nav-man"
                      data-bs-dismiss="offcanvas"
                    >
                      {totalUniqueItems}
                    </span>
                  </i>
                </Link>
                <Link
                  className="linkedin text-white nav-link fw-bold pe-0 ps-0"
                  target="_blank"
                  rel="noopener noreferrer"
                  to={"https://www.linkedin.com/company/elonatech/"}
                >
                  <i className="bi bi-linkedin mobile-i-fonte"></i>
                </Link>
                <Link
                  className="facebook text-white nav-link fw-bold pe-0"
                  target="_blank"
                  rel="noopener noreferrer"
                  to={"https://www.facebook.com/elonatech"}
                >
                  <i className="bi bi-facebook mobile-i-fonte"></i>
                </Link>
                <Link
                  className="instagram text-white nav-link fw-bold pe-0"
                  target="_blank"
                  rel="noopener noreferrer"
                  to={"https://www.instagram.com/elonatech"}
                >
                  <i className="bi bi-instagram mobile-i-fonte"></i>
                </Link>
                <Link
                  className="twitter text-white nav-link fw-bold pe-0"
                  target="_blank"
                  rel="noopener noreferrer"
                  to={"https://twitter.com/Elonatech"}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="17"
                    fill="currentColor"
                    className="bi bi-twitter-x mobile-t-fonte"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                  </svg>
                </Link>
                <Link
                  className="linkedin text-white nav-link fw-bold pe-0"
                  target="_blank"
                  rel="noopener noreferrer"
                  to={"https://www.youtube.com/@elonatech"}
                >
                  <i className="bi bi-youtube mobile-i-fonte"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MobileHeader;
