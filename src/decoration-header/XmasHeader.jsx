import { Sparkles, Star } from "lucide-react";
import "./xmas-header.css";

const XmasHeader = () => {
  return (
    <div className="xmas-wrapper">
      <header className="xmas-header">
        {/* Snow pattern overlay */}
        <div className="xmas-snow-overlay"></div>

        <div className="xmas-content">
          <div className="xmas-icons-top">
            <Star className="icon-star pulse" fill="currentColor" />
            <Sparkles className="icon-sparkle" />
          </div>

          <h1 className="xmas-title">
            <span className="xmas-title-hover">Merry Christmas</span>
          </h1>

          <p className="xmas-subtitle">
            May your days be merry and bright, filled with joy, love, and the
            warmth of the festive season
          </p>

          <div className="xmas-icons-bottom">
            <Sparkles className="icon-sparkle" />
            <Star className="icon-star pulse" fill="currentColor" />
            <Sparkles className="icon-sparkle" />
          </div>
        </div>

        <div className="xmas-bottom-line"></div>
      </header>
    </div>
  );
};

export default XmasHeader;
