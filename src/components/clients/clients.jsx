

import { Swiper, SwiperSlide  } from 'swiper/react';

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

// Swiper styles
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// Import Swiper styles
import 'swiper/css';
import './client.css'





const Clients = () => {
    return (
  <>

{/*  */}
<div className="container-fluid"  style={{background:"#11253D"}}>
  <h2 className='fw-bold text-white text-center pt-4'>Testimonials</h2>
  <div style={{backgroundColor:"#dc3545", height:"2px", width:"80px", margin:"auto"}}></div>
<Swiper  
modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]} 
spaceBetween={50} 
slidesPerView={1}
pagination={true}
autoplay={{delay: 5000 ,  pauseOnMouseEnter: true}}>

<SwiperSlide>
<div className="container" >
  <div className="row ">
    <div className="col-md-12">
      <div className="">                     
      <div className="text-center">
       <img src="https://img.freepik.com/premium-vector/blurred-mosaic-censor-blur-effect-texture_540598-61.jpg" data-src="https://res.cloudinary.com/elonatech/image/upload/v1709571472/TestimonialSection/Mary-Ephraim-Egbas_kcv6sr.jpg" class="lazyload mt-5" style={{width:"100px", borderRadius:'60%'}}/>
       <h3 style={{fontSize:"20px"}} className='text-white'>Mary Ephraim Egbas</h3>
        <h4 style={{fontSize:"14px"}} className='text-white'>CEO, Okhma Consult</h4>
        <div class="stars mt-3 mb-4" style={{color:'yellow'}}>
         <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
        </div>
        <p className='text-white'>
         <p style={{fontStyle:"italic"}}>
          <i class="bi bi-quote quote-icon-left-op fs-4 text-danger"></i>
         The challenge we face is that we are big enough to need a net
         work with specific functionality, but not necessarily requiring a full-time IT staff person. Elonatech Nigeria Ltd. provided the perfect solution; they h
         ave the technical expertise and mindshare we needed coupled with flexibility in the level of support. They are really responsive, prioritizing important i
         ssues that arise and dealing with them quickly and effectively. I also appreciate their detailed follow-up and preventive maintenance; more than once this h
         as helped us avoid a major problem with our network. A lot of companies these days make claims about customer service and looking out for the best interest 
         of their clients, but Elonatech can be trusted to do what they say—and for a competitive price.  
         <i class="bi bi-quote quote-icon-right-po text-danger fs-5"></i>
         </p> 
         </p>
        </div>
      </div>
    </div>
  </div>
</div> 

</SwiperSlide>

<SwiperSlide>
<div className="container" >
  <div className="row ">
    <div className="col-md-12">
      <div className="">                     
      <div className="text-center">
       <img src="https://img.freepik.com/premium-vector/blurred-mosaic-censor-blur-effect-texture_540598-61.jpg" data-src="https://res.cloudinary.com/elonatech/image/upload/v1709571469/TestimonialSection/Remeben-MD-1_mueqml.png" class="lazyload mt-5"  style={{width:"100px", borderRadius:'60%'}}/>
       <h3 style={{fontSize:"20px"}} className='text-white'>Benjamin Miachi</h3>
        <h4 style={{fontSize:"14px"}} className='text-white'>CEO/Chief Analyst, Remaben Scientific Services Ltd.</h4>
        <div class="stars mt-3 mb-4" style={{color:'yellow'}}>
         <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
        </div>
        <p className='text-white'>
         <p style={{fontStyle:"italic"}}>
          <i class="bi bi-quote quote-icon-left-op fs-4 text-danger"></i>
          In the past, I've been 'held hostage' by techie people who talk over my head. I clicked with Elonatech Nigeria Ltd. 
          from the start because they are so down to earth and more than willing to do a great job for their clients. Elonatech Nigeria Ltd. 
          is a professional company with a real commitment to provide excellent technical expertise
           and incredibly good customer service. I haven't found this from many other providers.
         <i class="bi bi-quote quote-icon-right-po text-danger fs-5"></i>
         </p> 
         </p>
        </div>
      </div>
    </div>
  </div>
</div>

</SwiperSlide>

<SwiperSlide>
<div className="container" >
  <div className="row ">
    <div className="col-md-12">
      <div className="">                     
      <div className="text-center">
       <img src="https://img.freepik.com/premium-vector/blurred-mosaic-censor-blur-effect-texture_540598-61.jpg" data-src="https://res.cloudinary.com/elonatech/image/upload/v1709571470/TestimonialSection/Chunyere-Nganwuchu_thzpc7.jpg" class="lazyload mt-5" style={{width:"100px", borderRadius:'60%'}}/>
       <h3 style={{fontSize:"20px"}} className='text-white'>Chinyere Iziogu</h3>
        <h4 style={{fontSize:"14px"}} className='text-white'>Admin Manager, Shepherd Specialist Hospital</h4>
        <div class="stars mt-3 mb-4" style={{color:'yellow'}}>
         <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
        </div>
        <p className='text-white'>
         <p style={{fontStyle:"italic"}}>
          <i class="bi bi-quote quote-icon-left-op fs-4 text-danger"></i>
          We really needed a company that could handle the computer issues we no longer had the time or experience to deal with. 
          Elonatech Nigeria Ltd.is a perfect solution for us because we have the same IT Professional with us every week who is very familiar with our network, 
          and we don’t have to worry about dealing with computer problems on our own anymore. The fact that Elonatech Nigeria Ltd 
          uses Microsoft best practices is very important to us, 
          too. We are confident that if someone else had to manage our network down the road, it would be easy to do because of the systems that are in place.
         <i class="bi bi-quote quote-icon-right-po text-danger fs-5"></i>
         </p> 
         </p>
        </div>
      </div>
    </div>
  </div>
