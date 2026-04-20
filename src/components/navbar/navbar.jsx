import { Link, useLocation } from "react-router-dom";
import logo from "./captions/elonatech.png";
import Christmaslogo from "./captions/elonatech-christmas.png";
import { useState, useEffect, useCallback } from "react";
import { useCart } from "react-use-cart";
import "./navbar.css";
import { useAuth } from "../admin/AuthContext";

// Keep ALL your icon imports exactly as they were
import hardwareComputer from "./icons/Tech/Hardware/computer.png";
import hardwareMaintenance from "./icons/Tech/Hardware/maintaince.png";
import hardwarePhone from "./icons/Tech/Hardware/phone.png";
import hardwareOffice from "./icons/Tech/Hardware/office.png";

import networkAdmin from "./icons/Tech/Network Admin/networking-manager.png";
import networkServer from "./icons/Tech/Network Admin/server admin.png";
import networkInfastructure from "./icons/Tech/Network Admin/infastructure.png";
import networkCabling from "./icons/Tech/Network Admin/cabling.png";
import networkCctv from "./icons/Tech/Network Admin/cctv.png";
import networkInternet from "./icons/Tech/Network Admin/internet.png";
import networkSecurity from "./icons/Tech/Network Admin/network-security.png";

import systemAccess from "./icons/Tech/System Security/behavior-blocker.png";
import systemSurveillnance from "./icons/Tech/System Security/surveillance.png";
import systemTime from "./icons/Tech/System Security/time.png";

import telecomsIp from "./icons/Tech/Telecoms/ip.jpg";
import telecomsVoip from "./icons/Tech/Telecoms/voip.jpg";

import softwareSystem from "./icons/Tech/Software Solution/System2-compressed.jpg";
import softwareApplication from "./icons/Tech/Software Solution/Application.png";
import softwareBusiness from "./icons/Tech/Software Solution/business.png";

import webDev from "./icons/Digitial/web-programming-12709.png";
import appDev from "./icons/Digitial/Web Solution/developer-mode.png";
import webDomain from "./icons/Digitial/Web Solution/domain-compressed.jpg";
import WebHost from "./icons/Digitial/Web Solution/hosting-compressed.jpg";

import graphicsGraphics from "./icons/Digitial/Graphics/graphics.png";
import graphicsBrand from "./icons/Digitial/Graphics/brand.png";
import graphicsUiux from "./icons/Digitial/Graphics/uiux.png";

import video3d from "./icons/Digitial/Video/3d-select.png";
import videoMotion from "./icons/Digitial/Video/motion.png";
import videoEdit from "./icons/Digitial/Video/video-editing.png";

import teleLivestream from "./icons/Digitial/Tele/livestreaming.png";
import teleVideo from "./icons/Digitial/Tele/videoconferencing.png";

import digitalDigital from "./icons/Digitial/Digital/digital.png";
import digitalSocial from "./icons/Digitial/Digital/social.png";
import digitalEmail from "./icons/Digitial/Digital/email.png";
import digitalSeo from "./icons/Digitial/Digital/seo.png";
import digitalContent from "./icons/Digitial/Digital/content.png";
import digitalPpc from "./icons/Digitial/Digital/external-ppc.png";

import Salehardware from "./icons/Sales/workstation.png";
import SaleSoftware from "./icons/Sales/software.png";
import SaleConsumbles from "./icons/Sales/home-office.png";
import logoForXmas from "./icons/xmas/image (1).png";
import XmasHeader from "../../decoration-header/XmasHeader";

