import Getintouch2 from '../GetInTouch/getintouch2';
import { Helmet } from 'react-helmet-async';
import "./access.css";


const Access = () => {
    return (
    <>

<Helmet>
       <title>{`Access Control  - Tech Solution, Digital Solution`}</title>
       <meta name="description" content="
Access control is an essential element of security that determines who is allowed to access certain data, apps, and resources—and in what circumstances. In the same way that keys and preapproved guest lists protect physical spaces, access control policies protect digital spaces. In other words, they let the right people in and keep the wrong people out.
What are the benefits of Access Control Systems?
" />
       <link rel="canonical" href="https://elonatech.com.ng/access-control" />
</Helmet>

{/*============================================================================================ header ========================================================*/}
<div class="container-fluid access-control-section">
  <div class="text-content">
    <h2>Access Control</h2>
    <h5>Controls Access Physically and Virtually Except with Authentication Credentials</h5>
    <p class="lead">An essential element of security that determines who is allowed to access certain data, apps, and resources and in what circumstances.</p>
  </div>
</div>


{/* body */}
<div className="container">
    <div class="row">
    <div class="col-md-6 mb-5">
 
        <div className="text-center">
        <img src='https://i.stack.imgur.com/qq8AE.gif' data-src='https://res.cloudinary.com/elonatech/image/upload/v1709568120/accessControlPage/depositphotos_354792732-stock-photo-business-technology-internet-network-concept_neflcv.webp' className='img-fluid rounded lazyload' alt="" />

        </div>
 
    </div>
    <div class="col-md-6">
      <div className=''>
      <p className=''>
      <span className='fw-bold'>Access control</span> is an essential element of security that determines who is allowed to access certain data, apps, and resources—and in what circumstances. In the same way that keys and preapproved guest lists protect physical spaces, access control policies protect digital spaces. In other words, they let the right people in and keep the wrong people out.
      <br /><br />
      Access Control is a method of security that controls access both physically and virtually unless authentication credentials are provided.
      <br /><br />
      ‘Physical’ Access Control is a means of controlling who and when a person can enter an area, location or building using a secure authentication method such as an ID card or biometric identification, for example, as authorization.
      </p>
      </div>
    </div>
  </div>
</div>


{/* PBX */}
<div className="container mt-4 mb-5">
     <h5 className='fw-bold'>What is an Access Control System?</h5>
     <div className="underline-w mt-1" style={{  width:"40px", height:"3px" , background:"#f00"}}></div>
  <div className="row">
  <div className="col-md-7 ">
      <div className="mt-3">
        <p className=''>
        When referring to a ‘physical’ Access Control system this typically includes locked gates, doors or barriers which can be opened using 
        identity authentication methods such RFID access cards, pin codes, face recognition, finger prints or smartphones to allow entry to a building or certain area. 
        This technology can also provide data to track how a building or site is being used, such as frequency and time-usage trends.
        </p>
      </div>
    </div>
    <div className="col-md-5 ">
      <div className="mt-3 text-center">
        <img  src='https://i.stack.imgur.com/qq8AE.gif'  data-src='https://res.cloudinary.com/elonatech/image/upload/v1709568121/accessControlPage/Access-Control_rrrv2k.jpg' className='img-fluid lazyload'  alt="" />
      </div>
    </div>

  </div>
</div>

{/* WHY INVEST IN CCTV */}
<div className="container mb-5">
  <h4>What are the benefits of Access Control Systems?</h4>
  <div className="underline-w" style={{  width:"50px", height:"3px", background:"#f00"}}></div>
  <div className="row">
    <div className="col-md-6">
      <p className='pt-5'>Access Control can help protect employees and contents and control & monitor who accesses the premises. The main benefits of access control systems are</p>
            <div className="mt-">
              <ul className='list-unstyled'>
                <li className='d-flex'>
                  <i class="bi bi-check-lg text-danger fs-4 me-3"></i>
                  <p className=''>Easier access for employees.</p> 
                </li>
                <li className='d-flex'>
                  <i class="bi bi-check-lg text-danger fs-4 me-3"></i>
                  <p className=''>No need for traditional keys.</p> 
                </li>
                <li className='d-flex'>
                  <i class="bi bi-check-lg text-danger fs-4 me-3"></i>
                  <p className=''>Saves money.</p> 
                </li>
                <li className='d-flex'>
                  <i class="bi bi-check-lg text-danger fs-4 me-3"></i>
                  <p className=''>Keep track of who enters/exits the building.</p> 
                </li>
                <li className='d-flex'>
                  <i class="bi bi-check-lg text-danger fs-4 me-3"></i>
                  <p className=''>Protection against unwanted visitors.</p> 
                </li>
                <li className='d-flex'>
                  <i class="bi bi-check-lg text-danger fs-4 me-3"></i>
                  <p className=''>Employee freedom.</p> 
                </li>
                <li className='d-flex'>
                  <i class="bi bi-check-lg text-danger fs-4 me-3"></i>
                  <p className=''>Protection against data breaches.</p> 
                </li>
                <li className='d-flex'>
                  <i class="bi bi-check-lg text-danger fs-4 me-3"></i>
                  <p className=''>Safe environment.</p> 
                </li>
                <li className='d-flex'>
                  <i class="bi bi-check-lg text-danger fs-4 me-3"></i>
                  <p className=''>Reduced risk of theft</p> 
                </li>

              </ul>
            </div>
    </div>
    <div className="col-md-6">
      <div className="text-center">
      <img src='https://i.stack.imgur.com/qq8AE.gif' data-src='https://res.cloudinary.com/elonatech/image/upload/v1709568140/accessControlPage/access-control-system-removebg-preview_lgzgk2.png'  className='img-fluid rounded lazyload' alt="" />
      </div>
    </div>
  </div>
</div>

{/*====================================================== End Services  =================================*/}
<Getintouch2 />
{/* ===================================================================================================== */}
    </>
    );
}

export default Access;
