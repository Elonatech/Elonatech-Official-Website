import { Helmet } from "react-helmet-async";
import AdminSidebar from "./AdminSidebar";
import "./SuperAdminDashboard.css";

const EtmpdpList = () => {
  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex" />
        <title>Etmpdp — Elonatech</title>
      </Helmet>

      <div className="sad-wrapper">
        <AdminSidebar active="etmpdp" />

        <main className="sad-main">
          <div className="sad-header">
            <div>
              <h4 className="sad-title">Etmpdp</h4>
              <p className="sad-subtitle">Manage ETMPDP &amp; Ignite applications</p>
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

export default EtmpdpList;
