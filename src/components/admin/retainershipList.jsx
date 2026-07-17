import { Helmet } from "react-helmet-async";
import AdminSidebar from "./AdminSidebar";
import "./SuperAdminDashboard.css";

const RetainershipList = () => {
  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex" />
        <title>Retainerships — Elonatech</title>
      </Helmet>

      <div className="sad-wrapper">
        <AdminSidebar active="retainerships" />

        <main className="sad-main">
          <div className="sad-header">
            <div>
              <h4 className="sad-title">Retainerships</h4>
              <p className="sad-subtitle">
                Review retainerships submitted through the Contact page
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
  )
}

export default RetainershipList