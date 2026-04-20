import { useState } from 'react';
import axios from 'axios';
import { BASEURL } from '../../BaseURL/BaseURL';
import { useNavigate, Link } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './blogWrite.css';
import { toast } from 'react-toastify';
import { AiOutlineDashboard } from 'react-icons/ai';

const BlogWrite = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const [cloudinary_id, setCloudinary_url] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const formData = new FormData();
      formData.append('title', title);
      formData.append('description', description);
      formData.append('author', author);
      formData.append('category', JSON.stringify([category]));
      formData.append('cloudinary_image', cloudinary_id);

      const res = await axios.post(
        `${BASEURL}/api/v1/blog/create`,
        formData,
        {
          headers: { 'Content-Type': 'multipart/form-data' },
        }
      );

      if (res) {
        toast.success('Blog Published Successfully');
        setTimeout(() => {
          navigate('/blog');
        }, 1000);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Error publishing blog');
    }finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* ====================== HEADER ====================== */}
      <div
        className="container-fluid bg-secondary py-5"
        style={{
          height: '500px',
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
            url(https://res.cloudinary.com/elonatech/image/upload/v1726158374/Blog-banner_qxxqnb.png)`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className="py-5 mt-5">
          <h2 className="mt-5 text-white text-center">Blog Editor</h2>
          <h5 className="mt-4 text-white text-center">
            Create and manage your content seamlessly with our intuitive Blog Editor.
          </h5>
          <p className="lead text-white text-center">
            With powerful editing tools and a user-friendly interface, our Blog Editor helps you craft
            engaging posts, maintain consistency, and publish content effortlessly.
          </p>
        </div>
      </div>

      {/* ====================== DASHBOARD LINK ====================== */}
      <div className="dashboard">
        <Link to="/dashboard" className="btn btn-outline-primary btn-sm me-3 dash">
          <AiOutlineDashboard className="icon" /> Dashboard
        </Link>
      </div>

      {/* ====================== FORM ====================== */}
      <div className="container py-5">
        <div className="container my-5 py-5">
          <form onSubmit={handleSubmit}>
            <div className="container mb-5">
              <div className="row">
                {/* LEFT SIDE - Title & Description */}
                <div className="col-md-8">
                  <div className="mb-3">
                    <label htmlFor="title" className="form-label fw-bold">
                      Title
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="title"
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="description" className="form-label fw-bold">
                      Description
                    </label>
                    <div className="editorContainer" id="description">
                      <ReactQuill
                        className="editor"
                        theme="snow"
                        onChange={(value) => setDescription(value)}
                      />
                    </div>
                  </div>
                </div>

                {/* RIGHT SIDE - Image, Author, Category */}
                <div className="col-md-4">
                  <div className="mb-3 mt-2">
                    <label htmlFor="formFile" className="form-label fw-bold">
                      Image
                    </label>
                    <input
                      className="form-control"
                      type="file"
                      id="formFile"
                      onChange={(e) => setCloudinary_url(e.target.files[0])}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="author" className="form-label fw-bold">
                      Author
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="author"
                      onChange={(e) => setAuthor(e.target.value)}
                    />
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      checked={category === 'trends'}
                      name="cat"
                      value="trends"
                      onChange={(e) => setCategory(e.target.value)}
                      id="trends"
                    />
                    <label className="form-check-label fw-bold" htmlFor="trends">
                      Trends
                    </label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      checked={category === 'news'}
                      name="cat"
                      value="news"
                      onChange={(e) => setCategory(e.target.value)}
                      id="news"
                    />
                    <label className="form-check-label fw-bold" htmlFor="news">
                      News
                    </label>
                  </div>
                </div>

                {/* PUBLISH BUTTON */}
                <div className="col-md-5 mt-3">
                  <button type="submit" className="btn btn-primary">
                    {isLoading ? 'Loading' : 'Publish'}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default BlogWrite;