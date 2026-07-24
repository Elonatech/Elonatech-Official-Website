
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { BASEURL } from '../../../BaseURL/BaseURL'
import Loading from '../../../components/Loading/Loading'
import './career.css'
import { Helmet } from 'react-helmet-async'

const Career = () => {
  // Open positions come from the Job collection managed in the admin —
  // /api/v1/jobs returns Active postings only.
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [employmentFilter, setEmploymentFilter] = useState([])
  const [workplaceFilter, setWorkplaceFilter] = useState([])
  const [levelFilter, setLevelFilter] = useState([])

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get(`${BASEURL}/api/v1/jobs`)
        setJobs(res.data.jobs || [])
      } catch (error) {
        console.error('Failed to load open positions:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchJobs()
  }, [])

  const employmentTypes = [...new Set(jobs.map(j => j.employmentType).filter(Boolean))]
  const workplaceTypes = [...new Set(jobs.map(j => j.workplaceType).filter(Boolean))]
  const jobLevels = [...new Set(jobs.map(j => j.jobLevel).filter(Boolean))]

  const toggleFilter = (value, list, setList) => {
    setList(list.includes(value) ? list.filter(v => v !== value) : [...list, value])
  }

  const filteredJobs = jobs.filter(job => {
    const matchesSearch =
      !search.trim() ||
      job.title?.toLowerCase().includes(search.toLowerCase()) ||
      job.jobSummary?.toLowerCase().includes(search.toLowerCase())
    const matchesEmployment = employmentFilter.length === 0 || employmentFilter.includes(job.employmentType)
    const matchesWorkplace = workplaceFilter.length === 0 || workplaceFilter.includes(job.workplaceType)
    const matchesLevel = levelFilter.length === 0 || levelFilter.includes(job.jobLevel)
    return matchesSearch && matchesEmployment && matchesWorkplace && matchesLevel
  })

  const clearFilters = () => {
    setSearch('')
    setEmploymentFilter([])
    setWorkplaceFilter([])
    setLevelFilter([])
  }

  const unusedCareerCards = [
    {
      title: 'Graphic Designer / Digital Marketer',
      description:
        'With at least 1 year work experience with proof of professional Graphics Design and Animations.',
      img: 'https://res.cloudinary.com/elonatech/image/upload/v1709662758/careerPage/illustration_s7lm6h.png',
      link: '/graphic-career'
    },
    {
      title: 'Full Stack Software Developer',
      description:
        "Must have at least 2 years' work experience with proof of Web Development.",
      img: 'https://res.cloudinary.com/elonatech/image/upload/v1709662773/careerPage/web-development_psuko3.png',
        link: '/web-career'
    },
    {
      title: 'Digital Marketer',
      description:
        'Must have at least 1 year work experience with proof of professional Digital Marketing.',
      img: 'https://res.cloudinary.com/elonatech/image/upload/v1709662766/careerPage/social-media_iund4b.png',
      link: '/digital-career'
    },
    {
      title: 'Motion Graphics Designer / Animator',
      description: 'Must be able to use Figma, Adobe XD, Photoshop, etc.',
      img: 'https://res.cloudinary.com/elonatech/image/upload/v1709662762/careerPage/montage_brxkxi.png',
      link: '/animation-career'
    },
    {
      title: 'Tech Support Personnel',
      description:
        "Minimum of 2 years' experience in maintenance of computer hardware, software systems, and supporting network.",
      img: 'https://res.cloudinary.com/elonatech/image/upload/v1709662770/careerPage/ux-design_kjglok.png',
      link: '/system-career'
    },
    {
      title: 'Marketing & Sales Representative',
      description:
        'Previous work experience as a Marketer/Sales Representative. Basic knowledge (MS Office/Excel).',
      img: 'https://res.cloudinary.com/elonatech/image/upload/v1709662750/careerPage/branding_cbu4tb.png',
      link: '/marketing-career'
    }
  ]

  return (
    <>
      <Helmet>
        <title>Join Our Team - Career Opportunities at Tech Solutions | Elonatech</title>
        <meta
          name='description'
          content='Build a Career With Us
          In our bid to promote operational excellence and lead in the delivery of IT solutions across Nigeria and beyond, our pursuit for the best hands is the cornerstone of our recruitment policy. Elonatech seeks people who are self-driven, strong-willed, result-oriented and performance-driven, to find brighter, smarter and innovative solutions to problems and ignite our world. '
        />
        <link rel='canonical' href='https://elonatech.com.ng/career' />
      </Helmet>

      {/*============================================================================= header =============================================================*/}
      <div class='container-fluid career-section'>
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

      <div className='container'>
        <div class='row justify-content-center mt-5 align-items-center'>
          <div class='col-md-6'>
            <div className=''>
              <div className='pt-2'>
                <h4
                  style={{ fontSize: '', fontWeight: '800', color: '#34548c' }}
                >
                  Build a Career With Us
                </h4>
              </div>
              <div className='pt-'>
                <p className='taj' style={{ lineHeight: '2' }}>
                  In our bid to promote operational excellence and lead in the
                  delivery of IT solutions across Nigeria and beyond, our
                  pursuit for the best hands is the cornerstone of our
                  recruitment policy. Elonatech seeks people who are
                  self-driven, strong-willed, result-oriented and
                  performance-driven, to find brighter, smarter and innovative
                  solutions to problems and ignite our world. People who can
                  transform their potentials into solutions; and People who work
                  with diverse minds to solve global issues.
                </p>
                <a href="https://www.glassdoor.com/Overview/Working-at-Elonatech-Nigeria-EI_IE10325429.11,28.htm"><img alt="Check us out on Glassdoor." src="https://www.glassdoor.com/pc-app/static/img/partnerCenter/badges/eng_CHECK_US_273x90.png" /></a>
              </div>
            </div>
          </div>

          <div class='col-md-6 '>
            <div className='text-center'>
              <img
                src='https://i.stack.imgur.com/qq8AE.gif'
                data-src='https://res.cloudinary.com/elonatech/image/upload/v1709823779/groupPicture/admin_d4aiix.jpg'
                className='img-fluid rounded lazyload mb-2'
              />
            </div>
          </div>
        </div>
      </div>
      {/* ============================================================================================================================== */}
      <div className='-5' style={{ backgroundColor: '#F9F8F3' }}>
        <div className='pt-4 text-center'>
          <h4 style={{ color: '#34548c' }}>
            <span style={{ color: '#34548c', fontWeight: '800' }}>Job </span>
            Role Applying For?
          </h4>
          <p className='container'>
            We believe in building a team of passionate innovators who embody excellence, creativity, and a strong sense of responsibility.
          </p>
        </div>
        <div className='container'>
          {loading ? (
            <div className='d-flex justify-content-center my-5 py-4'>
              <Loading />
            </div>
          ) : jobs.length === 0 ? (
            <div className='text-center my-5 py-4'>
              <p style={{ fontWeight: 600 }}>
                There are no open positions at the moment.
              </p>
              <p className='text-muted'>
                Please check back soon — we post new roles regularly.
              </p>
            </div>
          ) : (
            <div className='row gy-4'>
              {/* Filters sidebar */}
              <div className='col-lg-3'>
                <div className='job-filter-card'>
                  <div className='d-flex justify-content-between align-items-center mb-3'>
                    <h6 className='job-filter-title mb-0'>Refine your search</h6>
                    {(search || employmentFilter.length > 0 || workplaceFilter.length > 0 || levelFilter.length > 0) && (
                      <button className='job-filter-clear' onClick={clearFilters}>
                        Clear filters
                      </button>
                    )}
                  </div>

                  {employmentTypes.length > 0 && (
                    <div className='job-filter-group'>
                      <p className='job-filter-label'>Job Type</p>
                      {employmentTypes.map(type => (
                        <label className='job-filter-check' key={type}>
                          <input
                            type='checkbox'
                            checked={employmentFilter.includes(type)}
                            onChange={() => toggleFilter(type, employmentFilter, setEmploymentFilter)}
                          />
                          {type}
                        </label>
                      ))}
                    </div>
                  )}

                  {workplaceTypes.length > 0 && (
                    <div className='job-filter-group'>
                      <p className='job-filter-label'>Workplace</p>
                      {workplaceTypes.map(type => (
                        <label className='job-filter-check' key={type}>
                          <input
                            type='checkbox'
                            checked={workplaceFilter.includes(type)}
                            onChange={() => toggleFilter(type, workplaceFilter, setWorkplaceFilter)}
                          />
                          {type}
                        </label>
                      ))}
                    </div>
                  )}

                  {jobLevels.length > 0 && (
                    <div className='job-filter-group'>
                      <p className='job-filter-label'>Experience Level</p>
                      {jobLevels.map(level => (
                        <label className='job-filter-check' key={level}>
                          <input
                            type='checkbox'
                            checked={levelFilter.includes(level)}
                            onChange={() => toggleFilter(level, levelFilter, setLevelFilter)}
                          />
                          {level}
                        </label>
                      ))}
                    </div>
                  )}

                </div>
              </div>

              {/* Job list */}
              <div className='col-lg-9'>
                <div className='d-flex flex-column flex-sm-row gap-2 mb-3'>
                  <input
                    type='text'
                    className='form-control job-search-input'
                    placeholder='Search jobs by title, keyword...'
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                  />
                </div>

                <p className='job-results-count'>
                  Showing {filteredJobs.length} of {jobs.length} job{jobs.length === 1 ? '' : 's'}
                </p>

                {filteredJobs.length === 0 ? (
                  <div className='text-center my-5 py-4'>
                    <p style={{ fontWeight: 600 }}>No jobs match your filters.</p>
                    <button className='btn btn-outline-primary mt-2' onClick={clearFilters}>
                      Clear filters
                    </button>
                  </div>
                ) : (
                  <div className='d-flex flex-column gap-3'>
                    {filteredJobs.map(job => (
                      <Link
                        to={`/career/${job.slug || job._id}/${job._id}`}
                        className='job-row-card'
                        key={job._id}
                      >
                        <div className='job-row-main'>
                          <h5 className='job-row-title'>{job.title}</h5>
                          <div className='job-row-meta'>
                            <span>📍 {job.location}</span>
                            <span>🕒 {job.employmentType}</span>
                            {job.workplaceType && <span className='job-row-tag'>{job.workplaceType}</span>}
                          </div>
                          <p className='job-row-summary'>{job.jobSummary}</p>
                        </div>
                        <span className='btn job-row-btn'>View &amp; Apply</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ======================================================================================================================= */}
      <div className='container mt-5 mb-5'>
        <div class='row justify-content-center align-items-center'>
          <div class='col-lg-6'>
            <div className='text-center'>
              <img
                src='https://i.stack.imgur.com/qq8AE.gif'
                data-src='https://res.cloudinary.com/elonatech/image/upload/v1710841677/careerPage/jpeg-optimizer_black-_z3pvzk.jpg'
                alt=''
                className='img-fluid lazyload rounded mt-2'
                srcset=''
              />
            </div>
          </div>
          <div class='col-lg-6'>
            <h4 className='fw-bold'>Our Passion</h4>
            <p className='text-justify '>
              We have a passion for our clients, results and the solutions we
              provide. Our team possess a pragmatic drive for action that runs
              through the week, each working day, and doesn’t let up. We rally
              clients with our infectious energy, to make change stick. And we
              never do it alone. We support and are supported to develop our own
              personal result(s) stories. We train, and get trained to further
              equip ourselves, so as to be abreast of imminent IT challenges. We
              work hard, but we don’t take ourselves too seriously. We enjoy
              what we do and we laugh a lot… most often at ourselves.
            </p>
            <h4 className='fw-bold '>Requirements</h4>
            <p className='fs-6 mb-1'>
              Prospective candidates who wish to seek employment with us must
              fulfill the following:
            </p>
            <ul>
              <li>
                Must have successfully completed (minimum) of a diploma or
                relevant degree in a reputable higher institution
              </li>
              <li>
                Must have a relevant practical, IT skill or is undergoing a
                training in a recognized IT training institution
              </li>
              <li>Additional professional IT certification is a plus</li>
              <li>
                Must be a Nigerian or have the necessary work permits if not a
                Nigerian citizen
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Career

