import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import { formatDistanceToNowStrict } from "date-fns";
import { BASEURL } from "../../BaseURL/BaseURL";
import AdminSidebar from "./AdminSidebar";
import "./SuperAdminDashboard.css";

const getToken = () => JSON.parse(localStorage.getItem("token"));

const PAGE_SIZE = 20;

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const [viewing, setViewing] = useState(null);
  const [replies, setReplies] = useState([]);
  const [loadingReplies, setLoadingReplies] = useState(false);
  const [replyText, setReplyText] = useState("");
  const [submittingReply, setSubmittingReply] = useState(false);

  const [showConfirm, setShowConfirm] = useState(false);
  const [selected, setSelected] = useState(null);

  const fetchComments = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${BASEURL}/api/v1/comments/admin/all`, {
        headers: { "x-access-token": getToken() },
      });
      setComments(res.data || []);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to load comments");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  const totalPages = Math.ceil(comments.length / PAGE_SIZE);
  const paginatedComments = comments.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE
  );

  const openView = async (comment) => {
    setViewing(comment);
    setReplyText("");
    setLoadingReplies(true);
    try {
      const res = await axios.get(`${BASEURL}/api/v1/replies/${comment._id}`);
      setReplies(res.data || []);
    } catch (error) {
      toast.error("Failed to load replies");
    } finally {
      setLoadingReplies(false);
    }
  };

  const handleReplySubmit = async (e) => {
    e.preventDefault();
    if (!replyText.trim()) return;
    try {
      setSubmittingReply(true);
      const res = await axios.post(
        `${BASEURL}/api/v1/replies/admin`,
        { blogId: viewing.blogId, commentId: viewing._id, content: replyText.trim() },
        { headers: { "x-access-token": getToken() } }
      );
      setReplies((prev) => [...prev, res.data]);
      setReplyText("");
      toast.success("Reply posted");
      setComments((prev) =>
        prev.map((c) =>
          c._id === viewing._id ? { ...c, replyCount: (c.replyCount || 0) + 1 } : c
        )
      );
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to post reply");
    } finally {
      setSubmittingReply(false);
    }
  };

  const confirmDelete = (comment) => {
    setSelected(comment);
    setShowConfirm(true);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`${BASEURL}/api/v1/comments/${selected._id}`, {
        headers: { "x-access-token": getToken() },
      });
      toast.success("Comment deleted");
      setShowConfirm(false);
      setSelected(null);
      fetchComments();
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to delete comment");
    }
  };

  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex" />
        <title>Comments — Elonatech</title>
      </Helmet>

      <div className="sad-wrapper">
        <AdminSidebar active="comments" />

        <main className="sad-main">
          <div className="sad-header">
            <div>
              <h4 className="sad-title">Comments</h4>
              <p className="sad-subtitle">
                All comments left on blog posts — view, reply, or remove.
              </p>
            </div>
          </div>

          <div className="sad-table-card">
            <div className="sad-table-header">
              <span className="sad-table-title">ALL COMMENTS</span>
              <span className="sad-active-badge">
                <span className="sad-dot"></span>
                {comments.length} Total
              </span>
            </div>

            {loading ? (
              <div className="sad-loading">Loading comments...</div>
            ) : comments.length === 0 ? (
              <div className="sad-loading">No comments yet.</div>
            ) : (
              <div className="table-responsive">
                <table className="sad-table">
                  <thead>
                    <tr>
                      <th>COMMENTER</th>
                      <th>BLOG POST</th>
                      <th>COMMENT</th>
                      <th>REPLIES</th>
                      <th>DATE</th>
                      <th>ACTIONS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paginatedComments.map((comment) => (
                      <tr key={comment._id}>
                        <td data-label="Commenter">
                          {comment.userName || "Anonymous"}
                          <div style={{ fontSize: "12px", color: "#9ca3af" }}>
                            {comment.email}
                          </div>
                        </td>
                        <td data-label="Blog Post">{comment.blogTitle}</td>
                        <td data-label="Comment">
                          {comment.content?.length > 60
                            ? `${comment.content.slice(0, 60)}...`
                            : comment.content}
                        </td>
                        <td data-label="Replies">{comment.replyCount}</td>
                        <td data-label="Date">{formatDate(comment.createdAt)}</td>
                        <td data-label="Actions">
                          <span className="job-actions-cell">
                            <button
                              className="job-app-count-link"
                              style={{ background: "none", border: "none", cursor: "pointer" }}
                              onClick={() => openView(comment)}
                            >
                              View & Reply
                            </button>
                            <button
                              className="job-app-count-link job-edit-link"
                              style={{ background: "none", border: "none", cursor: "pointer", color: "#dc2626" }}
                              onClick={() => confirmDelete(comment)}
                            >
                              Delete
                            </button>
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

      {/* View + Reply modal */}
      {viewing && (
        <div className="sad-overlay" onClick={() => setViewing(null)}>
          <div className="sad-modal sad-modal-lg" onClick={(e) => e.stopPropagation()}>
            <div className="sad-modal-header">
              <h5>Comment on "{viewing.blogTitle}"</h5>
              <button className="sad-modal-close" onClick={() => setViewing(null)}>
                <i className="bi bi-x-lg"></i>
              </button>
            </div>
            <div className="sad-modal-body">
              <div className="sad-form-row">
                <div className="mb-3">
                  <label className="sad-label">Name</label>
                  <div className="sad-readonly">{viewing.userName || "Anonymous"}</div>
                </div>
                <div className="mb-3">
                  <label className="sad-label">Email</label>
                  <div className="sad-readonly">{viewing.email}</div>
                </div>
              </div>
              <div className="mb-3">
                <label className="sad-label">Comment</label>
                <div className="sad-readonly">{viewing.content}</div>
              </div>

              <hr />

              <label className="sad-label">
                Replies {replies.length > 0 && `(${replies.length})`}
              </label>
              {loadingReplies ? (
                <div className="sad-loading">Loading replies...</div>
              ) : replies.length === 0 ? (
                <p style={{ color: "#9ca3af", fontSize: "13px" }}>No replies yet.</p>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "16px" }}>
                  {replies.map((reply) => (
                    <div
                      key={reply._id}
                      style={{
                        background: reply.isAdmin ? "#eff6ff" : "#f9fafb",
                        borderRadius: "8px",
                        padding: "10px 14px",
                      }}
                    >
                      <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px" }}>
                        <strong style={{ color: reply.isAdmin ? "#1d4ed8" : "#374151" }}>
                          {reply.userName || "Anonymous"}
                          {reply.isAdmin && (
                            <span
                              style={{
                                marginLeft: "6px",
                                fontSize: "10px",
                                fontWeight: 700,
                                color: "#fff",
                                background: "#1d4ed8",
                                padding: "1px 8px",
                                borderRadius: "999px",
                              }}
                            >
                              TEAM
                            </span>
                          )}
                        </strong>
                        <span style={{ color: "#9ca3af" }}>
                          {formatDistanceToNowStrict(new Date(reply.createdAt), { addSuffix: true })}
                        </span>
                      </div>
                      <div style={{ fontSize: "13px", marginTop: "4px" }}>{reply.content}</div>
                    </div>
                  ))}
                </div>
              )}

              <form onSubmit={handleReplySubmit} className="mb-3">
                <label className="sad-label">Reply as yourself (shown with a Team badge)</label>
                <textarea
                  className="form-control"
                  rows={3}
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  placeholder="Write your reply..."
                  required
                />
                <button
                  type="submit"
                  className="sad-btn-create mt-2"
                  disabled={submittingReply}
                >
                  {submittingReply ? "Posting..." : "Post Reply"}
                </button>
              </form>
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
                Delete this comment (and all its replies) from{" "}
                <strong>{selected?.userName || "Anonymous"}</strong>? This action cannot be
                undone.
              </p>
              <div className="d-flex gap-2 mt-3" style={{ justifyContent: "center" }}>
                <button
                  className="sad-btn-create"
                  style={{ background: "#dc2626" }}
                  onClick={handleDelete}
                >
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

export default Comments;
