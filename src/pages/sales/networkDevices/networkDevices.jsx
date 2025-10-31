import { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import Pagination from '../../../components/Pagination/Pagination'
import { BASEURL } from '../../../BaseURL/BaseURL'
import Loading from '../../../components/Loading/Loading'
import axios from 'axios'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useCart } from 'react-use-cart'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './networkDevices.css'
import { Helmet } from 'react-helmet-async'
import NetworkFilter from './networkDevicesFilter'
import Slider from '@mui/material/Slider'

const NetworkDevices = () => {
  const [filters, setFilters] = useState({
    type: '',
    brand: '',
    portSpeed: '',
    price: [0, 1000000]
  })
  
  const [filteredProducts, setFilteredProducts] = useState([])
  const [brands, setBrands] = useState([])
  const [priceRange, setPriceRange] = useState([0, 1000000])
  const [defaultPriceRange, setDefaultPriceRange] = useState([0, 1000000])

  useEffect(() => {
    fetch(`${BASEURL}/api/v1/product/filter?category=Network`)
      .then(response => response.json())
      .then(data => {
        if (data.minPrice !== undefined && data.maxPrice !== undefined) {
          setDefaultPriceRange([data.minPrice, data.maxPrice])
          setPriceRange([data.minPrice, data.maxPrice])
          setFilters(prevFilters => ({
            ...prevFilters,
            price: [data.minPrice, data.maxPrice]
          }))
        }
        const reversedProducts = [...data.data].reverse(); 
        setFilteredProducts(reversedProducts);

        const uniqueBrands = Array.from(
          new Set(data.data.map(product => product.brand.toUpperCase().trim()))
        ).sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }))
        setBrands(uniqueBrands)
      })
      .catch(error => console.error('Error fetching initial data:', error))
  }, [])

  const resetPriceRange = () => {
    setPriceRange(defaultPriceRange)
    setFilters(prevFilters => ({
      ...prevFilters,
      price: defaultPriceRange
    }))
    applyFilters(defaultPriceRange)
  }

  const handleCheckboxChange = event => {
    const { name, value, checked } = event.target
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: checked ? value : ''
    }))
    applyFilters(filters)
  }

  const handlePriceChange = (event, newValue) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      price: newValue
    }))
  }

  const handleApplyClick = () => {
    applyFilters(filters)
  }

  const applyFilters = updatedFilters => {
    let queryParams = []
    if (updatedFilters.type) {
      queryParams.push(`type=${updatedFilters.type}`)
    }
    if (updatedFilters.brand) {
      queryParams.push(`brand=${encodeURIComponent(updatedFilters.brand)}`)
    }
    if (updatedFilters.portSpeed) {
      queryParams.push(
        `portSpeed=${updatedFilters.portSpeed.replace(/\D/g, '')}`
      )
    }
    if (updatedFilters.price[0] !== 0 || updatedFilters.price[1] !== 1000000) {
      queryParams.push(`minPrice=${updatedFilters.price[0]}`)
      queryParams.push(`maxPrice=${updatedFilters.price[1]}`)
    }

    const queryString = queryParams.length > 0 ? queryParams.join('&') : ''
    fetch(`${BASEURL}/api/v1/product/filter?category=Network&${queryString}`)
      .then(response => response.json())
      .then(data => {
        setFilteredProducts(data.data)
      })
      .catch(error => console.error('Error:', error))
  }

  const formatPrice = price => {
    return price.toLocaleString()
  }

  const handleInputPriceChange = (event, index) => {
    const value = event.target.value.replace(/[^0-9]/g, '')
    const newPrice = [...filters.price]
    newPrice[index] = parseFloat(value) || 0
    setFilters(prevFilters => ({
      ...prevFilters,
      price: newPrice
    }))
  }

  const [data, setData] = useState([])
  const [records, setRecords] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchParams, setSearchParams] = useSearchParams()
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(12)
  const [pageNumberLimit] = useState(4)
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(4)
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0)
  const [activeItem, setActiveItem] = useState('Item 6')
  const [noResultsMessage, setNoResultsMessage] = useState(false)

  const handleClick = item => {
    setActiveItem(item)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASEURL}/api/v1/product/`)
        const filtered = response.data.getAllProducts.filter(
          user => user.category === 'Network'
        )
        setData(filtered.reverse())
        setRecords(filtered)
        setIsLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error)
        setIsLoading(false)
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    const page = parseInt(searchParams.get('page') || '1', 10)
    setCurrentPage(page)
  }, [searchParams])

  useEffect(() => {
    if (filteredProducts.length > 0) {
      setRecords(filteredProducts)
      setNoResultsMessage(false)
    } else if (filteredProducts.length === 0 && !isLoading) {
      setRecords(data)
      setNoResultsMessage(false)
    }
  }, [filteredProducts, isLoading, data])

  const Filter = event => {
    const searchTerm = event.target.value.toLowerCase()
    setCurrentPage(1)
    setSearchParams({ page: '1' })

    if (searchTerm === '') {
      setFilteredProducts([])
      setNoResultsMessage(false)
    } else {
      const filtered = data.filter(product =>
        product.name.toLowerCase().includes(searchTerm)
      )
      setFilteredProducts(filtered)
      setNoResultsMessage(filtered.length === 0)
    }
  }

  const paginate = pageNumber => {
    setCurrentPage(pageNumber)
    setSearchParams({ page: pageNumber.toString() })
  }

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentPosts = records.slice(indexOfFirstItem, indexOfLastItem)

  const displayedProducts =
    currentPosts.length > 0 ? currentPosts : records.slice(0, itemsPerPage)

  const handleNextbtn = () => {
    const nextPage = currentPage + 1
    setCurrentPage(nextPage)
    setSearchParams({ page: nextPage.toString() })

    if (nextPage > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit)
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit)
    }
  }

  const handlePrevbtn = () => {
    const prevPage = currentPage - 1
    setCurrentPage(prevPage)
    setSearchParams({ page: prevPage.toString() })

    if ((prevPage - 1) % pageNumberLimit === 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit)
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit)
    }
  }

  const { addItem } = useCart()

  //=========================== Pop up message
  const [displayPopUp, setDisplayPopUp] = useState(true)

  const closePopUp = () => {
    localStorage.setItem('NetworkPopUp', true)
    setDisplayPopUp(false)
  }

  useEffect(() => {
    let returningUser = localStorage.getItem('NetworkPopUp')
    if (!returningUser) {
      toast.warn(
        'Please Note That Prices Are Subject to Change Without Prior Notice Due to The Fluctuation in Exchange Rate, Kindly Confirm Every Price at Readiness for Purchase',
        {
          position: 'top-center',
          autoClose: 20000,
          className: 'pop-up-message'
        },
        closePopUp()
      )
    }
  }, [])

  return (
    <>
      <Helmet>
        <title>Network Devices - Reliable Solutions for Seamless Connectivity & Performance</title>
        <meta name='description' content='Network Devices' />
        <link rel='canonical' href='https://elonatech.com.ng/network-devices' />
      </Helmet>

      {/* Header */}
      <div className='container-fluid network-devices-section'>
        <div className='text-content'>
          <h2>Network Devices</h2>
          <h5>
            Rely on Scalable and Reliable IT Infrastructure for Fast and
            Efficient Running of a Company’s Business
          </h5>
          <p className='lead'>
            Organization that uses more than one computer or software platform
            needs network hardware such as servers, routers, switches, etc. to
            connect & configure all the different systems together
          </p>
        </div>
      </div>

      <main className='container-fluid custom-container'>
        <div className='row g-0'>
          <div className='col-md-9'>
            <section className='ftco-section' id='skills-section'>
              <div className='container custom-container'>
                <div className='row justify-content-center pt-3 pb-4'>
                  <div className='col-md-8 pt-4'>
                    <h6>
                      SHOWING <span className='text-danger'>{currentPage}</span>{' '}
                      –{' '}
                      <span className='text-danger'>
                        {currentPage * itemsPerPage}
                      </span>{' '}
                      OF <span className='text-danger'>{records.length}</span>{' '}
                      RESULTS
                    </h6>
                  </div>
                  <div className='col-md-4 pt-3'>
                    <input
                      className='form-control'
                      type='search'
                      onChange={Filter}
                      placeholder='Search'
                      aria-label='Search'
                    />
                  </div>
                </div>

                <div className='row g-1 progress-circle'>
                  {isLoading ? (
                    <div className='container'>
                      <div className='row'>
                        <div className='col-md-12'>
                          <div className='d-flex justify-content-center'>
                            <div className='my-5 py-5'>
                              <Loading />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : noResultsMessage ? (
                    <h4>No products match your search criteria.</h4>
                  ) : (
                    displayedProducts.map(product => (
                      <div className='col-lg-3 mb-4' key={product.id}>
                        <div className='mx-1 shadow-lg p-3 bg-body rounded showbutton'>
                          <Link
                            className='text-decoration-none text-dark'
                            to={`/product/${product.slug}/${product._id}?fromPage=${currentPage}`}
                            state={{ from: window.location.pathname }}
                          >
                            <div className='text-center take'>
                              <LazyLoadImage
                                src={product.images[0]?.url}
                                placeholderSrc='https://res.cloudinary.com/elonatech/image/upload/v1710241889/loaderImage/blurred_o4delz.avif'
                                className='lazyload'
                                width='130'
                                height='130'
                                alt=''
                              />
                            </div>
                            <h5 className='fw-normal pt-3 product-name'>
                              {product.name.slice(0, 23)}...
                            </h5>
                            {/* <p className='lead fs-6'>{product.category}</p> */}
                            <p className='lead fs-6'>
                                {product.category === 'Network'
                                  ? 'Network Device'
                                  : product.category === 'Pos'
                                  ? 'POS' 
                                  : product.category}
                              </p>

                            {/* Star Rating */}
                            <div
                              className='stars'
                              style={{ color: 'black', marginBottom: '10px' }}
                            >
                              {[...Array(5)].map((star, index) => (
                                <i
                                  key={index}
                                  className={
                                    index < Math.floor(5)
                                      ? 'bi bi-star-fill'
                                      : 'bi bi-star'
                                  }
                                  style={{ color: '#f4be1d' }}
                                />
                              ))}
                            </div>

                            <div className='d-flex justify-content-between'>
                              <p className='mt-2 px-1 text-danger'>
                                <strong>
                                  ₦ {Number(product.price).toLocaleString()}.00
                                </strong>
                              </p>
                              <i
                                className='bi bi-cart p-1'
                                style={{ fontSize: '20px', cursor: 'pointer' }}
                              />
                            </div>
                          </Link>
                          <div className='d-grid gap-2'>
                            <div
                              className='btn btn-outline add-to-cart'
                              onClick={() => addItem(product)}
                            >
                              <h6 className='text-danger'>ADD TO CART</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>

                {/* Pagination */}
                <div className='mt-5'>
                  <Pagination
                    totalPosts={records.length}
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
            </section>
          </div>

          {/* Sidebar */}
          <div className='col-md-3 pad '>
            <div className='thix'>
              <div className='browse'>
              <form class='d-flex'></form>
                <h4 className='fw-bold tyu'>Browse Categories</h4>
                <ul className='list-unstyled'>
                  <li>
                    <Link
                      to={'/shop'}
                      className='text-dark'
                      style={{ textDecoration: 'none' }}
                      onMouseEnter={e =>
                        (e.currentTarget.style.textDecoration = 'underline')
                      }
                      onMouseLeave={e =>
                        (e.currentTarget.style.textDecoration = 'none')
                      }
                    >
                      All Products
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={'/computers'}
                      className='text-dark'
                      style={{ textDecoration: 'none' }}
                      onMouseEnter={e =>
                        (e.currentTarget.style.textDecoration = 'underline')
                      }
                      onMouseLeave={e =>
                        (e.currentTarget.style.textDecoration = 'none')
                      }
                    >
                      Computers
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={'/office-equipment'}
                      className='text-dark'
                      style={{ textDecoration: 'none' }}
                      onMouseEnter={e =>
                        (e.currentTarget.style.textDecoration = 'underline')
                      }
                      onMouseLeave={e =>
                        (e.currentTarget.style.textDecoration = 'none')
                      }
                    >
                      Office Equipment
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={'/pos-system'}
                      className='text-dark'
                      style={{ textDecoration: 'none' }}
                      onMouseEnter={e =>
                        (e.currentTarget.style.textDecoration = 'underline')
                      }
                      onMouseLeave={e =>
                        (e.currentTarget.style.textDecoration = 'none')
                      }
                    >
                      POS System
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={'/printers'}
                      className='text-dark'
                      style={{ textDecoration: 'none' }}
                      onMouseEnter={e =>
                        (e.currentTarget.style.textDecoration = 'underline')
                      }
                      onMouseLeave={e =>
                        (e.currentTarget.style.textDecoration = 'none')
                      }
                    >
                      Printers
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={'/network-devices'}
                      className={`item ${
                        activeItem === 'Item 6' ? 'active-category' : ''
                      }`}
                      onClick={() => handleClick('Item 6')}
                    >
                      Network Devices
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Filter by Price */}
              <div
                className='price-filter price-mobile1'
                style={{ marginTop: '0' }}
              >
                <h4 style={{ fontSize: '16px' }} className='fw-bold'>
                  Filter by Price(₦)
                </h4>
                <Slider
                  className='custom-slider slider'
                  value={filters.price}
                  onChange={handlePriceChange}
                  min={priceRange[0]}
                  max={priceRange[1]}
                  step={5}
                />
                <div className='price-range-values'>
                  <div>
                    <input
                      style={{ width: '100%', borderRadius: '5px' }}
                      type='text'
                      value={formatPrice(filters.price[0])}
                      onChange={e => handleInputPriceChange(e, 0)}
                      className='price-input'
                    />
                  </div>
                  <span className='separator'>-</span>
                  <div>
                    <input
                      style={{ width: '100%', borderRadius: '5px' }}
                      type='text'
                      value={formatPrice(filters.price[1])}
                      onChange={e => handleInputPriceChange(e, 1)}
                      className='price-input'
                    />
                  </div>
                </div>
                <div className='expand btnd'>
                  <button
                    type='button'
                    onClick={handleApplyClick}
                    className='apply-btn'
                    style={{ width: '100%' }}
                  >
                    Apply Price Range
                  </button>
                  <button
                    type='button'
                    onClick={resetPriceRange}
                    className='reset-btn'
                    style={{ width: '100%' }}
                  >
                    Reset Price Range
                  </button>
                </div>
              </div>
              </div>

              <div
                style={{
                  width: '60%',
                  display: isLoading === true ? 'none' : 'block'
                }}
                className='filter-section pt-2 rounded shadow-sm'
              >
                <h4 style={{ marginTop: '-8px' }} className='fw-bold shopyy'>
                  Sort Products by
                </h4>
                <NetworkFilter setFilteredProducts={setFilteredProducts} />
              </div>
            </div>
          </div>
      </main>
    </>
  )
}

export default NetworkDevices
