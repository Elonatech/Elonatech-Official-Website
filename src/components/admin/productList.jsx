import { useState, useEffect, startTransition } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import { BASEURL } from "../../BaseURL/BaseURL";
import AdminSidebar from "./AdminSidebar";
import "./SuperAdminDashboard.css";

const PAGE_SIZE = 20;

// Clicking a Link to a lazy-loaded route (singleProduct/ShopUpdate) navigates
// synchronously, which React 18 flags as "a component suspended while
// responding to synchronous input". Driving the same navigation through
// startTransition avoids the warning — same fix already used for the
// ETMPDP "Apply Now" modal buttons elsewhere in this app.
const handleTransitionNav = (e, navigate, path) => {
  if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return;
  e.preventDefault();
  startTransition(() => navigate(path));
};

const productList = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${BASEURL}/api/v1/product`);
        setProducts(res.data.getAllProducts || []);
      } catch (error) {
        toast.error("Failed to load products");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const totalPages = Math.ceil(products.length / PAGE_SIZE);
  const paginatedProducts = products.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE
  );

  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex" />
        <title>Product List — Elonatech</title>
      </Helmet>

      <div className="sad-wrapper">
        <AdminSidebar active="product-list" />

        <main className="sad-main">
          <div className="sad-header">
            <div>
              <h4 className="sad-title">Product List</h4>
              <p className="sad-subtitle">All published products</p>
            </div>
          </div>

          <div className="sad-table-card">
            {loading ? (
              <div className="sad-loading">Loading products...</div>
            ) : products.length === 0 ? (
              <div className="sad-loading">No products yet.</div>
            ) : (
              <div className="table-responsive">
                <table className="sad-table">
                  <thead>
                    <tr>
                      <th>NAME</th>
                      <th>PRICE</th>
                      <th>DATE</th>
                      <th>ACTIONS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paginatedProducts.map((product) => (
                      <tr key={product._id}>
                        <td data-label="Name">{product.name}</td>
                        <td data-label="Price">
                          ₦{Number(product.price || 0).toLocaleString()}
                        </td>
                        <td data-label="Date">
                          {new Date(product.createdAt).toLocaleDateString(
                            "en-GB",
                            {
                              day: "2-digit",
                              month: "short",
                              year: "numeric",
                            }
                          )}
                        </td>
                        <td data-label="Actions">
                          <span className="job-actions-cell">
                            <Link
                              to={`/product/${product.slug || product._id}/${product._id}`}
                              className="job-app-count-link"
                              onClick={(e) =>
                                handleTransitionNav(
                                  e,
                                  navigate,
                                  `/product/${product.slug || product._id}/${product._id}`
                                )
                              }
                            >
                              View
                            </Link>

                            <Link
                              to={`/product/${product._id}/update`}
                              className="job-app-count-link job-edit-link"
                              onClick={(e) =>
                                handleTransitionNav(
                                  e,
                                  navigate,
                                  `/product/${product._id}/update`
                                )
                              }
                            >
                              Edit
                            </Link>
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {totalPages > 1 && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "12px",
                  padding: "16px 24px",
                  borderTop: "1px solid #f1f3f5",
                }}
              >
                <button
                  className="sad-btn-create"
                  style={{ padding: "6px 16px", fontSize: "13px" }}
                  disabled={page === 1}
                  onClick={() => setPage((p) => p - 1)}
                >
                  Previous
                </button>
                <span style={{ fontSize: "13px", color: "#6b7280" }}>
                  Page {page} of {totalPages}
                </span>
                <button
                  className="sad-btn-create"
                  style={{ padding: "6px 16px", fontSize: "13px" }}
                  disabled={page === totalPages}
                  onClick={() => setPage((p) => p + 1)}
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </main>
      </div>
    </>
  );
};

export default productList;
