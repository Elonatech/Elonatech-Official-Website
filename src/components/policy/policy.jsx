import "./policy.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Policy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Elonatech Nigeria Limited</title>
        <meta
          name="description"
          content="Elonatech Nigeria Limited is committed to protecting your privacy. Read our professional privacy policy to understand how we collect, use, and safeguard your personal data."
        />
        <link rel="canonical" href="https://elonatech.com.ng/privacy-policy" />
      </Helmet>

      {/* Header Section */}
      <div className="container-fluid privacy-policy-section">
        <div className="text-content">
          <h2>Privacy Policy</h2>
          <h5>Your Privacy is Important to Us</h5>
          <p className="lead">
            Elonatech Nigeria Limited is committed to protecting your personal
            information and your right to privacy.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="ex-basic-1 pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-xl-10 offset-xl-1">
              
              {/* Effective Date */}
              <p className="mb-5">
                <strong>Effective Date: 1st May, 2026</strong>
              </p>
              
              <p className="mb-5">
                Elonatech Nigeria Limited ("Elonatech", "we", "our", or "us") is
                committed to protecting your privacy and ensuring the security
                of your personal data. This Privacy Policy explains how we
                collect, use, disclose, and safeguard your information when you
                interact with our website, services, and digital platforms.
              </p>

              {/* Section 1 */}
              <h2 className="mt-5 mb-3">1. Information We Collect</h2>
              <p className="mb-4">
                We may collect and process the following categories of data:
              </p>
              
              <h3>1.1. Personal Information</h3>
              <ul className="list-unstyled li-space-lg mb-4">
                <li className="media">
                  <div className="media-body">Full name, email address, phone number</div>
                </li>
                <li className="media">
                  <div className="media-body">Company name and job title</div>
                </li>
                <li className="media">
                  <div className="media-body">Billing and contact details</div>
                </li>
              </ul>

              <h3>1.2. Technical & Usage Data</h3>
              <ul className="list-unstyled li-space-lg mb-4">
                <li className="media">
                  <div className="media-body">IP address, browser type, device information</div>
                </li>
                <li className="media">
                  <div className="media-body">Pages visited, time spent, referral sources</div>
                </li>
                <li className="media">
                  <div className="media-body">Log files and system activity data</div>
                </li>
              </ul>

              <h3>1.3. Service-Related Data</h3>
              <ul className="list-unstyled li-space-lg mb-4">
                <li className="media">
                  <div className="media-body">Information provided during consultations or support requests</div>
                </li>
                <li className="media">
                  <div className="media-body">Project requirements and technical configurations</div>
                </li>
                <li className="media">
                  <div className="media-body">Communication records (emails, chats, support tickets)</div>
                </li>
              </ul>

              <h3>1.4. Payment Information</h3>
              <p className="mb-5">
                Payments may be processed via secure third-party providers.
                Elonatech does not store full card details.
              </p>

              {/* Section 2 */}
              <h2 className="mt-5 mb-3">2. How We Use Your Information</h2>
              <p className="mb-4">We use collected data for the following purposes:</p>
              <ul className="list-unstyled li-space-lg mb-5">
                <li className="media">
                  <div className="media-body">To provide and manage IT services, software solutions, and support</div>
                </li>
                <li className="media">
                  <div className="media-body">To respond to inquiries, requests, and technical issues</div>
                </li>
                <li className="media">
                  <div className="media-body">To process transactions and send service-related communications</div>
                </li>
                <li className="media">
                  <div className="media-body">To improve our website, services, and user experience</div>
                </li>
                <li className="media">
                  <div className="media-body">To enhance security, prevent fraud, and ensure system integrity</div>
                </li>
                <li className="media">
                  <div className="media-body">To send updates, newsletters, or marketing communications (with consent)</div>
                </li>
              </ul>

              {/* Section 3 */}
              <h2 className="mt-5 mb-3">3. Legal Basis for Processing (Where Applicable)</h2>
              <p className="mb-4">We process your data based on:</p>
              <ul className="list-unstyled li-space-lg mb-5">
                <li className="media">
                  <div className="media-body">Your consent</div>
                </li>
                <li className="media">
                  <div className="media-body">Performance of a contract</div>
                </li>
                <li className="media">
                  <div className="media-body">Compliance with legal obligations</div>
                </li>
                <li className="media">
                  <div className="media-body">Legitimate business interests (e.g., service improvement, security)</div>
                </li>
              </ul>

              {/* Section 4 */}
              <h2 className="mt-5 mb-3">4. Data Sharing and Disclosure</h2>
              <p className="mb-4">
                We do not sell your personal data. However, we may share information with:
              </p>
              <ul className="list-unstyled li-space-lg mb-4">
                <li className="media">
                  <div className="media-body">Trusted service providers (hosting, cloud, analytics, payment processors)</div>
                </li>
                <li className="media">
                  <div className="media-body">Professional advisors (legal, financial, compliance)</div>
                </li>
                <li className="media">
                  <div className="media-body">Regulatory authorities where required by law</div>
                </li>
              </ul>
              <p className="mb-5">All third parties are required to maintain strict data confidentiality and security.</p>

              {/* Section 5 */}
              <h2 className="mt-5 mb-3">5. Data Security</h2>
              <p className="mb-4">We implement appropriate technical and organizational measures, including:</p>
              <ul className="list-unstyled li-space-lg mb-4">
                <li className="media">
                  <div className="media-body">Secure servers and encryption protocols</div>
                </li>
                <li className="media">
                  <div className="media-body">Access control and authentication systems</div>
                </li>
                <li className="media">
                  <div className="media-body">Regular monitoring and vulnerability assessments</div>
                </li>
              </ul>
              <p className="mb-5">
                Despite our efforts, no system is 100% secure, but we continuously improve our safeguards.
              </p>

              {/* Section 6 */}
              <h2 className="mt-5 mb-3">6. Data Retention</h2>
              <p className="mb-4">We retain personal data only for as long as necessary to:</p>
              <ul className="list-unstyled li-space-lg mb-5">
                <li className="media">
                  <div className="media-body">Fulfill the purposes outlined in this policy</div>
                </li>
                <li className="media">
                  <div className="media-body">Comply with legal, regulatory, or contractual obligations</div>
                </li>
              </ul>

              {/* Section 7 */}
              <h2 className="mt-5 mb-3">7. Your Rights</h2>
              <p className="mb-4">Depending on applicable laws, you may have the right to:</p>
              <ul className="list-unstyled li-space-lg mb-4">
                <li className="media">
                  <div className="media-body">Access your personal data</div>
                </li>
                <li className="media">
                  <div className="media-body">Request correction or deletion</div>
                </li>
                <li className="media">
                  <div className="media-body">Object to or restrict processing</div>
                </li>
                <li className="media">
                  <div className="media-body">Withdraw consent at any time</div>
                </li>
                <li className="media">
                  <div className="media-body">Request data portability</div>
                </li>
              </ul>
              <p className="mb-5">To exercise these rights, contact us using the details below.</p>

              {/* Section 8 */}
              <h2 className="mt-5 mb-3">8. Cookies and Tracking Technologies</h2>
              <p className="mb-4">Our website uses cookies and similar technologies to:</p>
              <ul className="list-unstyled li-space-lg mb-4">
                <li className="media">
                  <div className="media-body">Improve functionality and user experience</div>
                </li>
                <li className="media">
                  <div className="media-body">Analyze traffic and usage patterns</div>
                </li>
                <li className="media">
                  <div className="media-body">Personalize content</div>
                </li>
              </ul>
              <p className="mb-5">You can manage cookie preferences through your browser settings.</p>

              {/* Section 9 */}
              <h2 className="mt-5 mb-3">9. Third-Party Links</h2>
              <p className="mb-5">
                Our website may contain links to external websites. Elonatech is
                not responsible for the privacy practices of those third parties.
              </p>

              {/* Section 10 */}
              <h2 className="mt-5 mb-3">10. International Data Transfers</h2>
              <p className="mb-5">
                Where data is transferred outside Nigeria, we ensure appropriate
                safeguards are in place in line with applicable data protection laws.
              </p>

              {/* Section 11 */}
              <h2 className="mt-5 mb-3">11. Updates to This Policy</h2>
              <p className="mb-5">
                We may update this Privacy Policy periodically. Changes will be
                posted on this page with an updated effective date.
              </p>

              {/* Section 12 - Contact Information with text-box */}
              <h2 className="mt-5 mb-3">12. Contact Information</h2>
              <div className="text-box mb-5">
                <p className="mb-3">
                  For questions, requests, or concerns regarding this Privacy Policy:
                </p>
                <p className="mb-0">
                  <strong>Elonatech Nigeria Limited</strong><br />
                  4 Oluwakemi Street, Shasha Road, Egbeda, Lagos, Nigeria<br />
                  Email: info@elonatech.com.ng<br />
                  Phone: (+234) 9014544520
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Policy;