import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { BASEURL } from '../../BaseURL/BaseURL';
import Loading from '../Loading/Loading';
import DOMPurify from 'dompurify';
import BlogPagination from './blogPagination/blogPagination';
import './blog.css';
import { Helmet } from 'react-helmet-async';

const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'news', label: 'News' },
  { key: 'trends', label: 'Trends' },
  { key: 'Info', label: 'Info' },
  { key: 'editorial', label: 'Editorial' },
];

const normalizeCategories = raw => {
  let categories = raw;
  if (typeof categories === 'string') {
    try {
      categories = JSON.parse(categories);
    } catch (err) {
      categories = [categories];
    }
  }
  categories = Array.isArray(categories) ? categories : [categories];
  return categories.filter(Boolean);
};

// Shared card-grid + pill-filter listing, used by /blog, /news and /trends.
// All three read from the same Blog collection and just differ in heading,
// meta tags, the base path used for pagination links, and which pill is
// active by default.
const BlogGrid = ({ initialFilter = 'all', basePath, pageHeading, metaTitle, canonicalPath }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);
  const [pageNumberLimit, setPageNumberLimit] = useState(4);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(4);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);
  const [email, setEmail] = useState('');
  const [activeFilter, setActiveFilter] = useState(initialFilter);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASEURL}/api/v1/blog/`);
        setData(response.data.getAllBlogs || []);
        setIsLoading(true);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(true);
      }
    };
    fetchData();
  }, []);

  // Reset back to page 1 whenever the active category filter changes
  useEffect(() => {
    setCurrentPage(1);
    setMaxPageNumberLimit(4);
    setMinPageNumberLimit(0);
  }, [activeFilter]);

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const newData = { email };
      await axios.post(`${BASEURL}/api/v1/email/mailchimp`, newData, {
        headers: { 'Content-Type': 'application/json' }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const paginate = page => setCurrentPage(page);

  const filteredData =
    activeFilter === 'all'
      ? data
      : data.filter(item =>
          normalizeCategories(item.category)
            .map(c => String(c).toLowerCase())
            .includes(activeFilter)
        );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPosts = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const handleNextbtn = () => {
    setCurrentPage(currentPage + 1);
    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevbtn = () => {
    setCurrentPage(currentPage - 1);
    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  const generateBlogLink = (item, page) => `${basePath}/${item.slug}/${item._id}?page=${page}`;

  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta
          name='description'
          content="We'd love to share our knowledge, experiences and the latest news, trends and info with you"
        />
        <link rel='canonical' href={canonicalPath} />
      </Helmet>

      <div className='container-fluid blog-section'>
        <div className='text-content'>
          <h2>{pageHeading}</h2>
          <h5>Offering regularly updated and trendy contents</h5>
          <p className='lead'>
            We'd love to share our knowledge, experiences and the latest news, trends and info with you.
          </p>
        </div>
      </div>

      <div className='container mb-5'>
        <div className='row'>
          <div className='col-lg-9 col-md-8'>
            <div className='container'>
              <div className='blog-pill-bar'>
                {FILTERS.map(f => (
                  <button
                    key={f.key}
                    type='button'
                    className={`blog-pill ${activeFilter === f.key ? 'active' : ''}`}
                    onClick={() => setActiveFilter(f.key)}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
              <div className='row'>
                {isLoading ? (
                  currentPosts.length === 0 ? (
                    <div className='blog-empty-state'>
                      No posts found in this category yet.
                    </div>
                  ) : (
                    currentPosts.map(item => {
                      const categories = normalizeCategories(item.category);

                      return (
                        <div className='col-lg-4 mb-4' key={item._id}>
                          <Link
                            className='text-decoration-none text-dark blog-card-link'
                            to={generateBlogLink(item, currentPage)}
                          >
                            <div className='blog-card h-100'>
                              <div className='blog-card-img-wrap'>
                                <img
                                  src={item.cloudinary_id}
                                  className='blog-card-img'
                                  alt={item.title}
                                />
                              </div>
                              <div className='blog-card-body'>
                                <div className='blog-card-badges'>
                                  {categories.map(cat => (
                                    <span key={cat} className='blog-card-badge'>
                                      {cat}
                                    </span>
                                  ))}
                                </div>
                                <h5 className='blog-card-title'>{item.title}</h5>
                                <p
                                  className='blog-card-excerpt'
                                  dangerouslySetInnerHTML={{
                                    __html: DOMPurify.sanitize(
                                      (item.description ? item.description.slice(0, 150) : '').concat('...')
                                    ),
                                  }}
                                ></p>
                                <p className='blog-card-meta'>
                                  {item.author} / {new Date(item.createdAt).toDateString()}
                                </p>
                              </div>
                            </div>
                          </Link>
                        </div>
                      );
                    })
                  )
                ) : (
                  <div className='d-flex justify-content-center my-5 py-5'>
                    <Loading />
                  </div>
                )}
              </div>
              <div className='mt-5'>
                <BlogPagination
                  basePath={basePath}
                  totalPosts={filteredData.length}
                  itemsPerPage={itemsPerPage}
                  maxPageNumberLimit={maxPageNumberLimit}
                  minPageNumberLimit={minPageNumberLimit}
                  currentPage={currentPage}
                  handleNextbtn={handleNextbtn}
                  handlePrevbtn={handlePrevbtn}
                  paginate={paginate}
                />
              </div>
            </div>
          </div>

          <div className='col-lg-3 col-md-4'>
            <div className='mt-4'>
              <h5 className='mt-2' style={{ color: '#34548c' }}>Be the first to know</h5>
              <p>Enter your email address below to subscribe to our newsletter</p>
              <form>
                <div className='mb-3'>
                  <input
                    type='email'
                    className='form-control rounded-0'
                    style={{ width: '15rem' }}
                    onChange={e => setEmail(e.target.value)}
                    placeholder='Your email*'
                    required
                  />
                </div>
                <div className='d-grid gap-2'>
                  <button
                    onClick={handleSubmit}
                    className='btn btn-danger mb-3'
                    style={{ width: '15rem' }}
                  >
                    Subscribe
                  </button>
                </div>
                <div className='form-check'>
                  <input type='checkbox' className='form-check-input' required />
                  <label className='form-check-label'>
                    I accept the <Link className='ps-2 text-dark' to={'/policy'}>Privacy Policy<span className='text-danger'>*</span></Link>
                  </label>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogGrid;
