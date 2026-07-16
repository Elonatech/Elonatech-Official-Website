import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import { BASEURL } from "../../BaseURL/BaseURL";
import { useAuth } from "./AuthContext";
import "./SuperAdminDashboard.css";

const getToken = () => JSON.parse(localStorage.getItem("token"));

const getInitials = (name, email) => {
  const source = name?.trim() ? name.trim() : email?.split("@")[0] || "A";
  return source
    .split(/[\s._-]/)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase() || "")
    .join("");
};

const EMPLOYMENT_TYPES = ["Full-Time", "Part-Time", "Contract", "Internship", "Freelance", "Mentorship", "Volunteer", "Other"];
const WORKPLACE_TYPES = ["On-site", "Hybrid", "Remote"];
const JOB_LEVELS = ["No Experience", "Internship & Graduate", "Entry-level", "Mid-level", "Senior-level", "Executive-level"];
const HIRING_TIMELINES = ["2 weeks", "1 Month", "2 Months", "3 Months"];
const JOB_STATUSES = ["Active", "Draft", "Closed"];

const emptyForm = {
  title: "",
  location: "",
  numberOfOpenings: 1,
  employmentType: "Full-Time",
  workplaceType: "On-site",
  jobLevel: "Entry-level",
  minimumQualification: "",
  jobSummary: "",
  jobDescription: "",
  status: "Draft",
  hiringTimeline: "2 weeks",
};

const statusBadgeClass = (status) => {
  if (status === "Active") return "job-status-active";
  if (status === "Draft") return "job-status-draft";
  return "job-status-closed";
};

