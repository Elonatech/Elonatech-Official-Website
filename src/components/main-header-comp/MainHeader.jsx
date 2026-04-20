import React, { useState, useEffect } from "react";
import MobileHeader from "../Header/MobileHeader";
import "./nav.css"; // Or "./main-header.css" if that's the actual file name
import Navbar from "../navbar/navbar";

const MainHeader = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      // Use 1024px as the breakpoint (matches desktop CSS)
      setIsMobile(window.innerWidth < 1024);
    };

    // Check on mount
    checkScreenSize();

    // Debounce resize events for better performance
    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(checkScreenSize, 100);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  return (
    <div className="main-header-container">
      {/* Mobile Header - only shown on mobile */}
      {isMobile ? <MobileHeader /> : <Navbar />}
    </div>
  );
};

export default MainHeader;