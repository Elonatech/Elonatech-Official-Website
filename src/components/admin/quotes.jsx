import { Helmet } from "react-helmet-async";
import AdminSidebar from "./AdminSidebar";
import "./SuperAdminDashboard.css";

const Quotes = () => {
  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex" />
        <title>Quotes — Elonatech</title>
      </Helmet>

      <div className="sad-wrapper">
        <AdminSidebar active="quotes" />

        <main className="sad-main">
          <div className="sad-header">
            <div>
              <h4 className="sad-title">Quotes</h4>
              <p className="sad-subtitle">Manage submitted quote requests</p>
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

export default Quotes;
