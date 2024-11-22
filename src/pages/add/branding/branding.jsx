import './branding.css'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Client1 from './Brand-Img/Safebrooks-Logo-png.png'
import Client2 from './Brand-Img/Jigirinty_sewage-energy.png'
import Client3 from './Brand-Img/MTMSD-logo_3d.png'
import Client4 from './Brand-Img/PFN-Logo.png'
import Client5 from './Brand-Img/Remaben_Logo-removebg-preview.png'
import Client6 from './Brand-Img/Universal-Peace-Chaplains.png'
import Client7 from './Brand-Img/okhma_360.jpg'
import Client8 from './Brand-Img/ozone_cinemas_logo-removebg-preview_360.png'

import Getintouch from '../../../components/GetInTouch/getintouch'

import { Helmet } from 'react-helmet-async'

const Branding = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: 'linear'
  }

  const sliderStyle = {
    padding: '10px' // Adjust this value to control the margin
  }

  return (
    <>
      <Helmet>
        <title>Brand Development - Tech Solution</title>
        <meta
          name='description'
          content='Brand identity is not limited to a specific mark or name. Branding can incorporate multiple touch points. These touch points include; logo, customer service, treatment and training of employees, packaging, advertising, stationery, and quality of products and services. Any means by which the general public comes into contact with a specific brand constitutes a touch point that can affect perceptions of the corporate brand. '
        />
        <link rel='canonical' href='https://elonatech.com.ng/brand-identity' />
      </Helmet>

      {/* header */}
      <div class='container-fluid brand-development-section'>
        <div class='text-content'>
          <h2>Brand Development</h2>
          <h5>
            It’s much more than a logo, it's actually at the intersection of
            strategy and design
          </h5>
          <p class='lead'>
            “A Brand Is No Longer What We Tell The Consumer It Is - It Is What
            Consumers Tell Each Other It Is.” – <span>SCOTT COOK</span>
          </p>
        </div>
      </div>

      {/* branding */}
      <div className='container mt-5'>
        <div className='' style={{ margin: '2rem 0' }}>
          <div class='row justify-content-evenly gx-4 mt-5 align-items-center'>
            <div class=' col-lg-6'>
              <p className='text-justify'>
                {' '}
                <span className='fw-bold'>Brand identity</span> is not limited
                to a specific mark or name. Branding can incorporate multiple
                touch points. These touch points include; logo, customer
                service, treatment and training of employees, packaging,
                advertising, stationery, and quality of products and services.
                Any means by which the general public comes into contact with a
                specific brand constitutes a touch point that can affect
                perceptions of the corporate brand.
                <br />
                <br /> Brand identity is the visible elements of a brand, such
                as color, design, and logo, that identify and distinguish the
                brand in consumers' minds. Brand identity is distinct from brand
                image. It corresponds to the intent behind the branding and the
                way a company does it, all to cultivate a certain image in
                consumers' minds. It’s much more than a logo, Elonatech brand
                identity development service is actually at the intersection of
                strategy and design.
              </p>
            </div>
            <div class=' col-lg-6'>
              <img
                src='https://res.cloudinary.com/elonatech/image/upload/v1709661458/brandingPage/branding_hlrwz8.png'
                class='img-fluid rounded '
                alt=''
              />
            </div>
          </div>

          <div class='row justify-content-evenly mt-4  flex-column-reverse flex-lg-row'>
            <div class='col-lg-6'>
              <img
                src='https://res.cloudinary.com/elonatech/image/upload/v1710315652/brandingPage/brandin_2_aj6mxs.jpg'
                class='img-fluid rounded'
                alt=''
              />
            </div>
            <div class='col-lg-6 '>
              <h4 className='text-danger fw-bold  pb-2'>
                Why Does Brand Identity Matter?
              </h4>
              <p className='text-justify'>
                {' '}
                Brand identity matters because without it, customers are not
                able to recognize a brand easily. A strong brand may helps sell
                a company to consumers. <br /> <br />
                <h4 className='text-danger fw-bold pb-2'>
                  What Makes a Good Brand?{' '}
                </h4>
                A good brand has a clear focus, strong visuals, is familiar with
                its target audience (family versus mature audience, for example)
                and is easily recognizable in a sea of similar brands. Our Brand
                Development Process Includes: Defining your business goals and
                objectives, conducting and analyzing primary research, and
                launching a full visual exploration of how you see yourselves
                and your place in the market.
                <br />
                <br />
                Elonatech brand professionals can manage the end-to-end process
                from corporate naming through marketing your brand internally
                and externally to multiple audiences including vendors,
                shareholders, consumers and employees.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* carousel */}
      <div className='container  '>
        <div
          id='carouselExampleControls'
          class='carousel slide  '
          data-bs-ride='carousel'
        >
          <div class='carousel-indicators'>
            <button
              type='button'
              data-bs-target='#carouselExampleIndicators'
              data-bs-slide-to='0'
              class='active'
              aria-current='true'
              aria-label='Slide 1'
            ></button>
            <button
              type='button'
              data-bs-target='#carouselExampleIndicators'
              data-bs-slide-to='1'
              aria-label='Slide 2'
            ></button>
            <button
              type='button'
              data-bs-target='#carouselExampleIndicators'
              data-bs-slide-to='2'
              aria-label='Slide 3'
            ></button>
          </div>
          <div class='carousel-inner'>
            <div class='carousel-item   active'>
              <img
                src='https://res.cloudinary.com/elonatech/image/upload/v1709661554/brandingPage/elona_sationaries_brand_wvtpjy.jpg'
                class='d-block w-100 '
                alt='...'
              />
            </div>
            <div class='carousel-item'>
              <img
                src='https://res.cloudinary.com/elonatech/image/upload/v1710315639/brandingPage/Remaben_brand_vwwd8m.jpg'
                class='d-block w-100 '
                alt='...'
              />
            </div>
            <div class='carousel-item'>
              <img
                src='https://res.cloudinary.com/elonatech/image/upload/v1710315639/brandingPage/safebrooks_fupkl3.jpg'
                class='d-block w-100 '
                alt='...'
              />
            </div>
          </div>
          <button
            class='carousel-control-prev'
            type='button'
            data-bs-target='#carouselExampleControls'
            data-bs-slide='prev'
          >
            <span class='carousel-control-prev-icon' aria-hidden='true'></span>
            <span class='visually-hidden'>Previous</span>
          </button>
          <button
            class='carousel-control-next'
            type='button'
            data-bs-target='#carouselExampleControls'
            data-bs-slide='next'
          >
            <span class='carousel-control-next-icon' aria-hidden='true'></span>
            <span class='visually-hidden'>Next</span>
          </button>
        </div>
      </div>

      {/* CLIENT */}
      <div class='container mt-5 mb-5 '>
        <h5
          className='text-center FAQ pb-5'
          style={{ color: '#2b5592', fontWeight: '800' }}
        >
          {' '}
          Some Of Our Clients
        </h5>

        <div>
          <Slider {...settings} style={sliderStyle}>
            <div>
              {/* safebrooks */}
              <h3>
                <img
                  src={Client1}
                  alt=''
                  style={{ height: '60px', width: '60px' }}
                  className='clients'
                />
              </h3>
            </div>
            <div>
              <h3>
                <img src={Client2} alt='' className='clients' />
              </h3>
            </div>
            <div>
              <h3>
                <img src={Client3} alt='' className='clients' />
              </h3>
            </div>
            <div>
              {/* pencostal */}
              <h3>
                <img
                  src={Client4}
                  alt=''
                  style={{ height: '60px', width: '60px' }}
                  className='clients'
                />
              </h3>
            </div>
            <div>
              <h3>
                <img src={Client5} alt='' className='clients' />
              </h3>
            </div>
            <div>
              {/* round */}
              <h3>
                <img
                  src={Client6}
                  alt=''
                  style={{ height: '60px', width: '60px' }}
                  className='clients'
                />
              </h3>
            </div>
            <div>
              <h3>
                <img src={Client7} alt='' className='clients' />
              </h3>
            </div>
            <div>
              <h3>
                <img src={Client8} alt='' className='clients' />
              </h3>
            </div>
          </Slider>
        </div>
      </div>

      {/* frequent question */}
      <section id='' class='survalliance mb-5 mt-5'>
        <div class='container bg-white'>
          <div class='row gy-4'>
            <div class='col-lg-4'>
              <div className=' text-center'>
                <h2 className='FAQ' style={{ fontWeight: '800' }}>
                  FREQUENTLY ASKED QUESTIONS
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
                      What Is A Brand?
                    </button>
                  </h3>
                  <div
                    id='faq-content-1'
                    class='accordion-collapse collapse'
                    data-bs-parent='#faqlist'
                  >
                    <div class='accordion-body'>
                      <p>
                        A brand is essentially the personality and identity of
                        your business. It is what forms the first impression of
                        your business for potential customers and encompasses
                        how it looks and sounds. It is how the market identifies
                        your business compared to your competitors and will
                        hopefully make you stand out. Components of a brand can
                        include:
                      </p>
                      <ul>
                        <li>Name</li>
                        <li>Logo</li>
                        <li>Tagline</li>
                        <li>Tone of voice</li>
                        <li>Fonts & typography</li>
                        <li>Symbols</li>
                        <li>Features</li>
                        <li>Colors</li>
                        <li>Graphics element</li>
                        <li>Niche</li>
                        <li>Experience</li>
                        <li>
                          Or anything that identifies individual businesses’
                          product or service as unique or distinct{' '}
                        </li>
                      </ul>
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
                      Why Is Branding Important?
                    </button>
                  </h3>
                  <div
                    id='faq-content-2'
                    class='accordion-collapse collapse'
                    data-bs-parent='#faqlist'
                  >
                    <div class='accordion-body'>
                      Branding is the process of creating a brand. It is
                      important as it involves clearly positioning your company
                      or product in the market, devising a brand strategy,
                      possibly creating your name, defining your company’s tone
                      of voice and designing corporate and/or product identity.
                      Using water as an example, how do several companies around
                      the world sell the same product and convince the market to
                      purchase their water over their competitors? The simple
                      answer: a great brand!
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
                      I’ve Got A Logo, Isn't That My Brands?
                    </button>
                  </h3>
                  <div
                    id='faq-content-3'
                    class='accordion-collapse collapse'
                    data-bs-parent='#faqlist'
                  >
                    <div class='accordion-body'>
                      We need to get one thing straight, a brand is much more
                      than a logo! Whilst we understand cost can be a
                      determining factor and we certainly appreciate the desire
                      to get a visual representation for your business quickly,
                      we just don’t believe logos alone tell enough of a story
                      about your business. A poorly designed logo can end up
                      targeting the wrong market altogether. <br />
                      <br />
                      We believe a brand speaks volumes about a business,
                      including:
                      <ul>
                        <li>
                          The experience customers can expect when consuming a
                          product or service
                        </li>
                        <li>
                          How a business highlights their unique selling points
                          or market position
                        </li>
                        <li>
                          How a business understands their target markets by
                          engaging with their interests and needs
                        </li>
                        <li>
                          How a business stays relevant and keeps up with the
                          trends in the market
                        </li>
                      </ul>{' '}
                      <br />
                      <br />
                      Your brand describes who you are and what you do,
                      therefore it is important your visual identity – your
                      logo, which is utilised for virtually all of your
                      marketing communications, clearly communicates this.
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
                      Can’t I Just Get My Branding Done For #5000 On Fiverr?
                    </button>
                  </h3>
                  <div
                    id='faq-content-4'
                    class='accordion-collapse collapse'
                    data-bs-parent='#faqlist'
                  >
                    <div class='accordion-body'>
                      Ummm….no! Remember, a brand is much more than just a logo.
                      It is the story, look and voice of a brand. <br />
                      A high quality branding process involves market research
                      including target markets and competitors, and
                      understanding your industry, checking if trade names and
                      domains are available, creating a mood board, testing
                      color schemes in different environments, creating a unique
                      logo that is memorable and finding fonts & typography that
                      is effective…the list goes on! Our branding workshops are
                      also a fabulous way for businesses to really clarify who
                      and what you are and who your target market is. <br />
                      Branding can be a lengthy process which may involve
                      several creative people working on the project and it
                      requires input and collaboration with the client. It is
                      also important that the brand is unique in the market to
                      avoid any trademark or copyright legal problems. <br />
                      So, if you put all this in perspective, you can see how
                      getting a logo for #5000 on Fiverr, won’t really provide
                      the full brand story for your business.
                    </div>
                  </div>
                </div>

                <div class='accordion-item'>
                  <h3 class='accordion-header'>
                    <button
                      class='accordion-button collapsed'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#faq-content-5'
                    >
                      <span class='num'>5.</span>
                      What Makes A Successful Brand?
                    </button>
                  </h3>
                  <div
                    id='faq-content-5'
                    class='accordion-collapse collapse'
                    data-bs-parent='#faqlist'
                  >
                    <div class='accordion-body'>
                      A successful brand pays attention to their market, will
                      come up with new ways to keep the interest of their target
                      market and are not afraid to innovate. <br /> <br />
                      Apple does this really well through their innovative
                      technology products and fulfilling customers’ needs over
                      time. This can also be evident in the evolution of their
                      brand – the Apple came from their initial logo with Isaac
                      Newton and an Apple above his head. It evolved into an
                      apple with a bite (or byte as Steve Jobs would say),
                      followed by the different variations of the apple relevant
                      to that specific time <br /> <br />
                      Before iPhones and iPads, Nokia was once a major player in
                      the telecoms and technologies industries however did not
                      hold their position as market leaders as they failed to
                      keep their brand and business offerings relevant to market
                      needs. Nokia had the best team of hardware engineers
                      however overlooked the shift from hardware to software and
                      did not make any changes to their brand or marketing.
                      Hence, companies such as Apple & Samsung were able to take
                      Nokia’s place as market leaders in a short timespan.{' '}
                      <br /> <br />
                      Now you know a little more about branding and how it is
                      the foundation to your business, how does your business
                      rate? Does it appeal to your target market, does it
                      position you where you want to be in your marketplace, or
                      does your branding need some attention? <br /> <br />
                      If your brand is calling for some love, Elonatech can
                      help! We can help evolve or rebrand your existing brand or
                      if you have a new business, we can create a new brand that
                      makes your business a stand out (for all the right
                      reasons)! <br /> <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      <Getintouch />
      {/* ================================================================ */}
    </>
  )
}

export default Branding
