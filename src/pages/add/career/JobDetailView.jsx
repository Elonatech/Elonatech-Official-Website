import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { linkifyPostHtml } from "../../../components/blogDetails/linkifyPostHtml";
import ApplyNow from "../../../components/ApplyNow/ApplyNow";
import "./career.css";

// These 4 fields are only meant to live in the "Role details" sidebar —
// admins still type them as lines inside the Job Description box (that's
// how the backend parses them out), but they'd be redundant repeated in
// the main body too, so we strip those specific lines before display.
const SIDEBAR_ONLY_LABELS = [
  /^hiring\s*timeline\s*:/i,
  /^(job\s*level|experience\s*level|experience)\s*:/i,
  /^minimum\s*qualification\s*:/i,
  /^(number\s*of\s*openings|openings)\s*:/i,
];

const stripSidebarOnlyLines = (html) => {
  if (!html) return html;
  const doc = new DOMParser().parseFromString(html, "text/html");
  doc.body.querySelectorAll("p, li, h1, h2, h3, h4, h5, h6").forEach((el) => {
    const text = el.textContent.trim();
    if (SIDEBAR_ONLY_LABELS.some((re) => re.test(text))) {
      el.remove();
    }
  });
  return doc.body.innerHTML;
};

// How one job posting looks to visitors. Used by the public job page and by
// the admin's "Preview", so the preview is always exactly what visitors will
// see. In preview mode there is no page title change, no Apply form and no
// link back to the careers list.
const JobDetailView = ({ job, preview = false }) => {
  // Parsed as real HTML (not just tag-stripped) so entities like "&nbsp;"
  // from Quill get decoded instead of showing up as literal text.
  const plainSummary = (() => {
    if (!job.jobSummary) return "";
    const doc = new DOMParser().parseFromString(job.jobSummary, "text/html");
    return (doc.body.textContent || "").replace(/\s+/g, " ").trim();
  })();

  return (
    <>
      {!preview && (
        <Helmet>
          <title>{job.title} — Careers at Elonatech</title>
          <meta name="description" content={plainSummary} />
        </Helmet>
      )}

      <div className="container-fluid job-hero-section">
        <div>
          <h2 className="text-white">{job.title}</h2>
          {(job.location || job.employmentType || job.workplaceType) && (
            <p className="lead text-white mb-0">
              {[job.location, job.employmentType, job.workplaceType]
                .filter(Boolean)
                .join("  |  ")}
            </p>
          )}
        </div>
      </div>

      <div className="container my-5">
        <div className="row">
          <div className="col-lg-8">
            <h4 className="fw-bold mb-3">Job Summary</h4>

            {job.jobSummary && (
              <div
                className="job-description-content mb-4"
                dangerouslySetInnerHTML={{
                  __html: linkifyPostHtml(job.jobSummary),
                }}
              />
            )}

            <h4 className="fw-bold mb-3">Job description</h4>
            <div
              className="job-description-content"
              dangerouslySetInnerHTML={{
                __html: linkifyPostHtml(
                  stripSidebarOnlyLines(job.jobDescription || "")
                ),
              }}
            />

            {job.responsibilities && (
              <>
                <h4 className="fw-bold mb-3 mt-4">Responsibilities</h4>
                <div
                  className="job-description-content"
                  dangerouslySetInnerHTML={{
                    __html: linkifyPostHtml(job.responsibilities),
                  }}
                />
              </>
            )}

            {job.requirements && (
              <>
                <h4 className="fw-bold mb-3 mt-4">Requirements</h4>
                <div
                  className="job-description-content"
                  dangerouslySetInnerHTML={{
                    __html: linkifyPostHtml(job.requirements),
                  }}
                />
              </>
            )}

            {job.benefits && (
              <>
                <h4 className="fw-bold mb-3 mt-4">Benefits</h4>
                <div
                  className="job-description-content"
                  dangerouslySetInnerHTML={{
                    __html: linkifyPostHtml(job.benefits),
                  }}
                />
              </>
            )}
          </div>

          <div className="col-lg-4">
            <div className="card p-4 mt-4 mt-lg-0">
              {(job.location ||
                job.employmentType ||
                job.jobLevel ||
                job.minimumQualification ||
                job.numberOfOpenings ||
                job.workplaceType ||
                job.hiringTimeline) && (
                <>
                  <h6 className="fw-bold mb-3">Role details</h6>

                  {job.location && (
                    <p className="mb-2">
                      <strong>Location:</strong> {job.location}
                    </p>
                  )}
                  {job.employmentType && (
                    <p className="mb-2">
                      <strong>Employment type:</strong> {job.employmentType}
                    </p>
                  )}
                  {job.workplaceType && (
                    <p className="mb-2">
                      <strong>Workplace type:</strong> {job.workplaceType}
                    </p>
                  )}
                  {job.jobLevel && (
                    <p className="mb-2">
                      <strong>Experience level:</strong> {job.jobLevel}
                    </p>
                  )}
                  {job.minimumQualification && (
                    <p className="mb-2">
                      <strong>Minimum qualification:</strong>{" "}
                      {job.minimumQualification}
                    </p>
                  )}
                  {job.numberOfOpenings && (
                    <p className="mb-2">
                      <strong>Openings:</strong> {job.numberOfOpenings}
                    </p>
                  )}
                  {job.hiringTimeline && (
                    <p className="mb-2">
                      <strong>Hiring timeline:</strong> {job.hiringTimeline}
                    </p>
                  )}
                </>
              )}

              <div className="mt-4">
                {job.status === "Closed" ? (
                  <div className="alert alert-secondary mb-0" role="status">
                    This position is closed and is no longer accepting applications.
                  </div>
                ) : preview ? (
                  // Not clickable in a preview, so nobody can apply to something unpublished
                  <button
                    className="btn border border-light text-light mb-3"
                    style={{ backgroundColor: "#385994", opacity: 0.6, cursor: "not-allowed" }}
                    disabled
                  >
                    <h6 className="mt-1">Apply Now</h6>
                  </button>
                ) : (
                  <ApplyNow job={job} />
                )}
              </div>
            </div>
          </div>
        </div>

        {!preview && (
          <div className="mt-5">
            <Link to="/career" className="text-decoration-none">
              ← Back to all open positions
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default JobDetailView;
