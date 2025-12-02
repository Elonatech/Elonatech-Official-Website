import { Link } from "react-router-dom";
import './css/team.css'
import { Helmet } from "react-helmet-async";



const TeamWeb = () => {
    return (
    <>
<Helmet>
       <title>Joseph Okoronkwo  - Tech Solution, Digital Solution</title>
       <meta name="description" content="Joseph Okoronkwo is the Lead Web Developer of Elonatech Nigeria Limited.
A seasoned full stack developer with 4+ years of extensive web applications and passion for developing innovative websites that 
expedite the efficiency and effectiveness of organizational success" />
       <link rel="canonical" href="https://elonatech.com.ng/joseph-okoronkwo" />
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
    <img src="https://res.cloudinary.com/elonatech/image/upload/v1733493382/joseph_picture_rurbzo.jpg" className="img-fluid" alt="" />
</div>
</div>
<div className="col-md-8">
<div className="card border-0">
<h1 className="fw-bold" style={{color:"#34548c"}}>Joseph Okoronkwo</h1>
<h6 className="text-danger mt-0">Lead Full Stack Developer</h6>
<p>
Joseph Okoronkwo is the Lead Full Stack Developer at Elonatech Nigeria Limited, 
      with over five years of experience in software development. Known for his passion 
      and innovation, Joseph specializes in creating scalable, user-centric digital solutions. 
      His expertise spans modern frameworks like Angular, React, Node.js, and NestJS, alongside 
      backend tools such as MongoDB, Prisma, and Express.     
</p>
<p>
A certified Full Stack Developer, Joseph has earned credentials from renowned programs, 
      including Python and Full Stack Web Development certifications from Angela Yu’s Udemy courses. 
      His foundational knowledge in Computer Engineering, gained at Yaba College of Technology, Lagos, 
      Nigeria, has been instrumental in shaping his career.
       
</p>
 <p>
 Joseph's journey began in 2018 and includes mentoring aspiring developers at Algorithm Tech, 
      as well as internships with Bincom Code Academy and Power Learn Project Africa. At Elonatech, 
      he leads the development of advanced applications, designs scalable architectures, and delivers 
      enterprise-grade solutions, aligning technical efforts with business objectives.
</p>
<p>
A strategic thinker and collaborative leader, Joseph has successfully delivered projects such as 
      secure e-commerce platforms and bespoke enterprise tools. His commitment to advancing technology 
      and inspiring growth underscores his impactful contributions to the tech industry.
             
</p>
</div>
</div>
</div>
</div>
{/* =========================================================================== */}
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
     <li><Link class="btn btn-square" target="_blank" rel="noopener noreferrer" to={'https://www.linkedin.com/in/israel-oku-65285969'}><i class="fab fa-linkedin-in"></i></Link></li>
      <li><Link class="btn btn-square" target="_blank" rel="noopener noreferrer" to={' https://twitter.com/OkuIsrael'}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
      <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
      </svg></Link></li>
      <li><Link class="btn btn-square" target="_blank" rel="noopener noreferrer" to={'https://www.facebook.com/uwoma.280247'}><i class="fab fa-facebook-f"></i></Link></li>
      <li><Link class="btn btn-square" target="_blank" rel="noopener noreferrer" to={'https://www.instagram.com/israeloku'}><i class="fab fa-instagram"></i></Link></li>
      </ul>
      </div>
    </div>
  </div>
  <div class="col-lg-2  mx-1  p-3 mb-5 rounded ">
  <div class="kontribusi">
        <div class="team-item rounded overflow-hidden pb-4">
         <Link className='text-decoration-none' to={'/oreva-p-oku'}>
        <img class="img-fluid mb-4" src="https://res.cloudinary.com/elonatech/image/upload/v1709808299/teamPage/MD_mr_oreva_affjug.png" alt=""/>
        <h4 className='fw-bold' style={{color:"#34548c"}}>Oreva P. Oku</h4>
        <h6 class="text-danger">MD, Lead Consultant & Creative Director</h6>
         </Link>
        <ul class="team-social">
        <li><Link class="btn btn-square" target="_blank" rel="noopener noreferrer" to={'https://www.linkedin.com/in/oreva-oku-b730811b'}><i class="fab fa-linkedin-in"></i></Link></li>
        <li><Link class="btn btn-square" target="_blank" rel="noopener noreferrer" to={'https://twitter.com/ray112ng'}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
         <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
         </svg></Link></li>
        <li><Link class="btn btn-square" target="_blank" rel="noopener noreferrer" to={'https://www.facebook.com/oreva.oku'}><i class="fab fa-facebook-f"></i></Link></li>
        <li><Link class="btn btn-square" target="_blank" rel="noopener noreferrer" to={'https://www.instagram.com/ray112ng'}><i class="fab fa-instagram"></i></Link></li>
        </ul>
        </div>
  </div>
  </div>
  <div class="col-lg-2 mx-1  p-3 mb-5 rounded ">
  <div class="kontribusi">
        <div class="team-item rounded overflow-hidden pb-4">
        <Link className='text-decoration-none' to={'/violet-oku'}>
        <img class="img-fluid mb-4"   src="https://res.cloudinary.com/elonatech/image/upload/v1723814537/admin_dctuiq.jpg" alt=""/>
        <h4 className='fw-bold' style={{color:"#34548c"}}>Violet Laura O.</h4>
        <h6 class="text-danger">Employee Relations/Admin Manager</h6>
        </Link>     
        <ul class="team-social">
        <li><Link class="btn btn-square" target="_blank" rel="noopener noreferrer" to={'https://www.linkedin.com/in/laura-oku-a0597b17b'}><i class="fab fa-linkedin-in"></i></Link></li>
        <li><Link class="btn btn-square" target="_blank" rel="noopener noreferrer" to={'https://twitter.com/V4reva'}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
        </svg></Link></li>
        <li><Link class="btn btn-square" target="_blank" rel="noopener noreferrer" to={'https://www.facebook.com/violetoku'}><i class="fab fa-facebook-f"></i></Link></li>
        <li><Link class="btn btn-square" target="_blank" rel="noopener noreferrer" to={' https://www.instagram.com/vioreva'}><i class="fab fa-instagram"></i></Link></li>
        </ul>
        </div>
</div>
  </div>
  <div class="col-lg-2  mx-1 p-3 mb-5 rounded">
    <div class="kontribusi">
      <div class="team-item rounded overflow-hidden pb-4">
        <Link className='text-decoration-none' to={'/toju-okenejoe'}>
          <img class="img-fluid mb-4 toju-img" src="https://res.cloudinary.com/davecz6pb/image/upload/v1762267339/products/nhdp0rlogtsalqaymsph.jpg" alt=""/>
          <h4 className='fw-bold' style={{color:"#34548c"}}>Toju Okene-Joe</h4>
          <h6 class="text-danger">Creative Designer | Team Lead</h6>
        </Link>
        <ul class="team-social">
          <li>
            <Link class="btn btn-square" target="_blank" rel="noopener noreferrer" to={'http://www.linkedin.com/in/okene-joe-toju'}>
              <i class="fab fa-linkedin-in"></i>
              </Link>
          </li>
          <li>
            <Link class="btn btn-square" target="_blank" rel="noopener noreferrer" to={'https://x.com/OkeneJoeToju'}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
              <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
              </svg>
            </Link>
          </li>
          <li>
            <Link class="btn btn-square" target="_blank" rel="noopener noreferrer" to={'https://web.facebook.com/tojujoe'}>
            <i class="fab fa-facebook-f"></i>
            </Link>
          </li>
          <li>
            <Link class="btn btn-square" target="_blank" rel="noopener noreferrer" to={'https://www.instagram.com/teajay_creations?igsh=OHF1NXg5bTB2NmZx'}>
              <i class="fab fa-instagram"></i>
            </Link>
          </li>
        </ul>
        </div>
      </div>
  </div>

   <div class="col-lg-2 mx-1 p-3 mb-5 rounded">
   <div class="kontribusi">
        <div class="team-item rounded overflow-hidden pb-4">
         <Link className='text-decoration-none' to={'/jamiu-noah'}>
        <img class="img-fluid mb-4" src="https://res.cloudinary.com/elonatech/image/upload/v1709808291/teamPage/Jamiu_noah_ghhfjl.png" alt=""/>
        <h4 className='fw-bold' style={{color:"#34548c"}}>Jamiu Noah</h4>
        <h6 class="text-danger">Systems & Network Engineer</h6>
         </Link>
        <ul class="team-social">
        <li><Link class="btn btn-square" target="_blank" rel="noopener noreferrer" to={'http://linkedin.com/in/jamiu-noah-5267b0242'}><i class="fab fa-linkedin-in"></i></Link></li>
        <li><div class="btn btn-square"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
        </svg></div></li>
        <li><div><i class="fab fa-facebook-f"></i></div></li>
        <li><div class="btn btn-square" ><i class="fab fa-instagram"></i></div></li>
        </ul>
   </div>
  </div>
  </div>
</div>
</div>
{/* =========================================================================== */}
<div className="text-center mb-5">
<Link to={'/our-team'} className="btn btn-danger">Back to our team</Link>
</div>
{/* =========================================================================== */}
</>
);
}

export default TeamWeb;
