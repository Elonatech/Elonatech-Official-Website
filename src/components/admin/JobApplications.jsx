import { Helmet } from "react-helmet-async";
import AdminSidebar from "./AdminSidebar";
import "./SuperAdminDashboard.css";

const JobApplications = () => {
  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex" />
        <title>Job Applications — Elonatech</title>
      </Helmet>

      <div className="sad-wrapper">
        <AdminSidebar active="job-applications" />

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
