import { Helmet } from "react-helmet-async";
import AdminSidebar from "./AdminSidebar";
import "./SuperAdminDashboard.css";

const Orders = () => {
  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex" />
        <title>Orders — Elonatech</title>
      </Helmet>

      <div className="sad-wrapper">
        <AdminSidebar active="orders" />

        <main className="sad-main">
          <div className="sad-header">
            <div>
              <h4 className="sad-title">Orders</h4>
              <p className="sad-subtitle">Manage checkout orders</p>
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

export default Orders;
