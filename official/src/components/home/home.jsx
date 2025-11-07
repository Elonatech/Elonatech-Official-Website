import { Helmet } from "react-helmet-async";
import Carousel from "../carousel/carousel";
import Main from "../main/main";


const Home = () => {
    return (
    <>
    <Helmet>
       <title>Tech Solutions & Digital Services - IT Solutions, Web Development & Digital Marketing | ElonaTech</title>
       <meta name="description" content="Top-Notch Technology Service Provider, The IT Solutions and Corporate Consultant Company ,
       Website and App Solutions,  Flexible, Scalable IT Solutions, FREE Consultation on the Best Digital Marketing Strategy " />
       <link rel="canonical" href="https://elonatech.com.ng/" />
    </Helmet>
     <Carousel /> 
     <Main />  
    </>
    );
}

export default Home;