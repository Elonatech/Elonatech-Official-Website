import ApplyNow from '../../../components/ApplyNow/ApplyNow'
import { Helmet } from 'react-helmet-async'

import './../graphicCareer/graphicCareer.css'
import { useEffect } from 'react'

import './../graphicCareer/graphicCareer.css'

const DigitalCareer = () => {
  useEffect(() => {
    sessionStorage.setItem('previousUrl', window.location.href)
  }, [])
  return (
    <>
      <Helmet>
        <title>Digital Marketer Career - Join Our Team for Innovative Campaigns & Digital Strategies</title>
        <meta
          name='description'
          content='This is a full-time on-site role for a Digital Marketer. The Digital Marketer will be responsible for creating designs and campaigns as well as managing all the digital channels available, including the social media platforms, email marketing funnels, SEO, etc. for a variety of online media. '
        />
        <link rel='canonical' href='https://elonatech.com.ng/digital-career' />
      </Helmet>

      {/* header */}
      <div class='container-fluid careers-section'>
        <div class='text-content'>
          <h2>Career</h2>
          <h5>Let's grow together</h5>
          <p class='lead'>
            We’re building a culture at Elonatech where amazing people (like
            you) can do their best work.
            <br /> If you’re ready to grow your career and help millions of
            organizations and SME grow better, you’ve come to the right place.
          </p>
        </div>
      </div>

      <div className='container mt- '>
        <h1
          className='my-5'
          style={{ fontSize: '', fontWeight: '800', color: '#34548c' }}
        >
          Digital Marketer
        </h1>
        <div class='row justify-content-center mt-3'>
          <div class='col-md-6'>
            <h5 style={{ fontSize: '', fontWeight: '700', color: '#34548c' }}>
              Role Description:
            </h5>
            <p className='text-justify'>
              This is a full-time on-site role for a Digital Marketer. The
              Digital Marketer will be responsible for creating designs and
              campaigns as well as managing all the digital channels available,
              including the social media platforms, email marketing funnels,
              SEO, etc. for a variety of online media. The Digital Marketer will
              work closely with the graphics team as well as with clients to
              ensure that their campaigns meet the client's requirements.
            </p>
            <p>
              {' '}
              <span style={{ color: '#34548c', fontWeight: '700' }}>
                Location:
              </span>{' '}
              Egbeda, Lagos (Mainland){' '}
            </p>
            <p>
              {' '}
              <span style={{ color: '#34548c', fontWeight: '700' }}>
                Employment Type:{' '}
              </span>{' '}
              Full-time (On-site){' '}
            </p>
            <p className='text-justify'>
              {' '}
              <span style={{ color: '#34548c', fontWeight: '700' }}>
                {' '}
                Responsibilities:
              </span>{' '}
              A high level of proficiency using basic graphic tools (Canva).
              Highly skilled in social media management and engagement
              (Facebook, Twitter, LinkedIn, YouTube, Instagram, Google etc.).{' '}
              <br />
              Must be competent in SEO management (Google Search Console, Bing
              Master etc.), Email marketing, PPC, content marketing, and
              affiliate marketing.
            </p>
            <p>
              {' '}
              <span style={{ color: '#34548c', fontWeight: '700' }}>
                Qualifications:{' '}
              </span>{' '}
              Minimum of National Diploma in Computer Science, Design, Fine
              Arts, Physics, Electrical / Electronic or Telecommunications
              Engineering or other related discipline.{' '}
            </p>
            <p style={{ color: '#34548c', fontWeight: '700' }}>Experience:</p>
            <ul>
              <li>
                Must have at least 1 year's work experience with proof of
                professional digital marketing.
              </li>
              <li>
                Must be able to use Graphics software, Canva 100%, CorelDraw,
                Photoshop average.
              </li>
              <li>
                Knowledge of animations or motion graphics will be an added
                advantage.
              </li>
              <li>
                Possess a solid understanding of social media marketing and
                campaigning.
              </li>
              <li>Strong typography skills.</li>
              <li>
                Ability to create engaging and visually appealing designs.
              </li>
              <li>Ability to work in a team and meet project deadlines.</li>
            </ul>
          </div>
          <div class='col-md-6'>
            <ul>
              <li>Excellent communication skills.</li>
              <li>A portfolio showcasing your design and digital campaigns.</li>
              <li>
                Support in the development of concepts, graphics and layouts for
                product illustrations, logos, websites, etc.
              </li>
              <li>
                Developing concepts, graphics and layouts for digital campaigns.
              </li>
              <li>
                Knowledge of copywriting and Search Engine Optimization (SEO)
                process or Search engine marketing (SEM) expertise with
                experience in Google Analytics is a plus.
              </li>
              <li>Ability to run ads on all social media platforms.</li>
              <li>Thorough understanding on Ads management and campaign</li>
              <li>Ability to deliver within deadline.</li>
            </ul>

            <p style={{ color: '#34548c', fontWeight: '700' }}>
              Skills and Abilities:
            </p>
            <ul>
              <li> Proven social media and content management skills</li>
              <li>
                {' '}
                Superior listening, verbal, and written communication skills
              </li>
              <li> Professional approach to time, costs and deadlines</li>
            </ul>

            <p style={{ color: '#34548c', fontWeight: '700' }}>
              Personal Attributes:
            </p>
            <ul>
              <li>Loves art and color</li>
              <li>Young and dynamic</li>
              <li>Creative and self-motivating</li>
              <li>Highly organized and detailed</li>
            </ul>
            <p>
              {' '}
              <span style={{ color: '#34548c', fontWeight: '700' }}>
                Method of Application:{' '}
              </span>{' '}
              Interested and qualified candidates should click the link below to
              apply{' '}
            </p>
            <p>
              {' '}
              <span style={{ color: '#34548c', fontWeight: '700' }}>
                {' '}
                Note:{' '}
              </span>{' '}
              All applications will be treated in confidence and only
              shortlisted candidates will be contacted{' '}
            </p>
            <div className='mb-3'>
              <ApplyNow />
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DigitalCareer
