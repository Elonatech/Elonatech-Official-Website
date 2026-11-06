import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { BASEURL } from "../../../BaseURL/BaseURL";
import Loading from "../../../components/Loading/Loading";
import JobDetailView from "./JobDetailView";
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

  return <JobDetailView job={job} />;
};

export default JobDetail;
