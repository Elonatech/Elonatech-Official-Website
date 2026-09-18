import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import { BASEURL } from "../../../BaseURL/BaseURL";
import ReactQuill from "react-quill";
import { toast } from "react-toastify";

const BlogUpdate = () => {
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [cloudinary_id, setCloudinary_id] = useState(null);
  const [publishMode, setPublishMode] = useState("now"); // "now" | "schedule"
  const [publishAt, setPublishAt] = useState("");
  const [originalStatus, setOriginalStatus] = useState("published");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        // Admin endpoint — unfiltered, so a scheduled or draft post can still
        // be opened here. The public /api/v1/blog/:id hides those entirely,
        // which would make it impossible to ever edit/reschedule them.
        const token = JSON.parse(localStorage.getItem("token"));
        const res = await axios.get(`${BASEURL}/api/v1/blog/admin/${id}`, {
          headers: { "x-access-token": token },
        });
        const blog = res.data.data;
        setTitle(blog.title);
        setDescription(blog.description);
        setAuthor(blog.author);
        setOriginalStatus(blog.status || "published");
        if (blog.status === "scheduled" && blog.publishAt) {
          setPublishMode("schedule");
          // datetime-local wants local time with no timezone/seconds
          const local = new Date(blog.publishAt);
          local.setMinutes(local.getMinutes() - local.getTimezoneOffset());
          setPublishAt(local.toISOString().slice(0, 16));
        }
      } catch (error) {
        console.log(error);
        toast.error("Failed to load blog post");
      }
    };
    fetchBlog();
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (isLoading) return; // guard against double-submit (e.g. double-click while a slow upload is in flight)

    if (publishMode === "schedule" && (!publishAt || new Date(publishAt) <= new Date())) {
      return toast.error("Scheduled time must be in the future");
    }

    setIsLoading(true);

    // Create FormData instead of a plain object
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("author", author);
    formData.append("category", category);

    // Attach the new file if it exists
    if (cloudinary_id instanceof File) {
      formData.append("cloudinary_image", cloudinary_id); // key must match Multer
    }

    // Only touch scheduling fields if the user actually changed something
    // here — the backend deliberately leaves status/publishAt untouched
    // otherwise, so a plain content edit never accidentally reschedules a post.
    if (publishMode === "schedule") {
      formData.append("publishAt", new Date(publishAt).toISOString());
    } else if (originalStatus !== "published") {
      // was draft/scheduled, admin switched it to "Publish now"
      formData.append("status", "published");
    }

    try {
      const res = await axios.put(
        `${BASEURL}/api/v1/blog/update/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "x-access-token": JSON.parse(localStorage.getItem('token')),
          },
        }
      );
      if (res) {
        toast.success("Blog updated with success");
      }
      console.log(res.data);
      navigate(`/blog/${res.data.data.slug}/${res.data.data._id}`);
    } catch (error) {
      const errors = error.response?.data?.errors;
      if (errors?.length) {
        errors.forEach(msg => toast.error(msg));
      } else {
        toast.error(error.response?.data?.message || 'Failed to update blog');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div
        class="container-fluid  py-5 "
        style={{
          height: "500px",
          background: "#11253d",
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://res.cloudinary.com/dahnwukbz/image/upload/v1783693232/Blog-banner_qxxqnb_kb3a3q.png)`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div class="py-5 mt-5 ">
          <h2 class=" mt-5 text-white text-center">Blog Update</h2>
          <h5 class=" mt-4 text-white text-center"></h5>
          <p class="lead text-white text-center"></p>
        </div>
      </div>

      <div className="container py-5">
        <div className="container my-5 py-5 ">
          <form className=" ">
            <div className="container  mb-5">
              <div className="row">
                <div className="col-md-8">
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      Title{" "}
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputEmail1"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">
                      Description
                    </label>
                    <div
                      className="editorContainer"
                      id="exampleFormControlTextarea1"
                    >
                      <ReactQuill
                        className="editor"
                        theme="snow"
                        value={description}
                        onChange={(value) => setDescription(value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div class="mb-3 mt-2">
                    <label for="formFile" class="form-label"></label>
                    <input
                      class="form-control"
                      type="file"
                      onChange={(e) => setCloudinary_id(e.target.files[0])}
                      id="formFile"
                    />
                  </div>

                  {/*  */}
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">
                      Author
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      value={author}
                      onChange={(e) => setAuthor(e.target.value)}
                      id="exampleInputPassword1"
                    />
                  </div>

                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      checked={category === "trends"}
                      name="cat"
                      value="trends"
                      onChange={(e) => setCategory(e.target.value)}
                      id="catTrends"
                    />
                    <label class="form-check-label" for="catTrends">
                      Trends
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      checked={category === "news"}
                      name="cat"
                      value="news"
                      onChange={(e) => setCategory(e.target.value)}
                      id="catNews"
                    />
                    <label class="form-check-label" for="catNews">
                      News
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      checked={category === "info"}
                      name="cat"
                      value="info"
                      onChange={(e) => setCategory(e.target.value)}
                      id="catInfo"
                    />
                    <label class="form-check-label" for="catInfo">
                      Info
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      checked={category === "editorial"}
                      name="cat"
                      value="editorial"
                      onChange={(e) => setCategory(e.target.value)}
                      id="catEditorial"
                    />
                    <label class="form-check-label" for="catEditorial">
                      Editorial
                    </label>
                  </div>

                  <div class="mb-3 mt-3">
                    <label class="form-label fw-bold d-block">When</label>
                    <div className="btn-group" role="group" aria-label="Publish timing">
                      <button
                        type="button"
                        className={`btn btn-sm ${publishMode === "now" ? "btn-primary" : "btn-outline-primary"}`}
                        onClick={() => setPublishMode("now")}
                      >
                        Publish now
                      </button>
                      <button
                        type="button"
                        className={`btn btn-sm ${publishMode === "schedule" ? "btn-primary" : "btn-outline-primary"}`}
                        onClick={() => setPublishMode("schedule")}
                      >
                        Schedule for later
                      </button>
                    </div>

                    {publishMode === "schedule" && (
                      <input
                        type="datetime-local"
                        class="form-control mt-2"
                        value={publishAt}
                        onChange={(e) => setPublishAt(e.target.value)}
                      />
                    )}
                  </div>
                </div>

                <div className="col-md-5 mt-3">
                  <button
                    type="submit"
                    class="btn btn-primary"
                    onClick={handleUpdate}
                    disabled={isLoading}
                  >
                    {isLoading ? "Updating..." : "Update"}
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

export default BlogUpdate;
