import './footer.css'
import eloa2 from './caption/Elonatech icon.png'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASEURL } from '../../BaseURL/BaseURL'

const Footer = () => {
  const [currentAdmin, setCurrentAdmin] = useState('')
  const [email, setEmail] = useState('')
  const [mailchimp, setMailChimp] = useState('')

  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem('token'))
    setCurrentAdmin(auth)
  }, [])

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const newData = {
        email
      }
      const mail = await axios.post(
        `${BASEURL}/api/v1/email/mailchimp`,
        newData,
        { headers: { 'Content-Type': 'Application/json' } }
      )
      if (mail) {
        setMailChimp('visible')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <footer id='footer' class='footer' style={{ backgroundColor: '#11253D' }}>
        <div class='container text-white'>
          <div class='row gy-4 '>
            <div class='col-lg-3 col-6 footer-info'>
              <div className=''>
                <img
                  data-src={eloa2}
                  class='lazyload mx-4'
                  style={{ height: '5rem', width: '5rem' }}
                />
              </div>
              <div className=''>
                <span>
                  <h4 className='mt-4 text-white'>ELONATECH NIGERIA LIMITED</h4>
                </span>
              </div>
              <p className=''>
                4 , Oluwakemi Street, Shasha Road,
                <br /> Egbeda, Lagos.
              </p>
              <div className=''>
                <p className=' mb-2 text-white'>info@elonatech.com.ng</p>
                <p className='text-white'>+234 901 454 4520</p>
              </div>
              <div class='social-links d-flex justify-content-start mt-2'>
                <Link class='twitter' to={'https://twitter.com/Elonatech'}>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    fill='currentColor'
                    class='bi bi-twitter-x  social-links-icon'
                    viewBox='0 0 16 16'
                  >
                    <path d='M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z' />
                  </svg>
                </Link>
                <Link
                  class='facebook'
                  target='_blank'
                  rel='noopener noreferrer'
                  to={'https://www.facebook.com/elonatech'}
                >
                  <i class='bi bi-facebook social-links-icon'></i>
                </Link>
                <Link
                  class='instagram'
                  target='_blank'
                  rel='noopener noreferrer'
                  to={'https://www.instagram.com/elonatech'}
                >
                  <i class='bi bi-instagram social-links-icon'></i>
                </Link>
                <Link
                  class='linkedin'
                  target='_blank'
                  rel='noopener noreferrer'
                  to={'https://www.linkedin.com/company'}
                >
                  <i class='bi bi-linkedin social-links-icon'></i>
                </Link>
                <Link
                  class='linkedin'
                  target='_blank'
                  rel='noopener noreferrer'
                  to={'https://www.youtube.com/@elonatech'}
                >
                  <i class='bi bi-youtube social-links-icon'></i>
                </Link>
                <Link
                  class='linkedin'
                  target='_blank'
                  rel='noopener noreferrer'
                  to={'https://wa.me/message/NW4HSVIHRNRLA1'}
                >
                  <i class='bi bi-whatsapp social-links-icon'></i>
                </Link>
              </div>
            </div>
            <div class='col-lg-2 col-6 footer-links'>
              <h4>Who We Are</h4>
              <div>
                <ul>
                  <li>
                    <Link to={'/who-we-are'}>Company</Link>
                  </li>
                  <li>
                    <Link to={'/our-team'}>Team</Link>
                  </li>
                  <li>
                    <Link to={'/portfolio'}>Portfolio</Link>
                  </li>
                </ul>
              </div>
              <h4 className='mt-2'>Products</h4>
              <ul>
                <li>
                  <Link to={'/computers'}>Computers</Link>
                </li>
                <li>
                  <Link to={'/printers'}>Printers</Link>
                </li>
                <li>
                  <Link to={'/office-equipment'}>Office Equipment</Link>
                </li>
                <li>
                  <Link to={'/pos-system'}>POS Systems</Link>
                </li>
                <li>
                  <Link to={'/network-devices'}>Network Devices</Link>
                </li>
              </ul>
            </div>
            <div class='col-lg-2 col-6 footer-links'>
              <h4>Our Services</h4>
              <div>
                <ul>
                  <li>
                    <Link to={'/hardware-engineering'}>
                      Computer Engineering
                    </Link>
                  </li>
                  <li>
                    <Link to={'/network-administration-implementation'}>
                      Network Administration
                    </Link>
                  </li>
                  <li>
                    <Link to={'/cctv'}>CCTV Installation</Link>
                  </li>
                  <li>
                    <Link to={'/access-control'}>Access Control</Link>
                  </li>
                  <li>
                    <Link to={'/ip-telephony'}>IP Telephony</Link>
                  </li>
                  <li>
                    <Link to={'/application-software'}>
                      Application Software
                    </Link>
                  </li>
                  <li>
                    <Link to={'/web-design'}>Web Design/Dev</Link>
                  </li>
                  <li>
                    <Link to={'/digital-marketing'}>Digital Marketing</Link>
                  </li>
                  <li>
                    <Link to={'/social-media-marketing'}>
                      Social Media Marketing
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div class='col-lg-2 col-6 footer-links'>
              <h4>Our Services</h4>
              <ul className=''>
                <li className=''>
                  <Link to={'/brand-identity'}>Brand Development</Link>
                </li>
                <li>
                  <Link to={'/uiux'}>UI/UX & Prototyping</Link>
                </li>
                <li>
                  <Link to={'/motion-graphics'}>Motion Graphics</Link>
                </li>
                <li>
                  <Link to={'/livestreaming'}>Livestreaming</Link>
                </li>
                <li>
                  <Link to={'/network-support'}>Network Support</Link>
                </li>
                <li>
                  <Link to={'/remote-support'}>Remote Support</Link>
                </li>
                <li>
                  <Link to={'/retainer-partnership'}>Retainership</Link>
                </li>
                <li>
                  <Link to={'/training'}>Training</Link>
                </li>
                <li>
                  <Link to={'/consumables'}>Consumables</Link>
                </li>
              </ul>
            </div>

            {/* style={{maxWidth: '286px', margin: '0 auto'}} */}
            <div
              class='col-lg-2 col-md-12 footer-contact text-center text-md-start'
              minnn
            >
              <div className='center-uip'>
                <iframe
                  name='f143a283b9937e8'
                  class='embed-responsive-item'
                  data-testid='fb:page Facebook Social Plugin'
                  title='fb:page Facebook Social Plugin'
                  frameborder='0'
                  allowtransparency='true'
                  allowfullscreen='true'
                  scrolling='no'
                  allow='encrypted-media'
                  src='https://www.facebook.com/v3.2/plugins/page.php?app_id=&container_width=286&hide_cover=true&href=https%3A%2F%2Fwww.facebook.com%2Felonatech&locale=en_US&sdk=joey&show_facepile=true&small_header=false&tabs='
                ></iframe>
              </div>
              {mailchimp === 'visible' ? (
                <div>
                  <p className='text-danger'>
                    Thank You For Subscribing to Our Awesome Montly Newsletter!
                  </p>
                </div>
              ) : (
                <>
                  <div class='center-uip'>
                    <form className=''>
                      <div class='mb-3'>
                        <input
                          type='email'
                          class='form-control rounded-0 '
                          style={{ width: '18rem' }}
                          id='exampleInputEmail1'
                          onChange={e => setEmail(e.target.value)}
                          placeholder='Your email*'
                          aria-describedby='emailHelp'
                          required
                        />
                      </div>
                      <div class='d-grid gap-2'>
                        <button
                          onClick={handleSubmit}
                          class='btn btn-danger mb-3 '
                          style={{ width: '18rem' }}
                        >
                          Subscribe
                        </button>
                      </div>

                      <div class='form-check'>
                        <label class='form-check-label' htmlFor='exampleCheck1'>
                          <input
                            type='checkbox'
                            class='form-check-input'
                            required='required'
                          />
                          I accept the
                          <Link className='ps-2 text-white' to={'/policy'}>
                            Privacy Policy<span className='text-danger'>*</span>
                          </Link>
                        </label>
                      </div>
                    </form>
                  </div>
                </>
              )}
              <div className='text-center mt-4'>
                {currentAdmin ? (
                  <Link
                    to={'/login'}
                    className='text-decoration-none text-white'
                  >
                    <i
                      class='bi bi-unlock-fill'
                      style={{ cursor: 'pointer', color: '#11253D' }}
                    ></i>
                  </Link>
                ) : (
                  <Link
                    to={'/login'}
                    className='text-decoration-none text-white'
                  >
                    <i
                      class='bi bi-lock-fill'
                      style={{ cursor: 'pointer', color: '#11253D' }}
                    ></i>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
        <div class='container mt-4 text-white'>
          <div class='copyright'>
            Copyright &copy; 2024 All rights reserved | Designed & Developed by{' '}
            <span className='text-danger'>Elonatech Nigeria Limited</span>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
