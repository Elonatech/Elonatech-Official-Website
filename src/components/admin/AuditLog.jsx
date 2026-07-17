import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { BASEURL } from "../../BaseURL/BaseURL";
import { Helmet } from "react-helmet-async";
import AdminSidebar from "./AdminSidebar";
import "./SuperAdminDashboard.css";

const ACTION_LABELS = {
  LOGIN: { label: "Login", color: "#059669", bg: "#ecfdf5", border: "#a7f3d0" },
  LOGOUT: {
    label: "Logout",
    color: "#6b7280",
    bg: "#f9fafb",
    border: "#e5e7eb",
  },
  CREATE_ADMIN: {
    label: "Created Admin",
    color: "#1d4ed8",
    bg: "#eff6ff",
    border: "#bfdbfe",
  },
  CREATE_BLOG: {
    label: "Created Blog",
    color: "#1d4ed8",
    bg: "#eff6ff",
    border: "#bfdbfe",
  },
  UPDATE_BLOG: {
    label: "Updated Blog",
    color: "#d97706",
    bg: "#fffbeb",
    border: "#fde68a",
  },
  DELETE_BLOG: {
    label: "Deleted Blog",
    color: "#dc2626",
    bg: "#fef2f2",
    border: "#fecaca",
  },
  CREATE_PRODUCT: {
    label: "Created Product",
    color: "#059669",
    bg: "#ecfdf5",
    border: "#a7f3d0",
  },
  UPDATE_PRODUCT: {
    label: "Updated Product",
    color: "#d97706",
    bg: "#fffbeb",
    border: "#fde68a",
  },
  DELETE_PRODUCT: {
    label: "Deleted Product",
    color: "#dc2626",
    bg: "#fef2f2",
    border: "#fecaca",
  },

  UPDATE_ADMIN: {
    label: "Updated Admin",
    color: "#d97706",
    bg: "#fffbeb",
    border: "#fde68a",
  },
  DELETE_ADMIN: {
    label: "Deleted Admin",
    color: "#dc2626",
    bg: "#fef2f2",
    border: "#fecaca",
  },
  TOTP_SETUP: {
    label: "2FA Setup",
    color: "#7c3aed",
    bg: "#f5f3ff",
    border: "#ddd6fe",
  },
  TOTP_ENABLED: {
    label: "2FA Enabled",
    color: "#7c3aed",
    bg: "#f5f3ff",
    border: "#ddd6fe",
  },
  TOTP_LOGIN: {
    label: "2FA Login",
    color: "#0891b2",
    bg: "#ecfeff",
    border: "#a5f3fc",
  },
};

