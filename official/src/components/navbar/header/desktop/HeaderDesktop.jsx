// HeaderDesktop.jsx
import { Link, useLocation } from "react-router-dom";
import logo from "../../captions/elonatech.png";
import { useNavbarLogic } from "../hook/useNavBarLogic";
import "../desktop/nav.css";

// Import all icons exactly as in your original file
// import hardwareComputer from "../icons/Tech/Hardware/computer.png";
import hardwareComputer from "../../icons/Tech/Hardware/computer.png";
import hardwareMaintenance from "../../icons/Tech/Hardware/maintaince.png";
import hardwarePhone from "../../icons/Tech/Hardware/phone.png";
import hardwareOffice from "../../icons/Tech/Hardware/office.png";
import networkAdmin from "../../icons/Tech/Network Admin/networking-manager.png";
import networkServer from "../../icons/Tech/Network Admin/server admin.png";
import networkInfastructure from "../../icons/Tech/Network Admin/infastructure.png";
import networkCabling from "../../icons/Tech/Network Admin/cabling.png";
import networkCctv from "../../icons/Tech/Network Admin/cctv.png";
import networkInternet from "../../icons/Tech/Network Admin/internet.png";
import networkSecurity from "../../icons/Tech/Network Admin/network-security.png";
import systemAccess from "../../icons/Tech/System Security/behavior-blocker.png";
import systemSurveillnance from "../../icons/Tech/System Security/surveillance.png";
import systemTime from "../../icons/Tech/System Security/time.png";
import telecomsIp from "../../icons/Tech/Telecoms/ip.jpg";
import telecomsVoip from "../../icons/Tech/Telecoms/voip.jpg";
import softwareSystem from "../../icons/Tech/Software Solution/System2-compressed.jpg";
import softwareApplication from "../../icons/Tech/Software Solution/Application.png";
import softwareBusiness from "../../icons/Tech/Software Solution/business.png";
import webDev from "../../icons/Digitial/web-programming-12709.png";
import appDev from "../../icons/Digitial/Web Solution/developer-mode.png";
import webDomain from "../../icons/Digitial/Web Solution/domain-compressed.jpg";
import WebHost from "../../icons/Digitial/Web Solution/hosting-compressed.jpg";
import graphicsGraphics from "../../icons/Digitial/Graphics/graphics.png";
import graphicsBrand from "../../icons/Digitial/Graphics/brand.png";
import graphicsUiux from "../../icons/Digitial/Graphics/uiux.png";
import video3d from "../../icons/Digitial/Video/3d-select.png";
import videoMotion from "../../icons/Digitial/Video/motion.png";
import videoEdit from "../../icons/Digitial/Video/video-editing.png";
import teleLivestream from "../../icons/Digitial/Tele/livestreaming.png";
// import teleVideo from "./icons/Digitial/Tele/videoconferencing.png";
import teleVideo from "../../icons/Digitial/Tele/videoconferencing.png";
import digitalDigital from "../../icons/Digitial/Digital/digital.png";
import digitalSocial from "../../icons/Digitial/Digital/social.png";
import digitalEmail from "../../icons/Digitial/Digital/email.png";
import digitalSeo from "../../icons/Digitial/Digital/seo.png";
import digitalContent from "../../icons/Digitial/Digital/content.png";
import digitalPpc from "../../icons/Digitial/Digital/external-ppc.png";
import Salehardware from "../../icons/Sales/workstation.png";
import SaleSoftware from "../../icons/Sales/software.png";
import SaleConsumbles from "../../icons/Sales/home-office.png";

