import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import { BASEURL } from "../../BaseURL/BaseURL";
import AdminSidebar from "./AdminSidebar";
import "./SuperAdminDashboard.css";

const getToken = () => JSON.parse(localStorage.getItem("token"));

const APPLICATION_STATUSES = ["Pending", "In Review", "Reviewed", "Accepted", "Rejected"];
const SORT_FIELDS = [
  { value: "createdAt", label: "Date applied" },
  { value: "firstname", label: "First name" },
  { value: "lastname", label: "Last name" },
  { value: "status", label: "Status" },
];
const LIMIT = 20;

const statusBadgeClass = (status) => {
  if (status === "Accepted") return "job-status-active";
  if (status === "Pending") return "job-status-draft";
  if (status === "Rejected") return "job-status-closed";
  if (status === "In Review") return "sad-role-super"; // purple
  return "sad-role-admin"; // Reviewed — blue
};

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

const JobApplications = () => {
  // ?job=<id> comes from the "N applications" link on the Career Jobs page
  const [searchParams, setSearchParams] = useSearchParams();
  const jobFilter = searchParams.get("job");

  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  const [page, setPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState("");
  const [sortBy, setSortBy] = useState("createdAt");
  const [sortOrder, setSortOrder] = useState("desc");

  const [viewing, setViewing] = useState(null);
  const [showConfirm, setShowConfirm] = useState(false);
  const [selected, setSelected] = useState(null);

  const fetchApplications = async () => {
    try {
      setLoading(true);
      const params = { page, limit: LIMIT, sortBy, sortOrder };
      if (jobFilter) params.job = jobFilter;
      if (statusFilter) params.status = statusFilter;

      const res = await axios.get(`${BASEURL}/api/v1/job-applications/all`, {
        params,
        headers: { "x-access-token": getToken() },
      });
      setApplications(res.data.applications || []);
      setTotal(res.data.total || 0);
      setTotalPages(res.data.totalPages || 1);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to load applications");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, [jobFilter, statusFilter, sortBy, sortOrder, page]);

  // Any filter/sort change resets back to page 1 — otherwise you could land
  // on page 4 of a filter that only has 1 page of results.
  useEffect(() => {
    setPage(1);
  }, [jobFilter, statusFilter, sortBy, sortOrder]);

  const changeStatus = async (application, status) => {
    try {
      await axios.patch(
        `${BASEURL}/api/v1/job-applications/${application._id}`,
        { status },
        { headers: { "x-access-token": getToken() } }
      );
      setApplications((prev) =>
        prev.map((a) => (a._id === application._id ? { ...a, status } : a))
      );
      toast.success("Application status updated");
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to update status");
    }
  };

  const confirmDelete = (application) => {
    setSelected(application);
    setShowConfirm(true);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`${BASEURL}/api/v1/job-applications/${selected._id}`, {
        headers: { "x-access-token": getToken() },
      });
      toast.success("Application deleted successfully");
      setShowConfirm(false);
      setSelected(null);
      fetchApplications();
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to delete application");
    }
  };

  // Title of the job being filtered on, for the header
  const filteredJobTitle =
    jobFilter && applications.length > 0
      ? applications[0].job?.title || applications[0].jobTitle
      : null;

  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex" />
        <title>Job Applications — Elonatech</title>
      </Helmet>

      <div className="sad-wrapper">
        <AdminSidebar active="job-applications" />

        <main className="sad-main">
          <div className="sad-header">
            <div>
              <h4 className="sad-title">Job Applications</h4>
              <p className="sad-subtitle">
                {jobFilter
                  ? `Applications for ${filteredJobTitle || "this position"}`
                  : "Applications submitted through the Career page"}
              </p>
            </div>
            {jobFilter && (
              <button
                className="sad-btn-create"
                style={{ background: "#f3f4f6", color: "#374151" }}
                onClick={() => setSearchParams({})}
              >
                Show all applications
              </button>
            )}
          </div>

          <div className="sad-table-card">
            <div className="sad-table-header" style={{ flexWrap: "wrap", gap: 12 }}>
              <span className="sad-table-title">
                {jobFilter ? "FILTERED APPLICATIONS" : "ALL APPLICATIONS"}
              </span>

              <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
                <select
                  className="form-select form-select-sm"
                  style={{ width: "auto" }}
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                >
                  <option value="">All Statuses</option>
                  {APPLICATION_STATUSES.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>

                <select
                  className="form-select form-select-sm"
                  style={{ width: "auto" }}
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  {SORT_FIELDS.map((f) => (
                    <option key={f.value} value={f.value}>Sort: {f.label}</option>
                  ))}
                </select>

                <button
                  className="job-action-edit"
                  onClick={() => setSortOrder((o) => (o === "asc" ? "desc" : "asc"))}
                  title="Toggle sort direction"
                >
                  {sortOrder === "asc" ? "↑ Ascending" : "↓ Descending"}
                </button>

                <span className="sad-active-badge">
                  <span className="sad-dot"></span>
                  {total} Total
                </span>
              </div>
            </div>

            {loading ? (
              <div className="sad-loading">Loading applications...</div>
            ) : applications.length === 0 ? (
              <div className="sad-loading">
                {jobFilter || statusFilter
                  ? "No applications match this filter."
                  : "No applications yet."}
              </div>
            ) : (
              <div className="table-responsive">
                <table className="sad-table">
                  <thead>
                    <tr>
                      <th>APPLICANT</th>
                      <th>POSITION</th>
                      <th>CONTACT</th>
                      <th>STATUS</th>
                      <th>DATE</th>
                      <th>ACTIONS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {applications.map((app) => (
                      <tr key={app._id}>
                        <td data-label="Applicant">
                          {app.firstname} {app.lastname}
                          {!app.emailSent && (
                            <div className="job-workplace-subtext" style={{ color: "#d97706" }}>
                              Email not sent
                            </div>
                          )}
                        </td>
                        <td data-label="Position">
                          {app.job?.title || app.jobTitle || "—"}
                          {app.job?.location && (
                            <div className="job-workplace-subtext">{app.job.location}</div>
                          )}
                        </td>
                        <td data-label="Contact">
                          {app.email}
                          <div className="job-workplace-subtext">{app.number}</div>
                        </td>
                        <td data-label="Status">
                          <select
                            className={`sad-status-select ${statusBadgeClass(app.status)}`}
                            value={app.status}
                            onChange={(e) => changeStatus(app, e.target.value)}
                          >
                            {APPLICATION_STATUSES.map((s) => (
                              <option key={s} value={s}>{s}</option>
                            ))}
                          </select>
                        </td>
                        <td data-label="Date">{formatDate(app.createdAt)}</td>
                        <td data-label="Actions">
                          <div className="job-actions-cell">
                            <button className="job-action-edit" onClick={() => setViewing(app)}>
                              View
                            </button>
                            <button className="job-action-delete" onClick={() => confirmDelete(app)}>
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

      {/* Application detail modal */}
      {viewing && (
        <div className="sad-overlay">
          <div className="sad-modal sad-modal-lg" onClick={(e) => e.stopPropagation()}>
            <div className="sad-modal-header">
              <h5>Application Details</h5>
              <button className="sad-modal-close" onClick={() => setViewing(null)}>
                <i className="bi bi-x-lg"></i>
              </button>
            </div>
            <div className="sad-modal-body">
              <div className="sad-form-row">
                <div className="mb-3">
                  <label className="sad-label">Status</label>
                  <div>
                    <span className={`sad-role-badge ${statusBadgeClass(viewing.status)}`}>
                      {viewing.status}
                    </span>
                  </div>
                </div>
                <div className="mb-3">
                  <label className="sad-label">Confirmation Email</label>
                  <div>
                    <span
                      className={`sad-role-badge ${viewing.emailSent ? "job-status-active" : "job-status-draft"}`}
                    >
                      {viewing.emailSent ? "Sent" : "Not sent"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mb-3">
                <label className="sad-label">Applied For</label>
                <div className="sad-readonly">
                  {viewing.job?.title || viewing.jobTitle || "—"}
                </div>
              </div>

              <div className="sad-form-row">
                <div className="mb-3">
                  <label className="sad-label">Full Name</label>
                  <div className="sad-readonly">
                    {viewing.firstname} {viewing.lastname}
                  </div>
                </div>
                <div className="mb-3">
                  <label className="sad-label">Email</label>
                  <div className="sad-readonly">{viewing.email}</div>
                </div>
              </div>

              <div className="sad-form-row">
                <div className="mb-3">
                  <label className="sad-label">Phone</label>
                  <div className="sad-readonly">{viewing.number}</div>
                </div>
                <div className="mb-3">
                  <label className="sad-label">Gender</label>
                  <div className="sad-readonly">{viewing.gender || "—"}</div>
                </div>
              </div>

              <div className="sad-form-row">
                <div className="mb-3">
                  <label className="sad-label">Date of Birth</label>
                  <div className="sad-readonly">{viewing.dob || "—"}</div>
                </div>
                <div className="mb-3">
                  <label className="sad-label">Employment Status</label>
                  <div className="sad-readonly">{viewing.employmentStatus || "—"}</div>
                </div>
              </div>

              <div className="mb-3">
                <label className="sad-label">Residence</label>
                <div className="sad-readonly">{viewing.address || "—"}</div>
              </div>

              <div className="mb-3">
                <label className="sad-label">Skills</label>
                <div className="sad-readonly">
                  {viewing.skill?.length ? viewing.skill.join(", ") : "—"}
                </div>
              </div>

              {viewing.letter && (
                <div className="mb-3">
                  <label className="sad-label">Cover Letter</label>
                  <div
                    className="sad-readonly"
                    dangerouslySetInnerHTML={{ __html: viewing.letter }}
                  />
                </div>
              )}

              <div className="mb-3">
                <label className="sad-label">CV</label>
                <div>
                  {viewing.cv_url ? (
                    <a
                      href={viewing.cv_url}
                      target="_blank"
                      rel="noreferrer"
                      className="sad-btn-create"
                      style={{ textDecoration: "none", display: "inline-flex" }}
                    >
                      <i className="bi bi-download me-2"></i> Download CV
                    </a>
                  ) : (
                    <span className="sad-readonly">Not available</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Delete confirmation modal */}
      {showConfirm && (
        <div className="sad-overlay">
          <div className="sad-modal sad-modal-sm" onClick={(e) => e.stopPropagation()}>
            <div className="sad-modal-header">
              <h5>Confirm Delete</h5>
              <button className="sad-modal-close" onClick={() => setShowConfirm(false)}>
                <i className="bi bi-x-lg"></i>
              </button>
            </div>
            <div className="sad-modal-body" style={{ textAlign: "center" }}>
              <p>
                Are you sure you want to delete the application from{" "}
                <strong>
                  {selected?.firstname} {selected?.lastname}
                </strong>
                ? This action cannot be undone.
              </p>
              <div className="d-flex gap-2 mt-3" style={{ justifyContent: "center" }}>
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

export default JobApplications;
