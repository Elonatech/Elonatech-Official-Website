import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import { BASEURL } from "../../BaseURL/BaseURL";
import AdminSidebar from "./AdminSidebar";
import "./SuperAdminDashboard.css";

const getToken = () => JSON.parse(localStorage.getItem("token"));

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

const Subscribers = () => {
  const [subscribers, setSubscribers] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showConfirm, setShowConfirm] = useState(false);
  const [selected, setSelected] = useState(null);

  const fetchSubscribers = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${BASEURL}/api/v1/subscribers/all`, {
        headers: { "x-access-token": getToken() },
      });
      setSubscribers(res.data.subscribers || []);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to load subscribers");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubscribers();
  }, []);

  const csvField = (value) => `"${String(value ?? "").replace(/"/g, '""')}"`;

  const exportToCsv = () => {
    const header = ["Email", "Subscribed"].map(csvField).join(",");
    const rows = subscribers.map((s) =>
      [s.email, formatDate(s.createdAt)].map(csvField).join(",")
    );
    const csv = [header, ...rows].join("\n");

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `subscribers-${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const confirmDelete = (subscriber) => {
    setSelected(subscriber);
    setShowConfirm(true);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`${BASEURL}/api/v1/subscribers/${selected._id}`, {
        headers: { "x-access-token": getToken() },
      });
      toast.success("Subscriber removed");
      setShowConfirm(false);
      setSelected(null);
      fetchSubscribers();
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to delete subscriber");
    }
  };

  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex" />
        <title>Subscribers — Elonatech</title>
      </Helmet>

      <div className="sad-wrapper">
        <AdminSidebar active="subscribers" />

        <main className="sad-main">
          <div className="sad-header">
            <div>
              <h4 className="sad-title">Subscribers</h4>
              <p className="sad-subtitle">Newsletter subscribers</p>
            </div>
          </div>

          <div className="sad-table-card">
            <div className="sad-table-header">
              <span className="sad-table-title">ALL SUBSCRIBERS</span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span className="sad-active-badge">
                  <span className="sad-dot"></span>
                  {subscribers.length} Total
                </span>
                <button
                  className="sad-btn-create"
                  style={{ padding: "6px 16px", fontSize: "13px" }}
                  onClick={exportToCsv}
                  disabled={subscribers.length === 0}
                >
                  <i className="bi bi-download me-2"></i> Export CSV
                </button>
              </div>
            </div>

            {loading ? (
              <div className="sad-loading">Loading subscribers...</div>
            ) : subscribers.length === 0 ? (
              <div className="sad-loading">No subscribers yet.</div>
            ) : (
              <div className="table-responsive">
                <table className="sad-table">
                  <thead>
                    <tr>
                      <th>EMAIL</th>
                      <th>SUBSCRIBED</th>
                      <th>ACTIONS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {subscribers.map((subscriber) => (
                      <tr key={subscriber._id}>
                        <td data-label="Email">{subscriber.email}</td>
                        <td data-label="Subscribed">{formatDate(subscriber.createdAt)}</td>
                        <td data-label="Actions">
                          <div className="job-actions-cell">
                            <button className="job-action-delete" onClick={() => confirmDelete(subscriber)}>
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
                Remove <strong>{selected?.email}</strong> from the subscriber list? This
                action cannot be undone.
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

export default Subscribers;
