import Getintouch2 from '../../components/GetInTouch/getintouch2'
import { Helmet } from 'react-helmet-async'
import './ip-telephone.css'

const IpTelephony = () => {
  return (
    <>
      <Helmet>
        <title>
          IP Telephony & PBX Systems - Tech Solution, Digital Solution
        </title>
        <meta
          name='description'
          content='IP Telephony & PBX Systems
IP telephony is any phone system that runs on the internet instead of traditional landlines. In other words, it uses the internet — internet protocol (IP) — to send and receive voice transmissions. Voice over IP (VoIP) is another term for IP telephony.

The traditional telephone system is dubbed the Public Switched Telephone Network (PSTN). The way that it moves calls from originator to destination resembles how VoIP moves information, but the underlying equipment differs from the devices moving traffic on the internet, which creates a number of ripple effects. '
        />
        <link rel='canonical' href='https://elonatech.com.ng/ip-telephony' />
      </Helmet>

      {/*======================================== header ========================================*/}
      <div class='container-fluid ip-telephony-section'>
        <div class='text-content'>
          <h2>IP Telephony & PBX Systems</h2>
          <h5>Lower Bills and Higher Call Quality with IP Telephony.</h5>
          <p class='lead'>
            VoIP feature that greets callers, directs them to the appropriate
            extensions or departments, and assists in managing incoming calls
            with efficiency and professionalism.
          </p>
        </div>
      </div>

      {/*======================================================= body ====================================================*/}
      <div className='container' style={{ marginTop: '40px' }}>
        <div class='row justify-content-center align-items-center g-2'>
          <div class='col-lg-6'>
            <h3 className='mb-4'>IP Telephony & PBX Systems</h3>
            <p className='fs-6' style={{textAlign: 'justify'}}>
              IP telephony is any phone system that runs on the internet instead
              of traditional landlines. In other words, it uses the internet —
              internet protocol (IP) — to send and receive voice transmissions.
              Voice over IP (VoIP) is another term for IP telephony.
              <br />
              <br />
              The traditional telephone system is dubbed the Public Switched
              Telephone Network (PSTN). The way that it moves calls from
              originator to destination resembles how VoIP moves information,
              but the underlying equipment differs from the devices moving
              traffic on the internet, which creates a number of ripple effects.
              <br />
              <br />
              A PBX is an acronym for Private Branch Exchange, a private
              telephone network allowing users to talk to each other. Different
              hardware components work together to provide connectivity to the
              telephone network.
              <br />
              <br />
              PBX design was proprietary, so a customer had to purchase all of
              its network equipment and phones from one vendor. These systems
              required a great deal of manual input to set up and maintain.
              Tasks as simple as assigning a phone extension to a new employee
              were cumbersome to complete.
            </p>
          </div>
          <div class='col-lg-6 pyx'>
            <div className='text-center'>
              <img
                src='https://i.stack.imgur.com/qq8AE.gif'
                data-src='https://res.cloudinary.com/elonatech/image/upload/v1709648752/IPTelephonyPage/phone-network_xiocp0.jpg'
                alt=''
                className='img-fluid lazyload rounded'
              />
            </div>
          </div>
        </div>
      </div>
      {/*============================================ Innovative ==========================================================*/}
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-lg-6'>
            <div className='text-center'>
              <img
                src='https://i.stack.imgur.com/qq8AE.gif'
                data-src='https://res.cloudinary.com/elonatech/image/upload/v1709648863/IPTelephonyPage/meetings_phone_chat_img_hfxyqd.jpg'
                alt=''
                className='img-fluid lazyload rounded'
              />
            </div>
          </div>
          <div className='col-lg-6 '>
            <div className=''>
              <h2 className='mb-5'>
                A Flexible Business VoIP Phone Service
              </h2>
              <ul className='list-unstyled'>
                <li className='d-flex align-items-center'>
                  <i class='bi bi-check-circle-fill fs-3 text-danger me-2'></i>
                  <p className='l'>
                    Complete unified communication system with voice, video,
                    text messages, mobile, and web connectivity.
                  </p>
                </li>
                <li className='d-flex align-items-center'>
                  <i class='bi bi-check-circle-fill fs-3 text-danger me-2'></i>
                  <p className='mt-2'>
                    Instant conference calls (including real-time video
                    conference calls).
                  </p>
                </li>
                <li className='d-flex align-items-center'>
                  <i class='bi bi-check-circle-fill fs-3 text-danger me-2'></i>
                  <p className='mt-2'>
                    Our service allows you to effortlessly schedule your staff
                    appointment.
                  </p>
                </li>
                <li className='d-flex align-items-center'>
                  <i class='bi bi-check-circle-fill fs-3 text-danger me-2'></i>
                  <p className='mt-2'>
                    Reliable and trustworthy service with HD voice call quality
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/*========================================================== Call ===================================================*/}
      <div className='container mb-5'>
        <div className='row'>
          <div className='col-md-4 mb-3'>
            <div className='card border-2 bg-light h-100'>
              <div className='card-body'>
                <i class='bi bi-telephone-minus-fill text-danger  fs-2'></i>
                <p className='fw-bold'>Inbound & Outbound</p>
                <p className='lead fs-6' style={{textAlign: 'justify'}}>
                  Delight customers and empower employees with AI-powered
                  workflows for every interaction. Put your business on the map
                  with local numbers and global connectivity from one easy app.
                </p>
              </div>
            </div>
          </div>
          <div className='col-md-4 mb-3'>
            <div className='card border-2 bg-light h-100'>
              <div className='card-body'>
                <i class='bi bi-mic-fill text-danger fs-2'></i>
                <p className='fw-bold'>Voice Services</p>
                <p className='lead fs-6' style={{textAlign: 'justify'}}>
                  PBX feature that provides comprehensive insights and analytics
                  on call activity, enabling businesses to track performance,
                  identify trends, and make data-driven decisions.
                </p>
              </div>
            </div>
          </div>
          <div className='col-md-4 mb-3'>
            <div className='card border-2 bg-light h-100'>
              <div className='card-body'>
                <i class='bi bi-terminal-fill text-danger  fs-2'></i>
                <p className='fw-bold'>Automatic Call Distribution (ACD)</p>
                <p className='lead fs-6' style={{textAlign: 'justify'}}>
                  VoIP feature that automatically responds to incoming text
                  messages, ensuring prompt engagement and providing
                  personalized messages to enhance customer satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ================================= */}
      <Getintouch2 />
      {/* ===================== */}
    </>
  )
}

export default IpTelephony
