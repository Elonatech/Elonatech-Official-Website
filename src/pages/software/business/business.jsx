import './business.css'
import Getintouch2 from '../../../components/GetInTouch/getintouch2';
import businessHeader from "./captions/business_app_sofrtware_zao5e9.jpg";
import firstBusinessImage from "./captions/profit_and_loss_ilnqkf.png";
import secondBusinessImage from "./captions/business_q25qqn.png";
import thirdBusinessImage from "./captions/businees software inner page.jpg";
import fourthBusinessImage from "./captions/On Premises vs cloud.jpg";


import { Helmet } from 'react-helmet-async';







const Business = () => {
    return (
 <>
 <Helmet>
       <title>Business Application Software - Tech Solution</title>
       <meta name="description" content="Set of computer programs used by business users to perform various business functions.
These business applications are used to increase productivity, measure productivity, and perform other business functions accurately. " />
       <link rel="canonical" href="https://elonatech.com.ng/business-software" />
</Helmet>


{/* header */}
<div class="container-fluid business-application-software-section">
  <div class="text-content">
    <h2>Business Application Software</h2>
    <h5>Set of computer programs used by business users to perform various business functions.</h5>
    <p class="lead">These business applications are used to increase productivity, measure productivity, and perform other business functions accurately.</p>
  </div>
</div>


{/*==================================  About Section =========================*/}
    <section id="about" class="about mt-5 mb-5">
      <div class="container" data-aos="fade-up">
        <div class="row g-4 g-lg-5 align-items-center" data-aos="fade-up" data-aos-delay="200">
          <div class="col-lg-5">
            <div class="mt-5 text-center">
              <img src='https://i.stack.imgur.com/qq8AE.gif' data-src={firstBusinessImage} class="img-fluid lazyload" style={{height:""}} alt=""/>
            </div>
          </div>
          <div class="col-lg-7">
            <h3 class="pt-0 pt-lg-5"></h3>
            <h2 className='mb-3'>Benefits of Business Application Software</h2>

            <div class="tab-content">
              <div class="tab-pane fade show active" id="tab1">
                <div class="d-flex align-items-center mt-4">
                  <i class="bi bi-check2  bg-danger rounded-circle text-white"></i>
                  <h4>Metric Availability</h4>
                </div>
                <p>Software uses real-time data from various operations, which can be collected and generated into reports and analyses to monitor key performance indicators (KPIs).</p>
                 
                <div class="d-flex align-items-center mt-4">
                  <i class="bi bi-check2 bg-danger rounded-circle text-white"></i>
                  <h4>Reduced Labor Costs</h4>
                </div>
                <p>Manually performing tasks is time-consuming, expensive, and can lead to human errors that often require additional expenses to reconcile discrepancies. Therefore, project management software ensures that companies are minimizing the resources needed to conduct basic processes.</p>

                <div class="d-flex align-items-center mt-4">
                  <i class="bi bi-check2  bg-danger rounded-circle text-white"></i>
                  <h4>Optimized Operational Efficiency</h4>
                </div>
                <p>With reduced time, labor costs, and effort needed to complete standard procedures, operational efficiency is significantly increased</p>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
{/*================================ body ====================================*/}
<div className="container  mb-5" style={{marginTop:""}}>
  <div class="row justify-content-center g-4 align-items-center">
  <div class="col-lg-5">
            <div class="tab-content mt-4">
              <div class="tab-pane fade show active" id="tab1">
                <div class="d-flex align-items-center mt-4">
                  <i class="bi bi-check-circle-fill fs-4 text-danger"></i>
                  <h4 className='ms-2 mt-2'>Time Savings</h4>
                </div>
                <p>By automating repetitive procedures, software allows employees to focus manual labor on more complicated tasks, reducing time and human error.</p>

                <div class="d-flex align-items-center mt-4">
                   <i class="bi bi-check-circle-fill fs-4 text-danger"></i>
                  <h4 className='ms-2 mt-2'>Minimized Turnaround Times </h4>
                </div>
                <p>A software solution maintains consistent results through automation, streamlining processes, and reducing turnaround times for employees and consumers. This promotes growing businesses and the satisfaction of internal and external associates.</p>

              </div>
            </div>

          </div>
    <div class="col-md-6">
      <div className="text-center">
      <img src='https://i.stack.imgur.com/qq8AE.gif'  data-src={secondBusinessImage}  className='img-fluid rounded lazyload'  srcset="" />
      </div>
    </div>
  </div>
</div>

{/*================================= list =======================================*/}
<div className="container   mb-5" style={{marginTop:""}}>
  <div class="row justify-content-center align-items-center">
  <div class="col-md-6">
    <div className="text-center">
      <img  src='https://i.stack.imgur.com/qq8AE.gif'  data-src={thirdBusinessImage} alt="" className='img-fluid rounded lazyload'  srcset="" />
    </div>
    </div>
  <div class="col-lg-5 mt-1 ms-5">
  <h3>Business Application Software</h3>
  <p>Business Application Software (These programs are built to facilitate certain business functions, improving the accuracy, efficiency, and effectiveness of operations), etc.</p>
  <p class="fst-italic">Below are some popular examples of business applications that we support and are commonly used by organizations.</p>
            <div class="">
              <div class="tab-pane fade show active" id="tab1">
                <div class="d-flex align-items-center mt-">
                  <i class="bi bi-check-circle-fill fs-4 text-danger"></i>
                  <h5 className='ms-2 mt-2'>Enterprise Resource Planning</h5>
                </div>

                <div class="d-flex align-items-center mt-1">
                   <i class="bi bi-check-circle-fill fs-4 text-danger"></i>
                  <h5 className='ms-2 mt-2'>Customer Relationship Management (CRM)</h5>
                </div>

                <div class="d-flex align-items-center mt-1">
                   <i class="bi bi-check-circle-fill fs-4 text-danger"></i>
                  <h5 className='ms-2 mt-2'>Resource Management Software</h5>
                </div>
                
                <div class="d-flex align-items-center mt-1">
                   <i class="bi bi-check-circle-fill fs-4 text-danger"></i>
                  <h5 className='ms-2 mt-2'>Project Management Software</h5>
                </div>

                <div class="d-flex align-items-center mt-1">
                   <i class="bi bi-check-circle-fill fs-4 text-danger"></i>
                  <h5 className='ms-2 mt-2'>Business Process Management Software</h5>
                </div>

                <div class="d-flex align-items-center mt-1">
                   <i class="bi bi-check-circle-fill fs-4 text-danger"></i>
                  <h5 className='ms-2 mt-2'>Database Application Software</h5>
                </div>

                <div class="d-flex align-items-center mt-1">
                   <i class="bi bi-check-circle-fill fs-4 text-danger"></i>
                  <h5 className='ms-2 mt-2'>Productivity Software</h5>
                </div>
                <div class="d-flex align-items-center mt-1">
                   <i class="bi bi-check-circle-fill fs-4 text-danger"></i>
                  <h5 className='ms-2 mt-2'>Scheduling Software</h5>
                </div>
              </div>
            </div>

  </div>
    
  </div>
</div>
{/* ============================================================================ */}
<div className="container">
<div className="row align-items-center">
  <div className="col-md-6 mb-3">
     <p>
     <strong>On-premise application software</strong> is implemented at an organization’s physical location, 
     leveraging the hardware, IT infrastructure, and support of that organization.
      The company’s IT department typically maintains and solves problems related to the software.
     </p>
     <p>
     <strong>Hosted application software</strong>, also called software-as-a-service (SaaS), is software that is owned, delivered, and managed remotely via the cloud by a 
     provider separate from the purchasing organization. Many organizations license these programs at the same time, 
     and organizations typically pay per user or via a subscription.
     </p>
     <p>
     One advantage of on-premise software is that it can be customized to the individual company’s needs more easily. 
     However, hosted application software programs generally allow users to scale up to more quickly.
     </p>
  </div>
  <div className="col-md-6 mb-5">
    <div className="text-center">
       <h1 className='fw-bold'>Image</h1>
       <img  src='https://i.stack.imgur.com/qq8AE.gif'  data-src={fourthBusinessImage} alt="" className='img-fluid rounded lazyload'  srcset="" />
    </div>
  </div>
</div>
</div>

{/*===================================================== Get in touch =====================================*/}
< Getintouch2 />

</>
    );
}

export default Business;
