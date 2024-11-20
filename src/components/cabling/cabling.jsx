import Getintouch2 from '../GetInTouch/getintouch2'
import Getintouch2 from '../GetInTouch/getintouch2'
import './cabling.css'
import { Link } from 'react-router-dom'
import { Link } from 'react-router-dom'

import CablingHeader from './captions/structured_cabling_niejuu.jpg'
import FirstCabling from './captions/Untitled-8_txf0ku.png'
import SecondCabling from './captions/Untitled-7_k1jxj1.png'
import { Helmet } from 'react-helmet-async'
import CablingHeader from './captions/structured_cabling_niejuu.jpg'
import FirstCabling from './captions/Untitled-8_txf0ku.png'
import SecondCabling from './captions/Untitled-7_k1jxj1.png'
import { Helmet } from 'react-helmet-async'

const Cabling = () => {
  return (
  return (
    <>
      <Helmet>
        <title>{`Structured Cabling  - Tech Solution, Digital Solution`}</title>
        <meta
          name='description'
          content='The standardized infrastructure of communications cabling that supports network components
      <Helmet>
        <title>{`Structured Cabling  - Tech Solution, Digital Solution`}</title>
        <meta
          name='description'
          content='The standardized infrastructure of communications cabling that supports network components
        Structured cabling design and installation is governed by a set of standards that 
        specify wiring data centers, offices, and apartment buildings for 
        data or voice communications using various kinds of cable, most commonly; category 
        5e (Cat 5e), category 6 (Cat 6), and fiber optic cabling and modular connectors.
        network 
        use or into an IP or PBX (private branch exchange) telephone system patch panel
       '
        />
        <link
          rel='canonical'
          href='https://elonatech.com.ng/structure-cabling'
        />
      </Helmet>
       '
        />
        <link
          rel='canonical'
          href='https://elonatech.com.ng/structure-cabling'
        />
      </Helmet>

      {/*============================================================= header ============================================================================*/}
      <div class='container-fluid structured-cabling-section'>
        <div class='text-content'>
          <h2>Structured Cabling</h2>
          <h5>Any System is Only As Reliable As Its Weakest Link.</h5>
          <p class='lead'>
            The standardized infrastructure of communications cabling that
            supports network components
          </p>
        </div>
      </div>

      {/*================================================================= Cabling =========================================================================*/}
      <div className='container mb-5'>
        <p className='text-center'></p>
        <div className='row'>
          <div className='col-lg-6'>
            <div className='mt-4'>
              <p className='' style={{textAlign: 'justify'}}>
                <span className='fw-bold'>Structured cabling</span> is the
                design and installation of a cabling system that will support
                multiple hardware uses and be suitable for today's needs and
                those of the future.
                <br />
                <br />
                With a correctly installed system, current and future
                requirements can be met, and hardware that is added in the
                future will be supported.
                <br />
                <br />
                Structured cabling design and installation is governed by a set
                of standards that specify wiring data centers, offices, and
                apartment buildings for data or voice communications using
                various kinds of cable, most commonly; category 5e (Cat 5e),
                category 6 (Cat 6), and fiber optic cabling and modular
                connectors.
              </p>
            </div>
          </div>
          <div className='col-lg-6'>
            <div className='text-center'>
              <img
                src='https://res.cloudinary.com/elonatech/image/upload/v1710165001/loaderImage/qq8AE_a5blke.gif'
                data-src={FirstCabling}
                className='img-fluid rounded lazyload'
                alt=''
              />
            </div>
          </div>
          </div>
          <div className='col-lg-6'>
            <div className='text-center'>
              <img
                src='https://res.cloudinary.com/elonatech/image/upload/v1710165001/loaderImage/qq8AE_a5blke.gif'
                data-src={FirstCabling}
                className='img-fluid rounded lazyload'
                alt=''
              />
            </div>
          </div>
        </div>

        <div className='row mt-3'>
          <div className='col-lg-6'>
            <div className='text-center'>
              <img
                src='https://res.cloudinary.com/elonatech/image/upload/v1710165001/loaderImage/qq8AE_a5blke.gif'
                data-src={SecondCabling}
                className='img-fluid rounded lazyload'
                alt=''
              />
            </div>
          </div>
          <div className='col-lg-6'>
            <div className='mt-3'>
              <p className='' style={{textAlign: 'justify'}}>
                These standards define how to lay the cabling in various
                topologies in order to meet the needs of the customer, typically
                using a central patch panel (which is 19-inch rack-mounted),
                from where each modular connection can be used as needed.
                <br />
                <br />
                Each outlet is patched into a network switch (normally also
                rack-mounted) for network use or into an IP or PBX (private
                branch exchange) telephone system patch panel. Structured
                cabling is the infrastructure that supports the performance of
                an organization's network. It is the glue that binds all PCs &
                devices used within the business together. Since it is the most
                critical part of your voice and data network, choosing a
                qualified provider is a critical decision. We use only high-end
                quality products in our structured wiring solutions, backed by
                manufacturer warranties.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*========================================================= completed project =====================================================================*/}
      <div className='container '>
        <h4 className='text-center'>Some Of Our Recently Completed Projects</h4>
        <div class='text-bg-light shadow py-4 rounded'>
          <h6 className='text-center p-3'>
            Network Installation, Points tracing, correction and labelling,
            recently done on a 3 floor building for LSG Sky Chef, Ikeja, Lagos.
          </h6>
          <div class='slider'>
            <div class='slide-track'>
              <div class='slide'>
                <img
                  src='https://res.cloudinary.com/elonatech/image/upload/v1709798593/structuredCablingPage/LSG/img_1_c4yjoe.png'
                  className='img-fluid p-2'
                  style={{ height: '25rem' }}
                  alt=''
                />
              </div>
              <div class='slide'>
                <img
                  src='https://res.cloudinary.com/elonatech/image/upload/v1709798591/structuredCablingPage/LSG/img_8_c1h674.png'
                  className='img-fluid p-2'
                  style={{ height: '25rem' }}
                  alt=''
                />
              </div>
              <div class='slide'>
                <img
                  src='https://res.cloudinary.com/elonatech/image/upload/v1709798589/structuredCablingPage/LSG/img_7_szcrgh.png'
                  className='img-fluid p-2'
                  style={{ height: '25rem' }}
                  alt=''
                />
              </div>
              <div class='slide'>
                <img
                  src='https://res.cloudinary.com/elonatech/image/upload/v1709798595/structuredCablingPage/LSG/img_2_r8qqer.png'
                  className='img-fluid p-2'
                  style={{ height: '25rem' }}
                  alt=''
                />
              </div>
              <div class='slide'>
                <img
                  src='https://res.cloudinary.com/elonatech/image/upload/v1709798588/structuredCablingPage/LSG/img_6_moib5j.png'
                  className='img-fluid p-2'
                  style={{ height: '25rem' }}
                  alt=''
                />
              </div>
              <div class='slide'>
                <img
                  src='https://res.cloudinary.com/elonatech/image/upload/v1709798586/structuredCablingPage/LSG/img_5_morysq.png'
                  className='img-fluid p-2'
                  style={{ height: '25rem' }}
                  alt=''
                />
              </div>
              <div class='slide'>
                <img
                  data-src='https://res.cloudinary.com/elonatech/image/upload/v1709798585/structuredCablingPage/LSG/img_3_sexrtq.png'
                  className='img-fluid lazyload p-2'
                  style={{ height: '25rem' }}
                  alt=''
                />
              </div>
              <div class='slide'>
                <img
                  data-src='https://res.cloudinary.com/elonatech/image/upload/v1709798584/structuredCablingPage/LSG/img_4_ma29jk.png'
                  className='img-fluid lazyload p-2'
                  style={{ height: '25rem' }}
                  alt=''
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*========================================================= completed project 2 =====================================================================*/}
      <div className='container '>
        {/* <h4 className='text-center'>Some Of Our Recently Completed Projects</h4> */}
        <div class='text-bg-light shadow py-4 rounded'>
          <h6 className='text-center p-3' style={{textAlign: 'justify'}}>
            Sub-Contractor To Pine Height Systems On Networking/Structure
            Cabling Of An 8 Floor Luxury Flat BUILDING (96 Points) LAN Setup For
            Samsung Electronics Nigeria Ltd. at Admiralty Way, Lekki
            Phase 1. Project Phase 1
          </h6>
          <div class='slider'>
            <div class='slide-track'>
              <div class='slide'>
                <img
                  src='https://res.cloudinary.com/elonatech/image/upload/v1709570314/structuredCablingPage/phase1/IMG-20130627-00055_mif7x9.png'
                  className='img-fluid p-2'
                  style={{ height: '25rem' }}
                  alt=''
                />
              </div>
              <div class='slide'>
                <img
                  src='https://res.cloudinary.com/elonatech/image/upload/v1709570546/structuredCablingPage/phase1/IMG-20130923-00302_b6gily.png'
                  className='img-fluid p-2'
                  style={{ height: '25rem' }}
                  alt=''
                />
              </div>
              <div class='slide'>
                <img
                  src='https://res.cloudinary.com/elonatech/image/upload/v1709570384/structuredCablingPage/phase1/IMG-20130627-00058_oamrun.png'
                  className='img-fluid p-2'
                  style={{ height: '25rem' }}
                  alt=''
                />
              </div>
              <div class='slide'>
                <img
                  src='https://res.cloudinary.com/elonatech/image/upload/v1709570421/structuredCablingPage/phase1/IMG-20130629-00070_wpdjab.png'
                  className='img-fluid p-2'
                  style={{ height: '25rem' }}
                  alt=''
                />
              </div>
              <div class='slide'>
                <img
                  src='https://res.cloudinary.com/elonatech/image/upload/v1709570440/structuredCablingPage/phase1/IMG-20130910-00269_w38omt.png'
                  className='img-fluid p-2'
                  style={{ height: '25rem' }}
                  alt=''
                />
              </div>
              <div class='slide'>
                <img
                  src='https://res.cloudinary.com/elonatech/image/upload/v1709570443/structuredCablingPage/phase1/IMG-20130911-00204_z9hr1t.png'
                  className='img-fluid p-2'
                  style={{ height: '25rem' }}
                  alt=''
                />
              </div>
              <div class='slide'>
                <img
                  data-src='https://res.cloudinary.com/elonatech/image/upload/v1709570547/structuredCablingPage/phase1/Lagos-20130908-00189_utw2mo.png'
                  className='img-fluid lazyload p-2'
                  style={{ height: '25rem' }}
                  alt=''
                />
              </div>
              <div class='slide'>
                <img
                  data-src='https://res.cloudinary.com/elonatech/image/upload/v1709570546/structuredCablingPage/phase1/IMG-20130923-00302_b6gily.png'
                  className='img-fluid lazyload p-2'
                  style={{ height: '25rem' }}
                  alt=''
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*=========================================================== completed project 3 ===========================================*/}
      <div className='container mb-5'>
        <div class='text-bg-light shadow py-4 rounded'>
          <h6 className='text-center p-3'>
            Sub-Contractor To Pine Height Systems On Networking/Structure
            Cabling Of An 8 Floor Luxury Flat BUILDING (96 Points) LAN Setup For
            Samsung Electronics Nigeria Ltd. at Admiralty Way, Lekki
            Phase 1. Project Phase 2
          </h6>
          <div class='slider'>
            <div class='slide-track'>
              <div class='slide'>
                <img
                  src='https://res.cloudinary.com/elonatech/image/upload/v1709570975/structuredCablingPage/phase2/DSC06972_rtglhc.png'
                  className='img-fluid p-2'
                  style={{ height: '25rem' }}
                  alt=''
                />
              </div>
              <div class='slide'>
                <img
                  src='https://res.cloudinary.com/elonatech/image/upload/v1709570981/structuredCablingPage/phase2/DSC06951_h3seuk.png'
                  className='img-fluid p-2'
                  style={{ height: '25rem' }}
                  alt=''
                />
              </div>
              <div class='slide'>
                <img
                  src='https://res.cloudinary.com/elonatech/image/upload/v1709570980/structuredCablingPage/phase2/DSC06947_u7elgy.png'
                  className='img-fluid p-2'
                  style={{ height: '25rem' }}
                  alt=''
                />
              </div>
              <div class='slide'>
                <div class='slide'>
                  <img
                    src='https://res.cloudinary.com/elonatech/image/upload/v1709570978/structuredCablingPage/phase2/DSC06935_pfmijp.png'
                    className='img-fluid p-2'
                    style={{ height: '25rem' }}
                    alt=''
                  />
                </div>
                <img
                  src='https://res.cloudinary.com/elonatech/image/upload/v1709570979/structuredCablingPage/phase2/DSC06940_m2jdcm.png'
                  className='img-fluid p-2'
                  style={{ height: '25rem' }}
                  alt=''
                />
              </div>
              <div class='slide'>
                <img
                  src='https://res.cloudinary.com/elonatech/image/upload/v1709570973/structuredCablingPage/phase2/DSC06969_ork4sg.png'
                  className='img-fluid p-2'
                  style={{ height: '25rem' }}
                  alt=''
                />
              </div>
              <div class='slide'>
                <img
                  src='https://res.cloudinary.com/elonatech/image/upload/v1709570977/structuredCablingPage/phase2/DSC06909_llhahz.png'
                  className='img-fluid p-2'
                  style={{ height: '25rem' }}
                  alt=''
                />
              </div>
              <div class='slide'>
                <img
                  src='https://res.cloudinary.com/elonatech/image/upload/v1709570976/structuredCablingPage/phase2/DSC06949_pgrg0v.png'
                  className='img-fluid p-2'
                  style={{ height: '25rem' }}
                  alt=''
                />
              </div>
              <div class='slide'>
                <img
                  src='https://res.cloudinary.com/elonatech/image/upload/v1709570973/structuredCablingPage/phase2/DSC06969_ork4sg.png'
                  className='img-fluid p-2'
                  style={{ height: '25rem' }}
                  alt=''
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =================================================== hhdff ================================================================= */}
      <Getintouch2 />
      {/* =================================================== hhdff ================================================================= */}
      {/* =================================================== hhdff ================================================================= */}
      <Getintouch2 />
      {/* =================================================== hhdff ================================================================= */}
    </>
  )
  )
}

export default Cabling
export default Cabling
