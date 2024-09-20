import { useState, useEffect } from "react";
import { Link,useSearchParams } from "react-router-dom";
import ShopPagination from "./shopPagination/shopPagination";
import Pagination from "./../../../components/Pagination/Pagination";
import "./shop.css";
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
import ShopFilter from "./shopFilter"; 

const Shop = () => {
  const [data, setData] = useState([]);
  const [records, setRecords] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);
  const [pageNumberLimit, setpageNumberLimit] = useState(4);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(4);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [activeItem, setActiveItem] = useState("Item 1");
  const [noResultsMessage, setNoResultsMessage] = useState(false);
  const [isFiltering, setIsFiltering] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();

  const handleClick = (item) => {
    setActiveItem(item);
  };

  const formatPrice = (price) => {
    return price.toLocaleString(); // Adds commas to the number
  };

 useEffect(() => {
   const fetchData = async () => {
     setIsLoading(true);
     try {
       const response = await axios.get(`${BASEURL}/api/v1/product/filter/all`);
       const products = response.data.data.reverse();
        console.log(products)
       // Initially set all fetched products to both `data` and `records`
       setData(products);
       setRecords(products); // Show all products initially
       setIsLoading(false); // Stop loading state
     } catch (error) {
       console.error("Error fetching data:", error);
       setIsLoading(false);
     }
   };
   fetchData();
 }, []);

 useEffect(() => {
   if (filteredProducts.length > 0) {
     setRecords(filteredProducts); // Show filtered products
     setNoResultsMessage(false); // Don't show "No Results" message
     console.log(filteredProducts)
   } else if (filteredProducts.length === 0 && isFiltering) {
     setRecords([]); // Empty records if no products match the filter
     setNoResultsMessage(true); // Show the "No Results" message
   } else {
     // If not filtering or no search term, show all products
     setRecords(data);
     setNoResultsMessage(false);
   }
 }, [filteredProducts, isFiltering, data]);

 const Filter = (event) => {
   const searchTerm = event.target.value.toLowerCase();

   if (searchTerm === "") {
     // If the search input is cleared, show all products again
     setFilteredProducts([]);
     setIsFiltering(false); // No filter applied
     setNoResultsMessage(false);
   } else {
     const filtered = data.filter((product) =>
       product.name.toLowerCase().includes(searchTerm)
     );

     setFilteredProducts(filtered); // Set filtered products based on search term
     setIsFiltering(true); // Filtering is now applied

     // Trigger "No Results" message only if no matches are found
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


  // Add to cart
  const { addItem } = useCart();

  // Pop up message
  const [displayPopUp, setDisplayPopUp] = useState(true);

  const closePopUp = () => {
    localStorage.setItem("ToastPop", true);
    setDisplayPopUp(false);
  };

  useEffect(() => {
    let returningUser = localStorage.getItem("ToastPop");
    function showPopUp() {
      if (!returningUser) {
        toast.warn(
          "Please Note That Prices Are Subject to Change Without Prior Notice Due to The Fluctuation in Exchange Rate, Kindly Confirm Every Price at Readiness for Purchase",
          {
            position: "top-center",
            autoClose: 20000,
            className: "pop-up-message"
          },
          closePopUp()
        );
      }
    }
    setInterval(showPopUp(), 604800000);
  }, []);

  return (
    <>
      <Helmet>
        <title>Shop - Tech Solutions, Digital</title>
        <meta name="robots" content="index,follow" />
        <meta
          name="description"
          content="Shop through a wide selection of laptops, printers, office equipment, pos system, network devices products at Elonatech."
        />
        <link rel="canonical" href="/shop" />
        <meta
          name="keywords"
          content="printers, network devices, laptops, office equipment, pos system, Elonatech"
        />
      </Helmet>

      {/* Header Section */}
      <div
        className="container-fluid bg-secondary py-5"
        style={{
          height: "500px",
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://res.cloudinary.com/elonatech/image/upload/v1709811140/shopPage/shop_oby1yn.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover"
        }}
      >
        <div className="py-5 mt-5">
          <h2 className="mt-5 text-white text-center">Shop Products</h2>
          <h5 className="mt-4 text-white text-center">
            Get what you need to run your business
          </h5>
          <p className="lead text-white text-center">
            Smart business people need quality and reliable hardware, software,
            service, and support for the day to day running of their businesses
          </p>
        </div>
      </div>

      <main className="container-fluid">
        <div className="row g-0">
          <div className="col-md-9">
            <section className="ftco-section" id="skills-section">
              <div className="container">
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

                {/* Product Display or No Results */}
                <div className="row g-1 progress-circle">
                  {isLoading ? ( // Show the loader when isLoading is true
                    <Loading />
                  ) : displayedProducts.length > 0 ? (
                    displayedProducts.map((product) => {
                      return (
                        <div className="col-lg-3 mb-4" key={product.id}>
                          <div className="mx-1 shadow-lg p-3 bg-body rounded showbutton">
                            <Link
                              className="text-decoration-none text-dark"
                              to={`/product/${product._id}/${product.name
                                .split(" ")
                                .join("-")
                                .toLowerCase()}`}
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
                              <h5 className="fw-normal pt-3">
                                {product.name.slice(0, 23)}...
                              </h5>
                              <p className="lead fs-6">{product.category}</p>
                              <div className="stars" style={{ color: "black" }}>
                                <i
                                  className="bi bi-star-fill"
                                  style={{ color: "#f4be1d" }}
                                ></i>
                                <i
                                  className="bi bi-star-fill"
                                  style={{ color: "#f4be1d" }}
                                ></i>
                                <i
                                  className="bi bi-star-fill"
                                  style={{ color: "#f4be1d" }}
                                ></i>
                                <i
                                  className="bi bi-star-fill"
                                  style={{ color: "#f4be1d" }}
                                ></i>
                                <i
                                  className="bi bi-star-half"
                                  style={{ color: "#f4be1d" }}
                                ></i>
                              </div>
                              <p style={{ color: "red" }} className="lead fs-6">
                                ₦ {formatPrice(product.price)}
                              </p>
                            </Link>
                            <button
                              style={{ color: "red" }}
                              className="btn btn-outline-secondary btn-md w-100 rounded"
                              onClick={() => addItem(product)}
                            >
                              Add to cart
                            </button>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <h4>No products match your search criteria.</h4>
                  )}
                </div>
                {/*============================================== Pagination ================================================*/}
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
          <div class="col-md-3 ">
            {/* <
              class="position-sticky "
              style={{ top: "2rem", marginTop: "20px" }}
            > */}
            <div
              style={{
                marginTop: "50px",
                paddingTop: "30px",
                paddingBottom: "30px",

                marginLeft: "15px"
              }}
            >
              <form
                style={{
                  paddingTop: "20px",
                  paddingBottom: "20px"
                }}
                class="d-flex "
              ></form>
              <h4
                style={{ marginTop: "-8px", marginBottom: "16px" }}
                class="fw-bold "
              >
                Browse Categories
              </h4>
              <ul className="list-unstyled">
                <li>
                  <Link
                    to={"/shop"}
                    className={`item ${
                      activeItem === "Item 1" ? "active" : ""
                    }`}
                    onClick={() => handleClick("Item 1")}
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
            {/* <h1>filters</h1> */}
            <div
              style={{ margin: "15px", width: "60%" }}
              className="filter-section p-2 rounded shadow-sm"
            >
              <h4
                style={{ marginTop: "-8px", marginBottom: "16px" }}
                class="fw-bold "
              >
                Sort Computers by
              </h4>
              <ShopFilter setFilteredProducts={setFilteredProducts} />
            </div>
            {/* end */}
          </div>
        </div>
      </main>
    </>
  );
};

export default trackWindowScroll(Shop);