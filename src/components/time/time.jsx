import Getintouch2 from "../GetInTouch/getintouch2";
import { Helmet } from "react-helmet-async";

import "./time.css"


const Time = () => {
    return (
<>

<Helmet>
       <title>Time Management Solutions - Tech Solution</title>
       <meta name="description" content="A modern, online time and attendance solution Smart features for hassle-free clocking Schedule staff on an interactive calendar " />
       <link rel="canonical" href="https://elonatech.com.ng/time-management" />
</Helmet>

{/*========================================== header ==================================*/}
<div class="container-fluid time-management-section">
  <div class="text-content">
    <h2>Time Management Solutions</h2>
    <h5>Experience the Next Level of Internet Speed and Reliability</h5>
    <p class="lead">System integrator with experience in IP Network and IT services. We provide organizations with quality and cost-effective business solutions.</p>
  </div>
</div>


  {/*==================================  modern ====================*/}
  <div className="container mb-5">
    <div className="row">
        <div className="col-md-6 mb-5">
            <div className="shadow p-3">
                <h5>A modern, online time and attendance solution</h5>
                <ul className="list-unstyled mt-2">
                    <li className="d-flex">
                    <i class="bi bi-check-circle fs-3 me-3"></i>
                    <p className="mt-2">User-friendly mobile and web app</p>
                    </li>
                    <li className="d-flex">
                    <i class="bi bi-check-circle fs-3 me-3"></i>
                    <p className="mt-2">Smart features for hassle-free clocking</p>
                    </li>
                    <li className="d-flex">
                    <i class="bi bi-check-circle fs-3 me-3"></i>
                    <p className="mt-2">Track time and attendance of remote workers</p>
                    </li>
                    <li className="d-flex">
                    <i class="bi bi-check-circle fs-3 me-3"></i>
                    <p className="mt-2">Always Accurate and up-to- date time sheets</p>
                    </li>
                </ul>
            </div>
        </div>
        <div className="col-md-6">
        <div className="shadow p-3">
                <h5>A complete solution with many handy features</h5>
                <ul className="list-unstyled mt-2">
                    <li className="d-flex">
                    <i class="bi bi-check-circle fs-3 me-3"></i>
                    <p className="mt-2 l">Schedule staff on an interactive calendar</p>
                    </li>
                    <li className="d-flex">
                    <i class="bi bi-check-circle fs-3 me-3"></i>
                    <p className="mt-2">Manage and approve all types of absences</p>
                    </li>
                    <li className="d-flex">
                    <i class="bi bi-check-circle fs-3 me-3"></i>
                    <p className="mt-2">See who’s present at work in real time</p>
                    </li>
                    <li className="d-flex">
                    <i class="bi bi-check-circle fs-3 me-3"></i>
                    <p className="mt-2">Track overtime, be compliant, get HR reports and much more</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  </div>

{/*  attendance */}
<div className="container mb-5">
    <div className="row align-items-center">
        <div className="col-md-6">
          <div className="text-center">
            <img src='https://i.stack.imgur.com/qq8AE.gif' data-src="https://res.cloudinary.com/elonatech/image/upload/v1709636381/timePage/real-time-presence_jqm9k3.png" className="img-fluid lazyload" alt="" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="">
            <div className="card-body">
                <h2 className="">See who’s present at work in real time</h2>
                <div className="underline-w  mt-2 mb-5" style={{  width:"70px", height:"3px"  , background:"#f00"}}></div>
                <p>The Calendar view in All Hours online time and attendance solution gives management a bird’s-eye view of daily presence at work. One look at the dashboard of our online time and attendance solution gives you exact information on who is in the office or working at a particular moment. You can easily see at what time people departed from or arrived to work, who is at which location, and who is working remotely. </p>
                <ul className="list-unstyled mt-2">
                    <li className="d-flex">
                    <i class="bi bi-check-circle fs-3 me-3 text-danger"></i>
                    <p className="mt-2">Check who is present and absent on the web or mobile app </p>
                    </li>
                    <li className="d-flex">
                    <i class="bi bi-check-circle fs-3 me-3 text-danger"></i>
                    <p className="mt-2">Quickly spot late arrivals and early departures</p>
                    </li>
                    <li className="d-flex">
                    <i class="bi bi-check-circle fs-3 me-3 text-danger"></i>
                    <p className="mt-2">Always know who is present, working from home, or on the road</p>
                    </li>
                </ul>
            </div>
          </div>
        </div>
    </div>
</div>

  {/*  All Hour */}
  <div className="container mb-5" >
    <div className="row" style={{backgroundColor:"#141c32"}}>
        <div className="col-md-12">
            <div className="">
                <div className="card-body text-center p-5">
                    <h3 className="fw-bold text-white">More complex cases?</h3>
                    <h3 className="fw-bold text-white mt-2">Consider them covered.</h3>
                    <div className="underline-w  mt-2 mb-3" style={{  width:"70px", height:"3px" ,margin:"auto" , background:"#f00"}}></div>
                    <h6 className="text-white">The All Hours online time clock encourages the growth of your company, and can support even the most complex time and attendance cases. You can set up different rules for different teams, delegate approvals, and set up who can access specific data.</h6>
                     <button className="btn btn-danger btn-lg mt-4 pe-4 ps-4 pt-2">START FREE TRIAL</button>
                </div>
            </div>
        </div>
    </div>
  </div>

{/*  attendance */}
<div className="container mb-5">
    <div className="row align-items-center">
        <div className="col-md-6">
          <div className="">
            <div className="card-body">
                <h2 className="mb-5">Digitally manage and approve all types of absences</h2>
                <div className="underline-w  mt-2 mb-5" style={{  width:"70px", height:"3px"  , background:"#f00"}}></div>
                <p>With the All Hours online time and attendance solution you can easily manage absences. Receive requests for absences from the mobile or web app, including the type (annual leave, business leave, sick leave) and duration of absence, and approve or deny them based on the request.</p>
                <ul className="list-unstyled mt-2">
                    <li className="d-flex">
                    <i class="bi bi-check-circle fs-3 me-3 text-danger"></i>
                    <p className="mt-2">Absence requests and approvals on the mobile app </p>
                    </li>
                    <li className="d-flex">
                    <i class="bi bi-check-circle fs-3 me-3 text-danger"></i>
                    <p className="mt-2">Notifications for each request and approval</p>
                    </li>
                    <li className="d-flex">
                    <i class="bi bi-check-circle fs-3 me-3 text-danger"></i>
                    <p className="mt-2">Notifications for each request and approval</p>
                    </li>
                    <li className="d-flex">
                    <i class="bi bi-check-circle fs-3 me-3 text-danger"></i>
                    <p className="mt-2">Paid and unpaid absence status</p>
                    </li>
                </ul>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="text-center">
            <img src='https://i.stack.imgur.com/qq8AE.gif' data-src='https://res.cloudinary.com/elonatech/image/upload/v1709636380/timePage/vodenje-odsotnosti_1__xftio6.png' className="img-fluid lazyload" alt="" />
          </div>
        </div>
    </div>
</div>
{/* ==================================== */}
<Getintouch2 />
{/* ==================================== */}
</>
 );
}

export default Time;
