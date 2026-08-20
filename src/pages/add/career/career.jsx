
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { BASEURL } from '../../../BaseURL/BaseURL'
import Loading from '../../../components/Loading/Loading'
import './career.css'
import { Helmet } from 'react-helmet-async'

// jobSummary is rich-text HTML from the admin's editor — strip tags AND
// decode entities (e.g. "&nbsp;" from a trailing space in Quill) for the
// plain-text teaser shown on the listing card. A regex tag-strip alone
// leaves entities as literal text ("...brand.&nbsp;"), so parse it as real
// HTML and read .textContent, which decodes them properly.
const plainText = (html) => {
  if (!html) return ''
  const doc = new DOMParser().parseFromString(String(html), 'text/html')
  return (doc.body.textContent || '').replace(/\s+/g, ' ').trim()
}

const Career = () => {
  // Open positions come from the Job collection managed in the admin —
  // /api/v1/jobs returns Active postings only.
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [employmentFilter, setEmploymentFilter] = useState('')
  const [workplaceFilter, setWorkplaceFilter] = useState('')
  const [levelFilter, setLevelFilter] = useState('')

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

  // Hardcoded from the Job model's enums (not derived from current jobs) so
  // the filter panel shows the full set of options even if not every value
  // has a live posting right now — same as any normal job board filter.
  const employmentTypes = ["Full-Time", "Part-Time", "Contract", "Internship", "Freelance", "Mentorship", "Volunteer", "Other"]
  const workplaceTypes = ["On-site", "Hybrid", "Remote"]
  const jobLevels = ["No Experience", "Internship & Graduate", "Entry-level", "Mid-level", "Senior-level", "Executive-level"]

  // Single-select per category — clicking an already-selected option clears
  // it back to "no filter" for that category, since a radio input alone
  // can't be deselected by clicking it again.
  const selectFilter = (value, current, setValue) => {
    setValue(current === value ? '' : value)
  }

  const filteredJobs = jobs.filter(job => {
    const matchesSearch =
      !search.trim() ||
      job.title?.toLowerCase().includes(search.toLowerCase()) ||
      plainText(job.jobSummary).toLowerCase().includes(search.toLowerCase())
    const matchesEmployment = !employmentFilter || employmentFilter === job.employmentType
    const matchesWorkplace = !workplaceFilter || workplaceFilter === job.workplaceType
    const matchesLevel = !levelFilter || levelFilter === job.jobLevel
    return matchesSearch && matchesEmployment && matchesWorkplace && matchesLevel
  })

  const clearFilters = () => {
    setSearch('')
    setEmploymentFilter('')
    setWorkplaceFilter('')
    setLevelFilter('')
  }

  const unusedCareerCards = [
    {
      title: 'Graphic Designer / Digital Marketer',
      description:
        'With at least 1 year work experience with proof of professional Graphics Design and Animations.',
      img: 'https://res.cloudinary.com/dahnwukbz/image/upload/v1783678841/illustration_s7lm6h_hailx0.png',
      link: '/graphic-career'
    },
    {
      title: 'Full Stack Software Developer',
      description:
        "Must have at least 2 years' work experience with proof of Web Development.",
      img: 'https://res.cloudinary.com/dahnwukbz/image/upload/v1783678998/web-development_psuko3_paiy8j.png',
        link: '/web-career'
    },
    {
      title: 'Digital Marketer',
      description:
        'Must have at least 1 year work experience with proof of professional Digital Marketing.',
      img: 'https://res.cloudinary.com/dahnwukbz/image/upload/v1783678971/social-media_iund4b_mph9xw.png',
      link: '/digital-career'
    },
    {
      title: 'Motion Graphics Designer / Animator',
      description: 'Must be able to use Figma, Adobe XD, Photoshop, etc.',
      img: 'https://res.cloudinary.com/dahnwukbz/image/upload/v1783678964/montage_brxkxi_aqtuh3.png',
      link: '/animation-career'
    },
    {
      title: 'Tech Support Personnel',
      description:
        "Minimum of 2 years' experience in maintenance of computer hardware, software systems, and supporting network.",
      img: 'https://res.cloudinary.com/dahnwukbz/image/upload/v1783678978/ux-design_kjglok_oda19t.png',
      link: '/system-career'
    },
    {
      title: 'Marketing & Sales Representative',
      description:
        'Previous work experience as a Marketer/Sales Representative. Basic knowledge (MS Office/Excel).',
      img: 'https://res.cloudinary.com/dahnwukbz/image/upload/v1785168076/branding_cbu4tb_icr55n.png',
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
                data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783689938/admin_d4aiix_lj8jb4.jpg'
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
                    {(search || employmentFilter || workplaceFilter || levelFilter) && (
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
                            type='radio'
                            name='employmentType'
                            checked={employmentFilter === type}
                            onChange={() => {}}
                            onClick={() => selectFilter(type, employmentFilter, setEmploymentFilter)}
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
                            type='radio'
                            name='workplaceType'
                            checked={workplaceFilter === type}
                            onChange={() => {}}
                            onClick={() => selectFilter(type, workplaceFilter, setWorkplaceFilter)}
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
                            type='radio'
                            name='jobLevel'
                            checked={levelFilter === level}
                            onChange={() => {}}
                            onClick={() => selectFilter(level, levelFilter, setLevelFilter)}
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
                            {job.location && <span>📍 {job.location}</span>}
                            {job.employmentType && <span>🕒 {job.employmentType}</span>}
                            {job.workplaceType && <span className='job-row-tag'>{job.workplaceType}</span>}
                          </div>
                          <p className='job-row-summary'>{plainText(job.jobSummary)}</p>
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
                data-src='https://res.cloudinary.com/dahnwukbz/image/upload/v1783693157/jpeg-optimizer_black-_z3pvzk_jew84v.jpg'
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

