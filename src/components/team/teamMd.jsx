
import './css/team.css'
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async';

const TeamMd = () => {
return (
<>
<Helmet>
       <title>Oreva P. Oku - Tech Solution, Digital Solution</title>
       <meta name="description" content="Oreva Oku is the MD, Lead Consultant and Creative Director of Elonatech Nigeria Limited.
He is a Brand Developer and a facilitator in Information Technology and has recently been awarded Corporate IT CEO of Year 2024 
(by Innovation in Business). He professionalizes in Network Administration/Implementation and Security; Technical Support on PCs 
(hardware and software); Web Design and Administration; 
Graphic Design, Branding and Digital Marketing." />
       <link rel="canonical" href="https://elonatech.com.ng/oreva-p-oku" />
</Helmet>


<div class="container-fluid team-section">
  <div class="text-content">
    <h2>Our Team</h2>
    <h5>We Are Passionate About Technology, Business, And Customer Relation</h5>
    <p class="lead">The Elonatech team consists of young, talented, educated, proud and highly motivated people that bring positive changes to our technologically advancing world.</p>
  </div>
</div>
    <div className="container mt-5 mb-5">
    <div className="row">
        <div className="col-md-4">
            <div className="card border-0">
                <img src="https://res.cloudinary.com/elonatech/image/upload/v1709808299/teamPage/MD_mr_oreva_affjug.png" className="img-fluid" alt="" />
            </div>
        </div>
        <div className="col-md-8">
            <div className="card border-0">
              <h1 className="fw-bold" style={{color:"#34548c"}}>Oreva P. Oku</h1>
              <h6 className="text-danger mt-0">MD, Lead Consultant & Creative Director</h6>
               <p>
               Oreva Oku is the MD, Lead Consultant and Creative Director of Elonatech Nigeria Limited.
               </p>
                <p>
                He is a Brand Developer and a facilitator in Information Technology and has recently been awarded Corporate IT CEO of Year 2024 (by Innovation in Business).
                He professionalizes in Network Administration/Implementation and Security; Technical Support on PCs (hardware and software); Web Design and Administration; Graphic Design, Branding and Digital Marketing.
                </p>
                <p>
                Over the last decade he has identified, progressed and successfully enhanced the use and the application of Information technology to meet clients work needs. 
                During this period, he worked in partnership, consulting and strategizing in order to improve the structure and efficiency of their organization’s IT system. He has been involved in the enabling of major business processes through enhancements to IT,
                 and has worked within the back-end and front-end functions and has managed areas within IT.
                </p>
                <p>
                He has a rich multidisciplinary discipline and background, with first degrees in the humanities, sciences & education, and engineering, 
                and other professional certificates. He is a graduate of Electrical/Electronic from the University of Ado-Ekiti, and Physics/Electronic 
                from Lagos State University, and earns a Bachelor of Arts from the International Miracle Institute (IMI) Pensacola, Florida, USA. 
                He is a Cisco Certified Network Associate, and bags a Diploma in Telecoms and RF, a Certificate in CCNA and Networking Basics, 
                a Certificate in Web design, a Certificate in Network Security and a Certificate in Server Administration.
                </p>
                <p>
                Prior to Elonatech, Oreva has worked with various companies in the technical field. He was Electrical Engineer, Consolidated Foods and Beverages Limited.; 
                CompTIA A+ and Network + Instructor, Jidaw Systems (Master Computer); Principal Consultant, IT, Okhma Global Limited; Field Support Engineer, Watson Midel Solutions; 
                Field Support Engineer TTC Mobile, Physics and Further Mathematics Teacher,
                 Levites Academy; Technical Operator, Friesland Campina (WAMCO) Nig. PLC, and a host of others.

                </p>
                <p>
                He Consults for major companies and firms in Lagos, and is also a lead provider of IT services and products across Nigeria.
                </p>
            </div>
        </div>
    </div>
</div>
{/*=============================================================================================================================  */}

<div class="container-fluid mt-5">
<p className='fw-bold fs-1 text-center' style={{color:"#34548c"}}>Leadership <span className='fst-italic  text-danger'> Team</span></p>
<div class="row mt-5   justify-content-md-center">
  <div class="col-lg-2 mx-1 p-3 mb-5  rounded">
  <div class="kontribusi">
   <div class="team-item rounded overflow-hidden pb-4">
  <Link className='text-decoration-none' to={'/israel-uhwonuwoma-o'}>
    <img class="img-fluid mb-4" src="https://res.cloudinary.com/elonatech/image/upload/v1710243151/teamPage/chairman_esjmiy.jpg" alt=""/>
    <h4 className='fw-bold text-decoration-none' style={{color:"#34548c"}}>Dr. Israel Uwohnuwoma O.</h4>
    <h6 class="text-danger">Executive Chairman</h6>
    </Link>
    <ul class="team-social">
        <li><Link class="btn btn-square" target="_blank" rel="noopener noreferrer" to={'https://www.linkedin.com/in/israel-oku-65285969/'}><i class="fab fa-linkedin-in"></i></Link></li>
        <li><Link class="btn btn-square" target="_blank" rel="noopener noreferrer" to={'https://twitter.com/OkuIsrael'}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
        </svg></Link></li>
        <li><Link class="btn btn-square" target="_blank" rel="noopener noreferrer" to={'https://www.facebook.com/uwoma.280247'}><i class="fab fa-facebook-f"></i></Link></li>
        <li><Link class="btn btn-square" target="_blank" rel="noopener noreferrer" to={'https://www.instagram.com/israeloku/'}><i class="fab fa-instagram"></i></Link></li>
        </ul>
      </div>
</div>
  </div>

  <div class="col-lg-2 mx-1  p-3 mb-5 rounded ">
  <div class="kontribusi">
        <div class="team-item rounded overflow-hidden pb-4">
         <Link className='text-decoration-none' to={'/violet-oku'}>
        <img class="img-fluid mb-4" src="https://res.cloudinary.com/elonatech/image/upload/v1723814537/admin_dctuiq.jpg" alt=""/>
        <h4 className='fw-bold' style={{color:"#34548c"}}>Violet Laura O.</h4>
        <h6 class="text-danger">Employee Relations/Admin Manager</h6>
        </Link>
        <ul class="team-social">
        <li><Link class="btn btn-square" target="_blank" rel="noopener noreferrer" to={'https://www.linkedin.com/in/laura-oku-a0597b17b'}><i class="fab fa-linkedin-in"></i></Link></li>
        <li><Link class="btn btn-square" target="_blank" rel="noopener noreferrer" to={'https://twitter.com/V4reva'}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
        </svg></Link></li>
        <li><Link class="btn btn-square" target="_blank" rel="noopener noreferrer" to={'https://www.facebook.com/violetoku'}><i class="fab fa-facebook-f"></i></Link></li>
        <li><Link class="btn btn-square" target="_blank" rel="noopener noreferrer" to={'https://www.instagram.com/vioreva'}><i class="fab fa-instagram"></i></Link></li>
        </ul>
        </div>
        </div>
  </div>

  <div class="col-lg-2  mx-1 p-3 mb-5 rounded">
  <div class="kontribusi">
        <div class="team-item rounded overflow-hidden pb-4">
        <Link className='text-decoration-none' to={'/samuel-folarin'}>
        <img class="img-fluid mb-4" src="https://res.cloudinary.com/elonatech/image/upload/v1709808295/teamPage/Sam_Folarin_k3nvhr.png" alt=""/>
        <h4 className='fw-bold' style={{color:"#34548c"}}>Samuel Folarin</h4>
        <h6 class="text-danger">Team Lead | Graphics designer</h6>
        </Link>
        <ul class="team-social">
        <li><Link class="btn btn-square" target="_blank" rel="noopener noreferrer" to={'https://www.linkedin.com/in/samuel-folarin-5637891b2'}><i class="fab fa-linkedin-in"></i></Link></li>
        <li><Link class="btn btn-square" target="_blank" rel="noopener noreferrer" to={'https://twitter.com/sammycrest'}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
        </svg></Link></li>
        <li><div class="btn btn-square" ><i class="fab fa-facebook-f"></i></div></li>
        <li><div class="btn btn-square" ><i class="fab fa-instagram"></i></div></li>
        </ul>
        </div>
      </div>
  </div>
  <div class="col-lg-2  mx-1  p-3 mb-5 rounded ">
  <div class="kontribusi">
        <div class="team-item rounded overflow-hidden pb-4">
        <Link className='text-decoration-none' to={'/jamiu-noah'}>
        <img class="img-fluid mb-4" src="https://res.cloudinary.com/elonatech/image/upload/v1709808291/teamPage/Jamiu_noah_ghhfjl.png" alt=""/>
        <h4 className='fw-bold' style={{color:"#34548c"}}>Jamiu Noah</h4>
        <h6 class="text-danger">Systems & Network Engineer</h6>
        </Link>
        <ul class="team-social">
        <li><Link class="btn btn-square" target="_blank" rel="noopener noreferrer" to={'http://linkedin.com/in/jamiu-noah-5267b0242'}><i class="fab fa-linkedin-in"></i></Link></li>
        <li><Link class="btn btn-square"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
         <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
        </svg></Link></li>
        <li><div class="btn btn-square"><i class="fab fa-facebook-f"></i></div></li>
        <li><div class="btn btn-square"><i class="fab fa-instagram"></i></div></li>
        </ul>
    </div>
    </div>
  </div>

   <div class="col-lg-2 mx-1 p-3 mb-5 rounded">
    <div class="kontribusi">
        <div class="team-item rounded overflow-hidden pb-4">
       <Link className='text-decoration-none' to={'/joseph-okoronkwo'}>
        <img class="img-fluid mb-4" src="https://res.cloudinary.com/elonatech/image/upload/v1733493382/joseph_picture_rurbzo.jpg" alt=""/>
        <h5 className="fw-bold" style={{color:"#34548c"}}>Joseph Okoronkwo</h5>
        <h6 class="text-danger">Lead Web Developer</h6>
       </Link>
        <ul class="team-social">
        <li><Link class="btn btn-square" target="_blank" rel="noopener noreferrer" to={'https://www.linkedin.com/in/joe40/'}><i class="fab fa-linkedin-in"></i></Link></li>
        <li><Link class="btn btn-square"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
        </svg></Link></li>
        <li><div class="btn btn-square" ><i class="fab fa-facebook-f"></i></div></li>
        <li><div class="btn btn-square" ><i class="fab fa-instagram"></i></div></li>
        </ul>
    </div>
    </div>
  </div>
</div>
</div>
{/*=============================================================================================================================  */}
<div className="text-center mb-5">
<Link to={'/our-team'} className="btn btn-danger">Back to our team</Link>
</div>
{/* ========================================================================== */}
    </>
    );
}

export default TeamMd;
