
import { Link } from 'react-router-dom'
import './serve.css';


import WebBackground from "./captions/web_design_dtffrx.png"
import DigitalBackground from "./captions/digital_marketing_g63rfx.png"
import GraphicsBackground from "./captions/graphics_and_branding_nme5lb.png"
import NetworkBackground from "./captions/networking_sjpi7m.png"
import ComputerBackground from "./captions/computer_engineering_kme7ga.png"
import AccessBackground from "./captions/survellance_and_access_n3m892.png"
import AnimationBackground from "./captions/animation_qzszuz.png"
import LiveStreamBackground from "./captions/live_streaming_rzknw9.png"
import ConsultBackground from "./captions/consulting_ldkbus.png"



const Serve = () => {
    return (
    <>
<div class="album py-5 ">
      <h2 className='text-center fw-bold mt-5'>What We Do Best</h2>
      <div style={{backgroundColor:"#dc3545", height:"2px", width:"80px", margin:"auto"}}></div>
       <div class="about-border"></div>
      <div class="container ">
         <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-3 mt-5">
            {/*=================================== card 1 ===========================*/}
          <div class="col border-0">
          <div class="card card-1 border-0  bg-lazy" style={{backgroundImage:`url(${WebBackground}) `, height:" 360px" , backgroundSize:"cover", backgroundPosition:"center center", backgroundRepeat:"none"}}>
          <div class="pue text-center "  style={{position:"absolute", bottom:"-0"}} >
          <h5 class="mt-4 text-white">WEB DESIGN & DEVELOPMENT</h5>
          <img alt="product" data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783676562/website_svappk_tkmas5.png" class="lazyload mb-4"  />
           </div>
          <div class="melo">
          <div class="text-center">
            <h4 class="mt-5 text-white">WEB DESIGN & DEVELOPMENT</h4>
            <img alt="product"  data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783676562/website_svappk_tkmas5.png" class="lazyload mb-4"  />
            <p class="text-white">At Elonatech, we build websites that are not only visually beautiful but also functionally effective. Our team of web strategists.</p>
            <Link  to={'/web-design'}    class="btn btn-danger"><h5>See More</h5></Link>
            </div>
          </div>
          </div>
          </div>
          {/*======================================= card 2 ===========================*/}
          <div class="col border-0">
          <div class="card card-1 border-0  bg-lazy" style={{backgroundImage:`url(${DigitalBackground})`, height:" 360px", backgroundSize:"cover", backgroundPosition:"center center", backgroundRepeat:"none"}}>
          <div class="pue text-center "  style={{position:"absolute", bottom:"-0"}} >
          <h5 class="mt-4 text-white"> DIGITIAL MARKETING</h5>
          <img alt="product"  data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783676519/network_2_hbxvaz_j4dkhx.png" class="lazyload mb-4"  />
           </div>
          <div class="melo">
          <div class="text-center">
            <h4 class="mt-5 text-white">DIGITIAL MARKETING</h4>
            <img alt="product" data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783676519/network_2_hbxvaz_j4dkhx.png" class="lazyload mb-4"  />
            <p class="text-white">With Digital marketing, we have successfully changed the way brands and businesses use technology for marketing. Digital platforms are..</p>
            <Link  to={'/digital-marketing'} class="btn btn-danger"><h5>See More</h5></Link>
            </div>
          </div>
           </div>
          </div>
          {/*========================================= card 3 ==========================*/}
          <div class="col border-0">
          <div class="card card-1 border-0  bg-lazy" style={{backgroundImage:`url(${GraphicsBackground})`, height:" 360px",backgroundSize:"cover", backgroundPosition:"center center", backgroundRepeat:"none"}}>
          <div class="pue text-center "  style={{position:"absolute", bottom:"-0"}} >
          <h5 class="mt-4 text-white">GRAPHICS & BRANDING</h5>
          <img alt="product" data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783676509/graphic_pkt8ib_pkbllj.png" class="lazyload mb-4"  />
           </div>
          <div class="melo">
          <div class="text-center">
            <h4 class="mt-5 text-white">GRAPHICS & BRANDING</h4>
            <img alt="product" data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783676509/graphic_pkt8ib_pkbllj.png" class="lazyload mb-4"  />
            <p class="text-white">Brand identity is not limited to a specific mark or name. Branding can incorporate multiple touch points...</p>
            <Link to={'/graphics-design'} class="btn btn-danger"><h5>See More</h5></Link>
            </div>
          </div>
           </div>
          </div>
          {/*=========================================== card 4 ========================*/}
          <div class="col border-0">
          <div class="card card-1 border-0 bg-lazy" style={{backgroundImage:`url(${NetworkBackground})`, height:" 360px", backgroundSize:"cover", backgroundPosition:"center center", backgroundRepeat:"none"}}>
          <div class="pue text-center "  style={{position:"absolute", bottom:"-0"}} >
          <h5 class="mt-2 text-white">NETWORK ENGINEERING / ADMINISTRATION</h5>
          <img alt="product" data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783676530/network_bcyqi7_vil4vi.png" class="lazyload mb-4"  />
           </div>
          <div class="melo">
          <div class="text-center">
            <h4 class="mt-5 text-white">NETWORK ENGINEERING / ADMINISTRATION</h4>
            <img alt="product" data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783676530/network_bcyqi7_vil4vi.png" class="lazyload mb-4"  />
            <p class="text-white">Responsible for installing, implementing, and maintaining business applications for organizations...</p>
            <Link to={'/network-administration-implementation'} class="btn btn-danger"><h5>See More</h5></Link>
            </div>
          </div>
           </div>
          </div>
          {/*========================================== card 5 ========================*/}
          <div class="col border-0">
          <div class="card card-1 border-0 bg-lazy" style={{backgroundImage:`url(${ComputerBackground})`, height:" 360px",backgroundSize:"cover", backgroundPosition:"center center", backgroundRepeat:"none"}}>
          <div class="pue text-center "  style={{position:"absolute", bottom:"-0"}} >
          <h5 class="mt-4 text-white">COMPUTER ENGINEERING</h5>
          <img alt="product" data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783676587/computer_rzvqra_fyj8q6.png" class="lazyload mb-4"  />
           </div>
          <div class="melo">
          <div class="text-center">
            <h4 class="mt-5 text-white">COMPUTER ENGINEERING</h4>
            <img alt="product" data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783676587/computer_rzvqra_fyj8q6.png" class="lazyload mb-4"  />
            <p class="text-white">While computer hardware configurations vary widely, we work on a broad range of hardware systems..</p>
            <Link  to={'/hardware-engineering'} class="btn btn-danger"><h5>See More</h5></Link>
            </div>
          </div>
           </div>
          </div>
          {/*======================================== card 6 ==========================*/}
          <div class="col border-0">
          <div class="card card-1 border-0 bg-lazy" style={{backgroundImage:`url(${AccessBackground})`, height:" 360px" ,backgroundSize:"cover", backgroundPosition:"center center", backgroundRepeat:"none"}}>
          <div class="pue text-center "  style={{position:"absolute", bottom:"-0"}} >
          <h5 class="mt-4 text-white">ACCESS CONTROL & SURVEILLANCE </h5>
          <img alt="product" data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783676543/suvalliance_tbxssd_g8xkca.png" class="lazyload mb-4"  />
           </div>
          <div class="melo">
          <div class="text-center">
            <h4 class="mt-5 text-white">ACCESS CONTROL & SURVEILLANCE</h4>
            <img alt="product"  data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783676543/suvalliance_tbxssd_g8xkca.png" class="lazyload mb-4"  />
            <p class="text-white">While network security should always be a prime concern for your business, you shouldn’t neglect your physical security either...</p>
            <Link to={'/surveillance'} class="btn btn-danger"><h5>See More</h5></Link>
            </div>
          </div>
           </div>
          </div>
          {/*======================================= card 7 ===========================*/}
          <div class="col border-0">
          <div class="card card-1 border-0 bg-lazy" style={{backgroundImage:`url(${AnimationBackground})`, height:" 360px" ,backgroundSize:"cover", backgroundPosition:"center center", backgroundRepeat:"none"}}>
          <div class="pue text-center "  style={{position:"absolute", bottom:"-0"}} >
          <h5 class="mt-4 text-white">ANIMATIONS & VIDEO GRAPHIC</h5>
          <img alt="product"  data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783676554/video-gallery_ymfxwv_rpzqgk.png" class="lazyload mb-4"  />
           </div>
          <div class="melo">
          <div class="text-center">
            <h4 class="mt-5 text-white">ANIMATIONS & VIDEO GRAPHIC</h4>
            <img alt="product" data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783676554/video-gallery_ymfxwv_rpzqgk.png" class="lazyload mb-4"  />
            <p class="text-white">Animations have the power to convey complex concepts, evoke emotions, and leave a lasting impression on your audience.</p>
            <Link to={'/animation'} class="btn btn-danger"><h5>See More</h5></Link>
            </div>
          </div>
           </div>
          </div>
          {/*===================================== card 8 =============================*/}
          <div class="col border-0">
          <div class="card card-1 border-0 bg-lazy" style={{backgroundImage:`url(${LiveStreamBackground})`, height:" 360px" ,backgroundSize:"cover", backgroundPosition:"center center", backgroundRepeat:"none"}}>
          <div class="pue text-center "  style={{position:"absolute", bottom:"-0"}} >
          <h5 class="mt-2 text-white">LIVESTREAMING & VIDEOCONFERENCING</h5>
          <img alt="product"  data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783676549/video_shovcl_c4tee8.png" class="lazyload mb-4"  />
           </div>
          <div class="melo">
          <div class="text-center">
            <h4 class="mt-5 text-white">LIVESTREAMING & VIDEOCONFERENCING</h4>
            <img alt="product"  data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783676549/video_shovcl_c4tee8.png" class="lazyload mb-4"  />
            <p class="text-white">As we adjust to the new normal, everyone is moving their social life online. Happy hours, concerts, events, seminars, late night talk shows...</p>
            <Link to={'/livestreaming'} class="btn btn-danger"><h5>See More</h5></Link>
            </div>
          </div>
           </div>
          </div>
          {/*=================================== card 9 ================================*/}
          <div class="col border-0">
          <div class="card card-1 border-0 bg-lazy" style={{backgroundImage:`url(${ConsultBackground})`, height:" 360px" ,backgroundSize:"cover", backgroundPosition:"center center", backgroundRepeat:"none"}}>
          <div class="pue text-center "  style={{position:"absolute", bottom:"-0"}} >
          <h5 class="mt-4 text-white">CONSULTING</h5>
          <img alt="product"  data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783676594/consult_lwwnnq_idutic.png" class="lazyload mb-4"  />
           </div>
          <div class="melo">
          <div class="text-center">
            <h4 class="mt-5 text-white">CONSULTING</h4>
            <img alt="product"  data-src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783676594/consult_lwwnnq_idutic.png"  class="lazyload mb-4"  />
            <p class="text-white">We help brands & businesses gain a competitive advantage in the connected world helping business find the best solutions. With over 12 years of experience...</p>
            <Link to={'/consulting'} class="btn btn-danger"><h5>See More</h5></Link>
            </div>
          </div>
           </div>
          </div>
         {/*==================================== end ================================== */}
      </div>
    </div>
</div>       
    </>
    );
}

export default Serve;
