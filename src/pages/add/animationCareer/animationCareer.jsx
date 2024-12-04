import ApplyNow from '../../../components/ApplyNow/ApplyNow';
import './animationCareer.css'
import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';

const AnimationCareer = () => {

  useEffect(() => {
    sessionStorage.setItem('previousUrl', window.location.href);
  }, []);


    return (
        <>
<Helmet>
       <title>Animations/Motion Graphics & UI/UX Graphic Designer - Tech Solution, Digital Solution</title>
       <meta name="description" content="This is a full-time on-site role for an Animations/Motion Graphics & UI/UX Graphics Designer. 
       The Animations/Motion Graphics & UI/UX Graphics Designer will be responsible for creating designs and developing graphical content for a variety of online media including animations and motion videos as well as User interface designs for websites " />
       <link rel="canonical" href="https://elonatech.com.ng/animation-career" />
</Helmet>

          {/* header */}
          <div class="container-fluid careers-section">
  <div class="text-content">
    <h2>Career</h2>
    <h5>Let's grow together</h5>
    <p class="lead">We’re building a culture at Elonatech where amazing people (like you) can do their best work.<br /> If you’re ready to grow your career and help millions of organizations and SME grow better, you’ve come to the right place.</p>
  </div>
</div>



      <div className="container mt-5">
      <h1 className='my-5' style={{fontSize:"", fontWeight:"800",color:"#34548c" }}>Animations/Motion Graphics & UI/UX Graphic Designer</h1>
        <div class="row justify-content-center mt-3">
          <div class="col-md-6">
          <h5 style={{fontSize:"", fontWeight:"700",color:"#34548c" }}>Role Description:</h5>
          <p className='text-justify'>This is a full-time on-site role for an Animations/Motion Graphics & UI/UX Graphics Designer. The Animations/Motion Graphics & UI/UX Graphics Designer will be responsible for creating designs and developing graphical content for a variety of online media including animations and motion videos as well as User interface designs for websites. The Animations/Motion Graphics & UI/UX Graphics Designer will work closely with the web design and development teams as well as with clients to ensure that their designs meet the client's requirements.</p>
          <p> <span style={{color:"#34548c",fontWeight:"700" }}>Location:</span> Egbeda, Lagos (Mainland) </p>
          <p> <span style={{color:"#34548c",fontWeight:"700" }}>Employment Type: </span> Full-time </p>
          <p className='text-justify'> <span style={{color:"#34548c",fontWeight:"700" }}> Responsibilities:</span>  Should have Experience working in a web development environment, A strong visual and technical portfolio, an agile development process. Should have knowledge of refined graphic designs for websites, UI/UX.
              A high level of proficiency using Adobe products (or equivalent tools). Knowledge of browser compatibility across multiple platforms and devices. Strong ability to design with accessibility in mind. Must have strong skills in 2D & 3D Graphics, Motion Graphics, Familiar with Animate, After effect, Premier Pro, Photoshop, Sketch, Illustrator, Corel Draw, XD, Figma, or equivalent application(s).</p>

              <p> <span style={{color:"#34548c",fontWeight:"700" }}>Qualifications: </span> Minimum of National Diploma in Computer Science, Design, Fine Arts, Physics, Electrical / Electronic or Telecommunications Engineering or other related discipline. </p>
              <p style={{color:"#34548c",fontWeight:"700" }}>Experience:</p>
          <ul>
            <li> Must be able to use Graphics software, Photoshop 70%, CorelDraw 70%, Premier Pro 100%, after effect 100%, Adobe XD 100%, Figma 100%, and other related software.</li>
            <li> Knowledge of cinema4d, Animate, Blender and any other 3d software will be an added advantage.</li>
            <li>Select and develop colors, images, text style, and layout graphics for product illustrations, logos, videos, and websites to convey client message.</li>
            <li> Work on tasks pertaining to design style, format, print production and timescales on all banners, graphics, captions, prints and designs.</li>
           
          </ul>
          </div>
          <div class="col-md-6">
              <ul>
                <li> Support in the development of concepts, graphics and layouts for product illustrations, logos, social media posts, websites & digital campaigns.</li>
                <li> Design and develop micro sites, banners, video ads, rich emails and other electronic media.</li>
                <li> Develop digital storyboards and animations as demanded.</li>
                <li>Integrate visually and enhance creative concept, architecture, UI and navigation design for web sites, online advertising and mobile.</li>
                <li>Exceptional creativity and innovation</li>
                <li> Must be able to work in a team</li>
                <li>Knowledge of copywriting and Search Engine Optimization SEO process or SEM expertise with experience in Google Analytics a plus</li>
                <li>Ability to deliver on deadline.</li>
              </ul>

          <p style={{color:"#34548c",fontWeight:"700" }}>Skills and Abilities:</p>
          <ul>
            <li> Proven graphic design experience with a strong portfolio</li>
            <li>Ability to execute customer requests</li>
            <li>Superior listening, verbal, and written communication skills</li>
            <li> Professional approach to time, costs and deadlines.</li>
          </ul>
          <p style={{color:"#34548c",fontWeight:"700" }}>Personal Attributes</p>
            <ul>
              <li> Loves art and color</li>
              <li>Creative and self-motivating</li>
              <li>Highly organized and detailed</li>
            </ul>

              <p> <span style={{color:"#34548c",fontWeight:"700" }}>Method of Application: </span> Interested and qualified candidates should click the link below to apply </p>
             <p> <span style={{color:"#34548c",fontWeight:"700" }}> Note: </span> All applications will be treated in confidence and only shortlisted candidates will be contacted </p>

            <ApplyNow/>
          </div>
        </div>
      </div>
        </>
    );
}

export default AnimationCareer;


