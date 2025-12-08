// useNavbarLogic.js
import { useState, useEffect, useCallback } from "react";
// import { useAuth } from "../admin/AuthContext";
import { useAuth } from "../../../admin/AuthContext";
import { useCart } from "react-use-cart";

export const useNavbarLogic = (isMobile = false) => {
  const [currentAdmin, setCurrentAdmin] = useState("");
  const { logout } = useAuth();
  const { totalUniqueItems } = useCart();

  ////////////////////////////////////////////////////////////////////////////////////////
  const [techMouseEnter, setTechMouseEnter] = useState(true);
  const [digitalMouseEnter, setDigitalMouseEnter] = useState(false);
  const [salesMouseEnter, setSalesMouseEnter] = useState(false);

  const [hardwareMouseOver, setHardwareMouseOver] = useState(true);
  const [hardwareMouseClick, setHardwareMouseClick] = useState(false);
  const [networkMouseOver, setNetworkMouseOver] = useState(false);
  const [networkMouseClick, setNetworkMouseClick] = useState(false);
  const [systemMouseOver, setSystemMouseOver] = useState(false);
  const [systemMouseClick, setSystemMouseClick] = useState(false);
  const [telecomMouseOver, setTelecomMouseOver] = useState(false);
  const [telecomMouseClick, setTelecomMouseClick] = useState(false);
  const [softwareMouseOver, setSoftwareMouseOver] = useState(false);
  const [softwareMouseClick, setSoftwareMouseClick] = useState(false);
  const [webMouseOver, setWebMouseOver] = useState(false);
  const [webMouseClick, setWebMouseClick] = useState(false);
  const [digitalMarketMouseOver, setDigitalMarketMouseOver] = useState(false);
  const [digitalMarketMouseClick, setDigitalMarketMouseClick] = useState(false);
  const [graphicsMouseOver, setGraphicsMouseOver] = useState(false);
  const [graphicsMouseClick, setGraphicsMouseClick] = useState(false);
  const [videoMouseOver, setVideoMouseOver] = useState(false);
  const [videoMouseClick, setVideoMouseClick] = useState(false);
  const [teleMouseOver, setTeleMouseOver] = useState(false);
  const [teleMouseClick, setTeleMouseClick] = useState(false);

  const [productHover, setProductHover] = useState(false);
  const [productClick, setProductClick] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // SAMPLE
  const isSmallScreen = isMobile;
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(isMobile);

  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    if (initialLoad) {
      handleTechMouseEnter();
      setInitialLoad(false);
    }
  }, []);

  const handleHardwareMouseOver = () => {
    if (!isSmallScreen) {
      setActiveDropdown("hardware");
    }
  };

  const handleHardwareMouseClick = () => {
    if (isSmallScreen) {
      setActiveDropdown(activeDropdown === "hardware" ? null : "hardware");
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (!isMobile) {
        setIsMobileView(window.innerWidth < 1236);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobile]);

  // NETWORK
  const handleNetworkMouseOver = () => {
    if (!isSmallScreen) {
      setActiveDropdown("network");
    }
  };

  const handleNetworkMouseClick = () => {
    if (isSmallScreen) {
      setActiveDropdown(activeDropdown === "network" ? null : "network");
    }
  };

  // SYSTEM
  const handleSystemMouseOver = () => {
    if (!isSmallScreen) {
      setActiveDropdown("system");
    }
  };

  const handleSystemMouseClick = () => {
    if (isSmallScreen) {
      setActiveDropdown(activeDropdown === "system" ? null : "system");
    }
  };

  // TELECOM
  const handleTelecomMouseOver = () => {
    if (!isSmallScreen) {
      setActiveDropdown("telecom");
    }
  };

  const handleTelecomMouseClick = () => {
    if (isSmallScreen) {
      setActiveDropdown(activeDropdown === "telecom" ? null : "telecom");
    }
  };

  // SOFTWARE
  const handleSoftwareMouseOver = () => {
    if (!isSmallScreen) {
      setActiveDropdown("software");
    }
  };

  const handleSoftwareMouseClick = () => {
    if (isSmallScreen) {
      setActiveDropdown(activeDropdown === "software" ? null : "software");
    }
  };

  const resetAllStates = () => {
    setWebMouseOver(false);
    setWebMouseClick(false);
    setDigitalMarketMouseOver(false);
    setDigitalMarketMouseClick(false);
    setGraphicsMouseOver(false);
    setGraphicsMouseClick(false);
    setVideoMouseOver(false);
    setVideoMouseClick(false);
    setTeleMouseOver(false);
    setTeleMouseClick(false);
  };

  const handleWebMouseOver = () => {
    if (!isSmallScreen) {
      resetAllStates();
      setWebMouseOver(true);
    }
  };

  const handleWebMouseClick = () => {
    if (isSmallScreen) {
      resetAllStates();
      setWebMouseClick(!webMouseClick);
    }
  };

  const handleDigitalMarketMouseOver = () => {
    if (!isSmallScreen) {
      resetAllStates();
      setDigitalMarketMouseOver(true);
    }
  };

  const handleDigitalMarketMouseClick = () => {
    if (isSmallScreen) {
      resetAllStates();
      setDigitalMarketMouseClick(!digitalMarketMouseClick);
    }
  };

  const handleGraphicsMouseClick = () => {
    if (isSmallScreen) {
      resetAllStates();
      setGraphicsMouseClick(!graphicsMouseClick);
    }
  };

  const handleGraphicsMouseOver = () => {
    if (!isSmallScreen) {
      resetAllStates();
      setGraphicsMouseOver(true);
    }
  };

  const handleVideoMouseClick = () => {
    if (isSmallScreen) {
      resetAllStates();
      setVideoMouseClick(!videoMouseClick);
    }
  };

  const handleVideoMouseOver = () => {
    if (!isSmallScreen) {
      resetAllStates();
      setVideoMouseOver(true);
    }
  };

  const handleTeleMouseClick = () => {
    if (isSmallScreen) {
      resetAllStates();
      setTeleMouseClick(!teleMouseClick);
    }
  };

  const handleTeleMouseOver = () => {
    if (!isSmallScreen) {
      resetAllStates();
      setTeleMouseOver(true);
    }
  };

  const handleSupportClick = () => {
    if (isSmallScreen) {
      let x = document.getElementById("myDIV");
      if (x.style.display === "block") {
        x.style.display = "none";
      }
    }
  };

  const handleProductHover = () => {
    if (!isSmallScreen) {
      setProductHover(true);
    }
  };

  const handleProductLeave = () => {
    if (!isSmallScreen) {
      setProductHover(false);
    }
  };

  const handleProductClick = () => {
    if (isSmallScreen) {
      let x = document.getElementById("myDIV");
      if (x.style.display === "none" || x.style.display === "") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    } else {
      setDropdownOpen(!isDropdownOpen);
      setProductHover(!productHover);
    }
  };

  const handleTechMouseEnter = () => {
    setTechMouseEnter(true);
    setDigitalMouseEnter(false);
    setSalesMouseEnter(false);
    if (!isMobileView) {
      setActiveDropdown("hardware");
    }
  };

  const handleDigitalMouseEnter = () => {
    setDigitalMouseEnter(true);
    setSalesMouseEnter(false);
    setTechMouseEnter(false);
    if (!isMobileView) {
      setActiveDropdown("web");
    }
  };
  const handleSalesMouseEnter = () => {
    setSalesMouseEnter(true);
    setTechMouseEnter(false);
    setDigitalMouseEnter(false);
  };

  //============================================================================= //
  const [scroll, setScroll] = useState(false);

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    setScroll(scrollY >= 420);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // ==================== ===================================
  useEffect(() => {
    $(".solutions-items li").on("mouseenter", function () {
      $(".solutions-items li").removeClass("solutions-items-active");
      $(this).addClass("solutions-items-active");
    });
  });
  // =======================================================
  useEffect(() => {
    $(".strategic-items li").on("mouseenter", function () {
      $(".strategic-items li").removeClass("strategic-items-active");
      $(this).addClass("strategic-items-active");
    });
  });
  // =======================================================
  useEffect(() => {
    $(".productss-items li").on("mouseenter", function () {
      $(".productss-items li").removeClass("productss-items-active");
      $(this).addClass("productss-items-active");
    });
  });
  // =======================================================
  useEffect(() => {
    $(".whoo-items li").on("mouseenter", function () {
      $(".whoo-items li").removeClass("whoo-items-active");
      $(this).addClass("whoo-items-active");
    });
  });

  // ========================================================================= //
  useEffect(() => {
    let classList = document.getElementById("here")?.classList;
    if (classList) {
      let minWidth769 = window.matchMedia("(min-width: 769px)");
      const match = (e) => {
        minWidth769.matches
          ? classList.add("drop-show")
          : classList.remove("drop-show");
      };
      match();
    }
  });

  // =================== third drop down   ====================================
  useEffect(() => {
    let classList = document.getElementById("here3")?.classList;
    if (classList) {
      let minWidth769 = window.matchMedia("(min-width: 769px)");
      const match = (e) => {
        minWidth769.matches
          ? classList.add("drop-show")
          : classList.remove("drop-show");
      };
      match();
    }
  });

  // =================== fourth drop down   ====================================
  useEffect(() => {
    let classList = document.getElementById("here4")?.classList;
    if (classList) {
      let minWidth769 = window.matchMedia("(min-width: 769px)");
      const match = (e) => {
        minWidth769.matches
          ? classList.add("drop-show")
          : classList.remove("drop-show");
      };
      match();
    }
  });
  // =================== fifth drop down   ====================================
  useEffect(() => {
    let classList = document.getElementById("here5")?.classList;
    if (classList) {
      var minWidth769 = window.matchMedia("(min-width: 769px)");
      const match = (e) => {
        minWidth769.matches
          ? classList.add("drop-show")
          : classList.remove("drop-show");
      };
      match();
    }
  });

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Admin check
  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("token"));
    setCurrentAdmin(auth);
  }, []);

  return {
    currentAdmin,
    logout,
    totalUniqueItems,
    techMouseEnter,
    digitalMouseEnter,
    salesMouseEnter,
    hardwareMouseOver,
    hardwareMouseClick,
    networkMouseOver,
    networkMouseClick,
    systemMouseOver,
    systemMouseClick,
    telecomMouseOver,
    telecomMouseClick,
    softwareMouseOver,
    softwareMouseClick,
    webMouseOver,
    webMouseClick,
    digitalMarketMouseOver,
    digitalMarketMouseClick,
    graphicsMouseOver,
    graphicsMouseClick,
    videoMouseOver,
    videoMouseClick,
    teleMouseOver,
    teleMouseClick,
    productHover,
    productClick,
    activeDropdown,
    isSmallScreen,
    isDropdownOpen,
    isMobileView,
    initialLoad,
    scroll,
    windowWidth,
    handleHardwareMouseOver,
    handleHardwareMouseClick,
    handleNetworkMouseOver,
    handleNetworkMouseClick,
    handleSystemMouseOver,
    handleSystemMouseClick,
    handleTelecomMouseOver,
    handleTelecomMouseClick,
    handleSoftwareMouseOver,
    handleSoftwareMouseClick,
    resetAllStates,
    handleWebMouseOver,
    handleWebMouseClick,
    handleDigitalMarketMouseOver,
    handleDigitalMarketMouseClick,
    handleGraphicsMouseClick,
    handleGraphicsMouseOver,
    handleVideoMouseClick,
    handleVideoMouseOver,
    handleTeleMouseClick,
    handleTeleMouseOver,
    handleSupportClick,
    handleProductHover,
    handleProductLeave,
    handleProductClick,
    handleTechMouseEnter,
    handleDigitalMouseEnter,
    handleSalesMouseEnter,
    handleScroll,
    setActiveDropdown,
    setProductHover,
    setWebMouseClick,
    setDigitalMarketMouseClick,
    setGraphicsMouseClick,
    setVideoMouseClick,
    setTeleMouseClick,
  };
};