import { useEffect, useState, useRef } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { BASEURL } from '../../BaseURL/BaseURL'
import hgdelete from './caption/delete.png'
import edit from './caption/editing.png'
import './blogDetails.css'
import Loading from '../Loading/Loading'
import DOMPurify from 'dompurify'
import { Helmet } from 'react-helmet-async'
import sanitizeHtml from 'sanitize-html'
import BlogSocialShareButtons from './blogShareButton'
import BlogComments from './blogComment'

const BlogDetails = () => {
  const [data, setData] = useState({})
  const [relatedPosts, setRelatedPosts] = useState([])
  const [currentAdmin, setCurrentAdmin] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { slug } = useParams()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [activeItem, setActiveItem] = useState('Item 1')
  const [blogUrl, setBlogUrl] = useState('')
  const [id, setId] = useState(null);

  const leftColumnRef = useRef(null)

  useEffect(() => {
    setBlogUrl(window.location.href)
  }, [])

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const newData = {
        email
      }
      const mail = await axios.post(
        `${BASEURL}/api/v1/email/mailchimp`,
        newData,
        { headers: { 'Content-Type': 'Application/json' } }
      )
      if (mail) {
        setMailChimp('visible')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleClick = item => {
    setActiveItem(item)
  }

  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem('token'))
    setCurrentAdmin(auth)
  }, [])

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(`${BASEURL}/api/v1/blog/${slug}`)
        setData(res.data)
        setId(res.data._id);
        // console.log(id, res.data, 'thuebeiuuuer   ewuue e')
        setIsLoading(true)
      } catch (error) {
        console.log(error)
        setIsLoading(true)
      }
    }
    fetchBlog()
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASEURL}/api/v1/blog/`)
        setRelatedPosts(
          response.data.getAllBlogs
            .filter(post => post.slug !== slug)
            .sort(() => Math.random() - Math.random())
            .slice(0, 4)
        )
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    fetchData()
  }, [])

  const handleDelete = async () => {
    const res = await axios.delete(`${BASEURL}/api/v1/blog/${id}`)
    console.log(res)
    navigate('/blog')
  }

  const html = data.description

  return (
    <>
      {/* header */}
      <div class='container-fluid bg-dark py-5 blog-detail-heaad'>
        <div class='py-5 mt-5 yyyy'>
          <h2 class='text-white text-center blogHead'>Blog Details</h2>
          <h5 class=' mt-4 text-white text-center'></h5>
          <p class='lead text-white text-center'></p>
        </div>
      </div>

      <div className='container mt-3'>
        <ol class='breadcrumb mb-0'>
          <li class='breadcrumb-item'>
            {' '}
            <Link
              className='text-dark'
              style={{ textDecoration: 'none' }}
              to={'/'}
            >
              Home
            </Link>
          </li>
          <li class='breadcrumb-item'>
            {' '}
            <Link
              className='text-dark'
              to={'/blog'}
              style={{ textDecoration: 'none' }}
            >
              Blog
            </Link>
          </li>
        </ol>
        <div className='row'>
          <div className='col-lg-9 leftt'>
            <div className='mt-2'>
              {isLoading ? (
                <div>
                  <h3 className='fw-bold'>{data.title}</h3>
                  <div className='mt-4 '>
                    <div className='row'>
                      <div className='col-md-12'>
                        <div className='card border-0 rounded '>
                          <Helmet>
                            {/* <title>{data.title} </title> */}
                            <meta
                              name='description'
                              content={sanitizeHtml(html, {
                                allowedTags: ['strong']
                              })}
                            />
                            <link
                              rel='canonical'
                              href={`https://elonatech.com.ng/product/${id}`}
                            />

                            {/* Open Graph Meta Tags */}
                            <meta property='og:title' content={data.title} />
                            <meta
                              property='og:description'
                              content={sanitizeHtml(html, {
                                allowedTags: []
                              })}
                            />
                            <meta
                              property='og:image'
                              content={data.cloudinary_id}
                            />
                            <meta property='og:url' content={blogUrl} />
                            <meta property='og:type' content='article' />

                            {/* Twitter Card Meta Tags */}
                            <meta
                              name='twitter:card'
                              content='summary_large_image'
                            />
                            <meta name='twitter:title' content={data.title} />
                            <meta
                              name='twitter:description'
                              content={sanitizeHtml(html, {
                                allowedTags: []
                              })}
                            />
                            <meta
                              name='twitter:image'
                              content={data.cloudinary_id}
                            />
                          </Helmet>

                          <img
                            src={data.cloudinary_id}
                            alt=''
                            className='singlePostImg rounded'
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='container-flui mt-3 mb-4'>
                    <div className='row'>
                      <div className='col-6 col-md-6'>
                        <h6>
                          Author:{' '}
                          <span className='fst-italic ms-2'>{data.author}</span>
                        </h6>
                      </div>
                      <div className='col-6 col-md-6'>
                        {currentAdmin ? (
                          <div className='d-flex justify-content-end'>
                            <Link
                              className='text-decoration-none me-3'
                              style={{ width: '20px', cursor: 'pointer' }}
                              to={`/update/${id}`}
                              state={data}
                            >
                              <img
                                data-src={edit}
                                className='img-fluid me-3 lazyload'
                                style={{ width: '20px', cursor: 'pointer' }}
                                alt=''
                              />
                            </Link>
                            <img
                              data-src={hgdelete}
                              className='img-fluid lazyload'
                              style={{ width: '20px', cursor: 'pointer' }}
                              onClick={handleDelete}
                              alt=''
                            />
                          </div>
                        ) : (
                          <div></div>
                        )}
                      </div>
                      <BlogSocialShareButtons
                        url={blogUrl}
                        title={data.title}
                        image={data.cloudinary_id}
                      />
                    </div>
                  </div>
                  <div
                    class='description taj'
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(data.description)
                    }}
                  ></div>
                </div>
              ) : (
                <div className='' style={{ marginLeft: '25rem' }}>
                  <Loading />
                </div>
              )}
            </div>

            <div className='comments-container-mobile'>
              {' '}
              <BlogComments blogId={id} />
            </div>

            {/*================================== related posts ===================================*/}
            <div className='container bg-light related-post'>
              <h3
                className='fw-bold mb-3 mt-5 pt-4'
                style={{ color: '#0b159d' }}
              >
                Related Posts
              </h3>
              <div className='row'>
                {relatedPosts.map(post => (
                  <div className='col col-md-3' key={post.id}>
                    <div className=''>
                      <Link
                        className='text-decoration-none text-dark'
                        to={`/blog/related/${post.slug}`}
                      >
                        <h6 className='related-post-title'>
                          {post.title.slice(0, 300)}
                        </h6>
                      </Link>
                      <h6 className='text-danger related-post-date'>
                        {new Date(post.createdAt).toDateString()}{' '}
                      </h6>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/*================================== Categories ========================================*/}
          <div className='col-lg-3 rightt'>
            <div className='mt-4'>
              <h5 style={{ color: '#34548c' }}>Categories</h5>
              <ul className='list-unstyled mt-2'>
                <li>
                  <button
                    className={`buttons btn btn-outline-primary rounded-pill px-5  item ${
                      activeItem === 'Item 1' ? 'active' : ''
                    }`}
                    onClick={() => handleClick('Item 1')}
                  >
                    Blogs
                  </button>
                </li>
                <li>
                  <Link to={'/news'}>
                    <button
                      className={`buttons btn btn-outline-primary rounded-pill px-5 mt-1  item ${
                        activeItem === 'Item 2' ? 'active' : ''
                      }`}
                      onClick={() => handleClick('Item 2')}
                    >
                      News
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to={'/trends'}>
                    <button
                      className={`buttons btn btn-outline-primary rounded-pill px-5 mt-1  item ${
                        activeItem === 'Item 3' ? 'active' : ''
                      }`}
                      onClick={() => handleClick('Item 3')}
                    >
                      Trends
                    </button>
                  </Link>
                </li>
              </ul>
              <h5 className='mt-2' style={{ color: '#34548c' }}>
                Be the first to know
              </h5>
              <p>
                Enter your email address below to subscribe to our newsletter
              </p>
              <form className=''>
                <div class='mb-3'>
                  <input
                    type='email'
                    class='form-control rounded-0 '
                    // style={{ width: '18rem' }}
                    id='exampleInputEmail1'
                    onChange={e => setEmail(e.target.value)}
                    placeholder='Your email*'
                    aria-describedby='emailHelp'
                    required
                  />
                </div>
                <div class='d-grid gap-2'>
                  <button
                    onClick={handleSubmit}
                    class='btn btn-danger mb-3 '
                    // style={{ width: '18rem' }}
                  >
                    Subscribe
                  </button>
                </div>

                <div class='form-check'>
                  <label class='form-check-label' for='exampleCheck1'>
                    <input
                      type='checkbox'
                      class='form-check-input'
                      required='required'
                    />
                    I accept the
                    <Link className='ps-2 text-dark' to={'/policy'}>
                      Privacy Policy<span className='text-danger'>*</span>
                    </Link>
                  </label>
                </div>
              </form>

              <div className='comments-container'>
                {' '}
                <BlogComments blogId={id} />
              </div>

              <div className='container bg-light related-post2'>
                <h3
                  className='fw-bold mb-3 mt-5 pt-4'
                  style={{ color: '#0b159d' }}
                >
                  Related Posts
                </h3>
                <div className='rel'>
                  {relatedPosts.map(post => (
                    <div className='relIn ' key={post.id}>
                      {/* <div className='col col-md-3 col-sm-11' key={post.id}> */}
                      <div className=''>
                        <Link
                          className='text-decoration-none text-dark'
                          to={`/blog/related/${post.slug}`}
                        >
                          <h6 className='related-post-title'>
                            {post.title.slice(0, 300)}
                          </h6>
                        </Link>
                        <h6 className='text-danger related-post-date'>
                          {new Date(post.createdAt).toDateString()}{' '}
                        </h6>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogDetails

// === Categories =====