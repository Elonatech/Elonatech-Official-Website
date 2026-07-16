import { Link } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import axios from "axios";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { BASEURL } from "../../BaseURL/BaseURL";
import { useAuth } from "./AuthContext";
import "../admin/SuperAdminDashboard.css";
import "./dashboard.css";

const getToken = () => JSON.parse(localStorage.getItem("token"));

const getTypeBadgeClass = (type) => {
  const key = type.toLowerCase();
  if (key === "blog") return "dash-type-badge--blog";
  if (key === "computer") return "dash-type-badge--computer";
  return "dash-type-badge--product";
};

const getInitials = (name, email) => {
  const source = name?.trim() ? name.trim() : email?.split("@")[0] || "A";
  return source
    .split(/[\s._-]/)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase() || "")
    .join("");
};

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

const Dashboard = () => {
  const { logout } = useAuth();
  const [visitorData, setVisitorData] = useState([]);
  const [recentContent, setRecentContent] = useState([]);
  const [mostActiveAdmin, setMostActiveAdmin] = useState(null);

  // Decode the JWT directly for profile info + role — avoids fetching the
  // full admin list just to render a name/avatar (matches AuditLog.jsx's pattern)
  const me = (() => {
    try {
      const token = getToken();
      if (!token) return null;
      return JSON.parse(atob(token.split(".")[1]));
    } catch {
      return null;
    }
  })();

  useEffect(() => {
    const fetchVisitorData = async () => {
      try {
        const currentYear = new Date().getFullYear();
        const response = await axios.get(
          `${BASEURL}/api/v1/visitors/monthly?year=${currentYear}`
        );
        const months = [
          "Jan", "Feb", "Mar", "Apr", "May", "Jun",
          "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
        ];
        const transformedData = response.data.visitors.map((v) => ({
          month: months[v._id.month - 1],
          visitors: v.count,
        }));
        setVisitorData(transformedData);
      } catch (error) {
        console.error("Error fetching visitor data:", error);
      }
    };
    fetchVisitorData();
  }, []);

  // Recent Content Updates — merges the latest blog posts + products, no
  // fabricated "status" field since neither model tracks a publish state
  useEffect(() => {
    const fetchRecentContent = async () => {
      try {
        const [blogRes, productRes] = await Promise.all([
          axios.get(`${BASEURL}/api/v1/blog/`),
          axios.get(`${BASEURL}/api/v1/product`),
        ]);

        const blogs = (blogRes.data.getAllBlogs || []).map((b) => ({
          _id: b._id,
          title: b.title,
          type: "Blog",
          createdAt: b.createdAt,
          link: `/blog/${b.slug || b._id}/${b._id}`,
        }));

        const products = (productRes.data.getAllProducts || []).map((p) => ({
          _id: p._id,
          title: p.name,
          type: p.category || "Product",
          createdAt: p.createdAt,
          link: `/product/${p.slug || p._id}/${p._id}`,
        }));

        const merged = [...blogs, ...products]
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .slice(0, 5);

        setRecentContent(merged);
      } catch (error) {
        console.error("Error fetching recent content:", error);
      }
    };
    fetchRecentContent();
  }, []);

  // Most Active Admin — derived from real audit log entries. Only fetched for
  // super admins since /api/v1/auth/audit is already restricted to that role.
  useEffect(() => {
    if (me?.role !== "superAdmin") return;

    const fetchInsights = async () => {
      try {
        const res = await axios.get(`${BASEURL}/api/v1/auth/audit`, {
          headers: { "x-access-token": getToken() },
          params: { limit: 200 },
        });

        const tally = {};
        (res.data.logs || []).forEach((log) => {
          const key = log.performedBy?.name || log.performedBy?.email || "Unknown";
          tally[key] = (tally[key] || 0) + 1;
        });

        const sorted = Object.entries(tally).sort((a, b) => b[1] - a[1]);
        if (sorted.length) {
          setMostActiveAdmin({ name: sorted[0][0], count: sorted[0][1] });
        }
      } catch (error) {
        console.error("Error fetching admin insights:", error);
      }
    };
    fetchInsights();
  }, [me?.role]);

  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex" />
        <title>Dashboard — Elonatech</title>
      </Helmet>

      <div className="sad-wrapper">
        {/* Sidebar — same shell as Super Admin Management / Audit Log */}
        <aside className="sad-sidebar">
          <div className="sad-sidebar-brand">ADMIN CONSOLE</div>
          <nav className="sad-nav">
            <div className="sad-nav-item active">
              <i className="bi bi-grid-1x2"></i>
              <span>Dashboard</span>
            </div>
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

        {/* Main content */}
        <main className="sad-main">
          <div className="sad-header">
            <div>
              <h4 className="sad-title">Dashboard</h4>
              <p className="sad-subtitle">
                Welcome back — here's what's happening today.
              </p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="dash-quick-actions">
            <Link to="/write" className="dash-action-card">
              <div className="dash-action-icon dash-action-icon--red">
                <i className="bi bi-pencil-square"></i>
              </div>
              <div>
                <h6>Create Blog</h6>
                <p>Post new content</p>
              </div>
            </Link>
            <Link to="/computer-write" className="dash-action-card">
              <div className="dash-action-icon dash-action-icon--green">
                <i className="bi bi-laptop"></i>
              </div>
              <div>
                <h6>Upload Computer</h6>
                <p>Inventory update</p>
              </div>
            </Link>
            <Link to="/shop-write" className="dash-action-card">
              <div className="dash-action-icon dash-action-icon--blue">
                <i className="bi bi-bag"></i>
              </div>
              <div>
                <h6>Upload Product</h6>
                <p>E-commerce management</p>
              </div>
            </Link>
          </div>

          {/* Secondary links */}
          <div className="dash-secondary-links">
            <Link to="/blog" className="dash-pill-link">View Blog Page</Link>
            <Link to="/computers" className="dash-pill-link">View Computer Page</Link>
            <Link to="/products" className="dash-pill-link">View Shop Page</Link>
          </div>

          {/* Visitor Analytics */}
          <div className="sad-table-card mb-4">
            <div className="sad-table-header">
              <span className="sad-table-title">VISITOR ANALYTICS</span>
            </div>
            <div className="dash-chart-wrap">
              <ResponsiveContainer width="100%" height={320}>
                <LineChart data={visitorData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="visitors"
                    stroke="#dc3545"
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="dash-grid-2col">
            {/* Recent Content Updates */}
            <div className="sad-table-card">
              <div className="sad-table-header">
                <span className="sad-table-title">RECENT CONTENT UPDATES</span>
              </div>
              {recentContent.length === 0 ? (
                <div className="sad-loading">No recent content yet.</div>
              ) : (
                <div className="table-responsive">
                  <table className="sad-table">
                    <thead>
                      <tr>
                        <th>TITLE</th>
                        <th>TYPE</th>
                        <th>DATE</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentContent.map((item) => (
                        <tr key={item._id}>
                          <td data-label="Title">
                            <Link to={item.link} className="dash-content-link">
                              {item.title}
                            </Link>
                          </td>
                          <td data-label="Type">
                            <span className={`dash-type-badge ${getTypeBadgeClass(item.type)}`}>
                              {item.type}
                            </span>
                          </td>
                          <td data-label="Date" className="sad-date">
                            {formatDate(item.createdAt)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            {/* Admin Insights — super admin only, since it relies on audit log access */}
            {me?.role === "superAdmin" && mostActiveAdmin && (
              <div className="dash-insights-card">
                <h5>Admin Insights</h5>
                <p className="dash-insights-label">Most Active Admin</p>
                <p className="dash-insights-value">{mostActiveAdmin.name}</p>
                <p className="dash-insights-sub">{mostActiveAdmin.count} logged actions</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </>
  );
};

export default Dashboard;
