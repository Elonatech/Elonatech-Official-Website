import Getintouch from '../../../components/GetInTouch/getintouch'
import { Helmet } from 'react-helmet-async'

import './livestreaming.css'

const Livestreaming = () => {
  return (
    <>
      <Helmet>
        <title>Live Streaming - Tech Solution, Digital Solution</title>
        <meta
          name='description'
          content="Livestreaming
       Live streaming technology lets you watch, create and share videos in real-time, a bit like live TV. All you need to be able to live stream is an internet-enabled device and a platform. 
       Current popular live-streaming apps include Facebook Live, YouTube Live, Instagram Live stories, etc. 
       Live Video Player:
       Embed the live video player prominently on the page. Ensure it's easily accessible and works seamlessly.
       "
        />
        <link rel='canonical' href='https://elonatech.com.ng/livestreaming' />
      </Helmet>

      {/*======================================================================== header =====================================================*/}
      <div class='container-fluid live-streaming-section'>
        <div class='text-content'>
          <h2>Live Streaming</h2>
          <p class='lead'>
            As we adjust to the new normal, everyone is moving their social life
            online. Happy hours, concerts, events, seminars, <br /> late night
            talk shows, etc.—all digital right now.
          </p>
        </div>
      </div>

      <div className='container'>
        <div class='row justify-content-center mt-5 gx-4 align-items-center'>
          <div class='col-lg-6' data-aos='fade-up'>
            <div className='float-center'>
              <h4 className=' fw-bold' style={{ color: '#34548c' }}>
                Livestreaming
              </h4>
              <p className='taj'>
                Live streaming technology lets you watch, create and share
                videos in real-time, a bit like live TV. All you need to be able
                to live stream is an internet-enabled device and a platform.
                Current popular live-streaming apps include Facebook Live,
                YouTube Live, Instagram Live stories, etc.{' '}
              </p>
              <p className='taj'>
                Unlike pre-recorded videos that can be cut and edited, live
                streaming is just that – live and uncensored. <br />
              </p>
              <p className='taj'>
                Some live streams can be private. For example, video
                conferencing, like Skype or Zoom, uses live streaming technology
                to allow you to talk to people you have invited.
              </p>
              <p className='taj'>
                Some live streams are public and might be watched by hundreds or
                even thousands of people.
              </p>
            </div>
          </div>
          <div class='col-lg-6'>
            <div className='text-center'>
              <img
                src='https://i.stack.imgur.com/qq8AE.gif'
                data-src='https://res.cloudinary.com/elonatech/image/upload/v1709712614/livestreamingPage/Supreme-Image-1030x579_q9lmj2.jpg'
                alt=''
                className='img-fluid lazyload'
              />
            </div>
          </div>
        </div>
      </div>

      <div className='container'>
        <div class='row justify-content-center mt-3 flex-lg-row align-items-center'>
          <div class='col-lg-6'>
            <div className='text-center'>
              <img
                src='https://i.stack.imgur.com/qq8AE.gif'
                style={{ width: '600px', height: '350px' }}
                data-src='https://res.cloudinary.com/elonatech/image/upload/v1709712614/livestreamingPage/video-live-streaming-service-1B_ysu5np.jpg'
                className='img-fluid lazyload'
              />
            </div>
          </div>
          <div class='col-lg-6' data-aos='fade-up'>
            <h5 className='fw-bold fs-3 ' style={{ color: '#34548c' }}>
              Our Livestreaming Service
            </h5>
            <p className='taj'>
              Elonatech provides professional and quality live streaming
              solutions. we seamlessly integrate multiple camera angles,
              multi-source input channels into live-streamed events. our
              professionally switched video will have smooth multi-camera
              transitions, multimedia integration, and varieties of graphical
              effects and overlays, including digital watermarks, titling,
              branding slates, lower-third graphics and sponsor messaging.
            </p>
            <p className='taj'>
              Our live streams are delivered on CDN, adaptive bit rates and
              responsive multi-device player which make people all over the
              world be able to watch your events live via mobile phones and all
              internet-enabled devices.
            </p>
            <p className='taj'>
              Our Livestreaming service covers the following events: Church’s
              live service broadcasting, conferences and events live broadcast,
              rally and campaign broadcast, weddings, birthdays, etc.
            </p>
          </div>
        </div>
      </div>

      <div className=''>
        <div className='container '>
          <div class='row justify-content-center' data-aos='fade-up'>
            <div class='col-lg-6'>
              <h2 className='text-dark fw-bold'>Our Livestreaming Features</h2>
              <ul className='text-dark'>
                <li>
                  <h5 className='fw-bold'>Countdown Timer</h5>Add a countdown
                  timer if the live stream hasn't started yet. This builds
                  anticipation and lets viewers know when the event will begin.
                </li>
                <li>
                  <h5 className='fw-bold'>Live Video Player:</h5>Embed the live
                  video player prominently on the page. Ensure it's easily
                  accessible and works seamlessly.
                </li>
                <li>
                  <h5 className='fw-bold'>Chat and Comment Section:</h5>Include
                  a live chat or comment section for viewers to interact with
                  you and other viewers in real-time.
                </li>
                <li>
                  <h5 className='fw-bold'>Upcoming Live Streams:</h5>If
                  applicable, list upcoming live streams or events to keep
                  viewers informed about what's coming next.
                </li>
                <li>
                  <h5 className='fw-bold'>Social Media Links:</h5>Provide links
                  to your social media profiles to encourage viewers to follow
                  you for updates and future streams.
                </li>
              </ul>
            </div>
            <div class='col-lg-6'>
              <div className='text-center'>
                <img
                  src='https://i.stack.imgur.com/qq8AE.gif'
                  data-src='https://res.cloudinary.com/elonatech/image/upload/v1709712671/livestreamingPage/img-3_aicpbn.jpg'
                  className='img-fluid lazyload pt-md-4 pt-0'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ========================================================================================================= */}
      <Getintouch />
      {/* ========================================================================================================= */}
    </>
  )
}

export default Livestreaming
