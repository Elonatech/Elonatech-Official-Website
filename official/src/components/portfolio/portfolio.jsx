import './css/portfolio.css'
import computerHardware from './captions/projects/engineer.png'
import networkEngineering from './captions/projects/Adminstrator.png'
import structuredCabling from './captions/projects/two.jpg'
import digitalMarketing from './captions/projects/group_discussion.png'

// why choose us
import MD from './captions/md_new_jnp7nj.jpg'
import { Helmet } from 'react-helmet-async'

const scrollToHeader = () => {
  let tab_lists = document.querySelectorAll('.tabs_list ul li')
  let tab_items = document.querySelectorAll('.tab_item')

  tab_lists.forEach(function (list) {
    list.addEventListener('mouseover', function () {
      var tab_data = list.getAttribute('data-tc')

      tab_lists.forEach(function (list) {
        list.classList.remove('active')
      })
      list.classList.add('active')
      tab_items.forEach(function (item) {
        var tab_class = item.getAttribute('class').split(' ')
        if (tab_class.includes(tab_data)) {
          item.style.display = 'block'
        } else {
          item.style.display = 'none'
        }
      })
    })
  })
}

const Portfolio = () => {
  const services = [
    {
      title: 'Computer Hardware Projects',
      description:
        'Your business works when your hardware works. While computer hardware configurations vary widely, we have worked on major categories of hardware for clients in the Medical Science, Financial, Telecoms, Aviation, ICT, Government & NGOs, etc.',
      image: computerHardware
    },
    {
      title: 'Network Engineering Projects',
      description:
        'We implement and design both complex and simple data/voice LANs for all types of organizations. Implementing a well-designed, secured enterprise network and utilizing the right combination of IT solutions so as to drive that business to the desired level.',
      image: networkEngineering
    },
    {
      title: 'Infrastructure & Integration',
      description:
        "We provide the infrastructure that supports the performance of organizations' network. It is the most critical part of your voice and data network. Choosing a qualified provider is a critical decision. We use only high-end quality products in our structured wiring solutions.",
      image: structuredCabling
    },
    {
      title: 'Digital Marketing Campaigns',
      description:
        'Developing effective digital marketing in any market is tough, demanding, & technical. We achieve this by working closely with clients to craft & deliver successful & oriented online marketing strategies which integrate customer needs, business objectives & technology.',
      image: digitalMarketing
    }
  ]

  return (
    <>
      <Helmet>
        <title>Our Portfolio - Web Development, Network Engineering & Digital Marketing Solutions | Tech Solutions</title>
        <meta
          name='description'
          content='From website development, Computer Hardware Projects Network Engineering Infrastructure & System Integration Digital Marketing Campaigns
          digital marketing campaigns, network management to graphics etc... We pride ourselves to getting it done 24/7 Support '
        />
        <link rel='canonical' href='https://elonatech.com.ng/portfolio' />
      </Helmet>

      {/*================================================================ header ===========================================================*/}
      <div class='container-fluid our-portfolio-section'>
        <div class='text-content'>
          <h2 class='wow zoomIn' data-wow-delay='0.1s'>
            Our Portfolio
          </h2>
          <h5 data-wow-delay='0.2s'>
            At the heart of everything we do is a passion to deliver success
            stories.
          </h5>
          <p class='lead' data-wow-delay='0.2s'>
            From website development, digital marketing campaigns, network
            management to graphics etc... We pride ourselves to getting it
            done!!
          </p>
        </div>
      </div>

      {/*============================================= why choose us ======================================================================*/}
      <div class='container py-5'>
        <div
          class=' text-center position-relative pb-3 mb-5'
          style={{ minWidth: '100px' }}
        >
          <h3 class='fw-bold  text-uppercase' style={{ color: '#34548c' }}>
            Why Choose Us
          </h3>
          <h2 class='mb-0 fw-bold'>
            We Are Here to Grow Your Business <br /> Exponentially
          </h2>
        </div>
        <div class='row g-5'>
          <div class='col-lg-4'>
            <div class='row g-5'>
              <div
                class='col-12 col-md-6 col-lg-12 wow zoomIn'
                data-wow-delay='0.2s'
              >
                <div
                  class='rounded d-flex align-items-center justify-content-center mb-3'
                  style={{
                    width: '60px',
                    height: '60px',
                    backgroundColor: '#34548c'
                  }}
                >
                  <i class='fa fa-cubes text-white'></i>
                </div>
                <h4>Best In Industry</h4>
                <p class='mb-0'>
                  We are committed to finding advanced solutions to problems and
                  igniting the world with smarter and brighter solutions
                </p>
              </div>
              <div
                class='col-12 col-md-6 col-lg-12 wow zoomIn'
                data-wow-delay='0.6s'
              >
                <div
                  class='rounded d-flex align-items-center justify-content-center mb-3'
                  style={{
                    width: '60px',
                    height: '60px',
                    backgroundColor: '#34548c'
                  }}
                >
                  <i class='fa fa-award text-white'></i>
                </div>
                <h4>Our Work Speaks For Itself</h4>
                <p class='mb-0'>
                  Nothing speaks as loud as continuously executing at a high
                  level. It shows we have a well-established process. It shows
                  we can manage your brand.
                </p>
              </div>
            </div>
          </div>
          <div
            class='col-lg-4  wow zoomIn'
            data-wow-delay='0.9s'
            style={{ minHeight: '350px' }}
          >
            <div class='position-relative h-100'>
              <img
                class='position-absolute w-100 h-100 rounded wow zoomIn lazyload'
                data-wow-delay='0.1s'
                data-src={MD}
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
          <div class='col-lg-4'>
            <div class='row g-5'>
              <div
                class='col-12 col-md-6 col-lg-12 wow zoomIn'
                data-wow-delay='0.4s'
              >
                <div
                  class='rounded d-flex align-items-center justify-content-center mb-3'
                  style={{
                    width: '60px',
                    height: '60px',
                    backgroundColor: '#34548c'
                  }}
                >
                  <i class='fa fa-users-cog text-white'></i>
                </div>
                <h4>Professional Staff</h4>
                <p class='mb-0'>
                  We are typically responsible for providing specialized
                  services or expert professional solutions to organizations
                </p>
              </div>
              <div
                class='col-12 col-md-6 col-lg-12 wow zoomIn'
                data-wow-delay='0.8s'
              >
                <div
                  class='rounded d-flex align-items-center justify-content-center mb-3'
                  style={{
                    width: '60px',
                    height: '60px',
                    backgroundColor: '#34548c'
                  }}
                >
                  <i class='fa fa-phone-alt text-white'></i>
                </div>
                <h4>24/7 Support</h4>
                <p class='mb-0'>
                  Our support team is available round the clock to assist
                  customers with their queries and concerns.{' '}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*======================================================= feature ===================================================================*/}
      <section id='portfolio' class='portfolio'>
        <h2 className='fw-bold text-center mb-3'>
          Some of The Brands We Manage
        </h2>
        <div class='container mb-5'>
          <ul class='nav nav-tabs row bg-secondary  d-flex'>
            <li class='nav-item col-6 col-md-2 '>
              <a
                class='nav-link computer-bg active show'
                data-bs-toggle='tab'
                data-bs-target='#tab-1'
              >
                <h5 className='fw-bold'>Remaben</h5>
              </a>
            </li>
            <li class='nav-item  col-6 col-md-2 '>
              <a
                class='nav-link computer-bg'
                data-bs-toggle='tab'
                data-bs-target='#tab-2'
              >
                <h5 className='fw-bold'>Elonatech</h5>
              </a>
            </li>
            <li class='nav-item  col-6 col-md-2 '>
              <a
                class='nav-link computer-bg'
                data-bs-toggle='tab'
                data-bs-target='#tab-3'
              >
                <h5 className='fw-bold'>Safebrooks</h5>
              </a>
            </li>
            <li class='nav-item  col-6 col-md-2 '>
              <a
                class='nav-link computer-bg'
                data-bs-toggle='tab'
                data-bs-target='#tab-4'
              >
                <h5 className='fw-bold'>Ozone</h5>
              </a>
            </li>
            <li class='nav-item  col-6 col-md-2 '>
              <a
                class='nav-link computer-bg'
                data-bs-toggle='tab'
                data-bs-target='#tab-5'
              >
                <h5 className='fw-bold'>Western</h5>
              </a>
            </li>
            <li class='nav-item  col-6 col-md-2 '>
              <a
                class='nav-link computer-bg'
                data-bs-toggle='tab'
                data-bs-target='#tab-6'
              >
                <h5 className='fw-bold'>Pfn</h5>
              </a>
            </li>
          </ul>

          <div class='tab-content ' data-wow-delay='0.8s'>
            {/*============================================================= Remaben =================================================*/}
            <div class='tab-pane active show' id='tab-1'>
              <div class='row gy-4'>
                <div class='col-lg-12 order-2 order-lg-1'>
                  <div className='container mb-5'>
                    <div className='row g-0'>
                      <div className='col-md-2'>
                        <div className='card rounded-0'>
                          <div class='ts_body '>
                            <div class='tabs_list mt-3 mb-5'>
                              <ul class=' text-center mb-5 pt-4 p-2'>
                                <li
                                  data-tc='tab_item_1'
                                  class='dropdown-item mt-2 p-3 col-6 col-md-4 col-lg-2  active'
                                >
                                  {' '}
                                  <h6>Web Design</h6>
                                </li>
                                <li
                                  data-tc='tab_item_2'
                                  onMouseEnter={scrollToHeader}
                                  class='dropdown-item col-6 col-md-4 col-lg-2 mt-2 p-3 pe-5'
                                >
                                  <h6>Motion Graphic</h6>
                                </li>
                                <li
                                  data-tc='tab_item_3'
                                  class='dropdown-item mt-2 p-4 col-6 col-md-4 col-lg-2 ps-1'
                                >
                                  <h6>Digital Marketing</h6>
                                </li>
                                <li
                                  data-tc='tab_item_4'
                                  class='dropdown-item col-6 mt-2 p-3 col-6 col-md-4 col-lg-2'
                                  style={{ marginBottom: '21px' }}
                                >
                                  <h6>Branding</h6>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='col-md-10'>
                        <div className='card rounded-0'>
                          <div class='ts_body'>
                            <div class='tabs_content'>
                              {/*============================================================================= web ===========================================================*/}
                              <div
                                class='tab_body'
                                style={{ overflow: 'auto', height: '30rem' }}
                              >
                                <div
                                  class='tab_item tab_item_1'
                                  style={{ minHeight: '100px' }}
                                >
                                  <div className='row'>
                                    <div className='col-md-12'>
                                      <div className='card'>
                                        <img
                                          data-src='https://res.cloudinary.com/elonatech/image/upload/v1709831302/portfolioPage/projects/remaben/web/remeban_new_j3fijv.jpg'
                                          alt=''
                                          className='img-fluid lazyload'
                                        />
                                      </div>
                                      ``
                                    </div>
                                    <div className='col-md-7 mt-5'>
                                      <div className=''>
                                        <img
                                          data-src='https://res.cloudinary.com/elonatech/image/upload/v1709831561/portfolioPage/projects/remaben/web/image_13_.885229344d4f7190611a_1_pzmzlf.png'
                                          className='img-fluid shadow lazyload'
                                          alt=''
                                        />
                                      </div>
                                    </div>
                                    <div className='col-md-5 mt-5'>
                                      <div className='shadow'>
                                        <img
                                          data-src='https://res.cloudinary.com/elonatech/image/upload/v1709831554/portfolioPage/projects/remaben/web/remaben-3333.6bf2a5e13755b8d3a90c_kqw08s.jpg'
                                          className='img-fluid rounded lazyload shadow'
                                          alt=''
                                        />
                                      </div>
                                    </div>
                                    <div className='col-md-6 mt-5'>
                                      <div className=''>
                                        <img
                                          data-src='https://res.cloudinary.com/elonatech/image/upload/v1709831547/portfolioPage/projects/remaben/web/web2.711211b78ebdaad7caa2_1_qsyknu.png'
                                          className='img-fluid rounded lazyload shadow'
                                          alt=''
                                        />
                                      </div>
                                    </div>
                                    <div className='col-md-6 mt-5'>
                                      <div className=''>
                                        <img
                                          data-src='https://res.cloudinary.com/elonatech/image/upload/v1709831539/portfolioPage/projects/remaben/web/web3.48503773bb5890237fcc_1_o5jiqs.png'
                                          className='img-fluid rounded lazyload shadow'
                                          alt=''
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/*================================================================= Motion graphics ===========================================================*/}
                                <div
                                  class='tab_item tab_item_2'
                                  style={{ display: 'none' }}
                                >
                                  <div className='text-center'>
                                    <iframe
                                      width='905'
                                      height='450'
                                      className='motionGraphicVideo lazyload'
                                      data-src='https://www.youtube.com/embed/RKEwt_8Kk6A?si=DhPg9CQUn6lddURC'
                                      title='YouTube video player'
                                      frameborder='0'
                                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                                      allowfullscreen
                                    ></iframe>
                                  </div>
                                </div>

                                {/*=============================================================== Digital marketing ===========================================================*/}
                                <div
                                  class='tab_item tab_item_3'
                                  style={{ display: 'none' }}
                                >
                                  <div className='container'>
                                    <div className='row'>
                                      <div className='col-md-4'>
                                        <div className='shadow'>
                                          <img
                                            data-src='https://res.cloudinary.com/elonatech/image/upload/v1709831750/portfolioPage/projects/remaben/digital/digital6.e32f6a20512bf7f4a446_lsoumk.jpg'
                                            className='img-fluid lazyload rounded'
                                            alt=''
                                          />
                                        </div>
                                      </div>
                                      <div className='col-md-4'>
                                        <div className='shadow'>
                                          <img
                                            data-src='https://res.cloudinary.com/elonatech/image/upload/v1709831743/portfolioPage/projects/remaben/digital/digital5.5c6d288e85583e24f034_wlf2zm.jpg'
                                            className='img-fluid lazyload rounded'
                                            alt=''
                                          />
                                        </div>
                                      </div>
                                      <div className='col-md-4'>
                                        <div className='shadow'>
                                          <img
                                            data-src='https://res.cloudinary.com/elonatech/image/upload/v1709831735/portfolioPage/projects/remaben/digital/digital4.1e018a9d212f6c1b8353_nemzrv.jpg'
                                            className='img-fluid lazyload rounded'
                                            alt=''
                                          />
                                        </div>
                                      </div>
                                      <div className='col-md-4 mt-4'>
                                        <div className='shadow'>
                                          <img
                                            data-src='https://res.cloudinary.com/elonatech/image/upload/v1709831727/portfolioPage/projects/remaben/digital/digital3.b36a8219b5ed4793c918_tbfjkd.jpg'
                                            className='img-fluid lazyload rounded'
                                            alt=''
                                          />
                                        </div>
                                      </div>
                                      <div className='col-md-4 mt-4'>
                                        <div className='shadow'>
                                          <img
                                            data-src='https://res.cloudinary.com/elonatech/image/upload/v1709831719/portfolioPage/projects/remaben/digital/digital2.ac6b48faa0f11021e53d_l31c1t.jpg'
                                            className='img-fluid lazyload rounded'
                                            alt=''
                                          />
                                        </div>
                                      </div>
                                      <div className='col-md-4 mt-4'>
                                        <div className='shadow'>
                                          <img
                                            data-src='https://res.cloudinary.com/elonatech/image/upload/v1709831710/portfolioPage/projects/remaben/digital/digital1.4511921743dfd25fb4c0_cmnsof.jpg'
                                            className='img-fluid lazyload rounded'
                                            alt=''
                                          />
                                        </div>
                                      </div>
                                      <div className='col-md-4 mt-4'>
                                        <div className='shadow'>
                                          <img
                                            data-src='https://res.cloudinary.com/elonatech/image/upload/v1709831702/portfolioPage/projects/remaben/digital/sabddf111_tgroxq.png'
                                            className='img-fluid lazyload rounded'
                                            alt=''
                                          />
                                        </div>
                                      </div>
                                      <div className='col-md-4 mt-4'>
                                        <div className='shadow'>
                                          <img
                                            data-src='https://res.cloudinary.com/elonatech/image/upload/v1709831694/portfolioPage/projects/remaben/digital/digital7.ef921aab252084237a7c_qd7ai9.jpg'
                                            className='img-fluid lazyload rounded'
                                            alt=''
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/*============================================================ Branding =======================================================================*/}
                                <div
                                  class='tab_item tab_item_4'
                                  style={{ display: 'none' }}
                                >
                                  <div className='container'>
                                    <div className='row'>
                                      <div className='col-md-4'>
                                        <div className='shadow'>
                                          <img
                                            data-src='https://res.cloudinary.com/elonatech/image/upload/v1709830178/portfolioPage/projects/remaben/branding/Remaben_-_Table_calender_2_a4tsuy.jpg'
                                            className='img-fluid lazyload rounded'
                                            alt=''
                                          />
                                        </div>
                                      </div>
                                      <div className='col-md-4'>
                                        <div className='shadow'>
                                          <img
                                            data-src='https://res.cloudinary.com/elonatech/image/upload/v1709830198/portfolioPage/projects/remaben/branding/Pin_badage_jxqkmh.jpg'
                                            className='img-fluid lazyload rounded'
                                            alt=''
                                          />
                                        </div>
                                      </div>
                                      <div className='col-md-4'>
                                        <div className='shadow'>
                                          <img
                                            data-src='https://res.cloudinary.com/elonatech/image/upload/v1709830185/portfolioPage/projects/remaben/branding/Remaben_-_Table_calender_1_jvnleo.jpg'
                                            className='img-fluid lazyload rounded'
                                            alt=''
                                          />
                                        </div>
                                      </div>
                                      <div className='col-md-4 mt-4'>
                                        <div className='shadow'>
                                          <img
                                            data-src='https://res.cloudinary.com/elonatech/image/upload/v1709830171/portfolioPage/projects/remaben/branding/Lab_Coat_qqwzdc.jpg'
                                            className='img-fluid lazyload rounded'
                                            alt=''
                                          />
                                        </div>
                                      </div>
                                      <div className='col-md-4 mt-4'>
                                        <div className='shadow'>
                                          <img
                                            data-src='https://res.cloudinary.com/elonatech/image/upload/v1709830164/portfolioPage/projects/remaben/branding/T_shirt_-_2_k2pxza.jpg'
                                            className='img-fluid lazyload rounded'
                                            alt=''
                                          />
                                        </div>
                                      </div>
                                      <div className='col-md-4 mt-4'>
                                        <div className='shadow'>
                                          <img
                                            data-src='https://res.cloudinary.com/elonatech/image/upload/v1709830157/portfolioPage/projects/remaben/branding/T_shirt_jqsvtz.jpg'
                                            className='img-fluid lazyload rounded'
                                            alt=''
                                          />
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
                </div>
              </div>
            </div>
            {/*================================================================== Elonatech ================================================*/}
            <div class='tab-pane' id='tab-2'>
              <div class='row gy-4'>
                <div class='col-lg-12 order-2 order-lg-1'>
                  <div className='container mb-5'>
                    <div className='row g-0'>
                      <div className='col-md-2'>
                        <div className='card rounded-0'>
                          <div class='ts_body'>
                            <div class='tabs_list mt-3 mb-5'>
                              <ul class=' text-center mb-5 pt-4 p-2'>
                                <li
                                  data-tc='tab_item_1'
                                  class='dropdown-item mt-2 p-3 active'
                                >
                                  {' '}
                                  <h6>Web Design</h6>
                                </li>
                                <li
                                  data-tc='tab_item_2'
                                  onMouseEnter={scrollToHeader}
                                  class='dropdown-item mt-2 p-3 pe-5'
                                >
                                  <h6>Motion Graphic</h6>
                                </li>
                                <li
                                  data-tc='tab_item_3'
                                  onMouseEnter={scrollToHeader}
                                  class='dropdown-item mt-2 p-4 col-6 col-md-4 col-lg-2 ps-1'
                                >
                                  <h6>Digital Marketing</h6>
                                </li>
                                <li
                                  data-tc='tab_item_4'
                                  class='dropdown-item mt-2 p-3'
                                  style={{ marginBottom: '37px' }}
                                >
                                  <h6>Branding</h6>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='col-md-10'>
                        <div className='card rounded-0'>
                          <div class='ts_body'>
                            <div class='tabs_content'>
                              <div
                                class='tab_body '
                                style={{ overflow: 'auto', height: '30rem' }}
                              >
                                {/*========================================================== web ===========================================================*/}
                                <div
                                  class='tab_item tab_item_1'
                                  style={{ minHeight: '100px' }}
                                >
                                  <div className='row'>
                                    <div className='col-md-12 mb-3 '>
                                      <div className='shadow'>
                                        <img
                                          data-src='https://res.cloudinary.com/elonatech/image/upload/v1709829321/portfolioPage/projects/elonatech/web/2024_template_for_web_elonatech_mrl2wc.jpg'
                                          className='img-fluid lazyload rounded'
                                          alt=''
                                        />
                                      </div>
                                    </div>
                                    <div className='col-md-12'>
                                      <div className='shadow'>
                                        <img
                                          data-src='https://res.cloudinary.com/elonatech/image/upload/v1709829474/portfolioPage/projects/elonatech/web/poty-2_tld6ig.png'
                                          alt=''
                                          className='img-fluid lazyload'
                                        />
                                      </div>
                                    </div>
                                    <div className='col-md-6 mt-5'>
                                      <div className='shadow'>
                                        <img
                                          data-src='https://res.cloudinary.com/elonatech/image/upload/v1709829328/portfolioPage/projects/elonatech/web/Untitled-2_lbufe5.jpg'
                                          className='img-fluid lazyload rounded'
                                          alt=''
                                        />
                                      </div>
                                    </div>
                                    <div className='col-md-6 mt-5'>
                                      <div className='shadow'>
                                        <img
                                          data-src='https://res.cloudinary.com/elonatech/image/upload/v1709829315/portfolioPage/projects/elonatech/web/3_fuajze.jpg'
                                          className='img-fluid lazyload rounded'
                                          alt=''
                                        />
                                      </div>
                                    </div>
                                    <div className='col-md-12  mt-5'>
                                      <div className='shadow'>
                                        <img
                                          data-src='https://res.cloudinary.com/elonatech/image/upload/v1709829335/portfolioPage/projects/elonatech/web/1_rfm6ch.jpg'
                                          className='img-fluid lazyload rounded'
                                          alt=''
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                {/*========================================================== motion graphics ==================================================*/}
                                <div
                                  class='tab_item tab_item_2'
                                  style={{ display: 'none' }}
                                >
                                  <div className='text-center'>
                                    <iframe
                                      width='905'
                                      height='450'
                                      className='motionGraphicVideo lazyload'
                                      data-src='https://www.youtube.com/embed/7p6FQeZEPNQ?si=PKt7zweMxDnT8Wpj'
                                      title='YouTube video player'
                                      frameborder='0'
                                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                                      allowfullscreen
                                    ></iframe>

                                    <iframe
                                      width='905'
                                      height='450'
                                      className='motionGraphicVideo lazyload'
                                      data-src='https://www.youtube.com/embed/hecFq98Uoq4?si=cIX9m7bz9KpuPfmi'
                                      title='YouTube video player'
                                      frameborder='0'
                                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                                      allowfullscreen
                                    ></iframe>

                                    <iframe
                                      width='905'
                                      height='450'
                                      className='motionGraphicVideo lazyload'
                                      data-src='https://www.youtube.com/embed/EmkNTtbWmic?si=_tz-YlXUrNiL2xsp'
                                      title='YouTube video player'
                                      frameborder='0'
                                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                                      allowfullscreen
                                    ></iframe>

                                    <iframe
                                      width='905'
                                      height='450'
                                      className='motionGraphicVideo lazyload'
                                      data-src='https://www.youtube.com/embed/jE_-CUX0QOI?si=jkP_prwmyLKuu136'
                                      title='YouTube video player'
                                      frameborder='0'
                                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                                      allowfullscreen
                                    ></iframe>

                                    <iframe
                                      width='905'
                                      height='450'
                                      className='motionGraphicVideo lazyload'
                                      data-src='https://www.youtube.com/embed/ACa2bWgmYr4?si=pEEHl3LudvJIFkzh'
                                      title='YouTube video player'
                                      frameborder='0'
                                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                                      allowfullscreen
                                    ></iframe>
                                  </div>
                                </div>
                                {/*================================================================== Digital marketing ===============================================*/}
                                <div
                                  class='tab_item tab_item_3'
                                  style={{ display: 'none' }}
                                >
                                  <div className='container'>
                                    <div className='row'>
                                      <div className='col-md-4'>
                                        <div className='shadow'>
                                          <img
                                            data-src='https://res.cloudinary.com/elonatech/image/upload/v1709895785/portfolioPage/projects/elonatech/digital/jpeg-optimizer_digital-marketing-elonatech-555_gaobcl.jpg'
                                            className='img-fluid  lazyload rounded'
                                            alt=''
                                          />
                                        </div>
                                      </div>
                                      <div className='col-md-4'>
                                        <div className='shadow'>
                                          <img
                                            data-src='https://res.cloudinary.com/elonatech/image/upload/v1709895785/portfolioPage/projects/elonatech/digital/jpeg-optimizer_digital-marketing-elonatech-555_gaobcl.jpg'
                                            className='img-fluid lazyload rounded'
                                            alt=''
                                          />
                                        </div>
                                      </div>
                                      <div className='col-md-4'>
                                        <div className='shadow'>
                                          <img
                                            data-src='https://res.cloudinary.com/elonatech/image/upload/v1709895783/portfolioPage/projects/elonatech/digital/jpeg-optimizer_elonatech-bulk-sales_duyquu.jpg'
                                            className='img-fluid lazyload rounded'
                                            alt=''
                                          />
                                        </div>
                                      </div>
                                      <div className='col-md-4 mt-4'>
                                        <div className='shadow'>
                                          <img
                                            data-src='https://res.cloudinary.com/elonatech/image/upload/v1709895782/portfolioPage/projects/elonatech/digital/jpeg-optimizer_elonatech-website-design_qbtvo8.jpg'
                                            className='img-fluid lazyload rounded'
                                            alt=''
                                          />
                                        </div>
                                      </div>
                                      <div className='col-md-4 mt-4'>
                                        <div className='shadow'>
                                          <img
                                            data-src='https://res.cloudinary.com/elonatech/image/upload/v1709895781/portfolioPage/projects/elonatech/digital/jpeg-optimizer_Network_Administration_Implementation_k1ek5g.jpg'
                                            className='img-fluid lazyload rounded'
                                            alt=''
                                          />
                                        </div>
                                      </div>
                                      <div className='col-md-4 mt-4'>
                                        <div className='shadow'>
                                          <img
                                            data-src='https://res.cloudinary.com/elonatech/image/upload/v1709895780/portfolioPage/projects/elonatech/digital/jpeg-optimizer_Specialized_Computer_Repair_Service_fepuxl.png'
                                            className='img-fluid lazyload rounded'
                                            alt=''
                                          />
                                        </div>
                                      </div>
                                      <div className='col-md-4 mt-4'>
                                        <div className='shadow'>
                                          <img
                                            data-src='https://res.cloudinary.com/elonatech/image/upload/v1709895780/portfolioPage/projects/elonatech/digital/jpeg-optimizer_We_are_the_p1s6xz.png'
                                            className='img-fluid lazyload rounded'
                                            alt=''
                                          />
                                        </div>
                                      </div>
                                      <div className='col-md-4 mt-4'>
                                        <div className='shadow'>
                                          <img
                                            data-src='https://res.cloudinary.com/elonatech/image/upload/v1709895780/portfolioPage/projects/elonatech/digital/jpeg-optimizer_Wwebsite-2-elonatech-new_vy0cm9.jpg'
                                            className='img-fluid lazyload rounded'
                                            alt=''
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/*=========================================================================== branding =============================================================*/}
                                <div
                                  class='tab_item tab_item_4'
                                  style={{ display: 'none' }}
                                >
                                  <div className='container'>
                                    <div className='row'>
                                      <div className='col-md-4'>
                                        <div className=''>
                                          <img
                                            data-src='https://res.cloudinary.com/elonatech/image/upload/v1709895186/portfolioPage/projects/elonatech/branding/jpeg-optimizer_bangetelo2_dx0kcc.jpg'
                                            className='img-fluid lazyload rounded'
                                            alt=''
                                          />
                                        </div>
                                      </div>
                                      <div className='col-md-4'>
                                        <div className=''>
                                          <img
                                            data-src='https://res.cloudinary.com/elonatech/image/upload/v1709895185/portfolioPage/projects/elonatech/branding/jpeg-optimizer_elona_jersey_pwi8pu.jpg'
                                            className='img-fluid lazyload rounded'
                                            alt=''
                                          />
                                        </div>
                                      </div>
                                      <div className='col-md-4'>
                                        <div className=''>
                                          <img
                                            src='https://res.cloudinary.com/elonatech/image/upload/v1709895184/portfolioPage/projects/elonatech/branding/jpeg-optimizer_elona_kit_bjtbeb.jpg'
                                            className='img-fluid lazyload rounded'
                                            alt=''
                                          />
                                        </div>
                                      </div>
                                      <div className='col-md-4 mt-4'>
                                        <div className=''>
                                          <img
                                            data-src='https://res.cloudinary.com/elonatech/image/upload/v1709895183/portfolioPage/projects/elonatech/branding/jpeg-optimizer_elona_paper_bag_jhrcpy.jpg'
                                            className='img-fluid lazyload rounded'
                                            alt=''
                                          />
                                        </div>
                                      </div>
                                      <div className='col-md-4 mt-4'>
                                        <div className=''>
                                          <img
                                            data-src='https://res.cloudinary.com/elonatech/image/upload/v1709895174/portfolioPage/projects/elonatech/branding/jpeg-optimizer_elona_sationaries_brand_sr9ook.jpg'
                                            className='img-fluid lazyload rounded'
                                            alt=''
                                          />
                                        </div>
                                      </div>
                                      <div className='col-md-4 mt-4'>
                                        <div className=''>
                                          <img
                                            data-src='https://res.cloudinary.com/elonatech/image/upload/v1709895173/portfolioPage/projects/elonatech/branding/jpeg-optimizer_elonatech_Business_cards_preview_gbfgas.jpg'
                                            className='img-fluid lazyload rounded'
                                            alt=''
                                          />
                                        </div>
                                      </div>
                                      <div className='col-md-4 mt-4'>
                                        <div className=''>
                                          <img
                                            data-src='https://res.cloudinary.com/elonatech/image/upload/v1709895174/portfolioPage/projects/elonatech/branding/jpeg-optimizer_cup_jokvgp.png'
                                            className='img-fluid lazyload rounded'
                                            alt=''
                                          />
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
                </div>
              </div>
            </div>
            {/*================================================================ Safebrook ==================================================*/}
            <div class='tab-pane' id='tab-3'>
              <div class='row gy-4'>
                <div class='col-lg-12 order-2 order-lg-1'>
                  <div className='container mb-5'>
                    <div className='row g-0'>
                      <div className='col-md-2'>
                        <div className='card rounded-0'>
                          <div class='ts_body pt-4 mb-5'>
                            <div class='tabs_list'>
                              <ul class=' text-center mb-5 p-2'>
                                <li
                                  data-tc='tab_item_1'
                                  class='dropdown-item mt-2 active p-3 '
                                >
                                  {' '}
                                  <h6>Web Design</h6>
                                </li>
                                <li
                                  data-tc='tab_item_2'
                                  onMouseEnter={scrollToHeader}
                                  class='dropdown-item mt-2 p-3 pe-5'
                                >
                                  <h6>Motion Graphic</h6>
                                </li>
                                <li
                                  data-tc='tab_item_3'
                                  class='dropdown-item mt-2 p-4 ps-1'
                                >
                                  <h6>Digital Marketing</h6>
                                </li>
                                <li
                                  data-tc='tab_item_4'
                                  class='dropdown-item mt-2 p-3'
                                  style={{ marginBottom: '29px' }}
                                >
                                  <h6>Branding</h6>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='col-md-10'>
                        <div className='card rounded-0'>
                          <div class='ts_body'>
                            <div class='tabs_content'>
                              <div
                                class='tab_body'
                                style={{ overflow: 'auto', height: '30rem' }}
                              >
                                <div
                                  class='tab_item tab_item_1'
                                  style={{ minHeight: '100px' }}
                                >
                                  {/*=======================================  web =====================================*/}
                                  <div className='row'>
                                    <div className='col-md-12'>
                                      <div className='shadow'>
                                        <img
                                          data-src='https://res.cloudinary.com/elonatech/image/upload/v1709888028/portfolioPage/projects/safebrooks/web/web_template_2_safebrooks_gnptyq.jpg'
                                          alt=''
                                          className='img-fluid lazyload'
                                        />
                                      </div>
                                    </div>
                                    <div className='col-md-12 mt-5'>
                                      <div className='shadow'>
                                        <img
                                          data-src='https://res.cloudinary.com/elonatech/image/upload/v1709888029/portfolioPage/projects/safebrooks/web/3_m2z2tw.jpg'
                                          alt=''
                                          className='img-fluid lazyload'
                                        />
                                      </div>
                                    </div>
                                    <div className='col-md-6 mt-5'>
                                      <div className=''>
                                        <img
                                          data-src='https://res.cloudinary.com/elonatech/image/upload/v1709888028/portfolioPage/projects/safebrooks/web/1_xuicmd.jpg'
                                          className='img-fluid rounded lazyload shadow'
                                          alt=''
                                        />
                                      </div>
                                    </div>
                                    <div className='col-md-6 mt-5'>
                                      <div className=''>
                                        <img
                                          data-src='https://res.cloudinary.com/elonatech/image/upload/v1709888029/portfolioPage/projects/safebrooks/web/4_yxqfqb.jpg'
                                          className='img-fluid rounded lazyload shadow'
                                          alt=''
                                        />
                                      </div>
                                    </div>
                                    <div className='col-md-12 mt-2 mb-5'>
                                      <div className=''>
                                        <img
                                          data-src='https://res.cloudinary.com/elonatech/image/upload/v1709888029/portfolioPage/projects/safebrooks/web/2_isks2h.jpg'
                                          alt=''
                                          className='img-fluid lazyload'
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div
                                  class='tab_item tab_item_2'
                                  style={{ display: 'none' }}
                                >
                                  <div className='text-center'>
                                    <iframe
                                      width='905'
                                      height='450'
                                      className='motionGraphicVideo lazyload'
                                      data-src='https://www.youtube.com/embed/fMAjMMCg_ls?si=kRloBeVzQjtO8EsO'
                                      title='YouTube video player'
                                      frameborder='0'
                                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                                      allowfullscreen
                                    ></iframe>

                                    <iframe
                                      width='905'
                                      height='450'
                                      className='motionGraphicVideo lazyload'
                                      data-src='https://www.youtube.com/embed/XdWrJVY2wQY?si=d7DylbDfRQV9OhrS'
                                      title='YouTube video player'
                                      frameborder='0'
                                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                                      allowfullscreen
                                    ></iframe>

                                    <iframe
                                      width='905'
                                      height='450'
                                      className='motionGraphicVideo lazyload'
                                      data-src='https://www.youtube.com/embed/5TsDCpWZUEs?si=AWNI3fJgM581UXV5'
                                      title='YouTube video player'
                                      frameborder='0'
                                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                                      allowfullscreen
                                    ></iframe>

                                    <iframe
                                      width='905'
                                      height='450'
                                      className='motionGraphicVideo lazyload'
                                      data-src='https://www.youtube.com/embed/LEBQXiPK1XM?si=_EsbWxhCCIFXir9x'
                                      title='YouTube video player'
                                      frameborder='0'
                                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                                      allowfullscreen
                                    ></iframe>
                                  </div>
                                </div>
                                {/*=============================================================== digital============================================= */}
                                <div
                                  class='tab_item tab_item_3'
                                  style={{ display: 'none' }}
                                >
                                  <div className='container'>
                                    <div className='row'>
                                      <div className='col-md-4'>
                                        <div className='shadow'>
                                          <img
                                            data-src='https://res.cloudinary.com/elonatech/image/upload/v1709889626/portfolioPage/projects/safebrooks/digital/d6b6b8b73_wxttf0.jpg'
                                            className='img-fluid rounded lazyload'
                                            alt=''
                                          />
                                        </div>
                                      </div>
                                      <div className='col-md-4'>
                                        <div className='shadow'>
                                          <img
                                            data-src='https://res.cloudinary.com/elonatech/image/upload/v1709889624/portfolioPage/projects/safebrooks/digital/00ace_uzvg6k.jpg'
                                            className='img-fluid rounded lazyload'
                                            alt=''
                                          />
                                        </div>
                                      </div>
                                      <div className='col-md-4'>
                                        <div className='shadow'>
                                          <img
                                            data-src='https://res.cloudinary.com/elonatech/image/upload/v1709889625/portfolioPage/projects/safebrooks/digital/0aa70382f79a_uxvqyf.jpg'
                                            className='img-fluid rounded lazyload'
                                            alt=''
                                          />
                                        </div>
                                      </div>
                                      <div className='col-md-4 mt-4'>
                                        <div className='shadow'>
                                          <img
                                            data-src='https://res.cloudinary.com/elonatech/image/upload/v1709889625/portfolioPage/projects/safebrooks/digital/765d1bb1e5_xnhuqx.png'
                                            className='img-fluid rounded lazyload'
                                            alt=''
                                          />
                                        </div>
                                      </div>
                                      <div className='col-md-4'>
                                        <div className='shadow'>
                                          <img
                                            data-src='https://res.cloudinary.com/elonatech/image/upload/v1709888267/portfolioPage/projects/safebrooks/digital/Untitled-1_s30pe4.png'
                                            className='img-fluid rounded lazyload'
                                            alt=''
                                          />
                                        </div>
                                      </div>
                                      <div className='col-md-4 mt-4'>
                                        <div className='shadow'>
                                          <img
                                            data-src='https://res.cloudinary.com/elonatech/image/upload/v1709889625/portfolioPage/projects/safebrooks/digital/765d1bb1e5_xnhuqx.png'
                                            className='img-fluid rounded lazyload'
                                            alt=''
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/*========================================================================= Brand ================================================== */}
                                <div
                                  class='tab_item tab_item_4'
                                  style={{ display: 'none' }}
                                >
                                  <div className='container'>
                                    <div className='row jsutify-centent-md-centent'>
                                      <div className='col-md-6'>
                                        <div className=''>
                                          <img
                                            data-src='https://res.cloudinary.com/elonatech/image/upload/v1709891194/portfolioPage/projects/safebrooks/brand/Safebrooks_complimentary_card_back_v2ywau.jpg'
                                            className='img-fluid lazyload rounded'
                                            alt=''
                                          />
                                        </div>
                                      </div>
                                      <div className='col-md-6'>
                                        <div className=''>
                                          <img
                                            data-src='https://res.cloudinary.com/elonatech/image/upload/v1709891215/portfolioPage/projects/safebrooks/brand/ut-1_farjuc.jpg'
                                            className='img-fluid lazyload rounded'
                                            alt=''
                                          />
                                        </div>
                                      </div>
                                      <div className='col-md-4 mt-4'>
                                        <div className=''>
                                          <img
                                            data-src='https://res.cloudinary.com/elonatech/image/upload/v1709891192/portfolioPage/projects/safebrooks/brand/safebrook_book_desi_nxj2ch.jpg'
                                            className='img-fluid lazyload rounded'
                                            alt=''
                                          />
                                          <div className='text-center mt-5'>
                                            <img
                                              data-src='https://res.cloudinary.com/elonatech/image/upload/v1709891188/portfolioPage/projects/safebrooks/brand/Safebrooks_jbhrtz.png'
                                              className='img-fluid lazyload rounded'
                                              alt=''
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div className='col-md-4 mt-4'>
                                        <div className=''>
                                          <img
                                            data-src='https://res.cloudinary.com/elonatech/image/upload/v1709891193/portfolioPage/projects/safebrooks/brand/SAFEBROOK-2_g3khqt.jpg'
                                            className='img-fluid lazyload rounded'
                                            alt=''
                                          />
                                        </div>
                                      </div>
                                      <div className='col-md-4 mt-4'>
                                        <div className=''>
                                          <img
                                            data-src='https://res.cloudinary.com/elonatech/image/upload/v1709891195/portfolioPage/projects/safebrooks/brand/Safebrooks_ID_Back_s9swir.jpg'
                                            className='img-fluid lazyload rounded'
                                            alt=''
                                          />
                                        </div>
                                      </div>
                                      <div className='col-md-4 mt-4'>
                                        <div className=''>
                                          <img
                                            data-src='https://res.cloudinary.com/elonatech/image/upload/v1709891190/portfolioPage/projects/safebrooks/brand/Nnenna_Nkkwo_ID._jqyqpm.jpg'
                                            className='img-fluid lazyload rounded'
                                            alt=''
                                          />
                                        </div>
                                      </div>
                                      <div className='col-md-4 mt-4'>
                                        <div className=''>
                                          <img
                                            data-src='https://res.cloudinary.com/elonatech/image/upload/v1709891188/portfolioPage/projects/safebrooks/brand/2_1_o5cxsj.png'
                                            className='img-fluid lazyload rounded'
                                            alt=''
                                          />
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
                </div>
              </div>
            </div>
            {/*================================================================ Ozone ======================================================*/}
            <div class='tab-pane' id='tab-4'>
              <div class='row gy-4'>
                <div class='col-lg-12 order-2 order-lg-1'>
                  <div className='container mb-5'>
                    <div className='row g-0'>
                      <div className='col-md-2'>
                        <div className='card rounded-0'>
                          <div class='ts_body mb-5'>
                            <div class='tabs_list'>
                              <ul class=' text-center mb-5 pt-4 p-2'>
                                <li
                                  data-tc='tab_item_1'
                                  class='dropdown-item mt-2 p-3 active'
                                >
                                  {' '}
                                  <h6>Web Design</h6>
                                </li>
                                <li
                                  data-tc='tab_item_2'
                                  onMouseEnter={scrollToHeader}
                                  class='dropdown-item mt-2 p-3 pe-5'
                                >
                                  <h6>Motion Graphic</h6>
                                </li>
                                <li
                                  data-tc='tab_item_3'
                                  class='dropdown-item mt-2 p-4 ps-1'
                                >
                                  <h6>Digital Marketing</h6>
                                </li>
                                <li
                                  data-tc='tab_item_4'
                                  class='dropdown-item mt-2 p-3'
                                  style={{ marginBottom: '21px' }}
                                >
                                  <h6>Branding</h6>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='col-md-10'>
                        <div className='card rounded-0'>
                          <div class='ts_body'>
                            <div class='tabs_content'>
                              {/*============================================================ ozone ==========================================*/}
                              <div
                                class='tab_body'
                                style={{ overflow: 'auto', height: '29rem' }}
                              >
                                {/*===================================================== web ==================================================*/}
                                <div
                                  class='tab_item tab_item_1'
                                  style={{ minHeight: '100px' }}
                                >
                                  <div className='row'>
                                    <div className='col-md-12'>
                                      <div className=''>
                                        <img
                                          data-src='https://res.cloudinary.com/elonatech/image/upload/v1709897229/portfolioPage/projects/ozone/web/2024_template_for_web_ozone_cinema_kkcxzo.jpg'
                                          className='img-fluid lazyload rounded shadow'
                                          alt=''
                                        />
                                      </div>
                                    </div>

                                    <div className='col-md-12 mt-5'>
                                      <div className=''>
                                        <img
                                          data-src='https://res.cloudinary.com/elonatech/image/upload/v1709897229/portfolioPage/projects/ozone/web/4_ykd3jc.jpg'
                                          className='img-fluid lazyload rounded shadow'
                                          alt=''
                                        />
                                      </div>
                                    </div>

                                    <div className='col-md-6 mt-5'>
                                      <div className=''>
                                        <img
                                          data-src='https://res.cloudinary.com/elonatech/image/upload/v1709897232/portfolioPage/projects/ozone/web/1_k9y17u.jpg'
                                          className='img-fluid lazyload shadow'
                                          alt=''
                                        />
                                      </div>
                                    </div>
                                    <div className='col-md-6 mt-5'>
                                      <div className='shadow'>
                                        <img
                                          data-src='https://res.cloudinary.com/elonatech/image/upload/v1709897228/portfolioPage/projects/ozone/web/3_agd1q2.jpg'
                                          className='img-fluid lazyload rounded shadow'
                                          alt=''
                                        />
                                      </div>
                                    </div>
                                    <div className='col-md-12 mt-5'>
                                      <div className=''>
                                        <img
                                          data-src='https://res.cloudinary.com/elonatech/image/upload/v1709897231/portfolioPage/projects/ozone/web/2_ts94bm.jpg'
                                          alt=''
                                          className='img-fluid lazyload'
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                {/*====================================================== motion grahic ======================================= */}
                                <div
                                  class='tab_item tab_item_2'
                                  style={{ display: 'none' }}
                                >
                                  <div className='text-center'>
                                    <iframe
                                      width='905'
                                      height='450'
                                      className='motionGraphicVideo lazyload'
                                      data-src='https://www.youtube.com/embed/VOLpQA0j744?si=GYFzTisTIKC3hwvf'
                                      title='YouTube video player'
                                      frameborder='0'
                                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                                      allowfullscreen
                                    ></iframe>

                                    <iframe
                                      width='905'
                                      height='450'
                                      className='motionGraphicVideo lazyload'
                                      data-src='https://www.youtube.com/embed/nDCK0wk0kQY?si=xezoDj4BHYDULwd5'
                                      title='YouTube video player'
                                      frameborder='0'
                                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                                      allowfullscreen
                                    ></iframe>

                                    <iframe
                                      width='905'
                                      height='450'
                                      className='motionGraphicVideo lazyload'
                                      data-src='https://www.youtube.com/embed/Sd0HBnKO7Sg?si=bWnDLTCRsh3lQDKc'
                                      title='YouTube video player'
                                      frameborder='0'
                                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                                      allowfullscreen
                                    ></iframe>

                                    <iframe
                                      width='905'
                                      height='450'
                                      className='motionGraphicVideo lazyload'
                                      data-src='https://www.youtube.com/embed/hdWulRpSsb8?si=9qCGvY5aBQ5bwvor'
                                      title='YouTube video player'
                                      frameborder='0'
                                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                                      allowfullscreen
                                    ></iframe>
                                  </div>
                                </div>

                                {/*========================================================= digital ================================================*/}
                                <div
                                  class='tab_item tab_item_3'
                                  style={{ display: 'none' }}
                                >
                                  <div className='container'>
                                    <div className='row'>
                                      <div className='col-md-6'>
                                        <div className=''>
                                          <img
                                            data-src='https://res.cloudinary.com/elonatech/image/upload/v1709898095/portfolioPage/projects/ozone/digital/jpeg-optimizer_ozone-cinema-independence-day-design_bouvoy.jpg'
                                            className='img-fluid lazyload rounded'
                                            alt=''
                                          />
                                        </div>
                                      </div>
                                      <div className='col-md-6'>
                                        <div className=''>
                                          <img
                                            data-src='https://res.cloudinary.com/elonatech/image/upload/v1709898085/portfolioPage/projects/ozone/digital/jpeg-optimizer_biodun_okeowo_fire_wnasek.png'
                                            className='img-fluid lazyload rounded'
                                            alt=''
                                          />
                                        </div>
                                      </div>
                                      {/*=================================================================================================================  */}
                                      <div className='col-md-4 mt-4'>
                                        <div className=''>
                                          <img
                                            data-src='https://res.cloudinary.com/elonatech/image/upload/v1709898084/portfolioPage/projects/ozone/digital/jpeg-optimizer_The-Marvel-movie-premiere-new_xji8ls.jpg'
                                            className='img-fluid lazyload rounded'
                                            alt=''
                                          />
                                        </div>
                                      </div>
                                      <div className='col-md-8 mt-4'>
                                        <div className=''>
                                          <img
                                            data-src='https://res.cloudinary.com/elonatech/image/upload/v1709898083/portfolioPage/projects/ozone/digital/jpeg-optimizer_ozone-treasure-hunt_z4l3ei.jpg'
                                            className='img-fluid lazyload rounded'
                                            alt=''
                                          />
                                        </div>
                                      </div>

                                      {/*===================================================================================================================  */}
                                      <div className='col-md-4 mt-4'>
                                        <div className=''>
                                          <img
                                            data-src='https://res.cloudinary.com/elonatech/image/upload/v1709898094/portfolioPage/projects/ozone/digital/jpeg-optimizer_ozone-cinema-day_clsa4e.jpg'
                                            className='img-fluid rounded lazyload'
                                            alt=''
                                          />
                                        </div>
                                      </div>

                                      <div className='col-md-4 mt-4'>
                                        <div className=''>
                                          <img
                                            data-src='https://res.cloudinary.com/elonatech/image/upload/v1709898091/portfolioPage/projects/ozone/digital/jpeg-optimizer_mission-impossible-promo_d7wciw.png'
                                            className='img-fluid rounded lazyload'
                                            alt=''
                                          />
                                        </div>
                                      </div>
                                      <div className='col-md-4 mt-4'>
                                        <div className=''>
                                          <img
                                            data-src='https://res.cloudinary.com/elonatech/image/upload/v1709898088/portfolioPage/projects/ozone/digital/jpeg-optimizer_concessions_2_zbw0g9.png'
                                            className='img-fluid rounded lazyload'
                                            alt=''
                                          />
                                        </div>
                                      </div>
                                      <div className='col-md-4 mt-4'>
                                        <div className=''>
                                          <img
                                            data-src='https://res.cloudinary.com/elonatech/image/upload/v1709898086/portfolioPage/projects/ozone/digital/jpeg-optimizer_Blue-bettle-movie-poster_ox0mhj.jpg'
                                            className='img-fluid rounded lazyload'
                                            alt=''
                                          />
                                        </div>
                                      </div>

                                      <div className='col-md-4 mt-4'>
                                        <div className=''>
                                          <img
                                            data-src='https://res.cloudinary.com/elonatech/image/upload/v1709898092/portfolioPage/projects/ozone/digital/jpeg-optimizer_monday-special-new-2_sglt8g.jpg'
                                            className='img-fluid rounded lazyload'
                                            alt=''
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  class='tab_item tab_item_4'
                                  style={{ display: 'none' }}
                                ></div>
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
            {/*=============================================================== Western buckland ============================================*/}
            <div class='tab-pane' id='tab-5'>
              <div class='row gy-4'>
                <div class='col-lg-12 order-2 order-lg-1'>
                  <div className='container mb-5'>
                    <div className='row g-0'>
                      <div className='col-md-2'>
                        <div className='card rounded-0'>
                          <div class='ts_body mb-5'>
                            <div class='tabs_list'>
                              <ul class=' text-center mb-5 pt-4 p-2'>
                                <li
                                  data-tc='tab_item_1'
                                  class='dropdown-item mt-2 p-3 active '
                                >
                                  {' '}
                                  <h6>Web Design</h6>
                                </li>
                                <li
                                  data-tc='tab_item_2'
                                  onMouseEnter={scrollToHeader}
                                  class='dropdown-item mt-2 p-3 pe-5'
                                >
                                  <h6>Motion Graphic</h6>
                                </li>
                                <li
                                  data-tc='tab_item_3'
                                  class='dropdown-item mt-2 p-4 ps-1'
                                >
                                  <h6>Digital Marketing</h6>
                                </li>
                                <li
                                  data-tc='tab_item_4'
                                  class='dropdown-item mt-2 p-3'
                                  style={{ marginBottom: '21px' }}
                                >
                                  <h6>Branding</h6>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='col-md-10'>
                        <div className='card rounded-0'>
                          <div class='ts_body'>
                            <div class='tabs_content'>
                              <div
                                class='tab_body'
                                style={{ overflow: 'auto', height: '29rem' }}
                              >
                                {/*====================================================== web =====================================================================*/}
                                <div
                                  class='tab_item tab_item_1'
                                  style={{ minHeight: '100px' }}
                                >
                                  <div className='row'>
                                    <div className='col-md-12'>
                                      <div className=''>
                                        <img
                                          data-src='https://res.cloudinary.com/elonatech/image/upload/v1709831001/portfolioPage/projects/westernbuckland/web/2024_template_for_web_qjnadw.jpg'
                                          alt=''
                                          className='img-fluid lazyload'
                                          style={{ height: '28rem' }}
                                        />
                                      </div>
                                    </div>
                                    <div className='col-md-6 mt-5'>
                                      <div className=''>
                                        <img
                                          data-src='https://res.cloudinary.com/elonatech/image/upload/v1709831032/portfolioPage/projects/westernbuckland/web/wb_4_nhqbr4.jpg'
                                          className='img-fluid rounded lazyload shadow'
                                          alt=''
                                        />
                                      </div>
                                    </div>
                                    <div className='col-md-6 mt-5'>
                                      <div className='shadow'>
                                        <img
                                          data-src='https://res.cloudinary.com/elonatech/image/upload/v1709831008/portfolioPage/projects/westernbuckland/web/web-22_g9wjmw.jpg'
                                          className='img-fluid lazyload shadow'
                                          alt=''
                                        />
                                      </div>
                                    </div>
                                    <div className='col-md-12 mt-5'>
                                      <div className=''>
                                        <img
                                          data-src='https://res.cloudinary.com/elonatech/image/upload/v1709831025/portfolioPage/projects/westernbuckland/web/wb_3_r3djf0.jpg'
                                          className='img-fluid lazyload rounded shadow'
                                          alt=''
                                        />
                                      </div>
                                    </div>
                                    <div className='col-md-12 mt-5'>
                                      <div className=''>
                                        <img
                                          data-src='https://res.cloudinary.com/elonatech/image/upload/v1709831015/portfolioPage/projects/westernbuckland/web/wb_1_mrnau8.jpg'
                                          className='img-fluid lazyload rounded shadow'
                                          alt=''
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                {/*=================================================================== Video =============================================================*/}
                                <div
                                  class='tab_item tab_item_2'
                                  style={{ display: 'none' }}
                                >
                                  <div className='text-center'>
                                    <iframe
                                      width='905'
                                      height='450'
                                      className='motionGraphicVideo lazyload'
                                      data-src='https://www.youtube.com/embed/w40Fr0gKFJ0?si=l-E789I_cwvdWc1J'
                                      title='YouTube video player'
                                      frameborder='0'
                                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                                      allowfullscreen
                                    ></iframe>

                                    <iframe
                                      width='905'
                                      height='450'
                                      className='motionGraphicVideo lazyload'
                                      data-src='https://www.youtube.com/embed/O8odtwVeyeE?si=FM2VhkkfzEv6LvJU'
                                      title='YouTube video player'
                                      frameborder='0'
                                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                                      allowfullscreen
                                    ></iframe>

                                    <iframe
                                      width='905'
                                      height='450'
                                      className='motionGraphicVideo lazyload'
                                      data-src='https://www.youtube.com/embed/2wBVCL0NGDg?si=rK4dG84fh6wm_5dY'
                                      title='YouTube video player'
                                      frameborder='0'
                                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                                      allowfullscreen
                                    ></iframe>
                                  </div>
                                </div>

                                {/*================================================================= digital ====================================================================*/}
                                <div
                                  class='tab_item tab_item_3'
                                  style={{ display: 'none' }}
                                >
                                  <div className='container'>
                                    <div className='row'>
                                      <div className='col-md-4'>
                                        <div className='shadow'>
                                          <img
                                            data-src='https://res.cloudinary.com/elonatech/image/upload/v1709830953/portfolioPage/projects/westernbuckland/digital/Ws_Q_A_hepcuw.jpg'
                                            className='img-fluid lazyload rounded'
                                            alt=''
                                          />
                                        </div>
                                      </div>
                                      <div className='col-md-4'>
                                        <div className='shadow'>
                                          <img
                                            data-src='https://res.cloudinary.com/elonatech/image/upload/v1709830959/portfolioPage/projects/westernbuckland/digital/Ws_Site_Acquisition_vgkiwa.jpg'
                                            className='img-fluid lazyload rounded'
                                            alt=''
                                          />
                                        </div>
                                      </div>
                                      <div className='col-md-4'>
                                        <div className='shadow'>
                                          <img
                                            data-src='https://res.cloudinary.com/elonatech/image/upload/v1709830938/portfolioPage/projects/westernbuckland/digital/WS_Commercial_psumww.jpg'
                                            className='img-fluid lazyload rounded'
                                            style={{ height: '18rem' }}
                                            alt=''
                                          />
                                        </div>
                                      </div>
                                      <div className='col-md-4 mt-4'>
                                        <div className='shadow'>
                                          <img
                                            data-src='https://res.cloudinary.com/elonatech/image/upload/v1709830945/portfolioPage/projects/westernbuckland/digital/Ws_Microgrid_3_rm4tvk.jpg'
                                            className='img-fluid lazyload rounded'
                                            alt=''
                                          />
                                        </div>
                                      </div>
                                      <div className='col-md-4 mt-4'>
                                        <div className='shadow'>
                                          <img
                                            data-src='https://res.cloudinary.com/elonatech/image/upload/v1709830930/portfolioPage/projects/westernbuckland/digital/Maintenance_1_b1cpks.jpg'
                                            className='img-fluid lazyload rounded'
                                            alt=''
                                          />
                                        </div>
                                      </div>
                                      <div className='col-md-4 mt-4'>
                                        <div className='shadow'>
                                          <img
                                            data-src='https://res.cloudinary.com/elonatech/image/upload/v1709830923/portfolioPage/projects/westernbuckland/digital/WS_System_Optimization_npwwnd.jpg'
                                            className='img-fluid lazyload rounded'
                                            alt=''
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/*====================================================================== branding ============================================================*/}
                                <div
                                  class='tab_item tab_item_4'
                                  style={{ display: 'none' }}
                                >
                                  <div className='row'>
                                    <div className='col-md-6'>
                                      <div className=''>
                                        <img
                                          data-src='https://res.cloudinary.com/elonatech/image/upload/v1709830820/portfolioPage/projects/westernbuckland/brand/western_buckland_helemt_mockup_es9vxf.png'
                                          className='img-fluid lazyload rounded'
                                          alt=''
                                        />
                                      </div>
                                    </div>
                                    <div className='col-md-6'>
                                      <div className=''>
                                        <img
                                          data-src='https://res.cloudinary.com/elonatech/image/upload/v1709830799/portfolioPage/projects/westernbuckland/brand/western_buckland_safety_jacket_mockup_urfyky.png'
                                          className='img-fluid lazyload rounded'
                                          alt=''
                                        />
                                      </div>
                                    </div>
                                    <div className='col-md-6 mt-4'>
                                      <div className=''>
                                        <img
                                          data-src='https://res.cloudinary.com/elonatech/image/upload/v1709830812/portfolioPage/projects/westernbuckland/brand/western_buckland_cup_mockup_dmnnog.png'
                                          className='img-fluid rounded lazyload'
                                          alt=''
                                        />
                                      </div>
                                    </div>
                                    <div className='col-md-6 mt-4'>
                                      <div className=''>
                                        <img
                                          data-src='https://res.cloudinary.com/elonatech/image/upload/v1709830805/portfolioPage/projects/westernbuckland/brand/western_buckland_book_mockup_sbbmbd.png'
                                          className='img-fluid rounded lazyload'
                                          alt=''
                                        />
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
              </div>
            </div>
            {/*==================================================================== Pfn ====================================================*/}
            <div class='tab-pane' id='tab-6'>
              <div class='row gy-4'>
                <div class='col-lg-12 order-2 order-lg-1'>
                  <div className='container mb-5'>
                    <div className='row g-0'>
                      <div className='col-md-2'>
                        <div className='card rounded-0'>
                          <div class='ts_body mb-5'>
                            <div class='tabs_list'>
                              <ul class=' text-center mb-5 pt-4 p-2'>
                                <li
                                  data-tc='tab_item_1'
                                  class='dropdown-item mt-2 p-3 active'
                                >
                                  {' '}
                                  <h6>Web Design</h6>
                                </li>
                                <li
                                  data-tc='tab_item_2'
                                  onMouseEnter={scrollToHeader}
                                  class='dropdown-item mt-2 p-3 pe-5'
                                >
                                  <h6>Motion Graphic</h6>
                                </li>
                                <li
                                  data-tc='tab_item_3'
                                  class='dropdown-item mt-2 p-4 ps-1'
                                >
                                  <h6>Digital Marketing</h6>
                                </li>
                                <li
                                  data-tc='tab_item_4'
                                  class='dropdown-item mt-2 p-3'
                                  style={{ marginBottom: '21px' }}
                                >
                                  <h6>Branding</h6>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='col-md-10'>
                        <div className='card rounded-0'>
                          <div class='ts_body'>
                            <div class='tabs_content'>
                              <div
                                class='tab_body'
                                style={{ overflow: 'auto', height: '29rem' }}
                              >
                                {/*================================================================ Web ============================================================*/}
                                <div
                                  class='tab_item tab_item_1'
                                  style={{ minHeight: '100px' }}
                                >
                                  <div className='row'>
                                    <div className='col-md-12'>
                                      <div className='shadow'>
                                        <img
                                          data-src='https://res.cloudinary.com/elonatech/image/upload/v1709829723/portfolioPage/projects/pfn/web/web_template_2_pfn_bzoueu.jpg'
                                          className='img-fluid shadow lazyload'
                                          alt=''
                                        />
                                      </div>
                                    </div>
                                    <div className='col-md-12 mt-5'>
                                      <div className='shadow'>
                                        <img
                                          data-src='https://res.cloudinary.com/elonatech/image/upload/v1709829736/portfolioPage/projects/pfn/web/1_r4mnbb.jpg'
                                          alt=''
                                          className='img-fluid lazyload'
                                        />
                                      </div>
                                    </div>
                                    <div className='col-md-6 mt-5'>
                                      <div className='shadow'>
                                        <img
                                          data-src='https://res.cloudinary.com/elonatech/image/upload/v1709829730/portfolioPage/projects/pfn/web/3_x5hvq0.jpg'
                                          className='img-fluid rounded shadow lazyload'
                                          alt=''
                                        />
                                      </div>
                                    </div>
                                    <div className='col-md-6 mt-5'>
                                      <div className='shadow'>
                                        <img
                                          data-src='https://res.cloudinary.com/elonatech/image/upload/v1709829716/portfolioPage/projects/pfn/web/2_n7ksv7.jpg'
                                          className='img-fluid rounded shadow lazyload'
                                          alt=''
                                        />
                                      </div>
                                    </div>
                                    <div className='col-md-12 mt-5'>
                                      <div className='shadow'>
                                        <img
                                          data-src='https://res.cloudinary.com/elonatech/image/upload/v1709829710/portfolioPage/projects/pfn/web/4_d3ccar.jpg'
                                          className='img-fluid rounded shadow lazyload'
                                          alt=''
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                {/* ================================================================= Video  ==================================================*/}
                                <div
                                  class='tab_item tab_item_2'
                                  style={{ display: 'none' }}
                                >
                                  <div className='text-center'>
                                    <iframe
                                      width='950'
                                      height='450'
                                      className='motionGraphicVideo lazyload'
                                      data-src='https://www.youtube.com/embed/T-ubYjO-b-0?si=Sl-KnTVIqpxYFS8-'
                                      title='YouTube video player'
                                      frameborder='0'
                                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                                      allowfullscreen
                                    ></iframe>
                                  </div>
                                </div>

                                {/*====================================================================== digital ==============================================*/}
                                <div
                                  class='tab_item tab_item_3'
                                  style={{ display: 'none' }}
                                >
                                  <div className='container'>
                                    <div className='row'>
                                      <div className='col-md-4'>
                                        <div className=''>
                                          <img
                                            data-src='https://res.cloudinary.com/elonatech/image/upload/v1709829937/portfolioPage/projects/pfn/digital/Flyer_Two_eqxzd7.jpg'
                                            className='img-fluid lazyload rounded'
                                            alt=''
                                          />
                                        </div>
                                      </div>
                                      <div className='col-md-4'>
                                        <div className=''>
                                          <img
                                            data-src='https://res.cloudinary.com/elonatech/image/upload/v1709887215/portfolioPage/projects/pfn/digital/Lagos_tfvcdu.jpg'
                                            className='img-fluid lazyload rounded'
                                            alt=''
                                          />
                                        </div>
                                      </div>
                                      <div className='col-md-4'>
                                        <div className=''>
                                          <img
                                            data-src='https://res.cloudinary.com/elonatech/image/upload/v1709887217/portfolioPage/projects/pfn/digital/You_can_Watch_qwnstt.jpg'
                                            className='img-fluid lazyload rounded'
                                            alt=''
                                          />
                                        </div>
                                      </div>
                                      <div className='col-md-4 mt-4'>
                                        <div className='shadow'>
                                          <img
                                            data-src='https://res.cloudinary.com/elonatech/image/upload/v1709887215/portfolioPage/projects/pfn/digital/Wishing_everyone_n3jjjm.jpg'
                                            className='img-fluid lazyload rounded'
                                            alt=''
                                          />
                                        </div>
                                      </div>
                                      <div className='col-md-4 mt-4'>
                                        <div className='shadow'>
                                          <img
                                            data-src='https://res.cloudinary.com/elonatech/image/upload/v1709887215/portfolioPage/projects/pfn/digital/Pentecostal_Fellowship_acviqn.jpg'
                                            className='img-fluid lazyload rounded'
                                            alt=''
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  class='tab_item tab_item_4'
                                  style={{ display: 'none' }}
                                ></div>
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
      </section>
      {/*==================================================================== Our  ====================================================*/}
      <div className='container mt-5 mb-5'>
        <h4 class='text-primary fw-bold'>Our Projects</h4>
        <h2 class='fw-bold mb-5'>We've Done Lot's of Awesome Projects</h2>
        <div className='row g-3'>
          {services.map((service, index) => (
            <div className='col-lg-3 col-md-6 d-flex' key={index}>
              <div className='shadow d-flex flex-column'>
                <img
                  className='img-fluid lazyload'
                  data-src={service.image}
                  alt={service.title}
                />
                <div className='ps-2 pt-2 flex-grow-1'>
                  <h5 className='pt-3'>{service.title}</h5>
                  <p className='pb-4 pe-2'>{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/*==============================================================================================================================*/}
    </>
  )
}

export default Portfolio
