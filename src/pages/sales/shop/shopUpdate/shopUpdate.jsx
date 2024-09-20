import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './shopUpdate.css';
import  { useEffect, useState } from 'react';
import { useNavigate, useParams }  from 'react-router-dom';
import axios from 'axios';
import { BASEURL } from '../../../../BaseURL/BaseURL';
import { toast } from 'react-toastify';


const ShopUpdate = () => {
     
    
const getInitialState = () => {
const value = "Pos";
return value;
};

 
const {id} = useParams();

const [name, setName] = useState('');
const [description, setDescription] = useState('');
const [price, setPrice] = useState('');
const [odd, setOdd] = useState('');
const [brand, setBrand] = useState('');
const [quantity, setQuantity] = useState('');
const [category, setCategory] = useState(getInitialState);
const [images, setImages] = useState([]);
const [loading, setLoading] = useState(false);

//handle images
const handleImage = (e) =>{
        const files = Array.from(e.target.files);
        files.forEach(file =>{
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () =>{
                setImages(oldArray => [...oldArray, reader.result ])
            }
        })
}

const navigate = useNavigate();

// fetch data
useEffect(() =>{
    const fetchBlog = async ()=>{
    try {
        const res = await axios.get(`${BASEURL}/api/v1/product/${id}`);
        console.log(res)
        setName(res.data.getProductById.name);
        setDescription(res.data.getProductById.description);
        setPrice(res.data.getProductById.price);
        setOdd(res.data.getProductById.odd);
        setCategory(res.data.getProductById.category);
        setBrand(res.data.getProductById.brand);
        setQuantity(res.data.getProductById.quantity)
    } catch (error) {
    console.log(error);
    }
    }
    fetchBlog()
 },[]);

//submit the form
const handleSubmit = async (e) => {
try {
setLoading(true);
e.preventDefault();
const newData = {
name, 
description, 
price,
odd, 
brand, 
quantity,
category, 
images
}
await axios.put(`${BASEURL}/api/v1/product/${id}/update`, newData)
toast.success('Product Updated Successfully');
setImages([]);
navigate(`/product/${id}`)

} catch (error) {
toast.warning('Please Fill All Required Fields');
}
}


const handleSubmitImage = async (e) => {
try {
setLoading(true);
e.preventDefault();
const newData = {
name, 
description, 
price,
odd, 
brand, 
category, 
images
}
await axios.put(`${BASEURL}/api/v1/product/${id}/update/image`, newData)
toast.success('Product Images Updated Successfully');
setImages([]);
// setTimeout(() =>{
navigate(`/product/${id}`)
// }, 1000)
} catch (error) {
toast.warning('Added New Product Images');
}
}


return (
<>

<div class="container-fluid bg-dark py-5 " style={{height:"500px" , backgroundImage:`linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url()`, backgroundRepeat:"no-repeat" , backgroundPosition:"center", backgroundSize:"cover"}}>
 <div class="py-5 mt-5 ">
 </div>
 </div> 
    <div className=' container bg-size mt-5 mb-5 ' style={{marginTop:"0rem", }}>
        <h2  className='text-center mb-5 fw-bold'>Update Office, Pos and Printer.</h2>
        <div className="">
            <div className="row">
                <div class="mb-3 col-md-6">
                    <label for="exampleInputEmail1" class="form-label fw-bold">Name</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" placeholder='Gadget Name' value={name}  onChange={(e) => setName(e.target.value)} aria-describedby="emailHelp"  />
                </div>
                <div class="mb-3 col-md-6">
                    <label for="exampleInputEmail1" class="form-label fw-bold">Brand</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" placeholder='Brand Name' value={brand} onChange={(e) => setBrand(e.target.value)}  aria-describedby="emailHelp"  />
                </div>
            </div>
            <div className="row">
               
                <div className="col-md-4 mt-2 mb-3">
                    <label for="price" className='fw-bold'>Price</label>
                    <input type="text" id="price" class="form-control" value={price} onChange={(e) => setPrice(e.target.value)}  name="price" placeholder="Enter price" ></input> 
                </div>  
                <div class="mb-3 col-md-4">
                <label for="formFile" class="form-label fw-bold">File</label>
                <input onChange={handleImage} type="file" id="formupload" name="image" className="form-control" multiple />
                </div>
                <div class="mb-3 col-md-4">
                <label for="exampleInputEmail1" class="form-label fw-bold">Categories</label>
                <select  class="form-select" value={category} onChange={(e) => setCategory(e.target.value)}  id="inputGroupSelect01">
                <option value="Pos System">Pos System</option>
                <option value="Computer">Computer</option>
                <option value="Office">Office</option>
                <option value="Printer">Printer</option>
                <option value="Network">Network Devices</option>
                </select>
              </div>
            </div> 
            <div className="row">

           <div className="col-md-6 mt-2 mb-3">
             <label for="price" className='fw-bold'>Discount</label>
             <input type="text" id="price" class="form-control" value={odd} onChange={(e) => setOdd(e.target.value)}  name="price" placeholder="Enter price" ></input>  
              </div>
             <div class=" col-md-6 mb-3 ">
            <label for="exampleInputEmail1" class="form-label fw-bold">Quantity</label>
            <input type="text" class="form-control" id="exampleInputEmail1" placeholder='Brand Name' value={quantity} onChange={(e) => setQuantity(e.target.value)}  aria-describedby="emailHelp"  />
             </div>
             </div>

            {/*  */}
            <div class="mb-3" >
            <label for="exampleFormControlTextarea1" class="form-label">Description</label>
            <div className="editorContainer" id="exampleFormControlTextarea1">
            <ReactQuill className="editor" theme="snow" value={description}  onChange={(value) => setDescription(value)} />
           </div>
          </div>
          <div className="col-md-5 mt-3 d-flex">
          <button type="submit" class="btn btn-warning me-3"  onClick={handleSubmit}>Update Content</button>
          <button type="submit" class="btn btn-success"  onClick={handleSubmitImage}>Update Image</button>
          </div>
          <div className="mt-5 mb-4 text-center">
          <button 
            onClick={() => navigate(-1)} 
            className="btn btn-outline-secondary back-btn"
          >
            <i className="bi bi-arrow-left me-2"></i>
            Back to Product
          </button>
        </div>
        </div>
    </div> 
</>
  )
}

export default ShopUpdate