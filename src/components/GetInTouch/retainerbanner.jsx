import Retainerform from "./retainerform";

const Retainerbanner = () => {

    return (
    <>
{/* <div className=""  style={{ backgroundImage: `url(https://res.cloudinary.com/elonatech/image/upload/v1708529877/getIntouchBanner/Engage_in_a_Conversation_with_a_Specialist_Today_lomk1a.jpg)`, backgroundSize:'cover', backgroundRepeat:'no-repeat', height:'300px', color:'white'}}>
<div className="container">
<div className="col-md-7 py-5">
<div className="p-3">
<h3 class="fw-bold mb-5" style={{color:""}}>Work with someone who already understands your brand.</h3>
< Retainerform />
</div>
</div>
<div className="col-md-6">
</div>
</div>
</div> */}

<div className="getintouch-wrapper">
      <div className="getintouch-container">
        <img 
          src="https://res.cloudinary.com/elonatech/image/upload/v1708529877/getIntouchBanner/Engage_in_a_Conversation_with_a_Specialist_Today_lomk1a.jpg" 
          alt="Talk with An Expert" 
          className="getintouch-background"
        />
        <div className="getintouch-content">
          <h4 className="getintouch-title">Work with someone who already understands your brand.</h4>
          < Retainerform />
        </div>
      </div>
    </div>
                  
    </>
    );
}

export default Retainerbanner;
