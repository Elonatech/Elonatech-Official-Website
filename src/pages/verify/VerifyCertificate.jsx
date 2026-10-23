import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import { BASEURL } from "../../BaseURL/BaseURL";
import {
  programLabel,
  formatLongDate,
  verifyUrl,
  linkedInAddUrl,
  PROGRAMME_FULL_NAME,
  CORE_SUMMARY,
  CORE_TRACKS,
  CORE_DURATION,
  safeFileName,
  downloadBlob,
} from "../../utils/certificate";
import { certificatePreviewUrl, certificatePdfBlob } from "../../utils/certificateDesign";
import "./verifyCertificate.css";

const initials = (name) =>
  name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");

const Detail = ({ label, children, mono }) => (
  <div className="vc-detail">
    <dt>{label}</dt>
    <dd className={mono ? "vc-code" : undefined}>{children}</dd>
  </div>
);

// What a scanned QR code opens. Public, never indexed by search engines, and
// it only ever shows what the API returns (name, programme, dates, code).
const VerifyCertificate = () => {
  const { code } = useParams();
  const [state, setState] = useState({ status: "loading" });
  const [copied, setCopied] = useState(false);
  const [preview, setPreview] = useState("");
  const [pdfBusy, setPdfBusy] = useState(false);

  useEffect(() => {
    let cancelled = false;
    setState({ status: "loading" });

    axios
      .get(`${BASEURL}/api/v1/certificates/verify/${encodeURIComponent(code)}`, {
        // 400 / 404 / 429 carry a message we show; only 5xx or no network is an "error"
        validateStatus: (s) => s < 500,
      })
      .then((res) => {
        if (cancelled) return;
        const { status, data } = res;
        if (status === 200 && data.valid) {
          setState({ status: "valid", certificate: data.certificate });
        } else if (status === 200 && data.revoked) {
          setState({ status: "revoked" });
        } else if (status === 404) {
          setState({ status: "notfound" });
        } else if (status === 429) {
          setState({ status: "busy" });
        } else {
          setState({ status: "invalid" });
        }
      })
      .catch(() => {
        if (!cancelled) setState({ status: "error" });
      });

    return () => {
      cancelled = true;
    };
  }, [code]);

  // The certificate picture comes from the server (the signature and stamp stay there)
  useEffect(() => {
    if (state.status !== "valid") return undefined;
    let cancelled = false;
    let objectUrl = "";
    setPreview("");
    certificatePreviewUrl(state.certificate)
      .then((url) => {
        objectUrl = url;
        if (cancelled) URL.revokeObjectURL(url);
        else setPreview(url);
      })
      .catch(() => {
        /* the details above still show everything */
      });
    return () => {
      cancelled = true;
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, [state]);

  const downloadPdf = async () => {
    setPdfBusy(true);
    try {
      const c = state.certificate;
      downloadBlob(await certificatePdfBlob(c), `${safeFileName(c.fullName)}-${c.code}.pdf`);
    } finally {
      setPdfBusy(false);
    }
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(verifyUrl(state.certificate.code));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard blocked — the link is in the address bar anyway */
    }
  };

  const { status, certificate } = state;
  const tone = certificate?.program === "Ignite" ? "ignite" : "core";

  return (
    <>
      <Helmet>
        <title>Certificate Verification | Elonatech</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="description" content="Verify an Elonatech ETMPDP certificate." />
      </Helmet>

      <main className="vc-page">
        <section className="vc-hero vc-hero-sm">
          <div className="container">
            <p className="vc-hero-eyebrow">Elonatech · ETMPDP</p>
            <h1 className="vc-hero-title">Certificate Verification</h1>
            <p className="vc-hero-sub">Confirm that an Elonatech certificate is genuine.</p>
          </div>
        </section>

        <div className="vc-body">
          {status === "loading" && (
            <div className="vc-card vc-center" aria-live="polite">
              <div className="vc-spinner" />
              <p>Checking certificate…</p>
            </div>
          )}

          {status === "valid" && (
            <>
              <div className="vc-banner vc-banner-ok" role="status">
                <span className="vc-tick" aria-hidden="true">✓</span>
                <div>
                  <strong>Verified</strong>
                  <span>This certificate was issued by Elonatech Nigeria Limited and is valid.</span>
                </div>
              </div>

              <section className={`vc-card vc-person vc-tone-${tone}`}>
                <div className="vc-person-head">
                  <span className="vc-avatar" aria-hidden="true">{initials(certificate.fullName)}</span>
                  <div>
                    <h2 className="vc-name">{certificate.fullName}</h2>
                    <span className="vc-pill">{programLabel(certificate.program)}</span>
                  </div>
                </div>
                <p className="vc-programme-full">{PROGRAMME_FULL_NAME}</p>

                <dl className="vc-details">
                  {certificate.specialFocus && <Detail label="Special focus">{certificate.specialFocus}</Detail>}
                  {certificate.pathwayLevel && <Detail label="Pathway level">{certificate.pathwayLevel}</Detail>}
                  {certificate.specialization && <Detail label="Primary specialization">{certificate.specialization}</Detail>}
                  {/* Core is always 12 months, even on certificates made before duration was recorded */}
                  {(certificate.duration || (tone === "core" && CORE_DURATION)) && (
                    <Detail label="Duration">{certificate.duration || CORE_DURATION}</Detail>
                  )}
                  {certificate.enrollmentDate && (
                    <Detail label="Start date">{formatLongDate(certificate.enrollmentDate)}</Detail>
                  )}
                  <Detail label="Completion date">{formatLongDate(certificate.completionDate)}</Detail>
                  {certificate.issueDate && (
                    <Detail label="Date of issue">{formatLongDate(certificate.issueDate)}</Detail>
                  )}
                  <Detail label="Certificate ID" mono>{certificate.code}</Detail>
                </dl>

                {tone === "core" && (
                  <div className="vc-areas">
                    <h3 className="vc-areas-title">Programme coverage</h3>
                    <p className="vc-areas-lead">{CORE_SUMMARY}</p>
                    <p className="vc-areas-tracks">{CORE_TRACKS.join("  •  ")}</p>
                  </div>
                )}
              </section>

              <section className="vc-card vc-showcase">
                <h3 className="vc-showcase-title">The certificate</h3>
                {preview ? (
                  <img
                    className="vc-preview"
                    src={preview}
                    alt={`Certificate: ${certificate.fullName}, ${programLabel(certificate.program)}`}
                  />
                ) : (
                  <div className="vc-preview-skeleton" aria-hidden="true" />
                )}

                <div className="vc-actions">
                  <button type="button" className="vc-btn vc-btn-primary" onClick={downloadPdf} disabled={pdfBusy}>
                    {pdfBusy ? "Preparing PDF…" : "Download PDF"}
                  </button>
                  <a
                    className="vc-btn"
                    href={linkedInAddUrl(certificate)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Add to LinkedIn profile
                  </a>
                  <button type="button" className="vc-btn" onClick={copyLink}>
                    {copied ? "Link copied" : "Copy link"}
                  </button>
                </div>
              </section>
            </>
          )}

          {status === "revoked" && (
            <div className="vc-card vc-center">
              <div className="vc-banner vc-banner-bad" role="status">
                <span className="vc-tick" aria-hidden="true">!</span>
                <div>
                  <strong>No longer valid</strong>
                  <span>This certificate has been withdrawn by Elonatech.</span>
                </div>
              </div>
              <p>
                For any questions, contact us at{" "}
                <a href="mailto:info@elonatech.com.ng">info@elonatech.com.ng</a>.
              </p>
            </div>
          )}

          {(status === "notfound" || status === "invalid") && (
            <div className="vc-card vc-center">
              <div className="vc-banner vc-banner-bad" role="status">
                <span className="vc-tick" aria-hidden="true">✕</span>
                <div>
                  <strong>
                    {status === "notfound" ? "Certificate not found" : "Not a valid certificate code"}
                  </strong>
                  <span>
                    {status === "notfound"
                      ? "No certificate matches this code."
                      : "Please check the code, or scan the QR code on the certificate again."}
                  </span>
                </div>
              </div>
              <p>
                If you think this is a mistake, contact us at{" "}
                <a href="mailto:info@elonatech.com.ng">info@elonatech.com.ng</a>.
              </p>
            </div>
          )}

          {status === "busy" && (
            <div className="vc-card vc-center">
              <p>Too many attempts. Please wait a minute and try again.</p>
            </div>
          )}

          {status === "error" && (
            <div className="vc-card vc-center">
              <p>We couldn't check this certificate right now. Please try again shortly.</p>
              <button type="button" className="vc-btn" onClick={() => window.location.reload()}>
                Try again
              </button>
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default VerifyCertificate;
