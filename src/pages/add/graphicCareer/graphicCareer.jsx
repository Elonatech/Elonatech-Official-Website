
import ApplyNow from "../../../components/ApplyNow/ApplyNow";
import { Helmet } from "react-helmet-async";
import './graphicCareer.css'



const GraphicCareer = () => {
    return (
        <>
        <Helmet>
         <title>Graphic Designer/Digital Marketer - Tech Solution, Digital Solution</title>
         <meta name="description" content="This is a full-time on-site role for a Graphic Designer & Digital Marketer. 
         The Graphic Designer/Digital Marketer will be responsible for creating designs and developing graphical content for a variety of online media " />
         <link rel="canonical" href="https://elonatech.com.ng/graphic-career" />
         </Helmet>

     {/* header */}
     <div class="container-fluid careers-section">
  <div class="text-content">
    <h2></h2>
    <h5></h5>
    <p class="lead"></p>
  </div>
</div>


      <div className="container mt-5">
       <h1 className='my-5' style={{fontSize:"", fontWeight:"800",color:"#34548c" }}>Graphic Designer/Digital Marketer</h1>
  
        <div class="row justify-content-center mt-4">
          <div class="col-md-6">
           <h5 style={{fontSize:"", fontWeight:"700",color:"#34548c" }}>Role Description:</h5>
           <p className='text-justify'>This is a full-time on-site role for a Graphic Designer & Digital Marketer. The Graphic Designer/Digital Marketer will be responsible for creating designs and developing graphical content for a variety of online media. The Graphic Designer/Digital Marketer will work closely with the web design and development teams as well as with clients to ensure that their designs meet the client's requirements.</p>
           <p> <span style={{color:"#34548c",fontWeight:"700" }}>Location:</span> Egbeda (Mainland), Lagos</p>
           <p> <span style={{color:"#34548c",fontWeight:"700" }}> Employment Type:</span> Full-time, Onsite</p>
           <p className='text-justify'> <span style={{color:"#34548c",fontWeight:"700" }}> Responsibilities:</span>  A high level of proficiency using Adobe products (or equivalent tools). Highly skilled in social media management and design (Facebook, Twitter, LinkedIn, YouTube, Instagram, Google etc.)
              Strong ability to design with accessibility in mind. Must have strong skills in 2D & 3D Graphics, Familiar with Motion Graphics, and Animations; Must be able to use Adobe After effect, Photoshop, Sketch, Illustrator, Corel Draw, or equivalent application(s).
            </p>
            <p className='text-justify'> <span style={{color:"#34548c",fontWeight:"700" }}> Qualifications:</span>  Minimum of National Diploma in Computer Science, Information System, Design, Fine Arts, Physics, Electrical / Electronics or Telecommunications Engineering or other related discipline.</p>
            <p style={{color:"#34548c",fontWeight:"700" }}>Skills and Abilities:</p>
            <ul>
               <li>Proven graphic design experience with a strong portfolio</li>
               <li>Proven social media and content management skills</li>
               <li>Superior listening, verbal, and written communication skills</li>
               <li>Professional approach to time, costs and deadlines</li>
            </ul>

            <p style={{color:"#34548c",fontWeight:"700" }}>Personal Attributes:</p>
            <ul>
                <li> Loves art and color</li>
                <li> Young and dynamic</li>
                <li>Creative and self-motivating</li>
                <li>Highly organized and detailed</li>
            </ul>
          </div>


          <div class="col-md-6">
             <p style={{color:"#34548c",fontWeight:"700" }}>Experience:</p>
              <ul className='text-justify'>
                    <li> Must have at least 1 year's work experience with proof of professional Graphics Design and Animations.</li>
                    <li> Must be able to use Graphics software, Photoshop 100%, CorelDraw 100%, Illustrator 70% Premier Pro 50%, after effect 80%, and other adobe software.</li>
                    <li> Knowledge of cinema4d, Animate, Blender and any other 3d software will be an added advantage.</li>
                    <li> Experience in Graphics, Graphic Design, Logo Design, and Branding</li>
                    <li> Possess a solid understanding of social media marketing and campaigning</li>
                    <li> Strong typography skills</li>
                    <li> Ability to create engaging and visually appealing designs</li>
                    <li> Proficiency with design software such as Adobe Creative Suite</li>
                    <li> Ability to work in a team setting and meet project deadlines</li>
                    <li> Strong communication skills</li>
                    <li> A portfolio showcasing your design work required</li>
                    <li> Support in the development of concepts, graphics and layouts for product illustrations, logos, social media posts, websites & digital campaigns.</li>
                    <li> Developing concepts, graphics and layouts for product illustrations, company logos, and websites.</li>
                    <li> Design and develop micro sites, banners, video ads, rich emails and other electronic media.</li>
                    <li> Develop digital storyboards and animation as demanded.</li>
                    <li> Knowledge of copywriting and Search Engine Optimization SEO process or SEM expertise with experience in Google Analytics is a plus</li>
                    <li> Work on tasks pertaining to design style, format, print production and timescales on all banners, graphics, captions, prints and designs.</li>
                    <li> Ability to deliver on deadline</li>
              </ul>
              <p className='mt-md-5'> <span style={{color:"#34548c",fontWeight:"700" }}> Method of Application:</span> Interested and qualified candidates should click the link below to apply</p>
              <p className='mt-3'> <span style={{color:"#34548c",fontWeight:"700" }}> Note: </span> All applications will be treated in confidence and only shortlisted candidates will be contacted </p>
              <div className="">
        <ApplyNow />
              </div>
          </div>
        </div>
       
      </div>
        </>
    );
}

export default GraphicCareer;
