import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import { BASEURL } from "../../BaseURL/BaseURL";
import { useAuth } from "./AuthContext";
import "./SuperAdminDashboard.css";
const getToken = () => JSON.parse(localStorage.getItem("token"));

const BlogList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${BASEURL}/api/v1/blog`, {
        headers: { "x-access-token": getToken() },
      });
      setPosts(res.data.posts);
    } catch (error) {
      toast.error("Failed to load blog posts");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Blog List</h1>
      <ul>
        {posts.map((post) => (
          <li key={post._id}>
            <Link to={`/dashboard/blog/${post._id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
