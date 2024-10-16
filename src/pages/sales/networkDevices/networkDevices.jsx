
import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Pagination from '../../../components/Pagination/Pagination';
import { BASEURL } from '../../../BaseURL/BaseURL';
import Loading from '../../../components/Loading/Loading';
import axios from 'axios';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useCart } from "react-use-cart";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./networkDevices.css"
import { Helmet } from 'react-helmet-async';
import NetworkFilter from './networkDevicesFilter';




const NetworkDevices = () => {

  const [data, setData] = useState([]);
  const [records, setRecords] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);
  const [pageNumberLimit, setpageNumberLimit] = useState(4);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(4);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);
  const [activeItem, setActiveItem] = useState("Item 6");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [noResultsMessage, setNoResultsMessage] = useState(false);


  const handleClick = (item) => {
    setActiveItem(item);
  };
    
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`${BASEURL}/api/v1/product/`);
          const filtered = response.data.getAllProducts.filter(user => user.category === 'Network')
          setData(filtered.reverse());
          setRecords(filtered)
          setIsLoading(true);
        } catch (error) {
          console.error('Error fetching data:', error);
          setIsLoading(true);
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
  


    // add to cart
  const { addItem } = useCart();


  //=========================== Pop up message 
    const [displayPopUp, setDisplayPopUp] = useState(true);

    const closePopUp = () => {
      localStorage.setItem("NetworkPopUp", true);
      setDisplayPopUp(false);
    };
  
  
   useEffect(() => {
      let returningUser = localStorage.getItem("NetworkPopUp");
        function showPopUp() {
          if(!returningUser) {
            toast.warn("Please Note That Prices Are Subject to Change Without Prior Notice Due to The Fluctuation in Exchange Rate, Kindly Confirm Every Price at Readiness for Purchase",
            { position:"top-center", autoClose:20000 , className: 'pop-up-message'}, closePopUp())
          }
        }
      setInterval(showPopUp(), 604800000);
  
  }, []);
  
    

  
return (
    <>
    <Helmet>
       <title>Network Devices - Tech Solution, Digital Solution</title>
       <meta name="description" content="Network Devices" />
       <link rel="canonical" href="https://elonatech.com.ng/network-devices" />
   </Helmet>

{/* Header */}
<div class="container-fluid network-devices-section">
  <div class="text-content">
    <h2>Network Devices</h2>
    <h5></h5>
    <p class="lead"></p>
  </div>
</div>

{/* ================ */}
<main class="container-fluid">
<div class="row g-0 ">
<div class="col-md-9 ">
<section class="ftco-section" id="skills-section">
		<div class="container">
    <div class="row justify-content-center pt-3 pb-4">
        <div className="col-md-8 pt-4 ">
        <h6>SHOWING <span className='text-danger'>{currentPage}</span> – <span className='text-danger'>{ currentPage * itemsPerPage }</span> OF  <span className='text-danger'>{data.length}</span> RESULTS</h6>
        </div>
        <div className="col-md-4 pt-3">
        <input class="form-control" type="search" onChange={Filter} placeholder="Search" aria-label="Search"/>
        </div>
		</div>
			<div class="row g-1 progress-circle ">
{/*================================================ office equipment ===================================================*/}
        {isLoading ? (      
            currentPosts?.map((product) => {
              return(
                <div class="col-lg-3 mb-4" key={product.id}>
                <div class=" mx-1  shadow-lg p-3  bg-body rounded showbutton">
                <Link 
                  className='text-decoration-none text-dark' 
                  to={`/product/${product._id}?fromPage=${currentPage}`}
                >
                  <div className="text-center take">
                  <LazyLoadImage  src={product.images[0]?.url} placeholderSrc='https://res.cloudinary.com/elonatech/image/upload/v1710241889/loaderImage/blurred_o4delz.avif'  className="lazyload" width="130" height="130" alt=""/>
                  </div>
                 <h5 class="fw-normal pt-3">{product.name.slice(0,23)}...</h5>
                 <p className='lead fs-6'>{product.category}</p>
                 <div class="stars" style={{color:'black'}}>
                 <i class="bi bi-star-fill" style={{color:"#f4be1d"}}></i><i class="bi bi-star-fill" style={{color:"#f4be1d"}}></i><i class="bi bi-star-fill" style={{color:"#f4be1d"}}></i><i class="bi bi-star-fill" style={{color:"#f4be1d"}}></i><i class="bi bi-star-fill" style={{color:"#f4be1d"}}></i>
                 </div>
                  <div class="d-flex justify-content-between">
                 <p className='mt-2 px-1 text-danger'>₦ {Number(product.price).toLocaleString()}.00</p>
                 <i class="bi bi-cart p-1" style={{fontSize:"20px" , cursor:"pointer"}}></i>
                 </div>
                </Link>
                <div class="d-grid gap-2" key={product.id}>
                <div class="btn btn-outline" style={{backgroundColor:"#a9abae"}} onClick={() => addItem(product)}	><h6 className='text-danger'>ADD TO CART</h6></div>
                </div>
                </div>
               </div>
               
            )
              })
                  ) : (
                   
            <div className="container">
            <div className="row">
            <div className="col-md-12">
            <div className="d-flex justify-content-center">
            <div className='my-5 py-5'>
            <Loading  />
            </div>
            </div>
            </div>
            </div>
            </div>
            )}

 {/*============================================== Pagination ================================================*/}
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
                  marginLeft: "15px"
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
                      className={`item ${activeItem === "Item 6" ? "active-category" : ""}`}
                      onClick={() => handleClick("Item 6")}
                    >
                      Network Devices
                    </Link>
                  </li>
                </ul>
              </div>

              <div
                style={{ margin: "15px", width: "60%" }}
                className="filter-section p-2 rounded shadow-sm"
              >
                <h4
                  style={{ marginTop: "-8px", marginBottom: "16px" }}
                  className="fw-bold"
                >
                  Sort Product by
                </h4>
                <NetworkFilter setFilteredProducts={setFilteredProducts} />
              </div>

              </div>
</div>
</div>
</main> 
      
</>
);
}

export default NetworkDevices;
