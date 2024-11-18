import Getintouch2 from '../GetInTouch/getintouch2'
import './internet.css'
import { Helmet } from 'react-helmet-async'

const Internet = () => {
  return (
    <>
      <Helmet>
        <title>Internet Solution - Tech Solution, Digital Solution</title>
        <meta
          name='description'
          content='Where Connectivity Knows No Bounds - Weaving Your Digital World into One Seamless Experience. Elevate Your Digital Realm with the Velocity of Progress Where Faster Becomes the New Norm. Ignite Your Downloads with the Power of a Thousand Megabits Torrent of Possibilities at the Speed of Light '
        />
        <link rel='canonical' href='https://elonatech.com.ng/internet' />
      </Helmet>

      {/*================================================================================================= header =====================================================================*/}
      <div class='container-fluid internet-solution-section'>
        <div class='text-content'>
          <h2>Internet Solution</h2>
          <h5>Experience the Next Level of Internet Speed and Reliability</h5>
          <p class='lead'>
            Offering you the best internet experience so you can enjoy
            guaranteed Superfast speeds to your network
          </p>
        </div>
      </div>

      {/*================================================================================= Internet ==================================================================*/}
      <div className='container'>
        <h4 className='text-danger text-center'>Our Features</h4>
        <div className='row mb-5 mt-3 d-flex'>
          <div className='col-md-6 col-lg-3 mt-3 d-flex'>
            <div className='card card-vl left rounded w-100'>
              <div className='card-body text-center bg-light'>
                <i className='bi bi-wifi-2 fs-1 fw-3'></i>
                <h6 className='text-danger'>Wifi Seamless</h6>
                <p className='lead fs-6'>
                  Where Connectivity Knows No Bounds - Weaving Your Digital
                  World into One Seamless Experience.
                </p>
              </div>
            </div>
          </div>
          <div className='col-md-6 col-lg-3 mt-3 d-flex'>
            <div className='card card-vl left rounded w-100'>
              <div className='card-body text-center bg-light'>
                <i className='bi bi-reception-4 fs-1 fw-3'></i>
                <h6 className='text-danger'>Speed On Demand</h6>
                <p className='lead fs-6'>
                  Empowering You with the Magic Wand of Connectivity Click, Zoom
                  at the Pace of Your Desires.
                </p>
              </div>
            </div>
          </div>
          <div className='col-md-6 col-lg-3 mt-3 d-flex'>
            <div className='card card-vl left rounded w-100'>
              <div className='card-body text-center bg-light'>
                <i className='bi bi-broadcast-pin fs-1 fw-3'></i>
                <h6 className='text-danger'>Upgrade Speed</h6>
                <p className='lead fs-6'>
                  Elevate Your Digital Realm with the Velocity of Progress Where
                  Faster Becomes the New Norm.
                </p>
              </div>
            </div>
          </div>
          <div className='col-md-6 col-lg-3 mt-3 d-flex'>
            <div className='card card-vl left rounded w-100'>
              <div className='card-body text-center bg-light'>
                <i className='bi bi-download fs-1 fw-3'></i>
                <h6 className='text-danger'>Download 1Gbps</h6>
                <p className='lead fs-6'>
                  Ignite Your Downloads with the Power of a Thousand Megabits
                  Torrent of Possibilities at the Speed of Light.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*====================================================================================== images ===============================================================*/}
      <div className='container mb-5'>
        <div className='row g-0'>
          <div className='col-md-6'>
            <div
              className='card rounded-0'
              style={{ backgroundColor: '#2b5592' }}
            >
              <div className='card-body mt-5 mb-5'>
                <h2 className='text-white'>Fast Internet</h2>
                <h6 className='mt-4 text-white'>
                  Develop skills needed to protect networks and prevent
                  intrusions.
                </h6>
                <p className='mt-4 mb-5 text-white'>
                  <em>By Elonatech</em>
                </p>
              </div>
            </div>
          </div>
          <div className='col-md-6 d-none d-md-block'>
            <div
              className='card rounded-0'
              style={{
                backgroundImage: `url(https://res.cloudinary.com/elonatech/image/upload/v1709623006/internetPage/p07br2yz_skl37i.jpg)`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                height: '100%'
              }}
            ></div>
          </div>
        </div>
      </div>

      {/*==========================================================================  Solutions ==========================================================================*/}
      <div className='container mt-5 mb-5'>
        <div className='row'>
          <div className='col-md-7 col-lg-6'>
            <div className=''>
              <div className='card-body'>
                <h2 className='text-danger'>Featured Solutions</h2>
                <p className='fw-3 mt-3'>
                  Embracing the Widest Range of Possibilities in the World of
                  Internet Services, Seamless Connectivity, Lightning-Fast
                  Speeds, Enhanced Security, and Unparalleled Customer Support
                  Converge to Enable You to Navigate the Digital Frontier with
                  Our Comprehensive and Cutting-Edge Features Solutions,
                  Redefining How You Connect, Communicate, and Thrive in the
                  Modern Digital Landscape.
                </p>
                <div className='row'>
                  <div className='col-sm-12 col-md-12 col-lg-6'>
                    <ul className='list-unstyled'>
                      <li>
                        <i class='bi bi-check-circle-fill text-danger'></i>{' '}
                        Expert Technical Team
                      </li>
                      <li>
                        <i class='bi bi-check-circle-fill text-danger'></i>{' '}
                        Experience in IP Networking
                      </li>
                      <li>
                        <i class='bi bi-check-circle-fill text-danger'></i>{' '}
                        Cost-effective Business Solutions
                      </li>
                      <li>
                        <i class='bi bi-check-circle-fill text-danger'></i>{' '}
                        Supply of equipment and software
                      </li>
                      <li>
                        <i class='bi bi-check-circle-fill text-danger'></i> High
                        Availability Solutions
                      </li>
                    </ul>
                  </div>
                  <div className='col-sm-12 col-md-12 col-lg-6'>
                    <ul className='list-unstyled'>
                      <li>
                        <i class='bi bi-check-circle-fill text-danger'></i>{' '}
                        Integrating Existing Systems
                      </li>
                      <li>
                        <i class='bi bi-check-circle-fill text-danger'></i>{' '}
                        Utilizing Computer Networking
                      </li>
                      <li>
                        <i class='bi bi-check-circle-fill text-danger'></i>{' '}
                        Enterprise Application integration
                      </li>
                      <li>
                        <i class='bi bi-check-circle-fill text-danger '></i>{' '}
                        Physical Environment Virtualization
                      </li>
                      <li>
                        <i class='bi bi-check-circle-fill text-danger'></i>{' '}
                        Business Process Management
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-5 col-lg-6'>
            <div className='row'>
              <div className='col-md-12 col-lg-6'>
                <ul className='mt-1 list-unstyled'>
                  <li>
                    <div className='card border-danger'>
                      <div className='card border-danger p-4 '>
                        <i class='bi bi-broadcast fs-2 text-danger'></i>
                        <h6 className=''>VSAT Services</h6>
                        <p className='mt-2'>
                          We operate different terminals on C- and Ku-Band. Our
                          monitoring tools give access to...
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className='card border-danger mt-2'>
                      <div className='card border-danger p-4 '>
                        <i class='bi bi-device-ssd fs-2 text-danger'></i>
                        <h6 className='mt-2'>Back-up solutions</h6>
                        <p className='mt-2'>
                          Our back-up solutions put little strain on the budget
                          and work reliably if your main...
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className='col-md-12 col-lg-6'>
                <ul className='list-unstyled'>
                  <li>
                    <div className='card border-danger'>
                      <div className='card border-danger p-4 '>
                        <i class='bi bi-wifi fs-2 text-danger'></i>
                        <h6 className='mt-2'>Broadband / Trunking</h6>
                        <p className='mt-2'>
                          From a small home office to a multi thousand user
                          location. Our services are designed to meet specific.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className='card border-danger mt-2'>
                      <div className='card border-danger p-4 '>
                        <i class='bi bi-diagram-3 fs-2 text-danger'></i>
                        <h6 className='mt-2'>Private networks</h6>
                        <p className='mt-2'>
                          Corporate and public bodies require secure and
                          independent communication..
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ======================================================= */}
      <Getintouch2 />
    </>
  )
}

export default Internet
