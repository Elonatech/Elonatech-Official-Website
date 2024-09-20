import { useState } from 'react';
import ReactQuill from 'react-quill/lib';
import 'react-quill/dist/quill.snow.css';
import { toast } from 'react-toastify';
import { BASEURL } from '../../BaseURL/BaseURL';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./applyNow.css"



const  ApplyNow = () =>{


  let navigate = useNavigate()
   
  const getGenderState = () => {
    const value = "Male";
    return value;
    };
   
  const getCategoryState = () => {
    const value = "Job Role Applying For?";
    return value;
  };

  const getStatusState = () => {
    const value = "Unemployed";
    return value;
  };

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [gender, setGender] = useState(getGenderState);
  const [address, setAddress] = useState("");
  const [dob, setDob] = useState("");
  const [skill, setSkill] = useState("");
  const [category , setCategory] = useState(getCategoryState);
  const [status , setStatus] = useState(getStatusState);
  const [file, setFile] = useState(null);
  const [letter, setLetter] = useState("");



const handleSubmit = async (e) =>{
e.preventDefault();

try {
const newData = {
  firstname, 
  lastname,
  email,
  number,
  gender,
  address,
  dob,
  skill,
  category,
  status, 
  letter, 
  file: file
  }

const response = await axios.post(`${BASEURL}/api/v1/email/job`, newData ,  {headers:{"Content-Type":"multipart/form-data"}})

console.log(response)

toast.success('Job Application Sent, Successfully');

setTimeout(() =>{
  navigate('/career')
}, 1000)


} catch (error) {
toast.error(error.response.data);
}

}


  return (
    <>
<div>
<button className="btn btn-primary  border border-light text-light mt- mb-3" data-bs-toggle="modal" data-bs-target="#exampleModal5"><h6 className="mt-1">Apply Now</h6></button>

<div class="modal fade" id="exampleModal5" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title fw-bold" id="exampleModalLabel">Apply Now</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div className="row justify-content-md-center">
              <div class="row mt-2">
                <div class="col">
                <label for="validationCustom01" class="form-label fw-bold">First name<span>*</span> </label>
                  <input type="text" class="form-control" placeholder="First name"  onChange={(e) =>  setFirstname(e.target.value)} aria-label="First name"/>
                </div>
                <div class="col">
                <label for="validationCustom01" class="form-label fw-bold">Last name<span>*</span> </label>
                  <input type="text"  class="form-control" placeholder="Last name" onChange={(e) =>  setLastname(e.target.value)}  aria-label="Last name"/>
                </div>
              </div>
              <div className="row mt-2">
                <div class=" col">
                <label for="validationCustom01" class="form-label fw-bold">Email<span>*</span> </label>
                  <input type="text"  class="form-control" placeholder="Email" onChange={(e) =>  setEmail(e.target.value)}  aria-label="Last name"/>
                </div>
                <div class=" col">
                <label for="validationCustom01" class="form-label w-100 fw-bold">Phone Number<span>*</span> </label>
                  <input type="number"  class="form-control" placeholder="080 xxxx xxxx" maxlength="11" onChange={(e) =>  setNumber(e.target.value)}  aria-label="Last name"/>
                </div>
                </div>
                <div class="row mt-2">
                  <div class="col-4">
                    <label for="validationCustom01" class="form-label fw-bold">Gender<span>*</span> </label>
                    <select class="form-select" value={gender}  onChange={(e) => setGender(e.target.value)} aria-label="Default select example">
                      <option value='Male'>Male</option>
                      <option value='Female'>Female</option>
                      </select>
                  </div>
                  <div class="col-8">
                    <label for="validationCustom01" class="form-label fw-bold">Residence<span>*</span> </label>
                    <input type="text"  class="form-control" placeholder="Current residence(State,Area,Nearest B/s)" onChange={(e) =>  setAddress(e.target.value)}  aria-label="Last name"/>
                  </div>
                </div>
                <div class="row mt-2">
                  <div class="col-4">
                    <label for="validationCustom01" class="form-label fw-bold">Date of Birth<span>*</span> </label>
                    <input type="date"  class="form-control" placeholder="mm/dd/yy" onChange={(e) =>  setDob(e.target.value)}  aria-label="Last name"/>
                  </div>
                  <div class="col-8">
                  <div class="mb-2">
                    <label for="formGroupExampleInput" class="form-label fw-bold">Skills/Specialty<span>*</span> </label>
                    <input type="text" class="form-control" id="formGroupExampleInput"  onChange={(e) =>  setSkill(e.target.value)}  placeholder="separate each skill with a comma " />
                  </div>
                  </div>
                </div>
                <div className="mt-2">
                <label for="inputState" class="form-label fw-bold">Job Category<span>*</span> </label>
                    <select id="inputState" value={category}  onChange={(e) => setCategory(e.target.value)} class="form-select">
                      <option >Job Role Applying For?</option>
                      <option value='Graphic Designer/Digital Marketer' >Graphic Designer/Digital Marketer</option>
                      <option value='Full Stack Web developer' >Full Stack Web developer</option>
                      <option value='Digital Marketer' >Digital Marketer</option>
                      <option value='Animations/Motion Graphics & UI/UX Graphic Designer'>Animations/Motion Graphics & UI/UX Graphic Designer</option>
                      <option value='Systems/Network Engineer'>Systems/Network Engineer</option>
                      <option value='Marketing & Sales Representative'>Marketing & Sales Representative</option>
                    </select>
                </div>
                <div class="mt-2">
                  <label for="inputState" class="form-label fw-bold">Current Employment Status<span>*</span> </label>
                    <select id="inputState" value={status}  onChange={(e) => setStatus(e.target.value)} class="form-select">
                      <option value='Unemployed'>Unemployed</option>
                      <option value='Employed'>Employed</option>
                      <option value='Freelance'>Freelance</option>
                    </select>
                  </div>
                  <div class=" mt-3">
                    <label for="inputState" class="form-label fw-bold">Upload your CV (PDF) <span>*</span> </label>
                      <input type="file" class="form-control pt-1 " id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" onChange={(e)=>setFile(e.target.files[0])} aria-label="Upload" style={{fontSize:'12px'}}/>
                    <p className='pt-2'>Accepted file types: pdf, Max. file size: 150 MB.</p>
                  </div>
                  <div className='col ' style={{marginBottom:"5rem"}}>
                  <label  for="validationCustom01" class="form-label fw-bold">Cover Letter</label>
                  <ReactQuill
                  theme="snow"
                   className=''
                    placeholder="cover letter"
                    style={{height:"100px",}}
                    onChange={(value) => setLetter(value)}
                    />
                  </div>
                  </div>
            </div>
      <div class="modal-footer border-0">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"><h6>Close</h6></button>
        <button type="button" class="btn btn-primary" onClick={handleSubmit}><h6>Submit</h6></button>
      </div>
    </div>
  </div>
</div>
</div>

    </>
  );
}

export default ApplyNow;