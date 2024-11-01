import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Pagination from "./../../../components/Pagination/Pagination";
import { BASEURL } from "../../../BaseURL/BaseURL";
import Loading from "../../../components/Loading/Loading";
import axios from "axios";
import {
  LazyLoadImage,
  trackWindowScroll
} from "react-lazy-load-image-component";
import { useCart } from "react-use-cart";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet-async";
import "rc-slider/assets/index.css";
import ComputerFilter from "./computerFilter";
import "./computer.css"

const Computer = () => {
  const [data, setData] = useState([]);
  const [records, setRecords] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);
  const [pageNumberLimit, setpageNumberLimit] = useState(4);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(4);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [activeItem, setActiveItem] = useState("Item 2");
  const [noResultsMessage, setNoResultsMessage] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleClick = (item) => {
    setActiveItem(item);
  };

  const formatPrice = (price) => {
    return price.toLocaleString();
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${BASEURL}/api/v1/product/`);
        const filtered = response.data.getAllProducts.filter(user => user.category === 'Computer');
        setData(filtered.reverse());
        setRecords(filtered);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (filteredProducts.length > 0) {
      setRecords(filteredProducts);
      setNoResultsMessage(false);
    } else if (filteredProducts.length === 0 && isLoading) {
      setRecords([]);
      setNoResultsMessage(true);
    } else {
      setRecords(data);
      setNoResultsMessage(false);
    }
  }, [filteredProducts, isLoading, data]);

  useEffect(() => {
    const page = parseInt(searchParams.get('page') || '1', 10);
    setCurrentPage(page);
  }, [searchParams]);

  const Filter = (event) => {
    const searchTerm = event.target.value.toLowerCase();

    if (searchTerm === "") {
      setFilteredProducts([]);
      setNoResultsMessage(false);
    } else {
      const filtered = data.filter((product) =>
        product.name.toLowerCase().includes(searchTerm)
      );

      setFilteredProducts(filtered);

      if (filtered.length === 0) {
        setNoResultsMessage(true);
      } else {
        setNoResultsMessage(false);
      }
    }
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    setSearchParams({ page: pageNumber.toString() });
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPosts = records.slice(indexOfFirstItem, indexOfLastItem);

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

    if ((prevPage - 1) % pageNumberLimit == 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };
  const displayedProducts =
    currentPosts.length > 0 ? currentPosts : records.slice(0, itemsPerPage);

  const { addItem } = useCart();

  return (
    <>
      <Helmet>
        <title>Computers - Tech Solutions, Digital</title>
        <meta name="robots" content="index,follow" />
        <meta
          name="description"
          content="Shop through a wide selection of computers and laptops at Elonatech."
        />
        <link rel="canonical" href="/computers" />
        <meta
          name="keywords"
          content="computers, laptops, Elonatech"
        />
      </Helmet>

      <div class="container-fluid computers-section">
        <div class="text-content">
          <h2>Computers</h2>
          <h5>Have what you need to run your business with maximum efficiency and reliability</h5>
          <p class="lead">Properly used, a computer can help you become more organized, work more efficiently, and accomplish more tasks.</p>
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
                      SHOWING <span className="text-danger">{currentPage}</span>{" "}
                      –{" "}
                      <span className="text-danger">
                        {currentPage * itemsPerPage}
                      </span>{" "}
                      OF <span className="text-danger">{data.length}</span>{" "}
                      RESULTS
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
                    <Loading />
                  ) : displayedProducts.length > 0 ? (
                    displayedProducts.map((product) => {
                      return (
                        <div className="col-lg-3 mb-4" key={product.id}>
                          <div className="mx-1 shadow-lg p-3 bg-body rounded showbutton">
                            <Link 
                              className='text-decoration-none text-dark' 
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
                                {[...Array(5)].map((star, index) => {
                                  return (
                                    <i
                                      key={index}
                                      className={
                                        index < Math.floor(5)
                                          ? "bi bi-star-fill"
                                          : "bi bi-star"
                                      }
                                      style={{ color: "#f4be1d" }}
                                    ></i>
                                  );
                                })}
                              </div>
                              
                              <div className="d-flex justify-content-between">
                                <p className='mt-2 px-1 text-danger'>
                                  <strong>₦ {Number(product.price).toLocaleString()}.00</strong>
                                </p>
                                <i className="bi bi-cart p-1" style={{ fontSize: "20px", cursor: "pointer" }}></i>
                              </div>
                            </Link>
                            <div className="d-grid gap-2" key={product.id}>
                              <div className="btn btn-outline add-to-cart" onClick={() => addItem(product)}>
                                <h6 className='text-danger'>ADD TO CART</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <h4>No products match your search criteria.</h4>
                  )}
                </div>
                
                <div className="mt-5">
                  <Pagination
                    totalPosts={records.length}
                    itemsPerPage={itemsPerPage}
                    maxPageNumberLimit={maxPageNumberLimit}
                    minPageNumberLimit={minPageNumberLimit}
                    currentPage={currentPage}
                    id
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
                      className={`item ${activeItem === "Item 2" ? "active-category" : ""}`}
                      onClick={() => handleClick("Item 2")}
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
                      className="text-dark"
                      style={{ textDecoration: "none" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.textDecoration = "underline")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.textDecoration = "none")
                      }
                    >
                      Printers
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/network-devices"}
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
              <div
                style={{ margin: "1px", width: "60%" }}
                className="filter-section p-2 rounded shadow-sm"
              >
                <h4
                  style={{ marginTop: "-8px", marginBottom: "16px" }}
                  className="fw-bold"
                >
                  Sort Computers by
                </h4>
                <ComputerFilter setFilteredProducts={setFilteredProducts} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default trackWindowScroll(Computer);