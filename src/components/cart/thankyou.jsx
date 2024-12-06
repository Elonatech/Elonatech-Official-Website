import './thankyou.css'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton
} from 'react-share'
import { FaFacebook, FaTwitter, FaWhatsapp, FaLinkedin } from 'react-icons/fa'

const Thankyou = () => {
  const currentUrl = window.location.href

  return (
    <>
      <Helmet>
        <title>Thank You - Tech Solution, Digital Solution</title>
        <meta
          name='description'
          content='Thank you for shopping with us. Your order was successfully completed!'
        />
        <link rel='canonical' href='https://elonatech.com.ng/' />
      </Helmet>

      {/* Order Confirmation Section */}
      <div className='container-fluid order-confirmation-section'>
        <div className='text-content'>
          <h2>Your order was successfully completed</h2>
          <h5>We appreciate your trust in us.</h5>
        </div>
      </div>

      {/* Thank You Section */}
      <div className='untree_co-section' style={{ background: '#eff2f1' }}>
        <div className='container py-5'>
          <div className='row'>
            <div className='col-md-12 text-center pt-5'>
              <span className='display-3 thankyou-icon text-dark'>
                <svg
                  width='1em'
                  height='1em'
                  viewBox='0 0 16 16'
                  className='bi bi-cart-check mb-5'
                  fill='currentColor'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M11.354 5.646a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708 0z'
                  />
                  <path
                    fillRule='evenodd'
                    d='M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z'
                  />
                </svg>
              </span>
              <h2 className='display-3 text-dark fw-bold'>Thank you!</h2>
              <h5 className='mb-5'>Your order was successfully completed.</h5>
              <Link to={'/shop'} className='cart-btn'>
                Back to shop
              </Link>
            </div>
          </div>

          {/* Social Media Share Section */}
          <div className='row'>
            <div className='col-md-12 text-center mt-5'>
              <h5 className='text-dark fw-bold'>Share your experience:</h5>
              <div className='social-share-buttons'>
                <FacebookShareButton
                  url={currentUrl}
                  quote='Check out this amazing product I purchased!'
                >
                  <FaFacebook className='social-icon icon-btn' />
                </FacebookShareButton>
                <TwitterShareButton
                  url={currentUrl}
                  title='Check out this amazing product I purchased!'
                >
                  <FaTwitter className='social-icon icon-btn' />
                </TwitterShareButton>
                <WhatsappShareButton
                  url={currentUrl}
                  title='Check out this amazing product I purchased!'
                >
                  <FaWhatsapp className='social-icon icon-btn' />
                </WhatsappShareButton>
                <LinkedinShareButton
                  url={currentUrl}
                  title='Check out this amazing product I purchased!'
                >
                  <FaLinkedin className='social-icon icon-btn' />
                </LinkedinShareButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Thankyou
