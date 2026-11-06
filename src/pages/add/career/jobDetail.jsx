import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { BASEURL } from "../../../BaseURL/BaseURL";
import Loading from "../../../components/Loading/Loading";
import JobDetailView from "./JobDetailView";
import "./career.css";

// The dark photo band the job pages open with. The not-found and could-not-load
// pages use it too, so the site header (white lettering, see-through) always has
// something dark behind it.
const MessageBanner = ({ title, text }) => (
  <div className="container-fluid job-hero-section">
    <div>
      <h2 className="text-white">{title}</h2>
      <p className="lead text-white mb-0">{text}</p>
    </div>
  </div>
);

// Generic detail page for any job posting created in the admin. Replaces the
// old hard-coded per-role pages, and hands the real job down to ApplyNow so
// the application is linked to the posting.
const JobDetail = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  // The job could not be loaded for some other reason (slow or unreachable
  // server, a bad connection): that is NOT the same as the job not existing.
  const [loadFailed, setLoadFailed] = useState(false);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        setLoading(true);
        setNotFound(false);
        setLoadFailed(false);
        const res = await axios.get(`${BASEURL}/api/v1/jobs/${id}`);
        setJob(res.data.job);
      } catch (error) {
        if (error.response?.status === 404) setNotFound(true);
        else setLoadFailed(true);
      } finally {
        setLoading(false);
      }
    };
    fetchJob();
  }, [id, attempt]);

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

  if (loadFailed) {
    return (
      <>
        <MessageBanner
          title="We couldn't load this job"
          text="Please check your connection and try again."
        />
        <div className="container text-center my-5 py-4">
          <button className="btn btn-primary mt-3 me-2" onClick={() => setAttempt((n) => n + 1)}>
            Try again
          </button>
          <Link to="/career" className="btn btn-outline-primary mt-3">
            View open positions
          </Link>
        </div>
      </>
    );
  }

  if (notFound || !job) {
    return (
      <>
        <MessageBanner
          title="Job not found"
          text="This position may have been filled or removed."
        />
        <div className="container text-center my-5 py-4">
          <Link to="/career" className="btn btn-primary mt-3">
            View open positions
          </Link>
        </div>
      </>
    );
  }

  return <JobDetailView job={job} />;
};

export default JobDetail;
