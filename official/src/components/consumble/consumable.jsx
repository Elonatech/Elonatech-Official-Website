import './consumable.css'
import { Link } from 'react-router-dom'
import Getintouch from '../GetInTouch/getintouch2'
import { Helmet } from 'react-helmet-async'

const Consumable = () => {
  return (
    <>
      <Helmet>
        <title>Office Consumables Supply - Quality Essentials for Productivity</title>
        <meta
          name='description'
          content=' 
       Office essentials are all of the consumable supplies you need day to day. Think of office basics like paper, notebooks, toners, mailing supplies, and anything else you’ll need to get work done and stay organized.
       Consumables of high quality not only increases the productivity of employees but also sends out a good message to the public
       '
        />
        <link rel='canonical' href='https://elonatech.com.ng/consumables' />
      </Helmet>

      {/*==================================================================== header=================================*/}
      <div class='container-fluid consumables-supply-section'>
        <div class='text-content'>
          <h2>Consumables Supply</h2>
          <h5>
            Office essentials are all of the consumable supplies you need daily
          </h5>
          <p class='lead'>
            Consumables of high quality not only increases the productivity of
            employees but also sends out a good message to the public
          </p>
        </div>
      </div>

      {/* ============================================================================================================== */}
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-lg-5  align-self-center'>
            <div className='card border-0'>
              <div className='text-center'>
                <img
                  src='https://res.cloudinary.com/elonatech/image/upload/v1710165001/loaderImage/qq8AE_a5blke.gif'
                  data-src='https://res.cloudinary.com/elonatech/image/upload/v1710177287/consumablePage/sharp-printer_jfzqr3.png'
                  className='img-fluid rounded lazyload'
                  alt=''
                />
              </div>
            </div>
          </div>
          <div className='col-lg-7'>
            <div className='card border-0'>
              <div className='row'>
                <div className='col-4'>
                  <div className='card border-0'>
                    <div className='text-center'>
                      <img
                        src='https://res.cloudinary.com/elonatech/image/upload/v1710165001/loaderImage/qq8AE_a5blke.gif'
                        data-src='https://res.cloudinary.com/elonatech/image/upload/v1709802108/consumablePage/convin_kjl8rg.png'
                        className='img-fluid rounded-circle lazyload'
                        alt=''
                      />
                    </div>
                    <h4 className='fw-bold mt-2 text-center'>CONVENIENT</h4>
                  </div>
                </div>
                <div className='col-4'>
                  <div className='card border-0'>
                    <div className='text-center'>
                      <img
                        src='https://res.cloudinary.com/elonatech/image/upload/v1710165001/loaderImage/qq8AE_a5blke.gif'
                        data-src='https://res.cloudinary.com/elonatech/image/upload/v1709801530/consumablePage/Efficient_o4x2om.jpg'
                        className='img-fluid rounded-circle lazyload'
                        alt=''
                      />
                    </div>
                    <h4 className='fw-bold mt-2 text-center'>EFFICIENT</h4>
                  </div>
                </div>
                <div className='col-4'>
                  <div className='card border-0 '>
                    <div className='text-center'>
                      <img
                        src='https://res.cloudinary.com/elonatech/image/upload/v1710165001/loaderImage/qq8AE_a5blke.gif'
                        data-src='https://res.cloudinary.com/elonatech/image/upload/v1709801908/consumablePage/Cost_effective_duqh7z.jpg'
                        className='img-fluid rounded-circle lazyload'
                        alt=''
                      />
                    </div>
                    <h4 className='fw-bold mt-2 text-center'>COST-EFFECTIVE</h4>
                  </div>
                </div>
                <div className='col-md-12 mt-3'>
                  <div className='card border-0'>
                    <p className='taj'>
                      Office essentials are all of the consumable supplies you
                      need day to day. Think of office basics like paper,
                      notebooks, toners, mailing supplies, and anything else
                      you’ll need to get work done and stay organized.
                    </p>
                    <p className='taj'>
                      A great place to start is with the office supplies
                      selection. Gear up with office equipment that enables
                      collaboration and efficiency, plus IT accessories that
                      keep everything running smoothly. Since so much of small
                      businesses’ essential operations happen through
                      technology, it’s critical that you buy equipment for your
                      office from reliable brands. Here’s a list of tech
                      equipment you might need for your business, from your
                      trusted brand, Elonatech.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* =========================================================================================================== */}
      <h1 className='text-center fw-bold mt-5'>CONSUMABLES</h1>
      {/* ===============================================  TONERS  =================================== */}
      <div className='container mb-5'>
        <h4 className='fw-bold'>Toners</h4>
        <div
          style={{ backgroundColor: '#dc3545', height: '2px', width: '80px' }}
        ></div>
        <div
          style={{
            backgroundColor: '#dc3545',
            height: '2px',
            width: '80px',
            marginTop: '2px'
          }}
        ></div>
        <div className='row mt-4'>
          <div className='col-md-2 col-6'>
            <div className='card curkl border-0'>
              <div className='text-center'>
                <img
                  src='https://res.cloudinary.com/elonatech/image/upload/v1710165001/loaderImage/qq8AE_a5blke.gif'
                  data-src='https://res.cloudinary.com/elonatech/image/upload/v1706798166/consumablePage/Toners/hp_toners_fl42ij.png'
                  className='img-fluid  lazyload'
                  alt=''
                />
              </div>
              <img src='' className='img-fluid' alt='' />
              <h6 className='text-center mt-3'>HP Toners</h6>
            </div>
          </div>
          <div className='col-md-2 col-6'>
            <div className='card curkl border-0'>
              <div className='text-center'>
                <img
                  src='https://res.cloudinary.com/elonatech/image/upload/v1710165001/loaderImage/qq8AE_a5blke.gif'
                  data-src='https://res.cloudinary.com/elonatech/image/upload/v1706798172/consumablePage/Toners/espon_toner_anbxrz.jpg'
                  className='img-fluid  lazyload'
                  alt=''
                />
              </div>
              <h6 className='text-center mt-3'>Epson Toners</h6>
            </div>
          </div>
          <div className='col-md-2 col-6'>
            <div className='card curkl border-0'>
              <div className='text-center'>
                <img
                  src='https://res.cloudinary.com/elonatech/image/upload/v1710165001/loaderImage/qq8AE_a5blke.gif'
                  data-src='https://res.cloudinary.com/elonatech/image/upload/v1706798174/consumablePage/Toners/brother_toner_x3fley.png'
                  className='img-fluid  lazyload'
                  alt=''
                />
              </div>
              <h6 className='text-center mt-3'>Brother Toners</h6>
            </div>
          </div>
          <div className='col-md-2 col-6'>
            <div className='card curkl border-0'>
              <div className='text-center'>
                <img
                  src='https://res.cloudinary.com/elonatech/image/upload/v1710165001/loaderImage/qq8AE_a5blke.gif'
                  data-src='https://res.cloudinary.com/elonatech/image/upload/v1706798169/consumablePage/Toners/ricoh_toners_yko3km.png'
                  className='img-fluid  lazyload'
                  alt=''
                />
              </div>
              <h6 className='text-center mt-3'>Ricoh Toners</h6>
            </div>
          </div>
          <div className='col-md-2 col-6'>
            <div className='card curkl border-0'>
              <div className='text-center'>
                <img
                  src='https://res.cloudinary.com/elonatech/image/upload/v1710165001/loaderImage/qq8AE_a5blke.gif'
                  data-src='https://res.cloudinary.com/elonatech/image/upload/v1706798164/consumablePage/Toners/canon_toner_pxsuse.png'
                  className='img-fluid  lazyload'
                  alt=''
                />
              </div>
              <h6 className='text-center mt-3'>Canon Toners</h6>
            </div>
          </div>
          <div className='col-md-2 col-6'>
            <div className='card curkl border-0'>
              <div className='text-center'>
                <img
                  src='https://res.cloudinary.com/elonatech/image/upload/v1710165001/loaderImage/qq8AE_a5blke.gif'
                  data-src='https://res.cloudinary.com/elonatech/image/upload/v1706798167/consumablePage/Toners/lexmark_toner_locyum.png'
                  className='img-fluid  lazyload'
                  alt=''
                />
              </div>
              <h6 className='text-center mt-3'>Lexmark Toners</h6>
            </div>
          </div>
        </div>
      </div>
      {/* ===========================================  INK CARTRIDGES ======================================== */}
      <div className='container mb-5'>
        <h4 className='fw-bold'>Ink Cartridges</h4>
        <div
          style={{ backgroundColor: '#dc3545', height: '2px', width: '80px' }}
        ></div>
        <div
          style={{
            backgroundColor: '#dc3545',
            height: '2px',
            width: '80px',
            marginTop: '2px'
          }}
        ></div>
        <div className='row mt-4'>
          <div className='col-md-3 col-6'>
            <div className='card border-0'>
              <div className='text-center'>
                <img
                  src='https://res.cloudinary.com/elonatech/image/upload/v1710165001/loaderImage/qq8AE_a5blke.gif'
                  data-src='https://res.cloudinary.com/elonatech/image/upload/v1706798513/consumablePage/ink%20cartridge/122-color_av2beg.jpg'
                  className='img-fluid  lazyload'
                  alt=''
                />
              </div>
              <h6 className='text-center mt-3'>HP Ink Cartridges</h6>
            </div>
          </div>
          <div className='col-md-3 col-6'>
            <div className='card border-0'>
              <div className='text-center'>
                <img
                  src='https://res.cloudinary.com/elonatech/image/upload/v1710165001/loaderImage/qq8AE_a5blke.gif'
                  data-src='https://res.cloudinary.com/elonatech/image/upload/v1706798752/consumablePage/ink%20cartridge/29xl_fqnnom.png'
                  className='img-fluid  lazyload'
                  alt=''
                />
              </div>
              <h6 className='text-center mt-3'>Epson Ink Cartridges</h6>
            </div>
          </div>
          <div className='col-md-3 col-6'>
            <div className='card border-0'>
              <div className='text-center'>
                <img
                  src='https://res.cloudinary.com/elonatech/image/upload/v1710165001/loaderImage/qq8AE_a5blke.gif'
                  data-src='https://www-konga-com-res.cloudinary.com/w_400,f_auto,fl_lossy,dpr_3.0,q_auto/media/catalog/product/U/I/128285_1606218698.jpg'
                  className='img-fluid  lazyload'
                  alt=''
                />
              </div>
              <h6 className='text-center mt-3'>Canon Ink Cartridges</h6>
            </div>
          </div>
          <div className='col-md-3 col-6'>
            <div className='card border-0'>
              <div className='text-center'>
                <img
                  src='https://res.cloudinary.com/elonatech/image/upload/v1710165001/loaderImage/qq8AE_a5blke.gif'
                  data-src='https://res.cloudinary.com/elonatech/image/upload/v1706798511/consumablePage/ink%20cartridge/5-pack-hp-564xl-compatible-inkjet-cartridges-cn684wacb322wa-cb325wa-1bk1pbk1c1m1y-118593_tmoha7.jpg'
                  className='img-fluid  lazyload'
                  alt=''
                />
              </div>
              <h6 className='text-center mt-3'>Xerox Ink Cartridges</h6>
            </div>
          </div>
        </div>
      </div>
      {/* ==========================================  STORAGE DEVICES  ======================================== */}
      <div className='container mb-5'>
        <h4 className='fw-bold'>Storage Devices</h4>
        <div
          style={{ backgroundColor: '#dc3545', height: '2px', width: '80px' }}
        ></div>
        <div
          style={{
            backgroundColor: '#dc3545',
            height: '2px',
            width: '80px',
            marginTop: '2px'
          }}
        ></div>
        <div className='row mt-4'>
          <div className='col-md-2 col-6'>
            <div className='card border-0'>
              <div className='text-center'>
                <img
                  src='https://res.cloudinary.com/elonatech/image/upload/v1710165001/loaderImage/qq8AE_a5blke.gif'
                  data-src='https://res.cloudinary.com/elonatech/image/upload/v1706799071/consumablePage/storage%20devices/images_eecjxp.jpg'
                  className='img-fluid  lazyload'
                  alt=''
                />
              </div>
              <h6 className='text-center mt-3'>Hard Disc Drives</h6>
            </div>
          </div>
          <div className='col-md-2 col-6'>
            <div className='card border-0'>
              <div className='text-center'>
                <img
                  src='https://res.cloudinary.com/elonatech/image/upload/v1710165001/loaderImage/qq8AE_a5blke.gif'
                  data-src='https://res.cloudinary.com/elonatech/image/upload/v1706799078/consumablePage/storage%20devices/31gckR25CqL._AC_UF1000_1000_QL80__omh1nc.jpg'
                  className='img-fluid  lazyload'
                  alt=''
                />
              </div>
              <h6 className='text-center mt-4'>Solid State Drives</h6>
            </div>
          </div>
          <div className='col-md-2 col-6'>
            <div className='card border-0'>
              <div className='text-center'>
                <img
                  src='https://res.cloudinary.com/elonatech/image/upload/v1710165001/loaderImage/qq8AE_a5blke.gif'
                  data-src='https://res.cloudinary.com/elonatech/image/upload/v1706799073/consumablePage/storage%20devices/memory-ddr4_g2npfj.webp'
                  className='img-fluid  lazyload'
                  alt=''
                />
              </div>
              <h6 className='text-center mt-3'>RAMs</h6>
            </div>
          </div>
          <div className='col-md-2 col-6'>
            <div className='card border-0'>
              <div className='text-center'>
                <img
                  src='https://res.cloudinary.com/elonatech/image/upload/v1710165001/loaderImage/qq8AE_a5blke.gif'
                  data-src='https://res.cloudinary.com/elonatech/image/upload/v1706799083/consumablePage/storage%20devices/images_1_tbe2h1.jpg'
                  className='img-fluid  lazyload'
                  alt=''
                />
              </div>
              <h6 className='text-center mt-3'>USB Flash drives</h6>
            </div>
          </div>
          <div className='col-md-2 col-6'>
            <div className='card border-0'>
              <div className='text-center'>
                <img
                  src='https://res.cloudinary.com/elonatech/image/upload/v1710165001/loaderImage/qq8AE_a5blke.gif'
                  data-src='https://res.cloudinary.com/elonatech/image/upload/v1706799081/consumablePage/storage%20devices/cloud_sfamrn.jpg'
                  className='img-fluid  lazyload'
                  alt=''
                />
              </div>
              <h6 className='text-center mt-3'>Cloud storage</h6>
            </div>
          </div>
          <div className='col-md-2 col-6'>
            <div className='card border-0'>
              <div className='text-center'>
                <img
                  src='https://res.cloudinary.com/elonatech/image/upload/v1710165001/loaderImage/qq8AE_a5blke.gif'
                  data-src='https://res.cloudinary.com/elonatech/image/upload/v1706799075/consumablePage/storage%20devices/images_2_uwhyfk.jpg'
                  className='img-fluid  lazyload'
                  alt=''
                />
              </div>
              <h6 className='text-center mt-3'>ROM</h6>
            </div>
          </div>
        </div>
      </div>
      {/* ===========================================  OTHER DEVICES  ======================================== */}
      <div className='container mb-5'>
        <h4 className='fw-bold'>Others Devices</h4>
        <div
          style={{ backgroundColor: '#dc3545', height: '2px', width: '80px' }}
        ></div>
        <div
          style={{
            backgroundColor: '#dc3545',
            height: '2px',
            width: '80px',
            marginTop: '2px'
          }}
        ></div>
        <div className='row mt-4'>
          <div className='col-md-2 col-6'>
            <div className='card border-0'>
              <div className='text-center'>
                <img
                  src='https://res.cloudinary.com/elonatech/image/upload/v1710165001/loaderImage/qq8AE_a5blke.gif'
                  data-src='https://res.cloudinary.com/elonatech/image/upload/v1706800018/consumablePage/other%20devices/screen_w0jwpg.png'
                  className='img-fluid  lazyload'
                  alt=''
                />
              </div>
              <h6 className='text-center mt-3'>Screens</h6>
            </div>
          </div>
          <div className='col-md-2 col-6'>
            <div className='card border-0'>
              <div className='text-center'>
                <img
                  src='https://res.cloudinary.com/elonatech/image/upload/v1710165001/loaderImage/qq8AE_a5blke.gif'
                  data-src='https://res.cloudinary.com/elonatech/image/upload/v1706800015/consumablePage/other%20devices/s-l1200_yptes4.png'
                  className='img-fluid  lazyload'
                  alt=''
                />
              </div>
              <h6 className='text-center mt-3'>Power Adapters/Chargers</h6>
            </div>
          </div>
          <div className='col-md-2 col-6'>
            <div className='card border-0'>
              <div className='text-center'>
                <img
                  src='https://res.cloudinary.com/elonatech/image/upload/v1710165001/loaderImage/qq8AE_a5blke.gif'
                  data-src='https://res.cloudinary.com/elonatech/image/upload/v1706800012/consumablePage/other%20devices/keyboard_aln32n.png'
                  className='img-fluid  lazyload'
                  alt=''
                />
              </div>
              <h6 className='text-center mt-3'>Keyboards</h6>
            </div>
          </div>
          <div className='col-md-2 col-6'>
            <div className='card border-0'>
              <div className='text-center'>
                <img
                  src='https://res.cloudinary.com/elonatech/image/upload/v1710165001/loaderImage/qq8AE_a5blke.gif'
                  data-src='https://res.cloudinary.com/elonatech/image/upload/v1706800018/consumablePage/other%20devices/battery-fou_lxotd4.png'
                  className='img-fluid  lazyload'
                  alt=''
                />
              </div>
              <h6 className='text-center mt-3'> Batteries</h6>
            </div>
          </div>
          <div className='col-md-2 col-6'>
            <div className='card border-0'>
              <div className='text-center'>
                <img
                  src='https://res.cloudinary.com/elonatech/image/upload/v1710165001/loaderImage/qq8AE_a5blke.gif'
                  data-src='https://res.cloudinary.com/elonatech/image/upload/v1706800013/consumablePage/other%20devices/mouse_ywognj.png'
                  className='img-fluid  lazyload'
                  alt=''
                />
              </div>
              <h6 className='text-center mt-3'>Mice</h6>
            </div>
          </div>
          <div className='col-md-2 col-6'>
            <div className='card border-0'>
              <div className='text-center'>
                <img
                  src='https://res.cloudinary.com/elonatech/image/upload/v1710165001/loaderImage/qq8AE_a5blke.gif'
                  data-src='https://res.cloudinary.com/elonatech/image/upload/v1706800011/consumablePage/other%20devices/hdmi_hobgvp.png'
                  className='img-fluid  lazyload'
                  alt=''
                />
              </div>
              <h6 className='text-center mt-3'>Display Cables ( HDMI )</h6>
            </div>
          </div>
        </div>
      </div>
      {/* ==================================================================================================== */}

      <div className='container  mt-5'>
        <div className='row'>
          <div className='col-md-4 mt-4'>
            <div className='text-center'>
              <img
                src='https://res.cloudinary.com/elonatech/image/upload/v1710165001/loaderImage/qq8AE_a5blke.gif'
                data-src='https://res.cloudinary.com/elonatech/image/upload/v1710319447/consumablePage/AB-Icon-Reduce-Costs_1_xalruo.svg'
                height='180'
                width='180'
                className='img-fluid lazyload'
                alt=''
              />
            </div>
            <h4 className='fw-bold text-center'>
              Tips to save time and money buying office consumables
            </h4>
            <p className='text-center mt-4'>
              Buying office consumables can be time consuming, especially for
              small business owners who have to manage their own purchasing. See
              tips to help small business owners save time and money.
            </p>
            <div className='text-center'>
              <Link to={'/blog'}>
                <p className='rubatic'>
                  See tips to help small business owners save time and money
                </p>
              </Link>
            </div>
          </div>
          <div className='col-md-4 mt-4'>
            <div className='text-center'>
              <img
                src='https://res.cloudinary.com/elonatech/image/upload/v1710165001/loaderImage/qq8AE_a5blke.gif'
                data-src='https://res.cloudinary.com/elonatech/image/upload/v1710319455/consumablePage/AB-Icon-Simplify-Purchasing_hop6gh.svg'
                height='180'
                width='180'
                className='img-fluid lazyload'
                alt=''
              />
            </div>
            <h4 className='fw-bold text-center'>
              Buying office supplies with Elonatech Shop
            </h4>
            <p className='text-center mt-4'>
              Shop everything you need for work in one place with Elonatech
              shop, the largest office supply store. Browse a wide selection of
              office equipment, computers, printers, network devices, POS
              systems, and more.
            </p>
            <div className='text-center'>
              <Link to={'/office-equipment'}>
                <p className='rubatic'>Click to buy office supplies</p>
              </Link>
            </div>
          </div>
          <div className='col-md-4 mt-4'>
            <div className='text-center'>
              <img
                src='https://res.cloudinary.com/elonatech/image/upload/v1710165001/loaderImage/qq8AE_a5blke.gif'
                data-src='https://res.cloudinary.com/elonatech/image/upload/v1710319450/consumablePage/AB-Icon-Future-Procurement_zixz1n.svg'
                height='180'
                width='180'
                className='img-fluid lazyload'
                alt=''
              />
            </div>
            <h4 className='fw-bold text-center'>
              Save money on office supplies
            </h4>
            <p className='text-center mt-4'>
              Get all the office supplies and products you need in the sizes and
              quantities you require while saving money with Elonatech store.
              From desktops and laptops to servers, printers and more, our
              purchasing features are designed to make buying easy and
              straightforward.
            </p>
            <div className='text-center'>
              <Link to={'/shop'}>
                <p className='rubatic'>Click to access our shop</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* =============================================================================================== */}
      <div className='container mb-5 mt-5'>
        <div className='row align-items-center'>
          <div className='col-md-6'>
            <div className='card border-0'>
              <p>
                Never run short of your office supplies again. We’ve got
                stationery, desk accessories, videoconferencing products, print
                products, storage devices, servers and network devices and lots
                more. Stocking all the best brands like HP, Dell, Toshiba,
                Epson, Ricoh, Samsung, Western Digital, Seagate, etc. your
                workplace will be covered for all the essentials.
                <br /> <br />
                For single items or buying in bulk, our user-friendly store and
                fast delivery makes ordering your office supplies a breeze. Our
                competitive pricing means you always get a good deal. Don’t
                forget to look out for our specials to get extra savings. No
                stress if you can’t find what you want – just ask and we’ll get
                it supplied to you!
              </p>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='card border-0'>
              <img
                src='https://res.cloudinary.com/elonatech/image/upload/v1710164778/loaderImage/Loading_icon_wrnmya.gif'
                data-src='https://res.cloudinary.com/elonatech/image/upload/v1710233756/consumablePage/consumables_page_2_eidzqk.jpg'
                className='img-fluid lazyload rounded'
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
      {/* ==================================================================== */}

      <Getintouch />
      {/* ==================================================================== */}
    </>
  )
}

export default Consumable
