import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay
} from 'swiper/modules'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import Getintouch from '../GetInTouch/getintouch'
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay
} from 'swiper/modules'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import Getintouch from '../GetInTouch/getintouch'

// Swiper styles
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css'

import rema from './captions/rema_360.jpg'
import remaben from './captions/remaben_480.jpg'
import quoteRight from './captions/quote-right.webp'
import quoteLeft from './captions/quote-left.webp'

import star from './captions/Star-Rating-Icon.webp'
import employee from './captions/Employees-Icon.webp'
import shake from './captions/90.webp'
import inc from './captions/medal.1.png'
import star from './captions/Star-Rating-Icon.webp'
import employee from './captions/Employees-Icon.webp'
import shake from './captions/90.webp'
import inc from './captions/medal.1.png'

// ads
// ads

import seo from './captions/Ads/SEO-Icon-2.webp'
import google from './captions/Ads/Google-Ads-Icon-2.webp'
import social from './captions/Ads/Social-Media-Ads-Icon-2.webp'
import youtube from './captions/Ads/YouTube-Ads-Icon-2.webp'
import amazon from './captions/Ads/Amazon-Icon-2.webp'
import facebook from './captions/Ads/Facebook-Ads-Icon-2.webp'
import ticktok from './captions/Ads/TikTok-Ads-Icon-1.webp'
import linkedin from './captions/Ads/Linkedin-Ads-Icon-1.webp'
import snap from './captions/Ads/Snapchat-Ads-Icon-1.webp'
import bing from './captions/Ads/Bing-Ads-Icon-1.webp'
import twitter from './captions/Ads/twitter-x-logo-577BCAE525-seeklogo.com.png'
import shopping from './captions/Ads/Google-Shopping-Icon-1.webp'
import motion from './captions/Ads/Motion-Ads-Icon-1.webp'
import landing from './captions/Ads/Landing-Pages-Icon-1.webp'
import seo from './captions/Ads/SEO-Icon-2.webp'
import google from './captions/Ads/Google-Ads-Icon-2.webp'
import social from './captions/Ads/Social-Media-Ads-Icon-2.webp'
import youtube from './captions/Ads/YouTube-Ads-Icon-2.webp'
import amazon from './captions/Ads/Amazon-Icon-2.webp'
import facebook from './captions/Ads/Facebook-Ads-Icon-2.webp'
import ticktok from './captions/Ads/TikTok-Ads-Icon-1.webp'
import linkedin from './captions/Ads/Linkedin-Ads-Icon-1.webp'
import snap from './captions/Ads/Snapchat-Ads-Icon-1.webp'
import bing from './captions/Ads/Bing-Ads-Icon-1.webp'
import twitter from './captions/Ads/twitter-x-logo-577BCAE525-seeklogo.com.png'
import shopping from './captions/Ads/Google-Shopping-Icon-1.webp'
import motion from './captions/Ads/Motion-Ads-Icon-1.webp'
import landing from './captions/Ads/Landing-Pages-Icon-1.webp'
import email from './captions/Ads/Email-Management-Icon-1.webp'
import lead from './captions/Ads/Lead-Nurture-Icon-1.webp'
import creative from './captions/Ads/Creative-Strategy-Icon-1.webp'
import site from './captions/Ads/Website-Optimization-Icon-1 (1).webp'

// Css
import './digital.css'

import { Helmet } from 'react-helmet-async'
import { Helmet } from 'react-helmet-async'

