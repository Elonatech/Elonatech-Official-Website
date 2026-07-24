import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import { BASEURL } from "../../BaseURL/BaseURL";
import AdminSidebar from "./AdminSidebar";
import "./SuperAdminDashboard.css";

const getToken = () => JSON.parse(localStorage.getItem("token"));

const CONTACT_STATUSES = ["New", "Read", "Replied", "Closed"];

const statusBadgeClass = (status) => {
  if (status === "Replied") return "job-status-active";
  if (status === "New") return "job-status-draft";
  if (status === "Closed") return "job-status-closed";
  return "sad-role-admin"; // Read — blue
};

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [viewing, setViewing] = useState(null);
  const [showConfirm, setShowConfirm] = useState(false);
  const [selected, setSelected] = useState(null);

  const fetchContacts = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${BASEURL}/api/v1/contacts/all`, {
        headers: { "x-access-token": getToken() },
      });
      setContacts(res.data.contacts || []);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to load contacts");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const changeStatus = async (contact, status) => {
    try {
      await axios.patch(
        `${BASEURL}/api/v1/contacts/${contact._id}`,
        { status },
        { headers: { "x-access-token": getToken() } }
      );
      setContacts((prev) =>
        prev.map((c) => (c._id === contact._id ? { ...c, status } : c))
      );
      toast.success("Contact status updated");
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to update status");
    }
  };

  const confirmDelete = (contact) => {
    setSelected(contact);
    setShowConfirm(true);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`${BASEURL}/api/v1/contacts/${selected._id}`, {
        headers: { "x-access-token": getToken() },
      });
      toast.success("Contact deleted successfully");
      setShowConfirm(false);
      setSelected(null);
      fetchContacts();
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to delete contact");
    }
  };

  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex" />
        <title>Contacts — Elonatech</title>
      </Helmet>

      <div className="sad-wrapper">
        <AdminSidebar active="contacts" />

        <main className="sad-main">
          <div className="sad-header">
            <div>
              <h4 className="sad-title">Contacts</h4>
              <p className="sad-subtitle">Messages submitted through the contact forms</p>
            </div>
          </div>

          <div className="sad-table-card">
            <div className="sad-table-header">
              <span className="sad-table-title">ALL MESSAGES</span>
              <span className="sad-active-badge">
                <span className="sad-dot"></span>
                {contacts.length} Total
              </span>
            </div>

            {loading ? (
              <div className="sad-loading">Loading messages...</div>
            ) : contacts.length === 0 ? (
              <div className="sad-loading">No messages yet.</div>
            ) : (
              <div className="table-responsive">
                <table className="sad-table">
                  <thead>
                    <tr>
                      <th>NAME</th>
                      <th>CONTACT</th>
                      <th>SUBJECT</th>
                      <th>STATUS</th>
                      <th>DATE</th>
                      <th>ACTIONS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {contacts.map((contact) => (
                      <tr key={contact._id}>
                        <td data-label="Name">
                          {contact.name}
                          {!contact.emailSent && (
                            <div className="job-workplace-subtext" style={{ color: "#d97706" }}>
                              Email not sent
                            </div>
                          )}
                        </td>
                        <td data-label="Contact">
                          {contact.email}
                          <div className="job-workplace-subtext">{contact.number}</div>
                        </td>
                        <td data-label="Subject">{contact.subject}</td>
                        <td data-label="Status">
                          <select
                            className={`sad-status-select ${statusBadgeClass(contact.status)}`}
                            value={contact.status}
                            onChange={(e) => changeStatus(contact, e.target.value)}
                          >
                            {CONTACT_STATUSES.map((s) => (
                              <option key={s} value={s}>{s}</option>
                            ))}
                          </select>
                        </td>
                        <td data-label="Date">{formatDate(contact.createdAt)}</td>
                        <td data-label="Actions">
                          <div className="job-actions-cell">
                            <button className="job-action-edit" onClick={() => setViewing(contact)}>
                              View
                            </button>
                            <button className="job-action-delete" onClick={() => confirmDelete(contact)}>
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

      {/* Contact detail modal */}
      {viewing && (
        <div className="sad-overlay">
          <div className="sad-modal sad-modal-lg" onClick={(e) => e.stopPropagation()}>
            <div className="sad-modal-header">
              <h5>Message Details</h5>
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
                  <label className="sad-label">Name</label>
                  <div className="sad-readonly">{viewing.name}</div>
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
                  <label className="sad-label">Subject</label>
                  <div className="sad-readonly">{viewing.subject}</div>
                </div>
              </div>
              <div className="mb-3">
                <label className="sad-label">Message</label>
                <div className="sad-readonly">{viewing.message}</div>
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
                Are you sure you want to delete the message from{" "}
                <strong>{selected?.name}</strong>? This action cannot be undone.
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

export default Contacts;
