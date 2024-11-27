import './videoconferencing.css'
import Getintouch from '../../../components/GetInTouch/getintouch'
import { Helmet } from 'react-helmet-async'

const Videoconferencing = () => {
  return (
    <>
      <Helmet>
        <title>Videoconferencing - Tech Solution, Digital Solution</title>
        <meta
          name='description'
          content='
Videoconferencing
Videoconferencing is an online technology that allows users in different locations to hold face-to-face meetings without having to move to a single location together. 
This technology is particularly convenient for business users in different cities or even different countries because it saves time, expenses, and hassles associated with business travel. '
        />
        <link
          rel='canonical'
          href='https://elonatech.com.ng/videoconferencing'
        />
      </Helmet>

      {/*====================================================================== header ====================================================*/}
      <div class='container-fluid videoconferencing-section'>
        <div class='text-content'>
          <h2>Videoconferencing</h2>
          <h5>Helping People Connect, Regardless of Where They’re Located.</h5>
          <p class='lead'>
            This is an online technology that allows users in different
            locations to hold face-to-face meetings without having to move to a
            single location together
          </p>
        </div>
      </div>

      <div className='container position-relative pt-2'>
        <div class='row justify-content-center mt-4 mb-4 align-items-center'>
          <div class='col-md-6'>
            <div className='text-center'>
              <img
                src='https://i.stack.imgur.com/qq8AE.gif'
                data-src='https://res.cloudinary.com/elonatech/image/upload/v1709724222/videoConferencingPage/meeting-room_quurwd.jpg'
                alt=''
                className='img-fluid lazyload rounded'
              />
            </div>
          </div>
          <div class='col-md-6 pt-3'>
            <div className='float-center'>
              <h4 className=' fw-bold' style={{ color: '#34548c' }}>
                Videoconferencing
              </h4>
              <p className='taj'>
                Videoconferencing is an online technology that allows users in
                different locations to hold face-to-face meetings without having
                to move to a single location together. This technology is
                particularly convenient for business users in different cities
                or even different countries because it saves time, expenses, and
                hassles associated with business travel. <br />{' '}
              </p>
              <p className='taj'>
                Videoconferencing uses includes holding routine meetings,
                organizing seminars/conferences, negotiating business deals, and
                interviewing job candidates. <br />
              </p>
              <p className='taj'>
                The main purpose of video conferencing is to help people
                connect, regardless of where they’re located.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className=''
        style={{ backgroundColor: '#34548c', marginTop: '0rem' }}
      >
        <div className='container'>
          <div class='row justify-content-center py-5 align-items-center'>
            <div class='col-md-6'>
              <h2 className='text-black fw-bold'>
                What Kind of Videoconferencing Equipment is Needed?
              </h2>
              <ul className='text-black '>
                <li>Displays: laptop, desktop monitor, television screen</li>
                <li>
                  Microphones and cameras: built-in microphones and webcams, USB
                  microphones and webcams
                </li>
                <li>
                  Speakers: built-in computer speaker, external speaker, VoIP
                  (voice over IP) conferencing phone
                </li>
                <li>Internet Connection: WiFi, Ethernet</li>
                <li>
                  Video Conferencing Software: video conferencing tools and apps
                </li>
              </ul>
            </div>
            <div class='col-md-6' data-aos='fade-up'>
              <div className='text-center'>
                <img
                  src='https://i.stack.imgur.com/qq8AE.gif'
                  data-src='https://res.cloudinary.com/elonatech/image/upload/v1709724223/videoConferencingPage/recordvideo_krq3kg.jpg'
                  alt=''
                  className='img-fluid lazyload pt-2 pt-md-0'
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container'>
        <div class='row align-items-center my-5 align-items-center'>
          <div class='col-md-4'>
            <h5 className='fw-bold' style={{ color: '#34548c' }}>
              Videoconferencing solutions
            </h5>
            <p className='taj'>
              Live visual connection between two or more remote parties over the
              internet that simulates a face-to-face meeting. Video conferencing
              is important because it joins people who would not normally be
              able to form a face-to-face connection. Our cutting-edge
              videoconference solutions provide unparalleled clarity for your
              conference room video setup.
            </p>
          </div>
          <div class='col-md-4' data-aos='fade-up'>
            <div className='text-center mb-3'>
              <img
                src='https://i.stack.imgur.com/qq8AE.gif'
                data-src='https://res.cloudinary.com/elonatech/image/upload/v1709724295/videoConferencingPage/webcam_xobc6j.jpg'
                alt=''
                className='img-fluid lazyload'
              />
            </div>
          </div>
          <div class='col-md-4'>
            <p className='taj'>
              {' '}
              Experience a unique 180° field of view, astounding sound, and
              real-time whiteboarding. Discover the future of smarter video
              collaboration for small to medium meeting rooms. Transform your
              workplace with our comprehensive conference room camera and
              microphone options. Video your way with our recommended wireless
              conference room solutions today.{' '}
            </p>
          </div>
        </div>
      </div>
      {/* =================================================================== */}
      <Getintouch />
      {/* =================================================================== */}
    </>
  )
}

export default Videoconferencing
