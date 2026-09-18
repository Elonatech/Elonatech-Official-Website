import { useState, useEffect, startTransition } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import { BASEURL } from "../../BaseURL/BaseURL";
import AdminSidebar from "./AdminSidebar";
import "./SuperAdminDashboard.css";

const PAGE_SIZE = 20;

// Clicking a Link to a lazy-loaded route (BlogDetails/BlogUpdate) navigates
// synchronously, which React 18 flags as "a component suspended while
// responding to synchronous input". Driving the same navigation through
// startTransition avoids the warning — same fix already used for the
// ETMPDP "Apply Now" modal buttons elsewhere in this app.
const handleTransitionNav = (e, navigate, path) => {
  if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return;
  e.preventDefault();
  startTransition(() => navigate(path));
};

const BlogList = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        // Admin endpoint — unfiltered, so drafts and scheduled-but-not-yet-live
        // posts still show up here for management. The public /api/v1/blog
        // endpoint deliberately hides those.
        const token = JSON.parse(localStorage.getItem("token"));
        const res = await axios.get(`${BASEURL}/api/v1/blog/admin/all`, {
          headers: { "x-access-token": token },
        });
        setPosts(res.data.blogs || []);
      } catch (error) {
        toast.error("Failed to load blog posts");
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const statusBadge = (post) => {
    if (post.status === "draft") {
      return <span className="blog-status-badge blog-status-draft">Draft</span>;
    }
    if (post.status === "scheduled") {
      const when = new Date(post.publishAt).toLocaleString("en-GB", {
        day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit",
      });
      return (
        <span className="blog-status-badge blog-status-scheduled" title={`Publishes ${when}`}>
          Scheduled — {when}
        </span>
      );
    }
    return <span className="blog-status-badge blog-status-published">Published</span>;
  };

  const totalPages = Math.ceil(posts.length / PAGE_SIZE);
  const paginatedPosts = posts.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex" />
        <title>Blog List — Elonatech</title>
      </Helmet>

      <div className="sad-wrapper">
        <AdminSidebar active="blog-list" />

        <main className="sad-main">
          <div className="sad-header">
            <div>
              <h4 className="sad-title">Blog List</h4>
              <p className="sad-subtitle">All blog posts, including drafts and scheduled</p>
            </div>
          </div>

          <div className="sad-table-card">
            {loading ? (
              <div className="sad-loading">Loading blog posts...</div>
            ) : posts.length === 0 ? (
              <div className="sad-loading">No blog posts yet.</div>
            ) : (
              <div className="table-responsive">
                <table className="sad-table">
                  <thead>
                    <tr>
                      <th>TITLE</th>
                      <th>AUTHOR</th>
                      <th>DATE</th>
                      <th>STATUS</th>
                      <th>ACTIONS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paginatedPosts.map((post) => (
                      <tr key={post._id}>
                        <td data-label="Title">{post.title}</td>
                        <td data-label="Author">{post.author}</td>
                        <td data-label="Date">
                          {new Date(post.createdAt).toLocaleDateString(
                            "en-GB",
                            {
                              day: "2-digit",
                              month: "short",
                              year: "numeric",
                            }
                          )}
                        </td>
                        <td data-label="Status">{statusBadge(post)}</td>
                        <td data-label="Actions">
                          <span className="job-actions-cell">
                            <Link
                              to={`/blog/${post.slug || post._id}/${post._id}`}
                              className="job-app-count-link"
                              onClick={(e) =>
                                handleTransitionNav(
                                  e,
                                  navigate,
                                  `/blog/${post.slug || post._id}/${post._id}`
                                )
                              }
                            >
                              View
                            </Link>

                            <Link
                              to={`/update/${post._id}`}
                              className="job-app-count-link job-edit-link"
                              onClick={(e) =>
                                handleTransitionNav(e, navigate, `/update/${post._id}`)
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

export default BlogList;
