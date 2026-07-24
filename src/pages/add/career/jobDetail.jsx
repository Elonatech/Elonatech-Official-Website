import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import DOMPurify from "dompurify";
import { BASEURL } from "../../../BaseURL/BaseURL";
import Loading from "../../../components/Loading/Loading";
import ApplyNow from "../../../components/ApplyNow/ApplyNow";
import "./career.css";

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
    return (
      <div className="d-flex justify-content-center my-5 py-5">
        <Loading />
      </div>
    );
  }

  if (notFound || !job) {
    return (
      <div className="container text-center my-5 py-5">
        <h3>Job not found</h3>
        <p className="text-muted">This position may have been filled or removed.</p>
        <Link to="/career" className="btn btn-primary mt-3">
          View open positions
        </Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{job.title} — Careers at Elonatech</title>
        <meta name="description" content={job.jobSummary} />
      </Helmet>

      <div className="container-fluid bg-dark py-5">
        <div className="py-5 mt-5 text-center">
          <h2 className="text-white">{job.title}</h2>
          <p className="lead text-white mb-0">
            {job.location} &nbsp;|&nbsp; {job.employmentType} &nbsp;|&nbsp; {job.workplaceType}
          </p>
        </div>
      </div>

      <div className="container my-5">
        <div className="row">
          <div className="col-lg-8">
            <h4 className="fw-bold mb-3">Job summary</h4>
            <p style={{ fontWeight: 400 }}>{job.jobSummary}</p>

            <h5 className="fw-bold mt-4 mb-3">Job description</h5>
            <div
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(job.jobDescription || ""),
              }}
            />

            {job.responsibilities && (
              <>
                <h5 className="fw-bold mt-4 mb-3">Responsibilities</h5>
                <p style={{ fontWeight: 400, whiteSpace: "pre-line" }}>
                  {job.responsibilities}
                </p>
              </>
            )}

            {job.requirements && (
              <>
                <h5 className="fw-bold mt-4 mb-3">Requirements</h5>
                <p style={{ fontWeight: 400, whiteSpace: "pre-line" }}>
                  {job.requirements}
                </p>
              </>
            )}

            {job.benefits && (
              <>
                <h5 className="fw-bold mt-4 mb-3">Benefits</h5>
                <p style={{ fontWeight: 400, whiteSpace: "pre-line" }}>
                  {job.benefits}
                </p>
              </>
            )}
          </div>

          <div className="col-lg-4">
            <div className="card p-4 mt-4 mt-lg-0">
              <h6 className="fw-bold mb-3">Role details</h6>

              <p className="mb-2">
                <strong>Experience level:</strong> {job.jobLevel}
              </p>
              <p className="mb-2">
                <strong>Minimum qualification:</strong> {job.minimumQualification}
              </p>
              <p className="mb-2">
                <strong>Openings:</strong> {job.numberOfOpenings}
              </p>
              {job.hiringTimeline && (
                <p className="mb-2">
                  <strong>Hiring timeline:</strong> {job.hiringTimeline}
                </p>
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
