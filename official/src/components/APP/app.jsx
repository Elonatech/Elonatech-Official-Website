import React from 'react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Card, CardContent } from './card'
import {
  Smartphone,
  Code,
  Zap,
  Shield,
  Globe,
  Laptop,
  Cloud,
  Users,
  Settings
} from 'lucide-react'
import Getintouch from '../GetInTouch/getintouch'
import './app.css'

import { RiFlutterFill } from 'react-icons/ri'
import { TbBrandReactNative } from 'react-icons/tb'
import { GrSwift } from 'react-icons/gr'
import { SiKotlin } from 'react-icons/si'

const AppDevelopment = () => {
  const features = [
    {
      icon: <Smartphone className='w-8 h-8 blueColo' />,
      title: 'Native Performance',
      description:
        'Apps built with native code for optimal speed and responsiveness on both iOS and Android platforms.'
    },
    {
      icon: <Code className='w-8 h-8 blueColo' />,
      title: 'Cross-Platform Development',
      description:
        'Single codebase for multiple platforms, reducing development time and maintenance costs.'
    },
    {
      icon: <Zap className='w-8 h-8 blueColo' />,
      title: 'Real-time Updates',
      description:
        'Implement real-time features like chat, notifications, and live data synchronization.'
    },
    {
      icon: <Shield className='w-8 h-8 blueColo' />,
      title: 'Secure Architecture',
      description:
        'Built-in security features including encryption, secure authentication, and data protection.'
    },
    {
      icon: <Globe className='w-8 h-8 blueColo' />,
      title: 'Offline Functionality',
      description:
        'Apps work seamlessly offline with data synchronization when connection is restored.'
    },
    {
      icon: <Cloud className='w-8 h-8 blueColo' />,
      title: 'Cloud Integration',
      description:
        'Seamless integration with cloud services for scalable backend operations.'
    }
  ]

  const processSteps = [
    {
      number: '01',
      title: 'Discovery & Planning',
      description:
        'We analyze your requirements, target audience, and business goals to create a comprehensive development strategy.'
    },
    {
      number: '02',
      title: 'UI/UX Design',
      description:
        'Our designers create intuitive and engaging interfaces that provide exceptional user experiences.'
    },
    {
      number: '03',
      title: 'Development',
      description:
        'We build your app using the latest technologies and best practices in mobile development.'
    },
    {
      number: '04',
      title: 'Testing & QA',
      description:
        'Rigorous testing across different devices and scenarios to ensure quality and reliability.'
    },
    {
      number: '05',
      title: 'Deployment',
      description:
        'We handle the app store submission process and ensure successful deployment.'
    },
    {
      number: '06',
      title: 'Maintenance & Support',
      description:
        'Ongoing support, updates, and maintenance to keep your app running smoothly.'
    }
  ]

  const showcaseApps = [
    {
      title: 'HealthTrack Pro',
      description: 'Fitness & wellness tracking application',
      image:
        'https://res.cloudinary.com/elonatech/image/upload/v1731490847/healthcare_app_mm7wic.png',
      category: 'Healthcare'
    },
    {
      title: 'EduLearn',
      description: 'Interactive learning platform',
      image:
        'https://res.cloudinary.com/elonatech/image/upload/v1731490847/Edu_learn_app_dnhjwj.png',
      category: 'Education'
    },
    {
      title: 'SmartCommerce',
      description: 'E-commerce solution with AR features',
      image:
        'https://res.cloudinary.com/elonatech/image/upload/v1731490846/e-commerce_bsvqan.png',
      category: 'Retail'
    }
  ]

  return (
    <>
      <Helmet>
        <title>Mobile App Development Services</title>
        <meta
          name='description'
          content='Professional mobile app development services for iOS and Android. We create custom, high-performance mobile applications that deliver exceptional user experiences.'
        />
        <link rel='canonical' href='https://elonatech.com.ng/app-development' />
      </Helmet>

      {/* Hero Section */}
      <div className='container-fluid app-design-section'>
        <div>
          <div className='text-content'>
            <div className='max-w-2xl'>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className='text-5xl font-bold text-white mb-6'
              >
                <h2>Mobile App Design & Development</h2>
                <h5>Transform Your Ideas Into Powerful Mobile Apps</h5>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className='text-xl text-gray-200 mb-8'
              >
                <p class='lead'>
                  We develop innovative mobile applications that engage users
                  and drive business growth
                </p>
              </motion.p>
            </div>
          </div>
        </div>
      </div>

      {/* first row */}

      <div className='container mb-5 mt-5'>
        <div className='row align-items-center'>
          <div className='col-lg-6 col-md-12'>
            <div className=''>
              <h4 className='fw-bold'>
                What is Mobile Application Development?
              </h4>
              <div
                className='underline-w mt-1 mb-2'
                style={{ width: '40px', height: '3px', background: '#f00' }}
              ></div>
              <p style={{textAlign: 'justify'}}>
                Mobile application development is the process of making software
                for smartphones, tablets and digital assistants, most commonly
                for the Android and iOS operating systems. The software can be
                preinstalled on the device, downloaded from a mobile app store
                or accessed through a mobile web browser. Mobile app development
                is rapidly growing. From retail, telecommunications and
                e-commerce to insurance, healthcare and government,
                organizations across industries must meet user expectations for
                real-time, convenient ways to conduct transactions and access
                information. Today, mobile devices and the mobile applications
                that unlock their value are the most popular way for people and
                businesses to connect to the internet. To stay relevant,
                responsive and successful, organizations need to develop the
                mobile applications that their customers, partners and employees
                demand.Whether you choose native or hybrid mobile application
                development, one of the first hurdles you’ll need to overcome is
                the relatively limited resources on mobile devices. Your target
                mobile device has much less processing power and memory than
                desktop computers or enterprise servers. Delivering a great user
                experience is vital. It starts with understanding that your user
                interface for a mobile app should be simpler than a desktop
                application interface. By creating a straightforward UX design
                that is focused on critical functions, you can provide a better
                user experience while consuming fewer resources. Elonatech's
                Mobile App Developers are versed in getting these achieved.
              </p>
            </div>
          </div>
          <div className='col-lg-6 col-md-12'>
            <div className='text-center'>
              <video autoPlay loop muted className='background-video'>
                <source
                  src='https://res.cloudinary.com/elonatech/video/upload/v1731490848/background_video_mobile_app_zp2jgl.mp4'
                  type='video/mp4'
                  className='img-fluid rounded lazyload '
                />
              </video>
            </div>
          </div>
          <p style={{textAlign: 'justify'}}>
            {' '}
            Whether you choose native or hybrid mobile application development,
            one of the first hurdles you’ll need to overcome is the relatively
            limited resources on mobile devices. Your target mobile device has
            much less processing power and memory than desktop computers or
            enterprise servers. Delivering a great user experience is vital. It
            starts with understanding that your user interface for a mobile app
            should be simpler than a desktop application interface. By creating
            a straightforward UX design that is focused on critical functions,
            you can provide a better user experience while consuming fewer
            resources. Elonatech's Mobile App Developers are versed in getting
            these achieved.
          </p>
        </div>
      </div>

      {/* end of first row */}

      {/* Text Content */}

      <div
        className=''
        style={{
          background: 'linear-gradient(90deg, #021048 0%, #1E38A3 100%)'
        }}
      >
        <h2 className='ya'>Why Choose Our App Development Services?</h2>
        <div
          className='underline-w mt-1'
          style={{
            width: '40px',
            height: '3px',
            margin: 'auto',
            background: '#f00'
          }}
        ></div>
        <div className='container py-5'>
          <div className='row'>
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='col-lg-4 col-md-6 g-3'
              >
                <Card className='p-4' style={{ color: 'rgb(2, 16, 72)' }}>
                  <CardContent className='p-6'>
                    <div className='mb-4 icon-container'>{feature.icon}</div>
                    <h3 className='yc pt-2 fw-bold'>{feature.title}</h3>
                    <p className=''>{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Development Process */}
      <div className='A'>
        <div className='container mx-auto px-4'>
          <h2 className='B'>Our Development Process</h2>
          <div
            className='underline-w mt-1 mb-4'
            style={{
              width: '40px',
              height: '3px',
              margin: 'auto',
              background: '#f00'
            }}
          ></div>
          <div className='C'>
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='Da'
              >
                <div className='D'>{step.number}</div>
                <div className='E'>
                  <h3 className='F'>{step.title}</h3>
                  <p className='G' style={{textAlign: 'justify'}}>{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* App Showcase */}
      <div className='oneLane'>
        <div className='container mx-auto px-4'>
          <h2 className='twoLane'>Featured Apps</h2>
          <div className='threeLane'>
            {showcaseApps.map((app, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className='fourLane'
              >
                <img src={app.image} alt={app.title} className='fiveLane' />
                <div className='sixLane'>
                  <span className='sevenLane'>{app.category}</span>
                  <h3 className='eightLane'>{app.title}</h3>
                  <p className='nineLane'>{app.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Technologies Section */}
      <div className='technology-lnOne'>
        <div className='container lnTwo'>
          <h2 className='lnThree'>Technologies We Use</h2>
          <div
            className='underline-w mt-1 mb-4'
            style={{
              width: '40px',
              height: '3px',
              margin: 'auto',
              background: '#f00'
            }}
          ></div>
          <div className='lnFive'>
            {[
              {
                name: 'React Native',
                icon: <TbBrandReactNative className='lnSix' />,
                shortNote: `React Native lets you build mobile apps for both iOS and
                Android with one code base. It gives native-like
                performance, fast development, and costs less than building
                separate apps for each platform.`
              },
              {
                name: 'Flutter',
                icon: <RiFlutterFill className='lnSix' />,
                shortNote: `Flutter is Google's toolkit for building beautiful native apps for mobile, web, and desktop from a single codebase. It uses Dart language, has rich built-in widgets, and delivers fast performance with smooth animations.`
              },
              {
                name: 'iOS (Swift)',
                icon: <GrSwift className='lnSix' />,
                shortNote: `Swift is Apple's powerful programming language for iOS apps. It offers fast performance, strong security, and clean syntax. Perfect for creating sleek, native iPhone and iPad apps with full access to Apple's ecosystem.`
              },
              {
                name: 'Android (Kotlin)',
                icon: <SiKotlin className='lnSix' />,
                shortNote: `Kotlin is a modern Android development language backed by Google. It's simpler and safer than Java, reduces code errors, and makes building Android apps faster and easier. Works perfectly with existing Android tools and libraries.`
              }
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='lnFour'
              >
                <div className='lnSev'>
                  <h3 className='lnEig'>
                    {tech.name}
                    <div>{tech.icon}</div>
                  </h3>
                  <div className='shortNote' style={{textAlign: 'justify'}}>{tech.shortNote}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Get in Touch Section */}
      <Getintouch />
    </>
  )
}

export default AppDevelopment
