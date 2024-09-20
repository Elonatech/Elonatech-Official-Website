
import Getintouch2 from '../../../components/GetInTouch/getintouch2';
import './application.css'
import { Helmet } from 'react-helmet-async';




const Application = () => {
    return (
    <>
    
<Helmet>
       <title>Application Software - Tech Solution, Digital Solution</title>
       <meta name="description" content="How Application Software works?
Software designed to handle specific tasks for users are known as application software, also called application program. Such software directs the computer to execute commands given by the user and may be said to include any program that processes data for a user.

This includes application software that enables a user to perform a task, such as Microsoft Office suite (Excel, Word, PowerPoint, Outlook, etc.) Internet browsers like Firefox, Safari, and Chrome; mobile pieces of software such as Pandora, Skype (for real-time online communication), and Slack (for team collaboration); PDF viewers and readers; " />
       <link rel="canonical" href="https://elonatech.com.ng/application-software" />
</Helmet>

{/*============================================================ header ==========================================================*/}
<div class="container-fluid application-software-section">
  <div class="text-content">
    <h2>Application Software</h2>
    <h5>Software designed to handle specific tasks for users</h5>
    <p class="lead">These programs are built to facilitate certain business functions, improving the accuracy, efficiency, and effectiveness of operations.</p>
  </div>
</div>

{/*============================================================ services ==========================================================*/}
<section id="services" class="services" style={{backgroundColor:"#f1f1f2"}}>
      <div class="container" >

        <div class="row mt-2 gy-4" data-aos="fade-up" data-aos-delay="100">
        <div class="section-header">
          <h2 className='text-center fw-bold'>Application Software We Support</h2>
          <div className='' style={{backgroundColor:"red" , height:"3px" , width:"80px", margin:"auto" }}></div>
        </div>

          <div class="col-lg-4 col-md-6">
            <div class="service-item  position-relative">
              <div class="icon">
              <i class="bi bi-envelope"></i>
              </div>
              <h3>Microsoft Office suite (Office, Excel, Word, PowerPoint, Outlook) etc.</h3>
              <p style={{textAlign:"justify"}}>OfficeSuite is a practical 5-in-1 office pack for Windows PC, giving you advanced features to create, edit, comment, format, convert, and protect documents.</p>
        
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="service-item position-relative">
              <div class="icon mt-2">
              <i class="bi bi-cloud-check"></i>
              </div>
              <h3> OneDrive | Office 365 | Share Point</h3>
              <p style={{textAlign:"justify"}} className='mt-3'>OneDrive gives you more storage space for your photos and files. OneDrive's cloud storage will secure photos, videos, files and keep them safe.</p>
    
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="service-item position-relative">
              <div class="icon">
                <i class="bi bi-windows"></i>
              </div>
              <h3>Microsoft Windows range of products (Server and Client Operating Systems) </h3>
              <p style={{textAlign:"justify"}}>Microsoft Windows is a graphical operating system developed and published by Microsoft. It provides a way to store files, run software, play games, watch videos, and connect to the Internet.</p>
       
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="service-item position-relative">
              <div class="icon">
               <i class="bi bi-globe2"></i>
              </div>
              <h3>Internet browsers – Firefox, Safari, Opera, Chrome, etc.</h3>
              <p style={{textAlign:"justify"}}>Web/internet browser is a software program that allows you to access and view web pages.</p>
      
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="service-item position-relative">
              <div class="icon">
              <i class="bi bi-shield"></i>
              </div>
              <h3>PC/Mobile Security Software – Antivirus and Anti-malware (Norton Security) etc.</h3>
              <p style={{textAlign:"justify"}}>Mobile Security to help protect you from harmful viruses and malware</p>
         
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="service-item position-relative">
              <div class="icon">
                <i class="bi bi-skype"></i>
              </div>
              <h3>Mobile software such as Skype (communication), and Slack (for team collaboration) etc.</h3>
              <p style={{textAlign:"justify"}}>Mobile application or app is a computer program or software application designed to run on a mobile device such as a phone, tablet, or watch..</p>

            </div>
          </div>
        </div>

      </div>
</section>
{/*============================================================== body =============================================*/}
<div className="container  mb-5 mt-5" style={{marginTop:""}}>
  <div class="row justify-content-center g-4 align-items-center">
    <div class="col-md-6 ps-5">
    <h2 className='mb-4 fw-bold'>How Application Software works?</h2>
    <p className="fs-6 " style={{textAlign:"justify"}}>
    Software designed to handle specific tasks for users are known as application software, also called application program. Such software directs the computer to execute commands given by the user and may be said to include any program that processes data for a user.
    <br /><br />
    This includes application software that enables a user to perform a task, such as Microsoft Office suite (Excel, Word, PowerPoint, Outlook, etc.) Internet browsers like Firefox, Safari, and Chrome; mobile pieces of software such as Pandora, Skype (for real-time online communication), and Slack (for team collaboration); PDF viewers and readers; 
    </p>
    </div>
    <div class="col-md-6">
      <div className="text-center">
      <img src='https://i.stack.imgur.com/qq8AE.gif' data-src="https://res.cloudinary.com/elonatech/image/upload/v1709654709/applicationPage/application_software_ej1iaz.jpg" alt="" className='img-fluid rounded lazyload'  srcset="" />
      </div>
    </div>
  </div>
</div>
 {/*======================================================== Get in touch =============================================*/}
< Getintouch2 />

</>
  );
}

export default Application;
