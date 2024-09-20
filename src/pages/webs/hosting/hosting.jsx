import './host.css';
import Getintouch from '../../../components/GetInTouch/getintouch';
import { Helmet } from 'react-helmet-async';


const Hosting = () => {
    return (
     <>
     
<Helmet>
       <title>Website Hosting - Tech Solution</title>
       <meta name="description" content="
Why Choose Cloud Hosting with Elonatech?
We offer highly reliable & affordable Website Hosting Solutions to both individuals & businesses of all sizes in Nigeria. Our Web Hosting Plans are all that you would ever need to get your website online. Elonatech is a leading Web Hosting provider with thousand of websites hosted on our servers globally.
Our cloud web hosting is designed to deliver a faster site. A faster website means customers will stay on your site, thus leading to more purchases and gaining subscribers.
" />
       <link rel="canonical" href="https://elonatech.com.ng/hosting" />
</Helmet>

{/*==================================================================================== header ============================================================*/}
<div class="container-fluid website-hosting-section">
  <div class="text-content">
    <h2>Website Hosting</h2>
    <h5>Experience the Best Service That Allows You to Store Your Website Data</h5>
    <p class="lead">Our servers guarantee uptime on all our hosting plans at the most affordable prices.</p>
  </div>
</div>


 {/*====================================================================== Work Section Begin  =============================================================*/}
 <section class="work-section spad">
        <div class="container">
            <div class="row">   
                <div class="col-lg-12">
                    <div class="section-title">
                        <p className='text-center mb-4 mt-5 fs-3 fw-bold' >HOW TO BUILD YOUR WEBSITE ONLINE TODAY?</p>
                    </div>
                    <div class="work__text" style={{boxShadow:" 0 0 10px 5px rgba(0,0,0,0.6)"}}>
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="work__item">
                                    <i class="fa fa-desktop"></i>
                                    <span>CREATE YOUR OWN WEBSITE WITH OUR</span>
                                    <h3>WordPress Builder</h3>
                                    <p className='lead fs-6'>WordPress is widely regarded as one of the best content management systems (CMS). Many popular and large-scale websites use this platform.
                                    <br /><br />
                                    it is a great choice for a personal website or to use to grow a small business with a relatively limited budget.
                                     </p>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="work__item">
                                    <i class="fa fa-shopping-bag"></i>
                                    <span>EASY CREATE, MANAGE & SELL</span>
                                    <h3>Code-Based Websites</h3>
                                    <p className='lead fs-6'>For many small and medium businesses (especially those with an online store) the choice is clear, website created with codes offers more flexibility and customization. 
                                    <br /><br />
                                    In order to code a website you will need HTML and CSS, or general programming languages like Javascript or Python. This is where we come in. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</section>
{/* ========================================================================================================================= */}
<section class="hosting-section spad mb-5">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title">
                        <p className='text-center mb-5 mt-5 fs-3 fw-bold'>Cloud Hosting Plan Perfect For You</p>
                    </div>

                    <div class="hosting__text">
                        <div class="tab-content">
                            <div class="tab-pane active" role="tabpanel">
                                <div class="hosting__feature__table">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>
                                                    <div class="hosting__feature__plan--choose">
                                                        <span>Cloud Hosting Features</span>
                                                        <div class="chose__title">CHOOSE PERFECT PLAN</div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div class="hosting__feature--plan">
                                                        <div class="plan__title">Iron</div>
                                                        <div class="hosting__feature--price">
                                                            <p><del className='text-danger me-2'>$7.00</del><button style={{borderRadius:"20px"}} className='border-0'>save 73%</button></p>
                                                            <div class="plan__price">$2.33</div>
                                                            <span>monthly</span>
                                                            <p>Renews at $ 1.66</p>
                                                        </div>
                                                    
                                                    </div>
                                                </th>
                                                <th>
                                                    <div class="hosting__feature--plan">
                                                        <div class="plan__title">Bronze</div>
                                                        <div class="hosting__feature--price">
                                                        <p><del className='text-danger me-2'>$8.99</del>  <button style={{borderRadius:"20px"}} className='border-0'>save 53%</button></p>
                                                            <div class="plan__price">$4.80</div>
                                                            <span>monthly</span>
                                                            <p>Renews at $ 3.50</p>
                                                        </div>
                                                       
                                                    </div>
                                                </th>
                                                <th>
                                                    <div class="hosting__feature--plan">
                                                        <div class="plan__title">Sliver</div>
                                                        <div class="hosting__feature--price">
                                                        <p><del className='text-danger me-2'>$13.99</del><button style={{borderRadius:"20px"}} className='border-0'>save 58%</button></p>
                                                            <div class="plan__price">$6.20</div>
                                                            <span>monthly</span>
                                                            <p>Renews at $ 5.25</p>
                                                        </div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div class="hosting__feature--plan">
                                                        <div class="plan__title">Gold</div>
                                                        <div class="hosting__feature--price">
                                                        <p><del className='text-danger me-2'>$18.99</del><button style={{borderRadius:"20px"}} className='border-0'>save 47%</button></p>
                                                            <div class="plan__price">$12.00</div>
                                                            <span>monthly</span>
                                                            <p>Renews at $ 10.00</p>
                                                        </div>
                                                    </div>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td class="hosting__feature--item">Number of Websites</td>
                                                <td class="hosting__feature--info">1 Website</td>
                                                <td class="hosting__feature--info">Multiple Websites
                                                </td>
                                                <td class="hosting__feature--info">Multiple Websites
                                                </td>
                                                <td class="hosting__feature--info">Multiple Websites
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">Bandwidth</td>
                                                <td class="hosting__feature--info">10 GB</td>
                                                <td class="hosting__feature--info">Unlimited</td>
                                                <td class="hosting__feature--info">Unlimited</td>
                                                <td class="hosting__feature--info">Unlimited</td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">Web Space</td>
                                                <td class="hosting__feature--info">1 GB SSD Disk Space</td>
                                                <td class="hosting__feature--info">30 GB NVMe Disk Space</td>
                                                <td class="hosting__feature--info">50 GB NVMe Disk Space</td>
                                                <td class="hosting__feature--info">100 GB NVMe Disk Space</td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">Free Domain Registration</td>
                                                <td class="hosting__feature--check">
                                                <i class="bi bi-check-circle-fill"></i>
                                                </td>
                                                <td class="hosting__feature--check">
                                                <i class="bi bi-check-circle-fill"></i>
                                                </td>
                                                <td class="hosting__feature--check">
                                                <i class="bi bi-check-circle-fill"></i>
                                                </td>
                                                <td class="hosting__feature--check">
                                                <i class="bi bi-check-circle-fill"></i>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">SSL certificates</td>
                                                <td class="hosting__feature--check">
                                                    <i class="bi bi-check-circle-fill"></i>
                                                </td>
                                                <td class="hosting__feature--check">
                                                    <i class="bi bi-check-circle-fill"></i>
                                                </td>
                                                <td class="hosting__feature--check">
                                                    <i class="bi bi-check-circle-fill"></i>
                                                </td>
                                                <td class="hosting__feature--check">
                                                    <i class="bi bi-check-circle-fill"></i>
                                                </td>
                                               
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">Free Migrations</td>
                                                <td class="hosting__feature--check">
                                                <i class="bi bi-check-circle-fill"></i>  
                                                </td>
                                                <td class="hosting__feature--check">
                                                 <i class="bi bi-check-circle-fill"></i>
                                                </td>
                                                <td class="hosting__feature--check">
                                                <i class="bi bi-check-circle-fill"></i>
                                                </td>
                                                <td class="hosting__feature--check">
                                                <i class="bi bi-check-circle-fill"></i>
                                                </td>
                                               
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">cPanel Control Panel</td>
                                                <td class="hosting__feature--check">
                                                <i class="bi bi-check-circle-fill"></i>  
                                                </td>
                                                <td class="hosting__feature--check">
                                                 <i class="bi bi-check-circle-fill"></i>
                                                </td>
                                                <td class="hosting__feature--check">
                                                <i class="bi bi-check-circle-fill"></i>
                                                </td>
                                                <td class="hosting__feature--check">
                                                <i class="bi bi-check-circle-fill"></i>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">Daily Backups</td>
                                                <td class="hosting__feature--check">
                                                <i class="bi bi-check-circle-fill"></i>  
                                                </td>
                                                <td class="hosting__feature--check">
                                                 <i class="bi bi-check-circle-fill"></i>
                                                </td>
                                                <td class="hosting__feature--check">
                                                <i class="bi bi-check-circle-fill"></i>
                                                </td>
                                                <td class="hosting__feature--check">
                                                <i class="bi bi-check-circle-fill"></i>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">LiteSpeed</td>
                                                <td class="hosting__feature--check">
                                                <i class="bi bi-check-circle-fill"></i>  
                                                </td>
                                                <td class="hosting__feature--check">
                                                 <i class="bi bi-check-circle-fill"></i>
                                                </td>
                                                <td class="hosting__feature--check">
                                                <i class="bi bi-check-circle-fill"></i>
                                                </td>
                                                <td class="hosting__feature--check">
                                                <i class="bi bi-check-circle-fill"></i>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="hosting__feature--item">45 Days  Guarantee</td>
                                                <td class="hosting__feature--check">
                                                <i class="bi bi-check-circle-fill"></i>  
                                                </td>
                                                <td class="hosting__feature--check">
                                                 <i class="bi bi-check-circle-fill"></i>
                                                </td>
                                                <td class="hosting__feature--check">
                                                <i class="bi bi-check-circle-fill"></i>
                                                </td>
                                                <td class="hosting__feature--check">
                                                <i class="bi bi-check-circle-fill"></i>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                         
                        </div>
                    </div>
                </div>
            </div>
        </div>
</section>
{/*================================================================== cloud ==================================================*/} 
<div className="container  mb-5">
    <div className="row">
        <div className="col-md-6">
                <div className="text-center">
                   <img  data-src="https://res.cloudinary.com/elonatech/image/upload/v1709647614/hostingPage/Why-Choose-Cloud-Hosting-withVerpex.com_2023-04-30-114836_ynww_kv7oij.png" className='lazyload img-fluid' style={{height:"20rem" , width:"30rem"}} alt="" />
               </div>
        </div>
        <div className="col-md-6 mt-5">
            <div className="">
                <div className="text-start">
                    <h5 className='fw-bold fs-3'>Why Choose Cloud Hosting with Elonatech?</h5>
                    <p className='fs-6' style={{textAlign:"justify"}}>
                    We offer highly reliable & affordable Website Hosting Solutions to both individuals & businesses of all sizes in Nigeria. 
                    Our Web Hosting Plans are all that you would ever need to get your website online.
                     Elonatech is a leading Web Hosting provider with thousand of websites hosted on our servers globally.
                      <br /><br />
                      Our cloud web hosting is designed to deliver a faster site. 
                      A faster website means customers will stay on your site, thus leading to more purchases and gaining subscribers.
                      <br /><br />
                      Your success is ours. Elonatech cloud hosting packages allow you to build your web or business venture toward continuous growth.
 
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
{/*==========================================================================================================================  */}
< Getintouch />
{/*==========================================================================================================================  */}
</>
    );
}

export default Hosting;
