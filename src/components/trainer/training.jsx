import './training.css'
import ConsultBanner from '../GetInTouch/ConsultBanner'
import { Helmet } from 'react-helmet-async'

import FirstTraining from './captions/Training_image_mgcg5d.jpg'

import computer from './captions/red/icons8-product-architecture-100-80x80_ewmlnu.png'
import cloud from './captions/red/icons8-cloud-computing-90-80x80_ltczvq.png'
import cyber from './captions/red/icons8-shield-with-a-dollar-sign-100-80x80_bpnigu.png'
import mobile from './captions/red/icons8-iphone-100-80x80_gu3vjd.png'
import web from './captions/red/icons8-web-100-80x80_ncnzie.png'
import network from './captions/red/icons8-networking-manager-100-1-80x80_tmdsoo.png'

import trainWithUs from './captions/why train with us.png'
import buildTeam from './captions/green/3-User_giozzh.png'
import techCurve from './captions/green/Lighting-1_xalbj4.png'
import meetToday from './captions/green/Video-Online-3_swyk9i.png'
import keepCosts from './captions/green/Lines-Chart-4_m45hkf.png'
import samePage from './captions/green/Wishlist_hhbk7n.png'
import encourage from './captions/green/Decentralized_lgktxz.png'
import aws1 from './captions/ml-phase2 (1).png'
import aws2 from './captions/aws-partner.png'
import aws3 from './captions/Site.png'

