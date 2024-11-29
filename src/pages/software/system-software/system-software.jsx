import './software.css'
import Getintouch2 from '../../../components/GetInTouch/getintouch2'
import { Helmet } from 'react-helmet-async'

const SystemSoftware = () => {
  return (
    <>
      <Helmet>
        <title>System Software - Tech Solution, Digital Solution</title>
        <meta
          name='description'
          content='How System Software works?
Software engineering is one of the most important aspects of computer engineering, and Elonatech understands its unique importance since no computer system can function properly without a software.

Computer software has to be “loaded” into the computer’s storage (such as a hard drive, memory, or ROM). Once the software is loaded, the computer is able to execute the software. The process of loading the software into the computer, and executing the appropriate functions is another unique aspect Elonatech handles.

System software is the most important software in a computer, it enables other software to run properly, by interfacing with hardware and software; and drivers which is responsible for every part of a computer to work and function properly. '
        />
        <link rel='canonical' href='https://elonatech.com.ng/system-software' />
      </Helmet>

      {/*==================================================================== header =================================================*/}
      <div class='container-fluid system-software-section'>
        <div class='text-content'>
          <h2>System Software</h2>
          <h5>
            Computer program designed to run a computer’s hardware and
            application programs
          </h5>
          <p class='lead'>
            Minimizing downtimes while maximizing reliability in order to meet
            the needs of organizations over time.
          </p>
        </div>
      </div>

      {/*=============================================================== body ==========================================================*/}
      <div className='container  mb-5'>
        <div class='row justify-content-center align-items-center  g-4'>
          <div class='col-lg-6 col-sm-12 mt-5'>
            <h2 className='mb-4 mt-4 fw-bold'>How System Software works?</h2>
            <p className='fs-6 ' style={{ textAlign: 'justify' }}>
              Software engineering is one of the most important aspects of
              computer engineering, and Elonatech understands its unique
              importance since no computer system can function properly without
              a software.
              <br />
              <br />
              Computer software has to be “loaded” into the computer’s storage
              (such as a hard drive, memory, or ROM). Once the software is
              loaded, the computer is able to execute the software. The process
              of loading the software into the computer, and executing the
              appropriate functions is another unique aspect Elonatech handles.
              <br />
              <br />
              System software is the most important software in a computer, it
              enables other software to run properly, by interfacing with
              hardware and software; and drivers which is responsible for every
              part of a computer to work and function properly.
            </p>
          </div>
          <div class='col-lg-6 col-sm-12'>
            <div className='text-center'>
              <img
                src='https://i.stack.imgur.com/qq8AE.gif'
                className='img-fluid rounded lazyload'
                data-src='https://res.cloudinary.com/elonatech/image/upload/v1709652504/systempage/system-software1_dwwxyj.png'
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
      {/*=============================================================== feature =========================================================*/}
      <section id='features' class='features mb-5'>
        <div class='container mb-5' data-aos='fade-up'>
          <ul class='nav nav-tabs row gy-4 d-flex'>
            <li class='nav-item col-6 col-md-4 col-lg-2'>
              <a
                class='nav-link active show'
                data-bs-toggle='tab'
                data-bs-target='#tab-1'
              >
                <i class='bi bi-code-slash color-cyan'></i>
                <h4>Programming</h4>
              </a>
            </li>
            <li class='nav-item col-6 col-md-4 col-lg-2'>
              <a class='nav-link' data-bs-toggle='tab' data-bs-target='#tab-2'>
                <i class='bi bi-box-seam color-indigo'></i>
                <h4>OS</h4>
              </a>
            </li>
            <li class='nav-item col-6 col-md-4 col-lg-2'>
              <a class='nav-link' data-bs-toggle='tab' data-bs-target='#tab-3'>
                <i class='bi bi-nut color-teal'></i>
                <h4>DD</h4>
              </a>
            </li>
            <li class='nav-item col-6 col-md-4 col-lg-2'>
              <a class='nav-link' data-bs-toggle='tab' data-bs-target='#tab-4'>
                <i class='bi bi-command color-red'></i>
                <h4>Firmware</h4>
              </a>
            </li>
            <li class='nav-item col-6 col-md-4 col-lg-2'>
              <a class='nav-link' data-bs-toggle='tab' data-bs-target='#tab-5'>
                <i class='bi bi-x-diamond color-blue'></i>
                <h4>BIOS & UEFI</h4>
              </a>
            </li>
            <li class='nav-item col-6 col-md-4 col-lg-2'>
              <a class='nav-link' data-bs-toggle='tab' data-bs-target='#tab-6'>
                <i class='bi bi-map color-orange'></i>
                <h4>Utilities</h4>
              </a>
            </li>
          </ul>

          <div class='tab-content'>
            <div class='tab-pane active show' id='tab-1'>
              <div class='row gy-4'>
                <div
                  class='col-lg-8 order-2 order-lg-1'
                  data-aos='fade-up'
                  data-aos-delay='100'
                >
                  <h4>Programming Language Translator</h4>
                  <p class='fst-italic'  style={{textAlign: 'justify'}}>
                    These are the intermediate system software through which
                    programmers convert the high-level language programming code
                    to machine-level language code. Assembler, Interpreter, and
                    Compiler are the popular language translators. They are
                    usually designed by the computer manufacturer and are
                    deliver inbuilt with the system.
                  </p>
                  <ul>
                    <li>
                      <i class='bi bi-check-circle-fill '></i> The compiler
                      specifies the errors at the end of the compilation with
                      line numbers when there are any errors in the source code.
                    </li>
                    <li>
                      <i class='bi bi-check-circle-fill'></i> The Assembler is
                      used to translate the program written in Assembly language
                      into machine code.
                    </li>
                    <li>
                      <i class='bi bi-check-circle-fill'></i> The interpreter
                      moves on to the next line for execution only after the
                      removal of the error. Example: Perl, Python and Matlab.
                    </li>
                  </ul>
                </div>
                <div
                  class='col-lg-4 order-1 order-lg-2 text-center'
                  data-aos='fade-up'
                  data-aos-delay='200'
                >
                  <img
                    src='https://i.stack.imgur.com/qq8AE.gif'
                    data-src='https://res.cloudinary.com/elonatech/image/upload/v1709652758/systempage/program_translation_2_n1dsur.png'
                    alt=''
                    class='img-fluid lazyload'
                  />
                </div>
              </div>
            </div>

            <div class='tab-pane' id='tab-2'>
              <div class='row gy-4'>
                <div class='col-lg-8 order-2 order-lg-1'>
                  <h4>Operating system</h4>

                  <p class='fst-italic'>
                    An operating system is system software that provides a
                    platform between computer hardware, application software,
                    and end-users. It is pre-installed on devices and allows
                    them to be identified and then function. OS is the first
                    thing to be loaded when a system is started.
                  </p>
                  <ul>
                    <li>
                      <i class='bi bi-check-circle-fill'></i> The OS keeps the
                      system and programs safe and secure through
                      authentication.
                    </li>
                    <li>
                      <i class='bi bi-check-circle-fill'></i> Allocates and
                      deallocates resources.
                    </li>
                    <li>
                      <i class='bi bi-check-circle-fill'></i> When more than one
                      process runs on the system the OS decides how and when a
                      process will use the CPU.
                    </li>
                  </ul>
                </div>
                <div class='col-lg-4 order-1 order-lg-2 text-center'>
                  <img
                    src='https://i.stack.imgur.com/qq8AE.gif'
                    data-src='https://res.cloudinary.com/elonatech/image/upload/v1709652753/systempage/operating-system-structure_crv0hm.png'
                    alt=''
                    style={{ height: '19rem' }}
                    class='img-fluid lazyload'
                  />
                </div>
              </div>
            </div>

            <div class='tab-pane' id='tab-3'>
              <div class='row gy-4'>
                <div class='col-lg-8 order-2 order-lg-1'>
                  <h4>Device Drivers</h4>
                  <p class='fst-italic'>
                    A Device Driver is system software that operates or controls
                    a particular device attached to a computer. It is the device
                    drivers who make it possible for all the external devices to
                    perform their tasks. Most of the hardware comes with
                    pre-installed drivers in it. However, if the device is new
                    to the system, then the user may have to download the
                    drivers.
                  </p>
                  <ul>
                    <li>
                      <i class='bi bi-check-circle-fill'></i> Device drivers
                      enable peripheral devices, such as printers or keyboards,
                      to interact with the computer.
                    </li>
                    <li>
                      <i class='bi bi-check-circle-fill'></i> Controlling the
                      hardware is only possible if developers can initialize and
                      communicate with the hardware.
                    </li>
                    <li>
                      <i class='bi bi-check-circle-fill'></i> The device driver
                      acts as a pipe between the higher-level application and
                      the lower-level hardware or firmware for data transfer.
                    </li>
                  </ul>
                </div>
                <div class='col-lg-4 order-1 order-lg-2 text-center'>
                  <img
                    src='https://i.stack.imgur.com/qq8AE.gif'
                    data-src='https://res.cloudinary.com/elonatech/image/upload/v1709652747/systempage/Device_driver30ac685128a8498ca455a6908da1dda9_vfxx0z.webp'
                    alt=''
                    class='img-fluid lazyload'
                  />
                </div>
              </div>
            </div>

            <div class='tab-pane' id='tab-4'>
              <div class='row gy-4'>
                <div class='col-lg-8 order-2 order-lg-1'>
                  <h4>Firmware</h4>
                  <p class='fst-italic'>
                    Firmware is an operational software stored in a flash, ROM,
                    EPROM for the OS to identify it. The firmware provides
                    instructions on how the device should be operated. Unlike
                    other software, firmware can not be manipulated, changed, or
                    deleted by the end-users. They remain on the device.
                  </p>
                  <ul>
                    <li>
                      <i class='bi bi-check-circle-fill'></i> Protect against
                      malicious firmware and the best defenses against firmware
                      attacks is purchasing hardware with built-in firmware
                      security.
                    </li>
                    <li>
                      <i class='bi bi-check-circle-fill'></i> Constantly update
                      firmware.
                    </li>
                    <li>
                      <i class='bi bi-check-circle-fill'></i> Register hardware
                      devices to get the latest firmware updates, enterprises
                      should register all hardware purchases..
                    </li>
                  </ul>
                </div>
                <div class='col-lg-4 order-1 order-lg-2 text-center'>
                  <img
                    src='https://i.stack.imgur.com/qq8AE.gif'
                    data-src='https://res.cloudinary.com/elonatech/image/upload/v1709652750/systempage/firmware_ruhcau.png'
                    alt=''
                    style={{ height: '18rem' }}
                    class='img-fluid lazyload'
                  />
                </div>
              </div>
            </div>

            <div class='tab-pane' id='tab-5'>
              <div class='row gy-4'>
                <div class='col-lg-8 order-2 order-lg-1'>
                  <h4>BIOS & UEFI</h4>
                  <p class='fst-italic'>
                    BIOS (Basic Input/Output System) or the new UEFI (Unified
                    Extended Firmware Software) gets the computer system started
                    when we turn it on. BIOS also manages the flow of
                    information between operating systems and the attached
                    devices.
                  </p>
                  <ul>
                    <li>
                      <i class='bi bi-check-circle-fill'></i> UEFI supports
                      drive sizes upto 9 zettabytes, whereas BIOS only supports
                      2.2 terabytes.
                    </li>
                    <li>
                      <i class='bi bi-check-circle-fill'></i> UEFI provides
                      faster boot time..
                    </li>
                    <li>
                      <i class='bi bi-check-circle-fill'></i> UEFI has discrete
                      driver support, while BIOS has drive support stored in its
                      ROM, so updating BIOS firmware is a bit difficult.
                    </li>
                  </ul>
                </div>
                <div class='col-lg-4 order-1 order-lg-2 text-center'>
                  <img
                    src='https://i.stack.imgur.com/qq8AE.gif'
                    data-src='https://res.cloudinary.com/elonatech/image/upload/v1709652745/systempage/bios-vs-uefi_dybm2f.jpg'
                    class='img-fluid lazyload'
                  />
                </div>
              </div>
            </div>

            <div class='tab-pane' id='tab-6'>
              <div class='row gy-4'>
                <div class='col-lg-8 order-2 order-lg-1'>
                  <h4>Utilities</h4>
                  <p class='fst-italic'>
                    Utilities are the type of system software that is present
                    between user and application software. These are the
                    programs designed to configure, analyze, optimize and
                    maintain tasks of the computer. Their task varies from disk
                    fragmentation to data security.
                  </p>
                  <ul>
                    <li>
                      <i class='bi bi-check-circle-fill'></i> An antivirus is a
                      utility software that helps to keep the computer
                      virus-free.
                    </li>
                    <li>
                      <i class='bi bi-check-circle-fill'></i> Utility software
                      are used to manage data on disks.
                    </li>
                    <li>
                      <i class='bi bi-check-circle-fill'></i> Utility software
                      helps to back up the files, folders, databases, or
                      complete disks..
                    </li>
                  </ul>
                </div>
                <div class='col-lg-4 order-1 order-lg-2 text-center'>
                  <img
                    src='https://res.cloudinary.com/elonatech/image/upload/v1709652741/systempage/Utility-System-Software-1024x576_bp1ytq.webp'
                    alt=''
                    class='img-fluid'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ==================================================================================================================== */}
      <Getintouch2 />
      {/* ==================================================================================================================== */}
    </>
  )
}

export default SystemSoftware