const Digital = () => {
  const testimonies = [
    {
      name: 'Gabriel Osondu',
      position: 'COO/Water Specialist, Safebrooks Nig. Ltd.',
      quote: "They'll move mountains for us.",
      testimonial: `"Safebrooks Nigeria Limited" relies on Elonatech for its digital marketing and web development expertise, with a particular focus on the area of social media marketing and digital advertising. Elonatech provides the best advice and is superbly knowledgeable as well as being fully committed and responsive to our needs and supporting the ideas and initiatives we have presented. Oreva and all of the team at Elonatech have become invaluable partners for our company in creating brand awareness and being instrumental in generating new business ideas.`,
      imageUrl:
        'https://elonatech.com.ng/wp-content/uploads/2021/09/Gabriel-Osondu.jpeg'
    },
    {
      name: 'Mary Ephraim-Egbas',
      position: 'CEO, Okhma Consult',
      quote: 'A great partner to us.',
      testimonial: `"The challenge we face is that we are big enough to need a network with specific functionality, but not necessarily requiring a full-time IT staff person. Elonatech Nigeria Ltd. provided the perfect solution; they have the technical expertise and mindshare we needed coupled with flexibility in the level of support. They are really responsive, prioritizing important issues that arise and dealing with them quickly and effectively. I also appreciate their detailed follow-up and preventive maintenance; more than once this has helped us avoid a major problem with our network. A lot of companies these days make claims about customer service and looking out for the best interest of their clients, but Elonatech can be trusted to do what they say—and for a competitive price."`,
      imageUrl:
        'https://elonatech.com.ng/wp-content/uploads/2021/06/Mary-Ephraim-Egbas.jpeg'
    },
    {
      name: 'Abayomi Kakanfo',
      position: 'Business Dev. Manager, Hyperthread Ventures Limited',
      quote: 'Not a typical agency.',
      testimonial: `"I have worked with other web designers before but was never satisfied with the end result. From start to finish my interaction with the team at Elonatech was professional, stress-free and I had complete trust in their ability to deliver. Their difference is: They took the time to listen to what I wanted but also brought their own ideas, experience and creativity so that the end design was more rounded. They understood that I needed to see things in a visual context and have some flexibility to 'play' around with a few ideas. All of this was done face to face at their office making the process highly personal."`,
      imageUrl:
        'https://elonatech.com.ng/wp-content/uploads/2021/06/Abayomi-Kakanfo.jpg'
    },
    {
      name: 'Benjamin Miachi',
      position: 'CEO/Chief Analyst, Remaben Scientific Services Ltd.',
      quote: 'You can rely on their guidance.',
      testimonial: `"In the past, I've been 'held hostage' by techie people who talk over my head. I clicked with Elonatech Nigeria Ltd. from the start because they are so down to earth and more than willing to do a great job for their clients. Elonatech Nigeria Ltd. is a professional company with a real commitment to provide excellent technical expertise and incredibly good customer service. I haven't found this from many other providers."`,
      imageUrl: remaben
    },
    {
      name: 'Chinyere Iziogu',
      position: 'Admin Manager, Shepherd Specialist Hospital',
      quote: 'Impressed with attention to detail.',
      testimonial: `"We really needed a company that could handle the computer issues we no longer had the time or experience to deal with. Elonatech Nigeria Ltd. is a perfect solution for us because we have the same IT Professional with us every week who is very familiar with our network, and we don’t have to worry about dealing with computer problems on our own anymore. The fact that Elonatech Nigeria Ltd uses Microsoft best practices is very important to us, too. We are confident that if someone else had to manage our network down the road, it would be easy to do because of the systems that are in place."`,
      imageUrl: rema
    }
  ]

  const statistics = [
    {
      image: star,
      value: '4.8',
      description: 'Average rating from 300 reviews',
      style: { width: '6rem' }
    },
    {
      image: employee,
      value: '40+',
      description: 'Clients with us for 4 years or more',
      style: { width: '6rem' }
    },
    {
      image: shake,
      value: '20+',
      description: 'Employees aligned with our mission',
      style: { width: '6rem' }
    },
    {
      image: inc,
      value: '#5',
      description: 'Industry Awards and Recognition',
      style: { width: '5rem' }
    }
  ]

  const adItems = [
    { src: seo, alt: 'SEO', label: 'SEO', style: { width: '25px' } },
    {
      src: google,
      alt: 'Google Ads',
      label: 'Google Ads',
      style: { width: '25px' }
    },
    {
      src: social,
      alt: 'Social Ads',
      label: 'Social Ads',
      style: { width: '25px' }
    },
    {
      src: youtube,
      alt: 'Youtube Ads',
      label: 'Youtube Ads',
      style: { width: '25px' }
    },
    { src: amazon, alt: 'Amazon', label: 'Amazon', style: { width: '25px' } },
    {
      src: facebook,
      alt: 'Facebook Ads',
      label: 'Facebook Ads',
      style: { width: '15px' }
    },
    {
      src: ticktok,
      alt: 'Tiktok Ads',
      label: 'Tiktok Ads',
      style: { width: '25px' }
    },
    {
      src: linkedin,
      alt: 'Linkedin Ads',
      label: 'Linkedin Ads',
      style: { width: '25px' }
    },
    {
      src: snap,
      alt: 'Snapchat Ads',
      label: 'Snapschat Ads',
      style: { width: '25px' }
    },
    { src: bing, alt: 'Bing Ads', label: 'Bing Ads', style: { width: '20px' } },
    { src: twitter, alt: 'X Ads', label: 'X Ads', style: { width: '25px' } },
    {
      src: shopping,
      alt: 'Shopping',
      label: 'Shopping',
      style: { width: '25px' }
    },
    {
      src: motion,
      alt: 'Motion Ads',
      label: 'Motion Ads',
      style: { width: '25px' }
    },
    {
      src: landing,
      alt: 'Landing Pages',
      label: 'Landing Pages',
      style: { width: '25px' }
    },
    { src: email, alt: 'Email', label: 'Email', style: { width: '25px' } },
    {
      src: lead,
      alt: 'Lead Nurture',
      label: 'Lead Nurture',
      style: { width: '25px' }
    },
    {
      src: creative,
      alt: 'Creative',
      label: 'Creative',
      style: { width: '25px' }
    },
    {
      src: site,
      alt: 'Optimization',
      label: 'Optimization',
      style: { width: '25px' }
    }
  ]

  return (
    <>
      <Helmet>
        <title>Digital Marketing</title>
        <meta
          name='description'
          content='
       Affiliate marketing E-Commerce Marketing Social Media Marketing
       Developing effective digital marketing in any market is tough, demanding, and technical. 
        Hence the need to work with an agency with the experience, network, tools and know-how
        Developing effective digital marketing in any market is a tough, demanding, and technical undertaking. Hence the need to work with a Nigerian internet 
        marketing agency with the experience, network, tools and know-how needed to achieve market success.
         '
        />
        <link
          rel='canonical'
          href='https://elonatech.com.ng/digital-marketing'
        />
      </Helmet>
      {/*================================================================ header ========================================================*/}
      <div class='container-fluid digital-marketing-section'>
        <div class='text-content'>
          <h2>Digital Marketing</h2>
          <h5>
            Our mission is clear: Help you outsell, outperform, and outlast your
            competitors.
          </h5>
          <p class='lead'>
            Developing effective digital marketing in any market is tough,
            demanding, and technical. Hence the need to work with an agency with
            the experience, network, tools, and know-how.
          </p>
        </div>
      </div>
         '
        />
        <link
          rel='canonical'
          href='https://elonatech.com.ng/digital-marketing'
        />
      </Helmet>
      {/*================================================================ header ========================================================*/}
      <div class='container-fluid digital-marketing-section'>
        <div class='text-content'>
          <h2>Digital Marketing</h2>
          <h5>
            Our mission is clear: Help you outsell, outperform, and outlast your
            competitors.
          </h5>
          <p class='lead'>
            Developing effective digital marketing in any market is tough,
            demanding, and technical. Hence the need to work with an agency with
            the experience, network, tools, and know-how.
          </p>
        </div>
      </div>

      {/* ============================================================================================================================== */}
      <div className='container'>
        <div class='row justify-content-center mt-5'>
          <div class='col-lg-5'>
            <div className='card border-0'>
              <img
                src='https://img.freepik.com/free-photo/group-afro-americans-working-together_1303-8983.jpg?size=626&ext=jpg&ga=GA1.1.1903931542.1694762473&semt=sph'
                alt=''
              />
            </div>
          </div>
          <div class='col-lg-7'>
            <div className=' ml-md-4 my-md-0 my-3'>
              <h2 className='fw-bold  '>
                Our digital marketing services help your business grow online
                leads, calls, and revenue.
              </h2>

              <p className='' style={{ textAlign: 'justify' }}>
                With Digital marketing, we have successfully changed the way
                brands and businesses use technology for marketing. Digital
                platforms are increasingly incorporated into marketing plans and
                everyday life, and with the high rise in the use of digital
                devices instead of visiting physical shops, digital marketing
                campaigns are becoming more prevalent and efficient.
                <br />
                <br />
                We achieve this aim by working closely with you to craft and
                deliver successful and bottom-lined oriented online marketing
                strategies which integrate customer needs, business objectives,
                and technology.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* ============================================================================================================================== */}
      <div className='container'>
        <div class='row justify-content-center mt-5'>
          <div class='col-lg-5'>
            <div className='card border-0'>
              <img
                src='https://img.freepik.com/free-photo/group-afro-americans-working-together_1303-8983.jpg?size=626&ext=jpg&ga=GA1.1.1903931542.1694762473&semt=sph'
                alt=''
              />
            </div>
          </div>
          <div class='col-lg-7'>
            <div className=' ml-md-4 my-md-0 my-3'>
              <h2 className='fw-bold  '>
                Our digital marketing services help your business grow online
                leads, calls, and revenue.
              </h2>

              <p className='' style={{ textAlign: 'justify' }}>
                With Digital marketing, we have successfully changed the way
                brands and businesses use technology for marketing. Digital
                platforms are increasingly incorporated into marketing plans and
                everyday life, and with the high rise in the use of digital
                devices instead of visiting physical shops, digital marketing
                campaigns are becoming more prevalent and efficient.
                <br />
                <br />
                We achieve this aim by working closely with you to craft and
                deliver successful and bottom-lined oriented online marketing
                strategies which integrate customer needs, business objectives,
                and technology.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*======================================================= disruptive ==============================================================*/}
      <div className='container'>
        <div class='row justify-content-center mt-md-5  flex-column-reverse flex-lg-row align-items-center'>
          <div class='col-lg-7'>
            <div className='card border-0'>
              <div className=' text-end'>
                <p className='' style={{ textAlign: 'justify' }}>
                  Developing effective digital marketing in any market is a
                  tough, demanding, and technical undertaking. Hence the need to
                  work with a Nigerian internet marketing agency with the
                  experience, network, tools and know-how needed to achieve
                  market success.
                  <br />
                  <br />
                  Our encyclopedic knowledge of the Nigerian business
                  environment, in-house pool of stellar associates, and
                  strategic working alliance with outstanding outside business
                  experts provide us with the capability and expertise needed to
                  help you achieve your desired business objectives.
                  <br />
                  <br />
                  Whatever your goals, to improve existing marketing campaigns
                  or design your comprehensive online media strategy from
                  scratch, we can be of help.
                </p>
              </div>
            </div>
          </div>
          <div class='col-lg-5'>
            <div className='card border-0'>
              <div className='text-center'>
                <img
                  src='https://i.stack.imgur.com/qq8AE.gif'
                  data-src='https://res.cloudinary.com/elonatech/image/upload/v1709919164/digitalPage/digital_market_2_ig15b2.jpg'
                  className='lazyload img-fluid'
                  alt='Digital Marketing'
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*======================================================= disruptive ==============================================================*/}
      <div className='container'>
        <div class='row justify-content-center mt-md-5  flex-column-reverse flex-lg-row align-items-center'>
          <div class='col-lg-7'>
            <div className='card border-0'>
              <div className=' text-end'>
                <p className='' style={{ textAlign: 'justify' }}>
                  Developing effective digital marketing in any market is a
                  tough, demanding, and technical undertaking. Hence the need to
                  work with a Nigerian internet marketing agency with the
                  experience, network, tools and know-how needed to achieve
                  market success.
                  <br />
                  <br />
                  Our encyclopedic knowledge of the Nigerian business
                  environment, in-house pool of stellar associates, and
                  strategic working alliance with outstanding outside business
                  experts provide us with the capability and expertise needed to
                  help you achieve your desired business objectives.
                  <br />
                  <br />
                  Whatever your goals, to improve existing marketing campaigns
                  or design your comprehensive online media strategy from
                  scratch, we can be of help.
                </p>
              </div>
            </div>
          </div>
          <div class='col-lg-5'>
            <div className='card border-0'>
              <div className='text-center'>
                <img
                  src='https://i.stack.imgur.com/qq8AE.gif'
                  data-src='https://res.cloudinary.com/elonatech/image/upload/v1709919164/digitalPage/digital_market_2_ig15b2.jpg'
                  className='lazyload img-fluid'
                  alt='Digital Marketing'
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*============================================================ carousel ============================================================*/}
      <div className='container-fluid' style={{ background: '#f8f8f8' }}>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={true}
          autoplay={{ delay: 3000 }}
        >
          {testimonies.map((testimony, index) => (
            <SwiperSlide key={index}>
              <div className='container mb-5'>
                <div className='row'>
                  <div className='col-md-4'>
                    <div className='mt-5'>
                      <div className='text-center'>
                        <img
                          src={testimony.imageUrl}
                          alt={testimony.name}
                          style={{ height: '15rem', borderRadius: '50%' }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className='col-md-8'>
                    <div className='d-flex pt-5'>
                      <img
                        src={quoteLeft}
                        className='img-fluid me-5'
                        style={{ height: '3rem' }}
                        alt=''
                      />

                      <h1 className='fw-bold pt-2'>{testimony.quote}</h1>
                    </div>
      {/*============================================================ carousel ============================================================*/}
      <div className='container-fluid' style={{ background: '#f8f8f8' }}>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={true}
          autoplay={{ delay: 3000 }}
        >
          {testimonies.map((testimony, index) => (
            <SwiperSlide key={index}>
              <div className='container mb-5'>
                <div className='row'>
                  <div className='col-md-4'>
                    <div className='mt-5'>
                      <div className='text-center'>
                        <img
                          src={testimony.imageUrl}
                          alt={testimony.name}
                          style={{ height: '15rem', borderRadius: '50%' }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className='col-md-8'>
                    <div className='d-flex pt-5'>
                      <img
                        src={quoteLeft}
                        className='img-fluid me-5'
                        style={{ height: '3rem' }}
                        alt=''
                      />

                      <h1 className='fw-bold pt-2'>{testimony.quote}</h1>
                    </div>

                    <p className='pt-3 pb-3' style={{ textAlign: 'justify' }}>
                      {testimony.testimonial}
                    </p>
                    <p className='pt-3 pb-3' style={{ textAlign: 'justify' }}>
                      {testimony.testimonial}
                    </p>

                    <div className='d-flex justify-content-between pb-5'>
                      <div>
                        <h6 className='text-uppercase fw-bold'>
                          {testimony.name}
                        </h6>
                        <span className='elementor-testimonial__title fs-6'>
                          {testimony.position}
                        </span>
                      </div>

                      <img
                        src={quoteRight}
                        className='img-fluid'
                        style={{ height: '3rem' }}
                        alt=''
                      />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
                    <div className='d-flex justify-content-between pb-5'>
                      <div>
                        <h6 className='text-uppercase fw-bold'>
                          {testimony.name}
                        </h6>
                        <span className='elementor-testimonial__title fs-6'>
                          {testimony.position}
                        </span>
                      </div>

                      <img
                        src={quoteRight}
                        className='img-fluid'
                        style={{ height: '3rem' }}
                        alt=''
                      />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/*======================================================================== our process =============================================*/}
      <div
        className='container-fluid bg-dark'
        style={{ marginBottom: '-18px' }}
      >
        <div className='container  bg-dark'>
          <h2 className='fw-bold text-center text-white pt-4'>
            Our Proven Process
          </h2>
          <ul className='d-flex row pt-5 g-3 justify-content-between list-unstyled'>
            <li className='col-6 col-md-4 col-lg-2 pt-md-5'>
              <Link to={'/seo'} className='text-decoration-none text-dark'>
                <div className='pt- pb-5'>
                  <div className='text-center'>
                    <img
                      src='https://img.freepik.com/free-vector/seo-background-design_1378-119.jpg?size=626&ext=jpg&ga=GA1.1.1903931542.1694762473&semt=ais'
                      className='img-fluid rounded-circle'
                      style={{ height: '180px', cursor: 'pointer' }}
                      alt=''
                    />
                    <h3
                      className='pt-4 text-white'
                      style={{ cursor: 'pointer' }}
                    >
                      Search Engine Optimization
                    </h3>
                    <p className='text-white'>
                      We use advanced methods to rank...
                    </p>
                  </div>
                </div>
              </Link>
            </li>
            <li className='col-6 col-md-4  col-lg-2 '>
              <Link to={'/social'} className='text-decoration-none text-dark'>
                <div className=''>
                  <div className='text-center'>
                    <img
                      src='https://img.freepik.com/free-photo/pile-3d-popular-social-media-logos_1379-881.jpg?size=626&ext=jpg&ga=GA1.1.1903931542.1694762473&semt=ais'
                      className='img-fluid rounded-circle'
                      style={{ height: '180px', cursor: 'pointer' }}
                      alt=''
                    />
                    <h3
                      className='pt-4 text-white'
                      style={{ cursor: 'pointer' }}
                    >
                      Social Media Marketing
                    </h3>
                    <p className='text-white'>
                      Most large and small business owners...
                    </p>
                  </div>
                </div>
              </Link>
            </li>
            <li className='col-6 col-md-4 col-lg-2 pt-md-5'>
              <Link to={'/ppc'} className='text-decoration-none text-dark'>
                <div className=''>
                  <div className='text-center'>
                    <img
                      src='https://img.freepik.com/free-vector/ppc-pay-per-click-flat-isometric_126523-1899.jpg?size=626&ext=jpg&ga=GA1.1.1903931542.1694762473&semt=sph'
                      className='img-fluid rounded-circle'
                      style={{ height: '180px', cursor: 'pointer' }}
                      alt=''
                    />
                    <h3
                      className='pt-4 text-white'
                      style={{ cursor: 'pointer' }}
                    >
                      PPC (pay-per-click)
                    </h3>
                    <p className='text-white'>
                      We use advanced methods to direct traffic...
                    </p>
                  </div>
                </div>
              </Link>
            </li>
            <li className='col-6 col-md-4 col-lg-2 pt-2'>
              <Link to={'/content'} className='text-decoration-none text-dark'>
                <div className=''>
                  <div className='text-center'>
                    <img
                      src='https://img.freepik.com/premium-photo/content-marketing-modish-online-business-ecommerce-marketing-strategy_31965-204823.jpg?size=626&ext=jpg&ga=GA1.1.1903931542.1694762473&semt=ais'
                      className='img-fluid rounded-circle'
                      style={{ height: '180px', cursor: 'pointer' }}
                      alt=''
                    />
                    <h3
                      className='pt-4 text-white'
                      style={{ cursor: 'pointer' }}
                    >
                      Content Marketing
                    </h3>
                    <p className='text-white'>
                      We create unique and useful content...
                    </p>
                  </div>
                </div>
              </Link>
            </li>
            <li className='col-6 col-md-4 col-lg-2 pt-md-5'>
              <Link to={'/mail'} className='text-decoration-none text-dark'>
                <div className=''>
                  <div className='text-center'>
                    <img
                      src='https://img.freepik.com/free-photo/message-online-chat-social-text-concept_53876-122734.jpg?size=626&ext=jpg&ga=GA1.1.1903931542.1694762473&semt=ais'
                      className='img-fluid rounded-circle ty'
                      style={{ height: '180px', cursor: 'pointer' }}
                      alt=''
                    />
                    <h3
                      className='pt-4 text-white'
                      style={{ cursor: 'pointer' }}
                    >
                      Email Marketing
                    </h3>
                    <p className='text-white'>
                      We help you connect to your prospects...
                    </p>
                  </div>
                </div>
              </Link>
            </li>
            <li className='col-6 col-md-4 col-lg-2'>
              <Link to={'/'} className='text-decoration-none text-dark'>
                <div className=''>
                  <div className='text-center'>
                    <img
                      src='https://img.freepik.com/premium-vector/affiliate-marketing-concept-illustration-idea-internet-ppc-business_613284-2009.jpg?size=626&ext=jpg&ga=GA1.1.1903931542.1694762473&semt=ais'
                      className='img-fluid rounded-circle ty'
                      style={{ height: '180px', cursor: 'pointer' }}
                      alt=''
                    />
                    <h3
                      className='pt-4 text-white'
                      style={{ cursor: 'pointer' }}
                    >
                      Affiliate marketing
                    </h3>
                    <p className='text-white'>
                      We have the tools to enable your website...
                    </p>
                  </div>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/*====================================================================== company rating ============================================*/}
      <div
        className='container-fluid mb-0 mt-0'
        style={{ background: '#34548c' }}
      >
        <div className='container pt-5 pb-4'>
          <ul className='d-flex row justify-content-between list-unstyled'>
            {statistics.map((stat, index) => (
              <li key={index} className='col-6 col-md-4 col-lg-2 pt-4'>
                <div className='text-center'>
                  <img
                    src={stat.image}
                    className='img-fluid'
                    style={stat.style}
                    alt=''
                  />
                  <h1 className='fs-1 fw-bold text-white pt-4'>{stat.value}</h1>
                  <h6 className='text-white'>{stat.description}</h6>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/*=================================================================== Irresistable ==================================================*/}
      <div className='container mt-5 mb-5'>
        <div className='row'>
          {adItems.map((item, index) => (
            <div className='col-6 col-md-2 p-3 mt-4' key={index}>
              <div className='text-center'>
                <img
                  src={item.src}
                  className='img-fluid'
                  style={item.style}
                  alt={item.alt}
                />
                <h6 className='pt-4 fs-4'>{item.label}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/*===================================================== e-commerce marketing =======================================================*/}
      <div className='container '>
        <div className='row mb-5'>
          <div className='col-lg-6'>
            <div className='card border-0'>
              <img
                src='https://img.freepik.com/premium-photo/words-with-arrows-pointing-funnel_1205-344.jpg?size=626&ext=jpg&ga=GA1.1.1903931542.1694762473&semt=ais'
                className='img-fluid'
                alt=''
              />
            </div>
          </div>
          <div className='col-lg-6'>
            <div className=''>
              <h2 className='pb-3 fw-bold pt-2'>Lead Generation Marketing</h2>
              <p className='fs-5 '>
                Lead generation has changed a lot over the years. Getting people
                interested in your business isn't as simple as it once was. Our
                marketing experts create modern, leading-edge marketing
                strategies producing the results your business needs now and in
                the long term.
              </p>
              <br />
              <p className='fs-5 '>
                Here are key elements and strategies involved in lead generation
                marketing:
              </p>
              <ul>
                <li>Content Marketing</li>
                <li>Search Engine Optimization (SEO)</li>
                <li>Social Media Marketing</li>
                <li>Email Marketing</li>
                <li>Landing Pages</li>
              </ul>
              <div className=''></div>
            </div>
          </div>
        </div>
      </div>
      <div className='container mb-5'>
        <div className='row flex-column-reverse flex-lg-row'>
          <div className='col-lg-6'>
            <div className='pt-3'>
              <div className=''>
                <h2 className='pb-3 fw-bold'>E-Commerce Marketing</h2>
                <p className='fs-5 '>
                  eCommerce has changed the way people shop and consume products
                  and services. There's a lot of competition in the eCommerce
                  space, so it's crucial to have a partner who keeps your
                  business goals top of mind and has the expertise to create a
                  competitive marketing strategy.
                </p>
                <p className='fs-5 '>
                  Here are key elements and strategies commonly used in
                  e-commerce marketing
                </p>
                <ul>
                  <li>Pay-Per-Click (PPC) Advertising</li>
                  <li>Influencer Marketing</li>
                  <li>Affiliate Marketing</li>
                  <li>Flash Sales and Promotions</li>
                  <li>Product Reviews and Ratings</li>
                </ul>
                <div className=''></div>
              </div>
            </div>
          </div>
          <div className='col-lg-6'>
            <div className='card pt-3 border-0'>
              <img
                src='https://img.freepik.com/premium-photo/people-internet-bank-online-shopping-technology-e-money-concept-happy-african-american-young-woman-lying-floor-with-laptop-computer-credit-card-home-internet-icons_380164-100647.jpg?size=626&ext=jpg&ga=GA1.1.1903931542.1694762473&semt=ais'
                className='img-fluid'
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
      {/*=============================================================== Get in touch ================================================ */}
      <Getintouch />
    </>
  )
      {/*======================================================================== our process =============================================*/}
      <div
        className='container-fluid bg-dark'
        style={{ marginBottom: '-18px' }}
      >
        <div className='container  bg-dark'>
          <h2 className='fw-bold text-center text-white pt-4'>
            Our Proven Process
          </h2>
          <ul className='d-flex row pt-5 g-3 justify-content-between list-unstyled'>
            <li className='col-6 col-md-4 col-lg-2 pt-md-5'>
              <Link to={'/seo'} className='text-decoration-none text-dark'>
                <div className='pt- pb-5'>
                  <div className='text-center'>
                    <img
                      src='https://img.freepik.com/free-vector/seo-background-design_1378-119.jpg?size=626&ext=jpg&ga=GA1.1.1903931542.1694762473&semt=ais'
                      className='img-fluid rounded-circle'
                      style={{ height: '180px', cursor: 'pointer' }}
                      alt=''
                    />
                    <h3
                      className='pt-4 text-white'
                      style={{ cursor: 'pointer' }}
                    >
                      Search Engine Optimization
                    </h3>
                    <p className='text-white'>
                      We use advanced methods to rank...
                    </p>
                  </div>
                </div>
              </Link>
            </li>
            <li className='col-6 col-md-4  col-lg-2 '>
              <Link to={'/social'} className='text-decoration-none text-dark'>
                <div className=''>
                  <div className='text-center'>
                    <img
                      src='https://img.freepik.com/free-photo/pile-3d-popular-social-media-logos_1379-881.jpg?size=626&ext=jpg&ga=GA1.1.1903931542.1694762473&semt=ais'
                      className='img-fluid rounded-circle'
                      style={{ height: '180px', cursor: 'pointer' }}
                      alt=''
                    />
                    <h3
                      className='pt-4 text-white'
                      style={{ cursor: 'pointer' }}
                    >
                      Social Media Marketing
                    </h3>
                    <p className='text-white'>
                      Most large and small business owners...
                    </p>
                  </div>
                </div>
              </Link>
            </li>
            <li className='col-6 col-md-4 col-lg-2 pt-md-5'>
              <Link to={'/ppc'} className='text-decoration-none text-dark'>
                <div className=''>
                  <div className='text-center'>
                    <img
                      src='https://img.freepik.com/free-vector/ppc-pay-per-click-flat-isometric_126523-1899.jpg?size=626&ext=jpg&ga=GA1.1.1903931542.1694762473&semt=sph'
                      className='img-fluid rounded-circle'
                      style={{ height: '180px', cursor: 'pointer' }}
                      alt=''
                    />
                    <h3
                      className='pt-4 text-white'
                      style={{ cursor: 'pointer' }}
                    >
                      PPC (pay-per-click)
                    </h3>
                    <p className='text-white'>
                      We use advanced methods to direct traffic...
                    </p>
                  </div>
                </div>
              </Link>
            </li>
            <li className='col-6 col-md-4 col-lg-2 pt-2'>
              <Link to={'/content'} className='text-decoration-none text-dark'>
                <div className=''>
                  <div className='text-center'>
                    <img
                      src='https://img.freepik.com/premium-photo/content-marketing-modish-online-business-ecommerce-marketing-strategy_31965-204823.jpg?size=626&ext=jpg&ga=GA1.1.1903931542.1694762473&semt=ais'
                      className='img-fluid rounded-circle'
                      style={{ height: '180px', cursor: 'pointer' }}
                      alt=''
                    />
                    <h3
                      className='pt-4 text-white'
                      style={{ cursor: 'pointer' }}
                    >
                      Content Marketing
                    </h3>
                    <p className='text-white'>
                      We create unique and useful content...
                    </p>
                  </div>
                </div>
              </Link>
            </li>
            <li className='col-6 col-md-4 col-lg-2 pt-md-5'>
              <Link to={'/mail'} className='text-decoration-none text-dark'>
                <div className=''>
                  <div className='text-center'>
                    <img
                      src='https://img.freepik.com/free-photo/message-online-chat-social-text-concept_53876-122734.jpg?size=626&ext=jpg&ga=GA1.1.1903931542.1694762473&semt=ais'
                      className='img-fluid rounded-circle ty'
                      style={{ height: '180px', cursor: 'pointer' }}
                      alt=''
                    />
                    <h3
                      className='pt-4 text-white'
                      style={{ cursor: 'pointer' }}
                    >
                      Email Marketing
                    </h3>
                    <p className='text-white'>
                      We help you connect to your prospects...
                    </p>
                  </div>
                </div>
              </Link>
            </li>
            <li className='col-6 col-md-4 col-lg-2'>
              <Link to={'/'} className='text-decoration-none text-dark'>
                <div className=''>
                  <div className='text-center'>
                    <img
                      src='https://img.freepik.com/premium-vector/affiliate-marketing-concept-illustration-idea-internet-ppc-business_613284-2009.jpg?size=626&ext=jpg&ga=GA1.1.1903931542.1694762473&semt=ais'
                      className='img-fluid rounded-circle ty'
                      style={{ height: '180px', cursor: 'pointer' }}
                      alt=''
                    />
                    <h3
                      className='pt-4 text-white'
                      style={{ cursor: 'pointer' }}
                    >
                      Affiliate marketing
                    </h3>
                    <p className='text-white'>
                      We have the tools to enable your website...
                    </p>
                  </div>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/*====================================================================== company rating ============================================*/}
      <div
        className='container-fluid mb-0 mt-0'
        style={{ background: '#34548c' }}
      >
        <div className='container pt-5 pb-4'>
          <ul className='d-flex row justify-content-between list-unstyled'>
            {statistics.map((stat, index) => (
              <li key={index} className='col-6 col-md-4 col-lg-2 pt-4'>
                <div className='text-center'>
                  <img
                    src={stat.image}
                    className='img-fluid'
                    style={stat.style}
                    alt=''
                  />
                  <h1 className='fs-1 fw-bold text-white pt-4'>{stat.value}</h1>
                  <h6 className='text-white'>{stat.description}</h6>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/*=================================================================== Irresistable ==================================================*/}
      <div className='container mt-5 mb-5'>
        <div className='row'>
          {adItems.map((item, index) => (
            <div className='col-6 col-md-2 p-3 mt-4' key={index}>
              <div className='text-center'>
                <img
                  src={item.src}
                  className='img-fluid'
                  style={item.style}
                  alt={item.alt}
                />
                <h6 className='pt-4 fs-4'>{item.label}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/*===================================================== e-commerce marketing =======================================================*/}
      <div className='container '>
        <div className='row mb-5'>
          <div className='col-lg-6'>
            <div className='card border-0'>
              <img
                src='https://img.freepik.com/premium-photo/words-with-arrows-pointing-funnel_1205-344.jpg?size=626&ext=jpg&ga=GA1.1.1903931542.1694762473&semt=ais'
                className='img-fluid'
                alt=''
              />
            </div>
          </div>
          <div className='col-lg-6'>
            <div className=''>
              <h2 className='pb-3 fw-bold pt-2'>Lead Generation Marketing</h2>
              <p className='fs-5 '>
                Lead generation has changed a lot over the years. Getting people
                interested in your business isn't as simple as it once was. Our
                marketing experts create modern, leading-edge marketing
                strategies producing the results your business needs now and in
                the long term.
              </p>
              <br />
              <p className='fs-5 '>
                Here are key elements and strategies involved in lead generation
                marketing:
              </p>
              <ul>
                <li>Content Marketing</li>
                <li>Search Engine Optimization (SEO)</li>
                <li>Social Media Marketing</li>
                <li>Email Marketing</li>
                <li>Landing Pages</li>
              </ul>
              <div className=''></div>
            </div>
          </div>
        </div>
      </div>
      <div className='container mb-5'>
        <div className='row flex-column-reverse flex-lg-row'>
          <div className='col-lg-6'>
            <div className='pt-3'>
              <div className=''>
                <h2 className='pb-3 fw-bold'>E-Commerce Marketing</h2>
                <p className='fs-5 '>
                  eCommerce has changed the way people shop and consume products
                  and services. There's a lot of competition in the eCommerce
                  space, so it's crucial to have a partner who keeps your
                  business goals top of mind and has the expertise to create a
                  competitive marketing strategy.
                </p>
                <p className='fs-5 '>
                  Here are key elements and strategies commonly used in
                  e-commerce marketing
                </p>
                <ul>
                  <li>Pay-Per-Click (PPC) Advertising</li>
                  <li>Influencer Marketing</li>
                  <li>Affiliate Marketing</li>
                  <li>Flash Sales and Promotions</li>
                  <li>Product Reviews and Ratings</li>
                </ul>
                <div className=''></div>
              </div>
            </div>
          </div>
          <div className='col-lg-6'>
            <div className='card pt-3 border-0'>
              <img
                src='https://img.freepik.com/premium-photo/people-internet-bank-online-shopping-technology-e-money-concept-happy-african-american-young-woman-lying-floor-with-laptop-computer-credit-card-home-internet-icons_380164-100647.jpg?size=626&ext=jpg&ga=GA1.1.1903931542.1694762473&semt=ais'
                className='img-fluid'
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
      {/*=============================================================== Get in touch ================================================ */}
      <Getintouch />
    </>
  )
}

export default Digital
export default Digital
