// import { useState, useEffect } from "react";
// import * as bootstrap from 'bootstrap';
// import ElonatechLogo from "./captions/Elonatech icon.png";
// import mailchimpLogo from "./captions/intuit-mc-rewards-text-dark.svg"
// import CloseBtn from './captions/close-btn.png'
// import "./mailchimp.css"
// import axios from "axios";
// import { BASEURL } from "../../BaseURL/BaseURL";



// const Mailchimp = () => {

//   const [displayPopUp, setDisplayPopUp] = useState(false);
//   const [email, setEmail] = useState('');
//   const [mailchimp, setMailChimp] = useState('')



//   const closePopUp = () => {
//     localStorage.setItem("MailChimpPopup", true);
//     setDisplayPopUp(false);
    
//   };


//  useEffect(() => {
//     let returningUser = localStorage.getItem("MailChimpPopup");

//       function showPopUp() {
//         if(!returningUser) {
//             window.onload = () => {
//               const myModal = new bootstrap.Modal('#staticBackdrop');
//               myModal.show();
//             }
//         }
//       }
//    showPopUp()


// }, []);



// const handleSubmit = async (e) =>{
//   e.preventDefault()
// try {
//   const newData = {
//     email
//   }
//   const mail = await axios.post(`${BASEURL}/api/v1/email/mailchimp`, newData, {headers:{"Content-Type":"Application/json"}})
//   if(mail){
//     setMailChimp('visible')
//   }
// } catch (error) {
//   console.log(error)
// }
// }

//  return (
//          <>

// <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
// <div class="modal-dialog modal-dialog-centered">
// <div class="modal-content border-0">
//  {mailchimp === 'visible' ? 
// <>
//    <div>
//      <div className="row justify-content-end">
//       <div className="col-2 mailChimpCloseSuccess">
//       <img src={CloseBtn} className="mailChimpImage"  data-bs-dismiss="modal" onClick={closePopUp} alt="" />
//       </div>
//       </div>
//       <div className="text-center">
//          <img src={ElonatechLogo} style={{height:"80px"}} className="mt-3 mb-3" alt="" />
//       </div>
//       <p className='text-center mt-3 mb-5'>Thank You For Subscribing to Our Awesome Montly Newsletter!!!</p>
//       <div className="row justify-content-center mt-3 mb-3">
//       <div className="col-5">
//       <div className="text-center">
//       <img src={mailchimpLogo} className="img-fluid" alt="Intuit Mailchimp logo"></img>
//       </div>
//       </div>
//       </div>
//      </div>

// </> 
// : 
// <>

// <section class="wrapper">
// <div class="content">
// <div className="row justify-content-end">
// <div className="col-2 mailChimpClose">
// <img src={CloseBtn} className="mailChimpImage"  data-bs-dismiss="modal" onClick={closePopUp} alt="" />
// </div>
// </div>
// <img src={ElonatechLogo} style={{height:"80px"}} className="mt-3 mb-3" alt="" />
// <header>
// <h4 className="fw-bold">Subscribe To Our Newsletter</h4>
// </header>
//     <footer>
//       <input type="email" onChange={(e) => setEmail(e.target.value)}  placeholder="Enter your email"/>
//       <button onClick={handleSubmit} >Subscribe</button>
//     </footer>
//       <div className="row justify-content-center mt-3 mb-3">
//         <div className="col-5">
//           <div className="text-center">
//           <img src={mailchimpLogo} className="img-fluid" alt="Intuit Mailchimp logo"></img>
//           </div>
//         </div>
//       </div>
//   </div>
// </section>
// </>
// } 
  



// </div>
// </div>
// </div>

// </>
//     );
// }

// export default Mailchimp;
