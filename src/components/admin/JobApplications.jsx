import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
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

const JobApplications = () => {
  const { logout } = useAuth();

  const me = (() => {
    try {
      const token = getToken();
      if (!token) return null;
      return JSON.parse(atob(token.split(".")[1]));
    } catch {
      return null;
    }
  })();

  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex" />
        <title>Job Applications — Elonatech</title>
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
            <div className="sad-nav-item active">
              <i className="bi bi-inbox-fill"></i>
              <span>Job Applications</span>
            </div>
            <Link to="/dashboard/career-jobs" className="sad-nav-item">
              <i className="bi bi-briefcase-fill"></i>
              <span>Career Jobs</span>
            </Link>
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
              <h4 className="sad-title">Job Applications</h4>
              <p className="sad-subtitle">
                Review applications submitted through the Career page
              </p>
            </div>
          </div>

          <div className="sad-table-card">
            <div className="sad-loading">
              This section is being built — content coming soon.
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default JobApplications;
