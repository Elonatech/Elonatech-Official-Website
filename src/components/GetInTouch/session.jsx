import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { BASEURL } from '../../BaseURL/BaseURL';
import { useNavigate } from 'react-router-dom';


const Session = () => {

const [appointment, setAppointment] = useState("choose");
const [online, setOnline] = useState('choose');
const [offine, setOffline] = useState('choose')

const handleAppointmentChange = (e) => {
    setAppointment(e.target.value)
}
const handleOnlineChange = (e) => {
    setOnline(e.target.value)
}
const handleOfflineChange = (e) => {
    setOffline(e.target.value)
}


const getGmtState = () => {
    const value = "AM";
    return value;
  };

  const getYearState = () =>{
    let value = "2024"
    return value
  }

  const getMonthState = () =>{
    let value = "1"
    return value 
  }

  const getDateState = () =>{
    let value = "1"
    return value 
  }

// ==========================
const  [name, setName] = useState('');
const  [email, setEmail] = useState('');
const  [phone, setPhone] = useState('');
const  [meet, setMeet] = useState("")
const  [address, setAddress] = useState("")
const  [discuss, setDiscuss] = useState('');

// ======================= Date
const [day , setDay] = useState(getDateState);
const [month, setMonth] = useState(getMonthState);
const [year, setYear] = useState(getYearState);

// ======================= Time
const  [hour, setHour] = useState('')
const  [minute, setMinute] = useState('')
const  [gmt, setGmt] = useState(getGmtState)




const handleChange = (e) => {
  const value = e.target.value.replace(/\D/g, "");
  setPhone(value);
};

const handleChangeMinute = (e) =>{
  const value = e.target.value.replace(/\D/g, "")
  setMinute(value)
}
const handleChangeHour = (e) =>{
  const value = e.target.value.replace(/\D/g, "")
  setHour(value)
}

const handleChangeMeet = (e) =>{
  const value = e.target.value
  setMeet(value)
}


const navigate = useNavigate()

const handleSubmit = async (e) =>{
    e.preventDefault();
    try {
  
    const newData = {
    name, 
    email,
    phone,
    meet,
    address,
    discuss,
    hour,
    minute,
    gmt,
    day,
    month,
    year,
  }


  const response = await axios.post(`${BASEURL}/api/v1/email/session`, newData ,  {headers:{"Content-Type":"application/json"}})
    if(response){
    toast.success(response.data);
    setTimeout(() =>{
      navigate(0)
    }, 2000)
    }  
    } catch (error) {
    toast.error(error.response.data);
    console.log(error)
    }
    }


  return (
  <>
<button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
<h5>Book A Session</h5>
</button>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header text-dark">
        <h5 class="modal-title fw-bold" id="exampleModalLabel">Book A Session</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body text-dark">
{/*================================================= Body  ========================================================  */}
     <form>
{/*=========================================================================================================  */}
     <div class="mb-3">
    <label for="exampleInputname1" class="form-label fw-bold">Name<span className='text-danger'>*</span></label>
    <input type="text" class="form-control" id="exampleInputname1" onChange={(e) =>  setName(e.target.value)}  aria-describedby="emailHelp"/>
    </div>
     <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label fw-bold">Email<span className='text-danger'>*</span></label>
    <input type="email" class="form-control" id="exampleInputEmail1" onChange={(e) =>  setEmail(e.target.value)}  aria-describedby="emailHelp"/>
    </div>
    <div class="mb-3">
    <label for="phone" class="form-label fw-bold">Phone Number<span className='text-danger'>*</span></label>
    <input class="form-control" id='phone' value={phone} onChange={handleChange} />
    </div>
    <div className="mb-3">
    <label for="exampleInputEmail1"  class="form-label fw-bold">Pick your Appointment of Choice<span className='text-danger'>*</span></label>
    <select class="form-select form-control" onChange={handleAppointmentChange}   aria-label="Default select example">
    <option selected>You can only choose one</option>
    <option value="online">Online Appointment</option>
    <option value="offline">Offline Appointment</option>
    </select>
    </div>
{/*=========================================================================================================  */}


{/* ===============================   online ==================================== */}
{appointment === "online" &&  
<>
<div className="mb-3">
<label for="exampleInputEmail1" class="form-label fw-bold">Ok! Online Choose a Platform<span className='text-danger'>*</span></label>
<select class="form-select form-control" onChange={handleOnlineChange}  aria-label="Default select example">
  <option selected>Select your preferred platform</option>
  <option value="online">Zoom</option>
  <option value="online">Google Meet</option>
  <option value="online">WhatApp Video Call</option>
  <option value="online">Facebook Video Call</option>
</select>
</div>

{ online === "online" && 
<>
<div className="mb-3">
<label for="exampleInputEmail1" class="form-label fw-bold">Provide the Online ID, Username or Number you choose<span className='text-danger'>*</span></label>
<input  class="form-control" placeholder="Provide the Online ID or Number you choose" value={meet}  onChange={handleChangeMeet}    />
<p className="mt-2">Provide your Online ID, Username or Number of the Online Platform you choose. Either(Zoom, Google meet, WhatsApp Number, Facebook username)</p>
</div>
</>
}

</>
}





{/* =========================================== offine ===================================================== */}
{appointment === 'offline' && 
<>
<div className="mb-3">
<label for="exampleInputEmail1" class="form-label fw-bold">Ok! OFFLINE Choose a means<span className='text-danger'>*</span></label>
    <select class="form-select form-control" onChange={handleOfflineChange} aria-label="Default select example">
    <option selected>Choose one Location</option>
    <option value="location">Your Location (Lagos Only)</option>
    <option value="3">Our Office</option>
    </select>
    <p className="mt-2">Pick a place of your choice</p>
</div>
{offine === 'location' &&
<>
<div className="mb-3">
<label for="exampleInputEmail1" class="form-label fw-bold">Your Address (Lagos Only)?<span className='text-danger'>*</span></label>
<input type="text" class="form-control" placeholder="Your Address (Lagos Only)?"  onChange={(e) =>  setAddress(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp"/>
<p className="mt-2">If you stay outside Lagos, please pick the Online Platform</p>
</div>
</>
}

</>
}


{/*================================= default ========================== */}

<div className="mb-3">
<label for="" class="form-label fw-bold">Pick a Date for the Meeting<span className='text-danger'>*</span></label>
    <div className="row">
        <div className="col-sm-2">
            <div className="card border-0">
            <div class="input-group" style={{width:"4rem"}}>
            <select class="form-select form-control pre-scrollable" value={day} onChange={(e) =>  setDay(e.target.value)} id="inputGroupSelect04" aria-label="Example select with button addon" >
            <option selected>1</option>
            <option value="1">2</option>
             <option value="3">3</option>
             <option value="4">4</option>
             <option value="5">5</option>
             <option value="6">6</option>
             <option value="7">7</option>
             <option value="8">8</option>
             <option value="9">9</option>
             <option value="10">10</option>
             <option value="11">11</option>
             <option value="12">12</option>
             <option value="13">13</option>
             <option value="14">14</option>
             <option value="15">15</option>
             <option value="16">16</option>
             <option value="17">17</option>
             <option value="18">18</option>
             <option value="19">19</option>
             <option value="20">20</option>
             <option value="21">21</option>
             <option value="22">22</option>
             <option value="23">23</option>
             <option value="24">24</option>
             <option value="25">25</option>
             <option value="26">26</option>
             <option value="27">27</option>
             <option value="28">28</option>
             <option value="29">29</option>
             <option value="30">30</option>
             <option value="31">31</option>
             </select>
            </div> 
            </div>
        </div>
        <div className="col-sm-2">
            <div className="card border-0">
            <div class="input-group" style={{width:"4rem"}}>
            <select class="form-select form-control" id="inputGroupSelect04" value={month} onChange={(e) =>  setMonth(e.target.value)}  aria-label="Example select with button addon">
            <option selected>Month</option>
            <option value="1">1</option>
             <option value="2">2</option>
             <option value="3">3</option>
             <option value="4">4</option>
             <option value="5">5</option>
             <option value="6">6</option>
             <option value="7">7</option>
             <option value="8">8</option>
             <option value="9">9</option>
             <option value="10">10</option>
             <option value="11">11</option>
             <option value="12">12</option>
             </select>
            </div>
            </div>
        </div>
        <div className="col-sm-2">
            <div className="card border-0">
            <div class="input-group" style={{width:"6rem"}}>
            <select class="form-select form-control" id="inputGroupSelect04" value={year} onChange={(e) =>  setYear(e.target.value)} aria-label="Example select with button addon">
            <option selected>Year</option>
            <option value="2024">2024</option>       
             <option value="2025">2025</option>
             <option value="2026">2026</option>
             </select>
            </div>   
            </div>
        </div>
    </div>
<p className="mt-2">Which day are you proposing for this meeting?</p>
</div>

<div className="mb-3">
<label for="" class="form-label fw-bold">Choose the time suited for you<span className='text-danger'>*</span></label>
    <div className="row">
        <div className="col-sm-2">
            <div className="card border-0">
            <div style={{width:"4rem"}}>
            <input  class="form-control" value={hour} maxlength="2" onChange={handleChangeHour}  placeholder="HH"/>
            </div>
            </div>
        </div>
        <div className="col-sm-2">
            <div className="card border-0">
            <div style={{width:"4rem"}}>
            <input  class="form-control" maxlength="2" value={minute} onChange={handleChangeMinute}   placeholder="MM"/>
            </div>
            </div>
        </div>
        <div className="col-sm-2">
            <div className="card border-0">
            <div class="input-group" style={{width:"6rem"}}>
            <select class="form-select form-control"  id="inputGroupSelect04" value={gmt} onChange={(e) =>  setGmt(e.target.value)}  aria-label="Example select with button addon">
            <option selected>AM</option>
             <option value="PM">PM</option>
             </select>
            </div>   
            </div>
        </div>
    </div>
    <p className="mt-2">Choose the time suited for you</p>
</div>
{/*=========================================================================================================  */}
<div class="mb-3">
    <label for="exampleInputEmail1" class="form-label fw-bold">What would you like to discuss?(In Brief)<span className='text-danger'>*</span></label>
    <input type="text" class="form-control" id="exampleInputEmail1" onChange={(e) =>  setDiscuss(e.target.value)}  aria-describedby="emailHelp"/>
    </div>
     </form>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger"><h6 className='mt-1' onClick={handleSubmit} >Submit</h6></button>
      </div>
    </div>
  </div>
</div>       
    </>
    );
}

export default Session;
