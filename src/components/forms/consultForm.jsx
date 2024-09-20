import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { BASEURL } from '../../BaseURL/BaseURL';
import axios from 'axios';



const ConsultForm = () => {

    let navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [occupation, setOccupation] = useState("");
    const [challenge, setChallenge] = useState("");
    const [business, setBusiness] = useState("");
    const [cost, setCost] = useState("");
    const [invest, setInvest] = useState("");
    const [error , setError] = useState("");


    const handleChangeCost = (e) => {
      const value = e.target.value.replace(/\D/g, "");
      setCost(value);
    };


    const handleSubmit = async (e) =>{
      e.preventDefault();
      try {
      const newData = {
        name, 
        email,
        occupation,
        challenge,
        business,
        cost,
        invest
      }
      
    const response = await axios.post(`${BASEURL}/api/v1/email/consult`, newData,  {headers:{"Content-Type":"application/json"}})
      if(response){
      toast.success('Consult Form Sent!!!');
      setTimeout(() =>{
        navigate(0)
      }, 2000)
      }  
      } catch (error) {
        console.log(error)
      toast.error(error.response.data);
      setError(error.response.data)
      }
      
      }

return (
<>
<button className="btn btn-primary cvb border border-light text-light mt-5" data-bs-toggle="modal" data-bs-target="#exampleModal2"><h6 className="mt-1">Click Here</h6></button>
{/* ================================================ body  ============================================== */}
<div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-4 fw-bold text-dark" id="exampleModalLabel">Free Consulting</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body text-dark">
      <form>
            <div class="mb-2 mt-4">
              <label for="name" class="form-label float-start fw-bold">Name<span className='text-danger'>*</span></label> 
              <input type="text" class="form-control"  onChange={(e) =>  setName(e.target.value)} id="name" aria-describedby="nameHelp"/>
              <label for="exampleInputEmail1" class="form-label float-start fw-bold  mt-2">Email address<span className='text-danger'>*</span></label>
              <input type="email" class="form-control" onChange={(e) =>  setEmail(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp"/>

              <label for="what" class="form-label float-start fw-bold mt-2">What do you do?<span className='text-danger'>*</span></label>
              <input type="text" class="form-control " onChange={(e) =>  setOccupation(e.target.value)} id="what" aria-describedby="whatHelp"/>

              <label for="what" class="form-label float-start fw-bold  mt-2">What challenges do you currently face?<span className='text-danger'>*</span> </label>
              <input type="text" class="form-control" onChange={(e) =>  setChallenge(e.target.value)} id="what" aria-describedby="whatHelp"/>

              <label for="what" class="form-label float-start fw-bold  mt-2">what would you change in your business?<span className='text-danger'>*</span></label>
              <input type="text" class="form-control" onChange={(e) =>  setBusiness(e.target.value)} id="what" aria-describedby="whatHelp"/>

              <label for="what" class="form-label float-start fw-bold mt-2">How much money does it cost you? (In NAIRA)<span className='text-danger'>*</span></label>
              <input  class="form-control" onChange={handleChangeCost}  />

              <label for="what" class="form-label  float-start fw-bold mt-2">How much money are you willing to invest? (In NAIRA)<span className='text-danger'>*</span></label>
              <input type="number" class="form-control" onChange={(e) =>  setInvest(e.target.value)} id="what" aria-describedby="whatHelp"/>

              <div id="emailHelp" class="form-text mt-2">We'll never share your email with anyone else.</div>
            </div>
          </form>
      </div>
      <div class="modal-footer border-0">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button onClick={handleSubmit} class="btn btn-danger">Submit</button>
    
      </div>
    </div>
  </div>
</div>
         
</>
    );
}

export default ConsultForm;
