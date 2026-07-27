import './hardware.css'

import hp from './captions/computericons/001-hp.png'
import dell from './captions/computericons/002-dell.png'
import apple from './captions/computericons/003-apple-logo.png'
import samsung from './captions/computericons/004-samsung.png'
import lg from './captions/computericons/005-lg.png'
import lenovo from './captions/computericons/006-lenovo.png'
import asus from './captions/computericons/007-asus.png'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const Hardware = () => {
  return (
    <>
      <Helmet>
        <title>Hardware Supply Solutions - Trusted IT Vendors for Quality Hardware & Support</title>
        <meta
          name='description'
          content='Elonatech Nigeria Limited is built on the assumption that the management of information technology for business is not inherently a do-it-yourself prospect. Smart business people who aren’t tech-savvy need to find quality vendors of reliable hardware, software, service, and support. 
       They need to use these quality vendors as they use their other professional service suppliers, as trusted allies. '
        />
        <link rel='canonical' href='https://elonatech.com.ng/hardware-supply' />
      </Helmet>

      {/*========================================================================== header ===================================================*/}
      <div class='container-fluid hardware-supply-section'>
        <div class='text-content'>
          <h2>Hardware Supply</h2>
          <h5>Get what you need to run your business</h5>
          <p class='lead'>
            Smart business people need to find quality vendors of reliable
            hardware, software, service, and support
          </p>
        </div>
      </div>

      <div className='container mt-5'>
        <p className='taj'>
          <span className='fw-bold text-dark'>Elonatech Nigeria Limited</span>{' '}
          is built on the assumption that the management of information
          technology for business is not inherently a do-it-yourself prospect.
          Smart business people who aren’t tech-savvy need to find quality
          vendors of reliable hardware, software, service, and support. They
          need to use these quality vendors as they use their other professional
          service suppliers, as trusted allies.
        </p>
        <p className='taj'>
          Elonatech seeks to fulfill these needs and become the leader in
          business information technology in its region. We make sure that our
          clients have what they need to run their businesses as much as
          possible, with maximum efficiency and reliability. In addition to
          providing services, Elonatech supplies the following{' '}
          <span className='fw-bold text-dark'>computer products</span> to make
          them useful to small, medium, and large businesses.
        </p>
      </div>
      {/*==================================================================== computers ====================================================== */}
      <div className='container mt-3'>
        <div className='row d-flex align-items-md-start justify-content-md-start'>
          <div className='col-lg-6'>
            <div className='card border-0'>
              <div className='text-center'>
                <img
                  src='https://i.stack.imgur.com/qq8AE.gif'
                  data-src='https://elonatech.com.ng/wp-content/uploads/2021/08/Computer-Systems.-2048x594-1.jpg'
                  className='img-fluid lazyload'
                  alt=''
                />
              </div>
              <p className='mt-4 taj'>
                We are especially focused on providing{' '}
                <span className='fw-bold text-dark'>Computer Hardware,</span>{' '}
                Network systems, and services to small, medium, and large
                businesses. The systems include both PC-based LAN systems and
                minicomputer server-based systems from a wide array of computer
                system brands – HP, Dell, Lenovo, Samsung, Toshiba, Acer, Asus,
                LG, etc. Elonatech operates on a computer reseller-based
                technology. It became a reseller to fulfill the market needs for{' '}
                <span className='fw-bold text-dark'>personal computers</span>{' '}
                and is emphasizing service and support to differentiate itself
                from more price-oriented national chains. 
              </p>
            </div>
          </div>
          <div className='col-lg-6'>
            <div className='card border-0'>
              <h4 className='fw-bold'>
                What steps should you take next in choosing the right computer
                system?
              </h4>
              <p className='mt-3 taj'>
                Properly used, a computer can help you to become more organized,
                work more efficiently, and accomplish many tasks. You’ll need a
                variety of information in order to accurately assess the
                technology requirements for your small business.
              </p>
              <p className='mt-3 taj'>
                Perhaps you’ve been able to make do with using a personal
                computer for business tasks, but find that as your business
                grows you need a computer set-up to meet your business needs. Or
                maybe you’ve added employees to your business and you would like
                to set up a network of computers in your workplace.
              </p>
              <p className='mt-3 taj'>
                Your first step should be determining how you specifically
                intend to use a computer to aid your business, which will lead
                to deciding the configuration type.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* =====================================================================================================================================*/}
      <h1 className='text-center fw-bold mb-3 mt-3'>Computers</h1>
      <section id='computers' class='computers mb-5'>
        <div class='container mb-5'>
          <ul class='nav nav-tabs row gy-4 d-flex'>
            <li class='nav-item col-6 col-md-4 col-lg-2'>
              <a
                class='nav-link active show'
                data-bs-toggle='tab'
                data-bs-target='#tab-1'
              >
                <img data-src={hp} className='img-fluid lazyload' alt='' />
                <h4>Hewlett-Packard</h4>
              </a>
            </li>
            <li class='nav-item col-6 col-md-4 col-lg-2'>
              <a class='nav-link' data-bs-toggle='tab' data-bs-target='#tab-2'>
                <img data-src={dell} className='img-fluid lazyload' alt='' />
                <h4>Dell Inc</h4>
              </a>
            </li>
            <li class='nav-item col-6 col-md-4 col-lg-2'>
              <a class='nav-link' data-bs-toggle='tab' data-bs-target='#tab-3'>
                <img data-src={apple} className='img-fluid lazyload' alt='' />
                <h4>Apple</h4>
              </a>
            </li>
            <li class='nav-item col-6 col-md-4 col-lg-2'>
              <a class='nav-link' data-bs-toggle='tab' data-bs-target='#tab-4'>
                <img data-src={samsung} className='img-fluid lazyload' alt='' />
                <h4>Samsung</h4>
              </a>
            </li>
            <li class='nav-item col-6 col-md-4 col-lg-2'>
              <a class='nav-link' data-bs-toggle='tab' data-bs-target='#tab-5'>
                <img data-src={lenovo} className='img-fluid lazyload' alt='' />
                <h4>Lenovo</h4>
              </a>
            </li>
            <li class='nav-item col-6 col-md-4 col-lg-2'>
              <a class='nav-link' data-bs-toggle='tab' data-bs-target='#tab-6'>
                <img data-src={asus} className='img-fluid lazyload' alt='' />
                <h4>Asus</h4>
              </a>
            </li>
          </ul>
          {/*==================================================================== Dropdown Content ================================================= */}
          <div class='tab-content'>
            {/*==================================================================== Hp================================================= */}
            <div class='tab-pane active show' id='tab-1'>
              <section id='' class='features mb-5'>
                <div class='container mb-3'>
                  <ul class='nav nav-tabs row bg-secondary'>
                    <li class='nav-item col-4 mt-2'>
                      <a
                        class='nav-link computer-bg active show'
                        data-bs-toggle='tab'
                        data-bs-target='#hp-1'
                      >
                        <h5 className='fw-bold'>Hp Desktop</h5>
                      </a>
                    </li>
                    <li class='nav-item  col-4 mt-2 '>
                      <a
                        class='nav-link computer-bg'
                        data-bs-toggle='tab'
                        data-bs-target='#hp-2'
                      >
                        <h5 className='fw-bold'>Hp Notebooks</h5>
                      </a>
                    </li>
                    <li class='nav-item  col-4 mt-2 '>
                      <a
                        class='nav-link computer-bg'
                        data-bs-toggle='tab'
                        data-bs-target='#hp-server-3'
                      >
                        <h5 className='fw-bold'>Hp Server</h5>
                      </a>
                    </li>
                  </ul>
                  <div class='tab-content'>
                    {/*==================================================================== Hp1 ================================================= */}
                    <div class='tab-pane active show' id='hp-1'>
                      <ul class='nav nav-tabs row mt-2 gy-4 d-flex'>
                        <li class='nav-item col-md-3 col-6'>
                          <div className='card border-0 mt-5'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783418789/HP_omen_desktop_monitor_1588656829650_glulwm_zjzvou.webp'
                              className='img-fluid lazyload mt-1'
                              alt=''
                            />
                            <h4 className='text-center mt-4'>HP Omen</h4>
                          </div>
                        </li>
                        <li class='col-md-3 col-6'>
                          <div className='card border-0 mt-4'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783418834/c08163334_500x367_e0cjwo_imw9in.jpg'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center mt-1'>Elite</h4>
                          </div>
                        </li>
                        <li class='nav-item col-md-3 col-6 '>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783418805/hp-desktop-computer-500x500_gbk63u_eitg6i.webp'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>Business desktops</h4>
                          </div>
                        </li>
                        <li class='nav-item  col-md-3 col-6'>
                          <div className='card border-0 mt-4'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783418815/images_4_iio9kb_yss3ci.jpg'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>HP Envy</h4>
                          </div>
                        </li>
                        <li class='nav-item  col-md-3 col-6'>
                          <div className='card border-0 mt-4'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783418682/Hp_pavilion-removebg-preview_yghxuz_q5yjjm.png'
                              className='img-fluid mt-4 lazyload'
                              alt=''
                            />
                            <h4 className='text-center mt-4'>HP Pavilion</h4>
                          </div>
                        </li>
                        <li class='nav-item  col-md-3 col-6'>
                          <div className='card border-0 mt-3'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783418658/Hp_essential-removebg-preview_dul8r5_of0uqj.png'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>HP Essential</h4>
                          </div>
                        </li>
                        <li class='nav-item  col-md-3 col-6'>
                          <div className='card border-0 mt-5'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783418777/6a52c968e7a03d652d4137c6444a83ebc84b418a_wagzip_rfr2ct.webp'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center mt-4'>Microtower</h4>
                          </div>
                        </li>
                        <li class='nav-item  col-md-3 col-6'>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783418827/images_5_wtfpnv_xglxee.jpg'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>Victus</h4>
                          </div>
                        </li>
                      </ul>
                    </div>
                    {/*==================================================================== Hp2 ================================================= */}
                    <div class='tab-pane' id='hp-2'>
                      <ul class='nav nav-tabs row mt-5 gy-4 d-flex'>
                        <li class='nav-item col-md-3 col-6'>
                          <div className='card border-0 mt-1'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783418878/convertible_x360_13_black_sbcyyf_v4xi54.jpg'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center mt-2'>HP Spectre</h4>
                          </div>
                        </li>
                        <li class='col-md-3 col-6'>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783418884/t-900-a-Omen-17-c-44-C-Tabbed-Teaser_ayzfvz_bry04j.png'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>OMEN</h4>
                          </div>
                        </li>
                        <li class='nav-item col-md-3 col-6 '>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783418869/A24GD200807LWIKH_bd6b2003-6d74-483c-8b2e-7250fbf1efe9_800x_yw3pog_vhbyf4.webp'
                              className='img-fluid mb-2 lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>HP ZBook</h4>
                          </div>
                        </li>
                        <li class='nav-item  col-md-3 col-6'>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783418857/s-l1200_2_dmi6na_hi1ugg.webp'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>HP ProBook</h4>
                          </div>
                        </li>
                        <li class='nav-item  col-md-3 col-6'>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783418862/Untitled-design-5_zjgyre_apc2pq.webp'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center mt-3'>HP Essential</h4>
                          </div>
                        </li>
                        <li class='nav-item  col-md-3 col-6'>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783418906/c08534131_1750x1285_zdfmfh_xdvoj4.avif'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>Chromebooks</h4>
                          </div>
                        </li>
                        <li class='nav-item  col-md-3 col-6'>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783418896/c08227735_ei7ugw_ii5deh.png'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>EliteBook</h4>
                          </div>
                        </li>
                        <li class='nav-item  col-md-3 col-6'>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://www.digitaltrends.com/wp-content/uploads/2023/05/HP-Pavilion-Laptop-15t-eg300.jpg?fit=1200%2C900&p=1'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>HP Pavilion</h4>
                          </div>
                        </li>
                      </ul>
                    </div>
                    {/*==================================================================== Hp3 ================================================= */}
                    <div class='tab-pane' id='hp-server-3'>
                      <ul class='nav nav-tabs row mt-5 gy-4 d-flex'>
                        <li class='nav-item col-md-3 col-6'>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783418972/hpe-dl388-server-gen10_1_cfbm81_bblsnm.jpg'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>
                              HPE DL388 Gen10 8SFF
                            </h4>
                          </div>
                        </li>
                        <li class='nav-item  col-md-3 col-6'>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783418963/hpe-dl20-gen10-4sff-server_gtghpj_xgofk8.jpg'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>HPE DL20 Gen10 4SFF</h4>
                          </div>
                        </li>
                        <li class='nav-item col-md-3 col-6 '>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783418956/hpe-p19720-b21_fkylr6_t9mn5v.jpg'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>HPE DL380 Gen10 </h4>
                          </div>
                        </li>
                        <li class='nav-item  col-md-3 col-6'>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783418937/hpe-ml10-gen10-server_5_gpldgk_l6zzy0.jpg'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>HPE ML30 Gen10 8SFF</h4>
                          </div>
                        </li>
                        <li class='col-md-3 col-6'>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783418945/hpe-p23579-aa1_pocu2i_iqqpys.jpg'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>HPE DL360 Gen10</h4>
                          </div>
                        </li>

                        <li class='col-md-3 col-6'>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783418928/hpe-server-2-5-harddrive_187_j5k6yd_h4bc7l.jpg'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>
                              HPE 1.92TB SATA SFF SSD
                            </h4>
                          </div>
                        </li>

                        <li class='col-md-3 col-6'>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783418921/hpe-869853-aa1_dfhbtj_blsmxo.jpg
                              '
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>
                              HPE DL580 Gen10 8SFF{' '}
                            </h4>
                          </div>
                        </li>

                        <li class='col-md-3 col-6'>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783418914/hpe-859085-s01-front_evukuz_dkib1k.jpg'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>
                              HPE ProLiant DL380 Gen9
                            </h4>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            {/*==================================================================== DEll ================================================= */}
            <div class='tab-pane' id='tab-2'>
              <section id='' class='features mb-5'>
                <div class='container mb-5' data-aos='fade-up'>
                  <ul class='nav nav-tabs row bg-secondary  d-flex'>
                    <li class='nav-item col-md-4 mt-2 col-6'>
                      <a
                        class='nav-link active show'
                        data-bs-toggle='tab'
                        data-bs-target='#dell-1'
                      >
                        <h5 className='fw-bold'>Dell Desktop</h5>
                      </a>
                    </li>
                    <li class='nav-item  col-md-4 mt-2 col-6'>
                      <a
                        class='nav-link'
                        data-bs-toggle='tab'
                        data-bs-target='#dell-2'
                      >
                        <h5 className='fw-bold'>Dell Notebooks</h5>
                      </a>
                    </li>
                    <li class='nav-item  col-md-4 mt-2 col-6 '>
                      <a
                        class='nav-link'
                        data-bs-toggle='tab'
                        data-bs-target='#dell-3'
                      >
                        <h5 className='fw-bold'>Dell Server</h5>
                      </a>
                    </li>
                  </ul>
                  <div class='tab-content'>
                    {/*==================================================================== Dell1 ================================================= */}
                    <div class='tab-pane active show' id='dell-1'>
                      <ul class='nav nav-tabs row mt-5 gy-4 d-flex'>
                        <li class='nav-item col-md-3 col-6'>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783419001/images_4_cpqyu0_tqtv5o.jpg'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>Business</h4>
                          </div>
                        </li>
                        <li class='col-md-3 col-6'>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783418979/7-1280.ac9725b1_to9zny_hhkp7w.jpg'
                              className='img-fluid lazyload mb-4 mt-3'
                              alt=''
                            />
                            <h4 className='text-center'>
                              Ultra High Definition{' '}
                            </h4>
                          </div>
                        </li>
                        <li class='nav-item  col-md-3 col-6'>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783419014/a09549d03f81991b009ccf4d70bcd616-hi_bhfxp2_xzzcml.jpg'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center mt-2'>
                              Alienware & Gaming{' '}
                            </h4>
                          </div>
                        </li>
                        <li class='nav-item  col-md-3 col-6'>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783418992/510XOvy4ntL._AC_UF894_1000_QL80__jgjroz_q2gkw3.jpg'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center mt-2'>Dell Xps</h4>
                          </div>
                        </li>
                      </ul>
                    </div>
                    {/*==================================================================== Dell2 ================================================= */}
                    <div class='tab-pane' id='dell-2'>
                      <ul class='nav nav-tabs row mt-5 gy-4 d-flex'>
                        <li class='nav-item col-md-3 col-6'>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783419036/Screenshot2022-01-19090318_vo0jxh_p4ubne.png'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center mt-4'>
                              Alienware Gaming
                            </h4>
                          </div>
                        </li>
                        <li class='col-md-3 col-6'>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783419048/1000546768_487x350_1_ikahwi_jy07cm.png'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>Dell Latitude</h4>
                          </div>
                        </li>
                        <li class='nav-item col-md-3 col-6 '>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783419095/Dell-Inspiron-7000-2-in-1-QHD-Touch-Screen_1_blux7w_arjmb9.png'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>Inspiron</h4>
                          </div>
                        </li>
                        <li class='nav-item  col-md-3 col-6'>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783419076/b96e4cd75fda40d5b4aec803334052f2_800x_n1vgpy_yr2jh2.png'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>XPS</h4>
                          </div>
                        </li>
                        <li class='nav-item  col-md-3 col-6'>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783419067/eng_pl_Touchscreen-Dell-Chromebook-11-3189-Celeron-N3060-4GB-32GB-1366x768-Class-A-Chrome-OS-225694_3_casfw4_gqvtag.png'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>Chromebook</h4>
                          </div>
                        </li>
                        <li class='nav-item  col-md-3 col-6'>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783419085/notebook-g16-7630-nt-black-gallery-1_y5jwny_k0qyqk.png'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>G series gaming</h4>
                          </div>
                        </li>
                        <li class='nav-item  col-md-3 col-6'>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783419021/00439066_large-570_t7lein_zh7eo9.jpg'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center mt-3'>Vostro </h4>
                          </div>
                        </li>
                        <li class='nav-item  col-md-3 col-6'>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783419029/Dell-G5-15-Special-Edition-Ryzen_keyboard-view-678_678x452_lrjx3b_j29oip.jpg'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>Dell G5 15 SE</h4>
                          </div>
                        </li>
                      </ul>
                    </div>
                    {/*==================================================================== Dell3 ================================================= */}
                    <div class='tab-pane' id='dell-3'>
                      <ul class='nav nav-tabs row mt-5 gy-4 d-flex'>
                        <li class='nav-item col-md-3 col-6'>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783419110/dellemc-pet150-emc-lf_nzgwal_h4k4dx.png'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>
                              PowerEdge T150 Tower Server
                            </h4>
                          </div>
                        </li>
                        <li class='col-md-3 col-6'>
                          <div className='card border-0 mt-5'>
                            <div className='mt-5'>
                              <img
                                src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                                data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783419117/dellemc-per250-honeycomb-4x3-5-lf_wtifaw_s5357r.png'
                                className='img-fluid mt-5 lazyload'
                                alt=''
                              />
                              <h4 className='text-center mt-4'>
                                PowerEdge R250 Rack Server
                              </h4>
                            </div>
                          </div>
                        </li>
                        <li class='nav-item col-md-3 col-6 '>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783419127/dellemc-pet350-emc-lf_fjlcuq_vycj68.png'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>
                              PowerEdge R350 Rack Server
                            </h4>
                          </div>
                        </li>
                        <li class='nav-item  col-md-3 col-6'>
                          <div className='card border-0'>
                            <div className='mt-5'>
                              <img
                                src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                                data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783419102/dellemc-per7515-8x35-emc-lcd-bezel-lf_kef745_qrg6bj.pngg'
                                className='img-fluid mt-2 lazyload'
                                alt=''
                              />
                              <h4 className='text-center mt-4'>
                                PowerEdge R7525 Rack Server
                              </h4>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            {/*==================================================================== Apple ================================================= */}
            <div class='tab-pane' id='tab-3'>
              <section id='' class='features mb-5'>
                <div class='container mb-5' data-aos='fade-up'>
                  <ul class='nav nav-tabs row  bg-secondary  d-flex'>
                    <li class='nav-item col-md-4 mt-2 col-6'>
                      <a
                        class='nav-link active show'
                        data-bs-toggle='tab'
                        data-bs-target='#apple-1'
                      >
                        <h5 className='fw-bold'>Mac Desktop</h5>
                      </a>
                    </li>
                    <li class='nav-item  col-md-4 mt-2 col-6'>
                      <a
                        class='nav-link'
                        data-bs-toggle='tab'
                        data-bs-target='#apple-2'
                      >
                        <h5 className='fw-bold'>Mac Notebooks</h5>
                      </a>
                    </li>
                    <li class='nav-item  col-md-4 mt-2 col-6 '>
                      <a
                        class='nav-link'
                        data-bs-toggle='tab'
                        data-bs-target='#apple-3'
                      >
                        <h5 className='fw-bold'>Mac Ipad</h5>
                      </a>
                    </li>
                  </ul>
                  <div class='tab-content'>
                    {/*==================================================================== Apple1 ================================================= */}
                    <div class='tab-pane active show' id='apple-1'>
                      <ul class='nav nav-tabs row mt-5 gy-4 d-flex'>
                        <li class='nav-item col-md-3 col-6'>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783419160/apple-imac-pro-three_ubjmsz_jkklzf.jpgg'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>IMAC</h4>
                          </div>
                        </li>
                        <li class='col-md-3 col-6'>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783419148/images_4_dbr8hr_lxlqc8.jpg'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>MAC MINI</h4>
                          </div>
                        </li>
                        <li class='nav-item col-md-3  col-6 '>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783419141/Mac_Studio_M2_PDP_Image_Position_8__en-US_umnzxr_jhujfz.jpg'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>MAC STUDIO</h4>
                          </div>
                        </li>
                        <li class='nav-item  col-md-3 col-6'>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783419134/Mac_Pro_Tower_M2_Ultra_PDP_Image_Position-9__en-US_zfgxfo_je4jcr.jpg'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>MAC PRO</h4>
                          </div>
                        </li>
                      </ul>
                    </div>
                    {/*==================================================================== Apple2 ================================================= */}
                    <div class='tab-pane' id='apple-2'>
                      <ul class='nav nav-tabs row mt-5 gy-4 d-flex'>
                        <li class='nav-item col-md-6 col-6'>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783420157/newair-600x375_gtguqg_bqeqpr.jpg'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>Macbook Air</h4>
                          </div>
                        </li>
                        <li class='col-md-6 col-6'>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783419168/newpro-600x375_ihgy1l_stf3aj.jpg'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>Macbook Pro</h4>
                          </div>
                        </li>
                      </ul>
                    </div>
                    {/*==================================================================== Apple3 ================================================= */}
                    <div class='tab-pane' id='apple-3'>
                      <ul class='nav nav-tabs row mt-5 gy-4 d-flex'>
                        <li class='nav-item col-md-3 col-6'>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783420302/pro-2021_xyeo42_kkuuug.png'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>Ipad Pro</h4>
                          </div>
                        </li>
                        <li class='col-md-3 col-6'>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783420294/ipad-air-2020_trplkw_ibdpmj.png'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>Ipad Air</h4>
                          </div>
                        </li>
                        <li class='nav-item col-md-3  col-6 '>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783420186/ipad-2021_u6m975_jkl4tc.png'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>Ipad</h4>
                          </div>
                        </li>
                        <li class='nav-item  col-md-3 col-6'>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783420175/ipad-mini-2021_i0pt75_vnerjo.png'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>Ipad mini</h4>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            {/*==================================================================== Samsung ================================================= */}
            <div class='tab-pane' id='tab-4'>
              <section id='' class='features mb-5'>
                <div class='container mb-5' data-aos='fade-up'>
                  <ul class='nav nav-tabs row bg-secondary d-flex'>
                    <li class='nav-item col-md-4 mt-2 col-6'>
                      <a
                        class='nav-link active show'
                        data-bs-toggle='tab'
                        data-bs-target='#samsung-1'
                      >
                        <h5 className='fw-bold'>Samsung Monitors</h5>
                      </a>
                    </li>
                    <li class='nav-item  col-md-4 mt-2 col-6'>
                      <a
                        class='nav-link'
                        data-bs-toggle='tab'
                        data-bs-target='#samsung-2'
                      >
                        <h5 className='fw-bold'>Samsung Notebooks</h5>
                      </a>
                    </li>
                    <li class='nav-item  col-md-4 mt-2 col-6 '>
                      <a
                        class='nav-link'
                        data-bs-toggle='tab'
                        data-bs-target='#samsung-3'
                      >
                        <h5 className='fw-bold'>Samsung Tab Series</h5>
                      </a>
                    </li>
                  </ul>

                  <div class='tab-content'>
                    {/*==================================================================== Samsung1 ================================================= */}
                    <div class='tab-pane active show' id='samsung-1'>
                      <ul class='nav nav-tabs row mt-5 gy-4 d-flex'>
                        <li class='nav-item col-md-3 col-6'>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783420329/high-end-setup_kdculr_os71dh.webp'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>Odyssey Gaming</h4>
                          </div>
                        </li>
                        <li class='nav-item  col-md-3 col-6'>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783420321/samsung-ls32bm80guuxen-s32bm80guu-81-3-cm-32-3840-x-2160-pixeles-4k-ultra-hd-verde-blanco_wv43u3_uhspsb.jpg'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>Smart</h4>
                          </div>
                        </li>
                        <li class='nav-item col-md-3 col-6 '>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783420353/images_4_kjnube_sysfhu.jpg'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>Curved</h4>
                          </div>
                        </li>
                        <li class='nav-item  col-md-3 col-6'>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783420344/auto_20180823103513_44162651_06_1691bb31-3069-47ab-8b33-61e07542aad1_LS27F358FWUXEN_full_p9b2wq_fwcmj4.png'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>Flat</h4>
                          </div>
                        </li>
                      </ul>
                    </div>
                    {/*==================================================================== Samsung2 ================================================= */}
                    <div class='tab-pane' id='samsung-2'>
                      <ul class='nav nav-tabs row mt-5 gy-4 d-flex'>
                        <li class='nav-item col-md-3 col-6'>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783420371/21G9H9xuBDL._AC__fmeb0u_wz8qgz.jpg'
                              className='img-fluid mt-1 lazyload'
                              alt=''
                            />
                            <h4 className='text-center mt-2'>
                              Galaxy Book Ultra
                            </h4>
                          </div>
                        </li>
                        <li class='col-md-3 col-6'>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783420381/GalaxyBookPro360MO_myi2di_rmvajg.png'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>Galaxy Book Pro</h4>
                          </div>
                        </li>
                        <li class='nav-item col-md-3 col-6 '>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783420362/images_4_g2p1vd_ld8hra.jpg'
                              className='img-fluid mt-3 lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>Galaxy Book Pro 360</h4>
                          </div>
                        </li>
                        <li class='nav-item  col-md-3 col-6'>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692848/samsung-2-1_nkufvu_diikbv.jpg'
                              className='img-fluid mt-4 lazyload'
                              alt=''
                            />
                            <h4 className='text-center mt-2'>
                              Galaxy Book 2 in 1
                            </h4>
                          </div>
                        </li>
                      </ul>
                    </div>
                    {/*==================================================================== Samsung3 ================================================= */}
                    <div class='tab-pane' id='samsung-3'>
                      <ul class='nav nav-tabs row mt-5 gy-4 d-flex'>
                        <li class='nav-item col-md-3 col-6'>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783420397/images_4_enkzf6_tnf2bj.jpg'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>Galaxy Tab S8</h4>
                          </div>
                        </li>
                        <li class='col-md-3 col-6'>
                          <div className='card border-0 '>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783420388/1359190_R_Z001A_1_udlwlu_tflnwy.jpg'
                              className='img-fluid mb-3 lazyload'
                              alt=''
                            />
                            <h4 className='text-center '>Galaxy Tab S8+</h4>
                          </div>
                        </li>
                        <li class='nav-item col-md-3  col-6 '>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783420409/images_5_s582vn_yctg2b.jpg'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>Galaxy Tab S8 Ultra</h4>
                          </div>
                        </li>
                        <li class='nav-item  col-md-3 col-6'>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783420403/61FwTVP_KjL._AC_UF1000_1000_QL80__yx0loz_bz8ien.jpg'
                              className='img-fluid mb-2 lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>Galaxy Tab S7 FE</h4>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            {/*==================================================================== Lenovo ================================================= */}
            <div class='tab-pane' id='tab-5'>
              <section id='' class='features mb-5'>
                <div class='container mb-5' data-aos='fade-up'>
                  <ul class='nav nav-tabs row bg-secondary  d-flex'>
                    <li class='nav-item col-md-4 mt-2 col-6'>
                      <a
                        class='nav-link active show'
                        data-bs-toggle='tab'
                        data-bs-target='#lenovo-1'
                      >
                        <h5 className='fw-bold'>Lenovo Desktop</h5>
                      </a>
                    </li>
                    <li class='nav-item  col-md-4 mt-2 col-6'>
                      <a
                        class='nav-link'
                        data-bs-toggle='tab'
                        data-bs-target='#lenovo-2'
                      >
                        <h5 className='fw-bold'>Lenovo Notebooks</h5>
                      </a>
                    </li>
                    <li class='nav-item  col-md-4 mt-2 col-6 '>
                      <a
                        class='nav-link'
                        data-bs-toggle='tab'
                        data-bs-target='#lenovo-3'
                      >
                        <h5 className='fw-bold'>Lenovo Server</h5>
                      </a>
                    </li>
                  </ul>

                  <div class='tab-content'>
                    {/*==================================================================== Lenovo1 ================================================= */}
                    <div class='tab-pane active show' id='lenovo-1'>
                      <ul class='nav nav-tabs row mt-5 gy-4 d-flex'>
                        <li class='nav-item col-md-3 col-6'>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783420960/eFhm2kaGLkQSfgAr3keWVn-1200-80_re6ouy_rz79li.jpg'
                              className='img-fluid mt-3 mb-5 lazyload'
                              alt=''
                            />
                            <h4 className='text-center mt-4'>ThinkCentre</h4>
                          </div>
                        </li>
                        <li class='col-md-3 col-6'>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783420988/82tmwscevpkns4m8t2xn5df0py2rve323130_tiurqe_utvszh.png'
                              className='img-fluid mb-5 lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>IdeaCentre</h4>
                          </div>
                        </li>
                        <li class='nav-item col-md-3 col-6 '>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783420981/d2c99b52-8509-453b-b7e0-1273a841369a.745334f6adbec3ec7ac5d2fb14d74d4f_okrfxw_ghnrca.png'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>Legion</h4>
                          </div>
                        </li>
                        <li class='nav-item  col-md-3 col-6'>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783420938/LENOVCODEDP1579505669742_1579505671_lg_ssbqj5_ivwwhl.jpg'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>Lenovo</h4>
                          </div>
                        </li>
                      </ul>
                    </div>
                    {/*==================================================================== Lenovo2 ================================================= */}
                    <div class='tab-pane' id='lenovo-2'>
                      <ul class='nav nav-tabs row mt-5 gy-4 d-flex'>
                        <li class='nav-item col-md-3 col-6'>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783420860/yofiwjxag9102x15eo5mzd2f6icmew758030_xvsd13_aijoyg.png'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>ThinkPad</h4>
                          </div>
                        </li>
                        <li class='col-md-3 col-6'>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783420840/lenovo-laptops-yoga-slim-7i-carbon-gen-8-13-intel-series_ysldak_vhn2ui.png'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center mt-3'>Yoga</h4>
                          </div>
                        </li>
                        <li class='nav-item  col-md-3 col-6'>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783420907/images_4_xy2kdg_dnl7hm.png'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center mt-3'>LOQ</h4>
                          </div>
                        </li>
                        <li class='nav-item col-md-3 col-6 '>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783420929/lenovo-laptops-thinkbook-16p-gen-3-16-amd-series_xhae9h_ey7ezs.png'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>ThinkBook 16p Gen 3</h4>
                          </div>
                        </li>
                        <li class='nav-item  col-md-3 col-6'>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783420834/lenovo-laptop-thinkpad-x1-fold-16-intel-series-front_gzs4xj_lspza9.png'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>X1 Fold (16, Intel)</h4>
                          </div>
                        </li>
                        <li class='nav-item  col-md-3 col-6'>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783420898/lenovo-yoga-slim-6-gen-8-14-amd-series-tn_asbfvs_lg1o6r.png'
                              className='img-fluid'
                              alt=''
                            />
                            <h4 className='text-center'>16p Gen 3 (16, AMD)</h4>
                          </div>
                        </li>
                        <li class='nav-item  col-md-3 col-6'>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783420851/lenovo-laptops-think-thinkpad-x-series-x12-detachable-front_kcgbkn_qixtxi.png'
                              className='img-fluid'
                              alt=''
                            />
                            <h4 className='text-center'>X12 Detachable</h4>
                          </div>
                        </li>
                        <li class='nav-item  col-md-3 col-6'>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://www.lenovo.com/medias/?context=bWFzdGVyfHJvb3R8OTQzODF8YXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtfGg2Ny9oMTIvMTY5NDI0MjM4Njc0MjIucG5nfGEzZDA5NDQ3OTNjMjE4YjU3OGVkY2M2NjIxYjc1NjM1NmNhYzc4OWUyYWQxM2RmMTQyODA2NzJhYzQ0YTJmOTU'
                              className='img-fluid'
                              alt=''
                            />
                            <h4 className='text-center'>
                              X1 Yoga Gen 8 (14, Intel)
                            </h4>
                          </div>
                        </li>
                      </ul>
                    </div>
                    {/*==================================================================== Lenovo3 ================================================= */}
                    <div class='tab-pane' id='lenovo-3'>
                      <ul class='nav nav-tabs row mt-5 gy-4 d-flex'>
                        <li class='nav-item col-md-3 col-6'>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783420813/lenovo-servers-products-racks_devnna_sjghzp.png'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>Rack Servers</h4>
                          </div>
                        </li>
                        <li class='col-md-3 col-6'>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783420467/lenovo-servers-products-towers_zpda4s_qwq2hc.png'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>Tower Servers</h4>
                          </div>
                        </li>
                        <li class='nav-item  col-md-3 col-6'>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783420820/lenovo-servers-products-edge_kuxa8c_duh4ro.png'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>Edge Servers</h4>
                          </div>
                        </li>
                        <li class='nav-item col-md-3 col-6 '>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783420828/lenovo-servers-products-mission-critical_v81l9q_tzpmpm.png'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>
                              Mission-Critical Servers
                            </h4>
                          </div>
                        </li>
                        <li class='nav-item  col-md-3 col-6'>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783420432/lenovo-servers-products-high-density_xcqjxj_sxissp.png'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>
                              High-Density Servers
                            </h4>
                          </div>
                        </li>
                        <li class='nav-item  col-md-3 col-6'>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783420442/lenovo-servers-products-multi-node_droo9a_vlfdss.png'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>Multi-Node Servers</h4>
                          </div>
                        </li>
                        <li class='nav-item  col-md-3 col-6'>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783420805/lenovo-servers-products-software-defined-infrastructure_u5gdph_alpj2d.png'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>
                              Software Infrastructure
                            </h4>
                          </div>
                        </li>
                        <li class='nav-item  col-md-3 col-6'>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783420455/lenovo-servers-products-options_scoaan_pm2mfo.png'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>
                              Options & Accessories
                            </h4>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            {/*==================================================================== Asus ================================================= */}
            <div class='tab-pane' id='tab-6'>
              <section id='' class='features mb-5'>
                <div class='container mb-5'>
                  <ul class='nav nav-tabs row bg-secondary d-flex'>
                    <li class='nav-item col-md-4 mt-2 col-6'>
                      <a
                        class='nav-link active show'
                        data-bs-toggle='tab'
                        data-bs-target='#asus-1'
                      >
                        <h5 className='fw-bold'>Asus Desktop</h5>
                      </a>
                    </li>
                    <li class='nav-item  col-md-4 mt-2 col-6'>
                      <a
                        class='nav-link'
                        data-bs-toggle='tab'
                        data-bs-target='#asus-2'
                      >
                        <h5 className='fw-bold'>Asus Notebooks</h5>
                      </a>
                    </li>
                    <li class='nav-item  col-md-4 mt-2 col-6 '>
                      <a
                        class='nav-link'
                        data-bs-toggle='tab'
                        data-bs-target='#asus-3'
                      >
                        <h5 className='fw-bold'>Asus Server</h5>
                      </a>
                    </li>
                  </ul>

                  <div class='tab-content'>
                    {/*==================================================================== Asus1 ================================================= */}
                    <div class='tab-pane active show' id='asus-1'>
                      <ul class='nav nav-tabs row mt-5 gy-4 d-flex'>
                        <li class='nav-item col-md-3 col-6'>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://dlcdnwebimgs.asus.com/gain/df68ceeb-206c-44b1-9b97-6d5a30ae1315/w800'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>Business</h4>
                          </div>
                        </li>
                        <li class='col-md-3 col-6'>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://i5.walmartimages.com/asr/7cb7110f-d84f-4013-bb9e-9de724f3b9f9.741b8a5a73f2fb8613885b7ffa2b7d0d.jpeg'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>ROG</h4>
                          </div>
                        </li>
                        <li class='nav-item  col-md-3 col-6'>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://assets.products-live.ao.com/Images/50def354-71a3-4ff0-9c7b-b0631c681374/1280x1280/4fe0dc694534f99bd6052a9f12bd4962_2.jpg'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>ASUS AiO A3 Series</h4>
                          </div>
                        </li>
                        <li class='nav-item  col-md-3 col-6'>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src=''
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center mt-2'>Touch</h4>
                          </div>
                        </li>
                      </ul>
                    </div>
                    {/*==================================================================== Asus2 ================================================= */}
                    <div class='tab-pane' id='asus-2'>
                      <ul class='nav nav-tabs row mt-5 gy-4 d-flex'>
                        <li class='nav-item col-md-3 col-6'>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://dlcdnwebimgs.asus.com/gain/d742f85e-6859-4a12-8e37-1f90c085a6a9/'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>ProArt StudioBook</h4>
                          </div>
                        </li>
                        <li class='col-md-3 col-6'>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://m.media-amazon.com/images/I/71-k29VH73L._AC_UF894,1000_QL80_.jpg'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>Zenbook</h4>
                          </div>
                        </li>
                        <li class='nav-item col-md-3  col-6 '>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBMYmjjcMMiCNP-NeWnQ4ZCABWAh9FIP_pdw&usqp=CAU'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>VivoBook</h4>
                          </div>
                        </li>
                        <li class='nav-item  col-md-3 col-6'>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://assets.products-live.ao.com/Images/56b335c1-a5bb-4be7-a258-0994dc163716/1280x1280/92881785_9488351780_17.jpg'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>ChromeBook</h4>
                          </div>
                        </li>
                        <li class='nav-item  col-md-3 col-6'>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://plecom.imgix.net/iil-336611-657644.jpg?fit=fillmax&fill=solid&fill-color=ffffff&auto=format&w=1000&h=1000'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>Asus ROG</h4>
                          </div>
                        </li>
                        <li class='nav-item  col-md-3 col-6'>
                          <div className='card border-0 '>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://oechsle.vteximg.com.br/arquivos/ids/15211351-1000-1000/image-3a480d3277404d13aa90bb88721c847f.jpg?v=638280118955170000'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>Asus TUF</h4>
                          </div>
                        </li>
                        <li class='nav-item  col-md-3 col-6'>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://www.quicktech.co.za/cdn/shop/products/expertbook_b5302fba_product_photo_1a_star_black_28-4_2400x2400_dc8e02dc-e70b-403e-a02c-2268a8ff390a.jpg?v=1682450802&width=1080'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>ExpertBook B2 Flip</h4>
                          </div>
                        </li>
                        <li class='nav-item  col-md-3 col-6'>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://dlcdnwebimgs.asus.com/gain/993c153b-62ab-41cd-a8be-b714095d1bb8/w800/fwebp'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>ASUS BR1104C</h4>
                          </div>
                        </li>
                      </ul>
                    </div>
                    {/*==================================================================== Asus3 ================================================= */}
                    <div class='tab-pane' id='asus-3'>
                      <ul class='nav nav-tabs row mt-5 gy-4 d-flex'>
                        <li class='nav-item col-md-3 col-6'>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783420995/44a2a8f4644e4297894a97a441a6f7ea_ruzvzi_dhszgl.png'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>Rack Servers</h4>
                          </div>
                        </li>
                        <li class='col-md-3 col-6'>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783421017/13074f92040a40b68d56c079f1a3615d_si3afy_zsc0dw.png'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>GPU Servers</h4>
                          </div>
                        </li>
                        <li class='nav-item  col-md-3 col-6'>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783421010/ec99a001e6fd4a42b34dd28bde7b8eff_lzsn1d_uh2o4p.png'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>
                              High-Density Servers
                            </h4>
                          </div>
                        </li>
                        <li class='nav-item col-md-3 col-6 '>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783421003/ffa65ab896624553aaf0839ddadac194_hom7om_ouajxt.png'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>Tower Servers</h4>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            {/*==================================================================== End ================================================= */}
          </div>
        </div>
      </section>
      <div className='text-center'>
        <Link to={'/computers'} className='btn btn-primary'>
          <h6 className='pt-1'>Click to order your Computers now</h6>
        </Link>
      </div>
      {/* ======================================================== Network =================================================================== */}
      <h1 className='text-center fw-bold mb-5 mt-5'>Network Devices</h1>
      {/* =====================================================================================================================================*/}
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-lg-6'>
            <div className='text-center'>
              <img
                src='https://res.cloudinary.com/dahnwukbz/image/upload/v1784735122/qq8AE_a5blke_on16ik.gif'
                data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783418767/hardware_qqbzmj_ikpuf3.jpg'
                className='img-fluid lazyload mt-2'
                alt=''
              />
            </div>
          </div>
          <div className='col-lg-6'>
            <div className=''>
              <p>
                Elonatech believes that good quality networking equipment and
                devices not only increases the productivity of employees but is
                also essential for fast and efficient running of a company’s
                business and day-to-day activities.
              </p>
              <p>
                Starting or running a business requires more than just a
                brilliant idea. We often tend to undermine the physical
                components of starting an office or a business. From sharing
                resources and information among different computer systems
                within departments and accessing information from databases, to
                Investing in the right networking equipment can save you a lot
                of time, money, and effort. They can help in organizing daily
                tasks and in efficient running of business operations.
              </p>
              <p>
                Some of the essential lists of network equipment are routers,
                switches, access points, MiFi's, radios, point-to-point, IP
                phones, firewalls, etc. The network equipment lists are endless,
                but they can be categorized into vendors specific.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* =================================================================================================================================== */}
      <section id='network-opo' class='network-opo mb-5'>
        <div class='container mb-5'>
          <ul class='nav nav-tabs row gy-4 d-flex'>
            <li class='nav-item col-md-3  col-6'>
              <a
                class='nav-link active show'
                data-bs-toggle='tab'
                data-bs-target='#network-1'
              >
                <img
                  src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                  data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783418714/cisco-photo_vekgvf_hfypeb.png'
                  className='img-fluid lazyload'
                  alt=''
                />
                <h4>Cisco</h4>
              </a>
            </li>
            <li class='nav-item col-md-3 col-6'>
              <a
                class='nav-link'
                data-bs-toggle='tab'
                data-bs-target='#network-2'
              >
                <img
                  src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                  data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783418741/Tp-link-Photo_q8gdw1_du7jzt.png'
                  className='img-fluid lazyload'
                  alt=''
                />
                <h4>TP-Link</h4>
              </a>
            </li>
            <li class='nav-item col-md-3  col-6'>
              <a
                class='nav-link'
                data-bs-toggle='tab'
                data-bs-target='#network-3'
              >
                <img
                  src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                  data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783418732/d-link-photo_tqxjti_c7phcs.png'
                  className='img-fluid lazyload'
                  alt=''
                />
                <h4>D-Link</h4>
              </a>
            </li>
            <li class='nav-item col-md-3 col-6'>
              <a
                class='nav-link'
                data-bs-toggle='tab'
                data-bs-target='#network-4'
              >
                <img
                  src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                  data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783418752/miko_zdmwh3_g7nsyn.png'
                  className='img-fluid lazyload'
                  alt=''
                />
                <h4>MikroTik</h4>
              </a>
            </li>
          </ul>

          {/*==================================================================== Dropdown Content ================================================= */}
          <div class='tab-content'>
            {/*==================================================================== Cisco ================================================= */}
            <div class='tab-pane active show' id='network-1'>
              <div class='container mb-5'>
                <ul
                  class='nav nav-tabs row d-flex'
                  style={{ background: '#11253d' }}
                >
                  <li class='nav-item col-md-3 mt-2 col-6 '>
                    <a
                      class='nav-link active center show'
                      data-bs-toggle='tab'
                      data-bs-target='#cisco-1'
                    >
                      <h5 className='fw-bold'>Cisco Routers</h5>
                    </a>
                  </li>
                  <li class='nav-item col-md-3 mt-2 col-6'>
                    <a
                      class='nav-link center '
                      data-bs-toggle='tab'
                      data-bs-target='#cisco-2'
                    >
                      <h5 className='fw-bold'>Cisco Wireless APs</h5>
                    </a>
                  </li>
                  <li class='nav-item col-md-3 mt-2 col-6 '>
                    <a
                      class='nav-link center'
                      data-bs-toggle='tab'
                      data-bs-target='#cisco-3'
                    >
                      <h5 className='fw-bold'>Cisco Firewalls & Security</h5>
                    </a>
                  </li>
                  <li class='nav-item col-md-3 mt-2 col-6 '>
                    <a
                      class='nav-link center'
                      data-bs-toggle='tab'
                      data-bs-target='#cisco-4'
                    >
                      <h5 className='fw-bold'>Cisco IP Phones</h5>
                    </a>
                  </li>
                </ul>

                <div class='tab-content'>
                  {/*==================================================================== Cisco1 ================================================= */}
                  <div class='tab-pane active show' id='cisco-1'>
                    <ul class='nav nav-tabs row mt-5 gy-4 d-flex'>
                      <li class='nav-item col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783421037/1576087571473_of242b_o25r46.aviff'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>ISR 4000 Series</h4>
                        </div>
                      </li>
                      <li class='col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783421059/1702022057305_gksanf_v8x6bc.webp'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>NCS 500 Series</h4>
                        </div>
                      </li>
                      <li class='nav-item col-md-3 col-6 '>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783421078/1672920192907_1_jcl1x9_jtdciq.avif'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>ASR 9000 Series</h4>
                        </div>
                      </li>
                      <li class='nav-item  col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783421071/1702022084889_adagdf_erlvub.png'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>Cisco 8000 Series</h4>
                        </div>
                      </li>
                      <li class='nav-item  col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783421031/1677567588510_ry43pb_g4awo3.avif'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>
                            800 Series Industrial ISR
                          </h4>
                        </div>
                      </li>
                      <li class='nav-item  col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783421024/1584117774275_yw71wf_oi84uq.avif'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>IOS XRv 9000</h4>
                        </div>
                      </li>
                      <li class='nav-item  col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783421045/1576087573352_uybmox_foarf2.avif'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>ISR 1000 Series</h4>
                        </div>
                      </li>
                      <li class='nav-item  col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1785144333/57000_c_y4uvbo_yoy3xd.png'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>NCS 5700 Series</h4>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/*==================================================================== Cisco2 ================================================= */}
                  <div class='tab-pane' id='cisco-2'>
                    <ul class='nav nav-tabs row mt-5 gy-4 d-flex'>
                      <li class='nav-item col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783421510/cisco-catalyst-iw6300-heavy-duty-series-access-points_f40xdy_fpczld.jpg'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>
                            Catalyst IW6300 Heavy Duty Access Points
                          </h4>
                        </div>
                      </li>
                      <li class='col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783421339/61398-18029325_pu2ycm_hmqdet.png'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>
                            Cisco Catalyst 9100 Access Points
                          </h4>
                        </div>
                      </li>
                      <li class='nav-item col-md-3 col-6 '>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783421324/images_4_uidryr_dzwwgu.jpg'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>
                            Cisco 6300 Series Access Points
                          </h4>
                        </div>
                      </li>
                      <li class='nav-item  col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783421307/MerakiCW9163E-MRNoAntenna_ifhoat_posvpp.png'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>
                            Cisco Catalyst 9163E Access Point
                          </h4>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/*====================================================================  Cisco3  ================================================= */}
                  <div class='tab-pane' id='cisco-3'>
                    <ul class='nav nav-tabs row mt-5 gy-4 d-flex'>
                      <li class='nav-item col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783592281/1000443368_881x350_n5lopo_qoyeni.webp'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>1000 Series</h4>
                        </div>
                      </li>
                      <li class='col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783421658/xgs-3100-front-minqZiX8GqGh3icZ_rsm47u_g0e3wi.jpg'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>3100 Series</h4>
                        </div>
                      </li>
                      <li class='nav-item col-md-3 col-6 '>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783421665/security-firepower-4100-series_bhtjsg_ukuvfm.avif'
                            className='img-fluid mb-4 lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>4100 Series</h4>
                        </div>
                      </li>
                      <li class='nav-item  col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783421674/security-secure-firewall-4200-series_mztl4t_hq1nu5.avif'
                            className='img-fluid mb-4 mt-4 lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>4200 Series</h4>
                        </div>
                      </li>
                      <li class='nav-item  col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783421519/1606118112322_lsz96y_oxizrt.jpg'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>9300 Series</h4>
                        </div>
                      </li>
                      <li class='nav-item  col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783421535/ISA-3000-2C2F-K9_fhd7l0_pyxklc.jpg'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>
                            Secure Firewall ISA3000
                          </h4>
                        </div>
                      </li>
                      <li class='nav-item  col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783421552/1._th6mxa_ybol9p.jpg'
                            className='img-fluid mb-4 lazyload'
                            alt=''
                          />
                          <h4 className='text-center mt-3'>
                            Firewall Defense Virtual
                          </h4>
                        </div>
                      </li>
                      <li class='nav-item  col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783421646/1575271733726703_kssfu6_rmqzid.jpg'
                            className='img-fluid mb-3'
                            alt=''
                          />
                          <h4 className='text-center'>Firewall c9300 Series</h4>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/* =========================================  Cisco4  ================================================== */}
                  <div class='tab-pane' id='cisco-4'>
                    <ul class='nav nav-tabs row mt-5 gy-4 d-flex'>
                      <li class='nav-item col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783421713/41okNK25ZjL._AC_UF1000_1000_QL80__1_wta8kp_cnmpa6.jpg'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>
                            Cisco IP Phones Multiplatform
                          </h4>
                        </div>
                      </li>
                      <li class='col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783421686/Phone-8845-01_okpyl9_bcdtdd.webp'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>
                            Cisco IP Phone 8800 Series
                          </h4>
                        </div>
                      </li>
                      <li class='nav-item col-md-3 col-6 '>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783421697/Cisco-8811-k9_exa30d_hg1ksb.jpg'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>
                            Cisco IP Phone 7800 Series
                          </h4>
                        </div>
                      </li>
                      <li class='nav-item  col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783421705/446406_sqdjio_djvuut.webp'
                            className='img-fluid mb-3 lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>
                            Cisco Webex Room Phone
                          </h4>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/* =========================================================================================== */}
                </div>
              </div>
            </div>
            {/*==================================================================== TP-Link ================================================= */}
            <div class='tab-pane' id='network-2'>
              <div class='container mb-5'>
                <ul
                  class='nav nav-tabs row  d-flex'
                  style={{ background: '#11253d' }}
                >
                  <li class='nav-item col-md-4 mt-2  col-6'>
                    <a
                      class='nav-link active center show'
                      data-bs-toggle='tab'
                      data-bs-target='#tp-1'
                    >
                      <h5 className='fw-bold'>TP-Link Routers </h5>
                    </a>
                  </li>
                  <li class='nav-item  col-md-4  mt-2 col-6'>
                    <a
                      class='nav-link center'
                      data-bs-toggle='tab'
                      data-bs-target='#tp-2'
                    >
                      <h5 className='fw-bold'>Network Expansion</h5>
                    </a>
                  </li>
                  <li class='nav-item  col-md-4 mt-2 col-6 '>
                    <a
                      class='nav-link center'
                      data-bs-toggle='tab'
                      data-bs-target='#tp-3'
                    >
                      <h5 className='fw-bold'>Switches</h5>
                    </a>
                  </li>
                </ul>

                <div class='tab-content'>
                  {/*==================================================================== TP-Link 1 ================================================= */}
                  <div class='tab-pane active show' id='tp-1'>
                    <ul class='nav nav-tabs row mt-5 gy-4 d-flex'>
                      <li class='nav-item col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783421770/2005461954_txlmwu_ykwvey.webp'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>Archer BE800</h4>
                        </div>
                      </li>
                      <li class='col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783421803/images_ksw2w8_vjczpb.jpg'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>Archer A8</h4>
                        </div>
                      </li>
                      <li class='nav-item col-md-3  col-6 '>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783421777/Archer-GE800-3_qnjykj_g9z102.jpg'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>Archer GE800</h4>
                        </div>
                      </li>
                      <li class='nav-item  col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783421761/0de2cd4bd8974a83f532a30279e8ba3c_xvznnj_fd2zrr.jpg'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>Archer AX80</h4>
                        </div>
                      </li>
                      <li class='nav-item  col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783421734/tp-link-archer-ax75-ax5400-wireless-tri-band-gigabit-router-archer-ax75-color-black.jpg.mst_msmzsu_v3it3h.webp'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>Archer AX75</h4>
                        </div>
                      </li>
                      <li class='nav-item  col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783421728/Archer_AX5400_Pro_WiFi_6_VPN_Router_with_2.5G_Port_1_normal_20221216122017w_ksilsf_h2voze.jpg'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>Archer AX5400 Pro</h4>
                        </div>
                      </li>
                      <li class='nav-item  col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783421728/Archer_AX5400_Pro_WiFi_6_VPN_Router_with_2.5G_Port_1_normal_20221216122017w_ksilsf_h2voze.jpg'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>Archer AX55 Pro</h4>
                        </div>
                      </li>
                      <li class='nav-item  col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783421785/images_1_eabzdv_vvticr.jpg'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>Archer C5400X</h4>
                        </div>
                      </li>
                      <li class='nav-item  col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783421814/RoteadorWirelessTP-LinkArcherAX60004804MBPS_grande_zztas6_yeq4cc.webp'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>Archer AX6000</h4>
                        </div>
                      </li>
                      <li class='nav-item  col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783421745/000000000001026520_1_yoauz0_tjbacx.jpg'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>Archer C4000</h4>
                        </div>
                      </li>
                      <li class='nav-item  col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783421793/images_2_iyajp6_es2mn6.jpg'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>Archer C54</h4>
                        </div>
                      </li>
                      <li class='nav-item  col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783421721/450Mbps-Wireless-N-Router-TL-WR940N-8019593_aczcen_ons5xy.webp'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>TL-WR940N</h4>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/*==================================================================== TP-Link 2 ================================================= */}
                  <div class='tab-pane' id='tp-2'>
                    <ul class='nav nav-tabs row mt-5 gy-4 d-flex'>
                      <li class='nav-item col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783673658/tp-link-re450-ac1750-wi-fi-range-extender_eom8ct_sectmk.jpg'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>RE550</h4>
                        </div>
                      </li>
                      <li class='nav-item col-md-3 col-6 '>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783673638/auto_20210125223112_44336634_01_b7b6c435-324f-4ba1-9f94-1350a09a9509_TL-WPA8631P-KIT-V3_lr5na0_cwgro3.webp'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>TL-WPA7617 KIT</h4>
                        </div>
                      </li>
                      <li class='nav-item col-md-3 col-6 '>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783673610/61v1wxmNifL_ytewvg_foeuru.jpg'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>TL-PA4010 KIT</h4>
                        </div>
                      </li>
                      <li class='nav-item  col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783673617/519exto4CqS._AC_UF1000_1000_QL80__awlyv9_vabbhx.jpg'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>TL-WPA7517 KIT</h4>
                        </div>
                      </li>
                      <li class='nav-item  col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783673563/2_qoduzl_biu0hu.jpg'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>TL-WA850RE</h4>
                        </div>
                      </li>
                      <li class='nav-item  col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783673646/images_sa9fqw_uwyops.jpg'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>TL-WA801ND</h4>
                        </div>
                      </li>
                      <li class='nav-item  col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783673576/tp-link-tl-wa1201-ac1200-wireless-access-point-500x500_yxzfg5_o7qax2.webp'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>TL-WA1201</h4>
                        </div>
                      </li>
                      <li class='nav-item  col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783673623/54634545_extra_large_lm4d6t_fd3dji.webp'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>TL-PA7017</h4>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/*==================================================================== TP-Link 3 ================================================= */}
                  <div class='tab-pane' id='tp-3'>
                    <ul class='nav nav-tabs row mt-5 gy-4 d-flex'>
                      <li class='nav-item col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783421868/d-link-tl-sg105mpe-gigabit-easy-smart-switch-500x500_ga9u2t_uxuudm.webp'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>TL-SG105MPE</h4>
                        </div>
                      </li>

                      <li class='nav-item col-md-3 col-6 '>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783421838/207472_1692332105_qnv9ln_ci5t4v.webp'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>TL-SG1005D</h4>
                        </div>
                      </li>
                      <li class='nav-item  col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783421881/gsc_123032620_3312808_1_xnybu1_frhjgs.jpg'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>LS1005G</h4>
                        </div>
                      </li>
                      <li class='nav-item  col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783421897/images_czjkvo_tiacnd.jpg'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>TL-SG605</h4>
                        </div>
                      </li>
                      <li class='nav-item  col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783421911/TL-SG608_1_1024x_ncefbg_josnry.webp'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>TL-SG608</h4>
                        </div>
                      </li>
                      <li class='nav-item  col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783421845/6576d74ef3d40-73082-1_gvzraf_wwqkjg.jpg'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>LS1008G</h4>
                        </div>
                      </li>
                      <li class='nav-item  col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783421829/2_k5vymq_gxpurp.jpg'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>TL-SF1016D</h4>
                        </div>
                      </li>
                      <li class='nav-item  col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783421821/images_1_crg97t_a4fyxr.jpg'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>TL-SG116</h4>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/*==================================================================== D-Link ================================================= */}
            <div class='tab-pane' id='network-3'>
              <section id='' class='features mb-5'>
                <div class='container mb-5'>
                  <ul
                    class='nav nav-tabs row  d-flex'
                    style={{ background: '#11253d' }}
                  >
                    <li class='nav-item col-md-4 mt-2 col-6'>
                      <a
                        class='nav-link active  center show'
                        data-bs-toggle='tab'
                        data-bs-target='#dl-1'
                      >
                        <h5 className='fw-bold'>D-Link Routers</h5>
                      </a>
                    </li>
                    <li class='nav-item  col-md-4 mt-2  col-6'>
                      <a
                        class='nav-link center'
                        data-bs-toggle='tab'
                        data-bs-target='#dl-2'
                      >
                        <h5 className='fw-bold'>D-Link Extenders</h5>
                      </a>
                    </li>
                    <li class='nav-item  col-md-4 mt-2 col-6 '>
                      <a
                        class='nav-link center'
                        data-bs-toggle='tab'
                        data-bs-target='#dl-3'
                      >
                        <h5 className='fw-bold'>D-Link Switches</h5>
                      </a>
                    </li>
                  </ul>

                  <div class='tab-content'>
                    {/*==================================================================== D-Link 1 ================================================= */}
                    <div class='tab-pane active show' id='dl-1'>
                      <ul class='nav nav-tabs row mt-5 gy-4 d-flex'>
                        <li class='nav-item col-md-3 col-6'>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783424059/R32_A1_Front_al5fat_mlcv25.png'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>
                              EAGLE PRO AI AX3200 Smart Router
                            </h4>
                          </div>
                        </li>
                        <li class='nav-item col-md-3  col-6 '>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783424019/DWR_960_B1_Front_oomaby_p3nz8e.png'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>
                              LTE Cat7 Wi-Fi AC1200 Router
                            </h4>
                          </div>
                        </li>
                        <li class='nav-item  col-md-3 col-6'>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783424049/G416_A1_Front_ole90j_zqi4q4.png'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>
                              EAGLE PRO AI AX3200 Smart Router
                            </h4>
                          </div>
                        </li>
                        <li class='nav-item  col-md-3 col-6'>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783422166/DIRX48601_cp3hsa_o8vx9z.png'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>
                              EXO AX AX4800 Wi-Fi 6 Router
                            </h4>
                          </div>
                        </li>
                        <li class='nav-item  col-md-3 col-6'>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783421944/DIR26401_rkjbpw_yklcbm.png'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>Smart AC2600 Router</h4>
                          </div>
                        </li>
                        <li class='nav-item  col-md-3 col-6'>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783422112/DIRX1870Frontwithlogo_wrhyqo_najokf.png'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>
                              EXO AX AX1800 Router
                            </h4>
                          </div>
                        </li>
                        <li class='nav-item  col-md-3 col-6'>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783422125/DIRX6060Back_bfucgk_wwg3xg.png'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>
                              AX6000 Wi-Fi 6 Router
                            </h4>
                          </div>
                        </li>
                        <li class='col-md-3 col-6'>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783422125/DIRX6060Back_bfucgk_wwg3xg.png'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>AC1200 Smart Router</h4>
                          </div>
                        </li>
                      </ul>
                    </div>
                    {/*====================================================================  D-Link 2 ================================================= */}
                    <div class='tab-pane' id='dl-2'>
                      <ul class='nav nav-tabs row mt-5 gy-4 d-flex'>
                        <li class='nav-item col-md-3 col-6'>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783424139/E15_A1_FrontOEU_bssu24_gi5xr2.png'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>
                              AX1500 Mesh Range Extender
                            </h4>
                          </div>
                        </li>
                        <li class='col-md-3 col-6'>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783424130/DRA2060A1Back_ezbdmq_tkgli3.png'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>
                              AC2000 Mesh Range Extender
                            </h4>
                          </div>
                        </li>
                        <li class='col-md-3 col-6'>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783424097/DAP1820A1Side_av4t7e_fzx4zs.png'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>
                              AC2000 Wi-Fi Range Extender
                            </h4>
                          </div>
                        </li>
                        <li class='col-md-3 col-6'>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783424079/DAP1650front_gzefew_kj4cpb.png'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>
                              Wireless AC1200 Extender
                            </h4>
                          </div>
                        </li>
                      </ul>
                    </div>
                    {/*==================================================================== D-Link 3 ================================================= */}
                    <div class='tab-pane' id='dl-3'>
                      <ul class='nav nav-tabs row mt-5 gy-4 d-flex'>
                        <li class='nav-item col-md-3 col-6'>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783497123/DMS_105_A1_Right_Side2_mgr9do_eshr3n.png'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>
                              5-Port 2.5G Multi-Gigabit Desktop Switch
                            </h4>
                          </div>
                        </li>
                        <li class='col-md-3 col-6'>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1785147140/DMS_107_A1_Front_ux6ppk_tdejqy.png'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>
                              7-Port Multi-Gigabit Unmanaged Switch
                            </h4>
                          </div>
                        </li>
                        <li class='nav-item col-md-3  col-6 '>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783497131/DMS_106XT_A1_Front_Colour_RD_dij2mv_jfepei.png'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>
                              6-Port Multi-Gigabit Unmanaged Switch
                            </h4>
                          </div>
                        </li>
                        <li class='nav-item  col-md-3 col-6'>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783497107/DGS_1016S_A1_Side_s4jcto_iv3ajh.png'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>
                              16-Port Gigabit Unmanaged Switch
                            </h4>
                          </div>
                        </li>
                        <li class='nav-item  col-md-3 col-6'>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783497093/DES1008DL1Image_LFront_01_cyip6a_quiivf.png'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>
                              8-Port Fast Ethernet Unmanaged Desktop Switch
                            </h4>
                          </div>
                        </li>
                        <li class='nav-item  col-md-3 col-6'>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783497116/DGS1005DJ1Image_LFront_s7clym_ei5mxi.png'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>
                              5-Port Gigabit Unmanaged Desktop Switch
                            </h4>
                          </div>
                        </li>
                        <li class='nav-item  col-md-3 col-6'>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783497066/DES1005PB1Image_LFront_am1k6w_dkxtmp.png'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>
                              Gigabit PoE Smart Surveillance Switches
                            </h4>
                          </div>
                        </li>
                        <li class='nav-item  col-md-3 col-6'>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783497081/DGS_1520_28_28MP_52_52MP_A1_Front_fvimhg_xjdpqx.png'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>
                              Layer 3 Stackable Smart Managed Switches
                            </h4>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            {/*==================================================================== MikroTik ================================================= */}
            <div class='tab-pane' id='network-4'>
              <section id='' class='features mb-5'>
                <div class='container mb-5'>
                  <ul
                    class='nav nav-tabs row  d-flex'
                    style={{ background: '#11253d' }}
                  >
                    <li class='nav-item col-md-4 mt-2 col-6'>
                      <a
                        class='nav-link active center show'
                        data-bs-toggle='tab'
                        data-bs-target='#mikro-1'
                      >
                        <h5 className='fw-bold'>MikroTik Routers</h5>
                      </a>
                    </li>
                    <li class='nav-item  col-md-4 mt-2  col-6'>
                      <a
                        class='nav-link  center'
                        data-bs-toggle='tab'
                        data-bs-target='#mikro-2'
                      >
                        <h5 className='fw-bold center'>MikroTik Antennas</h5>
                      </a>
                    </li>
                    <li class='nav-item  col-md-4 mt-2 col-6 '>
                      <a
                        class='nav-link  center'
                        data-bs-toggle='tab'
                        data-bs-target='#mikro-3'
                      >
                        <h5 className='fw-bold center'>MikroTik Switches</h5>
                      </a>
                    </li>
                  </ul>

                  <div class='tab-content'>
                    {/*==================================================================== MikroTik1 ================================================= */}
                    <div class='tab-pane active show' id='mikro-1'>
                      <ul class='nav nav-tabs row mt-5 gy-4 d-flex'>
                        <li class='nav-item col-md-3 col-6'>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783498148/2267_m_obzi29_ij2bhs.png'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>L009UiGS-RM</h4>
                          </div>
                        </li>
                        <li class='col-md-3 col-6'>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783498148/2267_m_obzi29_ij2bhs.png'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>hEX PoE lite</h4>
                          </div>
                        </li>
                        <li class='nav-item col-md-3 col-6 '>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783498075/1446_m_tpks3i_pl6wzi.png'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>PowerBox</h4>
                          </div>
                        </li>
                        <li class='nav-item  col-md-3 col-6'>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/elonatech/image/upload/v1706708871/hardware%20page/network/Mikro/router/1539_m_sxioda.png'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>hEX S</h4>
                          </div>
                        </li>
                        <li class='nav-item  col-md-3 col-6'>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783498021/1040_m_gskf0x_dr8crh.png'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>hEX lite</h4>
                          </div>
                        </li>
                        <li class='nav-item  col-md-3 col-6'>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783498141/1633_m_gjvf2i_igjus9.png'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>RB4011iGS+RM</h4>
                          </div>
                        </li>
                        <li class='nav-item  col-md-3 col-6'>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783498066/1344_m_pd3lva_iu4rhn.png'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>RB1100AHx4</h4>
                          </div>
                        </li>
                        <li class='nav-item  col-md-3 col-6'>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783497455/2115_m_syryyd_s5gqja.png'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>CCR2116-12G-4S+</h4>
                          </div>
                        </li>
                      </ul>
                    </div>
                    {/*==================================================================== MikroTik2 ================================================= */}
                    <div class='tab-pane' id='mikro-2'>
                      <ul class='nav nav-tabs row mt-5 gy-4 d-flex'>
                        <li class='nav-item col-md-3 col-6'>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783591919/1499_m_uprpmd_obyhhw.png'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>mANT30</h4>
                          </div>
                        </li>
                        <li class='col-md-3 col-6'>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1785147687/1442_m_q2xegd_jhv97q.png'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>MTA Radome Kit</h4>
                          </div>
                        </li>
                        <li class='nav-item col-md-3 col-6 '>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783498163/1086_m_cibdw1_qhno5n.png'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>mANT 19S</h4>
                          </div>
                        </li>
                        <li class='nav-item  col-md-3 col-6'>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783498155/1133_m_x2sajz_vk47yi.png'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>Sleeve30</h4>
                          </div>
                        </li>
                      </ul>
                    </div>
                    {/*==================================================================== MikroTik3 ================================================= */}
                    <div class='tab-pane' id='mikro-3'>
                      <ul class='nav nav-tabs row mt-5 gy-4 d-flex'>
                        <li class='nav-item col-md-3 col-6'>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783592226/1329_m_ipz61p_akhmgp.pngg'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>RB260GS</h4>
                          </div>
                        </li>
                        <li class='col-md-3 col-6'>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783592221/1257_m_hqcmpy_a0mg5l.png'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>CRS106-1C-5S</h4>
                          </div>
                        </li>
                        <li class='nav-item col-md-3 col-6 '>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783592234/1659_m_wnsq7w_plg1vs.png'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>CRS305-1G-4S+IN</h4>
                          </div>
                        </li>
                        <li class='nav-item  col-md-3 col-6'>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783592254/2147_m_anj1jg_qfgwbz.png'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>CRS310-1G-5S-4S+IN</h4>
                          </div>
                        </li>
                        <li class='nav-item  col-md-3 col-6'>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783592241/1899_m_w5jini_qnwqax.png'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>CRS354-48G-4S+2Q+RM</h4>
                          </div>
                        </li>
                        <li class='nav-item  col-md-3 col-6'>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783592260/2193_m_budg9q_no8njp.png'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>CRS112-8P-4S-IN</h4>
                          </div>
                        </li>
                        <li class='nav-item  col-md-3 col-6'>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783592249/1923_m_mpgvjq_dsx572.png'
                              className='img-fluid lazyload'
                              alt=''
                            />
                            <h4 className='text-center'>netPower Lite 7R</h4>
                          </div>
                        </li>
                        <li class='nav-item  col-md-3 col-6'>
                          <div className='card border-0'>
                            <img
                              src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                              data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783592215/2218_m_fleevm_obbnjw.png'
                              className='img-fluid layload'
                              alt=''
                            />
                            <h4 className='text-center'>FiberBox Plus</h4>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
      <div className='text-center'>
        <Link to={'/network-devices'} className='btn btn-primary'>
          <h6 className='pt-1'>Click to order your Network devices now</h6>
        </Link>
      </div>
      {/* ============================================================== Printer =============================================================*/}
      <h1 className='text-center fw-bold mb- mt-5'>Printers</h1>
      <div className='container mt-' style={{ marginTop: '50px' }}>
        <div className='row align-items-center'>
          <div className='col-lg-6 '>
            <h4 className='fw-bold ms-3'>
              Some popular brands of all-in-one printers we offer
            </h4>
            <div className='card border-0'>
              <div className='row'>
                <div className='col-6'>
                  <ul>
                    <li>Canon Pixma TR8550 printer</li>
                    <li className='mt-2'>
                      Ricoh Digital Multifunctioning Device IMC 3000
                    </li>
                    <li className='mt-2'>Ricoh IMC 2000</li>
                    <li className='mt-2'>
                      Epson WorkForce Pro WF-4630 printer
                    </li>
                    <li className='mt-2'>Brother MFC-J5330DW printer</li>
                    <li className='mt-2'>
                      HP LaserJet Pro MFP M227fdw printer
                    </li>
                  </ul>
                </div>
                <div className='col-6'>
                  <ul>
                    <li>HP Envy 5055 (5010 in the UK) printer</li>
                    <li className='mt-2'>Lexmark MB2236adw printer</li>
                    <li className='mt-2'>Brother MFC-J5945DW printe</li>
                    <li className='mt-2'>Canon i-Sensys MF735Cx printer</li>
                    <li className='mt-2'>Xerox VersaLink C405 printer</li>
                    <li className='mt-2'>Canon Maxify MB2750 printer</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-6'>
            <div className='card border-0'>
              <div className='text-center'>
                <img
                  src='https://res.cloudinary.com/dahnwukbz/image/upload/v1784735122/qq8AE_a5blke_on16ik.gif'
                  data-src='https://elonatech.com.ng/wp-content/uploads/2021/08/Printers-Scanners-and-Copiers.-2048x594-1-e1630746286693.jpg'
                  className='img-fluid lazyload'
                  alt=''
                />
              </div>
              <p className='mt-3'>
                Elonatech offers the best{' '}
                <span className='fw-bold'>all-in-one (AIO) printers</span> money
                can buy. We have the best all-in-one printers for a whole range
                of budgets. From home use to small businesses, and to large
                businesses, we’ve got the best all-in-one printer for your
                needs.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* =================================================  Some popular brands ============================================================ */}
      <section id='printers-opo' class='printers-opo mb-5'>
        <div class='container mb-5'>
          <ul class='nav nav-tabs row gy-4 d-flex'>
            <li class='nav-item col-md-2 col-6'>
              <a
                class='nav-link active show'
                data-bs-toggle='tab'
                data-bs-target='#printer-1'
              >
                <img
                  src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                  data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783592361/HP-Logo_t2pe45_owr9yi.png'
                  className='img-fluid mt-3 lazyload'
                  alt=''
                />
                <h4 className=''>HP</h4>
              </a>
            </li>
            <li class='nav-item col-md-2 col-6'>
              <a
                class='nav-link'
                data-bs-toggle='tab'
                data-bs-target='#printer-2'
              >
                <img
                  src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                  data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783592295/Epson-Logo_l3hdkp_uuyamo.png'
                  className='img-fluid lazyload'
                  alt=''
                />
                <h4>Epson</h4>
              </a>
            </li>
            <li class='nav-item col-md-2  col-6'>
              <a
                class='nav-link'
                data-bs-toggle='tab'
                data-bs-target='#printer-3'
              >
                <img
                  src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                  data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783592368/images_wcdv29_ejme8s.png'
                  className='img-fluid lazyload'
                  alt=''
                />
                <h4>Brother</h4>
              </a>
            </li>
            <li class='nav-item col-md-2 col-6'>
              <a
                class='nav-link'
                data-bs-toggle='tab'
                data-bs-target='#printer-4'
              >
                <img
                  src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                  data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783592289/Canon-Emblem_elkj2q_fzlqfr.png'
                  className='img-fluid lazyload'
                  alt=''
                />
                <h4>Canon</h4>
              </a>
            </li>
            <li class='nav-item col-md-2 col-6'>
              <a
                class='nav-link'
                data-bs-toggle='tab'
                data-bs-target='#printer-5'
              >
                <img
                  src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                  data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783592276/LexmarkLogo_CMYK__1_Logo_djo3uu_nbsoot.jpg'
                  className='img-fluid lazyload'
                  alt=''
                />
                <h4>Lexmark</h4>
              </a>
            </li>
            <li class='nav-item col-md-2 col-6'>
              <a
                class='nav-link'
                data-bs-toggle='tab'
                data-bs-target='#printer-6'
              >
                <img src='' className='img-fluid  mt-1' alt='' />
                <img
                  src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                  data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783592303/Final2_hrohmt_abyxgt_yycscl.png'
                  className='img-fluid lazyload mt-3'
                  alt=''
                />
                <h4>Ricoh</h4>
              </a>
            </li>
          </ul>

          {/*==================================================================== Dropdown Content ================================================= */}
          <div class='tab-content'>
            {/*==================================================================== HP ================================================= */}
            <div class='tab-pane active show' id='printer-1'>
              <div class='container mb-5'>
                <ul
                  class='nav nav-tabs row  d-flex'
                  style={{ background: '#34548c' }}
                >
                  <li class='nav-item col-md-3 mt-2 col-6'>
                    <a
                      class='nav-link active center show'
                      data-bs-toggle='tab'
                      data-bs-target='#HP-1'
                    >
                      <h5 className='fw-bold'>HP OfficeJet</h5>
                    </a>
                  </li>
                  <li class='nav-item  col-md-3  mt-2 col-6'>
                    <a
                      class='nav-link center'
                      data-bs-toggle='tab'
                      data-bs-target='#HP-2'
                    >
                      <h5 className='fw-bold'>HP DeskJet</h5>
                    </a>
                  </li>
                  <li class='nav-item  col-md-3 mt-2 col-6 '>
                    <a
                      class='nav-link center'
                      data-bs-toggle='tab'
                      data-bs-target='#HP-3'
                    >
                      <h5 className='fw-bold'>HP LaserJet</h5>
                    </a>
                  </li>
                  <li class='nav-item  col-md-3 mt-2 col-6 '>
                    <a
                      class='nav-link center'
                      data-bs-toggle='tab'
                      data-bs-target='#HP-4'
                    >
                      <h5 className='fw-bold'>HP ENVY</h5>
                    </a>
                  </li>
                </ul>
                <div class='tab-content'>
                  {/*==================================================================== HP-1 ================================================= */}
                  <div class='tab-pane active show' id='HP-1'>
                    <ul class='nav nav-tabs row mt-5 gy-4 d-flex'>
                      <li class='col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783592377/c05141873_wc3evr_ci9o6x.png'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>HP Officejet</h4>
                        </div>
                      </li>
                      <li class='nav-item col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783592377/c05141873_wc3evr_ci9o6x.png'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>HP Officejet Pro</h4>
                        </div>
                      </li>
                      <li class='nav-item  col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783592377/c05141873_wc3evr_ci9o6x.png'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>HP Officejet Mobile</h4>
                        </div>
                      </li>
                      <li class='nav-item  col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783592384/c06761004_ph3jqa_vi2frr.png'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>
                            HP OfficeJet Pro 9015e
                          </h4>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/*==================================================================== HP-2 ================================================= */}
                  <div class='tab-pane' id='HP-2'>
                    <ul class='nav nav-tabs row mt-5 gy-4 d-flex'>
                      <li class='nav-item col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783592811/c08871079_seugpq_mo17w0.png'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>HP DeskJet 2800</h4>
                        </div>
                      </li>
                      <li class='col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783592804/c08742721_rnbtfy_vsirq5.png'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>HP DeskJet 4200</h4>
                        </div>
                      </li>
                      <li class='nav-item col-md-3 col-6 '>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783592830/c08752487_qlrys5_ljur1l.png'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>HP DeskJet Ultra 4900</h4>
                        </div>
                      </li>
                      <li class='nav-item  col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783592799/c08751578_n3l0hb_sveonu.png'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>HP DeskJet Ink 4200</h4>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/*==================================================================== HP-3 ================================================= */}
                  <div class='tab-pane' id='HP-3'>
                    <ul class='nav nav-tabs row mt-5 gy-4 d-flex'>
                      <li class='nav-item col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783592873/c03122578_ylxyuj_uveriq.webp'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>
                            HP Color LaserJet Pro 200/400 series
                          </h4>
                        </div>
                      </li>
                      <li class='col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783592855/994dc3bb-8764-4cdd-9057-3ac82ed59755_fsnyep_a1eedp.jpg'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>
                            HP LaserJet Pro 4000 series
                          </h4>
                        </div>
                      </li>
                      <li class='nav-item col-md-3 col-6 '>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783592893/Printer_Desktop_rowngq_h8wqur.avif'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>
                            HP LaserJet Pro 3000 series
                          </h4>
                        </div>
                      </li>
                      <li class='nav-item  col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783592881/c08208290_z7mqrt_offm6v.png'
                            className='img-fluid mb-3 lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>
                            HP LaserJet Tank series
                          </h4>
                        </div>
                      </li>
                      <li class='nav-item  col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783592887/hp-laserjet-enterprise-mfp-m631dn-500x500_ouoatq_udl8x1.webp'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>
                            HP LaserJet Enterprises 400 series
                          </h4>
                        </div>
                      </li>
                      <li class='nav-item  col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783592852/3fd28550_hp_m575f_xfxkdm_jzssbc.png'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>
                            HP LaserJet Enterprises 500 series
                          </h4>
                        </div>
                      </li>
                      <li class='nav-item  col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783592863/c02874173_fzukm3_kghl9j.webp'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>
                            HP LaserJet Enterprises 600 series
                          </h4>
                        </div>
                      </li>
                      <li class='nav-item  col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783592841/c03376046_niqe3t_qgaqew.webp'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>
                            HP LaserJet Enterprises 700/800 series
                          </h4>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/* =================================================================   HP-4    =============================================== */}
                  <div class='tab-pane' id='HP-4'>
                    <ul class='nav nav-tabs row mt-5 gy-4 d-flex'>
                      <li class='nav-item col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783592918/c07016941_npqbm5_hpb1xd.png'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>HP ENVY 6000e series</h4>
                        </div>
                      </li>
                      <li class='col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783592902/c07016761_evze3h_hsu6eh.png'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>HP ENVY 6400e series</h4>
                        </div>
                      </li>
                      <li class='nav-item col-md-3 col-6 '>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783592928/c07936205_ws1oi2_ztxkrk.png'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>HP ENVY Inspire 7200e</h4>
                        </div>
                      </li>
                      <li class='nav-item  col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783592909/c07900539_n6ho1s_qzjhms.png'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>HP ENVY Inspire 7900e</h4>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/* =========================================================================================== */}
                </div>
              </div>
            </div>
            {/*==================================================================== Epson ================================================= */}
            <div class='tab-pane' id='printer-2'>
              <div class='container mb-5'>
                <ul
                  class='nav nav-tabs row  d-flex'
                  style={{ background: '#34548c' }}
                >
                  <li class='nav-item col-md-3 mt-2 col-6'>
                    <a
                      class='nav-link active center show'
                      data-bs-toggle='tab'
                      data-bs-target='#epson-1'
                    >
                      <h5 className='fw-bold'>WorkForce Series</h5>
                    </a>
                  </li>
                  <li class='nav-item  col-md-3 mt-2 col-6'>
                    <a
                      class='nav-link center'
                      data-bs-toggle='tab'
                      data-bs-target='#epson-2'
                    >
                      <h5 className='fw-bold'>ET Series</h5>
                    </a>
                  </li>
                  <li class='nav-item  col-md-3 mt-2 col-6 '>
                    <a
                      class='nav-link center'
                      data-bs-toggle='tab'
                      data-bs-target='#epson-3'
                    >
                      <h5 className='fw-bold'>XP Series</h5>
                    </a>
                  </li>
                  <li class='nav-item  col-md-3 mt-2 col-6 '>
                    <a
                      class='nav-link center'
                      data-bs-toggle='tab'
                      data-bs-target='#epson-4'
                    >
                      <h5 className='fw-bold'>Laser Series</h5>
                    </a>
                  </li>
                </ul>

                <div class='tab-content'>
                  {/*==================================================================== Epson 1 ================================================= */}
                  <div class='tab-pane active show' id='epson-1'>
                    <ul class='nav nav-tabs row mt-5 gy-4 d-flex'>
                      <li class='nav-item col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783592936/wf-610_C11CA50201_rx2fjv_o0wooa.png'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>Epson WorkForce 610</h4>
                        </div>
                      </li>
                      <li class='col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783592990/WorkForce_Pro_WF-4820_SPT_C11CJ06201_384x286_akt9i8_c7ejho.png'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>Epson WorkForce 4820</h4>
                        </div>
                      </li>
                      <li class='nav-item col-md-3  col-6 '>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783592953/WF-M5899_SPT_C11CK76201_384x286_onalhf_mzoanr.png'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>Epson WorkForce M5899</h4>
                        </div>
                      </li>
                      <li class='nav-item  col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783592945/ST-C8000_SPT_C11CH71202_384x286_sn9slf_orkktw.png'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>Epson WorkForce C8000</h4>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/*==================================================================== Epson 2 ================================================= */}
                  <div class='tab-pane' id='epson-2'>
                    <ul class='nav nav-tabs row mt-5 gy-4 d-flex'>
                      <li class='nav-item col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783596355/ET-2400_SPT_C11CJ67201_384x286_vvxckb_uuwmcz.png'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>Epson ET-2400</h4>
                        </div>
                      </li>
                      <li class='col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783596367/et4750_C11CG19201_384x286_yez5pm_wiqqu0.png'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>Epson ET-4750</h4>
                        </div>
                      </li>
                      <li class='nav-item col-md-3 col-6 '>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783596377/et7700_C11CG15201_bu6qfk_c9bhyo.png'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>Epson ET-7700</h4>
                        </div>
                      </li>
                      <li class='nav-item  col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783592999/ET-M3170_SPT_C11CG92201_384x286_pngabt_z2d04y.png'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>Epson ET-M3170</h4>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/*==================================================================== Epson 3 ================================================= */}
                  <div class='tab-pane' id='epson-3'>
                    <ul class='nav nav-tabs row mt-5 gy-4 d-flex'>
                      <li class='nav-item col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783596393/xp-330_C11CE60201_j4fgaf_d2a58k.png'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>Epson XP-330</h4>
                        </div>
                      </li>
                      <li class='nav-item col-md-3 col-6 '>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783596402/xp-800_C11CC45201_tiar8b_ml8mea.png'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>Epson XP-800</h4>
                        </div>
                      </li>
                      <li class='nav-item  col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783598293/XP-4205_SPT_C11CK65202_384x286_v2_oxry1o_xva0jj.png'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>Epson XP-4100</h4>
                        </div>
                      </li>
                      <li class='nav-item  col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783596384/XP-8700_SPT_C11CK46201_384x286_klo8tw_fwqf94.png'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>Epson XP-8700</h4>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/*==================================================================== Epson 4 ================================================= */}
                  <div class='tab-pane' id='epson-4'>
                    <ul class='nav nav-tabs row mt-5 gy-4 d-flex'>
                      <li class='nav-item col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783598324/CX11N_C11C588061_p9afum_ffmevn.png'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>Epson AcuLaser CX11N</h4>
                        </div>
                      </li>
                      <li class='nav-item col-md-3 col-6 '>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783598315/artis-837_C11CB20201_jjmwl5_eafq55.png'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>Epson Artisan 837</h4>
                        </div>
                      </li>
                      <li class='nav-item  col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783598332/CX11NF_001_tuewsj_ijqcgu.png'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>Epson AcuLaser CX11NF</h4>
                        </div>
                      </li>
                      <li class='nav-item  col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783598307/Art_730_C11CB18201_viimq7_wdi1xe.png'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>Epson Artisan 730</h4>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/*==================================================================== Brother ================================================= */}
            <div class='tab-pane' id='printer-3'>
              <div class='container mb-5'>
                <ul
                  class='nav nav-tabs row  d-flex'
                  style={{ background: '#34548c' }}
                >
                  <li class='nav-item col-md-4 mt-2 col-6'>
                    <a
                      class='nav-link active center show'
                      data-bs-toggle='tab'
                      data-bs-target='#brother-1'
                    >
                      <h5 className='fw-bold'>Brother Inkjet </h5>
                    </a>
                  </li>
                  <li class='nav-item  col-md-4 mt-2 col-6'>
                    <a
                      class='nav-link center'
                      data-bs-toggle='tab'
                      data-bs-target='#brother-2'
                    >
                      <h5 className='fw-bold'>Brother Laser</h5>
                    </a>
                  </li>
                  <li class='nav-item col-md-4 mt-2 col-6 '>
                    <a
                      class='nav-link center'
                      data-bs-toggle='tab'
                      data-bs-target='#brother-3'
                    >
                      <h5 className='fw-bold'>Brother LED</h5>
                    </a>
                  </li>
                </ul>

                <div class='tab-content'>
                  {/*==================================================================== Brother Inkjet ================================================= */}
                  <div class='tab-pane active show' id='brother-1'>
                    <ul class='nav nav-tabs row mt-5 gy-4 d-flex'>
                      <li class='nav-item col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783598339/DCPJ1800DW_main_n138du_mqg15t.webp'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>DCP-J1800DW</h4>
                        </div>
                      </li>
                      <li class='col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783598354/MFCJ4335DW_main_jmx3vd_fxwffe.webp'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>MFC-J4335DW</h4>
                        </div>
                      </li>
                      <li class='nav-item col-md-3  col-6 '>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783598363/MFCJ6540DWE_main_nf3y6t_numdfg.webp'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>MFC-J6540DWE</h4>
                        </div>
                      </li>
                      <li class='nav-item  col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783598347/DCPJ1200W_main_vof1ri_j1aulk.webp'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>DCP-J1200W</h4>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/*====================================================================  Brother Laser ================================================= */}
                  <div class='tab-pane' id='brother-2'>
                    <ul class='nav nav-tabs row mt-5 gy-4 d-flex'>
                      <li class='nav-item col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783598372/HL1212W_main_xlcqjw_mnbq6d.webp'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>HL-1212W</h4>
                        </div>
                      </li>
                      <li class='col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783598385/HLL6410DN_main_enk0pe_u8vrua.webp'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>Brother HL-L6410DN</h4>
                        </div>
                      </li>
                      <li class='col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783598393/MFCL6910DN_main_j9iokl_dlua2n.webp'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>MFC-L6910DN</h4>
                        </div>
                      </li>
                      <li class='col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783598379/DCP1612W_main_gail87_uahjrm.webp'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>DCP-1612W</h4>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/*==================================================================== Brother LED ================================================= */}
                  <div class='tab-pane' id='brother-3'>
                    <ul class='nav nav-tabs row mt-5 gy-4 d-flex'>
                      <li class='nav-item col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783672374/MFCL8340CDW_main_qqh3dx_k63pbp.webp'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>MFC-L8340CDW</h4>
                        </div>
                      </li>
                      <li class='col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783672330/HLL5100DN_main_zvsbwz_tho537.webp'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>HL-L5100DN</h4>
                        </div>
                      </li>
                      <li class='nav-item col-md-3  col-6 '>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783672390/MFCL8900CDW_main_v1bfwo_fn1l0m.webp'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>MFC-L8900CDW</h4>
                        </div>
                      </li>
                      <li class='nav-item  col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783672300/MFCL3750CDW_main_slpxoo_o1pn13.webp'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>MFC-L3750CDW</h4>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/*==================================================================== Canon ================================================= */}
            <div class='tab-pane' id='printer-4'>
              <div class='container mb-5'>
                <ul
                  class='nav nav-tabs row  d-flex'
                  style={{ background: '#34548c' }}
                >
                  <li class='nav-item col-md-3 mt-2 col-6'>
                    <a
                      class='nav-link active center show'
                      data-bs-toggle='tab'
                      data-bs-target='#canon-1'
                    >
                      <h5 className='fw-bold'>Canon Inkjet</h5>
                    </a>
                  </li>
                  <li class='nav-item  col-md-3 mt-2  col-6'>
                    <a
                      class='nav-link center'
                      data-bs-toggle='tab'
                      data-bs-target='#canon-2'
                    >
                      <h5 className='fw-bold'>Canon Laser</h5>
                    </a>
                  </li>
                  <li class='nav-item  col-md-3 mt-2 col-6 '>
                    <a
                      class='nav-link center'
                      data-bs-toggle='tab'
                      data-bs-target='#canon-3'
                    >
                      <h5 className='fw-bold'>Canon Office</h5>
                    </a>
                  </li>
                  <li class='nav-item  col-md-3 mt-2 col-6 '>
                    <a
                      class='nav-link center'
                      data-bs-toggle='tab'
                      data-bs-target='#canon-4'
                    >
                      <h5 className='fw-bold'>Canon Home</h5>
                    </a>
                  </li>
                </ul>

                <div class='tab-content'>
                  {/*=================================================================== Canon 1 ================================================= */}
                  <div class='tab-pane active show' id='canon-1'>
                    <ul class='nav nav-tabs row mt-5 gy-4 d-flex'>
                      <li class='nav-item col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783672441/canon-pixma-ts7750i-wireless-colour-3-in-1-inkjet-photo-printer-product-front-view_jdem18_wr6x48.jpg'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>Canon PIXMA TS7750i</h4>
                        </div>
                      </li>
                      <li class='col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783672431/canon-maxify-gx6050-wireless-3-in-1-refillable-megatank-inkjet-printer-product-front-view_rhzkbk_or673u.jpg'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>Canon MAXIFY GX6050</h4>
                        </div>
                      </li>
                      <li class='nav-item col-md-3 col-6 '>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783672431/canon-maxify-gx6050-wireless-3-in-1-refillable-megatank-inkjet-printer-product-front-view_rhzkbk_or673u.jpg'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>Canon PIXMA TS7450i</h4>
                        </div>
                      </li>
                      <li class='nav-item  col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783672420/canon-pixma-ts7650i-wireless-colour-3-in-1-inkjet-photo-printer-product-front-view_qin5gm_iyzvac.jpg'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>Canon MAXIFY GX1050</h4>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/*===================================================================  Canon 2 ================================================= */}
                  <div class='tab-pane' id='canon-2'>
                    <ul class='nav nav-tabs row mt-5 gy-4 d-flex'>
                      <li class='nav-item col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1785151648/5951c026_i-sensys-mf463dw_01_new_ddkgiu_emipfr.jpg'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>Canon i-SENSYS MF463</h4>
                        </div>
                      </li>
                      <li class='col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783672542/front-view_tmjty1_tbyeiy.jpg'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>Canon i-SENSYS MF754</h4>
                        </div>
                      </li>
                      <li class='nav-item col-md-3 col-6 '>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783672550/i-sensys-mf3010_1_a6mx6l_gvqf1c.jpg'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>Canon i-SENSYS MF3010</h4>
                        </div>
                      </li>
                      <li class='nav-item  col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783672527/5160c020_mf553dw_01_uxxxu7_sqjvi4.jpg'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>Canon i-SENSYS MF553</h4>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/*================================================================== Canon 3 ================================================= */}
                  <div class='tab-pane' id='canon-3'>
                    <ul class='nav nav-tabs row mt-5 gy-4 d-flex'>
                      <li class='nav-item col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783672603/front-view_j5rypu_x87xk1.jpg'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>Canon i-SENSYS LBP246</h4>
                        </div>
                      </li>
                      <li class='col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783672584/5074c028_pixma-tr4751i-eur-white_01_vfq2s9_phv99j.jpg'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>Canon PIXMA TR4751</h4>
                        </div>
                      </li>
                      <li class='nav-item col-md-3 col-6 '>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783672594/canon-maxify-mb5440-product-front-view_qgvn9v_c6jly6.jpg'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>Canon MAXIFY MB5450</h4>
                        </div>
                      </li>
                      <li class='nav-item  col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783672567/3109c006_ts705_01_nrsgss_bfrdlq.jpg'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>Canon PIXMA TS705a</h4>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/*=================================================================== Canon 4 ================================================= */}
                  <div class='tab-pane' id='canon-4'>
                    <ul class='nav nav-tabs row mt-5 gy-4 d-flex'>
                      <li class='nav-item col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783672644/3771c006aa_pixma-ts3351-white_01_p4dcbj_nd3afs.jpg'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>Canon PIXMA TS3351</h4>
                        </div>
                      </li>
                      <li class='col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783672652/3775c048_pixma-ts8352-red_01_wb8lv5_noashz.jpg'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>Canon PIXMA TS8352a</h4>
                        </div>
                      </li>
                      <li class='nav-item col-md-3 col-6 '>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783672664/pixma-ip8750_2_jxcbew_drfwyo.jpg'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>Canon PIXMA iP8750</h4>
                        </div>
                      </li>
                      <li class='nav-item  col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783672628/3109c006_ts705_01_v1gchc_ytbtru.jpg'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>Canon PIXMA TS705a</h4>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* ======================================================  Lexmark  ================================================================= */}
            <div class='tab-pane' id='printer-5'>
              <div class='container mb-5'>
                <ul
                  class='nav nav-tabs row  d-flex'
                  style={{ background: '#34548c' }}
                >
                  <li class='nav-item col-md-3 mt-2 col-6'>
                    <a
                      class='nav-link active center show'
                      data-bs-toggle='tab'
                      data-bs-target='#canon-100'
                    >
                      <h5 className='fw-bold'>Lexmark Monochrome</h5>
                    </a>
                  </li>
                  <li class='nav-item  col-md-3 mt-3 col-6'>
                    <a
                      class='nav-link center'
                      data-bs-toggle='tab'
                      data-bs-target='#canon-200'
                    >
                      <h5 className='fw-bold'>Lexmark Color</h5>
                    </a>
                  </li>
                  <li class='nav-item  col-md-3 mt-3 col-6 '>
                    <a
                      class='nav-link center'
                      data-bs-toggle='tab'
                      data-bs-target='#canon-300'
                    >
                      <h5 className='fw-bold'>Lexmark Multifunction</h5>
                    </a>
                  </li>
                  <li class='nav-item  col-md-3 mt-2 col-6 '>
                    <a
                      class='nav-link center'
                      data-bs-toggle='tab'
                      data-bs-target='#canon-400'
                    >
                      <h5 className='fw-bold'>Lexmark Dot Matrix</h5>
                    </a>
                  </li>
                </ul>

                <div class='tab-content'>
                  {/*==================================================================== Lexmark 1 ================================================= */}
                  <div class='tab-pane active show' id='canon-100'>
                    <ul class='nav nav-tabs row mt-5 gy-4 d-flex'>
                      <li class='nav-item col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783672683/7676_da8or2_wmaovb.png'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>Lexmark MS810dn</h4>
                        </div>
                      </li>
                      <li class='col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1785152042/7694_t6rc41_digyhb.png'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>Lexmark MS510dn</h4>
                        </div>
                      </li>
                      <li class='nav-item col-md-3 col-6 '>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783672861/9198_jiej0v_yrpg1v.png'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>Lexmark MS312dn</h4>
                        </div>
                      </li>
                      <li class='nav-item  col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783672674/9326_ibwgl9_fo4yh9.png'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>Lexmark MS911de</h4>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/*==================================================================== Lexmark2 ================================================= */}
                  <div class='tab-pane' id='canon-200'>
                    <ul class='nav nav-tabs row mt-5 gy-4 d-flex'>
                      <li class='nav-item col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783672918/7611_ivl39o_bgs5a9.png'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>Lexmark CS310dn</h4>
                        </div>
                      </li>
                      <li class='col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783672934/7649_uyxgpm_rev1ai.png'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>Lexmark CS510dte</h4>
                        </div>
                      </li>
                      <li class='nav-item col-md-3 col-6 '>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783672903/6506_ldqrpf_arod6j.png'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>Lexmark C792e</h4>
                        </div>
                      </li>
                      <li class='nav-item  col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783672888/11409_sp0cja_frmi3t.png'
                            className='img-fluid layload'
                            alt=''
                          />
                          <h4 className='text-center'>Lexmark CX924dxe</h4>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/*==================================================================== Lexmark 3 ================================================= */}
                  <div class='tab-pane' id='canon-300'>
                    <ul class='nav nav-tabs row mt-5 gy-4 d-flex'>
                      <li class='nav-item col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783672985/7777_arm7e4_bew8kf.png'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>Lexmark CX510de</h4>
                        </div>
                      </li>
                      <li class='col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783672963/14450_xwouw6_e9ppvd.png'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>Lexmark MC3326adwe</h4>
                        </div>
                      </li>
                      <li class='nav-item col-md-3 col-6 '>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783672943/6466_j0uuia_amqxzj.png'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>Lexmark X792dtfe</h4>
                        </div>
                      </li>
                      <li class='nav-item  col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783672952/6650_vadqms_habohf.png'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>Lexmark X954dhe</h4>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/*==================================================================== Lexmark 4 ================================================= */}
                  <div class='tab-pane' id='canon-400'>
                    <ul class='nav nav-tabs row mt-5 gy-4 d-flex'>
                      <li class='nav-item col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783673376/4210_q8ujmf_eq0odb.png'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>Lexmark 2580</h4>
                        </div>
                      </li>
                      <li class='col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783673392/7729_aaif6o_i201s5.png'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>Lexmark MX811dxpe</h4>
                        </div>
                      </li>
                      <li class='nav-item col-md-3 col-6 '>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783673409/9351_k2k3y4_ulnorc.png'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>Lexmark MX912dxe</h4>
                        </div>
                      </li>
                      <li class='nav-item  col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783672994/7702_nwxwvx_gomb0o.png'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>Lexmark MX510de</h4>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* ======================================================= Ricoh ================================================================ */}
            <div class='tab-pane' id='printer-6'>
              <div class='container mb-5'>
                <ul
                  class='nav nav-tabs row  d-flex'
                  style={{ background: '#34548c' }}
                >
                  <li class='nav-item col-md-3 mt-2 col-6'>
                    <a
                      class='nav-link active center show'
                      data-bs-toggle='tab'
                      data-bs-target='#ricoh-1'
                    >
                      <h5 className='fw-bold'>Ricoh IM</h5>
                    </a>
                  </li>
                  <li class='nav-item  col-md-3 mt-2 col-6'>
                    <a
                      class='nav-link center'
                      data-bs-toggle='tab'
                      data-bs-target='#ricoh-2'
                    >
                      <h5 className='fw-bold'>Ricoh MP</h5>
                    </a>
                  </li>
                  <li class='nav-item  col-md-3 mt-2 col-6 '>
                    <a
                      class='nav-link center'
                      data-bs-toggle='tab'
                      data-bs-target='#ricoh-3'
                    >
                      <h5 className='fw-bold'>Ricoh P</h5>
                    </a>
                  </li>
                  <li class='nav-item  col-md-3 mt-2 col-6 '>
                    <a
                      class='nav-link center'
                      data-bs-toggle='tab'
                      data-bs-target='#ricoh-4'
                    >
                      <h5 className='fw-bold'>Ricoh SP</h5>
                    </a>
                  </li>
                </ul>

                <div class='tab-content'>
                  {/*==================================================================== Ricoh IM ================================================= */}
                  <div class='tab-pane active show' id='ricoh-1'>
                    <ul class='nav nav-tabs row mt-5 gy-4 d-flex'>
                      <li class='nav-item col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783673441/ricohimages_Equipment_Printers-and-Copiers_eqp-im-4000-tile_koyytj_h6rv82.webp'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>IM C400F</h4>
                        </div>
                      </li>
                      <li class='col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783673448/ricohimages_Equipment_Printers-and-Copiers_eqp-p-C400SRF-tile_gesxhy_t4o0co.webp'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>IM C400SRF</h4>
                        </div>
                      </li>
                      <li class='nav-item col-md-3 col-6 '>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783673419/ricohimages_Equipment_Printers-and-Copiers_eqp-im-430F-tile_t29lvq_a65ynd.webp'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>IM 430F</h4>
                        </div>
                      </li>
                      <li class='nav-item  col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783673428/ricohimages_Equipment_Printers-and-Copiers_eqp-im-460FTL-tile_e8h0l7_miclhb.webp'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>IM 460FTL</h4>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/*==================================================================== Ricoh MP ================================================= */}
                  <div class='tab-pane' id='ricoh-2'>
                    <ul class='nav nav-tabs row mt-5 gy-4 d-flex'>
                      <li class='nav-item col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783673475/refurbished-ricoh-mp-c305sp_spm9em_ztlt0r.jpg'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>MP C305</h4>
                        </div>
                      </li>
                      <li class='col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783673468/refurbished-ricoh-mp-201spf_ze0f6i_d9e0tc.jpg'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>MP 201SPF</h4>
                        </div>
                      </li>
                      <li class='nav-item col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783673487/ricoh-mp-6054-multifunction-printer_biqweo_btrrxc.jpg'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>MP 6054</h4>
                        </div>
                      </li>
                      <li class='nav-item  col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783673457/remanufactured-ricoh-mp-c6004_mlwo14_j09e2z.png'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>MP C6004</h4>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/*==================================================================== Ricoh P ================================================= */}
                  <div class='tab-pane' id='ricoh-3'>
                    <ul class='nav nav-tabs row mt-5 gy-4 d-flex'>
                      <li class='nav-item col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783673508/ricohimages_Equipment_Printers-and-Copiers_eqp-p-501-tile_uhdxph_boiyrw.webp'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>P 501</h4>
                        </div>
                      </li>
                      <li class='col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783673522/ricohimages_Equipment_Printers-and-Copiers_eqp-p-c600-tile_kez32j_g2atfy.webp'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>P C600</h4>
                        </div>
                      </li>
                      <li class='nav-item col-md-3 col-6 '>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1785153069/ricohimages_Equipment_Printers-and-Copiers_eqp-p-c311W-tile_ljf9il_nilcpd.webp'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>P C311W</h4>
                        </div>
                      </li>
                      <li class='nav-item  col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783673498/ricohimages_Equipment_Printers-and-Copiers_eqp-p-800-tile_svsglw_sckl2f.webpp'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>P 800</h4>
                        </div>
                      </li>
                    </ul>
                  </div>

                  {/*==================================================================== Ricoh SP  ================================================= */}
                  <div class='tab-pane' id='ricoh-4'>
                    <ul class='nav nav-tabs row mt-5 gy-4 d-flex'>
                      <li class='nav-item col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783673550/sp5100n_bklbfc_buln1w.jpg'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>Ricoh SP5100N</h4>
                        </div>
                      </li>
                      <li class='col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783673543/sp3410dn_3_rsv1dm_rdmxxs.jpg'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>Ricoh Aficio SP4100NL</h4>
                        </div>
                      </li>
                      <li class='nav-item  col-md-3 col-6'>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783673537/ricoh-spc250sf-right-large_fw7vyv_cbckc5.jpgg'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>RICOH SP C250 series</h4>
                        </div>
                      </li>
                      <li class='nav-item col-md-3 col-6 '>
                        <div className='card border-0'>
                          <img
                            src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783692828/Loading_icon_wrnmya_bw2kv6.gif'
                            data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783673529/spc220s_uzlrvd_h1r2as.jpg'
                            className='img-fluid lazyload'
                            alt=''
                          />
                          <h4 className='text-center'>Ricoh SPC221SF</h4>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/* ======================================================================================================= */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className='text-center mb-3'>
        <Link to={'/printers'} className='btn btn-primary'>
          <h6 className='pt-1'>Click to order your printer now</h6>
        </Link>
      </div>
      {/* =============================================================================================================================== */}
    </>
  )
}

export default Hardware
