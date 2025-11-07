import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import { BASEURL } from '../../BaseURL/BaseURL';
import { useNavigate } from 'react-router-dom';




const Quote = () => {


  let navigate = useNavigate();

  const [fullname, setFullname] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [project, setProject] = useState("");
  const [location, setLocation] = useState("");
  const [letter, setLetter] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);


  const handleChangeNumber = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setNumber(value);
  };


  const handleSubmit = async (e) =>{
    e.preventDefault();
    setIsSubmitting(true);
    try {
    const newData = {
      fullname, 
      company,
      email,
      number,
      project,
      location,
      letter
      }
    
    const response = await axios.post(`${BASEURL}/api/v1/email/quote`, newData ,  {headers:{"Content-Type":"application/json"}})
    if(response){
    toast.success('Quote Sent!!!');
    setTimeout(() =>{
      navigate(0)
    }, 1000)
    }  
    } catch (error) {
    toast.error(error.response.data);
    }finally {
      setIsSubmitting(false);
  }
    }

    return (
    <>
{/* ========================================== Button trigger modal ===========================================*/}
<button className='btn btn-danger cvb' data-bs-toggle="modal" data-bs-target="#exampleModal" ><h5>Request A Quote</h5></button>
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-4 text-dark fw-bold" id="exampleModalLabel">Request A Quote</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body text-dark">

     <div className="row">
      <div class="col-md-12 mt-">
      <div class=" mt-2">
      <label for="validationCustom01" class="form-label float-start fw-bold">Full name<span className='text-danger'>*</span> </label>
      <input type="text" class="form-control" placeholder="Full name"  onChange={(e) =>  setFullname(e.target.value)}  aria-label="First name"/>
      </div>
      </div>
      <div class="col-md-12">
      <div class=" mt-2">
      <label for="validationCustom01" class="form-label float-start fw-bold">Email<span className='text-danger'>*</span></label>
      <input type="email"  class="form-control" placeholder="Email" onChange={(e) =>  setEmail(e.target.value)}  aria-label="Last name"/>
      </div>
      </div>
    </div>
     <div className="row">
    <div class=" col-md-12 mt-3">
    <label for="validationCustom01" class="form-label float-start fw-bold">Company name<span className='text-danger'>*</span> </label>
      <input type="text"  class="form-control" placeholder="Company name"  onChange={(e) =>  setCompany(e.target.value)}  aria-label="Company name"/>
    </div>
     <div class=" col-md-12 mt-3">
     <label for="validationCustom01" class="form-label float-start  fw-bold">Phone Number<span className='text-danger'>*</span> </label>
     <input class="form-control" placeholder="080 xxxx xxxx" value={number} onChange={handleChangeNumber}  aria-label="Last name"/>
     </div>
     </div> 
    <div className="row">
    <div class=" col-md-6 mt-3">
    <label for="validationCustom01" class="form-label float-start fw-bold">Title Of Project<span className='text-danger'>*</span> </label>
    <input type="text"  class="form-control" placeholder="Title Of Project" onChange={(e) =>  setProject(e.target.value)} aria-label="Last name"/>
    </div>
     <div class="col-md-6 mt-3">
    <label for="validationCustom01" class="form-label float-start fw-bold">Project Location<span className='text-danger'>*</span> </label>
    <input type="text"  class="form-control" placeholder="Project Location" onChange={(e) =>  setLocation(e.target.value)}   aria-label="Last name"/>
   </div>
    </div>
    <div className='col-12 mt-3' style={{marginBottom:"4rem"}}>
<div className=''>
<h6 className='text-start fw-bold'>Project Description</h6>
</div>
<div className='mt-2'>
<ReactQuill 
theme="snow"
className='' 
placeholder="cover letter" 
style={{height:"100px"}} 
onChange={(value) => setLetter(value)}
/>
</div>
    </div>
      
     </div>
      <div class="modal-footer border-0">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary onliyu" onClick={handleSubmit} disabled={isSubmitting}>
                                <h6>{isSubmitting ? "Submitting..." : "Submit"}</h6>
                            </button>
      </div>
    </div>
  </div>
</div>
    </>
    );
}

export default Quote;
