import { Link } from "react-router-dom";
import Footer from "../../components/footer/footer";
import logo from "../../components/navbar/captions/elonatech.png";
import "./verifyCertificate.css";

// The frame around the certificate pages: just the logo at the top and the
// site footer. No menu, so a person who arrives from a QR code sees the
// certificate and nothing else to wander off to. (The logo has white lettering,
// which is why it sits on a dark band.)
//
// The logo sits in the same container, with the same side margin (mx-4), as
// the logo in the footer, so the two line up.
const CertificateShell = ({ children }) => (
  <>
    <header className="vc-header">
      <div className="container">
        <Link to="/" className="mx-4 d-inline-block" aria-label="Elonatech home">
          <img src={logo} alt="Elonatech" className="vc-logo" />
        </Link>
      </div>
    </header>
    {children}
    <Footer />
  </>
);

export default CertificateShell;
