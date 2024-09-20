
import ApplyNow from "../../../components/ApplyNow/ApplyNow";
import { Helmet } from "react-helmet-async";
import "./../graphicCareer/graphicCareer.css";
const WebCareer = () => {
    return (
        <>
<Helmet>
       <title>Full Stack Web Developer  - Tech Solution, Digital Solution</title>
       <meta name="description" content="This is a full-time on-site role for a Full Stack Web Developer. The Full Stack Web Developer will be responsible for 
       creating designs and developing 
       websites from conception all the way up to completion, fashioning everything from the home page to site layout, optimization and function." />
       <link rel="canonical" href="https://elonatech.com.ng/web-career" />
</Helmet>

<div class="container-fluid careers-section">
  <div class="text-content">
    <h2></h2>
    <h5></h5>
    <p class="lead"></p>
  </div>
</div>


        {/*  */}
    <div className="container mt-5">
      <h1 className='my-4' style={{fontSize:"", fontWeight:"800",color:"#34548c" }}>Full Stack Web Developer</h1>
        <div class="row justify-content-center mt-3">
          <div class="col-md-6 ">
          <h5 style={{fontSize:"", fontWeight:"700",color:"#34548c" }}>Role Description:</h5>
          <p className='text-justify'>This is a full-time on-site role for a Full Stack Web Developer. The Full Stack Web Developer will be responsible for creating designs and developing websites from conception all the way up to completion, fashioning everything from the home page to site layout, optimization and function. The Full Stack Web Developer will work closely with the design (UI/UX) and development teams as well as with clients to ensure that their designs meet the client's requirements.</p>
          <p> <span style={{color:"#34548c",fontWeight:"700" }}>Location:</span> Egbeda, Lagos (Mainland) </p>
          <p> <span style={{color:"#34548c",fontWeight:"700" }}>Employment Type: </span> Full-time </p>
        
          <p className='text-justify'> <span style={{color:"#34548c",fontWeight:"700" }}> Responsibilities:</span>  A strong visual and technical portfolio. Must have good web development skills. Experience working in an agile development process. Familiarity with multiple HTML frameworks, should have knowledge of PHP application development, strong JavaScript & jQuery skills (such as consuming APIs) Build and refine UI/UX graphic designs for website development. Must be familiar with at least one Content Management System (CMS)
            Knowledge of browser compatibility across multiple platforms and devices. Strong ability to design with accessibility in mind. Must have strong skills in equivalent application(s).</p>
            <p style={{color:"#34548c",fontWeight:"700" }}>Experience:</p>
            <ul>
              <li>Must have at least 2 years' work experience with proof of Web Development</li>
              <li>Should have knowledge of Java Script, React JS, MongoDB, Node JS, Angular, HTML 5, CSS3, Ajax, jQuery, Flutter, Express, WordPress, etc.</li>
              <li>Knowledge of web application security principles, XML and web services (SOAP, REST) would be an advantage.</li>
              <li>Create, maintain, and implement the source code to develop web applications that meet the needs and requirements of the clients</li>
              <li>Web developer responsibilities include building websites from concept all the way to completion from the bottom up, fashioning everything from the home page to site layout, optimization and function.</li>
             </ul>
          </div>
          <div class="col-md-6 ">
           <ul>
              <li> Experience with developing E-commerce/enterprise applications would be an advantage</li>
              <li> Knowledge of at least one popular web development framework would be an advantage</li>
              <li> Knowledge of at least one popular Mobile App development framework would be an advantage</li>
              <li> Basic knowledge of Search Engine Optimization process or SEM expertise with experience in Google Analytics.</li>
              <li> Experience or thorough working knowledge of WordPress front-end themes</li>
              <li> Keeping up to date with the terminology, concepts and best practices for coding web apps</li>
              <li> Execute top-quality design from concept to delivery complying with brand standards in execution of marketing materials.</li>
              <li> Integrate visually and enhance creative concept, architecture, UI, prototype and navigation design for web sites, online advertising and mobile.</li>
           </ul>
           <p style={{color:"#34548c",fontWeight:"700" }}>Skills and Abilities:</p>
           <ul>
              <li> Exceptional creativity and innovation</li>
              <li> Must be able to work in a team</li>
              <li> Excellent verbal and written communication skills</li>
              <li> Professional approach to time, costs and deadlines</li>
           </ul>

           
           <p> <span style={{color:"#34548c",fontWeight:"700" }}>Method of Application: </span> Interested and qualified candidates should click the link below to apply </p>
             <p> <span style={{color:"#34548c",fontWeight:"700" }}> Note: </span> All applications will be treated in confidence and only shortlisted candidates will be contacted </p> 
             <ApplyNow />
          </div>
        </div>
      </div>

        </>
    );
}

export default WebCareer;
