import { v4 as uuidv4 } from "uuid";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css"; 
import Getintouch from "../GetInTouch/getintouch";
import './web.css';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";




const Web = () => {

const projects = [
        {
            id: uuidv4(),
            img: "https://res.cloudinary.com/elonatech/image/upload/v1709637836/webDesignPage/webProject/ElonatechNigeria_bjybah.png",
            web: 'https://elonatech.com.ng',
			company:"Elonatech Nigeria Limited"
        },
        
        {
            id: uuidv4(),
            img: "https://res.cloudinary.com/elonatech/image/upload/v1709637837/webDesignPage/webProject/HyperthreadVentures_gb4dbm.png",
            web: 'https://hyperthread.com.ng',
			company:"Hyperthread Ventures Limited"
        },
        {
            id: uuidv4(),
            img: "https://res.cloudinary.com/elonatech/image/upload/v1709637602/webDesignPage/webProject/KappachemLaboratory_drdurm.png",
            web: 'https://kappachemlabs.com',
			company:"kappachem Laboratory Services"
        },
        {
            id: uuidv4(),
            img: "https://res.cloudinary.com/elonatech/image/upload/v1709637603/webDesignPage/webProject/PFNLagosState_sh0dhr.png",
            web: 'https://pfnlagosstate.org',
			company:"Pentecostal Fellowship Of Nigeria (PFN), Lagos State"
        },
        {
            id: uuidv4(),
            img: "https://res.cloudinary.com/elonatech/image/upload/v1709637604/webDesignPage/webProject/RemabenScientific_wkasfd.png",
            web: 'https://remabenscientific.com/',
			company:"Remaben Scientific Services Limited"
        },
        {
            id: uuidv4(),
            img: "https://res.cloudinary.com/elonatech/image/upload/v1709637825/webDesignPage/webProject/SafebrooksNigeria_nqs6gs.png",
            web: 'https://www.safebrooks.com.ng/',
			company:"SafeBrooks Nigeria Limited"
        },
        {
            id: uuidv4(),
            img: "https://res.cloudinary.com/elonatech/image/upload/v1709637832/webDesignPage/webProject/SupremeFamily_qwjvyh.png",
            web: 'https://supremefamily.org',
			company:"Supreme Family Entertainment International Initiative"
        },
        {
            id: uuidv4(),
            img: "https://res.cloudinary.com/elonatech/image/upload/v1709637834/webDesignPage/webProject/TheHomeBuildersMinistries_koqgvt.png",
            web: 'https://thbcmi.org',
			company:"The Home-Builders Christian Ministry International"
        },

]

return (
 <>
 <Helmet>
       <title>Web Design & Development</title>
       <meta name="description" content="
	   Prototyping (Designing the UI and UX)
	   Responsive Website
	   We Design & Develop all kinds Of Websites and Web applications with the most suitable platforms at a friendly budget.
	    We offer premium web services such as Business Software Development, Mobile App Development, Web Based Apps etc 
		As a website development company, we also ensure the site responds fast and is SEO friendly with an excellent User Interface (UI) and User Experience (UX). You also get to enjoy complete control over your site. With our website development, you do not have to adjust your specifications to the capabilities of a given platform or change your design visions to fit a template. We deliver 
		the work precisely to your requirements. The sites we develop are highly scalable with a great degree of usability
		" />
       <link rel="canonical" href="https://elonatech.com.ng/web-design" />
</Helmet>

{/* ========================================= header ====================================== */}
<div class="container-fluid web-design-section">
  <div class="text-content">
    <h2>Web Design & Development</h2>
    <h5>Let's Build an Amazing Website for Your Brand</h5>
    <p class="lead">Excellence, Professionalism, Integrity & Convenient Service</p>
  </div>
</div>

{/*==================================== need a website ===========================================*/}
<div className="container mb-5 mt-5">
	<div className="row align-items-center">
		<div className="col-md-6">
			<div className="">
             <h4 className="fw-bold">Need A Website For Your Brand?</h4>
			 <div className="underline-w mt-1 mb-2" style={{  width:"40px", height:"3px" , background:"#f00"}}></div>
			 <p>
             Well, you have come to the right place, At Elonatech Nigeria Limited, We are One Of Nigeria's
			  leading Website Design & Development Company Who's Core Values are Excellence,
			  Professionalism, Integrity & Convenient Service.
			  <br /><br />
			  We Design & Develop all kinds Of Websites and Web applications with the most suitable platforms at a friendly budget. 
			  We offer premium web services such as Business Software Development, Mobile App Development, Web Based Apps etc.
			  <br /><br />
			  We ensure that your needs are understood and implemented correctly. In fact, we are dedicated to the creation of a 
			  site that helps you become a success. Our specialty lies in providing comprehensive and custom web development services 
			  that provide you with a functional and complete solution. 
			 
			 </p>
			</div>
		</div>
		<div className="col-md-6">
			<div className="text-center">
			<img  src='https://i.stack.imgur.com/qq8AE.gif' data-src="https://res.cloudinary.com/elonatech/image/upload/v1709638089/webDesignPage/devops_acdkca.jpg" className='img-fluid rounded lazyload ' alt="" />

			</div>
		</div>
         <p> As a website development company, we also ensure the site responds fast and is SEO friendly with an excellent User Interface (UI) and User Experience (UX). 
			  You also get to enjoy complete control over your site. With our website development, you do not have to
			  adjust your specifications to the capabilities of a given platform or change your design visions to fit a template. 
			  We deliver the work precisely to your requirements.
			  
			  The sites we develop are highly scalable with a great degree of usability.  We won't just build you an ordinary website but also develop a marketing strategy that can utilize 
			   the website and your marketing channels to generate constant leads, sales, customers, and clients.</p>
	</div>
</div>
{/*========================================================= benefits ============================================*/}
<div className="container-fluid " style={{background:"linear-gradient(90deg, #021048 0%, #1E38A3 100%)"}} >
<h2 className='text-center text-white pt-4'>Benefits Of Working With Us</h2>
<div className="underline-w mt-1" style={{  width:"40px", height:"3px" , margin:"auto", background:"#f00"}}></div>
<div className="container pt-5 pb-5">
	<div className="row">
    {/*==================================== cl 1*/}
		<div className="col-md-4 pb-5 ko"> 
		<div className=''>
			<div className="p-4 rounded" style={{background:"#818ec3" }}>

			<div className="text-center"  style={{width:"3rem", height:"3rem", borderRadius:"50%" , background:"white"}} >
            <img  src='https://i.stack.imgur.com/qq8AE.gif' data-src="https://res.cloudinary.com/elonatech/image/upload/v1709638790/webDesignPage/icons/bolt_zbtbl9.png" className='img-fluid lazyload' style={{width:"25px" , paddingTop:"12px"}}  alt="" />
			</div>

			<h5 className='text-white pt-2 fw-bold'>Super Fast Loading In Less Than 3 Seconds</h5>
			<p className='text-white'>Your website will be hosted on the world's fastest LiteSpeed Web Server to ensure a smooth user experience.</p>
             <div style={{width:"50px", height:"10px", borderRadius:"5px" , background:"#fff" , }}></div>
			</div>
			</div>
		</div>
		{/* cl 2*/}
		<div className="col-md-4 pb-5 ko"> 
		<div className=''>
			<div className="p-4 rounded" style={{background:"#818ec3"}}>

			<div className="text-center"  style={{width:"3rem", height:"3rem", borderRadius:"50%" , background:"white"}} >
            <img src='https://i.stack.imgur.com/qq8AE.gif' data-src="https://res.cloudinary.com/elonatech/image/upload/v1709638987/webDesignPage/icons/responsive-design_l9aqtn.png" className='img-fluid lazyload' style={{width:"25px" , paddingTop:"12px"}}  alt="" />
			</div>

			<h5 className='text-white pt-2 fw-bold'>Mobile, Tablet & Desktop Responsive Sites</h5>
			<p className='text-white'>Your Customers/Clients will be able to easily access your website from desktop, tablet and mobile devices.</p>
             <div style={{width:"50px", height:"10px", borderRadius:"5px" , background:"#fff" , }}></div>
			</div>
			</div>
		</div>
		{/* cl 3*/}
		<div className="col-md-4  ko"> 
		<div className=''>
			<div className="p-4 rounded" style={{background:"#818ec3"}}>

			<div className="text-center"  style={{width:"3rem", height:"3rem", borderRadius:"50%" , background:"white"}} >
            <img src='https://i.stack.imgur.com/qq8AE.gif' data-src="https://res.cloudinary.com/elonatech/image/upload/v1709639099/webDesignPage/icons/uiux_zuvfez.png" className='img-fluid lazyload' style={{width:"25px" , paddingTop:"12px"}}  alt="" />
			</div>

			<h5 className='text-white pt-2 fw-bold'>UI/UX. Preview Your Project</h5>
			<p className='text-white'>You can have a feel of exactly how the website will look. We'll design a prototype with an excellent User Interface (UI) & User Experience (UX).</p>
             <div style={{width:"50px", height:"10px", borderRadius:"5px" , background:"#fff" , }}></div>
			</div>
			</div>
		</div>
		{/* cl 4*/}
		<div className="col-md-4 pb-3 ko"> 
		<div className=''>
			<div className="p-4 rounded" style={{background:"#818ec3"}}>

			<div className="text-center"  style={{width:"3rem", height:"3rem", borderRadius:"50%" , background:"white"}} >
            <img src='https://i.stack.imgur.com/qq8AE.gif' data-src="https://res.cloudinary.com/elonatech/image/upload/v1709639101/webDesignPage/icons/web-design_s8nmai.png" className='img-fluid lazyload' style={{width:"25px" , paddingTop:"12px"}}  alt="" />
			</div>

			<h5 className='text-white pt-2 fw-bold'>Premium Designs And Exclusive Brandingt</h5>
			<p className='text-white'>Expect nothing less than a Premium Website that will allow you stand out from your competitors.</p>
             <div style={{width:"50px", height:"10px", borderRadius:"5px" , background:"#fff" , }}></div>
			</div>
			</div>
		</div>
		{/* cl 5*/}
		<div className="col-md-4 pb-3 ko"> 
		<div className=''>
			<div className="p-4 rounded" style={{background:"#818ec3"}}>

			<div className="text-center"  style={{width:"3rem", height:"3rem", borderRadius:"50%" , background:"white"}} >
            <img src='https://i.stack.imgur.com/qq8AE.gif' data-src="https://res.cloudinary.com/elonatech/image/upload/v1709638855/webDesignPage/icons/good-conversion-rate_nljzbs.png" className='img-fluid lazyload' style={{width:"25px" , paddingTop:"12px"}}  alt="" />
			</div>
			<h5 className='text-white pt-2 fw-bold'>Built For Conversions, Leads And Sales</h5>
			<p className='text-white'>We tailor all our design elements and functionalities to help you achieve all your business objectives.</p>
             <div style={{width:"50px", height:"10px", borderRadius:"5px" , background:"#fff" , }}></div>
			</div>
			</div>
		</div>
		{/* cl 6*/}
		<div className="col-md-4 pb-3 ko"> 
		<div className=''>
			<div className="p-4 rounded" style={{background:"#818ec3"}}>
			<div className="text-center"  style={{width:"3rem", height:"3rem", borderRadius:"50%" , background:"white"}} >
            <img src='https://i.stack.imgur.com/qq8AE.gif' data-src="https://res.cloudinary.com/elonatech/image/upload/v1709639105/webDesignPage/icons/custom-email_gurd7u.png" className='img-fluid lazyload' style={{width:"25px" , paddingTop:"12px"}}  alt="" />
			</div>
			<h5 className='text-white pt-2 fw-bold'>Unlimited Custom Email For You & Your Staff</h5>
			<p className='text-white'>Create your vibe with an ultra-secure custom email address - one that uses your own domain name.</p>
             <div style={{width:"50px", height:"10px", borderRadius:"5px" , background:"#fff" , }}></div>
			</div>
			</div>
		</div>
		{/* cl 7*/}
		<div className="col-md-4 pb-3 ko"> 
		<div className=''>
			<div className="p-4 rounded" style={{background:"#818ec3"}}>
			<div className="text-center"  style={{width:"3rem", height:"3rem", borderRadius:"50%" , background:"white"}} >
            <img  src='https://i.stack.imgur.com/qq8AE.gif' data-src="https://res.cloudinary.com/elonatech/image/upload/v1709639103/webDesignPage/icons/web-technologies_nz19qg.png" className='img-fluid lazyload' style={{width:"25px" , paddingTop:"12px"}}  alt="" />
			</div>
			<h5 className='text-white pt-2 fw-bold'>Built With The Most Advanced Technologies</h5>
			<p className='text-white'>We are experts in all major web technologies like React, Express, MongoDB, Laravel, CodeIgniter, WordPress, & several others.</p>
             <div style={{width:"50px", height:"10px", borderRadius:"5px" , background:"#fff" , }}></div>
			</div>
			</div>
		</div>
		{/* cl 8*/}
		<div className="col-md-4 pb-3 ko"> 
		<div className=''>
			<div className="p-4 rounded" style={{background:"#818ec3"}}>
			<div className="text-center"  style={{width:"3rem", height:"3rem", borderRadius:"50%" , background:"white"}} >
            <img  src='https://i.stack.imgur.com/qq8AE.gif' data-src="https://res.cloudinary.com/elonatech/image/upload/v1709639097/webDesignPage/icons/ssl_auwnuw.png" className='img-fluid lazyload' style={{width:"25px" , paddingTop:"12px"}}  alt="" />
			</div>
			<h5 className='text-white pt-2 fw-bold'>Guaranteed Security With SSL Encryption</h5>
			<p className='text-white'>Your website will be secured with the world's best SSL encryption to guarantee constant security.</p>
             <div style={{width:"50px", height:"10px", borderRadius:"5px" , background:"#fff" , }}></div>
			</div>
			</div>
		</div>
		{/* cl 9*/}
		<div className="col-md-4 pb-3 ko"> 
		<div className=''>
			<div className="p-4 rounded" style={{background:"#818ec3"}}>

			<div className="text-center"  style={{width:"3rem", height:"3rem", borderRadius:"50%" , background:"white"}} >
            <img  src='https://i.stack.imgur.com/qq8AE.gif' data-src="https://res.cloudinary.com/elonatech/image/upload/v1709639107/webDesignPage/icons/engineering_q9zyu2.png" className='img-fluid lazyload' style={{width:"25px" , paddingTop:"12px"}}  alt="" />
			</div>

			<h5 className='text-white pt-2 fw-bold'>Continuous Maintenance, Updates & Back-Ups</h5>
			<p className='text-white'>Even after project completion, we will still continue to carry out regular updates, bug fixes & monthly back-ups.</p>
             <div style={{width:"50px", height:"10px", borderRadius:"5px" , background:"#fff" , }}></div>
			</div>
			</div>
		</div>
	</div>
</div>
</div>
{/*================================================= work process =================================================*/}
<div className="container mt-5 mb-5">
<h2 className='text-center  pt-4'>Our Work Process</h2>
<p className='text-center fs-5 mb-1'>For quality job done, we take the below algorithm</p>
<div className="underline-w mt-1 mb-5" style={{  width:"70px", height:"3px" , margin:"auto",  background:"#f00"}}></div>
	<div className="row g-5 align-items-center">
		<div className="col-md-6">
			<div className="text-center">
				<img  src='https://i.stack.imgur.com/qq8AE.gif' data-src="https://res.cloudinary.com/elonatech/image/upload/v1709638113/webDesignPage/Programming_n706wf.jpg" className='img-fluid rounded lazyload' alt="" />
			</div>
		</div>
		<div className="col-md-6">
			<div className="">
				{/*  */}
			  <div className="d-flex">
				<div className='98'>
                 <div className=" text-white" style={{ borderRadius:"19%" , background:"#ee3239"}}>
				 <div className='pt-2 pb-2'>
				 <i class="bi bi-check-lg fs-2 p-3"></i>
					</div>
				 </div>
				</div>
				<div className='new ms-5'>
					<p className='text-primary fw-bold mb-0'>Step 1</p>
					<p className='fw-bold mb-0'>Project Enquiry</p>
					<p>The first point of contact is all about inquiries and technical specifications, At this stage we get to know what your project is all about and how we can help you achieve your objectives.</p>
				</div>
			  </div>
				{/*  */}
			  <div className="d-flex">
			  <div className='98'>
                 <div className=" text-white" style={{ borderRadius:"19%" , background:"#ee3239"}}>
				 <div className='pt-2 pb-2'>
				 <i class="bi bi-check-lg fs-2 p-3"></i>
					</div>
				 </div>
				</div>
				<div className='new ms-5'>
					<p className='text-primary fw-bold mb-0'>Step 2</p>
					<p className='fw-bold mb-0'>Prototyping (Designing the UI and UX)</p>
					<p>After all enquiries, the next step is to build a prototype by designing the User Interface (UI) and make the website have an excellent User Experience (UX), so the client can have a feel of exactly how the website will look.</p>
				</div>
			  </div>
				{/*  */}
			  <div className="d-flex">
			  <div className='98'>
                 <div className=" text-white" style={{ borderRadius:"19%" , background:"#ee3239"}}>
				 <div className='pt-2 pb-2'>
				 <i class="bi bi-check-lg fs-2 p-3"></i>
					</div>
				 </div>
				</div>
				<div className='new ms-5'>
					<p className='text-primary fw-bold mb-0'>Step 3</p>
					<p className='fw-bold mb-0'>Project Execution (The Development Phase)</p>
					<p>Execution will commence immediately. In this stage , we will determine what programming language will best suite the website, then commence the coding to bring about the aesthetics of the website.</p>
				</div>
			  </div>
				{/*  */}
			  <div className="d-flex">
			  <div className='98'>
                 <div className="text-white" style={{ borderRadius:"19%" , background:"#ee3239"}}>
				 <div className='pt-2 pb-2'>
				 <i class="bi bi-check-lg fs-2 p-3"></i>
					</div>
				 </div>
				</div>
				<div className='new ms-5'>
					<p className='text-primary fw-bold mb-0'>Step 4</p>
					<p className='fw-bold mb-0'>The Functionality Stage (Backend)</p>
					<p>The server-side development commences. which focuses on databases, scripting, and website architecture. It consists of behind-the-scene activities that occur when performing any action on the website (account login, online store etc.).</p>
				</div>
			  </div>
			</div>
		</div>
	</div>
</div>
{/*======================================================== work with us ==========================================*/}
<div className="container-fluid " style={{background:"linear-gradient(90deg, #021048 0%, #1E38A3 100%)"}} >
	<div className="container ">
		<div className="row">
			<div className="col-md-12">
				<div className=" text-center mt-5 mb-5">
				<h2 className='text-white mb-4 '>Why You Should Work With Us</h2>
	           <h5 className='text-white mb-4'>The Websites we build are not only visually beautiful, scalable, functional, but with a great degree of usability. We also ensure your website ranks high on most of the major search engines, Google, Yahoo, Bing etc.</h5>
	           <Link to={"/seo"} className='btn btn-danger '>READ MORE</Link> 
	 				
				</div>
			</div>
		</div>
</div>
</div>
{/*=================================================== splide web development =====================================*/}
<div style={{background: '#021048', padding: '1rem 0rem 1rem 0rem'}}>
<h2 className="text-center text-white ">Some Of Our Projects</h2>
<h4 className="text-center text-white">Web Development/Web Design</h4>
<hr className='m-auto  mb-' style={{background:'red', width: "50px", height: "2px"}} />
<h4 className="mb-4"></h4>
    <Splide
        options={{
            type: "loop",
            drag: "free",
            arrows: true,
            pagination: false,
            perPage: 3,
            autoScroll: {
            pauseOnHover: true,
            pauseOnFocus: false,
            rewind: true,
            speed: 1
            }
        }}
        extensions={{ AutoScroll }}
    > 
            {projects.map((project)=> (
            <SplideSlide key={project.id}>
			  <div className="webContainer">
               <img  data-src={project.img} className="lazyload"  style={{height:"350px" , width:"90%"}}  alt="Image 1" />
			   <div class="webOverlay">
				<div className="text-center">
				<a target="_blank" rel="noopener noreferrer"  href={project.web}>
			    <i class="bi bi-box-arrow-up-right fs-5 text-danger"></i>
				</a>
                <h5 class="fw-bold text-white">{project.company}</h5>
				</div>
              </div>
				</div>
            </SplideSlide>
            ))}
    </Splide>
</div>
{/*====================================================== OUR ===================================================*/}
<div className="container-fluid " style={{background:"#dddddd"}}>
<div className="container ">
	<div className="row">
	<div className="col-md-6 " >
	<h3 className="text-center mt-5" style={{color:"#34548c"}}>Our Web Design And Development</h3>
	<hr className='m-auto mt-2 mb-4' style={{background: 'red', width: "50px", height: "2px"}} />
	<div className=" rounded " style={{  boxShadow:"0 0 10px 1px rgba(0, 0, 0, .25)" , background:"#ececec"}}>
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel" style={{height:"24rem"}}>
    <div class="carousel-inner">
    <div class="carousel-item active">
    <div class="">
        <div className="text-center pb-2 pt-5"><img  src='https://i.stack.imgur.com/qq8AE.gif' data-src="https://res.cloudinary.com/elonatech/image/upload/v1709644853/webDesignPage/icons/logo2_v2vwex.png" class="lazyload" alt="..." style={{width:"3rem"}}/></div>
        <h5 className="text-center pb-2" style={{color:"#34548c"}}>Responsive Website</h5>
        <p className="text-center pb-5 ">Responsive Web design is the approach that suggests that design and development should respond to the users behavior and environment based on screen size, platform, and orientation. In other words, the website should have the technology to automatically respond to the users preferences</p>
    </div>

    </div>
    <div class="carousel-item">
	<div class="mt-5">
        <div className="text-center pb-2"><img  src='https://i.stack.imgur.com/qq8AE.gif' data-src="https://res.cloudinary.com/elonatech/image/upload/v1709644853/webDesignPage/icons/logo2_v2vwex.png" class="lazyload" alt="..." style={{width:"3rem"}}/></div>
        <h5 className="text-center pb-2" style={{color:"#34548c"}}>Online School Management System</h5>
        <p className="text-center ">We design and create model software to manage all your school activities. The Online School management System is intellectual and user-friendly. It helps manage a huge administration task along with data and records of teachers, staff, students, and their parents.</p>
    </div>

    </div>
    <div class="carousel-item">
	<div class="mt-5">
        <div className="text-center pb-2"><img  src='https://i.stack.imgur.com/qq8AE.gif'  data-src="https://res.cloudinary.com/elonatech/image/upload/v1709644853/webDesignPage/icons/logo2_v2vwex.png" class="lazyload" alt="..." style={{width:"3rem"}}/></div>
        <h5 className="text-center pb-2" style={{color:"#34548c"}}>Portfolio website</h5>
        <p className="text-center ">A portfolio website allows creative professionals a place for showcasing their best work. This is perfect for artists, writers, designers, filmmakers, furniture builders—you name it. As you build a portfolio, there&lsquo;s no need to add every single project you&lsquo;ve ever worked on</p>
    </div>


    </div>
    <div class="carousel-item">
	<div class="mt-5">
        <div className="text-center pb-2"><img  src='https://i.stack.imgur.com/qq8AE.gif' data-src="https://res.cloudinary.com/elonatech/image/upload/v1709644853/webDesignPage/icons/logo2_v2vwex.png" class="lazyload" alt="..." style={{width:"3rem"}}/></div>
        <h5 className="text-center pb-2" style={{color:"#34548c"}}>Corporate Website</h5>
        <p className="text-center ">Design a website to make people aware of your business as well as promote the company mission, products, and services offered. Quality web design marketing will promote user experience (UX), maintain consistent branding, and bring people back to your site again and again</p>
    </div>


    </div>
    <div class="carousel-item">
	<div class="mt-5">
        <div className="text-center pb-2"><img  src='https://i.stack.imgur.com/qq8AE.gif' data-src="https://res.cloudinary.com/elonatech/image/upload/v1709644853/webDesignPage/icons/logo2_v2vwex.png" class="lazyload" alt="..." style={{width:"3rem"}}/></div>
        <h5 className="text-center pb-2" style={{color:"#34548c"}}>e-Commerce Website</h5>
        <p className="text-center ">We design an e-commerce website, also known as electronic commerce or internet commerce, whereby your customers can buy your goods or services using the internet, and the transfer of money and data to execute these transactions</p>
    </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon  text-dark" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
</div>

	<div className="col-md-6 mb-4">
    <h3 className="text-center mt-5" style={{color:"#34548c"}}>FAQ</h3>
	<hr className='m-auto mt-2 mb-4' style={{background: 'red', width: "50px", height: "2px"}} />
	<div className="">
	{/*  */}
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="accordion accordion-flush  " id="faqlist">
              <div class="accordion-item ">
            
                  <button class="accordion-button  pb-2 pt-3  collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-1">
                    <h6 class="num me-3">1.</h6>
                   <h6> What Domain Name Should I Choose?</h6>
                  </button>
               
                <div id="faq-content-1" class="accordion-collapse collapse" data-bs-parent="#faqlist">
                  <div class="accordion-body">
				  The choice of domain name depends on how you plan to use it. In most cases, it makes sense to choose one that is easy to pronounce and spell if you will be telling people about it over the phone. Above all, you should choose a name that is memorable and not confusing.
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                  <button class="accordion-button  pb-2 pt-3 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-2">
				  <h6 class="num me-3">2.</h6>
                   <h6>How Much Will A Website Cost Me?</h6>
                  </button>
                <div id="faq-content-2" class="accordion-collapse collapse" data-bs-parent="#faqlist">
                  <div class="accordion-body">
				  The cost of a website varies depending on the complexity. We are happy to discuss your requirements and provide a quote at any time.
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                  <button class="accordion-button  pb-2 pt-3  collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-3">
				  <h6 class="num me-3">3.</h6>
                   <h6>How Long Will It Take For My Website To Be Developed?</h6>
                  </button>
                <div id="faq-content-3" class="accordion-collapse collapse" data-bs-parent="#faqlist">
                  <div class="accordion-body">
				  The time it takes to build a site depends on the complexity of the site. If you have a deadline, we will work hard to meet it. The most common cause of delay is the content (text/images) from the client.
                </div>
                </div>
              </div>

              <div class="accordion-item ">
                  <button class="accordion-button pb-2 pt-3 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-4">
                  <h6 class="num me-3">4.</h6>
                   <h6> What Kind Of Business Do You Work With?</h6>
                  </button>
                <div id="faq-content-4" class="accordion-collapse collapse" data-bs-parent="#faqlist">
                  <div class="accordion-body">
				  We work with a broad range of company types [small start-ups, large corporations, nonprofits, B2B, B2C and more] across many business industries [technology, food, apparel, health + beauty, camps, travel, finance, arts, fair trade, and more.] Over the years, we’ve helped businesses improve customer service, market their products, and attract customers. Functionality requests range from basic to advanced. Our team 
				  acquaint themselves with your industry, organization, and competitors to ensure your site supports all of your goals.
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                  <button class="accordion-button  pb-2 pt-3  collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-5">
				  <h6 class="num me-3">5.</h6>
                   <h6> Will  We Need To Have A Meeting To Discuss About The Website?</h6>
                  </button>
                <div id="faq-content-5" class="accordion-collapse collapse" data-bs-parent="#faqlist">
                  <div class="accordion-body">
				  Most of the time, a meeting isn’t necessary and the work is completed with only discussions over phone and email. 
				  We upload our work to private websites that only clients can access. 
				  We then work with you to discuss the site and review changes. The site isn’t made available to the public until it looks and works exactly as you wish.
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                  <button class="accordion-button  pb-2 pt-3  collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-6">
                  <h6 class="num me-3">6.</h6>
                   <h6>Who Writes The Contents For The Website?</h6>
                  </button>
                <div id="faq-content-6" class="accordion-collapse collapse" data-bs-parent="#faqlist">
                  <div class="accordion-body">
				  Usually that is you. You are the expert on your business, so it’s usually best if 
				  it comes from you. If you need help, we have a copywriter on our
				   team who can help clean up or write original content for you at an additional cost.
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                  <button class="accordion-button  pb-2 pt-3  collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-7">
                  <h6 class="num me-3">7.</h6>
                   <h6>Once My Website Is Completed, What After-Sales Service Do You Offer?</h6>
                  </button>
                <div id="faq-content-7" class="accordion-collapse collapse" data-bs-parent="#faqlist">
                  <div class="accordion-body">
				  We fully support any website we develop and are always available should you encounter any problems or require new enhancements. 
				  Elonatech also offers website hosting and maintenance.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> 
      </div>
	</div>
	</div>
	</div>
</div>
</div>
{/*==================================================================================================  */}
<Getintouch />
{/*==================================================================================================  */}
</>
);
}

export default Web;
