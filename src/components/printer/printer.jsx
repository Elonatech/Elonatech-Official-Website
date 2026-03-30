import './printer.css'
import Getintouch2 from '../GetInTouch/getintouch2'
import Header from './captions/printer_rep_ks510c.jpg'
import externalHome from './captions/external-printer-home-office-photo3ideastudio-lineal-color-photo3ideastudio_dxihle.png'
import externalPrinter from './captions/external-printer-printing-tulpahn-outline-color-tulpahn-1_q8psuq.png'
import Maintaining from './captions/printerImg_bxvl11.jpg'
import Repair from './captions/printer2_uiciu9.jpg'
import Specialist from './captions/printer_repair_2_kzvnlp.png'
import { Helmet } from 'react-helmet-async'

const Printer = () => {
  return (
    <>
      <Helmet>
        <title>
        Printer Repair & Maintenance Services - Expert Support for HP, Canon, Epson & More
        </title>
        <meta
          name='description'
          content="Maintaining the printer and copier in your office is very important. Keeping up with all necessary printer repair and maintenance is the best way to protect your valuable investment. It also ensures that your business will remain productive and avoid frustrating delays due to printer malfunction

We offer a full range of printer repair services. Do you have issues with your printers or copiers? Is your printer or photocopier giving you a hard time? Your printing jobs should be more straight forward and seamless. Let's FIX IT!!

Repair and Maintenance Services for out of Warranty Print Products

Printer installation and Configuration

Brother
Canon
Epson
HP (Hewlett Packard)
Lexmark
Ricoh
Samsung
Sharp
Xerox

"
        />
        <link rel='canonical' href='https://elonatech.com.ng/printer-repair' />
      </Helmet>

      {/*================================================================================ header ====================================================================*/}
      <div class='container-fluid printer-repair-section'>
        <div class='text-content'>
          <h2>Printer Repair & Maintenance</h2>
          <h5>
            Keeping Up with all Necessary Maintenance is The Best Way to Protect
            your Investment
          </h5>
          <p class='lead'>
            A malfunctioning or out of service printer, copier or multifunction
            device can be disastrous for your business
          </p>
        </div>
      </div>

      {/*=======================================================================================*/}
      <div class='container'>
        <div class='container-fluid'>
          <h3 class='mt-3 fw-bold  text-center' style={{ color: '#34548c' }}>
            Maintaining Your Printer, Copier & Scanner
          </h3>
          <p class='fs-6' style={{textAlign: 'justify'}}>
            Maintaining the printer and copier in your office is very important.
            Keeping up with all necessary printer repair and maintenance is the
            best way to protect your valuable investment. It also ensures that
            your business will remain productive and avoid frustrating delays
            due to printer malfunction
          </p>
          <p class='mt-2 fs-6' style={{textAlign: 'justify'}}>
            We offer a full range of printer repair services. Do you have issues
            with your printers or copiers? Is your printer or photocopier giving
            you a hard time? Your printing jobs should be more straight forward
            and seamless. Let's FIX IT!!
          </p>
        </div>
      </div>
      {/*====================================================================================*/}
      <div class='album py-5'>
        <div class='container rounded'>
          <div class='row row-cols-1 row-cols-lg-2 row-cols-lg-3 g-2'>
            <div
              class='col rounded-start'
              style={{ backgroundColor: '#34548c' }}
            >
              <div class='card mt-1 mb-1 shadow-sm' style={{ height: '380px' }}>
                <div className='text-center mt-2'>
                  <img
                    data-src={externalHome}
                    className='card-img-top lazyload text-center'
                    style={{ height: '4rem', width: '4rem' }}
                    alt=''
                  />
                </div>
                <div class='card-body'>
                  <h5 className='text-center'>
                    Repair and Maintenance Services for out of Warranty Print
                    Products
                  </h5>
                  <p class='text-center fs-6 mb-4'>
                    Highly aware of your company’s business needs, Elonatech
                    provides a portfolio of services that can be ordered as the
                    occasion demands. Your printer, photocopier or scanner is
                    down, and you are out of warranty, or your device is not
                    even covered by a warranty. You can opt for our repair
                    option which includes the repair service and part
                    replacement that can be managed throughout the usage of the
                    device.
                  </p>
                </div>
              </div>
            </div>
            <div class='col' style={{ backgroundColor: '#34548c' }}>
              <div
                className='card mt-1 mb-1'
                style={{
                  height: '380px',
                  backgroundImage: `url(${Maintaining})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover'
                }}
              ></div>
            </div>
            <div
              class='col rounded-end '
              style={{ backgroundColor: '#34548c' }}
            >
              <div class='card mt-1 mb-1 shadow-sm' style={{ height: '380px' }}>
                <div className='text-center mt-4'>
                  <img
                    data-src={externalPrinter}
                    className='card-img-top lazyload text-center'
                    style={{ height: '4rem', width: '4rem' }}
                    alt=''
                  />
                </div>
                <div class='card-body'>
                  <h5 className='text-center'>
                    Printer installation and Configuration
                  </h5>
                  <p class='text-center fs-6 mb-4'>
                    Our Printer Repair Technicians is highly skilled and
                    proficient in the regular and routine repairs, including
                    replacements, installation and configuration of new
                    printers, maintaining and ensuring the proper functioning of
                    standalone printers, scanners or Network Printers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container mb-5'>
        <div class='row justify-content-md-center align-items-center'>
          <div class='col-md-6'>
            <div className='text-center'>
              <img
                src='https://res.cloudinary.com/elonatech/image/upload/v1710165001/loaderImage/qq8AE_a5blke.gif'
                data-src={Repair}
                alt=''
                className='img-fluid  lazyload rounded'
              />
            </div>
          </div>
          <div class='col-md-6'>
            <div className='border-x' style={{ height: '' }}>
              <div className='p-4'>
                <div
                  class='stars text-center fs-5 mt-3'
                  style={{ color: '#D9B938' }}
                >
                  <i class='bi bi-star-fill'></i>
                  <i class='bi bi-star-fill'></i>
                  <i class='bi bi-star-fill'></i>
                  <i class='bi bi-star-fill'></i>
                  <i class='bi bi-star-fill'></i>
                </div>
                <h4 className='text-center  mt-3'>
                  Get Professional Printer Repair
                </h4>
                <p className='mt-3'>
                  Many people like to tackle copier and printer repair on their
                  own. After all, if you can do it yourself, you cut down your
                  wait time and get back up to speed faster. However, some types
                  of repairs are too complex for people who do not have special
                  knowledge of these devices. If your printer is consistently
                  getting jammed, has parts that need to be replaced, or is
                  making any worrisome sounds or smells, it is time to get
                  professional help.
                  <br /> Elonatech can readily help you solve your printer
                  repair problems quickly and affordably.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*===================================================================== specialists =============================================*/}
      <div className='container-fluid' style={{ backgroundColor: '#34548c' }}>
        <div className='container'>
          <div className='row justify-content-md-center align-items-center'>
            <div className='col-md-5'>
              <div
                className='card  p-3 mt-4'
                style={{ border: 'none', backgroundColor: '#34548c' }}
              >
                <h4 className='text-white  mt-5'>
                  Our Printer Specialists Work on The Following Top Brands
                </h4>
                <ul className='list-unstyled text-white'>
                  <li>
                    <h5>
                      <i class='bi bi-printer text-danger me-3'></i>Brother
                    </h5>
                  </li>
                  <li>
                    <h5>
                      <i class='bi bi-printer-fill text-danger me-3'></i>Canon
                    </h5>
                  </li>
                  <li>
                    <h5>
                      <i class='bi bi-printer text-danger me-3'></i>Epson
                    </h5>
                  </li>
                  <li>
                    <h5>
                      <i class='bi bi-printer-fill text-danger me-3'></i>HP
                      (Hewlett Packard)
                    </h5>
                  </li>
                  <li>
                    <h5>
                      <i class='bi bi-printer text-danger me-3'></i>Lexmark
                    </h5>
                  </li>
                  <li>
                    <h5>
                      <i class='bi bi-printer-fill text-danger me-3'></i>Ricoh
                    </h5>
                  </li>
                  <li>
                    <h5>
                      <i class='bi bi-printer text-danger me-3'></i>Samsung
                    </h5>
                  </li>
                  <li>
                    <h5>
                      <i class='bi bi-printer-fill text-danger me-3'></i>Sharp
                    </h5>
                  </li>
                  <li>
                    <h5>
                      <i class='bi bi-printer text-danger me-3'></i>Xerox
                    </h5>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-md-7'>
              <div
                className='card mt-5'
                style={{ border: 'none', backgroundColor: '#34548c' }}
              >
                <img
                  className='img-fluid lazyload'
                  data-src={Specialist}
                  alt=''
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ========================================================================== */}
      <Getintouch2 />
      {/* ========================================================================== */}
    </>
  )
}

export default Printer
