import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import { BASEURL } from "../../BaseURL/BaseURL";
import AdminSidebar from "./AdminSidebar";
import "./SuperAdminDashboard.css";

const BlogList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${BASEURL}/api/v1/blog`);
        setPosts(res.data.getAllBlogs || []);
      } catch (error) {
        toast.error("Failed to load blog posts");
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

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
              <p className="sad-subtitle">All published blog posts</p>
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
                      <th>ACTIONS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {posts.map((post) => (
                      <tr key={post._id}>
                        <td data-label="Title">{post.title}</td>
                        <td data-label="Author">{post.author}</td>
                        <td data-label="Date">
                          {new Date(post.createdAt).toLocaleDateString("en-GB", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          })}
                        </td>
                        <td data-label="Actions">
                          <Link
                            to={`/blog/${post.slug || post._id}/${post._id}`}
                            className="job-app-count-link"
                          >
                            View
                          </Link>
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
    </>
  );
};

export default BlogList;