const CareerJobs = () => {
  const { logout } = useAuth();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [submitting, setSubmitting] = useState(false);

  const [editingJob, setEditingJob] = useState(null);
  const [editForm, setEditForm] = useState(emptyForm);
  const [editSubmitting, setEditSubmitting] = useState(false);

  const [showConfirm, setShowConfirm] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const me = (() => {
    try {
      const token = getToken();
      if (!token) return null;
      return JSON.parse(atob(token.split(".")[1]));
    } catch {
      return null;
    }
  })();

  const fetchJobs = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${BASEURL}/api/v1/jobs/all`, {
        headers: { "x-access-token": getToken() },
      });
      setJobs(res.data.jobs || []);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to load jobs");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

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
      title: job.title,
      location: job.location,
      numberOfOpenings: job.numberOfOpenings,
      employmentType: job.employmentType,
      workplaceType: job.workplaceType,
      jobLevel: job.jobLevel,
      minimumQualification: job.minimumQualification,
      jobSummary: job.jobSummary,
      jobDescription: job.jobDescription,
      status: job.status,
      hiringTimeline: job.hiringTimeline,
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
      toast.success(nextStatus === "Closed" ? "Job deactivated" : "Job activated");
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

  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex" />
        <title>Career Jobs — Elonatech</title>
      </Helmet>

      <div className="sad-wrapper">
        <aside className="sad-sidebar">
          <div className="sad-sidebar-brand">ADMIN CONSOLE</div>
          <nav className="sad-nav">
            <Link to="/dashboard" className="sad-nav-item">
              <i className="bi bi-grid-1x2"></i>
              <span>Dashboard</span>
            </Link>
            <Link to="/super-admin" className="sad-nav-item">
              <i className="bi bi-people"></i>
              <span>User Management</span>
            </Link>
            {me?.role === "superAdmin" && (
              <Link to="/dashboard/audit" className="sad-nav-item">
                <i className="bi bi-journal-text"></i>
                <span>Audit Log</span>
              </Link>
            )}
            <Link to="/dashboard/job-applications" className="sad-nav-item">
              <i className="bi bi-inbox-fill"></i>
              <span>Job Applications</span>
            </Link>
            <div className="sad-nav-item active">
              <i className="bi bi-briefcase-fill"></i>
              <span>Career Jobs</span>
            </div>
          </nav>
          <div className="sad-sidebar-footer">
            <div className="sad-profile-row">
              {me?.email && (
                <>
                  <div className="sad-avatar sad-avatar-sm">
                    {getInitials(me.name, me.email)}
                  </div>
                  <div className="sad-profile-info">
                    <div className="sad-profile-name">
                      {me.name || me.email.split("@")[0]}
                    </div>
                    <div className="sad-profile-email">{me.email}</div>
                  </div>
                </>
              )}
              <button
                className="sad-logout-btn"
                title="Logout"
                onClick={logout}
                style={{ marginLeft: "auto" }}
              >
                <i className="bi bi-box-arrow-right"></i>
              </button>
            </div>
          </div>
        </aside>

        <main className="sad-main">
          <div className="sad-header">
            <div>
              <h4 className="sad-title">Career Jobs</h4>
              <p className="sad-subtitle">
                Manage job listings shown on the public Career page
              </p>
            </div>
            <button className="sad-btn-create" onClick={() => setShowModal(true)}>
              <i className="bi bi-plus-lg me-2"></i> Create Job
            </button>
          </div>

          <div className="sad-table-card">
            <div className="sad-table-header">
              <span className="sad-table-title">JOB POSTINGS</span>
              <span className="sad-active-badge">
                <span className="sad-dot"></span>
                {jobs.length} Total
              </span>
            </div>

            {loading ? (
              <div className="sad-loading">Loading jobs...</div>
            ) : jobs.length === 0 ? (
              <div className="sad-loading">No job postings yet. Create your first one.</div>
            ) : (
              <div className="table-responsive">
                <table className="sad-table">
                  <thead>
                    <tr>
                      <th>TITLE</th>
                      <th>LOCATION</th>
                      <th>TYPE</th>
                      <th>OPENINGS</th>
                      <th>STATUS</th>
                      <th>APPLICATIONS</th>
                      <th>ACTIONS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {jobs.map((job) => (
                      <tr key={job._id}>
                        <td data-label="Title">{job.title}</td>
                        <td data-label="Location">{job.location}</td>
                        <td data-label="Type">
                          {job.employmentType}
                          <div className="job-workplace-subtext">{job.workplaceType}</div>
                        </td>
                        <td data-label="Openings">{job.numberOfOpenings}</td>
                        <td data-label="Status">
                          <span className={`sad-role-badge ${statusBadgeClass(job.status)}`}>
                            {job.status}
                          </span>
                        </td>
                        <td data-label="Applications">
                          <Link
                            to={`/dashboard/job-applications?job=${job._id}`}
                            className="job-app-count-link"
                          >
                            {job.applicationCount} application{job.applicationCount === 1 ? "" : "s"}
                          </Link>
                        </td>
                        <td data-label="Actions">
                          <div className="job-actions-cell">
                            <button className="job-action-edit" onClick={() => openEdit(job)}>
                              Edit
                            </button>
                            <button className="job-action-toggle" onClick={() => toggleStatus(job)}>
                              {job.status === "Closed" ? "Activate" : "Deactivate"}
                            </button>
                            <button className="job-action-delete" onClick={() => confirmDelete(job)}>
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
          </div>
        </main>
      </div>

      {/* Create Job Modal */}
      {showModal && (
        <div className="sad-overlay">
          <div className="sad-modal sad-modal-lg" onClick={(e) => e.stopPropagation()}>
            <div className="sad-modal-header">
              <h5>Create Job Posting</h5>
              <button className="sad-modal-close" onClick={() => setShowModal(false)}>
                <i className="bi bi-x-lg"></i>
              </button>
            </div>
            <form onSubmit={handleCreateSubmit} className="sad-modal-body">
              <div className="mb-3">
                <label className="sad-label">Job Title</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="e.g. Software Developer"
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  required
                />
              </div>
              <div className="sad-form-row">
                <div className="mb-3">
                  <label className="sad-label">Location</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="e.g. Lagos"
                    value={form.location}
                    onChange={(e) => setForm({ ...form, location: e.target.value })}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="sad-label">Number of Openings</label>
                  <input
                    type="number"
                    min={1}
                    className="form-control"
                    value={form.numberOfOpenings}
                    onChange={(e) => setForm({ ...form, numberOfOpenings: e.target.value })}
                    required
                  />
                </div>
              </div>
              <div className="sad-form-row">
                <div className="mb-3">
                  <label className="sad-label">Employment Type</label>
                  <select
                    className="form-select"
                    value={form.employmentType}
                    onChange={(e) => setForm({ ...form, employmentType: e.target.value })}
                  >
                    {EMPLOYMENT_TYPES.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
                <div className="mb-3">
                  <label className="sad-label">Workplace Type</label>
                  <select
                    className="form-select"
                    value={form.workplaceType}
                    onChange={(e) => setForm({ ...form, workplaceType: e.target.value })}
                  >
                    {WORKPLACE_TYPES.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="sad-form-row">
                <div className="mb-3">
                  <label className="sad-label">Job Level</label>
                  <select
                    className="form-select"
                    value={form.jobLevel}
                    onChange={(e) => setForm({ ...form, jobLevel: e.target.value })}
                  >
                    {JOB_LEVELS.map((l) => (
                      <option key={l} value={l}>{l}</option>
                    ))}
                  </select>
                </div>
                <div className="mb-3">
                  <label className="sad-label">Minimum Qualification</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="e.g. HND/BSc in Computer Science"
                    value={form.minimumQualification}
                    onChange={(e) => setForm({ ...form, minimumQualification: e.target.value })}
                    required
                  />
                </div>
              </div>
              <div className="mb-3">
                <label className="sad-label">Job Summary</label>
                <textarea
                  className="form-control"
                  rows={2}
                  placeholder="A short summary shown on the job listing card"
                  value={form.jobSummary}
                  onChange={(e) => setForm({ ...form, jobSummary: e.target.value })}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="sad-label">Job Description</label>
                <textarea
                  className="form-control"
                  rows={4}
                  placeholder="Full role responsibilities, requirements, etc."
                  value={form.jobDescription}
                  onChange={(e) => setForm({ ...form, jobDescription: e.target.value })}
                  required
                />
              </div>
              <div className="sad-form-row">
                <div className="mb-3">
                  <label className="sad-label">Hiring Timeline</label>
                  <select
                    className="form-select"
                    value={form.hiringTimeline}
                    onChange={(e) => setForm({ ...form, hiringTimeline: e.target.value })}
                  >
                    {HIRING_TIMELINES.map((h) => (
                      <option key={h} value={h}>{h}</option>
                    ))}
                  </select>
                </div>
                <div className="mb-4">
                  <label className="sad-label">Status</label>
                  <select
                    className="form-select"
                    value={form.status}
                    onChange={(e) => setForm({ ...form, status: e.target.value })}
                  >
                    {JOB_STATUSES.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
              </div>
              <button type="submit" className="sad-btn-create w-100" disabled={submitting}>
                {submitting ? "Creating..." : "Create Job"}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Edit Job Modal */}
      {editingJob && (
        <div className="sad-overlay">
          <div className="sad-modal" onClick={(e) => e.stopPropagation()}>
            <div className="sad-modal-header">
              <h5>Edit Job Posting</h5>
              <button className="sad-modal-close" onClick={() => setEditingJob(null)}>
                <i className="bi bi-x-lg"></i>
              </button>
            </div>
            <form onSubmit={handleEditSubmit} className="sad-modal-body">
              <div className="mb-3">
                <label className="sad-label">Job Title</label>
                <input
                  type="text"
                  className="form-control"
                  value={editForm.title}
                  onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="sad-label">Location</label>
                <input
                  type="text"
                  className="form-control"
                  value={editForm.location}
                  onChange={(e) => setEditForm({ ...editForm, location: e.target.value })}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="sad-label">Number of Openings</label>
                <input
                  type="number"
                  min={1}
                  className="form-control"
                  value={editForm.numberOfOpenings}
                  onChange={(e) => setEditForm({ ...editForm, numberOfOpenings: e.target.value })}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="sad-label">Employment Type</label>
                <select
                  className="form-select"
                  value={editForm.employmentType}
                  onChange={(e) => setEditForm({ ...editForm, employmentType: e.target.value })}
                >
                  {EMPLOYMENT_TYPES.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
              <div className="mb-3">
                <label className="sad-label">Workplace Type</label>
                <select
                  className="form-select"
                  value={editForm.workplaceType}
                  onChange={(e) => setEditForm({ ...editForm, workplaceType: e.target.value })}
                >
                  {WORKPLACE_TYPES.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
              <div className="mb-3">
                <label className="sad-label">Job Level</label>
                <select
                  className="form-select"
                  value={editForm.jobLevel}
                  onChange={(e) => setEditForm({ ...editForm, jobLevel: e.target.value })}
                >
                  {JOB_LEVELS.map((l) => (
                    <option key={l} value={l}>{l}</option>
                  ))}
                </select>
              </div>
              <div className="mb-3">
                <label className="sad-label">Minimum Qualification</label>
                <input
                  type="text"
                  className="form-control"
                  value={editForm.minimumQualification}
                  onChange={(e) => setEditForm({ ...editForm, minimumQualification: e.target.value })}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="sad-label">Job Summary</label>
                <textarea
                  className="form-control"
                  rows={2}
                  value={editForm.jobSummary}
                  onChange={(e) => setEditForm({ ...editForm, jobSummary: e.target.value })}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="sad-label">Job Description</label>
                <textarea
                  className="form-control"
                  rows={4}
                  value={editForm.jobDescription}
                  onChange={(e) => setEditForm({ ...editForm, jobDescription: e.target.value })}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="sad-label">Hiring Timeline</label>
                <select
                  className="form-select"
                  value={editForm.hiringTimeline}
                  onChange={(e) => setEditForm({ ...editForm, hiringTimeline: e.target.value })}
                >
                  {HIRING_TIMELINES.map((h) => (
                    <option key={h} value={h}>{h}</option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label className="sad-label">Status</label>
                <select
                  className="form-select"
                  value={editForm.status}
                  onChange={(e) => setEditForm({ ...editForm, status: e.target.value })}
                >
                  {JOB_STATUSES.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
              <button type="submit" className="sad-btn-create w-100" disabled={editSubmitting}>
                {editSubmitting ? "Saving..." : "Save Changes"}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showConfirm && (
        <div className="sad-overlay">
          <div className="sad-modal sad-modal-sm" onClick={(e) => e.stopPropagation()}>
            <div className="sad-modal-header">
              <h5>Confirm Delete</h5>
              <button className="sad-modal-close" onClick={() => setShowConfirm(false)}>
                <i className="bi bi-x-lg"></i>
              </button>
            </div>
            <div className="sad-modal-body">
              <p>
                Are you sure you want to delete <strong>{selectedJob?.title}</strong>? This
                action cannot be undone.
              </p>
              <div className="d-flex gap-2 mt-3">
                <button className="sad-btn-create" style={{ background: "#dc2626" }} onClick={handleDelete}>
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
