import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { BASEURL } from '../../BaseURL/BaseURL';
import Loading from '../Loading/Loading';
import DOMPurify from 'dompurify';
import BlogPagination from './blogPagination/blogPagination';
import './blog.css';
import { Helmet } from 'react-helmet-async';

const Blog = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);
  const [pageNumberLimit, setPageNumberLimit] = useState(4);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(4);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);
  const [email, setEmail] = useState('');
  const [activeItem, setActiveItem] = useState('Item 1');

  const handleClick = item => setActiveItem(item);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASEURL}/api/v1/blog/`);
        console.log(response);
        
        setData(response.data.getAllBlogs || []);
        setIsLoading(true);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(true);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const newData = { email };
      await axios.post(`${BASEURL}/api/v1/email/mailchimp`, newData, {
        headers: { 'Content-Type': 'application/json' }
      });
      // You can show a toast or set a state here if needed
    } catch (error) {
      console.log(error);
    }
  };

  const paginate = page => setCurrentPage(page);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPosts = data.slice(indexOfFirstItem, indexOfLastItem);

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

  const generateBlogLink = (item, currentPage) => `/blog/${item.slug}/${item._id}?page=${currentPage}`;

  return (
    <>
      <Helmet>
        <title>Tech Solutions Blog - Latest News, Trends & Insights in Digital Solutions</title>
        <meta
          name='description'
          content="We'd love to share our knowledge, experiences and the latest news, trends and info with you"
        />
        <link rel='canonical' href='https://elonatech.com.ng/blog' />
      </Helmet>

      <div className='container-fluid blog-section'>
        <div className='text-content'>
          <h2>Blog</h2>
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
              <div className='row'>
                {isLoading ? (
                  currentPosts.map(item => {
                    // Safely parse category
                    let categories = item.category;
                    if (typeof categories === 'string') {
                      try {
                        categories = JSON.parse(categories);
                      } catch (err) {
                        categories = [categories];
                      }
                    }
                    categories = Array.isArray(categories) ? categories : [categories];

                    return (
                      <div className='col-md-12' key={item._id}>
                        <Link className='text-decoration-none text-dark' to={generateBlogLink(item, currentPage)}>
                          <div className='mt-4'>
                            <div className='row g-0 shim'>
                              <div
                                className='col-lg-7 col-md-5'
                                style={{ display: 'flex', justifyContent: 'center' }}
                              >
                                <div className='card border-0 myTab'>
                                  <img
                                    src={item.cloudinary_id}
                                    className='img-fluid blogsImg'
                                    alt={item.title}
                                  />
                                </div>
                              </div>
                              <div className='col-lg-5 col-md-7'>
                                <div className='ms-3'>
                                  <h6 className='fs-6 pb-3 pt-4'>
                                    {categories.join(', ')}
                                  </h6>
                                  <h5 className='pb-3' style={{ color: '#34548c' }}>
                                    <Link className='text-decoration-none blogTitle-' to={`${item.slug}/${item._id}`}>
                                      {item.title}
                                    </Link>
                                  </h5>
                                  <p
                                    className="fs-6 pb-4"
                                    dangerouslySetInnerHTML={{
                                      __html: DOMPurify.sanitize(
                                        (item.description ? item.description.slice(0, 150) : '').concat('...')
                                      ),
                                    }}
                                  ></p>
                                  <p className='fs-6'>
                                    {item.author} / {new Date(item.createdAt).toDateString()}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    );
                  })
                ) : (
                  <div className='d-flex justify-content-center my-5 py-5'>
                    <Loading />
                  </div>
                )}
              </div>
              <div className='mt-5'>
                <BlogPagination
                  totalPosts={data.length}
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
              <h5>Categories</h5>
              <ul className='list-unstyled mt-2'>
                <li>
                  <button
                    className={`buttons btn btn-outline-primary rounded-pill px-5 item ${activeItem === 'Item 1' ? 'active' : ''}`}
                    onClick={() => handleClick('Item 1')}
                  >
                    Blogs
                  </button>
                </li>
                <li>
                  <Link to={'/news'}>
                    <button
                      className={`buttons btn btn-outline-primary rounded-pill px-5 mt-1 item ${activeItem === 'Item 2' ? 'active' : ''}`}
                      onClick={() => handleClick('Item 2')}
                    >
                      News
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to={'/trends'}>
                    <button
                      className={`buttons btn btn-outline-primary rounded-pill px-5 mt-1 item ${activeItem === 'Item 3' ? 'active' : ''}`}
                      onClick={() => handleClick('Item 3')}
                    >
                      Trends
                    </button>
                  </Link>
                </li>
              </ul>

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

export default Blog;