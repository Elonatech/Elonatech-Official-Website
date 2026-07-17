import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext";

const getToken = () => JSON.parse(localStorage.getItem("token"));

const getInitials = (name, email) => {
  const source = name?.trim() ? name.trim() : email?.split("@")[0] || "A";
  return source
    .split(/[\s._-]/)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase() || "")
    .join("");
};

// Shared sidebar shell used by every admin page — keeps nav items in sync
// across Dashboard, User Management, Audit Log, Job Applications, Career
// Jobs, Blog List, Subscribers, Quotes, ETMPDP, and Orders. Pass `active`
// with the current page's key so the matching item gets highlighted.
const NAV_ITEMS = [
  { key: "dashboard", label: "Dashboard", to: "/dashboard", icon: "bi-grid-1x2" },
  { key: "user-management", label: "User Management", to: "/super-admin", icon: "bi-people" },
  { key: "audit", label: "Audit Log", to: "/dashboard/audit", icon: "bi-journal-text", superAdminOnly: true },
  { key: "job-applications", label: "Job Applications", to: "/dashboard/job-applications", icon: "bi-inbox-fill" },
  { key: "career-jobs", label: "Career Jobs", to: "/dashboard/career-jobs", icon: "bi-briefcase-fill" },
  { key: "blog-list", label: "Blog List", to: "/dashboard/blog-list", icon: "bi-file-earmark-text" },
  { key: "subscribers", label: "Subscribers", to: "/dashboard/subscribers", icon: "bi-envelope" },
  { key: "quotes", label: "Quotes", to: "/dashboard/quotes", icon: "bi-file-earmark-ruled" },
  { key: "etmpdp", label: "Etmpdp", to: "/dashboard/etmpdp", icon: "bi-mortarboard" },
  { key: "orders", label: "Orders", to: "/dashboard/orders", icon: "bi-cart-check" },
];

const AdminSidebar = ({ active }) => {
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
    <aside className="sad-sidebar">
      <div className="sad-sidebar-brand">ADMIN CONSOLE</div>
      <nav className="sad-nav">
        {NAV_ITEMS.filter((item) => !item.superAdminOnly || me?.role === "superAdmin").map(
          (item) =>
            item.key === active ? (
              <div key={item.key} className="sad-nav-item active">
                <i className={`bi ${item.icon}`}></i>
                <span>{item.label}</span>
              </div>
            ) : (
              <Link key={item.key} to={item.to} className="sad-nav-item">
                <i className={`bi ${item.icon}`}></i>
                <span>{item.label}</span>
              </Link>
            )
        )}
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
  );
};

export default AdminSidebar;
