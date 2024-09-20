
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import './css/team.css';


const TeamAdmin = () => {
    return (
        <>
        <Helmet>
       <title>Violet Laura O. - Tech Solution, Digital Solution</title>
       <meta name="description" content="
        Violet Laura is the Employee Relations and Admin Manager of Elonatech Nigeria Limited. 
         She is a seasoned Document Controller by profession, and has worked with major international and indigenous 
         reputable engineering companies within the West African Countries.
         She is a hardworking and conscientious professional with more than 11 Years hands-on experience in managing company 
         document through Electronic Document Management System (EDMS) 
         in engineering environment while also ensuring their accuracy, quality and integrity in accordance with the company’s and archival procedures.
       " />
       <link rel="canonical" href="https://elonatech.com.ng/violet-oku" />
      </Helmet>
<div class="container-fluid team-section">
  <div class="text-content">
    <h2>Our Team</h2>
    <h5>We Are Passionate About Technology, Business, And Customer Relation</h5>
    <p class="lead">The Elonatech team consists of young, talented, educated, proud and highly motivated people that bring positive changes to our technologically advancing world.</p>
  </div>
</div>

{/* ============================================================= */}
<div className="container mt-5 mb-5">
    <div className="row">
        <div className="col-md-4">
            <div className="card border-0">
                <img src="https://res.cloudinary.com/elonatech/image/upload/v1709808286/teamPage/Admin_-_Copy_ugao5i.png" className="img-fluid" alt="" />
            </div>
        </div>
        <div className="col-md-8">
            <div className="card border-0">
              <h1 className="fw-bold" style={{color:"#34548c"}}>Violet Laura O.</h1>
              <h6 className="text-danger mt-0">Employee Relations/Admin Manager</h6>
               <p>
               Violet Laura is the Employee Relations and Admin Manager of Elonatech Nigeria Limited. 
               She is a seasoned Document Controller by profession, and has worked with major international and indigenous 
               reputable engineering companies within the West African Countries.
               </p>
                <p>
                She is a hardworking and conscientious professional with more than 11 Years hands-on experience in managing company 
                document through Electronic Document Management System (EDMS) 
                in engineering environment while also ensuring their accuracy, quality and integrity in accordance with the company’s and archival procedures.
                </p>
                <p>
                Prior to Elonatech, she has worked with the following companies and projects as a Document Controller and Technical bidder within West Africa. 
                Oil and Industrial Services Nigeria Limited; DESICON Engineering Limited, Southern Swamp Associated Gas Gathering Solution / SAIPEM Base (SSAGS) Projects, 
                JAGAL Nigeria Limited on GULF-FZE Project for Snake Island Development Project and the Construction of the Lekki Pedestrians Bridge at Victoria Island Lagos;
                 West African Gas Pipelines Project (WAGP) For WAPCo – in various stations (LBCS, ITOKI, TEMA, TAKORADI, LOME & BENIN)
                </p>
                <p>
                She has demonstrated a proven track record in rebranding, developing and implementing strategic business and HR objectives within organizations, 
                and with her ability to engage with and win the respect of leaders to successfully influence them on key change initiatives, 
                she has been able to successfully support and ensure the proper implementation of various company strategies and objectives.
       
                </p>
                <p>
                Violet earned a Bachelor of Arts from the International Miracle Institute (IMI) Pensacola, Florida, USA in Christian Theology and 
                National Diploma in Welding and Fabrication Technology from Petroleum Training Institute (PTI). She also obtained a professional 
                Certificate in Best Practices in Documents Records Management and 
                Archival Administration, as well as Advanced MS Excel, and other professional certificates.
                </p>
            </div>
        </div>
    </div>
</div>
{/* ============================================================================== */}
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
        <li><Link class="btn btn-square" target="_blank" rel="noopener noreferrer" to={'https://www.instagram.com/israeloku'}><i class="fab fa-instagram"></i></Link></li>
        </ul>
      </div>
</div>
  </div>

  <div class="col-lg-2 mx-1  p-3 mb-5 rounded ">
  <div class="kontribusi">
        <div class="team-item rounded overflow-hidden pb-4">
        <Link className='text-decoration-none' to={'/oreva-p-oku'}>
        <img class="img-fluid mb-4" src="https://res.cloudinary.com/elonatech/image/upload/v1709808299/teamPage/MD_mr_oreva_affjug.png" alt=""/>
        <h4 className='fw-bold' style={{color:"#34548c"}}>Oreva P. Oku</h4>
        <h6 class="text-danger">MD, Lead Consultant & Creative Directort</h6>
         </Link>
        <ul class="team-social">
        <li><Link class="btn btn-square" target="_blank" rel="noopener noreferrer" to={'https://www.linkedin.com/in/oreva-oku-b730811b/'}><i class="fab fa-linkedin-in"></i></Link></li>
        <li><Link class="btn btn-square" target="_blank" rel="noopener noreferrer" to={'https://twitter.com/ray112ng'}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
        </svg></Link></li>
        <li><Link class="btn btn-square" target="_blank" rel="noopener noreferrer" to={'https://www.facebook.com/oreva.oku'}><i class="fab fa-facebook-f"></i></Link></li>
        <li><Link class="btn btn-square" target="_blank" rel="noopener noreferrer" to={'https://www.instagram.com/ray112ng'}><i class="fab fa-instagram"></i></Link></li>
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
        <li><div class="btn btn-square"><i class="fab fa-facebook-f"></i></div></li>
        <li><div class="btn btn-square"><i class="fab fa-instagram"></i></div></li>
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
        <li><div class="btn btn-square"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
         <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
         </svg></div></li>
        <li><div class="btn btn-square"><i class="fab fa-facebook-f"></i></div></li>
        <li><div class="btn btn-square"><i class="fab fa-instagram"></i></div></li>
        </ul>
        </div>
        </div>
         </div>

   <div class="col-lg-2 mx-1 p-3 mb-5 rounded">
    <div class="kontribusi">
        <div class="team-item rounded overflow-hidden pb-4">
       <Link className='text-decoration-none' to={'/michael-jogoh'}>
        <img class="img-fluid mb-4" src="https://res.cloudinary.com/elonatech/image/upload/v1709808281/teamPage/Mike_jogoh_hq9hsl.png" alt=""/>
        <h5 className="fw-bold" style={{color:"#34548c"}}>Michael Jogoh</h5>
        <h6 class="text-danger">Lead Web Developer</h6>
        </Link>
        <ul class="team-social">
        <li><Link class="btn btn-square" target="_blank" rel="noopener noreferrer" to={'https://www.linkedin.com/in/michael-jogoh-257778222/'}><i class="fab fa-linkedin-in"></i></Link></li>
        <li><div class="btn btn-square"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
</svg></div></li>
        <li><div class="btn btn-square" ><i class="fab fa-facebook-f"></i></div></li>
        <li><div class="btn btn-square"><i class="fab fa-instagram"></i></div></li>
        </ul>
        </div>
        </div>
  </div>
</div>
</div>
{/* ============================================================================== */}
<div className="text-center mb-5">
<Link to={'/our-team'} className="btn btn-danger">Back to our team</Link>
</div>
{/* ============================================================================ */}
</>
    );
}

export default TeamAdmin;
