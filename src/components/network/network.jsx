import './network.css'
import Getintouch2 from '../GetInTouch/getintouch2'
import networkHeader from './caption/network_maintenance_wcx29o.jpg'
import firstNetwork from './caption/1_vg3rx6.png'
import secondaNetwork from './caption/2_2_jcljs0.jpg'
import thirdNetwork from './caption/33_spgs7k.png'
import fourthNetwork from './caption/34_q9e22h.png'
import networkDevices from './caption/5_pm6rww.jpg'
import wirelessNetwork from './caption/65_sle1ib.png'
import reliableSupport from './caption/bannerNet2-resized_li2rep.png'
import { Helmet } from 'react-helmet-async'

const Network = () => {
  return (
    <>
      <Helmet>
        <title>Network Equipment Maintenance</title>
        <meta
          name='description'
          content='Here at Elonatech, 
       Committed to supplying you with the most reliable network advice, support and services at all times.
       we are committed to supplying you with the most reliable advice, support and services at all times, wherever you are in Nigeria.    Reliable Network Support, Hubs Switches Routers Bridges Gateways Modems Repeaters Access Points Servers '
        />
        <link rel='canonical' href='https://elonatech.com.ng/network' />
      </Helmet>

      {/*====================================================================================== header ============================================================*/}
      <div class='container-fluid network-equipment-maintenance-section'>
        <div class='text-content'>
          <h2>Network Equipment Maintenance</h2>
          <h5>
            We Provide Round-The-Clock Maintenance for All Network Equipment
          </h5>
          <p class='lead'>
            Committed to supplying you with the most reliable network advice,
            support, and services at all times.
          </p>
        </div>
      </div>

      {/*===================================================================== cards ====================================================*/}
      <div className='container mb-5'>
        <div class='row justify-content-md-center gy-3 align-items-center'>
          <div class='col-md-6  '>
            <div className='text-center'>
              <img
                src='https://i.stack.imgur.com/qq8AE.gif'
                data-src={firstNetwork}
                alt=''
                className='img-fluid lazyload rounded'
              />
            </div>
          </div>
          <div class='col-md-6'>
            <div className='text-center'>
              <img
                src='https://i.stack.imgur.com/qq8AE.gif'
                data-src={secondaNetwork}
                alt=''
                className='img-fluid lazyload rounded'
              />
            </div>
          </div>
        </div>
      </div>
      {/*=================================================================== round the clock ===========================================================*/}
      <main class='container mt-5'>
        <div class='p-4 p-md-5 mb-4 rounded text-bg-dark'>
          <h3 className='text-center' style={{ wordBreak: 'break-all' }}>
            Round-The-Clock Maintenance for All Network Equipment
          </h3>
          <div class='underline'></div>
          <div className='underline'></div>
          <div className='row'>
            <div class='col-md-6'>
              <p class='lead my-3'>
                <strong>W</strong>e understand there are times when you need
                your network equipment up and running as soon as possible and
                can't afford to wait. Our engineers are very knowledgeable when
                it comes to network equipment. They also perform rigorous
                testing before returning your equipment. <br /> we also offer a
                special express repair service where our team will prioritize
                your job and have your equipment back up and running fast.
              </p>
            </div>
            <div class='col-md-6'>
              <p class='lead my-3'>
                <strong>O</strong>ur team provides round-the-clock maintenance
                and repair for a wide range of high-end network equipment. We
                check both software and hardware to ensure everything works
                orderly. In addition, we test and maintain routers, switches,
                firewalls, network chassis, modules, and power supplies. <br />{' '}
                We thoroughly test all equipment after repairs to ensure that
                everything is in complete working order before returning it to
                you.
              </p>
            </div>
          </div>
        </div>
      </main>
      {/*===================================================================== switch ==============================================================*/}
      <div className='container  mb-5'>
        <div class='row justify-content-md-center align-items-center'>
          <div class='col-md-6  '>
            <div className='text-center'>
              <img
                src='https://i.stack.imgur.com/qq8AE.gif'
                data-src={thirdNetwork}
                alt=''
                className='img-fluid lazyload rounded'
              />
            </div>
          </div>
          <div class='col-md-6'>
            <div className='text-center'>
              <img
                src='https://i.stack.imgur.com/qq8AE.gif'
                data-src={fourthNetwork}
                alt=''
                className='img-fluid lazyload rounded'
              />
            </div>
          </div>
        </div>
      </div>
      {/*========================================================================== Reliable =======================================================*/}
      <main class='container mt-5 '>
        <div
          class='mb-4 rounded'
          style={{ backgroundColor: '#002e62' }}
        >
          <div className='row'>
            <div class='col-md-6'>
              <h4 className='text-white text-center mt-4'>
                Reliable Network Support
              </h4>
              <p class='lead text-white taj p-2'>
                <strong>H</strong>ere at Elonatech, we are committed to
                supplying you with the most reliable advice, support and
                services at all times, wherever you are in Nigeria.
                <br />
                To find out more about how we can help you, please get in touch
                with us today.
              </p>
            </div>
            <div class='col-md-6'>
              <img
                data-src={reliableSupport}
                class='img-fluid lazyload d-none d-md-block'
                alt='Responsive image'
                style={{ height: '15rem', width: '79rem' }}
              />
            </div>
          </div>
        </div>
      </main>
      {/*============================================================== Common Network Devices  =====================================================*/}
      <main class='container'>
        <div class='rounded'>
          <div className='row'>
            <div class='col-md-6 common'>
              <h3
                className='text-center  mt-5 mb-3'
                style={{ color: '#34548c' }}
              >
                Common Network Devices We Maintain
              </h3>
              <div className='text-center'>
                <img
                  src='https://i.stack.imgur.com/qq8AE.gif'
                  data-src={networkDevices}
                  alt=''
                  className='img-fluid lazyload rounded'
                />
              </div>
            </div>
            <div
              class='col-md-6 p-4 text-white'
              style={{ backgroundColor: '#002e62' }}
            >
              <p class=''>
                {' '}
                <strong className='fs-4'>W</strong>ith the capability to repair
                thousands of items by the major network manufacturers, Elonatech
                is positioned to be your repair partner.
              </p>
              <h6>Some of the Devices We Repair:</h6>
              <ul className='list-unstyled text-white'>
                <li class='d-flex'>
                  <i class='bi bi-arrow-right-circle-fill fs-5'> </i>
                  <p className='ps-2'>Hubs</p>
                </li>
                <li class='d-flex'>
                  <i class='bi bi-arrow-right-circle-fill fs-5'> </i>
                  <p className='ps-2'>Switches</p>
                </li>
                <li class='d-flex'>
                  <i class='bi bi-arrow-right-circle-fill fs-5'> </i>
                  <p className='ps-2'>Routers</p>
                </li>
                <li class='d-flex'>
                  <i class='bi bi-arrow-right-circle-fill fs-5'> </i>
                  <p className='ps-2'>Bridges</p>
                </li>
                <li class='d-flex'>
                  <i class='bi bi-arrow-right-circle-fill fs-5'> </i>
                  <p className='ps-2'>Gateways</p>
                </li>
                <li class='d-flex'>
                  <i class='bi bi-arrow-right-circle-fill fs-5'> </i>
                  <p className='ps-2'>Modems</p>
                </li>
                <li class='d-flex'>
                  <i class='bi bi-arrow-right-circle-fill fs-5'> </i>
                  <p className='ps-2'>Repeaters</p>
                </li>
                <li class='d-flex'>
                  <i class='bi bi-arrow-right-circle-fill fs-5'> </i>
                  <p className='ps-2'>Access Points</p>
                </li>
                <li class='d-flex'>
                  <i class='bi bi-arrow-right-circle-fill fs-5'> </i>
                  <p className='ps-2'>Servers</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      {/*=================================================================================== router ====================================================*/}
      <main class='container mb-5'>
        <div class='rounded'>
          <div className='row '>
            <div class='col-md-6 p-4 text-white'
              style={{ backgroundColor: '#002e62' }}
            >
              <p className='text-white taj'>
                <strong className='fs-2'>B</strong>uying new network or wireless
                equipment is an expensive proposition especially when you’ve
                already made a significant investment in your network
                infrastructure. <br /> <br /> While buying pre-owned equipment
                certainly reduces your cost, sometimes the best option is to
                repair the equipment you already own.
                <br /> <br /> That is why Elonatech offers industry-leading
                network and wireless hardware repair services. With expert
                technical staff and an advanced tech center, we are well suited
                to serve your repair needs.
              </p>
            </div>
            <div class='col-md-6 common-router'>
              <h3
                className='text-center  mt-5 mb-3'
                style={{ color: '#34548c' }}
              >
                Network & Wireless Network Equipment Repair
              </h3>
              <div className='text-center'>
                <img
                  src='https://i.stack.imgur.com/qq8AE.gif'
                  data-src={wirelessNetwork}
                  alt=''
                  className='img-fluid lazyload rounded'
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* ============================================= */}
      <Getintouch2 />
      {/* ============================================= */}
    </>
  )
}

export default Network
