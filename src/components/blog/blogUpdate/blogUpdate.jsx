import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams , useNavigate} from 'react-router-dom';
import { BASEURL } from '../../../BaseURL/BaseURL';
import ReactQuill from "react-quill";








const BlogUpdate = () => {
    const {id} = useParams();

    const [title , setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [author, setAuthor] = useState('');
    const [category, setCategory] = useState('');
    const [cloudinary_id , setCloudinary_id] = useState(null);
    
  const navigate = useNavigate();



    useEffect(() =>{
        const fetchBlog = async ()=>{
            try {
            const res = await axios.get(`${BASEURL}/api/v1/blog/${id}`);
            setTitle(res.data.getBlogById.title);
            setDescription(res.data.getBlogById.description);
            setAuthor(res.data.getBlogById.author);

            } catch (error) {
            console.log(error);
            }
        
        }
        fetchBlog()
     },[]);



    const handleUpdate = async (e) =>{
    e.preventDefault();
    const newData = {
      title,
      description,
      author,
      category,
      cloudinary_id: cloudinary_id
      
      }
     try {
      const res = await axios.put(`${BASEURL}/api/v1/blog/update/${id}`, newData, {headers:{"Content-Type":"multipart/form-data"}});
      console.log(res)
      navigate(`/blog/${id}`)
     } catch (error) {
      console.log(error)
     }
    }

    return (
<>
<div class="container-fluid  py-5 " style={{height:"500px" ,background:"#11253d" , backgroundImage:`linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url()`, backgroundRepeat:"no-repeat" , backgroundPosition:"center", backgroundSize:"cover"}}>
 <div class="py-5 mt-5 ">
   <h2 class=" mt-5 text-white text-center">Blog Update</h2>
   <h5 class=" mt-4 text-white text-center"></h5>
   <p class="lead text-white text-center"></p>
 </div>
</div>



<div className="container py-5">
<div className="container my-5 py-5 ">
<form className=" " >
<div className="container  mb-5">
<div className="row">
<div className="col-md-8">
<div class="mb-3">
<label for="exampleInputEmail1" class="form-label">Title </label>
<input type="text" class="form-control" id="exampleInputEmail1" value={title}  onChange={(e) => setTitle(e.target.value)} aria-describedby="emailHelp"/>
</div>
<div class="mb-3" >
  <label for="exampleFormControlTextarea1" class="form-label">Description</label>
 <div className="editorContainer" id="exampleFormControlTextarea1">
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
  <input class="form-control" type="file" onChange={(e)=> setCloudinary_id(e.target.files[0])} id="formFile"/>
</div>  

{/*  */}
<div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Author</label>
    <input type="text" class="form-control" value={author} onChange={(e) => setAuthor(e.target.value)} id="exampleInputPassword1"/>
  </div>

<div class="form-check">
  <input class="form-check-input" type="checkbox" checked={category === "trends"} name="cat" value="trends"   onChange={(e) => setCategory(e.target.value)} id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">Trends</label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" checked={category === "news"} name="cat" value="news"   onChange={(e) => setCategory(e.target.value)} id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">News</label>
</div>
</div>

<div className="col-md-5 mt-3">
<button type="submit" class="btn btn-primary" onClick={handleUpdate}>Update</button>
</div>

</div>
</div>
</form> 
</div>
</div>
       
</>
    );
}

export default BlogUpdate;
