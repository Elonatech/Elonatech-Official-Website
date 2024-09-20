import { useEffect, useState } from 'react';
import { Link, useParams , useNavigate} from 'react-router-dom';
import axios from 'axios';
import { BASEURL } from '../../BaseURL/BaseURL';
import hgdelete from './caption/delete.png'
import edit from './caption/editing.png';
import './blogDetails.css';
import Loading from '../Loading/Loading';
import DOMPurify from 'dompurify';
import { Helmet } from 'react-helmet-async';
import sanitizeHtml from 'sanitize-html';


const BlogDetails = () => {
const [data , setData] = useState({})
const [relatedPosts, setRelatedPosts] = useState([]);
const [currentAdmin, setCurrentAdmin] = useState('');
const [isLoading, setIsLoading] = useState(false);
const { id } = useParams()
const navigate = useNavigate();


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

 const html = data.description;


return (
<>


 {/* header */}
 <div class="container-fluid blog-details-section">
  <div class="text-content">
    <h2>Blog Details</h2>
    <h5></h5>
    <p class="lead"></p>
  </div>
</div>


<div className="container mb-5">
         <ol class="breadcrumb mt-5 ms-4">
            <li class="breadcrumb-item"> <Link className='text-dark' style={{textDecoration:"none"}} to={'/'}>Home</Link></li>
            <li class="breadcrumb-item"> <Link className='text-dark' to={'/blog'}   style={{textDecoration:"none"}} >Blog</Link></li> 
         </ol> 
   <div className="row mt-3">
   <div className="col-md-9">
    
<div className="container">
        <div className="row">
        <div className="col-md-12 mt-4">
    
 {isLoading ? (         
<div>
<h3 className='fw-bold'>{data.title}</h3>
<div className="mt-4 ">
<div className="row">
<div className="col-md-12">
 <div className="card border-0 rounded ">
 <Helmet>
       <title>{data.title} </title>
       <meta name="description" content={sanitizeHtml(html, {allowedTags:["strong"]})} />
       <link rel="canonical" href={`https://elonatech.com.ng/product/${id}`}  />
</Helmet>

<img src={data.cloudinary_id}  alt="" className="singlePostImg rounded" />
</div>
</div>
</div>
</div>
<div className="container-flui mt-3 mb-4">
<div className="row">
<div className="col-6 col-md-6">
<h6>Author: <span className='fst-italic ms-2'>{data.author}</span></h6>
</div>
<div className="col-6 col-md-6">
{currentAdmin ?   (
<div className="d-flex justify-content-end">
<Link className='text-decoration-none me-3'  style={{width:'20px' , cursor:"pointer"}}  to={`/update/${id}`} state={data}>
    <img data-src={edit} className='img-fluid me-3 lazyload'  style={{width:'20px' , cursor:"pointer"}}     alt="" />
</Link>
<img data-src={hgdelete} className='img-fluid lazyload' style={{width:'20px', cursor:"pointer"}} onClick={handleDelete}  alt="" />
</div>
) : (
<div></div>
    )}

</div>
</div>
</div>
<div class="description" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(data.description)}}></div>
</div>
) : (
    <div className='' style={{marginLeft:"25rem"}}>
     <Loading  />
    </div>
)}
</div>
</div>
</div>

{/*================================== related posts ===================================*/}
<div className="container bg-light">
<h3 className='fw-bold mb-3 mt-5 pt-4' style={{color:"#0b159d"}}>Related Posts</h3>
<div className="row">
        {relatedPosts.map((post) =>(
        <div className="col col-md-3" key={post.id}>
            <div className="">
             <Link className='text-decoration-none text-dark' to={`/blog/related/${post._id}`}>
             <h6 className='related-post-title'>{post.title.slice(0, 300)}</h6>
             </Link>
             <h6 className='text-danger related-post-date'>{new Date(post.createdAt).toDateString()} </h6>
        </div>
        </div>
    ))}
 </div>
</div>
</div>
{/*================================== Categories ========================================*/}
<div className="col-md-3">
    <div className="mt-4">
        <h5 className='' style={{color:"#34548c"}}>Categories</h5>
        <ul className='list-unstyled mt-2'>
            <li>{data.category}</li>
            <li>Trends</li>
        </ul>
        <h5 className='mt-2' style={{color:"#34548c"}}>Be the first to know</h5>
        <p>Enter your email address below to subscribe to our newsletter</p>
        <form>
        <div class="mb-2">
        <input type="email" class="form-control" id="exampleInputEmail1" placeholder='Email address'  aria-describedby="emailHelp"/>
       </div>
       <div class="d-grid gap-2">
       <button class="btn btn-danger" type="button">Subscribe</button>
    </div>
  <div class="mb-3 form-check mt-2">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label lead fs-6 " for="exampleCheck1">I accept the <a href="">Privacy Policy</a></label>
  </div>
</form>
</div>
</div>
</div>

</div>

        </>
    );
}

export default BlogDetails;