const Training = () => {
  return (
    <>
      <Helmet>
        <title>IT Training & Skill Development - Empower Your Team with Expert IT Courses</title>
        <meta
          name='description'
          content='Come Train With Us
       Elonatech focuses on IT Training specific to the Information Technology (IT) industry, or to the skills necessary for performing information technology jobs. IT training includes courses related to the application, design, development, implementation, support or management of computer-based information systems and necessary for the effective use of the computer and it’s applications built to facilitate certain business functions, improving the accuracy, efficiency, and effectiveness of operations.

       Training is teaching, or developing in oneself or others, any skills and knowledge that relate to specific useful competencies. Training has specific goals of improving one’s capability, capacity, productivity and performance. '
        />
        <link rel='canonical' href='https://elonatech.com.ng/training' />
      </Helmet>
      {/*============================================================================ header =================================================*/}
      <div class='container-fluid training-equipping-section'>
        <div class='text-content'>
          <h2>Training & Equipping</h2>
          <h5>
            Training has specific goals of improving one’s capability, capacity,
            productivity and performance
          </h5>
          <p class='lead'>
            Teaching, equipping and developing Teams or Individuals, with skills
            and knowledge that relate to specific useful competencies.
          </p>
        </div>
      </div>
      {/* =================================================================================================================== */}
      <div className='container mt-5 mb-5'>
        <div className='row align-items-center'>
          <div className='col-md-6'>
            <div className='border-0'>
              <h2 className='fw-bold'>
                Make it a chance, not a chore, to learn new skills
              </h2>
              <p className='mt-2'>
                A willingness to learn new skills is the trait executives say is
                most important to an employee's career success.
                <br /> <br />
                No matter what you want to learn, the first step toward gaining
                knowledge is noticing and seizing learning opportunities
                wherever you find them.
              </p>
            </div>
          </div>
          <div className='col-md-6'>
            <div className=' border-0'>
              <img
                src='https://i.stack.imgur.com/qq8AE.gif'
                data-src={FirstTraining}
                className='img-fluid lazyload rounded'
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
      {/* ==================================================  Service Start  ================================================ */}
      <div className='container mt-5 mb-5'>
        <div class='small py-vh-3 w-100 overflow-hidden'>
          <div class='container'>
            <div class='row'>
              <div class='col-md-4 rm-border-train'>
                <div className='text-center'>
                  <img
                    src='https://i.stack.imgur.com/qq8AE.gif'
                    data-src={computer}
                    className='img-fluid p-2 lazyload'
                    alt=''
                  />
                </div>
                <div class='p-2'>
                  <div class='col-md-12'>
                    <h4 class='fw-bold my-2 text-center'>
                      Computer Engineering
                    </h4>
                    <p className='mb-5 text-center'>
                      Computer engineering deals with the technological aspects
                      and multi-disciplinary approach to planning, designing,
                      construction, and operation of hardware systems. This
                      field of study combines several disciplines, from
                      designing computer architecture to developing software and
                      hardware systems. You can learn more about computer
                      engineering and how to become one with us.
                    </p>
                  </div>
                </div>
              </div>
              <div class='col-md-4 rm-border-train'>
                <div className='text-center'>
                  <img
                    src='https://i.stack.imgur.com/qq8AE.gif'
                    data-src={cloud}
                    className='img-fluid p-2 lazyload'
                    alt=''
                  />
                </div>
                <div class='p-2'>
                  <div class='col-md-12'>
                    <h4 class='fw-bold my-2 text-center'>Cloud Computing</h4>
                    <p className='mb-5 text-center'>
                      Cloud computing is the on-demand availability of computer
                      system resources, especially data storage and computing
                      power, without direct active management by the user. The
                      term is generally used to describe data centers available
                      to many users over the Internet.
                    </p>
                  </div>
                </div>
              </div>

              <div class='col-md-4 '>
                <div className='text-center'>
                  <img
                    src='https://i.stack.imgur.com/qq8AE.gif'
                    data-src={cyber}
                    className='img-fluid p-2 lazyload'
                    alt=''
                  />
                </div>
                <div class='p-2'>
                  <div class='col-md-12'>
                    <h4 class=' fw-bold my-2 text-center'>Cyber Security</h4>
                    <p className='text-center'>
                      Computer security, cybersecurity, or information
                      technology security is the protection of computer systems
                      and networks from information disclosure, theft of or
                      damage to their hardware, software, or electronic data, as
                      well as from the disruption or misdirection of the
                      services they provide.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ============================= */}
        <div className='container'>
          <div className='border border-danger border-top-0 border-end-0 border-start-0 d-none d-sm-block my-3'></div>
        </div>

        {/* ============================= */}
        <div class='small py-vh-3 w-100 overflow-hidden'>
          <div class='container'>
            <div class='row'>
              <div class='col-md-4  rm-border-train'>
                <div className='text-center'>
                  <img
                    src='https://i.stack.imgur.com/qq8AE.gif'
                    data-src={mobile}
                    className='img-fluid mt-5 lazyload'
                    alt=''
                  />
                </div>
                <div class='d-flex'>
                  <div class='col-md-12'>
                    <h4 class='fw-bold my-2 text-center'>
                      Mobile App Development
                    </h4>
                    <p className='text-center'>
                      Mobile app development is the act or process by which a
                      mobile app is developed for mobile devices, such as
                      personal digital assistants, enterprise digital assistants
                      or mobile phones
                    </p>
                  </div>
                </div>
              </div>
              <div class='col-md-4 rm-border-train'>
                <div className='text-center'>
                  <img
                    src='https://i.stack.imgur.com/qq8AE.gif'
                    data-src={web}
                    className='img-fluid mt-5 lazyload'
                    alt=''
                  />
                </div>
                <div class=''>
                  <div class='col-md-12'>
                    <h4 class='fw-bold my-2 text-center'>Web Development</h4>
                    <p className='text-center'>
                      Web development is the building and maintenance of
                      websites; it's the work that happens behind the scenes to
                      make a website look great, work fast and perform well with
                      a seamless user experience. Building both the frontend and
                      backend.
                    </p>
                  </div>
                </div>
              </div>

              <div class='col-md-4'>
                <div className='text-center'>
                  <img
                    src='https://i.stack.imgur.com/qq8AE.gif'
                    data-src={network}
                    className='img-fluid mt-5 lazyload'
                    alt=''
                  />
                </div>
                <div class=''>
                  <div class='col-md-12'>
                    <h4 class=' fw-bold my-2 text-center'>
                      Networking and Security
                    </h4>
                    <p className='text-center'>
                      Network Security protects your network and data from
                      breaches, intrusions, and other threats. Network Security
                      involves access control, virus and antivirus software,
                      application security, network analytics, types of
                      network-related security (endpoint, web, wireless),
                      firewalls, VPN encryption, and more.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ==================================================   Service End    ================================================*/}
      <div className='container mb-5 mt-5'>
        <p>
          Due to the evolving nature of technology, our IT training content is
          constantly updated and adapted to reflect the current market. Our IT
          courses reside in a wide variety of curriculum areas including, but
          not limited to these listed below.
        </p>
      </div>
      <div className='container mb-5 mt-5'>
        <h2 className='fw-bold'>Come Train With Us</h2>
        <p className='mt-3 taj'>
          Elonatech focuses on IT Training specific to the Information
          Technology (IT) industry, or to the skills necessary for performing
          information technology jobs. IT training includes courses related to
          the application, design, development, implementation, support or
          management of computer-based information systems and necessary for the
          effective use of the computer and it’s applications built to
          facilitate certain business functions, improving the accuracy,
          efficiency, and effectiveness of operations.
        </p>
        <p className='mt-3 taj'>
          Training is teaching, or developing in oneself or others, any skills
          and knowledge that relate to specific useful competencies. Training
          has specific goals of improving one’s capability, capacity,
          productivity and performance.
        </p>
      </div>
      {/* ==================================================      ===========================================================*/}
      <div class='container mt-5 mb-5'>
        <div class='container'>
          <div class='row g-5 align-items-center'>
            <div class='col-lg-5'>
              <div className='text-center'>
                <img
                  src='https://i.stack.imgur.com/qq8AE.gif'
                  data-src={trainWithUs}
                  className='img-fluid lazyload'
                  alt=''
                />
              </div>
            </div>
            <div class='col-lg-7'>
              <div class='row g-5'>
                <div class='col-sm-6'>
                  <div class='d-flex align-items-center mb-3'>
                    <div class='flex-shrink-0  rounded-circle me-3'>
                      <img
                        src='https://i.stack.imgur.com/qq8AE.gif'
                        data-src={buildTeam}
                        className='img-fluid lazyload'
                        alt=''
                      />
                    </div>
                    <h6 class='mb-0'>Build team consistency</h6>
                  </div>
                  <p>
                    Get off the hiring and onboarding roller coaster by
                    retaining your team.
                  </p>
                </div>
                <div class='col-sm-6'>
                  <div class='d-flex align-items-center mb-3'>
                    <div class='flex-shrink-0  rounded-circl me-3'>
                      <img
                        src='https://i.stack.imgur.com/qq8AE.gif'
                        data-src={techCurve}
                        className='img-fluid lazyload'
                        alt=''
                      />
                    </div>
                    <h6 class='mb-0'>Beat the tech curve</h6>
                  </div>
                  <p>
                    Give your team the high-value technology skills corporate
                    finance requires today.
                  </p>
                </div>
                <div class='col-sm-6'>
                  <div class='d-flex align-items-center mb-3'>
                    <div class='flex-shrink-0 rounded-circle me-3'>
                      <img
                        src='https://i.stack.imgur.com/qq8AE.gif'
                        data-src={meetToday}
                        className='img-fluid lazyload'
                        alt=''
                      />
                    </div>
                    <h6 class='mb-0'>Meet today’s expectations</h6>
                  </div>
                  <p>
                    Train your whole team with the flexible online learning
                    method they want.
                  </p>
                </div>
                <div class='col-sm-6'>
                  <div class='d-flex align-items-center mb-3'>
                    <div class='flex-shrink-0  rounded-circle me-3'>
                      <img
                        src='https://i.stack.imgur.com/qq8AE.gif'
                        data-src={keepCosts}
                        className='img-fluid lazyload'
                        alt=''
                      />
                    </div>
                    <h6 class='mb-0'>Keep costs down and ROI up</h6>
                  </div>
                  <p>Keep costs down and ROI up</p>
                </div>
                <div class='col-sm-6 '>
                  <div class='d-flex align-items-center mb-3'>
                    <div class='flex-shrink-0 rounded-circle me-3'>
                      <img
                        src='https://i.stack.imgur.com/qq8AE.gif'
                        data-src={samePage}
                        className='img-fluid lazyload'
                        alt=''
                      />
                    </div>
                    <h6 class='mb-0'>Get on the same page</h6>
                  </div>
                  <p>
                    Offer every employee the same base of knowledge with custom
                    learning paths.
                  </p>
                </div>
                <div class='col-sm-6'>
                  <div class='d-flex align-items-center mb-3'>
                    <div class='flex-shrink-0  rounded-circle me-3'>
                      <img
                        src='https://i.stack.imgur.com/qq8AE.gif'
                        data-src={encourage}
                        className='img-fluid lazyload'
                        alt=''
                      />
                    </div>
                    <h6 class='mb-0'>Encourage collaboration</h6>
                  </div>
                  <p>
                    Build a strong team that works and learns together no matter
                    where they are.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ========================================     ======================================================================*/}
      <div className='container mb-5'>
        <div className='row'>
          <div className='col-md-6 mb-3'>
            <div className=' border-2 border border-dark'>
              <div className='row'>
                <div className='col-7 '>
                  <div className='p-2'>
                    <h6>Learn a course from us</h6>
                    Built for beginners, build solutions using turn-based
                    gameplay.
                  </div>
                </div>
                <div className='col-5'>
                  <div className='text-center'>
                    <img
                      data-src={aws1}
                      className='img-fluid float-end lazyload'
                      alt=''
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div className=' border-2 border border border-dark'>
              <div className='row'>
                <div className='col-7'>
                  <div className='p-2'>
                    <h6>Based Exam Prep</h6>
                    An Escape Room that gives you guidance from start to
                    certified
                  </div>
                </div>
                <div className='col-5'>
                  <div className='text-center'>
                    <img
                      data-src={aws2}
                      className='img-fluid float-end lazyload'
                      alt=''
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-12 mt-3'>
            <div className=' border-2 border border border-dark'>
              <div className='row'>
                <div className='col-7'>
                  <div className='p-2'>
                    <h6>Get Future-Ready with AI Training from AWS</h6>
                    Learn how to integrate AI and ML into your tools and
                    applications with this enhanced learning plan, including
                    immersive AWS Builder Labs.
                  </div>
                </div>
                <div className='col-5'>
                  <img
                    data-src={aws3}
                    className='img-fluid float-end lazyload'
                    alt=''
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ==============================================================   Team Start    ====================================*/}
      <ConsultBanner />
      {/* ==================================================      ===========================================================*/}
    </>
  )
}

export default Training
