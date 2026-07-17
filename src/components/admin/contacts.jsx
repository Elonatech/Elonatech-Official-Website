import { Helmet } from "react-helmet-async";
import AdminSidebar from "./AdminSidebar";
import "./SuperAdminDashboard.css";


const Contacts = () => {
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
                  <p className="sad-subtitle">
                    Review contacts submitted through the Contact page
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

export default Contacts