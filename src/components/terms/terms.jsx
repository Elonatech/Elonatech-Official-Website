import "./terms.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service | Elonatech Nigeria Limited</title>
        <meta
          name="description"
          content="Read the Terms of Service for Elonatech Nigeria Limited. Understand our policies, user responsibilities, payment terms, and legal agreements."
        />
        <link rel="canonical" href="https://elonatech.com.ng/terms-of-service" />
      </Helmet>

      {/* Header Section */}
      <div className="container-fluid terms-section">
        <div className="text-content">
          <h2>Terms of Service</h2>
          <h5>Understanding Our Agreement</h5>
          <p className="lead">
            Please read these terms carefully before using our services.
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
                <strong>Effective Date: May 1st, 2026</strong>
              </p>
              
              <p className="mb-5">
                These Terms of Service ("Terms") govern your access to and use of the services provided by Elonatech Nigeria Limited ("Elonatech", "we", "our", or "us"). By accessing our website, engaging our services, or entering into any service agreement with us, you agree to be bound by these Terms.
              </p>

              {/* Section 1 */}
              <h2 className="mt-5 mb-3">1. Scope of Services</h2>
              <p className="mb-4">Elonatech provides technology-driven services including but not limited to:</p>
              <ul className="list-unstyled li-space-lg mb-5">
                <li className="media">
                  <div className="media-body">IT infrastructure and networking solutions</div>
                </li>
                <li className="media">
                  <div className="media-body">Software and web development</div>
                </li>
                <li className="media">
                  <div className="media-body">Cloud services and hosting</div>
                </li>
                <li className="media">
                  <div className="media-body">Technical support and maintenance</div>
                </li>
                <li className="media">
                  <div className="media-body">IT consulting and digital transformation</div>
                </li>
                <li className="media">
                  <div className="media-body">Hardware supply and related services</div>
                </li>
              </ul>
              <p className="mb-5">Specific service details may be defined in separate agreements, proposals, or contracts.</p>

              {/* Section 2 */}
              <h2 className="mt-5 mb-3">2. User Responsibilities</h2>
              <p className="mb-4">By using our services, you agree to:</p>
              <ul className="list-unstyled li-space-lg mb-4">
                <li className="media">
                  <div className="media-body">Provide accurate and complete information when required</div>
                </li>
                <li className="media">
                  <div className="media-body">Use our services only for lawful and authorized purposes</div>
                </li>
                <li className="media">
                  <div className="media-body">Not engage in activities that may harm, disrupt, or compromise our systems or services</div>
                </li>
                <li className="media">
                  <div className="media-body">Maintain the confidentiality of any access credentials provided</div>
                </li>
              </ul>
              <p className="mb-5">You are responsible for all activities carried out under your account or within your organization.</p>

              {/* Section 3 */}
              <h2 className="mt-5 mb-3">3. Service Agreements and Deliverables</h2>
              <ul className="list-unstyled li-space-lg mb-5">
                <li className="media">
                  <div className="media-body">All projects and services may be governed by a separate Service Level Agreement (SLA) or contract</div>
                </li>
                <li className="media">
                  <div className="media-body">Timelines, deliverables, and scope will be clearly defined in writing</div>
                </li>
                <li className="media">
                  <div className="media-body">Any changes to agreed scope may affect cost and delivery timelines</div>
                </li>
              </ul>

              {/* Section 4 */}
              <h2 className="mt-5 mb-3">4. Payments and Billing</h2>
              <ul className="list-unstyled li-space-lg mb-5">
                <li className="media">
                  <div className="media-body">Fees for services will be communicated in proposals, invoices, or contracts</div>
                </li>
                <li className="media">
                  <div className="media-body">Payments must be made in accordance with agreed terms</div>
                </li>
                <li className="media">
                  <div className="media-body">Late payments may result in service suspension or additional charges</div>
                </li>
                <li className="media">
                  <div className="media-body">All fees are non-refundable unless otherwise stated in writing</div>
                </li>
              </ul>

              {/* Section 5 */}
              <h2 className="mt-5 mb-3">5. Intellectual Property</h2>
              <ul className="list-unstyled li-space-lg mb-5">
                <li className="media">
                  <div className="media-body">All pre-existing intellectual property belonging to Elonatech remains our property</div>
                </li>
                <li className="media">
                  <div className="media-body">Upon full payment, clients may receive rights to agreed deliverables as specified in contracts</div>
                </li>
                <li className="media">
                  <div className="media-body">Clients grant Elonatech limited rights to use project work for portfolio or promotional purposes unless otherwise agreed</div>
                </li>
              </ul>

              {/* Section 6 */}
              <h2 className="mt-5 mb-3">6. Confidentiality</h2>
              <p className="mb-4">Both parties agree to:</p>
              <ul className="list-unstyled li-space-lg mb-5">
                <li className="media">
                  <div className="media-body">Keep confidential any sensitive or proprietary information shared during service engagement</div>
                </li>
                <li className="media">
                  <div className="media-body">Not disclose such information to third parties without prior consent, except where required by law</div>
                </li>
              </ul>

              {/* Section 7 */}
              <h2 className="mt-5 mb-3">7. Data Protection and Privacy</h2>
              <p className="mb-5">
                Your use of our services is also governed by our Privacy Policy. Elonatech processes personal data in compliance with applicable data protection regulations, including the Nigeria Data Protection Regulation (NDPR).
              </p>

              {/* Section 8 */}
              <h2 className="mt-5 mb-3">8. Service Availability</h2>
              <ul className="list-unstyled li-space-lg mb-5">
                <li className="media">
                  <div className="media-body">We strive to ensure high availability of our services but do not guarantee uninterrupted access</div>
                </li>
                <li className="media">
                  <div className="media-body">Scheduled maintenance or unforeseen technical issues may cause temporary downtime</div>
                </li>
                <li className="media">
                  <div className="media-body">We are not liable for losses resulting from service interruptions beyond our reasonable control</div>
                </li>
              </ul>

              {/* Section 9 */}
              <h2 className="mt-5 mb-3">9. Third-Party Services</h2>
              <p className="mb-4">Some solutions may integrate third-party tools, platforms, or providers. Elonatech is not responsible for:</p>
              <ul className="list-unstyled li-space-lg mb-4">
                <li className="media">
                  <div className="media-body">Performance or availability of third-party services</div>
                </li>
                <li className="media">
                  <div className="media-body">Any data handling practices of such providers</div>
                </li>
              </ul>
              <p className="mb-5">Users are encouraged to review third-party terms independently.</p>

              {/* Section 10 */}
              <h2 className="mt-5 mb-3">10. Limitation of Liability</h2>
              <p className="mb-4">To the fullest extent permitted by law:</p>
              <ul className="list-unstyled li-space-lg mb-5">
                <li className="media">
                  <div className="media-body">Elonatech shall not be liable for indirect, incidental, or consequential damages</div>
                </li>
                <li className="media">
                  <div className="media-body">Our total liability for any claim shall not exceed the amount paid for the specific service in question</div>
                </li>
              </ul>

              {/* Section 11 */}
              <h2 className="mt-5 mb-3">11. Termination</h2>
              <p className="mb-4">We reserve the right to:</p>
              <ul className="list-unstyled li-space-lg mb-4">
                <li className="media">
                  <div className="media-body">Suspend or terminate services in case of breach of these Terms</div>
                </li>
                <li className="media">
                  <div className="media-body">Discontinue services with reasonable notice where necessary</div>
                </li>
              </ul>
              <p className="mb-5">Clients may also terminate services in accordance with agreed contract terms.</p>

              {/* Section 12 */}
              <h2 className="mt-5 mb-3">12. Indemnification</h2>
              <p className="mb-4">You agree to indemnify and hold Elonatech harmless from any claims, damages, or liabilities arising from:</p>
              <ul className="list-unstyled li-space-lg mb-5">
                <li className="media">
                  <div className="media-body">Misuse of our services</div>
                </li>
                <li className="media">
                  <div className="media-body">Violation of applicable laws or third-party rights</div>
                </li>
              </ul>

              {/* Section 13 */}
              <h2 className="mt-5 mb-3">13. Governing Law</h2>
              <p className="mb-5">
                These Terms shall be governed by and interpreted in accordance with the laws of the Federal Republic of Nigeria.
              </p>

              {/* Section 14 */}
              <h2 className="mt-5 mb-3">14. Changes to These Terms</h2>
              <p className="mb-5">
                We may update these Terms periodically. Continued use of our services after updates constitutes acceptance of the revised Terms.
              </p>

              {/* Section 15 - Contact Information with text-box */}
              <h2 className="mt-5 mb-3">15. Contact Information</h2>
              <div className="text-box mb-5">
                <p className="mb-3">
                  For inquiries regarding these Terms:
                </p>
                <p className="mb-0">
                  <strong>Elonatech Nigeria Limited</strong><br />
                  4 Oluwakemi Street, Shasha Road, Shasha, Egbeda, Lagos, Nigeria<br />
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

export default Terms;