</div>
</SwiperSlide>

<SwiperSlide>
<div className="container" >
  <div className="row ">
    <div className="col-md-12">
      <div className="">                     
      <div className="text-center">
       <img src="https://img.freepik.com/premium-vector/blurred-mosaic-censor-blur-effect-texture_540598-61.jpg" data-src="https://res.cloudinary.com/elonatech/image/upload/v1709571469/TestimonialSection/Abayomi-Kakanfo_mmqbbt.jpg" class="lazyload mt-5" style={{width:"100px", borderRadius:'60%'}}/>
       <h3 style={{fontSize:"20px"}} className='text-white'>Abayomi Akakanfo</h3>
        <h4 style={{fontSize:"14px"}} className='text-white'>Business Dev. Manager, Hyperthread Ventures Limited </h4>
        <div class="stars mt-3 mb-4" style={{color:'yellow'}}>
         <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
        </div>
        <p className='text-white'>
         <p style={{fontStyle:"italic"}}>
          <i class="bi bi-quote quote-icon-left-op fs-4 text-danger"></i>
          I have worked with other web designers before but was never satisfied with the end result. From start to finish my interaction 
                  with the team at Elonatech was professional, stress-free and I had complete trust in their ability to deliver. Their difference is: 
                  They took the time to listen to what I wanted but also brought their own ideas, experience and creativity so that the end design was more rounded. 
                  They understood that I needed to see things in a visual context and have some flexibility to 'play' around with a few ideas. 
                  All of this was done face to face at their office making the process highly personal.
         <i class="bi bi-quote quote-icon-right-po text-danger fs-5"></i>
         </p> 
         </p>
        </div>
      </div>
    </div>
  </div>
</div>
</SwiperSlide>

<SwiperSlide>
<div className="container" >
  <div className="row ">
    <div className="col-md-12">
      <div className="">                     
      <div className="text-center">
       <img src="https://img.freepik.com/premium-vector/blurred-mosaic-censor-blur-effect-texture_540598-61.jpg" data-src="https://res.cloudinary.com/elonatech/image/upload/v1709571473/TestimonialSection/Mr._Yahaya_Olajide_upu7uz.jpg" class="lazyload mt-5" style={{width:"100px", borderRadius:'60%'}}/>
       <h3 style={{fontSize:"20px"}} className='text-white'>Mr. Yahaya Olajide</h3>
        <h4 style={{fontSize:"14px"}} className='text-white'>Managing Partner, Olajide & Associates Ltd</h4>
        <div class="stars mt-3 mb-4" style={{color:'yellow'}}>
         <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
        </div>
        <p className='text-white'>
         <p style={{fontStyle:"italic"}}>
          <i class="bi bi-quote quote-icon-left-op fs-4 text-danger"></i>
          Every organization relies on computers, laptops, and workstations to perform their duties, and when your equipment goes down, you lose productivity. 
         “Elonatech Nigeria Ltd” allows us to focus on our core business, They evaluated our existing hardware, initiated a master plan to incrementally improve our systems”
          We never have to look over our shoulders any more, when it comes to our computer systems.
         <i class="bi bi-quote quote-icon-right-po text-danger fs-5"></i>
         </p> 
         </p>
        </div>
      </div>
    </div>
  </div>
</div>
</SwiperSlide>

<SwiperSlide>
<div className="container">
  <div className="row ">
    <div className="col-md-12">
      <div className="">                     
      <div className="text-center">
       <img src="https://img.freepik.com/premium-vector/blurred-mosaic-censor-blur-effect-texture_540598-61.jpg" data-src="https://res.cloudinary.com/elonatech/image/upload/v1709571471/TestimonialSection/Gabriel-Osondu_jvgsjv.jpg" class="lazyload mt-5"  style={{width:"100px", borderRadius:'60%'}}/>
       <h3 style={{fontSize:"20px"}} className='text-white'>Gabriel Osondu</h3>
        <h4 style={{fontSize:"14px"}} className='text-white'>COO/Water Specialist, Safebrooks Nig. Ltd.</h4>
        <div class="stars mt-3 mb-4" style={{color:'yellow'}}>
         <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
        </div>
        <p className='text-white'>
         <p style={{fontStyle:"italic"}}>
          <i class="bi bi-quote quote-icon-left-op fs-4 text-danger"></i>
                  Safebrooks Nigeria Limited'' relies on Elonatech for it's digital marketing and web development expertise, with a particular focus on the area of 
                  social media marketing and digital advertising. Elonatech provides the best advice and is superbly knowledgeable as well as being fully committed 
                  and responsive to our needs and supporting the ideas and initiatives we have presented. Oreva and all of the team at Elonatech have become invaluable 
                  partners for our company in creating brand awareness and being instrumental in generating new business ideas.
         <i class="bi bi-quote quote-icon-right-po text-danger fs-5"></i>
         </p> 
         </p>
        </div>
      </div>
    </div>
  </div>
</div>
</SwiperSlide>

</Swiper> 
</div> 
 






            
        </>
    );
}

export default Clients;
