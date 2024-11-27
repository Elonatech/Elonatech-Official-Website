import Retainerform from './retainerform'
import './retainer.css'

const Retainerbanner = () => {
  return (
    <>
      <div className='getintouch-wrapper'>
        <div className='getintouch-container'>
          <button
            type='button'
            className='btn btn-danger retainer-button'
            data-bs-toggle='modal'
            data-bs-target='#exampleModal'
          >
            <h5 className='pt-2'>Need a Retainer?</h5>
          </button>
          <img
            src='https://res.cloudinary.com/elonatech/image/upload/v1708529877/getIntouchBanner/Engage_in_a_Conversation_with_a_Specialist_Today_lomk1a.jpg'
            alt='Talk with An Expert'
            className='getintouch-background'
          />
          <div className='getintouch-content'>
            {' '}
            <h4 className='getintouch-title'>
              Work with someone who already understands your brand.
            </h4>
          </div>
        </div>
      </div>
    </>
  )
}

export default Retainerbanner
