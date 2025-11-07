import Getintouch from '../../../components/GetInTouch/getintouch'
import './mail.css'
import { Helmet } from 'react-helmet-async'

const Mail = () => {
  return (
    <>
      <Helmet>
        <title>Email Marketing </title>
        <meta
          name='description'
          content="Email journeys for perfectly timed sends
Email marketing is a powerful marketing channel that uses email to promote your business's products or services. It can help make your customers aware of your latest items or offers by integrating it into your marketing automation efforts.

It's the act of sending a commercial message, typically to a group of people, using email. In its broadest sense, every email sent to a potential or current customer could be considered email marketing. It involves using email to send advertisements, request business, or solicit sales or donations. "
        />
        <link rel='canonical' href='https://elonatech.com.ng/email-marketing' />
      </Helmet>

      {/*================================================= header =================================================*/}
      <div class='container-fluid email-marketing-section'>
        <div class='text-content'>
          <h2>Email Marketing</h2>
          <h5>
            Experience the Next Level of Email Marketing to nurture leads and
            increase sales.
          </h5>
          <p class='lead'>
            A form of direct marketing as well as digital marketing, that uses
            email to promote your business's products or services.
          </p>
        </div>
      </div>

      {/*============================================================= Explore ================================================*/}
      <section class='section' id='explore'>
        <div
          class='container mt-5 mb-5 shadow rounded'
          style={{ backgroundColor: 'rgb(246 246 247)' }}
        >
          <div class='row align-items-center'>
            <div class='col-lg-6'>
              <h3>Email journeys for perfectly timed sends</h3>
              <p style={{ textAlign: 'justify' }} className='mt-4'>
                Email marketing is a powerful marketing channel that uses email
                to promote your business's products or services. It can help
                make your customers aware of your latest items or offers by
                integrating it into your marketing automation efforts.
                <br />
                <br />
                It's the act of sending a commercial message, typically to a
                group of people, using email. In its broadest sense, every email
                sent to a potential or current customer could be considered
                email marketing. It involves using email to send advertisements,
                request business, or solicit sales or donations.
              </p>
            </div>
            <div class='col-md-6'>
              <div className='text-center'>
                <img
                  src='https://i.stack.imgur.com/qq8AE.gif'
                  data-src='https://res.cloudinary.com/elonatech/image/upload/v1709658350/emailPage/email-marketing-business-removebg-preview_w2rpyv.png'
                  className='img-fluid lazyload'
                  alt=''
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*========================================== Email ======================================================*/}
      <div className='container   mb-5' style={{ marginTop: '' }}>
        <div class='row justify-content-center  g-4'>
          <div class='col-lg-6'>
            <div
              className='card mt-3 border-3 border-danger'
              style={{ height: '25rem' }}
            >
              <img
                data-src='https://res.cloudinary.com/elonatech/image/upload/v1709658352/emailPage/email1_720_lq0e3a.jpg'
                alt=''
                className='img-fluid lazyload'
                style={{ height: '24.6rem' }}
              />
            </div>
          </div>
          <div class='col-lg-6 ps-lg-5'>
            <h2 className='mb-4 '>Our Email Marketing Process</h2>
            <ul className='list-unstyled'>
              <li>
                <div className='d-flex'>
                  <i class='bi bi-check-circle-fill fs-4'></i>
                  <h6 className='ms-3 mt-2'>Strategy and Goal Setting</h6>
                </div>
                <p className='taj'>
                  We begin by understanding your business objectives, target
                  audience, and email marketing goals. Based on this
                  information, we develop a customized email marketing strategy
                  that aligns with your overall digital marketing strategy.
                </p>
              </li>
              <li>
                <div className='d-flex'>
                  <i class='bi bi-check-circle-fill fs-4'></i>
                  <h6 className='ms-3 mt-2'>List Building and Segmentation</h6>
                </div>
                <p className='taj'>
                  We help you build a quality email subscriber list through
                  various tactics, such as lead magnets and opt-in forms. We
                  then segment your list based on factors such as demographics,
                  preferences, and past engagement to ensure targeted and
                  personalized messaging.
                </p>
              </li>
              <li>
                <div className='d-flex'>
                  <i class='bi bi-check-circle-fill fs-4'></i>
                  <h6 className='ms-3 mt-2'>Content Creation and Design</h6>
                </div>
                <p className='taj'>
                  Our creative team works closely with you to create compelling
                  email content that aligns with your brand voice and
                  objectives. We design visually appealing email templates that
                  enhance engagement and drive conversions.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className='container  mb-5'>
        <div class='row justify-content-center  g-4'>
          <div class='col-md-7 mt-5'>
            <ul className='list-unstyled'>
              <li>
                <div className='d-flex'>
                  <i class='bi bi-check-circle-fill fs-4'></i>
                  <h6 className='ms-3 mt-2'>
                    Automation and Campaign Execution
                  </h6>
                </div>
                <p className='taj'>
                  We set up automated email workflows, including welcome series,
                  abandoned cart reminders, and post-purchase follow-ups. Our
                  team manages the execution of your email campaigns, ensuring
                  timely delivery and optimal engagement.
                </p>
              </li>
              <li>
                <div className='d-flex'>
                  <i class='bi bi-check-circle-fill fs-4'></i>
                  <h6 className='ms-3 mt-2'>
                    Performance Tracking and Optimization
                  </h6>
                </div>
                <p className='taj'>
                  We monitor the performance of your email campaigns, analyzing
                  open rates, click-through rates, and conversion metrics. Based
                  on data-driven insights, we refine and optimize your campaigns
                  to enhance their effectiveness.
                </p>
              </li>
              <li>
                <div className='d-flex'>
                  <i class='bi bi-check-circle-fill fs-4'></i>
                  <h6 className='ms-3 mt-2'>Re-engagement emails</h6>
                </div>
                <p className='taj'>
                  Set up sequences of win-back emails that engage inactive
                  subscribers to become buyers.
                </p>
              </li>
            </ul>
          </div>
          <div class='col-md-5'>
            <div
              className='card mt-3 border-3 border-danger'
              style={{ height: '25rem' }}
            >
              <img
                data-src='https://res.cloudinary.com/elonatech/image/upload/v1709658356/emailPage/54790_ypqd1o.jpg'
                alt=''
                className='img-fluid lazyload'
                style={{ height: '24.6rem' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/*========================================================= frequent question ========================================================*/}
      <section id='' class='survalliance mb-5 mt-5'>
        <div class='container bg-white'>
          <div class='row gy-4'>
            <div class='col-lg-4'>
              <div className=' text-center'>
                <h2 className='FAQ' style={{ fontWeight: '700' }}>
                  Automated Email FAQs
                </h2>
                <div
                  className='line'
                  style={{ margin: 'auto', color: 'red' }}
                ></div>
              </div>
            </div>
            <div class='col-lg-8'>
              <div class='accordion accordion-flush' id='faqlist'>
                <div class='accordion-item'>
                  <h3 class='accordion-header'>
                    <button
                      class='accordion-button collapsed'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#faq-content-1'
                    >
                      <span class='num'>1.</span>
                      What is automated email?
                    </button>
                  </h3>
                  <div
                    id='faq-content-1'
                    class='accordion-collapse collapse'
                    data-bs-parent='#faqlist'
                  >
                    <div class='accordion-body taj'>
                      Automated marketing emails is the process of setting up
                      emails on autopilot using an email marketing automation
                      tool so that you always convey the right message to the
                      right people on your list at the right time.
                      <br />
                      <br />
                      With email automation, you automate email sending of a
                      single email message or an email series in a timed
                      (predefined delay, specific date, anniversary) or
                      triggered (based on customer actions like purchasing a
                      product or clicking a link in the email) fashion.
                    </div>
                  </div>
                </div>
                <div class='accordion-item'>
                  <h3 class='accordion-header'>
                    <button
                      class='accordion-button collapsed'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#faq-content-2'
                    >
                      <span class='num'>2.</span>
                      How does automatic marketing automation work?
                    </button>
                  </h3>
                  <div
                    id='faq-content-2'
                    class='accordion-collapse collapse'
                    data-bs-parent='#faqlist'
                  >
                    <div class='accordion-body taj'>
                      Email automation is easy to follow once you understand how
                      it operates. Here’s a simplified explanation.
                      <br />
                      <br />
                      Design an email campaign with the emails you wish to send
                      to different segments of users. These could be single
                      email campaigns, such as promotional messages, or
                      multi-email sequences based on what you are trying to do.
                    </div>
                  </div>
                </div>
                <div class='accordion-item'>
                  <h3 class='accordion-header'>
                    <button
                      class='accordion-button collapsed'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#faq-content-3'
                    >
                      <span class='num'>3.</span>
                      What are the benefits of sending email automatically?
                    </button>
                  </h3>
                  <div
                    id='faq-content-3'
                    class='accordion-collapse collapse'
                    data-bs-parent='#faqlist'
                  >
                    <div class='accordion-body taj'>
                      From ecommerce to service-based startups, businesses in
                      nearly every niche and industry can benefit from. The
                      following are just a few of the benefits of email
                      automation. Avoid the cost of additional manpower to
                      handle email correspondence manually
                      <br />
                      <br />
                      Setup an automated email sales funnel at a cost far lesser
                      than selling over other channels such as PPC and social
                      media advertising.
                    </div>
                  </div>
                </div>
                <div class='accordion-item'>
                  <h3 class='accordion-header'>
                    <button
                      class='accordion-button collapsed'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#faq-content-4'
                    >
                      <span class='num'>4.</span>
                      How to send automated emails?
                    </button>
                  </h3>
                  <div
                    id='faq-content-4'
                    class='accordion-collapse collapse'
                    data-bs-parent='#faqlist'
                  >
                    <div class='accordion-body taj'>
                      With the right email service provider, setting up
                      automation for your email marketing strategy can be not
                      only easy, but also fun.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*======================================================= Quote =======================================================*/}
      <Getintouch />
    </>
  )
}

export default Mail
