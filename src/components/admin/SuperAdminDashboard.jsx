import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { BASEURL } from "../../BaseURL/BaseURL";
import { useAuth } from "./AuthContext";
import { Helmet } from "react-helmet-async";
import "./SuperAdminDashboard.css";

const getInitials = (name, email) => {
  const source = name && name.trim() ? name.trim() : email.split("@")[0];
  const parts = source.split(/[\s._-]/);
  return parts
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase() || "")
    .join("");
};

const getRoleBadge = (role) => {
  if (role === "superAdmin") {
    return <span className="sad-role-badge sad-role-super">Super Admin</span>;
  }
  return <span className="sad-role-badge sad-role-admin">Admin</span>;
};

const SuperAdminDashboard = () => {
  const { logout } = useAuth();
  const [admins, setAdmins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [selectedAdmin, setSelectedAdmin] = useState(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "admin",
  });
  const [submitting, setSubmitting] = useState(false);
  const [editingAdmin, setEditingAdmin] = useState(null);
  const [editForm, setEditForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "admin",
  });
  const [editSubmitting, setEditSubmitting] = useState(false);

  // 2FA setup state — only used by the master account
  const [qrCode, setQrCode] = useState(null);
  const [totpCode, setTotpCode] = useState("");
  const [show2faSetup, setShow2faSetup] = useState(false);
  const [disablingTotp, setDisablingTotp] = useState(false);
  const [confirmDisable2fa, setConfirmDisable2fa] = useState(false);

  const currentAdminId = (() => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      if (!token) return null;
      const payload = JSON.parse(atob(token.split(".")[1]));
      return payload.id || null;
    } catch {
      return null;
    }
  })();

  const getToken = () => JSON.parse(localStorage.getItem("token"));

  const fetchAdmins = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${BASEURL}/api/v1/auth/all`, {
        headers: { "x-access-token": getToken() },
      });
      setAdmins(res.data.admins);
    } catch (error) {
      toast.error("Failed to load admins");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAdmins();
  }, []);

  const handleCreateAdmin = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password || !form.role) {
      toast.error("Please fill all fields");
      return;
    }
    try {
      setSubmitting(true);
      await axios.post(`${BASEURL}/api/v1/auth/create`, form, {
        headers: { "x-access-token": getToken() },
      });
      toast.success("Admin created successfully");
      setShowModal(false);
      setForm({ name: "", email: "", password: "", role: "admin" });
      fetchAdmins();
    } catch (error) {
      const errors = error.response?.data?.errors;
      if (errors?.length) {
        errors.forEach((msg) => toast.error(msg));
      } else {
        toast.error(error.response?.data?.message || "Failed to create admin");
      }
    } finally {
      setSubmitting(false);
    }
  };

  const currentAdmin = admins.find((a) => a._id === currentAdminId);
  const isMaster = currentAdmin?.isMaster || false;
  const currentIsSuperAdmin = currentAdmin?.role === "superAdmin";

  const confirmDelete = (admin) => {
    setSelectedAdmin(admin);
    setShowConfirm(true);
  };

  const openEdit = (admin) => {
    setEditingAdmin(admin);
    setEditForm({
      name: admin.name || "",
      email: admin.email || "",
      password: "",
      role: admin.role || "admin",
    });
  };

  const handleEditAdmin = async (e) => {
    e.preventDefault();
    try {
      setEditSubmitting(true);
      const payload = {
        name: editForm.name,
        email: editForm.email,
        role: editForm.role,
      };
      if (editForm.password.trim()) payload.password = editForm.password;

      await axios.patch(`${BASEURL}/api/v1/auth/${editingAdmin._id}`, payload, {
        headers: { "x-access-token": getToken() },
      });
      toast.success("Admin updated successfully");
      setEditingAdmin(null);
      fetchAdmins();
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to update admin");
    } finally {
      setEditSubmitting(false);
    }
  };

  // ── 2FA: Step 1 — request QR code from backend ──────────────────────────────
  const handleSetupTotp = async () => {
    try {
      // Call the setup endpoint — backend generates a secret and returns a QR code image
      const res = await axios.post(
        `${BASEURL}/api/v1/auth/totp/setup`,
        {},
        { headers: { "x-access-token": getToken() } }
      );
      // Store the QR code (base64 image string) so we can render it as an <img> tag
      setQrCode(res.data.qrCode);
      toast.success("Scan the QR code with Google Authenticator");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to generate QR code"
      );
    }
  };

  // Refreshes the access token using the httpOnly refresh cookie, updates localStorage
  const refreshAccessToken = async () => {
    const res = await axios.post(
      `${BASEURL}/api/v1/auth/refresh`,
      {},
      { withCredentials: true }
    );
    localStorage.setItem("token", JSON.stringify(res.data.access));
    return res.data.access;
  };

  // ── 2FA: Step 2 — confirm the scan worked by verifying the first code ────────
  const handleEnableTotp = async (e) => {
    e.preventDefault();
    try {
      // Send the 6-digit code the master typed — backend verifies it and sets totpEnabled: true
      await axios.post(
        `${BASEURL}/api/v1/auth/totp/enable`,
        { code: totpCode },
        { headers: { "x-access-token": getToken() } }
      );
      toast.success(
        "2FA enabled successfully! You'll need your authenticator app on next login."
      );
      // Reset the setup UI — QR is no longer needed
      setQrCode(null);
      setTotpCode("");
      setShow2faSetup(false);
    } catch (error) {
      // If token expired, get a fresh one and retry once
      if (error.response?.status === 401) {
        try {
          const newToken = await refreshAccessToken();
          await axios.post(
            `${BASEURL}/api/v1/auth/totp/enable`,
            { code: totpCode },
            { headers: { "x-access-token": newToken } }
          );
          toast.success(
            "2FA enabled successfully! You'll need your authenticator app on next login."
          );
          setQrCode(null);
          setTotpCode("");
          setShow2faSetup(false);
        } catch (retryError) {
          toast.error(
            retryError.response?.data?.message ||
              "Session expired — please log in again"
          );
        }
      } else {
        toast.error(
          error.response?.data?.message || "Invalid code — try again"
        );
      }
    }
  };

  const handleDisableTotp = async () => {
    try {
      setDisablingTotp(true);
      await axios.post(
        `${BASEURL}/api/v1/auth/totp/disable`,
        {},
        { headers: { "x-access-token": getToken() } }
      );
      toast.success("2FA has been disabled");
      setQrCode(null);
      setTotpCode("");
      setConfirmDisable2fa(false);
      fetchAdmins();
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to disable 2FA");
    } finally {
      setDisablingTotp(false);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`${BASEURL}/api/v1/auth/${selectedAdmin._id}`, {
        headers: { "x-access-token": getToken() },
      });
      toast.success("Admin deleted successfully");
      setShowConfirm(false);
      setSelectedAdmin(null);
      fetchAdmins();
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to delete admin");
    }
  };

  const adminCount = admins.length;
  const superAdminCount = admins.filter((a) => a.role === "superAdmin").length;

  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex" />
        <title>Super Admin — Elonatech</title>
      </Helmet>

      <div className="sad-wrapper">
        {/* Sidebar */}
        <aside className="sad-sidebar">
          <div className="sad-sidebar-brand">ADMIN CONSOLE</div>
          <nav className="sad-nav">
            <Link to="/dashboard" className="sad-nav-item">
              <i className="bi bi-grid-1x2"></i>
              <span>Dashboard</span>
            </Link>
            <div className="sad-nav-item active">
              <i className="bi bi-people"></i>
              <span>User Management</span>
            </div>
            {currentIsSuperAdmin && (
              <Link to="/dashboard/audit" className="sad-nav-item">
                <i className="bi bi-journal-text"></i>
                <span>Audit Log</span>
              </Link>
            )}
          </nav>
          <div className="sad-sidebar-footer">
            <div className="sad-profile-row">
              {(() => {
                const me = admins.find((a) => a._id === currentAdminId);
                return me ? (
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
                ) : null;
              })()}
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

        {/* Main Content */}
        <main className="sad-main">
          {/* Header */}
          <div className="sad-header">
            <div>
              <h4 className="sad-title">
                {currentIsSuperAdmin
                  ? "Super Admin Management"
                  : "Admin Directory"}
              </h4>
              <p className="sad-subtitle">
                {currentIsSuperAdmin
                  ? "Manage privileged access and administrative roles within  Elonatech ."
                  : "View administrative accounts within  Elonatech ."}
              </p>
            </div>
            {currentIsSuperAdmin && (
              <button
                className="sad-btn-create"
                onClick={() => setShowModal(true)}
              >
                <i className="bi bi-plus-lg me-2"></i> CREATE ADMIN
              </button>
            )}
          </div>

          {/* 2FA Setup — only rendered for the master account */}
          {isMaster && (
            <div className="sad-table-card mb-4">
              <div
                className="sad-table-header"
                style={{ cursor: "pointer" }}
                onClick={() => setShow2faSetup(!show2faSetup)}
              >
                <span className="sad-table-title">
                  <i className="bi bi-shield-lock me-2"></i> Two-Factor
                  Authentication (2FA)
                </span>
                {/* Chevron rotates to show open/closed state */}
                <i
                  className={`bi bi-chevron-${show2faSetup ? "up" : "down"}`}
                ></i>
              </div>

              {show2faSetup && (
                <div className="p-4">
                  {(() => {
                    const currentAdmin = admins.find(
                      (a) => a._id === currentAdminId
                    );
                    const isEnabled = currentAdmin?.totpEnabled;

                    if (isEnabled && !qrCode) {
                      // ── 2FA is already active ──────────────────────────────────
                      return (
                        <div>
                          <div className="d-flex align-items-center gap-2 mb-3">
                            <i
                              className="bi bi-shield-fill-check"
                              style={{ color: "#198754", fontSize: "1.4rem" }}
                            ></i>
                            <span
                              className="fw-bold"
                              style={{ color: "#198754" }}
                            >
                              Two-factor authentication is enabled
                            </span>
                          </div>
                          <p className="text-muted mb-3">
                            Your account is protected. You'll be asked for a
                            6-digit code from your Authenticator App each time
                            you log in.
                          </p>
                          <div className="d-flex gap-2 flex-wrap align-items-center">
                            <button
                              className="sad-btn-create"
                              onClick={handleSetupTotp}
                            >
                              <i className="bi bi-arrow-repeat me-2"></i> Reset
                              Setup
                            </button>
                            {!confirmDisable2fa ? (
                              <button
                                className="btn btn-outline-danger"
                                onClick={() => setConfirmDisable2fa(true)}
                              >
                                <i className="bi bi-shield-x me-2"></i> Disable
                                2FA
                              </button>
                            ) : (
                              <div
                                className="d-flex align-items-center gap-2"
                                style={{
                                  background: "#fff3cd",
                                  border: "1px solid #ffc107",
                                  borderRadius: "6px",
                                  padding: "6px 12px",
                                }}
                              >
                                <span
                                  style={{ fontSize: "13px", color: "#856404" }}
                                >
                                  Are you sure?
                                </span>
                                <button
                                  className="btn btn-danger btn-sm"
                                  onClick={handleDisableTotp}
                                  disabled={disablingTotp}
                                >
                                  {disablingTotp
                                    ? "Disabling..."
                                    : "Yes, disable"}
                                </button>
                                <button
                                  className="btn btn-outline-secondary btn-sm"
                                  onClick={() => setConfirmDisable2fa(false)}
                                >
                                  Cancel
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    }

                    if (qrCode) {
                      // ── QR generated — waiting for confirmation ────────────────
                      return (
                        <div>
                          <p className="mb-3 fw-bold">
                            Scan this QR code with your Authenticator App:
                          </p>
                          <img
                            src={qrCode}
                            alt="2FA QR Code"
                            style={{
                              width: "200px",
                              marginBottom: "1rem",
                              display: "block",
                            }}
                          />
                          <p className="text-muted mb-3">
                            After scanning, enter the 6-digit code shown in the
                            app to confirm it worked:
                          </p>
                          <form
                            onSubmit={handleEnableTotp}
                            className="d-flex gap-2 align-items-center flex-wrap"
                          >
                            <input
                              type="text"
                              className="form-control"
                              style={{ maxWidth: "160px" }}
                              placeholder="000000"
                              maxLength={6}
                              value={totpCode}
                              onChange={(e) => setTotpCode(e.target.value)}
                              required
                              autoFocus
                            />
                            <button type="submit" className="sad-btn-create">
                              Confirm & Enable
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-secondary"
                              onClick={() => {
                                setQrCode(null);
                                setTotpCode("");
                              }}
                            >
                              Cancel
                            </button>
                          </form>
                        </div>
                      );
                    }

                    // ── Not set up yet ─────────────────────────────────────────
                    return (
                      <div>
                        <p className="text-muted mb-3">
                          Set up 2FA to require a code from Authenticator App
                          every time you log in. You only need to do this once.
                        </p>
                        <button
                          className="sad-btn-create"
                          onClick={handleSetupTotp}
                        >
                          <i className="bi bi-qr-code me-2"></i> Generate QR
                          Code
                        </button>
                      </div>
                    );
                  })()}
                </div>
              )}
            </div>
          )}

          {/* Stats Row */}
          <div className="sad-stats-row">
            <div className="sad-stat-card">
              <span className="sad-stat-number">{adminCount}</span>
              <span className="sad-stat-label">Total Admins</span>
            </div>
            <div className="sad-stat-card">
              <span className="sad-stat-number">{superAdminCount}</span>
              <span className="sad-stat-label">Super Admins</span>
            </div>
            <div className="sad-stat-card">
              <span className="sad-stat-number">
                {adminCount - superAdminCount}
              </span>
              <span className="sad-stat-label">Regular Admins</span>
            </div>
          </div>

          {/* Table */}
          <div className="sad-table-card">
            <div className="sad-table-header">
              <span className="sad-table-title">ACTIVE ADMINISTRATORS</span>
              <span className="sad-active-badge">
                <span className="sad-dot"></span>
                {adminCount} Active
              </span>
            </div>

            {loading ? (
              <div className="sad-loading">Loading admins...</div>
            ) : (
              <div className="table-responsive">
                <table className="sad-table">
                  <thead>
                    <tr>
                      <th>ADMIN</th>
                      <th>EMAIL ADDRESS</th>
                      <th>ROLE</th>
                      {currentIsSuperAdmin && <th>ACTIONS</th>}
                    </tr>
                  </thead>
                  <tbody>
                    {admins.map((admin) => {
                      const isOwnAccount = admin._id === currentAdminId;
                      const targetIsSuperAdmin = admin.role === "superAdmin";
                      const canDelete =
                        !isOwnAccount && (isMaster || !targetIsSuperAdmin);
                      // Master can edit anyone; super admins can only edit normal admins or themselves; normal admins can only edit themselves
                      const currentAdmin = admins.find(
                        (a) => a._id === currentAdminId
                      );
                      const currentIsSuperAdmin =
                        currentAdmin?.role === "superAdmin";
                      const canEdit =
                        isMaster ||
                        isOwnAccount ||
                        (!admin.isMaster &&
                          !targetIsSuperAdmin &&
                          currentIsSuperAdmin) ||
                        (!admin.isMaster &&
                          !targetIsSuperAdmin &&
                          !currentIsSuperAdmin &&
                          isOwnAccount);

                      return (
                        <tr key={admin._id}>
                          <td data-label="Admin">
                            <div className="sad-admin-cell">
                              <div className="sad-avatar">
                                {getInitials(admin.name, admin.email)}
                              </div>
                              <span className="sad-admin-name">
                                {admin.name || admin.email.split("@")[0]}
                              </span>
                              {admin.isMaster && (
                                <span
                                  className="sad-role-badge"
                                  style={{
                                    background: "#7c3aed",
                                    color: "#fff",
                                    marginLeft: "6px",
                                    fontSize: "10px",
                                  }}
                                >
                                  Master
                                </span>
                              )}
                            </div>
                          </td>
                          <td data-label="Email" className="sad-email">
                            {admin.email}
                          </td>
                          <td data-label="Role">{getRoleBadge(admin.role)}</td>
                          {currentIsSuperAdmin && (
                            <td data-label="Actions">
                              <button
                                className="sad-btn-delete"
                                style={{
                                  marginRight: "8px",
                                  background: "transparent",
                                  border: "none",
                                  color: canEdit ? "#475569" : "#cbd5e1",
                                  cursor: canEdit ? "pointer" : "not-allowed",
                                }}
                                title={
                                  canEdit
                                    ? "Edit admin"
                                    : "You don't have permission to edit this account"
                                }
                                disabled={!canEdit}
                                onClick={() => canEdit && openEdit(admin)}
                              >
                                <i className="bi bi-pencil"></i>
                              </button>
                              <button
                                className="sad-btn-delete"
                                disabled={!canDelete}
                                title={
                                  isOwnAccount
                                    ? "Cannot delete your own account"
                                    : targetIsSuperAdmin && !isMaster
                                    ? "Only the master admin can delete super admins"
                                    : "Delete admin"
                                }
                                onClick={() =>
                                  canDelete && confirmDelete(admin)
                                }
                              >
                                <i className="bi bi-trash"></i>
                              </button>
                            </td>
                          )}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </main>
      </div>

      {/* Create Admin Modal */}
      {showModal && (
        <div className="sad-overlay">
          <div className="sad-modal" onClick={(e) => e.stopPropagation()}>
            <div className="sad-modal-header">
              <h5>Create New Admin</h5>
              <button
                className="sad-modal-close"
                onClick={() => setShowModal(false)}
              >
                <i className="bi bi-x-lg"></i>
              </button>
            </div>
            <form onSubmit={handleCreateAdmin} className="sad-modal-body">
              <div className="mb-3">
                <label className="sad-label">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="e.g. John Doe"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="sad-label">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="admin@elonatech.com.ng"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="sad-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Set a strong password"
                  value={form.password}
                  onChange={(e) =>
                    setForm({ ...form, password: e.target.value })
                  }
                  required
                />
              </div>
              <div className="mb-4">
                <label className="sad-label">Role</label>
                <select
                  className="form-select"
                  value={form.role}
                  onChange={(e) => setForm({ ...form, role: e.target.value })}
                >
                  <option value="admin">Admin</option>
                  <option value="superAdmin">Super Admin</option>
                </select>
              </div>
              <button
                type="submit"
                className="sad-btn-create w-100"
                disabled={submitting}
              >
                {submitting ? "Creating..." : "Create Admin"}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Edit Admin Modal */}
      {editingAdmin && (
        <div className="sad-overlay">
          <div className="sad-modal" onClick={(e) => e.stopPropagation()}>
            <div className="sad-modal-header">
              <h5>Edit Admin</h5>
              <button
                className="sad-modal-close"
                onClick={() => setEditingAdmin(null)}
              >
                <i className="bi bi-x-lg"></i>
              </button>
            </div>
            <form onSubmit={handleEditAdmin} className="sad-modal-body">
              <div className="mb-3">
                <label className="sad-label">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={editForm.name}
                  onChange={(e) =>
                    setEditForm({ ...editForm, name: e.target.value })
                  }
                  placeholder="e.g. John Doe"
                  autoFocus
                />
              </div>
              <div className="mb-3">
                <label className="sad-label">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  value={editForm.email}
                  onChange={(e) =>
                    setEditForm({ ...editForm, email: e.target.value })
                  }
                  required
                />
              </div>
              <div className="mb-3">
                <label className="sad-label">
                  New Password{" "}
                  <span className="text-muted" style={{ fontWeight: 400 }}>
                    (leave blank to keep current)
                  </span>
                </label>
                <input
                  type="password"
                  className="form-control"
                  value={editForm.password}
                  onChange={(e) =>
                    setEditForm({ ...editForm, password: e.target.value })
                  }
                  placeholder="Min. 8 characters"
                />
              </div>
              <div className="mb-4">
                <label className="sad-label">Role</label>
                <select
                  className="form-select"
                  value={editForm.role}
                  onChange={(e) =>
                    setEditForm({ ...editForm, role: e.target.value })
                  }
                >
                  <option value="admin">Admin</option>
                  <option value="superAdmin">Super Admin</option>
                </select>
              </div>
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
            <div className="sad-modal-body">
              <p>
                Are you sure you want to delete{" "}
                <strong>{selectedAdmin?.email}</strong>? This action cannot be
                undone.
              </p>
              <div className="d-flex gap-2 mt-3">
                <button
                  className="btn btn-outline-secondary w-100"
                  onClick={() => setShowConfirm(false)}
                >
                  Cancel
                </button>
                <button className="btn btn-danger w-100" onClick={handleDelete}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SuperAdminDashboard;
