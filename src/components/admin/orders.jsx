import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import { BASEURL } from "../../BaseURL/BaseURL";
import AdminSidebar from "./AdminSidebar";
import "./SuperAdminDashboard.css";

const getToken = () => JSON.parse(localStorage.getItem("token"));

const ORDER_STATUSES = ["Pending", "Processing", "Completed", "Cancelled"];

// Reuse the existing job-status badge palette, mapped to order states
const statusBadgeClass = (status) => {
  if (status === "Completed") return "job-status-active";
  if (status === "Pending") return "job-status-draft";
  if (status === "Cancelled") return "job-status-closed";
  return "sad-role-admin"; // Processing — blue
};

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

const formatNaira = (n) => `₦${Number(n || 0).toLocaleString()}`;

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const [viewing, setViewing] = useState(null);
  const [showConfirm, setShowConfirm] = useState(false);
  const [selected, setSelected] = useState(null);

  const fetchOrders = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${BASEURL}/api/v1/orders/all`, {
        headers: { "x-access-token": getToken() },
      });
      setOrders(res.data.orders || []);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to load orders");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const changeStatus = async (order, status) => {
    try {
      await axios.patch(
        `${BASEURL}/api/v1/orders/${order._id}`,
        { status },
        { headers: { "x-access-token": getToken() } }
      );
      setOrders((prev) =>
        prev.map((o) => (o._id === order._id ? { ...o, status } : o))
      );
      toast.success("Order status updated");
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to update status");
    }
  };

  const confirmDelete = (order) => {
    setSelected(order);
    setShowConfirm(true);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`${BASEURL}/api/v1/orders/${selected._id}`, {
        headers: { "x-access-token": getToken() },
      });
      toast.success("Order deleted successfully");
      setShowConfirm(false);
      setSelected(null);
      fetchOrders();
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to delete order");
    }
  };

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
              <p className="sad-subtitle">Checkout orders submitted from the store</p>
            </div>
          </div>

          <div className="sad-table-card">
            <div className="sad-table-header">
              <span className="sad-table-title">ALL ORDERS</span>
              <span className="sad-active-badge">
                <span className="sad-dot"></span>
                {orders.length} Total
              </span>
            </div>

            {loading ? (
              <div className="sad-loading">Loading orders...</div>
            ) : orders.length === 0 ? (
              <div className="sad-loading">No orders yet.</div>
            ) : (
              <div className="table-responsive">
                <table className="sad-table">
                  <thead>
                    <tr>
                      <th>CUSTOMER</th>
                      <th>CONTACT</th>
                      <th>ITEMS</th>
                      <th>TOTAL</th>
                      <th>STATUS</th>
                      <th>DATE</th>
                      <th>ACTIONS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order) => (
                      <tr key={order._id}>
                        <td data-label="Customer">
                          {order.firstname} {order.lastname}
                          {!order.emailSent && (
                            <div className="job-workplace-subtext" style={{ color: "#d97706" }}>
                              Email not sent
                            </div>
                          )}
                        </td>
                        <td data-label="Contact">
                          {order.email}
                          <div className="job-workplace-subtext">{order.number}</div>
                        </td>
                        <td data-label="Items">{order.items?.length || 0}</td>
                        <td data-label="Total">{formatNaira(order.cartTotal)}</td>
                        <td data-label="Status">
                          <select
                            className={`sad-status-select ${statusBadgeClass(order.status)}`}
                            value={order.status}
                            onChange={(e) => changeStatus(order, e.target.value)}
                          >
                            {ORDER_STATUSES.map((s) => (
                              <option key={s} value={s}>{s}</option>
                            ))}
                          </select>
                        </td>
                        <td data-label="Date">{formatDate(order.createdAt)}</td>
                        <td data-label="Actions">
                          <div className="job-actions-cell">
                            <button className="job-action-edit" onClick={() => setViewing(order)}>
                              View
                            </button>
                            <button className="job-action-delete" onClick={() => confirmDelete(order)}>
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </main>
      </div>

      {/* Order detail modal */}
      {viewing && (
        <div className="sad-overlay">
          <div className="sad-modal sad-modal-lg" onClick={(e) => e.stopPropagation()}>
            <div className="sad-modal-header">
              <h5>Order Details</h5>
              <button className="sad-modal-close" onClick={() => setViewing(null)}>
                <i className="bi bi-x-lg"></i>
              </button>
            </div>
            <div className="sad-modal-body">
              <div className="sad-form-row">
                <div className="mb-3">
                  <label className="sad-label">Status</label>
                  <div>
                    <span className={`sad-role-badge ${statusBadgeClass(viewing.status)}`}>
                      {viewing.status}
                    </span>
                  </div>
                </div>
                <div className="mb-3">
                  <label className="sad-label">Confirmation Email</label>
                  <div>
                    <span
                      className={`sad-role-badge ${viewing.emailSent ? "job-status-active" : "job-status-draft"}`}
                    >
                      {viewing.emailSent ? "Sent" : "Not sent"}
                    </span>
                  </div>
                </div>
              </div>
              <div className="sad-form-row">
                <div className="mb-3">
                  <label className="sad-label">Customer</label>
                  <div className="sad-readonly">{viewing.firstname} {viewing.lastname}</div>
                </div>
                <div className="mb-3">
                  <label className="sad-label">Company</label>
                  <div className="sad-readonly">{viewing.company || "—"}</div>
                </div>
              </div>
              <div className="sad-form-row">
                <div className="mb-3">
                  <label className="sad-label">Email</label>
                  <div className="sad-readonly">{viewing.email}</div>
                </div>
                <div className="mb-3">
                  <label className="sad-label">Phone</label>
                  <div className="sad-readonly">{viewing.number}</div>
                </div>
              </div>
              <div className="mb-3">
                <label className="sad-label">Address</label>
                <div className="sad-readonly">{viewing.address}, {viewing.state} {viewing.postal}</div>
              </div>
              {viewing.notes && (
                <div className="mb-3">
                  <label className="sad-label">Order Notes</label>
                  <div className="sad-readonly">{viewing.notes}</div>
                </div>
              )}
              <div className="mb-3">
                <label className="sad-label">Items</label>
                <table className="sad-table" style={{ marginTop: "6px" }}>
                  <thead>
                    <tr>
                      <th>PRODUCT</th>
                      <th>QTY</th>
                      <th>PRICE</th>
                    </tr>
                  </thead>
                  <tbody>
                    {viewing.items?.map((item, i) => (
                      <tr key={i}>
                        <td>{item.name}</td>
                        <td>{item.quantity}</td>
                        <td>{formatNaira(item.price)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mb-3">
                <label className="sad-label">Order Total</label>
                <div style={{ fontWeight: 700, fontSize: "18px", color: "#1a1a2e" }}>
                  {formatNaira(viewing.cartTotal)}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Delete confirmation modal */}
      {showConfirm && (
        <div className="sad-overlay">
          <div className="sad-modal sad-modal-sm" onClick={(e) => e.stopPropagation()}>
            <div className="sad-modal-header">
              <h5>Confirm Delete</h5>
              <button className="sad-modal-close" onClick={() => setShowConfirm(false)}>
                <i className="bi bi-x-lg"></i>
              </button>
            </div>
            <div className="sad-modal-body" style={{ textAlign: "center" }}>
              <p>
                Are you sure you want to delete the order from{" "}
                <strong>{selected?.firstname} {selected?.lastname}</strong>? This action
                cannot be undone.
              </p>
              <div className="d-flex gap-2 mt-3" style={{ justifyContent: "center" }}>
                <button className="sad-btn-create" style={{ background: "#dc2626" }} onClick={handleDelete}>
                  Delete
                </button>
                <button
                  className="sad-btn-create"
                  style={{ background: "#f3f4f6", color: "#374151" }}
                  onClick={() => setShowConfirm(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Orders;
