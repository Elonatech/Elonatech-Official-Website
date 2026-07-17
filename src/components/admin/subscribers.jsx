import { Helmet } from "react-helmet-async";
import AdminSidebar from "./AdminSidebar";
import "./SuperAdminDashboard.css";

const Subscribers = () => {
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
              <p className="sad-subtitle">Newsletter subscriber list</p>
            </div>
          </div>

          <div className="sad-table-card">
            <div className="sad-loading">This section is being built — content coming soon.</div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Subscribers;