const HeaderDesktop = () => {
  // Use the shared logic with isMobile = false
  const logic = useNavbarLogic(false);

  const location = useLocation();

  return (
    <>
      <nav
        id="navbarShow"
        className={`navbar navbar-dark fixed-top ${
          logic.scroll ? "NAVbar" : "NAVba"
        }`}
        style={{
          display: "flex",
          opacity: "1",
          visibility: "visible",
        }}
      >
        <div className="container-fluid">
          <Link to={"/"} className="navbar-brand border-0">
            <img
              src={logo}
              id="elonatech-logo-home"
              className="lazyload border-0"
              alt="Elonatech Logo"
            />
          </Link>

          <div className="desktop-navigation">
            <ul className="navbar-nav mx-auto">
              {/*============================================  first drop down ===============================================*/}
              <li className="nav-item pe-4">
                <Link to={"/"} className="nav-link fw-bold active">
                  <i className="bi bi-house-fill"></i>
                </Link>
              </li>
              <li
                className="nav-item mx-0 pe-2 my-md-0 active elonatechlistItem"
                onMouseEnter={logic.handleProductHover}
                onMouseLeave={logic.handleProductLeave}
              >
                <a
                  onClick={logic.handleProductClick}
                  style={{ fontWeight: "bold" }}
                  className="nav-link e-fonte text-white dropdown-toggle"
                >
                  Solutions
                </a>
                <ul
                  id="myDIV"
                  className={
                    logic.productHover
                      ? "elonatechinnerListContainer "
                      : "elonatechmainDropdownDone"
                  }
                >
                  <li className="elonatechinnerListItemLeft">
                    <ul className="elonatechinnerListContentLeft">
                      <li
                        className={
                          logic.techMouseEnter
                            ? "elonatechinnerListItemContentLeftActive"
                            : "elonatechinnerListItemContentLeft"
                        }
                        onMouseEnter={logic.handleTechMouseEnter}
                      >
                        <h6 className="techCenter">Tech Solutions</h6>
                      </li>
                      <li
                        className={
                          logic.digitalMouseEnter
                            ? "elonatechinnerListItemContentLeftActive"
                            : "elonatechinnerListItemContentLeft"
                        }
                        onMouseEnter={logic.handleDigitalMouseEnter}
                      >
                        <h6 className="techCenter">Digital Solutions</h6>
                      </li>
                      <li
                        className={
                          logic.salesMouseEnter
                            ? "elonatechinnerListItemContentLeftActive"
                            : "elonatechinnerListItemContentLeft"
                        }
                        onMouseEnter={logic.handleSalesMouseEnter}
                      >
                        <h6 className="techCenter">Sales/ Supply</h6>
                      </li>
                    </ul>
                  </li>
                  <div className="elonatechline"></div>
                  <li className="elonatechinnerListItemRight">
                    <ul className="elonatechinnerListContentRight">
                      {/*=========================================== TECH SOLUTIONS ( RIGHTSIDE) ===========================================*/}
                      <li className="elonatechinnerListContentRight">
                        <ul
                          className={
                            logic.techMouseEnter
                              ? "elonatechinnerListItemContentRightTechListActive"
                              : "elonatechinnerListItemContentRightTechList"
                          }
                        >
                          {/*===================================== HARDWARE SOLUTIONS =============================================================*/}
                          <li
                            className={
                              "elonatechinnerListItemContentRightTechListItem"
                            }
                            onMouseEnter={() =>
                              logic.setActiveDropdown("hardware")
                            }
                          >
                            <div className="elonatechtest">
                              <h6
                                onClick={() =>
                                  logic.setActiveDropdown(
                                    logic.activeDropdown === "hardware"
                                      ? null
                                      : "hardware"
                                  )
                                }
                                className={
                                  logic.activeDropdown === "hardware"
                                    ? "elonatechinnerListItemContentRightTechListTitleActive elonatechSolutionsTitle"
                                    : "elonatechinnerListItemContentRightTechListTitle elonatechSolutionsTitle"
                                }
                              >
                                Hardware Solutions
                              </h6>
                              <i className="bi bi-plus text-dark fs-3"></i>
                            </div>
                            <ul
                              className={
                                logic.activeDropdown === "hardware"
                                  ? "elonatechhardwareSolutionsListActive"
                                  : "elonatechhardwareSolutionsList"
                              }
                            >
                              <Link
                                to={"/hardware-engineering"}
                                className="text-decoration-none text-dark"
                              >
                                <li
                                  className={
                                    "elonatechhardwareSolutionsListItem"
                                  }
                                >
                                  <img
                                    src={hardwareComputer}
                                    className="lazyload"
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
                                className="text-decoration-none text-dark"
                              >
                                <li
                                  className={
                                    "elonatechhardwareSolutionsListItem"
                                  }
                                >
                                  <img
                                    src={hardwareOffice}
                                    className="lazyload"
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
                                className="text-decoration-none text-dark"
                              >
                                <li
                                  className={
                                    "elonatechhardwareSolutionsListItem"
                                  }
                                >
                                  <img
                                    src={hardwarePhone}
                                    className="lazyload"
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
                                className="text-decoration-none text-dark"
                              >
                                <li
                                  className={
                                    "elonatechhardwareSolutionsListItem"
                                  }
                                >
                                  <img
                                    src={hardwareMaintenance}
                                    className="lazyload"
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
                          </li>

                          <li
                            id="here"
                            class="nav-item   drop-show dropdown  pe-1"
                          >
                            <a
                              class="nav-link active e-fonte active  dropdown-toggle"
                              role="button"
                              onClick={handleSupportClick}
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              Support
                            </a>
                            <ul class="dropdown-menu drop-menu border-0 text-center p-4">
                              <ul class="solutions-items list-unstyled">
                                <Link
                                  to={"/technical-support"}
                                  class="text-decoration-none text-dark"
                                >
                                  <li
                                    class="solutions-items-active dropdown-item  mt-1 p-2 dismiss-nav-man"
                                    data-bs-dismiss="offcanvas"
                                    aria-label="Close"
                                  >
                                    Technical Support{" "}
                                  </li>
                                </Link>
                                <Link
                                  to={"/network-support"}
                                  class="text-decoration-none text-dark"
                                >
                                  <li
                                    class="dropdown-item  mt-1 p-2  dismiss-nav-man"
                                    data-bs-dismiss="offcanvas"
                                    aria-label="Close"
                                  >
                                    Network Support
                                  </li>
                                </Link>
                                <Link
                                  to={"/remote-support"}
                                  class="text-decoration-none text-dark"
                                >
                                  <li
                                    class="dropdown-item  mt-1 p-2 dismiss-nav-man"
                                    data-bs-dismiss="offcanvas"
                                    aria-label="Close"
                                  >
                                    Remote Support
                                  </li>
                                </Link>
                              </ul>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              {/* ... Continue with ALL the other dropdowns exactly as in your original ... */}
            </ul>

            {/* Social links and cart for desktop */}
            <div className="d-flex ps-0">
              <div className="social-links d-flex justify-content-center mx-auto pe-3">
                <Link
                  to={"/cart"}
                  className="linkedin text-white nav-link fw-bold pe-3 ps-0"
                >
                  <i className="fas fa-shopping-cart position-relative">
                    <span className="position-absolute top-0 start-120 translate-middle badge cart-badge rounded-pill bg-danger">
                      {logic.totalUniqueItems}
                    </span>
                  </i>
                </Link>
                {/* ... Other social links ... */}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default HeaderDesktop;
