import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import { BASEURL } from "../../BaseURL/BaseURL";
import AdminSidebar from "./AdminSidebar";
import "./SuperAdminDashboard.css";

const getToken = () => JSON.parse(localStorage.getItem("token"));

const RETAINER_STATUSES = ["Pending", "Reviewed", "Responded", "Closed"];

const statusBadgeClass = (status) => {
  if (status === "Responded") return "job-status-active";
  if (status === "Pending") return "job-status-draft";
  if (status === "Closed") return "job-status-closed";
  return "sad-role-admin"; // Reviewed — blue
};

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

const RetainershipList = () => {
  const [retainers, setRetainers] = useState([]);
  const [loading, setLoading] = useState(true);

  const [viewing, setViewing] = useState(null);
  const [showConfirm, setShowConfirm] = useState(false);
  const [selected, setSelected] = useState(null);

  const fetchRetainers = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${BASEURL}/api/v1/retainers/all`, {
        headers: { "x-access-token": getToken() },
      });
      setRetainers(res.data.retainers || []);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to load retainerships");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRetainers();
  }, []);

  const changeStatus = async (retainer, status) => {
    try {
      await axios.patch(
        `${BASEURL}/api/v1/retainers/${retainer._id}`,
        { status },
        { headers: { "x-access-token": getToken() } }
      );
      setRetainers((prev) =>
        prev.map((r) => (r._id === retainer._id ? { ...r, status } : r))
      );
      toast.success("Retainership status updated");
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to update status");
    }
  };

  const confirmDelete = (retainer) => {
    setSelected(retainer);
    setShowConfirm(true);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`${BASEURL}/api/v1/retainers/${selected._id}`, {
        headers: { "x-access-token": getToken() },
      });
      toast.success("Retainership deleted successfully");
      setShowConfirm(false);
      setSelected(null);
      fetchRetainers();
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to delete retainership");
    }
  };

  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex" />
        <title>Retainerships — Elonatech</title>
      </Helmet>

      <div className="sad-wrapper">
        <AdminSidebar active="retainerships" />

        <main className="sad-main">
          <div className="sad-header">
            <div>
              <h4 className="sad-title">Retainerships</h4>
              <p className="sad-subtitle">Retainership requests submitted from the site</p>
            </div>
          </div>

          <div className="sad-table-card">
            <div className="sad-table-header">
              <span className="sad-table-title">ALL RETAINERSHIPS</span>
              <span className="sad-active-badge">
                <span className="sad-dot"></span>
                {retainers.length} Total
              </span>
            </div>

            {loading ? (
              <div className="sad-loading">Loading retainerships...</div>
            ) : retainers.length === 0 ? (
              <div className="sad-loading">No retainership requests yet.</div>
            ) : (
              <div className="table-responsive">
                <table className="sad-table">
                  <thead>
                    <tr>
                      <th>NAME</th>
                      <th>COMPANY</th>
                      <th>CONTACT</th>
                      <th>SERVICE</th>
                      <th>STATUS</th>
                      <th>DATE</th>
                      <th>ACTIONS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {retainers.map((retainer) => (
                      <tr key={retainer._id}>
                        <td data-label="Name">
                          {retainer.fullname}
                          {!retainer.emailSent && (
                            <div className="job-workplace-subtext" style={{ color: "#d97706" }}>
                              Email not sent
                            </div>
                          )}
                        </td>
                        <td data-label="Company">{retainer.company}</td>
                        <td data-label="Contact">
                          {retainer.email}
                          <div className="job-workplace-subtext">{retainer.number}</div>
                        </td>
                        <td data-label="Service">{retainer.service}</td>
                        <td data-label="Status">
                          <select
                            className={`sad-status-select ${statusBadgeClass(retainer.status)}`}
                            value={retainer.status}
                            onChange={(e) => changeStatus(retainer, e.target.value)}
                          >
                            {RETAINER_STATUSES.map((s) => (
                              <option key={s} value={s}>{s}</option>
                            ))}
                          </select>
                        </td>
                        <td data-label="Date">{formatDate(retainer.createdAt)}</td>
                        <td data-label="Actions">
                          <div className="job-actions-cell">
                            <button className="job-action-edit" onClick={() => setViewing(retainer)}>
                              View
                            </button>
                            <button className="job-action-delete" onClick={() => confirmDelete(retainer)}>
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

      {/* Retainership detail modal */}
      {viewing && (
        <div className="sad-overlay">
          <div className="sad-modal sad-modal-lg" onClick={(e) => e.stopPropagation()}>
            <div className="sad-modal-header">
              <h5>Retainership Details</h5>
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
              <div className="sad-form-row">
                <div className="mb-3">
                  <label className="sad-label">Full Name</label>
                  <div className="sad-readonly">{viewing.fullname}</div>
                </div>
                <div className="mb-3">
                  <label className="sad-label">Company</label>
                  <div className="sad-readonly">{viewing.company}</div>
                </div>
              </div>
              <div className="sad-form-row">
                <div className="mb-3">
                  <label className="sad-label">Email</label>
                  <div className="sad-readonly">{viewing.email}</div>
                </div>
                <div className="mb-3">
                  <label className="sad-label">Phone</label>
                  <div className="sad-readonly">{viewing.number}</div>
                </div>
              </div>
              <div className="sad-form-row">
                <div className="mb-3">
                  <label className="sad-label">Service</label>
                  <div className="sad-readonly">{viewing.service}</div>
                </div>
                <div className="mb-3">
                  <label className="sad-label">Contract Renewable</label>
                  <div className="sad-readonly">{viewing.contract}</div>
                </div>
              </div>
              <div className="sad-form-row">
                <div className="mb-3">
                  <label className="sad-label">Frequency</label>
                  <div className="sad-readonly">{viewing.frequency}</div>
                </div>
                <div className="mb-3">
                  <label className="sad-label">Days</label>
                  <div className="sad-readonly">{viewing.days}</div>
                </div>
              </div>
              <div className="sad-form-row">
                <div className="mb-3">
                  <label className="sad-label">State</label>
                  <div className="sad-readonly">{viewing.state}</div>
                </div>
                <div className="mb-3">
                  <label className="sad-label">Address</label>
                  <div className="sad-readonly">{viewing.address}</div>
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
                Are you sure you want to delete the retainership request from{" "}
                <strong>{selected?.fullname}</strong>? This action cannot be undone.
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

export default RetainershipList;
