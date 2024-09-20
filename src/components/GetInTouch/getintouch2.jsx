import Quote from './quote';


const Getintouch2 = () => {
  return (
    <>
          <div className=""  style={{ backgroundImage: `url(https://res.cloudinary.com/elonatech/image/upload/v1708529944/getIntouchBanner/talk_to_expert_about_your_project_rysbie.jpg)`, backgroundSize:'cover', backgroundRepeat:'no-repeat', height:'300px', color:'white'}}>
            <div className="container">
              <div className="col-md-7 py-5">
              <div className="p-3">
            {/* <h5 class="fw-bold mb-5" style={{color:""}}>Talk with An Expert About Your Project.</h5> */}
            <h5 class="fw-bold mb-5" style={{color:""}}>Talk to an Expert about your project</h5>
            < Quote />
            </div>
              </div>
              <div className="col-md-6">
               
              </div>
            </div>
         </div>
    </>
  )
}

export default Getintouch2