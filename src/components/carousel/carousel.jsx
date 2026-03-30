import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

// Desktop images
import DigitalDesktop from "./caption/Digital_marketers_zreuxb.jpg";
import ConsultDesktop from "./caption/IT_consultants_ah07ai.jpg";
import TechDesktop from "./caption/tech_support_jijajw.jpg";
import WebDesktop from "./caption/web_developers_sbyfha.jpg";

// Mobile images
import DigitalMobile from "./caption/mobile/Digital_Marketer_New_xp9rmd.png";
import ConsultMobile from "./caption/mobile/IT_consultant_mobile_llnuhk.jpg";
import TechMobile from "./caption/mobile/Enigineers_mobile_lfbegl.jpg";
import WebMobile from "./caption/mobile/web_developers_mobile_nwxigp.jpg";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "./carousel.css";

const swiperParams = {
  noSwiping: true, 
  noSwipingClass: 'swiper-no-swiping',
};

const Carousel = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize(); 
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const params = {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  };

  return (
    <>
      <div className="" style={{ background: "#f8f8f8" }}>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation={true}
          pagination={true}
          autoplay={{ delay: 5000 }}
          {...swiperParams}
          {...params}
          loop={true}
        >
          <div className="swiper-button-next" style={{ color: "#fff", fontSize: "18px", margin: "0 0px", cursor: "pointer", float: "right" }}></div>
          <div className="swiper-button-prev" style={{ color: "#fff", fontSize: "18px", margin: "0 0px", cursor: "pointer", float: "left" }}></div>

          <SwiperSlide className="swiper-slide swiper-no-swiping bg-secondary">
            <div className='carouselCard' style={{ backgroundImage: `url(${isMobile ? ConsultMobile : ConsultDesktop})` }}>
              <div className="carouselCardPadding">
                <div className="text-start carouselText">
                  <h1 className='mb-3 title'>We are IT Consultants</h1>
                  <h5 className='mb-4 para'>Information technology consulting services help improve the performance, scalability<br />and competitiveness of your company through right technology enablement and usage</h5>
                  <Link 
                    to={'/consulting'} 
                    className='btn btn-lg btn-danger cta' 
                    aria-label="Learn more about our Consulting Services"
                  >
                    Know More
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="swiper-slide swiper-no-swiping bg-secondary">
            <div className='carouselCard' style={{ backgroundImage: `url(${isMobile ? DigitalMobile : DigitalDesktop})` }}>
              <div className="carouselCardPadding">
                <div className="text-start carouselText">
                  <h1 className='mb-3 title'>We are Digital Marketers</h1>
                  <h5 className='mb-4 para'>Experts in providing digital marketing strategies that convert engagement</h5>
                  <Link 
                    to={'/digital-marketing'} 
                    className='btn btn-lg btn-danger cta' 
                    aria-label="Learn more about our Digital Marketing Services"
                  >
                    Know More
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="swiper-slide swiper-no-swiping bg-secondary">
            <div className='carouselCard' style={{ backgroundImage: `url(${isMobile ? WebMobile : WebDesktop})` }}>
              <div className="carouselCardPadding">
                <div className="text-start carouselText">
                  <h1 className='mb-3 title'>We are Web Developers</h1>
                  <h5 className='mb-4 para'>We offer bespoke user experience, web design, app design, and software development services</h5>
                  <Link 
                    to={'/web-design'} 
                    className='btn btn-lg btn-danger cta down' 
                    aria-label="Learn more about our Web Design Services"
                  >
                    Know More
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="swiper-slide swiper-no-swiping bg-secondary">
            <div className='carouselCard' style={{ backgroundImage: `url(${isMobile ? TechMobile : TechDesktop})` }}>
              <div className="carouselCardPadding">
                <div className="text-start carouselText">
                  <h1 className='mb-3 title'>We are Tech Support Engineers</h1>
                  <h5 className='mb-4 para'>We implement and design both complex and simple data/voice networks and maintenance of all types of computer systems</h5>
                  <Link to={'/hardware-engineering'} className='btn btn-lg btn-danger cta' aria-label="Learn more about hardware engineering and related technologies">Know More</Link>
                </div>
              </div>
            </div>
          </SwiperSlide>

        </Swiper>
      </div>
    </>
  );
}

export default Carousel;
