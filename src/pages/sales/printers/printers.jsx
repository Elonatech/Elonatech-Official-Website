import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Pagination from '../../../components/Pagination/Pagination';
import { BASEURL } from '../../../BaseURL/BaseURL';
import Loading from '../../../components/Loading/Loading';
import axios from 'axios';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useCart } from "react-use-cart";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrinterFilter from './printerFilter';
import "./printers.css"

const Printers = () => {
  const [data, setData] = useState([]);
  const [records, setRecords] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);
  const [pageNumberLimit] = useState(4);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(4);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);
  const [activeItem, setActiveItem] = useState("Item 5");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [noResultsMessage, setNoResultsMessage] = useState(false);

  const handleClick = (item) => {
    setActiveItem(item);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASEURL}/api/v1/product/`);
        const filtered = response.data.getAllProducts.filter(user => user.category === 'Printer');
        setData(filtered.reverse());
        setRecords(filtered);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const page = parseInt(searchParams.get('page') || '1', 10);
    setCurrentPage(page);
  }, [searchParams]);

  useEffect(() => {
    if (filteredProducts.length > 0) {
      setRecords(filteredProducts);
      setNoResultsMessage(false);
    } else if (filteredProducts.length === 0 && !isLoading) {
      setRecords(data);
      setNoResultsMessage(false);
    }
  }, [filteredProducts, isLoading, data]);

  const Filter = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setCurrentPage(1); // Reset to first page when filtering
    setSearchParams({ page: '1' }); // Update URL params

    if (searchTerm === "") {
      setFilteredProducts([]);
      setNoResultsMessage(false);
    } else {
      const filtered = data.filter((product) =>
        product.name.toLowerCase().includes(searchTerm)
      );

      setFilteredProducts(filtered);
      setNoResultsMessage(filtered.length === 0);
    }
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    setSearchParams({ page: pageNumber.toString() });
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPosts = records.slice(indexOfFirstItem, indexOfLastItem);
  
  // New variable to handle both filtered and unfiltered cases
  const displayedProducts = currentPosts.length > 0 ? currentPosts : records.slice(0, itemsPerPage);

  const handleNextbtn = () => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    setSearchParams({ page: nextPage.toString() });

    if (nextPage > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevbtn = () => {
    const prevPage = currentPage - 1;
    setCurrentPage(prevPage);
    setSearchParams({ page: prevPage.toString() });

    if ((prevPage - 1) % pageNumberLimit === 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  const { addItem } = useCart();

  // Pop up message 
  const [displayPopUp, setDisplayPopUp] = useState(true);

  const closePopUp = () => {
    localStorage.setItem("PrinterPopUp", true);
    setDisplayPopUp(false);
  };

  useEffect(() => {
    let returningUser = localStorage.getItem("PrinterPopUp");
    function showPopUp() {
      if(!returningUser) {
        toast.warn(
          "Please Note That Prices Are Subject to Change Without Prior Notice Due to The Fluctuation in Exchange Rate, Kindly Confirm Every Price at Readiness for Purchase",
          { position:"top-center", autoClose:20000, className: 'pop-up-message' },
          closePopUp()
        );
      }
    }
    setInterval(showPopUp(), 604800000);
  }, []);

  return (
    <>
      {/* Header */}
      <div className="container-fluid printers-section">
        <div className="text-content">
          <h2>Printers, Copiers and Scanners</h2>
          <h5>Printing has become a multi-faceted commercial offset and digital print facility</h5>
          <p className="lead">From home use to small businesses, and to large businesses, we've got all the best All-in-One printers you need.</p>
        </div>
      </div>

      <main className="container-fluid custom-container">
        <div className="row g-0">
          <div className="col-md-9">
            <section className="ftco-section" id="skills-section">
              <div className="container custom-container">
                <div className="row justify-content-center pt-3 pb-4">
                  <div className="col-md-8 pt-4">
                    <h6>
                      SHOWING <span className="text-danger">{currentPage}</span> –{" "}
                      <span className="text-danger">{currentPage * itemsPerPage}</span> OF{" "}
                      <span className="text-danger">{records.length}</span> RESULTS
                    </h6>
                  </div>
                  <div className="col-md-4 pt-3">
                    <input 
                      className="form-control" 
                      type="search" 
                      onChange={Filter} 
                      placeholder="Search" 
                      aria-label="Search"
                    />
                  </div>
                </div>

                <div className="row g-1 progress-circle">
                  {isLoading ? (
                    <div className="container">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="d-flex justify-content-center">
                            <div className="my-5 py-5">
                              <Loading />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : noResultsMessage ? (
                    <h4>No products match your search criteria.</h4>
                  ) : (
                    displayedProducts.map((product) => (
                      <div className="col-lg-3 mb-4" key={product.id}>
                        <div className="mx-1 shadow-lg p-3 bg-body rounded showbutton">
                          <Link 
                            className="text-decoration-none text-dark" 
                            to={`/product/${product._id}?fromPage=${currentPage}`}
                          >
                            <div className="text-center take">
                              <LazyLoadImage
                                src={product.images[0]?.url}
                                placeholderSrc="https://res.cloudinary.com/elonatech/image/upload/v1710241889/loaderImage/blurred_o4delz.avif"
                                className="lazyload"
                                width="130"
                                height="130"
                                alt=""
                              />
                            </div>
                            <h5 className="fw-normal pt-3 product-name">
                              {product.name.slice(0, 23)}...
                            </h5>
                            <p className="lead fs-6">{product.category}</p>
                            
                            {/* Star Rating */}
                            <div className="stars" style={{ color: "black", marginBottom: '10px' }}>
                              {[...Array(5)].map((star, index) => (
                                <i
                                  key={index}
                                  className={index < Math.floor(5) ? "bi bi-star-fill" : "bi bi-star"}
                                  style={{ color: "#f4be1d" }}
                                />
                              ))}
                            </div>
                            
                            <div className="d-flex justify-content-between">
                              <p className="mt-2 px-1 text-danger">
                                <strong>₦ {Number(product.price).toLocaleString()}.00</strong>
                              </p>
                              <i 
                                className="bi bi-cart p-1" 
                                style={{ fontSize: "20px", cursor: "pointer" }}
                              />
                            </div>
                          </Link>
                          <div className="d-grid gap-2">
                            <div 
                              className="btn btn-outline add-to-cart" 
                              onClick={() => addItem(product)}
                            >
                              <h6 className="text-danger">ADD TO CART</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>

                <div className="mt-5">
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
<div className="col-md-3">
            <div
              className="position-sticky"
              style={{ top: "2rem", marginTop: "20px" }}
            >
              <div
                style={{
                  marginTop: "50px",
                  paddingTop: "30px",
                  paddingBottom: "30px",
                  marginLeft: "5px"
                }}
              >
                <form
                  style={{
                    paddingTop: "20px",
                    paddingBottom: "20px"
                  }}
                  className="d-flex"
                ></form>
                <h4
                  style={{ marginTop: "-8px", marginBottom: "16px" }}
                  className="fw-bold"
                >
                  Browse Categories
                </h4>
                <ul className="list-unstyled">
                  <li>
                    <Link
                      to={"/shop"}
                      className="text-dark"
                      style={{ textDecoration: "none" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.textDecoration = "underline")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.textDecoration = "none")
                      }
                    >
                      All Products
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/computers"}
                      className="text-dark"
                      style={{ textDecoration: "none" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.textDecoration = "underline")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.textDecoration = "none")
                      }
                    >
                      Computers
                    </Link>

                  </li>

                  <li>
                    <Link
                      to={"/office-equipment"}
                      className="text-dark"
                      style={{ textDecoration: "none" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.textDecoration = "underline")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.textDecoration = "none")
                      }
                    >
                      Office Equipment
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/pos-system"}
                      className="text-dark"
                      style={{ textDecoration: "none" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.textDecoration = "underline")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.textDecoration = "none")
                      }
                    >
                      POS System
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/printers"}
                      className={`item ${activeItem === "Item 5" ? "active-category" : ""}`}
                      onClick={() => handleClick("Item 5")}
                    >
                      Printers
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/Network-devices"}
                      className="text-dark"
                      style={{ textDecoration: "none" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.textDecoration = "underline")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.textDecoration = "none")
                      }
                    >
                      Network Devices
                    </Link>
                  </li>
                </ul>
              </div>

              <div style={{ margin: "15px", width: "60%" }} className="filter-section p-2 rounded shadow-sm">
                  <h4 style={{ marginTop: "-8px", marginBottom: "16px" }} className="fw-bold">
                    Sort Products by
                  </h4>
                  <PrinterFilter setFilteredProducts={setFilteredProducts} />
                </div>
      </div>
</div>

</div>
</main> 
 {/* end */}
     </>
    );
}

export default Printers;
