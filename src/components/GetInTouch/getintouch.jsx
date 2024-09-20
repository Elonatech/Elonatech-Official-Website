import Quote from './quote';


const Getintouch = () => {
  return (
    <div>
   
          <div className=""  style={{ backgroundImage: `url(https://res.cloudinary.com/elonatech/image/upload/v1708598256/getIntouchBanner/talk_to_expert_about_your_digital_needs_jthbar.jpg)`, backgroundSize:'cover', backgroundRepeat:'no-repeat', height:'300px', color:'white'}}>
            <div className="container">
              <div className="col-md-7 py-5">
              <div className="p-3">
            <h4 class="fw-bold mb-5" style={{color:""}}>Talk with An Expert About Your Next Digital Needs.</h4>
            < Quote />
            </div>
              </div>
              <div className="col-md-6">
               
              </div>
            </div>
          
         </div>
    </div>
  )
}

export default Getintouch