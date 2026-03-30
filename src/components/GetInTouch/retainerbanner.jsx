import Retainerform from './retainerform'
import './retainer.css'

const Retainerbanner = () => {
  return (
    <>
      <div className='getintouch-wrapper'>
        <div
          className='getintouch-wrapper'
          style={{
            backgroundImage: `url(https://res.cloudinary.com/elonatech/image/upload/v1708529877/getIntouchBanner/Engage_in_a_Conversation_with_a_Specialist_Today_lomk1a.jpg)`
          }}
        >
          <div className='getintouch-content'>
            <h6 className='getintouch-title'>
              Work with someone who already understands your brand.
            </h6>
            <Retainerform />
          </div>
        </div>
      </div>
    </>
  )
}

export default Retainerbanner
