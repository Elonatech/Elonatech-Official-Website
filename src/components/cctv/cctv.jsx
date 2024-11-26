import './cctv.css'
import Getintouch2 from '../GetInTouch/getintouch2'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'

import { Navigation, Pagination, Autoplay } from 'swiper/modules'

import { Helmet } from 'react-helmet-async'

const Cctv = () => {
  return (
    <>
      <Helmet>
        <title>Closed-Circuit Television (CCTV) - Tech Solution</title>
        <meta
          name='description'
          content='Surveillance is the monitoring of behavior, many activities, or information for the purpose of information gathering, influencing, managing or directing. This can include observation from a distance by means of electronic equipment, such as closed-circuit television (CCTV), or interception of electronically transmitted information like Internet traffic. It can also include simple technical methods, such as human intelligence gathering and postal interception.
       Closed-circuit television (CCTV), also known as video surveillance, is the use of video cameras to transmit a signal to a specific place, on a limited set of monitors. It may employ point-to-point (P2P), point-to-multipoint (P2MP), or mesh wired or wireless links. Even though almost all video cameras fit this definition, the term is most often applied to those used for surveillance in areas that require additional security or ongoing monitoring.
       '
        />
        <link rel='canonical' href='https://elonatech.com.ng/cctv' />
      </Helmet>

      {/*===================================================== header =============================================*/}
      <div class='container-fluid cctv-section'>
        <div class='text-content'>
          <h2>Closed-Circuit Television (CCTV)</h2>
          <h5>
            Monitoring of Behavior, Activities, or Information for The Purpose
            of Information Gathering
          </h5>
          <p class='lead'>
            The use of video cameras to transmit a signal to a specific place,
            on a limited set of monitors, known as video surveillance
          </p>
        </div>
      </div>

      {/*============================================================ sub  ==============================================*/}
      <div className='container mt-5'>
        <p className='mb-2' style={{textAlign: 'justify'}}>
          <span className='text-danger fw-bold'>Surveillance</span> is the
          monitoring of behavior, many activities, or information for the
          purpose of information gathering, influencing, managing or directing.
          This can include observation from a distance by means of electronic
          equipment, such as closed-circuit television (CCTV), or interception
          of electronically transmitted information like Internet traffic. It
          can also include simple technical methods, such as human intelligence
          gathering and postal interception.
        </p>
        <p className='mb-5' style={{textAlign: 'justify'}}>
          Closed-circuit television (CCTV), also known as video surveillance, is
          the use of video cameras to transmit a signal to a specific place, on
          a limited set of monitors. It may employ point-to-point (P2P),
          point-to-multipoint (P2MP), or mesh wired or wireless links. Even
          though almost all video cameras fit this definition, the term is most
          often applied to those used for surveillance in areas that require
          additional security or ongoing monitoring.
        </p>
      </div>

      {/*============================================================ slider ====================================================*/}
      <div className=' mb-5'>
        <Swiper
          spaceBetween={23}
          slidesPerView={1}
          modules={[Navigation, Pagination, Autoplay]}
          autoplay={{ delay: 3000 }}
          pagination={true}
        >
          <SwiperSlide>
            <div className='container'>
              <div
                className='row boda-a mb-5'
                style={{ borderColor: '#add8e6' }}
              >
                <div
                  className='col-md-6 boda-right'
                  style={{
                    backgroundImage: `url(https://res.cloudinary.com/elonatech/image/upload/v1709572001/cctvPage/photo1_yrqdx7.jpg)`,
                    backgroundPosition: 'center',
                    backgroundSize: '40rem'
                  }}
                ></div>
                <div
                  className='col-md-6 pd'
                  style={{ borderColor: '#add8e6' }}
                >
                  <div
                    className='boda-b mt-0 mb-0'
                    style={{ borderColor: '#add8e6'}}
                  >
                    <div className='' style={{ height: '23.5rem' }}>
                      <div className='p-2 pt-5'>
                        <h2 className='text-center pt-4'></h2>
                        <p style={{textAlign: 'justify'}}>
                          Most CCTV cameras need electricity to operate
                          properly. However, there are further choices that can
                          function both with and without power, such as:
                          <br />
                          Wireless security cameras that run on batteries (keep
                          in mind that these need to be charged) Solar-powered
                          surveillance equipment Backup power generators.
                        </p>
                        <div className='mb-3 text-white'>ggd</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='container'>
              <div className='row boda-a ' style={{ borderColor: '#ff0000' }}>
                <div
                  className='col-md-6 pd boda-right '
                  style={{ borderColor: '#ff0000' }}
                >
                  <div
                    className='boda-b mt-0 mb-0'
                    style={{ borderColor: '#ff0000' }}
                  >
                    <div className='' style={{ height: '23.5rem' }}>
                      <div className='p-2  pt-5'>
                        <h2 className='text-center pt-4'></h2>
                        <p style={{textAlign: 'justify'}}>
                          Generally speaking, a security camera has a viewing
                          range of about 30 to 100 feet (9-30m), but there are
                          some types of cameras such as PTZ cameras that can
                          capture images and video more than 100 feet.
                          <br />
                          Actually, the range of a camera is determined by a
                          combination of factors, such as lens focal length,
                          location, and camera resolution.
                        </p>
                        <div className='mb-3 text-white'>ggd</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className='col-md-6'
                  style={{
                    backgroundImage: `url(https://res.cloudinary.com/elonatech/image/upload/v1709571995/cctvPage/photo2_g93bvy.jpg)`,
                    backgroundPosition: 'center',
                    backgroundSize: '40rem'
                  }}
                ></div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='container'>
              <div className='row boda-a ' style={{ borderColor: '#800080' }}>
                <div
                  className='col-md-6 boda-phot03'
                  style={{
                    backgroundImage: `url(https://res.cloudinary.com/elonatech/image/upload/v1709572001/cctvPage/photo3_wy2xm8.jpg)`,
                    backgroundPosition: 'center',
                    backgroundSize: '40rem'
                  }}
                ></div>
                <div
                  className='col-md-6 pd '
                  style={{ borderColor: '#800080' }}
                >
                  <div
                    className='boda-b mt-0 mb-0'
                    style={{ borderColor: '#800080' }}
                  >
                    <div className='pt-5' style={{ height: '23.5rem' }}>
                      <div className='p-2 pt-4'>
                        <h2 className=''></h2>
                        <p style={{textAlign: 'justify'}}>
                          The ability of night vision CCTV cameras to record
                          crystal-clear video in low-light situations is one of
                          its main advantages. These cameras can capture quality
                          video even in total darkness because they employ
                          infrared technology to see in the dark.
                        </p>
                        <p style={{textAlign: 'justify'}}>
                          Night vision CCTV c ameras can be utilised to offer
                          security and monitor patrons even in low-light
                          settings in places like bars, clubs, and other
                          entertainment venues.
                        </p>
                        <div className='mb-3 text-white'>ggd</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='container'>
              <div className='row boda-a ' style={{ borderColor: '#041c89' }}>
                <div
                  className='col-md-6 pd boda-right '
                  style={{ borderColor: '#041c89' }}
                >
                  <div
                    className='boda-b mt-0 mb-0'
                    style={{ borderColor: '#041c89' }}
                  >
                    <div className=' pt-5' style={{ height: '23.5rem' }}>
                      <div className='p-2 '>
                        <h2 className=''></h2>
                        <p style={{textAlign: 'justify'}}>
                          CCTV cameras are employed for safety, surveillance,
                          and security reasons. They may guarantee that laws are
                          being followed, monitor public spaces, track people,
                          assist prevent prospective criminals, and provide
                          residents and business owners a sense of security.
                        </p>
                        <p style={{textAlign: 'justify'}}>
                          CCTV cameras may also record videos of illegal
                          activities, which can be used by law enforcement to
                          identify suspects and gather evidence.
                        </p>
                        <div className='mb-3 text-white'>ggd</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className='col-md-6'
                  style={{
                    backgroundImage: `url(https://res.cloudinary.com/elonatech/image/upload/v1709572001/cctvPage/photo4_n7i5r1.jpg)`,
                    backgroundPosition: 'center',
                    backgroundSize: '40rem'
                  }}
                ></div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* invest */}
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <div className=''>
              <h4 className='fw-bold'>Why Invest In Cctv</h4>
              <div
                style={{
                  backgroundColor: '#dc3545',
                  height: '2px',
                  width: '80px'
                }}
              ></div>
              <div
                style={{
                  backgroundColor: '#dc3545',
                  height: '2px',
                  width: '80px',
                  marginTop: '2px'
                }}
              ></div>
              <div className='mt-2'>
                <div className='d-flex pt-2'>
                  <i class='bi bi-circle-fill me-3'></i>
                  <p className=''>
                    {' '}
                    Quality video evidence helps solve crime and increases
                    apprehensions by private security and police agencies
                  </p>
                </div>
                <div className='d-flex'>
                  <i class='bi bi-circle-fill me-3'></i>
                  <p className=''>
                    Acts as a deterrent to those that would consider being
                    dishonest.
                  </p>
                </div>
                <div className='d-flex '>
                  <i class='bi bi-circle-fill me-3'></i>
                  <p className=''>
                    Saves money by identifying operational issues.
                  </p>
                </div>
                <div className='d-flex'>
                  <i class='bi bi-circle-fill me-3'></i>
                  <p className=''>
                    All too often businesses discover product or money missing
                    weeks after the fact. Having video archives available to go
                    back and review often solves these mysteries
                  </p>
                </div>
                <div className='d-flex'>
                  <i class='bi bi-circle-fill me-3'></i>
                  <p className=''>
                    {' '}
                    Video analytics – let video help the operational side of
                    your business by mapping customer patterns, counting people,
                    capturing license plates and more.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6 mt-2'>
            <div className='mt-5'>
              <h4 className='fw-bold'> Different Types of CCTV Camera</h4>
              <p className=' mt-0'>
                When it comes to securing your business, there are many
                different types of CCTV to choose from. Surveillance plays a
                huge part in today’s society, and with cameras all around us,
                our day-to-day lives are experiencing higher levels of security
                each day.
              </p>
              <h4 className='fw-bold'>What are the different types of CCTV cameras?</h4>
              <ul className='list-unstyled'>
                <li className=''>
                  {' '}
                  <i class='bi bi-circle-fill me-2'></i>Dome Camera
                </li>
                <li className=''>
                  {' '}
                  <i class='bi bi-circle-fill me-2'></i>Bullet Camera
                </li>
                <li className=''>
                  {' '}
                  <i class='bi bi-circle-fill me-2'></i>C-mount Camera
                </li>
                <li className=''>
                  {' '}
                  <i class='bi bi-circle-fill me-2'></i>Day/Night Camera
                </li>
                <li className=''>
                  {' '}
                  <i class='bi bi-circle-fill me-2'></i>PTZ Camera
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/*================================================================================ contact us ======================================================*/}
      <Getintouch2 />
    </>
  )
}

export default Cctv
