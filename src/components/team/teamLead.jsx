
import './css/team.css'
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async';

const TeamLead = () => {
    return (
    <>

<Helmet>
       <title>Samuel Olamilekan Folarin  - Tech Solution, Digital Solution</title>
       <meta name="description" content="  Samuel Folarin is a professional graphics, motion graphics and UI/UX designer with over 5 years of experience using industry standard tools such as the Adobe 
            creative suites, ranging from Adobe Photoshop, Illustrator, After Effects, Premiere Pro etc. and CorelDraw to create stunning and visually appealing designs, 
            compelling advertising campaigns and unique contents that has helped brands establish trust with their audience. " />
       <link rel="canonical" href="https://elonatech.com.ng/samuel-folarin" />
</Helmet>

<div class="container-fluid team-section">
  <div class="text-content">
    <h2>Our Team</h2>
    <h5>We Are Passionate About Technology, Business, And Customer Relation</h5>
    <p class="lead">The Elonatech team consists of young, talented, educated, proud and highly motivated people that bring positive changes to our technologically advancing world.</p>
  </div>
</div>
{/* ===================================================================================================== */}
<div className="container mt-5 mb-5">
    <div className="row">
        <div className="col-md-4">
            <div className="card border-0">
                <div className="text-center">
                <img src='https://i.stack.imgur.com/qq8AE.gif' data-src="https://res.cloudinary.com/elonatech/image/upload/v1709808295/teamPage/Sam_Folarin_k3nvhr.png" className="img-fluid lazyload" alt="" />
                </div>
            </div>
        </div>
        <div className="col-md-8">
            <div className="card border-0">
              <h1 className="fw-bold" style={{color:"#34548c"}}>Samuel Olamilekan Folarin</h1>
              <h6 className="text-danger mt-0">Team lead | Graphics & UI/UX designer</h6>
            <p>
            Samuel Folarin is a professional graphics, motion graphics and UI/UX designer with over 5 years of experience using industry standard tools such as the Adobe 
            creative suites, ranging from Adobe Photoshop, Illustrator, After Effects, Premiere Pro etc. and CorelDraw to create stunning and visually appealing designs, 
            compelling advertising campaigns and unique contents that has helped brands establish trust with their audience.
         
            </p>
            <p>
            Samuel led a successful professional career prior to Elonatech. He has worked as a freelancer and an in-house graphic designer for start-ups and top companies 
            on digital design projects, prints, branded items, 
            Animations and Ads. He also Created campaign designs for voting, branded T-shirts and souvenirs for Big Brother Naija housemates.
 
            </p>
            <p>
            As a performance-driven, strong-willed, and result-oriented individual, he continuously strives to improve himself and develops his career. 
            In other to achieve this he has attended several pieces of training and has undertaken extensive courses in Basic and Advanced Graphics designing, 
            User Interface and User Experience (UI/UX) designs and digital content delivery, just to mention a few.

            </p>
            <p>
            He bags a Bachelor of Science in Education (B.Sc. (Ed) in Integrated Science from the prestigious University of Lagos, 
            and obtained a diploma in graphics design and also a certification in UI/UX.

            </p>
            <p>
            He is diligent and competent in whatever tasks that comes his way and enjoys, reading, gaming, swimming, traveling and learning new things.
            He is currently the Lead Graphics and UI/UX Designer and also the Team Lead of Elonatech Nigeria Limited

            </p>
            </div>
        </div>
    </div>
</div>

{/* ============================================================================================================================ */}
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

  <div class="col-lg-2  mx-1 p-3 mb-5 rounded">
  <div class="kontribusi">
        <div class="team-item rounded overflow-hidden pb-4">
        <Link className='text-decoration-none' to={'/oreva-p-oku'}>
        <img class="img-fluid mb-4" src="https://res.cloudinary.com/elonatech/image/upload/v1709808299/teamPage/MD_mr_oreva_affjug.png" alt=""/>
        <h4 className='fw-bold' style={{color:"#34548c"}}>Oreva P. Oku</h4>
        <h6 class="text-danger">MD, Lead Consultant & Creative Director</h6>
        </Link>
        <ul class="team-social">
        <li><Link class="btn btn-square" target="_blank" rel="noopener noreferrer" to={'https://www.linkedin.com/in/oreva-oku-b730811b/'}><i class="fab fa-linkedin-in"></i></Link></li>
        <li><Link class="btn btn-square" target="_blank" rel="noopener noreferrer" to={''}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
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
        <img class="img-fluid mb-4" src="https://res.cloudinary.com/elonatech/image/upload/v1723814537/admin_dctuiq.jpg" alt=""/>
        <h4 className='fw-bold' style={{color:"#34548c"}}>Violet Laura O.</h4>
        <h6 class="text-danger">Employee Relations/Admin Manager</h6>
         </Link>
        <ul class="team-social">
        <li><Link class="btn btn-square" target="_blank" rel="noopener noreferrer" to={'https://www.linkedin.com/in/laura-oku-a0597b17b/'}><i class="fab fa-linkedin-in"></i></Link></li>
        <li><Link class="btn btn-square" target="_blank" rel="noopener noreferrer" to={'https://twitter.com/V4reva'}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
         <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
       </svg></Link></li>
        <li><Link class="btn btn-square" target="_blank" rel="noopener noreferrer" to={'https://www.facebook.com/violetoku'}><i class="fab fa-facebook-f"></i></Link></li>
        <li><Link class="btn btn-square" target="_blank" rel="noopener noreferrer" to={'https://www.instagram.com/vioreva'}><i class="fab fa-instagram"></i></Link></li>
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
        <li><div class="btn btn-square" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
       </svg></div></li>
        <li><div class="btn btn-square" ><i class="fab fa-facebook-f"></i></div></li>
        <li><div class="btn btn-square" ><i class="fab fa-instagram"></i></div></li>
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
        <h6 class="text-danger">Lead Full Stack Developer</h6>
      </Link>
        <ul class="team-social">
        <li><Link class="btn btn-square" target="_blank" rel="noopener noreferrer" to={'https://www.linkedin.com/in/joe40/'}><i class="fab fa-linkedin-in"></i></Link></li>
        <li><div class="btn btn-square"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
       </svg></div></li>
        <li><div class="btn btn-square"><i class="fab fa-facebook-f"></i></div></li>
        <li><div class="btn btn-square"><i class="fab fa-instagram"></i></div></li>
        </ul>
        </div>
        </div>
  </div>
</div>
</div>
{/* ============================================================================================================================ */}
<div className="text-center mb-5">
<Link to={'/our-team'} className="btn btn-danger">Back to our team</Link>
</div>
{/*======================================================================================  */}
    </>
    );
}

export default TeamLead;
