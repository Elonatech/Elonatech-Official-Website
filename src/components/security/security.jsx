import './security.css'
import Getintouch2 from '../GetInTouch/getintouch2'

import securityheader from './caption/secure_access_ygxslf.jpg'
import FirstSecurityImage from './caption/what-is-cybersecurity-1024x631_oh6f73.jpg'
import SecondSecurityImage from './caption/image_quzz9f.png'
import { Helmet } from 'react-helmet-async'

const Security = () => {
  return (
    <>
      <Helmet>
        <title>Network Security Solutions - Protect Your Systems with Cybersecurity & Intrusion Detection</title>
        <meta
          name='description'
          content='Network Security Reasons Why Network Security Is Important. Cybersecurity Assessment Email Software-defined Perimeter security Mobile Device Security Intrusion Detection '
        />
        <link
          rel='canonical'
          href='https://elonatech.com.ng/network-security'
        />
      </Helmet>

      {/*=============================================== Header =================================================*/}
      <div class='container-fluid network-security-section'>
        <div class='text-content'>
          <h2>Network Security</h2>
          <h5>Involves the authorization of access to data in a network</h5>
          <p class='lead'>
            Policies, Processes and Practices adopted to prevent, detect and
            monitor unauthorized access, misuse, modification, or denial of a
            computer
          </p>
        </div>
      </div>

      {/*=================================================================== Cybersecurity ==========================================*/}
      <div className='container mb-5'>
        <div className='row g-0 align-items-center'>
          <div className='col-lg-6 p-3' style={{ backgroundColor: '#2b5592' }}>
            <h2 className='text-white text-center mt-4'>Network Security</h2>
            <h6 className=' text-white mt-4'>
              Reasons Why Network Security Is Important.
            </h6>
            <div className='row mt-5 mb-2'>
              <div className='col-md-6'>
                <div className=''>
                  <ul className='list-unstyled mt-2'>
                    <li className='d-flex text-white'>
                      <i class='bi bi-check-circle  me-3'></i>
                      <p className=''>Network security protects your data</p>
                    </li>
                    <li className='d-flex text-white'>
                      <i class='bi bi-check-circle  me-3'></i>
                      <p className=''>Network security protects client data</p>
                    </li>
                    <li className='d-flex text-white mt-1'>
                      <i class='bi bi-check-circle  me-3'></i>
                      <p className=''>
                        Network security improves your network’s performance
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col-md-6'>
                <div className=''>
                  <ul className='list-unstyled mt-2'>
                    <li className='d-flex text-white'>
                      <i class='bi bi-check-circle  me-3'></i>
                      <p className=''>
                        Network security protects against ransomware
                      </p>
                    </li>
                    <li className='d-flex text-white'>
                      <i class='bi bi-check-circle  me-3'></i>
                      <p className=''>Cyberattacks are on the rise</p>
                    </li>
                    <li className='d-flex text-white'>
                      <i class='bi bi-check-circle  me-3'></i>
                      <p className=''>The world depends on technology</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-6  d-none d-lg-block'>
            <div className='text-center'>
              <img
                src='https://i.stack.imgur.com/qq8AE.gif'
                data-src={FirstSecurityImage}
                className='img-fluid lazyload'
                alt=''
              />
            </div>
          </div>
        </div>
      </div>

      {/*===================================================================== Risk ===========================================*/}
      <div className='container'>
        <div className='row '>
          <div className='col-lg-3 col-md-4'>
            <div className='card-body d-flex align-items-center flex-sm-row'>
              <img
                data-src='https://res.cloudinary.com/elonatech/image/upload/v1709631131/networkSecurityPage/Icon1_raaxvh.svg'
                className='img-fluid lazyload'
                style={{ height: '4rem', weight: '4rem' }}
                alt=''
              />
              <p className='text fs-5 ms-2 mb-0'>Cybersecurity Assessment </p>
            </div>
          </div>
          <div className='col-lg-3 col-md-4'>
            <div className='card-body d-flex align-items-center flex-sm-row'>
              <img
                data-src='https://res.cloudinary.com/elonatech/image/upload/v1709631132/networkSecurityPage/Icon2_dxz8cg.svg'
                className='img-fluid lazyload'
                style={{ height: '4rem', weight: '4rem' }}
                alt=''
              />
              <p className='text fs-5 ms-2 mb-0'>Cyber Risk Quantification</p>
            </div>
          </div>
          <div className='col-lg-3 col-md-4'>
            <div className='card-body d-flex align-items-center flex-sm-row'>
              <img
                data-src='https://res.cloudinary.com/elonatech/image/upload/v1709631134/networkSecurityPage/Icon3_xygxid.svg'
                className='img-fluid lazyload'
                style={{ height: '4rem', weight: '4rem' }}
                alt=''
              />
              <p className='text fs-5 ms-2 mb-0'>Cybersecurity Performance</p>
            </div>
          </div>
          <div className='col-lg-3 col-md-4'>
            <div className='card-body d-flex align-items-center flex-sm-row'>
              <img
                data-src='https://res.cloudinary.com/elonatech/image/upload/v1709631134/networkSecurityPage/Icon3_xygxid.svg'
                className='img-fluid lazyload'
                style={{ height: '4rem', width: '4rem' }}
                alt=''
              />
              <p className='text fs-5 ms-2 mb-0'>Cyber Risk Transfer</p>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================= uiujh ================================================== */}
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-lg-7'>
            <div className='text-center'>
              <img
                src='https://i.stack.imgur.com/qq8AE.gif'
                data-src={SecondSecurityImage}
                className='img-fluid lazyload'
                alt=''
              />
            </div>
          </div>
          <div className='col-lg-5'>
            <div className=''>
              <div className='row'>
                <div className='col-md-6'>
                  <div className='mt-3'>
                    <ul className='list-unstyled mt-2'>
                      <li className='d-flex'>
                        <i class='bi bi-check-circle fs-3 text-danger me-3'></i>
                        <p className='mt-2'>Access Control</p>
                      </li>
                      <li className='d-flex'>
                        <i class='bi bi-check-circle fs-3 text-danger me-3'></i>
                        <p className='mt-2'>Antivirus and Antimalware</p>
                      </li>

                      <li className='d-flex'>
                        <i class='bi bi-check-circle fs-3 text-danger me-3'></i>
                        <p className='mt-2'>Application Security</p>
                      </li>
                      <li className='d-flex'>
                        <i class='bi bi-check-circle fs-3 text-danger me-3'></i>
                        <p className='mt-2'>Cloud Security</p>
                      </li>
                      <li className='d-flex'>
                        <i class='bi bi-check-circle fs-3 text-danger me-3'></i>
                        <p className='mt-2'>Behavioral Analytics</p>
                      </li>
                      <li className='d-flex'>
                        <i class='bi bi-check-circle fs-3 text-danger me-3'></i>
                        <p className='mt-2'>Data Loss Prevention</p>
                      </li>
                      <li className='d-flex'>
                        <i class='bi bi-check-circle fs-3 text-danger me-3'></i>
                        <p className='mt-2'>Email security</p>
                      </li>
                      <li className='d-flex'>
                        <i class='bi bi-check-circle fs-3 text-danger me-3'></i>
                        <p className='mt-2'>Firewall</p>
                      </li>
                      <li className='d-flex'>
                        <i class='bi bi-check-circle fs-3 text-danger me-3'></i>
                        <p className='mt-2'>Workload Security</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='mt-3'>
                    <li className='d-flex'>
                      <i class='bi bi-check-circle fs-3 text-danger me-3'></i>
                      <p className='mt-2'>Intrusion Detection</p>
                    </li>
                    <li className='d-flex'>
                      <i class='bi bi-check-circle fs-3 text-danger me-3'></i>
                      <p className='mt-2'>Intrusion Prevention</p>
                    </li>
                    <li className='d-flex'>
                      <i class='bi bi-check-circle fs-3 text-danger me-3'></i>
                      <p className='mt-2'>Mobile Device Security</p>
                    </li>
                    <li className='d-flex'>
                      <i class='bi bi-check-circle fs-3 text-danger me-3'></i>
                      <p className='mt-2'>Multifactor Authentication</p>
                    </li>
                    <li className='d-flex'>
                      <i class='bi bi-check-circle fs-3 text-danger me-3'></i>
                      <p className='mt-2'>Network Segmentation</p>
                    </li>
                    <li className='d-flex'>
                      <i class='bi bi-check-circle fs-3 text-danger me-3'></i>
                      <p className='mt-2'>Sandboxing</p>
                    </li>
                    <li className='d-flex'>
                      <i class='bi bi-check-circle fs-3 text-danger me-3'></i>
                      <p className='mt-2'>Virtual Private Network</p>
                    </li>
                    <li className='d-flex'>
                      <i class='bi bi-check-circle fs-3 text-danger me-3'></i>
                      <p className='mt-2'>Web Security</p>
                    </li>
                    <li className='d-flex'>
                      <i class='bi bi-check-circle fs-3 text-danger me-3'></i>
                      <p className='mt-2'> Software-defined Perimeter</p>
                    </li>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*======================================================== Get in touch ===========================================*/}
      <Getintouch2 />
    </>
  )
}

export default Security
