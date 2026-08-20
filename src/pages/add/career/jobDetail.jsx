import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import DOMPurify from "dompurify";
import { BASEURL } from "../../../BaseURL/BaseURL";
import Loading from "../../../components/Loading/Loading";
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

// Generic detail page for any job posting created in the admin. Replaces the
// old hard-coded per-role pages, and hands the real job down to ApplyNow so
// the application is linked to the posting.
const JobDetail = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${BASEURL}/api/v1/jobs/${id}`);
        setJob(res.data.job);
      } catch (error) {
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    };
    fetchJob();
  }, [id]);

  if (loading) {
    // Keeps the same dark hero chrome as the loaded page (just without the
    // photo/title yet) so there's no jarring flash from white to navy while
    // the job data is still being fetched.
    return (
      <div
        className="container-fluid d-flex justify-content-center align-items-center"
        style={{ minHeight: 280, backgroundColor: "#11253D" }}
      >
        <Loading />
      </div>
    );
  }

  if (notFound || !job) {
    return (
      <div className="container text-center my-5 py-5">
        <h3>Job not found</h3>
        <p className="text-muted">
          This position may have been filled or removed.
        </p>
        <Link to="/career" className="btn btn-primary mt-3">
          View open positions
        </Link>
      </div>
    );
  }

  // Parsed as real HTML (not just tag-stripped) so entities like "&nbsp;"
  // from Quill get decoded instead of showing up as literal text.
  const plainSummary = (() => {
    if (!job.jobSummary) return "";
    const doc = new DOMParser().parseFromString(job.jobSummary, "text/html");
    return (doc.body.textContent || "").replace(/\s+/g, " ").trim();
  })();

  return (
    <>
      <Helmet>
        <title>{job.title} — Careers at Elonatech</title>
        <meta name="description" content={plainSummary} />
      </Helmet>

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
                  __html: DOMPurify.sanitize(job.jobSummary),
                }}
              />
            )}

            <h4 className="fw-bold mb-3">Job description</h4>
            <div
              className="job-description-content"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(
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
                    __html: DOMPurify.sanitize(job.responsibilities),
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
                    __html: DOMPurify.sanitize(job.requirements),
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
                    __html: DOMPurify.sanitize(job.benefits),
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
                <ApplyNow job={job} />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <Link to="/career" className="text-decoration-none">
            ← Back to all open positions
          </Link>
        </div>
      </div>
    </>
  );
};

export default JobDetail;
