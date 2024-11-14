import { useEffect, useState } from 'react';
import { Link, useParams , useNavigate} from 'react-router-dom';
import axios from 'axios';
import { BASEURL } from '../../BaseURL/BaseURL';
import './blogDetails.css';
import Loading from '../Loading/Loading';
import DOMPurify from 'dompurify';
import BlogComments from './blogComment'


const BlogRelated = () => {
const [data , setData] = useState({})
const [relatedPosts, setRelatedPosts] = useState([]);
const [currentAdmin, setCurrentAdmin] = useState('');
const [isLoading, setIsLoading] = useState(false);
const { id } = useParams()
const navigate = useNavigate();
 const [activeItem, setActiveItem] = useState("Item 1");

 const handleClick = (item) => {
   setActiveItem(item);
 };

 const handleSubmit = async (e) => {
   e.preventDefault();
   try {
     const newData = {
       email
     };
     const mail = await axios.post(
       `${BASEURL}/api/v1/email/mailchimp`,
       newData,
       { headers: { "Content-Type": "Application/json" } }
     );
     if (mail) {
       setMailChimp("visible");
     }
   } catch (error) {
     console.log(error);
   }
 };


useEffect(() =>{
 const auth = JSON.parse(localStorage.getItem('token'));
   setCurrentAdmin(auth)
}, [])



useEffect(() =>{
const fetchBlog = async ()=>{
    try {
    const res = await axios.get(`${BASEURL}/api/v1/blog/${id}`);
    setData(res.data.getBlogById)  
    setIsLoading(true);
    } catch (error) {
    console.log(error);
    setIsLoading(true);
    }

}
fetchBlog()
},[]);


useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASEURL}/api/v1/blog/`);
        setRelatedPosts(response.data.getAllBlogs.sort(() => Math.random() - Math.random()).slice(0, 4));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);


const handleDelete = async () => {
const res = await axios.delete(`${BASEURL}/api/v1/blog/${id}`)
console.log(res)
navigate('/blog')
};


return (
  <>
    {/* header */}
    <div
      class="container-fluid bg-dark py-5 "
      style={{
        height: "500px",
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://res.cloudinary.com/elonatech/image/upload/v1709800940/blog/blog_xpgc41.jpg)`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover"
      }}
    >
      <div class="py-5 mt-5 ">
        <h2 class=" mt-5 text-white text-center">Blog Details</h2>
        <h5 class=" mt-4 text-white text-center"></h5>
        <p class="lead text-white text-center"></p>
      </div>
    </div>

    <div className="container mb-5">
      <ol class="breadcrumb mt-5 ms-4">
        <li class="breadcrumb-item">
          {" "}
          <Link
            className="text-dark"
            style={{ textDecoration: "none" }}
            to={"/"}
          >
            Home
          </Link>
        </li>
        <li class="breadcrumb-item">
          {" "}
          <Link
            className="text-dark"
            to={"/blog"}
            style={{ textDecoration: "none" }}
          >
            Blog
          </Link>
        </li>
      </ol>
      <div className="row mt-3">
        <div className="col-md-9">
          <div className="container">
            <div className="row">
              <div className="col-md-12 mt-4">
                {isLoading ? (
                  <div>
                    <h3 className="fw-bold">{data.title}</h3>
                    <div className="mt-4 ">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="card border-0 rounded ">
                            <img
                              src={data.cloudinary_id}
                              alt=""
                              className="singlePostImg rounded"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="container-flui mt-3 mb-4">
                      <div className="row">
                        <div className="col-6 col-md-6">
                          <h6>
                            Author:{" "}
                            <span className="fst-italic ms-2">
                              {data.author}
                            </span>
                          </h6>
                        </div>
                        <div className="col-6 col-md-6"></div>
                      </div>
                    </div>
                    <div
                      class="description"
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(data.description)
                      }}
                    ></div>
                  </div>
                ) : (
                  <div className="" style={{ marginLeft: "25rem" }}>
                    <Loading />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        {/*================================== Categories ========================================*/}
        <div className="col-md-3">
          <div className="mt-4">
            <h5>Categories</h5>
            <ul className="list-unstyled mt-2">
              <li>
                <a
                  className={`buttons btn btn-outline-primary rounded-pill px-5  item ${
                    activeItem === "Item 1" ? "active" : ""
                  }`}
                  onClick={() => handleClick("Item 1")}
                >
                  Blogs
                </a>
              </li>
              <li>
                <Link to={"/news"}>
                  <a
                    className={`buttons btn btn-outline-primary rounded-pill px-5 mt-1  item ${
                      activeItem === "Item 2" ? "active" : ""
                    }`}
                    onClick={() => handleClick("Item 2")}
                  >
                    News
                  </a>
                </Link>
              </li>
              <li>
                <Link to={"/trends"}>
                  <a
                    className={`buttons btn btn-outline-primary rounded-pill px-5 mt-1  item ${
                      activeItem === "Item 3" ? "active" : ""
                    }`}
                    onClick={() => handleClick("Item 3")}
                  >
                    Trends
                  </a>
                </Link>
              </li>
            </ul>
            <h5 className="mt-2" style={{ color: "#34548c" }}>
              Be the first to know
            </h5>
            <p>Enter your email address below to subscribe to our newsletter</p>
            <form className="">
              <div class="mb-3">
                <input
                  type="email"
                  class="form-control rounded-0 "
                  style={{ width: "18rem" }}
                  id="exampleInputEmail1"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email*"
                  aria-describedby="emailHelp"
                  required
                />
              </div>
              <div class="d-grid gap-2">
                <button
                  onClick={handleSubmit}
                  class="btn btn-danger mb-3 "
                  style={{ width: "18rem" }}
                >
                  Subscribe
                </button>
              </div>

              <div class="form-check">
                <label class="form-check-label" for="exampleCheck1">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    required="required"
                  />
                  I accept the
                  <Link className="ps-2 text-dark" to={"/policy"}>
                    Privacy Policy<span className="text-danger">*</span>
                  </Link>
                </label>
              </div>
            </form>

            <div
              className='comments-container-mobile'
            >
              {' '}
              {/* Wrap the comments container */}
              <BlogComments blogId={id} />
            </div>

            <div
                className='comments-container'
                // ref={commentsContainerRef}
              >
                {' '}
                {/* Wrap the comments container */}
                <BlogComments blogId={id}/>
              </div>
          </div>
        </div>
      </div>
    </div>
  </>
);
}

export default BlogRelated;

