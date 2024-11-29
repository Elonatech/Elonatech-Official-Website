import Getintouch2 from '../GetInTouch/getintouch2'

// Images

import Header from './caption/computer_eng_iu3lq1.jpg'
import Engineering from './caption/computer_repair_kk8fcb.jpg'
import Repair from './caption/computer-repair_eamoij.jpg'
import Repair2 from './caption/computer-engineering-height_qloe24.jpg'

import { Helmet } from 'react-helmet-async'
import './engineer.css'

const Engineer = () => {
  return (
    <>
      <Helmet>
        <title>Hardware Engineering - Tech Solution, Digital Solution</title>
        <meta
          name='description'
          content='We offer 4 Convenient Computer Repair Options - Pick-up and Return, Onsite Repair, Walk-in and Repair, Remote Support 
       For specialized hardware services, we have highly skilled full-time computer hardware techs who can fix all types of hardware problems including power jacks, keyboards, screens, fans, overheating issues, liquid spills, soldering jobs, loose cabling, and replacement of motherboards and discrete video cards. 
       While computer hardware configurations vary widely, we work on a broad range of hardware systems.
       '
        />
        <link
          rel='canonical'
          href='https://elonatech.com.ng/hardware-engineering'
        />
      </Helmet>

      {/*================================================================  header ================================================*/}
      <div class='container-fluid hardware-engineering-section'>
        <div class='text-content'>
          <h2>Hardware Engineering</h2>
          <h5>Because your business works when your hardware works</h5>
          <p class='lead'>
            While computer hardware configurations vary widely, we work on a
            broad range of hardware systems
          </p>
        </div>
      </div>

      {/*=======================================================================================================================*/}
      <div className='container mt-3 mb-5'>
        <div class='row d-flex align-items-center justify-content-center '>
          <div class='col-md-6'>
            <div className='text-center'>
              <img
                src='https://i.stack.imgur.com/qq8AE.gif'
                data-src={Engineering}
                className='img-fluid  lazyload'
                alt=''
                height={{}}
              />
            </div>
          </div>
          <div class='col-md-6'>
            <p className='' style={{ textAlign: 'justify' }}>
              For specialized hardware services, we have highly skilled
              full-time computer hardware techs who can fix all types of
              hardware problems including power jacks, keyboards, screens, fans,
              overheating issues, liquid spills, soldering jobs, loose cabling,
              and replacement of motherboards and discrete video cards. While
              computer hardware configurations vary widely, we work on a broad
              range of hardware systems.
            </p>
            <ul className='list-unstyled'>
              <li>
                <i class='bi bi-record-circle me-3 '></i>Client Computer Systems
                (Desktop & Laptop PCs)
              </li>
              <li>
                <i class='bi bi-record-circle me-3 mt-5'></i>Servers &
                Workstations
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/*========================================================================================================================*/}
      <div style={{ backgroundColor: '#cccccc ' }}>
        <div className='container-md'>
          <div class='row d-flex align-items-center justify-content-center '>
            <div class='col-md-6'>
              <h4 class='text-dark fw-bold pt-2'>Desktop and Laptop PCs</h4>
              <p class='text-dark' style={{ textAlign: 'justify' }}>
                We offer all kinds of laptop, desktop and server repairs of all
                makes and models, including Windows, Mac and Linux computers. We
                do virus removal <br /> without reformatting so you don't lose
                your important files or photos. We repair both hardware and
                software. We have no queue so come any time and we'll start
                fixing your computer right away.
              </p>
            </div>
            <div class='col-md-6'>
              <div className='text-center'>
                <img
                  src='https://i.stack.imgur.com/qq8AE.gif'
                  data-src={Repair}
                  className='img-fluid my-2  lazyload'
                  alt=''
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*=======================================================  style={{backgroundColor:"#f3e3f0"}}  ==========================*/}
      <div className='container my-5'>
        <div class='row d-flex align-items-center justify-content-center '>
          <div class='col-md-6'>
            <div className='text-center'>
              <img
                src='https://i.stack.imgur.com/qq8AE.gif'
                data-src={Repair2}
                className='img-fluid mt-2 mb-2  lazyload'
                alt=''
              />
            </div>
          </div>
          <div class='col-md-6 mt-2'>
            <h4 className='fw-bold'>
              We offer 4 Convenient Computer Repair Options
            </h4>
            <ul className='list-unstyled '>
              <li className='kos'>
                <i class='bi bi-check-square  me-2 me-lg-3 fs-6'></i>Pick-up and
                Return
              </li>
              <li className='kos'>
                <i class='bi bi-check-square  me-2 me-lg-3'></i>Onsite Repair
              </li>
              <li className='kos'>
                <i class='bi bi-check-square  me-2 me-lg-3'></i>Walk-in and
                Repair
              </li>
              <li className='kos'>
                <i class='bi bi-check-square  me-2 me-lg-3'></i>Remote Support
              </li>
            </ul>
            <h5 className='text-primary'>
              If you require friendly, expert staff and to have your computer
              running better than ever, come to our computer repair workshop or
              give us a call.
            </h5>
          </div>
        </div>
      </div>
      {/* ========================== */}
      <Getintouch2 />
      {/* ========================== */}
    </>
  )
}

export default Engineer