const formatDate = (iso) => {
  const d = new Date(iso);
  return d.toLocaleString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

const AuditLog = () => {
  const navigate = useNavigate();
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [actionFilter, setActionFilter] = useState("");
  const limit = 20;

  const getToken = () => JSON.parse(localStorage.getItem("token"));

  const fetchLogs = useCallback(async () => {
    try {
      setLoading(true);
      const params = { page, limit };
      if (actionFilter) params.action = actionFilter;

      const res = await axios.get(`${BASEURL}/api/v1/auth/audit`, {
        headers: { "x-access-token": getToken() },
        params,
      });
      setLogs(res.data.logs);
      setTotal(res.data.total);
    } catch (error) {
      if (error.response?.status === 403) {
        toast.error("Access denied — super admins only");
        navigate("/dashboard");
      } else {
        toast.error("Failed to load audit logs");
      }
    } finally {
      setLoading(false);
    }
  }, [page, actionFilter, navigate]);

  useEffect(() => {
    fetchLogs();
  }, [fetchLogs]);

  const totalPages = Math.ceil(total / limit);

  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex" />
        <title>Audit Log — Elonatech</title>
      </Helmet>

      <div className="sad-wrapper">
        <AdminSidebar active="audit" />

        {/* Main */}
        <main className="sad-main">
          <div className="sad-header">
            <div>
              <h4 className="sad-title">Audit Log</h4>
              <p className="sad-subtitle">
                Full record of all admin actions — logins, changes, and
                deletions.
              </p>
            </div>

            {/* Filter */}
            <select
              className="form-select"
              style={{ maxWidth: "200px", fontSize: "14px" }}
              value={actionFilter}
              onChange={(e) => {
                setActionFilter(e.target.value);
                setPage(1);
              }}
            >
              <option value="">All Actions</option>
              {Object.entries(ACTION_LABELS).map(([key, val]) => (
                <option key={key} value={key}>
                  {val.label}
                </option>
              ))}
            </select>
          </div>

          <div className="sad-table-card">
            <div className="sad-table-header">
              <span className="sad-table-title">ACTIVITY RECORDS</span>
              <span className="sad-active-badge">
                <span className="sad-dot"></span>
                {total} Total
              </span>
            </div>

            {loading ? (
              <div className="sad-loading">Loading logs...</div>
            ) : logs.length === 0 ? (
              <div className="sad-loading">No logs found.</div>
            ) : (
              <div className="table-responsive">
                <table className="sad-table">
                  <thead>
                    <tr>
                      <th>ACTION</th>
                      <th>PERFORMED BY</th>
                      <th>TARGET</th>
                      <th>DETAILS</th>
                      <th>DATE & TIME</th>
                    </tr>
                  </thead>
                  <tbody>
                    {logs.map((log) => {
                      const meta = ACTION_LABELS[log.action] || {
                        label: log.action,
                        color: "#374151",
                        bg: "#f9fafb",
                        border: "#e5e7eb",
                      };
                      return (
                        <tr key={log._id}>
                          <td data-label="Action">
                            <span
                              style={{
                                display: "inline-block",
                                padding: "3px 10px",
                                borderRadius: "4px",
                                fontSize: "11px",
                                fontWeight: 700,
                                letterSpacing: "0.4px",
                                color: meta.color,
                                background: meta.bg,
                                border: `1px solid ${meta.border}`,
                                whiteSpace: "nowrap",
                              }}
                            >
                              {meta.label}
                            </span>
                          </td>
                          <td data-label="Performed By">
                            <div
                              style={{
                                fontWeight: 600,
                                color: "#1a1a2e",
                                fontSize: "13px",
                              }}
                            >
                              {log.performedBy?.name || "—"}
                            </div>
                            <div style={{ color: "#6b7280", fontSize: "12px" }}>
                              {log.performedBy?.email || ""}
                            </div>
                          </td>
                          <td data-label="Target">
                            {log.target?.email ? (
                              <>
                                <div
                                  style={{
                                    fontWeight: 600,
                                    color: "#1a1a2e",
                                    fontSize: "13px",
                                  }}
                                >
                                  {log.target?.name || "—"}
                                </div>
                                <div
                                  style={{ color: "#6b7280", fontSize: "12px" }}
                                >
                                  {log.target.email}
                                </div>
                              </>
                            ) : (
                              <span style={{ color: "#d1d5db" }}>—</span>
                            )}
                          </td>
                          <td
                            data-label="Details"
                            style={{ color: "#6b7280", fontSize: "13px" }}
                          >
                            {log.details || "—"}
                          </td>
                          <td data-label="Date & Time" className="sad-date">
                            {formatDate(log.createdAt)}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "12px",
                  padding: "16px 24px",
                  borderTop: "1px solid #f1f3f5",
                }}
              >
                <button
                  className="sad-btn-create"
                  style={{ padding: "6px 16px", fontSize: "13px" }}
                  disabled={page === 1}
                  onClick={() => setPage((p) => p - 1)}
                >
                  Previous
                </button>
                <span style={{ fontSize: "13px", color: "#6b7280" }}>
                  Page {page} of {totalPages}
                </span>
                <button
                  className="sad-btn-create"
                  style={{ padding: "6px 16px", fontSize: "13px" }}
                  disabled={page === totalPages}
                  onClick={() => setPage((p) => p + 1)}
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </main>
      </div>
    </>
  );
};

export default AuditLog;