const Navbar = () => {
  const [currentAdmin, setCurrentAdmin] = useState("");
  const { logout } = useAuth();
  const { totalUniqueItems } = useCart();
  const location = useLocation();

  // Keep ALL your state variables
  const [techMouseEnter, setTechMouseEnter] = useState(true);
  const [digitalMouseEnter, setDigitalMouseEnter] = useState(false);
  const [salesMouseEnter, setSalesMouseEnter] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState("hardware");
  const [isScrolled, setIsScrolled] = useState(false);
  const [productHover, setProductHover] = useState(false);
  const [xmasLogo, setXmasLogo] = useState(false);

  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("token"));
    setCurrentAdmin(auth);
  }, []);

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    setIsScrolled(scrollY >= 50);

    if (isScrolled) {
      document.body.classList.add("has-xmas-header");
    } else {
      document.body.classList.remove("has-xmas-header");
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    document.body.classList.remove('has-xmas-header');
  }, [handleScroll]);

  // Keep your mouse handlers
  const handleTechMouseEnter = () => {
    setTechMouseEnter(true);
    setDigitalMouseEnter(false);
    setSalesMouseEnter(false);
    setActiveDropdown("hardware");
  };

  const handleDigitalMouseEnter = () => {
    setDigitalMouseEnter(true);
    setSalesMouseEnter(false);
    setTechMouseEnter(false);
    setActiveDropdown("web");
  };

  const handleSalesMouseEnter = () => {
    setSalesMouseEnter(true);
    setTechMouseEnter(false);
    setDigitalMouseEnter(false);
  };

  const handleHardwareMouseOver = () => {
    setActiveDropdown("hardware");
  };

  const handleNetworkMouseOver = () => {
    setActiveDropdown("network");
  };

  const handleSystemMouseOver = () => {
    setActiveDropdown("system");
  };

  const handleTelecomMouseOver = () => {
    setActiveDropdown("telecom");
  };

  const handleSoftwareMouseOver = () => {
    setActiveDropdown("software");
  };

  const handleWebMouseOver = () => {
    setActiveDropdown("web");
  };

  const handleDigitalMarketMouseOver = () => {
    setActiveDropdown("digitalMarketing");
  };

  const handleGraphicsMouseOver = () => {
    setActiveDropdown("graphics");
  };

  const handleVideoMouseOver = () => {
    setActiveDropdown("videoAnimations");
  };

  const handleTeleMouseOver = () => {
    setActiveDropdown("teleconferencing");
  };

  const handleProductHover = () => {
    setProductHover(true);
  };

  const handleProductLeave = () => {
    setProductHover(false);
  };

  // Check active link
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="container-box">
      {/* XmasHeader shows when scrolled
      {isScrolled ? (
        <div className="xmas-header-container">
          <XmasHeader />
        </div>
      ) : null} */}

      <div className={`desktop-nav-wrapper ${isScrolled ? "NAVbar" : "NAVba"}`}>
        <div className="desktop-nav-container">
          {/* Logo - Left Side */}

          <Link
            to="/"
            className="elonatechlogoBox"
            onMouseEnter={() => setXmasLogo(true)}
            onMouseLeave={() => setXmasLogo(false)}
          >
            <img
              src={logo}
              id="elonatech-logo-home"
              alt="Elonatech Logo"
              className="logoimg"
            />
          </Link>

          {/* Navigation Center */}
          <div className="nav-center-container">
            <ul className="elonatechlist">
              {/* Home */}
              <li className="elonatechlistItem">
                <Link to="/" className="nav-link e-fonte text-white">
                  <i className="bi bi-house-fill"></i>
                </Link>
              </li>

              {/* Solutions - Mega Menu */}
              <li
                className="elonatechlistItem drop-show"
                id="solutionsMenu"
                onMouseEnter={handleProductHover}
                onMouseLeave={handleProductLeave}
              >
                <span
                  className="nav-link e-fonte text-white dropdown-toggle"
                  style={{ cursor: "pointer" }}
                >
                  Solutions
                </span>

                <div
                  className="hover-bridge"
                  onMouseEnter={() => setProductHover(true)}
                  onMouseLeave={handleProductLeave}
                ></div>

                <div
                  className={`elonatechinnerListContainer ${
                    productHover ? "drop" : "elonatechmainDropdownDone"
                  }`}
                >
                  <div className="elonatechinnerListItemLeft">
                    <ul className="elonatechinnerListContentLeft">
                      <li
                        className={
                          techMouseEnter
                            ? "elonatechinnerListItemContentLeftActive"
                            : "elonatechinnerListItemContentLeft"
                        }
                        onMouseEnter={handleTechMouseEnter}
                      >
                        <h6 className="techCenter">Tech Solutions</h6>
                      </li>
                      <li
                        className={
                          digitalMouseEnter
                            ? "elonatechinnerListItemContentLeftActive"
                            : "elonatechinnerListItemContentLeft"
                        }
                        onMouseEnter={handleDigitalMouseEnter}
                      >
                        <h6 className="techCenter">Digital Solutions</h6>
                      </li>
                      <li
                        className={
                          salesMouseEnter
                            ? "elonatechinnerListItemContentLeftActive"
                            : "elonatechinnerListItemContentLeft"
                        }
                        onMouseEnter={handleSalesMouseEnter}
                      >
                        <h6 className="techCenter">Sales/ Supply</h6>
                      </li>
                    </ul>
                  </div>

                  <div className="elonatechline"></div>

                  <div className="elonatechinnerListItemRight">
                    {techMouseEnter && (
                      <div className="elonatechinnerListContentRight">
                        <ul className="elonatechinnerListItemContentRightTechListActive">
                          <li onMouseEnter={handleHardwareMouseOver}>
                            <div className="elonatechtest">
                              <h6 className="elonatechinnerListItemContentRightTechListTitleActive elonatechSolutionsTitle">
                                Hardware Solutions
                              </h6>
                            </div>
                            {activeDropdown === "hardware" && (
                              <ul className="elonatechhardwareSolutionsListActive">
                                <Link
                                  to="/hardware-engineering"
                                  className="text-decoration-none text-dark"
                                >
                                  <li className="elonatechhardwareSolutionsListItem">
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
                                  to="/printer-repair"
                                  className="text-decoration-none text-dark"
                                >
                                  <li className="elonatechhardwareSolutionsListItem">
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
                                  to="/mobile-repair"
                                  className="text-decoration-none text-dark"
                                >
                                  <li className="elonatechhardwareSolutionsListItem">
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
                                  to="/network"
                                  className="text-decoration-none text-dark"
                                >
                                  <li className="elonatechhardwareSolutionsListItem">
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

                          <li onMouseEnter={handleNetworkMouseOver}>
                            <div className="elonatechtest">
                              <h6 className="elonatechinnerListItemContentRightTechListTitleActive elonatechSolutionsTitle">
                                Network Solutions
                              </h6>
                            </div>
                            {activeDropdown === "network" && (
                              <ul className="elonatechnetworkAdministrationListActive">
                                <Link
                                  to="/network-administration-implementation"
                                  className="text-decoration-none text-dark"
                                >
                                  <li className="elonatechnetworkAdministrationListItem">
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
                                  to="/network-security"
                                  className="text-decoration-none text-dark"
                                >
                                  <li className="elonatechnetworkAdministrationListItem">
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
                                  to="/server-administration"
                                  className="text-decoration-none text-dark"
                                >
                                  <li className="elonatechnetworkAdministrationListItem">
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
                                  to="/system-integration"
                                  className="text-decoration-none text-dark"
                                >
                                  <li className="elonatechnetworkAdministrationListItem">
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
                                  to="/structure-cabling"
                                  className="text-decoration-none text-dark"
                                >
                                  <li className="elonatechnetworkAdministrationListItem">
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
                                  to="/cctv"
                                  className="text-decoration-none text-dark"
                                >
                                  <li className="elonatechnetworkAdministrationListItem">
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
                                  to="/internet"
                                  className="text-decoration-none text-dark"
                                >
                                  <li className="elonatechnetworkAdministrationListItem">
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

                          <li onMouseEnter={handleSoftwareMouseOver}>
                            <div className="elonatechtest">
                              <h6 className="elonatechinnerListItemContentRightTechListTitleActive elonatechSolutionsTitle">
                                Software Solutions
                              </h6>
                            </div>
                            {activeDropdown === "software" && (
                              <ul className="elonatechsoftwareSolutionsListActive">
                                <Link
                                  to="/system-software"
                                  className="text-decoration-none text-dark"
                                >
                                  <li className="elonatechsoftwareSolutionsListListItem">
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
                                  to="/application-software"
                                  className="text-decoration-none text-dark"
                                >
                                  <li className="elonatechsoftwareSolutionsListListItem">
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
                                  to="/business-software"
                                  className="text-decoration-none text-dark"
                                >
                                  <li className="elonatechsoftwareSolutionsListListItem">
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

                          <li onMouseEnter={handleTelecomMouseOver}>
                            <div className="elonatechtest">
                              <h6 className="elonatechinnerListItemContentRightTechListTitleActive elonatechSolutionsTitle">
                                Communication
                              </h6>
                            </div>
                            {activeDropdown === "telecom" && (
                              <ul className="elonatechtelecomsListActive">
                                <Link
                                  to="/ip-telephony"
                                  className="text-decoration-none text-dark"
                                >
                                  <li className="elonatechtelecomsListListItem">
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
                                  to="/voip"
                                  className="text-decoration-none text-dark"
                                >
                                  <li className="elonatechtelecomsListListItem">
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

                          <li onMouseEnter={handleSystemMouseOver}>
                            <div className="elonatechtest">
                              <h6 className="elonatechinnerListItemContentRightTechListTitleActive elonatechSolutionsTitle">
                                Access & Security
                              </h6>
                            </div>
                            {activeDropdown === "system" && (
                              <ul className="elonatechsystemSecurityListActive">
                                <Link
                                  to="/access-control"
                                  className="text-decoration-none text-dark"
                                >
                                  <li className="elonatechsystemSecurityListListItem">
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
                                  to="/time-management"
                                  className="text-decoration-none text-dark"
                                >
                                  <li className="elonatechsystemSecurityListListItem">
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
                                  to="/surveillance"
                                  className="text-decoration-none text-dark"
                                >
                                  <li className="elonatechsystemSecurityListListItem">
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
                      </div>
                    )}

                    {digitalMouseEnter && (
                      <div className="elonatechinnerListContentRight">
                        <ul className="elonatechinnerListItemContentRightDigitalListActive">
                          <li onMouseEnter={handleWebMouseOver}>
                            <div className="elonatechtest">
                              <h6 className="elonatechinnerListItemContentRightTechListTitleActive elonatechSolutionsTitle">
                                Web & App Solutions
                              </h6>
                            </div>
                            {activeDropdown === "web" && (
                              <ul className="elonatechwebSolutionsListActive">
                                <Link
                                  to="/web-design"
                                  className="text-decoration-none text-dark"
                                >
                                  <li className="elonatechwebSolutionsListItem">
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
                                  to="/app-development"
                                  className="text-decoration-none text-dark"
                                >
                                  <li className="elonatechwebSolutionsListItem">
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
                                  to="/domain"
                                  className="text-decoration-none text-dark"
                                >
                                  <li className="elonatechwebSolutionsListItem">
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
                                  to="/hosting"
                                  className="text-decoration-none text-dark"
                                >
                                  <li className="elonatechwebSolutionsListItem">
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

                          <li onMouseEnter={handleDigitalMarketMouseOver}>
                            <div className="elonatechtest">
                              <h6 className="elonatechinnerListItemContentRightTechListTitleActive elonatechSolutionsTitle">
                                Digital Marketing
                              </h6>
                            </div>
                            {activeDropdown === "digitalMarketing" && (
                              <ul className="elonatechdigitalMarketingListActive">
                                <Link
                                  to="/digital-marketing"
                                  className="text-decoration-none text-dark"
                                >
                                  <li className="elonatechdigitalMarketingListItem">
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
                                  to="/social-media-marketing"
                                  className="text-decoration-none text-dark"
                                >
                                  <li className="elonatechdigitalMarketingListItem">
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
                                  to="/email-marketing"
                                  className="text-decoration-none text-dark"
                                >
                                  <li className="elonatechdigitalMarketingListItem">
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
                                  to="/seo"
                                  className="text-decoration-none text-dark"
                                >
                                  <li className="elonatechdigitalMarketingListItem">
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
                                  to="/content-marketing"
                                  className="text-decoration-none text-dark"
                                >
                                  <li className="elonatechdigitalMarketingListItem">
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
                                  to="/ppc"
                                  className="text-decoration-none text-dark"
                                >
                                  <li className="elonatechdigitalMarketingListItem">
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

                          <li onMouseEnter={handleGraphicsMouseOver}>
                            <div className="elonatechtest">
                              <h6 className="elonatechinnerListItemContentRightTechListTitleActive elonatechSolutionsTitle">
                                Graphics
                              </h6>
                            </div>
                            {activeDropdown === "graphics" && (
                              <ul className="elonatechgraphicsListActive">
                                <Link
                                  to="/graphics-design"
                                  className="text-decoration-none text-dark"
                                >
                                  <li className="elonatechgraphicsListListItem">
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
                                  to="/brand-identity"
                                  className="text-decoration-none text-dark"
                                >
                                  <li className="elonatechgraphicsListListItem">
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
                                  to="/uiux"
                                  className="text-decoration-none text-dark"
                                >
                                  <li className="elonatechgraphicsListListItem">
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

                          <li onMouseEnter={handleVideoMouseOver}>
                            <div className="elonatechtest">
                              <h6 className="elonatechinnerListItemContentRightTechListTitleActive elonatechSolutionsTitle">
                                Video Animations
                              </h6>
                            </div>
                            {activeDropdown === "videoAnimations" && (
                              <ul className="elonatechvideoAnimationsListActive">
                                <Link
                                  to="/animation"
                                  className="text-decoration-none text-dark"
                                >
                                  <li className="elonatechvideoAnimationsListListItem">
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
                                  to="/motion-graphics"
                                  className="text-decoration-none text-dark"
                                >
                                  <li className="elonatechvideoAnimationsListListItem">
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
                                  to="/video-editing"
                                  className="text-decoration-none text-dark"
                                >
                                  <li className="elonatechvideoAnimationsListListItem">
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

                          <li onMouseEnter={handleTeleMouseOver}>
                            <div className="elonatechtest">
                              <h6 className="elonatechinnerListItemContentRightTechListTitleActive elonatechSolutionsTitle">
                                Teleconferencing
                              </h6>
                            </div>
                            {activeDropdown === "teleconferencing" && (
                              <ul className="elonatechteleconferencingListActive">
                                <Link
                                  to="/livestreaming"
                                  className="text-decoration-none text-dark"
                                >
                                  <li className="elonatechteleconferencingListListItem">
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
                                  to="/videoconferencing"
                                  className="text-decoration-none text-dark"
                                >
                                  <li className="elonatechteleconferencingListListItem">
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
                      </div>
                    )}

                    {salesMouseEnter && (
                      <div className="elonatechinnerListContentRight">
                        <ul className="elonatechinnerListItemContentRightSalesListActive">
                          <Link
                            to="/hardware-supply"
                            className="text-decoration-none text-dark salePad"
                          >
                            <li className="elonatechinnerListItemContentRightSalesListItem">
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
                            to="/software-supply"
                            className="text-decoration-none text-dark salePad"
                          >
                            <li className="elonatechinnerListItemContentRightSalesListItem">
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
                            to="/consumables"
                            className="text-decoration-none text-dark salePad"
                          >
                            <li className="elonatechinnerListItemContentRightSalesListItem">
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
                      </div>
                    )}
                  </div>
                </div>
              </li>

              {/* Support Dropdown */}
              <li className="elonatechlistItem drop-show">
                <span
                  className="nav-link e-fonte text-white dropdown-toggle"
                  style={{ cursor: "pointer" }}
                >
                  Support
                </span>
                <div className="drop-menu">
                  <ul className="solutions-items list-unstyled">
                    <li>
                      <Link
                        to="/technical-support"
                        className={`dropdown-item ${
                          isActive("/technical-support")
                            ? "solutions-items-active"
                            : ""
                        }`}
                        id="tech-support"
                      >
                        Technical Support
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/network-support"
                        className={`dropdown-item ${
                          isActive("/network-support")
                            ? "solutions-items-active"
                            : ""
                        }`}
                      >
                        Network Support
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/remote-support"
                        className={`dropdown-item ${
                          isActive("/remote-support")
                            ? "solutions-items-active"
                            : ""
                        }`}
                      >
                        Remote Support
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              {/* Strategic Services Dropdown */}
              <li className="elonatechlistItem drop-show">
                <span
                  className="nav-link e-fonte text-white dropdown-toggle"
                  style={{ cursor: "pointer" }}
                >
                  Strategic Services
                </span>
                <div className="drop-menu">
                  <ul className="strategic-items list-unstyled">
                    <li>
                      <Link
                        to="/consulting"
                        className={`dropdown-item ${
                          isActive("/consulting")
                            ? "strategic-items-active"
                            : ""
                        }`}
                      >
                        Consulting
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/retainer-partnership"
                        className={`dropdown-item ${
                          isActive("/retainer-partnership")
                            ? "strategic-items-active"
                            : ""
                        }`}
                      >
                        Retainership
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/training"
                        className={`dropdown-item ${
                          isActive("/training") ? "strategic-items-active" : ""
                        }`}
                      >
                        Training
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              {/* Products Dropdown */}
              <li className="elonatechlistItem drop-show">
                <span
                  className="nav-link e-fonte text-white dropdown-toggle"
                  style={{ cursor: "pointer" }}
                >
                  Products
                </span>
                <div className="drop-menu">
                  <ul className="productss-items list-unstyled">
                    <li>
                      <Link
                        to="/products"
                        className={`dropdown-item ${
                          isActive("/products") ? "productss-items-active" : ""
                        }`}
                      >
                        Products
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/computers"
                        className={`dropdown-item ${
                          isActive("/computers") ? "productss-items-active" : ""
                        }`}
                      >
                        Computers
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/printers"
                        className={`dropdown-item ${
                          isActive("/printers") ? "productss-items-active" : ""
                        }`}
                      >
                        Printers
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/office-equipment"
                        className={`dropdown-item ${
                          isActive("/office-equipment")
                            ? "productss-items-active"
                            : ""
                        }`}
                      >
                        Office Equipment
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/pos-system"
                        className={`dropdown-item ${
                          isActive("/pos-system")
                            ? "productss-items-active"
                            : ""
                        }`}
                      >
                        POS Systems
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/network-devices"
                        className={`dropdown-item ${
                          isActive("/network-devices")
                            ? "productss-items-active"
                            : ""
                        }`}
                      >
                        Network Devices
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              {/* Who We Are Dropdown */}
              <li className="elonatechlistItem drop-show">
                <span
                  className="nav-link e-fonte text-white dropdown-toggle"
                  style={{ cursor: "pointer" }}
                >
                  Who we are
                </span>
                <div className="drop-menu">
                  <ul className="whoo-items list-unstyled">
                    <li>
                      <Link
                        to="/who-we-are"
                        className={`dropdown-item ${
                          isActive("/who-we-are") ? "whoo-items-active" : ""
                        }`}
                      >
                        Company
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/our-team"
                        className={`dropdown-item ${
                          isActive("/our-team") ? "whoo-items-active" : ""
                        }`}
                      >
                        Team
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/portfolio"
                        className={`dropdown-item ${
                          isActive("/portfolio") ? "whoo-items-active" : ""
                        }`}
                      >
                        Portfolio
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/blog"
                        className={`dropdown-item ${
                          isActive("/blog") ? "whoo-items-active" : ""
                        }`}
                      >
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/career"
                        className={`dropdown-item ${
                          isActive("/career") ? "whoo-items-active" : ""
                        }`}
                      >
                        Career
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              {/* Get in Touch */}
              <li className="elonatechlistItem">
                <Link
                  to="/get-in-touch"
                  className="nav-link e-fonte text-white text-decoration-none"
                >
                  Get in touch
                </Link>
              </li>

              {/* Admin Logout */}
              {currentAdmin && (
                <li className="elonatechlistItem">
                  <span
                    onClick={logout}
                    className="nav-link e-fonte text-white"
                    style={{ cursor: "pointer" }}
                  >
                    <i className="bi bi-box-arrow-right"></i>
                  </span>
                </li>
              )}
            </ul>
          </div>

          {/* Social Links & Cart - Right Side */}
          <div className="social-links">
            <Link
              to="/cart"
              className="linkedin text-white nav-link fw-bold pe-3 ps-0"
            >
              <i className="fas fa-shopping-cart position-relative">
                {totalUniqueItems > 0 && (
                  <span className="position-absolute top-0 start-120 translate-middle badge cart-badge rounded-pill bg-danger">
                    {totalUniqueItems}
                  </span>
                )}
              </i>
            </Link>
            <Link
              to="https://www.linkedin.com/company/elonatech/"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin text-white nav-link fw-bold pe-0 ps-0"
            >
              <i className="bi bi-linkedin i-fonte"></i>
            </Link>
            <Link
              to="https://www.facebook.com/elonatech"
              target="_blank"
              rel="noopener noreferrer"
              className="facebook text-white nav-link fw-bold pe-0"
            >
              <i className="bi bi-facebook i-fonte"></i>
            </Link>
            <Link
              to="https://www.instagram.com/elonatech"
              target="_blank"
              rel="noopener noreferrer"
              className="instagram text-white nav-link fw-bold pe-0"
            >
              <i className="bi bi-instagram i-fonte"></i>
            </Link>
            <Link
              to="https://twitter.com/Elonatech"
              target="_blank"
              rel="noopener noreferrer"
              className="twitter text-white nav-link fw-bold pe-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                fill="currentColor"
                className="bi bi-twitter-x t-fonte"
                viewBox="0 0 16 16"
              >
                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
              </svg>
            </Link>
            <Link
              to="https://www.youtube.com/@elonatech"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin text-white nav-link fw-bold pe-0"
            >
              <i className="bi bi-youtube i-fonte"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
