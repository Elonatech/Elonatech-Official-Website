import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";
import "./error.css";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Error = () => {
  
 
  return (
    <>
      <Navbar />
      <Helmet>
        <title>Page Not Found</title>
        <meta
          name="description"
          content="Our Technical Support Team
          is composed of individuals that are familiar with the ins and outs of the device they are assigned to. They offer user-friendly assistance for individuals having technical problems with computer/electronic devices. With this knowledge, they are able to troubleshoot most problems that a user experiences. Technical support may be provided over the phone, through email, a live-chat interface or with a remote support solution."
        />
        <link
          rel="canonical"
          href="https://elonatech.com.ng/technical-support"
        />
      </Helmet>

      {/*======================================================== header ==============================================*/}
      <div class="container-fluid page-not-found-section">
        <div class="text-content">
          <h1>Page Not Found!!!</h1>
        </div>
      </div>


      <div
        style={{ minHeight: "500px", marginBottom: "50px" }}
        className="container d-flex justify-content-center align-items-center"
      >
        <div className="row text-center">
          <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
            <h1
              className="display-1 fw-bold"
              style={{
                fontSize: "10rem",
                fontWeight: "900",
                color:"rgb(17, 37, 61)"
              }}
            >
              404
            </h1>
            <p
              className="text-uppercase"
              style={{
                color: "#f56a07",
                fontWeight: "bold",
                letterSpacing: "2px"
              }}
            >
              Ooops.... <span className="text-muted"> page not found</span>
            </p>
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <Link to={"/shop"}>
              <button
                style={{
                  width: "100%",
                  backgroundColor: "rgb(17, 37, 61)",
                  color: "white"
                }}
                className="btn btn-lg mb-4"
              >
                {" "}
                Search More of Our Products
              </button>
            </Link>

            <div className="d-flex justify-content-center gap-2">
              <Link to={-1} class="btn btn-danger py-2 px-5">
                Previous Page
              </Link>

              <Link to={"/"} class="btn btn-danger  py-2 px-5">
                Go Home
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Error;



      