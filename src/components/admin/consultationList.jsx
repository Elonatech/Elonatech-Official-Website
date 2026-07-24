import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import { BASEURL } from "../../BaseURL/BaseURL";
import AdminSidebar from "./AdminSidebar";
import "./SuperAdminDashboard.css";

const getToken = () => JSON.parse(localStorage.getItem("token"));

const CONSULTATION_STATUSES = ["Pending", "Reviewed", "Responded", "Closed"];

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
const ConsultationList = () => {
  const [consultations, setConsultations] = useState([]);
  const [loading, setLoading] = useState(true);

  const [viewing, setViewing] = useState(null);
  const [showConfirm, setShowConfirm] = useState(false);
  const [selected, setSelected] = useState(null);

  const fetchConsultations = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${BASEURL}/api/v1/consultations/all`, {
        headers: { "x-access-token": getToken() },
      });
      setConsultations(res.data.consultations || []);
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to load consultations"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchConsultations();
  }, []);

  const changeStatus = async (consultation, status) => {
    try {
      await axios.patch(
        `${BASEURL}/api/v1/consultations/${consultation._id}`,
        { status },
        { headers: { "x-access-token": getToken() } }
      );
      setConsultations((prev) =>
        prev.map((c) => (c._id === consultation._id ? { ...c, status } : c))
      );
      toast.success("Consultation status updated");
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to update status");
    }
  };

  const confirmDelete = (consultation) => {
    setSelected(consultation);
    setShowConfirm(true);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`${BASEURL}/api/v1/consultations/${selected._id}`, {
        headers: { "x-access-token": getToken() },
      });
      toast.success("Consultation deleted successfully");
      setShowConfirm(false);
      setSelected(null);
      fetchConsultations();
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to delete consultation"
      );
    }
  };

  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex" />
        <title>Consultations — Elonatech</title>
      </Helmet>

      <div className="sad-wrapper">
        <AdminSidebar active="consultations" />

        <main className="sad-main">
          <div className="sad-header">
            <div>
              <h4 className="sad-title">Consultations</h4>
              <p className="sad-subtitle">
                Review consultations submitted through the Contact page
              </p>
            </div>
          </div>

          <div className="sad-table-card">
            <div className="sad-table-header">
              <span className="sad-table-title">ALL CONSULTATIONS</span>
              <span className="sad-active-badge">
                <span className="sad-dot"></span>
                {consultations.length} Total
              </span>
            </div>

            {loading ? (
              <div className="sad-loading">Loading consultations...</div>
            ) : consultations.length === 0 ? (
              <div className="sad-loading">No consultation requests yet.</div>
            ) : (
              <div className="table-responsive">
                <table className="sad-table">
                  <thead>
                    <tr>
                      <th>NAME</th>
                      <th>EMAIL</th>
                      <th>OCCUPATION</th>
                      <th>STATUS</th>
                      <th>DATE</th>
                      <th>ACTIONS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {consultations.map((consultation) => (
                      <tr key={consultation._id}>
                        <td data-label="Name">
                          {consultation.name}
                          {!consultation.emailSent && (
                            <div
                              className="job-workplace-subtext"
                              style={{ color: "#d97706" }}
                            >
                              Email not sent
                            </div>
                          )}
                        </td>
                        <td data-label="Email">{consultation.email}</td>
                        <td data-label="Occupation">{consultation.occupation}</td>
                        <td data-label="Status">
                          <select
                            className={`sad-status-select ${statusBadgeClass(
                              consultation.status
                            )}`}
                            value={consultation.status}
                            onChange={(e) =>
                              changeStatus(consultation, e.target.value)
                            }
                          >
                            {CONSULTATION_STATUSES.map((s) => (
                              <option key={s} value={s}>
                                {s}
                              </option>
                            ))}
                          </select>
                        </td>
                        <td data-label="Date">
                          {formatDate(consultation.createdAt)}
                        </td>
                        <td data-label="Actions">
                          <div className="job-actions-cell">
                            <button
                              className="job-action-edit"
                              onClick={() => setViewing(consultation)}
                            >
                              View
                            </button>
                            <button
                              className="job-action-delete"
                              onClick={() => confirmDelete(consultation)}
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
          </div>
        </main>
      </div>

      {/* consultation detail modal */}

      {viewing && (
        <div className="sad-overlay">
          <div
            className="sad-modal sad-modal-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sad-modal-header">
              <h5>Consultation Details</h5>
              <button
                className="sad-modal-close"
                onClick={() => setViewing(null)}
              >
                <i className="bi bi-x-lg"></i>
              </button>
            </div>
            <div className="sad-modal-body">
              <div className="sad-form-row">
                <div className="mb-3">
                  <label className="sad-label">Status</label>
                  <div>
                    <span
                      className={`sad-role-badge ${statusBadgeClass(
                        viewing.status
                      )}`}
                    >
                      {viewing.status}
                    </span>
                  </div>
                </div>
                <div className="mb-3">
                  <label className="sad-label">Confirmation Email</label>
                  <div>
                    <span
                      className={`sad-role-badge ${
                        viewing.emailSent
                          ? "job-status-active"
                          : "job-status-draft"
                      }`}
                    >
                      {viewing.emailSent ? "Sent" : "Not sent"}
                    </span>
                  </div>
                </div>
              </div>
              <div className="sad-form-row">
                <div className="mb-3">
                  <label className="sad-label"> Name</label>
                  <div className="sad-readonly">{viewing.name}</div>
                </div>

                <div className="mb-3">
                  <label className="sad-label">Email</label>
                  <div className="sad-readonly">{viewing.email}</div>
                </div>
              </div>
              <div className="sad-form-row">
                <div className="mb-3">
                  <label className="sad-label">Occupation</label>
                  <div className="sad-readonly">{viewing.occupation}</div>
                </div>
                <div className="mb-3">
                  <label className="sad-label">Challenge</label>
                  <div className="sad-readonly">{viewing.challenge}</div>
                </div>
              </div>
              <div className="sad-form-row">
                <div className="mb-3">
                  <label className="sad-label">Business</label>
                  <div className="sad-readonly">{viewing.business}</div>
                </div>
              </div>
              <div className="mb-3">
                <label className="sad-label">Cost</label>
                <div className="sad-readonly">{viewing.cost}</div>
              </div>
              <div className="mb-3">
                <label className="sad-label">Investment</label>
                <div className="sad-readonly">{viewing.invest}</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* delete confirmation modal */}
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
                Are you sure you want to delete the consultation request from{" "}
                <strong>{selected?.name}</strong>? This action cannot be
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

export default ConsultationList;
