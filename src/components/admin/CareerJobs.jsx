import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import { BASEURL } from "../../BaseURL/BaseURL";
import AdminSidebar from "./AdminSidebar";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./SuperAdminDashboard.css";

const getToken = () => JSON.parse(localStorage.getItem("token"));

const JOB_STATUSES = ["Active", "Draft", "Closed"];
const EMPLOYMENT_TYPES = [
  "Full-Time",
  "Part-Time",
  "Contract",
  "Internship",
  "Freelance",
  "Mentorship",
  "Volunteer",
  "Other",
];
const WORKPLACE_TYPES = ["On-site", "Hybrid", "Remote"];
const JOB_LEVELS = [
  "No Experience",
  "Internship & Graduate",
  "Entry-level",
  "Mid-level",
  "Senior-level",
  "Executive-level",
];
const HIRING_TIMELINES = ["2 weeks", "1 Month", "2 Months", "3 Months"];

const emptyForm = {
  title: "",
  jobSummary: "",
  location: "",
  employmentType: "",
  workplaceType: "",
  jobLevel: "",
  minimumQualification: "",
  numberOfOpenings: "",
  hiringTimeline: "",
  jobDescription: "",
  responsibilities: "",
  requirements: "",
  benefits: "",
  status: "Draft",
};

const statusBadgeClass = (status) => {
  if (status === "Active") return "job-status-active";
  if (status === "Draft") return "job-status-draft";
  return "job-status-closed";
};

const LIMIT = 20;

const CareerJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  const [page, setPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [submitting, setSubmitting] = useState(false);

  const [editingJob, setEditingJob] = useState(null);
  const [editForm, setEditForm] = useState(emptyForm);
  const [editSubmitting, setEditSubmitting] = useState(false);

  const [showConfirm, setShowConfirm] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const fetchJobs = async () => {
    try {
      setLoading(true);
      const params = { page, limit: LIMIT };
      if (statusFilter) params.status = statusFilter;

      const res = await axios.get(`${BASEURL}/api/v1/jobs/all`, {
        params,
        headers: { "x-access-token": getToken() },
      });
      setJobs(res.data.jobs || []);
      setTotal(res.data.total || 0);
      setTotalPages(res.data.totalPages || 1);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to load jobs");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, [statusFilter, page]);

  useEffect(() => {
    setPage(1);
  }, [statusFilter]);

  const handleCreateSubmit = async (e) => {
    e.preventDefault();
    try {
      setSubmitting(true);
      await axios.post(`${BASEURL}/api/v1/jobs`, form, {
        headers: { "x-access-token": getToken() },
      });
      toast.success("Job created successfully");
      setShowModal(false);
      setForm(emptyForm);
      fetchJobs();
    } catch (error) {
      const errors = error.response?.data?.errors;
      if (errors?.length) errors.forEach((msg) => toast.error(msg));
      else toast.error(error.response?.data?.message || "Failed to create job");
    } finally {
      setSubmitting(false);
    }
  };

  const openEdit = (job) => {
    setEditingJob(job);
    setEditForm({
      title: job.title || "",
      jobSummary: job.jobSummary || "",
      location: job.location || "",
      employmentType: job.employmentType || "",
      workplaceType: job.workplaceType || "",
      jobLevel: job.jobLevel || "",
      minimumQualification: job.minimumQualification || "",
      numberOfOpenings: job.numberOfOpenings || "",
      hiringTimeline: job.hiringTimeline || "",
      jobDescription: job.jobDescription || "",
      responsibilities: job.responsibilities || "",
      requirements: job.requirements || "",
      benefits: job.benefits || "",
      status: job.status,
    });
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      setEditSubmitting(true);
      await axios.patch(`${BASEURL}/api/v1/jobs/${editingJob._id}`, editForm, {
        headers: { "x-access-token": getToken() },
      });
      toast.success("Job updated successfully");
      setEditingJob(null);
      fetchJobs();
    } catch (error) {
      const errors = error.response?.data?.errors;
      if (errors?.length) errors.forEach((msg) => toast.error(msg));
      else toast.error(error.response?.data?.message || "Failed to update job");
    } finally {
      setEditSubmitting(false);
    }
  };

  const toggleStatus = async (job) => {
    const nextStatus = job.status === "Closed" ? "Active" : "Closed";
    try {
      await axios.patch(
        `${BASEURL}/api/v1/jobs/${job._id}`,
        { status: nextStatus },
        { headers: { "x-access-token": getToken() } }
      );
      toast.success(
        nextStatus === "Closed" ? "Job deactivated" : "Job activated"
      );
      fetchJobs();
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to update status");
    }
  };

  const confirmDelete = (job) => {
    setSelectedJob(job);
    setShowConfirm(true);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`${BASEURL}/api/v1/jobs/${selectedJob._id}`, {
        headers: { "x-access-token": getToken() },
      });
      toast.success("Job deleted successfully");
      setShowConfirm(false);
      setSelectedJob(null);
      fetchJobs();
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to delete job");
    }
  };

  // Shared field block for both the Create and Edit modals — keeps the
  // Job Summary immediately after the title (its own section, before the
  // description and every dropdown), matching how the public job page lays
  // the posting out.
  const renderFormFields = (values, setValues) => (
    <>
      <div className="mb-3">
        <label className="sad-label">Job Title</label>
        <input
          type="text"
          className="form-control"
          placeholder="e.g. Software Developer"
          value={values.title}
          onChange={(e) => setValues({ ...values, title: e.target.value })}
          required
        />
      </div>

      <div className="mb-3">
        <label className="sad-label">Job Summary</label>
        <div className="editorContainer editorContainer-summary">
          <ReactQuill
            className="editor"
            theme="snow"
            placeholder="A short 1-2 sentence summary shown on the career listing card"
            value={values.jobSummary}
            onChange={(value) => setValues({ ...values, jobSummary: value })}
          />
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label className="sad-label">Location</label>
          <input
            type="text"
            className="form-control"
            placeholder="e.g. Egbeda, Lagos"
            value={values.location}
            onChange={(e) => setValues({ ...values, location: e.target.value })}
          />
        </div>
        <div className="col-md-6 mb-3">
          <label className="sad-label">Number of Openings</label>
          <input
            type="number"
            min="1"
            className="form-control"
            value={values.numberOfOpenings}
            onChange={(e) =>
              setValues({ ...values, numberOfOpenings: e.target.value })
            }
          />
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label className="sad-label">Employment Type</label>
          <select
            className="form-select"
            value={values.employmentType}
            onChange={(e) =>
              setValues({ ...values, employmentType: e.target.value })
            }
          >
            <option value="">Select employment type</option>
            {EMPLOYMENT_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-6 mb-3">
          <label className="sad-label">Workplace Type</label>
          <select
            className="form-select"
            value={values.workplaceType}
            onChange={(e) =>
              setValues({ ...values, workplaceType: e.target.value })
            }
          >
            <option value="">Select workplace type</option>
            {WORKPLACE_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label className="sad-label">Experience Level</label>
          <select
            className="form-select"
            value={values.jobLevel}
            onChange={(e) => setValues({ ...values, jobLevel: e.target.value })}
          >
            <option value="">Select experience level</option>
            {JOB_LEVELS.map((l) => (
              <option key={l} value={l}>
                {l}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-6 mb-3">
          <label className="sad-label">Hiring Timeline</label>
          <select
            className="form-select"
            value={values.hiringTimeline}
            onChange={(e) =>
              setValues({ ...values, hiringTimeline: e.target.value })
            }
          >
            <option value="">Select hiring timeline</option>
            {HIRING_TIMELINES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mb-3">
        <label className="sad-label">Minimum Qualification</label>
        <input
          type="text"
          className="form-control"
          placeholder="e.g. B.Sc./HND in a relevant field"
          value={values.minimumQualification}
          onChange={(e) =>
            setValues({ ...values, minimumQualification: e.target.value })
          }
        />
      </div>

      <div className="mb-3">
        <label className="sad-label">Job Description</label>
        <div className="editorContainer">
          <ReactQuill
            className="editor"
            theme="snow"
            placeholder="Full role overview — include Responsibilities and Requirements here"
            value={values.jobDescription}
            onChange={(value) =>
              setValues({ ...values, jobDescription: value })
            }
          />
        </div>
      </div>

      <div className="mb-3">
        <label className="sad-label">Benefits (optional)</label>
        <div className="editorContainer">
          <ReactQuill
            className="editor"
            theme="snow"
            value={values.benefits}
            onChange={(value) => setValues({ ...values, benefits: value })}
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="sad-label">Status</label>
        <select
          className="form-select"
          value={values.status}
          onChange={(e) => setValues({ ...values, status: e.target.value })}
        >
          {JOB_STATUSES.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>
    </>
  );

  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex" />
        <title>Career Jobs — Elonatech</title>
      </Helmet>

      <div className="sad-wrapper">
        <AdminSidebar active="career-jobs" />

        <main className="sad-main">
          <div className="sad-header">
            <div>
              <h4 className="sad-title">Career Jobs</h4>
              <p className="sad-subtitle">
                Manage job listings shown on the public Career page
              </p>
            </div>
            <button
              className="sad-btn-create"
              onClick={() => setShowModal(true)}
            >
              <i className="bi bi-plus-lg me-2"></i> Create Job
            </button>
          </div>

          <div className="sad-table-card">
            <div className="sad-table-header" style={{ flexWrap: "wrap", gap: 12 }}>
              <span className="sad-table-title">JOB POSTINGS</span>

              <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
                <select
                  className="form-select form-select-sm"
                  style={{ width: "auto" }}
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                >
                  <option value="">All Statuses</option>
                  {JOB_STATUSES.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>

                <span className="sad-active-badge">
                  <span className="sad-dot"></span>
                  {total} Total
                </span>
              </div>
            </div>

            {loading ? (
              <div className="sad-loading">Loading jobs...</div>
            ) : jobs.length === 0 ? (
              <div className="sad-loading">
                {statusFilter ? "No jobs match this filter." : "No job postings yet. Create your first one."}
              </div>
            ) : (
              <div className="table-responsive">
                <table className="sad-table">
                  <thead>
                    <tr>
                      <th>TITLE</th>
                      <th>STATUS</th>
                      <th>APPLICATIONS</th>
                      <th>ACTIONS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {jobs.map((job) => (
                      <tr key={job._id}>
                        <td data-label="Title">{job.title}</td>
                        <td data-label="Status">
                          <span
                            className={`sad-role-badge ${statusBadgeClass(
                              job.status
                            )}`}
                          >
                            {job.status}
                          </span>
                        </td>
                        <td data-label="Applications">
                          <Link
                            to={`/dashboard/job-applications?job=${job._id}`}
                            className="job-app-count-link"
                          >
                            {job.applicationCount} application
                            {job.applicationCount === 1 ? "" : "s"}
                          </Link>
                        </td>
                        <td data-label="Actions">
                          <div className="job-actions-cell">
                            <button
                              className="job-action-edit"
                              onClick={() => openEdit(job)}
                            >
                              Edit
                            </button>
                            <button
                              className="job-action-toggle"
                              onClick={() => toggleStatus(job)}
                            >
                              {job.status === "Closed"
                                ? "Activate"
                                : "Deactivate"}
                            </button>
                            <button
                              className="job-action-delete"
                              onClick={() => confirmDelete(job)}
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {!loading && totalPages > 1 && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 12,
                  padding: "16px 0 4px",
                }}
              >
                <button
                  className="job-action-edit"
                  disabled={page <= 1}
                  onClick={() => setPage((p) => p - 1)}
                >
                  ← Previous
                </button>
                <span className="job-workplace-subtext">
                  Page {page} of {totalPages}
                </span>
                <button
                  className="job-action-edit"
                  disabled={page >= totalPages}
                  onClick={() => setPage((p) => p + 1)}
                >
                  Next →
                </button>
              </div>
            )}
          </div>
        </main>
      </div>

      {/* Create Job Modal */}
      {showModal && (
        <div className="sad-overlay">
          <div
            className="sad-modal sad-modal-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sad-modal-header">
              <h5>Create Job Posting</h5>
              <button
                className="sad-modal-close"
                onClick={() => setShowModal(false)}
              >
                <i className="bi bi-x-lg"></i>
              </button>
            </div>
            <form onSubmit={handleCreateSubmit} className="sad-modal-body">
              {renderFormFields(form, setForm)}
              <button
                type="submit"
                className="sad-btn-create w-100"
                disabled={submitting}
              >
                {submitting ? "Creating..." : "Create Job"}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Edit Job Modal */}
      {editingJob && (
        <div className="sad-overlay">
          <div
            className="sad-modal sad-modal-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sad-modal-header">
              <h5>Edit Job Posting</h5>
              <button
                className="sad-modal-close"
                onClick={() => setEditingJob(null)}
              >
                <i className="bi bi-x-lg"></i>
              </button>
            </div>
            <form onSubmit={handleEditSubmit} className="sad-modal-body">
              {renderFormFields(editForm, setEditForm)}
              <button
                type="submit"
                className="sad-btn-create w-100"
                disabled={editSubmitting}
              >
                {editSubmitting ? "Saving..." : "Save Changes"}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showConfirm && (
        <div className="sad-overlay">
          <div
            className="sad-modal sad-modal-sm"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sad-modal-header">
              <h5>Confirm Delete</h5>
              <button
                className="sad-modal-close"
                onClick={() => setShowConfirm(false)}
              >
                <i className="bi bi-x-lg"></i>
              </button>
            </div>
            <div className="sad-modal-body" style={{ textAlign: "center" }}>
              <p>
                Are you sure you want to delete{" "}
                <strong>{selectedJob?.title}</strong>? This action cannot be
                undone.
              </p>
              <div
                className="d-flex gap-2 mt-3"
                style={{ justifyContent: "center" }}
              >
                <button
                  className="sad-btn-create"
                  style={{ background: "#dc2626" }}
                  onClick={handleDelete}
                >
                  Delete
                </button>
                <button
                  className="sad-btn-create"
                  style={{ background: "#f3f4f6", color: "#374151" }}
                  onClick={() => setShowConfirm(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CareerJobs;
