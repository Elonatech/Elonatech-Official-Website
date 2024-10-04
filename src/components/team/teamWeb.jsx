import { Link } from "react-router-dom";
import './css/team.css'
import { Helmet } from "react-helmet-async";



const TeamWeb = () => {
    return (
    <>
<Helmet>
       <title>Michael Jogoh  - Tech Solution, Digital Solution</title>
       <meta name="description" content="Michael Jogoh is the Lead Web Developer of Elonatech Nigeria Limited.
A seasoned full stack developer with 4+ years of extensive web applications and passion for developing innovative websites that 
expedite the efficiency and effectiveness of organizational success" />
       <link rel="canonical" href="https://elonatech.com.ng/michael-jogoh" />
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
    <img src="https://res.cloudinary.com/elonatech/image/upload/v1709808281/teamPage/Mike_jogoh_hq9hsl.png" className="img-fluid" alt="" />
</div>
</div>
<div className="col-md-8">
<div className="card border-0">
<h1 className="fw-bold" style={{color:"#34548c"}}>Michael Jogoh</h1>
<h6 className="text-danger mt-0">Lead Web Developer</h6>
<p>
Michael Jogoh is the Lead Web Developer of Elonatech Nigeria Limited.
A seasoned full stack developer with 4+ years of extensive web applications and passion for developing innovative websites that 
expedite the efficiency and effectiveness of organizational success.      
</p>
<p>
In the course of his career, having passed through several levels of education, Michael has also been certified as a 
MERN Stack developer and has bagged several certificates in line with this from various reputable institutions just to mention a few. 
He is a certified Software Developer on Legacy JavaScript Algorithms and Data Structures by freeCodeCamp, 
certified JavaScript by HackerRank, and also certified by TestDome as Web Developer and Node.Js Developer, respectively.
       
</p>
 <p>
 As an experienced full stack web developer, he is well-versed in technology and writing code to create systems that are reliable and user-friendly. 
 A Skilled leader who has the proven ability to motivate,
  educate and manage a team of professionals to build software programs and effectively track changes.
</p>
<p>
Over the years, Michael has led and managed several areas in major business processes and has worked within the back-end and front-end functions in IT.
 He was Software Developer, Bonshare, Turkey; Node.Js Software Developer, Robots Limited, Lagos; Entry Level Software Developer, 
Uleval SL, Lagos; Backend Developer Intern, The Code Center, Lagos; and a host of others.
             
</p>
<p>
As a confident communicator, strategic thinker, and innovative creator, he has developed software that is customized to meet company’s organizational needs, 
highlight its core competencies, and further its successes.

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
        <Link className='text-decoration-none' to={'/samuel-folarin'}>
        <img class="img-fluid mb-4" src="https://res.cloudinary.com/elonatech/image/upload/v1709808295/teamPage/Sam_Folarin_k3nvhr.png" alt=""/>
        <h4 className='fw-bold' style={{color:"#34548c"}}>Samuel Folarin</h4>
        <h6 class="text-danger">Team Lead | Graphics designer</h6>
        </Link>
        <ul class="team-social">
        <li><Link class="btn btn-square" target="_blank" rel="noopener noreferrer" to={'https://www.linkedin.com/in/samuel-folarin-5637891b2/'}><i class="fab fa-linkedin-in"></i></Link></li>
        <li><Link class="btn btn-square" target="_blank" rel="noopener noreferrer" to={'https://twitter.com/sammycrest'}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
         </svg></Link></li>
        <li><div class="btn btn-square" target="_blank" rel="noopener noreferrer" to={''}><i class="fab fa-facebook-f"></i></div></li>
        <li><div class="btn btn-square" target="_blank" rel="noopener noreferrer" to={''}><i class="fab fa-instagram"></i></div></li>
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
