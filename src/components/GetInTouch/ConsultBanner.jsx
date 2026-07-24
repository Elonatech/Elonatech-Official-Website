import Session from "./session";
import "./getintouch.css";

const ConsultBanner = () => {
  return (
    <>
      <div className="getintouch-wrapper">
        <div className="getintouch-container">
          <img
            src="https://res.cloudinary.com/dahnwukbz/image/upload/v1783674495/Engage_in_a_Conversation_with_a_Specialist_Today_lomk1a_g5vr6y.jpg"
            alt="Talk with An Expert"
            className="getintouch-background"
          />
          <div className="getintouch-content">
            <h4 className="getintouch-title">
              Engage in a Conversation with a Specialist Today
            </h4>
            <Session />
          </div>
        </div>
      </div>
    </>
  );
};

export default ConsultBanner;
