import React, { useState, useEffect } from "react";
import Slider from "@mui/material/Slider";
import { BASEURL } from "../../../BaseURL/BaseURL";

const NetworkFilter = ({ setFilteredProducts }) => {
  const [filters, setFilters] = useState({
    type: "",
    brand: "",
    portSpeed: "",
    price: [0, 1000000]
  });
  const [noResultsMessage, setNoResultsMessage] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000000]);
  const [defaultPriceRange, setDefaultPriceRange] = useState([0, 1000000]);

  useEffect(() => {
    fetch(`${BASEURL}/api/v1/product/filter?category=Network`)
      .then((response) => response.json())
      .then((data) => {
        if (data.minPrice !== undefined && data.maxPrice !== undefined) {
          const fetchedMinPrice = data.minPrice;
          const fetchedMaxPrice = data.maxPrice;
          setDefaultPriceRange([fetchedMinPrice, fetchedMaxPrice]);
          setPriceRange([fetchedMinPrice, fetchedMaxPrice]);
          setFilters((prevFilters) => ({
            ...prevFilters,
            price: [fetchedMinPrice, fetchedMaxPrice]
          }));
        }
        setFilteredProducts(data.data);
      })
      .catch((error) => console.error("Error fetching initial data:", error));
  }, [setFilteredProducts]);

  const resetPriceRange = () => {
    setPriceRange(defaultPriceRange);
    const updatedFilters = {
      ...filters,
      price: defaultPriceRange
    };
    setFilters(updatedFilters);
    applyFilters(updatedFilters);
  };

  const handleCheckboxChange = (event) => {
    const { name, value, checked } = event.target;
    setFilters((prevFilters) => {
      const updatedFilters = {
        ...prevFilters,
        [name]: checked ? value : ""
      };
      applyFilters(updatedFilters);
      return updatedFilters;
    });
  };

  const handlePriceChange = (event, newValue) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      price: newValue
    }));
  };

  const handleApplyClick = () => {
    applyFilters(filters);
  };

  const applyFilters = (updatedFilters) => {
    let queryParams = [];
    if (updatedFilters.type) {
      queryParams.push(`type=${updatedFilters.type.toLowerCase()}`);
    }
    if (updatedFilters.brand) {
      queryParams.push(`brand=${updatedFilters.brand.replace(/\s+/g, "").toLowerCase()}`);
    }
    if (updatedFilters.portSpeed) {
      queryParams.push(`portSpeed=${updatedFilters.portSpeed.replace(/\D/g, "")}`);
    }
    if (
      updatedFilters.price[0] !== 0 ||
      updatedFilters.price[1] !== 1000000
    ) {
      queryParams.push(`minPrice=${updatedFilters.price[0]}`);
      queryParams.push(`maxPrice=${updatedFilters.price[1]}`);
    }

    const queryString = queryParams.length > 0 ? queryParams.join("&") : "";
    fetch(`${BASEURL}/api/v1/product/filter?category=Network&${queryString}`)
      .then((response) => response.json())
      .then((data) => {
        setFilteredProducts(data.data);
      })
      .catch((error) => console.error("Error:", error));
  };

  const formatPrice = (price) => {
    return price.toLocaleString();
  };

  const handleInputPriceChange = (event, index) => {
    const value = event.target.value.replace(/[^0-9]/g, "");
    const newPrice = [...filters.price];
    newPrice[index] = parseFloat(value) || 0;
    setFilters((prevFilters) => ({
      ...prevFilters,
      price: newPrice
    }));
  };

  return (
    <div>
      {noResultsMessage && (
        <div className="no-results-message">
          <p>{noResultsMessage}</p>
          <p>
            Go back to the <a href="/network-devices">Network Devices page</a> to explore
            more amazing products.
          </p>
        </div>
      )}
      <form>
        {/* Type Filter */}
        {/* <div style={{ boxShadow: "0px 1px 0px rgba(0, 0, 0, 0.1)" }} className="mb-3">
          <label className="form-label">Type:</label>
          <div className="form-check">
            <input
              type="checkbox"
              name="type"
              value="Router"
              onChange={handleCheckboxChange}
              checked={filters.type === "Router"}
              className="form-check-input"
            />
            <label className="form-check-label">Router</label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              name="type"
              value="Switch"
              onChange={handleCheckboxChange}
              checked={filters.type === "Switch"}
              className="form-check-input"
            />
            <label className="form-check-label">Switch</label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              name="type"
              value="AccessPoint"
              onChange={handleCheckboxChange}
              checked={filters.type === "AccessPoint"}
              className="form-check-input"
            />
            <label className="form-check-label">Access Point</label>
          </div>
        </div> */}

        {/* Brand Filter */}
        <div style={{ boxShadow: "0px 1px 0px rgba(0, 0, 0, 0.1)" }} className="mb-3">
          {/* <label className="form-label">Brand:</label> */}
          <div style={{ maxHeight: "120px", overflowY: "scroll" }}>
            <div className="form-check">
              <input
                type="checkbox"
                name="brand"
                value="Cisco"
                onChange={handleCheckboxChange}
                checked={filters.brand === "Cisco"}
                className="form-check-input"
              />
              <label className="form-check-label">Cisco</label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                name="brand"
                value="TP-Link"
                onChange={handleCheckboxChange}
                checked={filters.brand === "TP-Link"}
                className="form-check-input"
              />
              <label className="form-check-label">TP-Link</label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                name="brand"
                value="Netgear"
                onChange={handleCheckboxChange}
                checked={filters.brand === "Netgear"}
                className="form-check-input"
              />
              <label className="form-check-label">Netgear</label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                name="brand"
                value="D-Link"
                onChange={handleCheckboxChange}
                checked={filters.brand === "D-Link"}
                className="form-check-input"
              />
              <label className="form-check-label">D-Link</label>
            </div>
          </div>
        </div>

        {/* Port Speed Filter */}
        {/* <div style={{ boxShadow: "0px 1px 0px rgba(0, 0, 0, 0.1)" }} className="mb-3">
          <label className="form-label">Port Speed:</label>
          <div className="form-check">
            <input
              type="checkbox"
              name="portSpeed"
              value="100Mbps"
              onChange={handleCheckboxChange}
              checked={filters.portSpeed === "100Mbps"}
              className="form-check-input"
            />
            <label className="form-check-label">100Mbps</label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              name="portSpeed"
              value="1Gbps"
              onChange={handleCheckboxChange}
              checked={filters.portSpeed === "1Gbps"}
              className="form-check-input"
            />
            <label className="form-check-label">1Gbps</label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              name="portSpeed"
              value="10Gbps"
              onChange={handleCheckboxChange}
              checked={filters.portSpeed === "10Gbps"}
              className="form-check-input"
            />
            <label className="form-check-label">10Gbps</label>
          </div>
        </div> */}

        {/* Price Filter */}
        <div className="price-filter">
          <label className="form-label">
            Filter by Price(₦)
          </label>
          <Slider
            className="custom-slider"
            value={filters.price}
            onChange={handlePriceChange}
            min={priceRange[0]}
            max={priceRange[1]}
            step={5}
            pearling
          />
          <div className="price-range-values">
            <input
              style={{ width: "50%", borderRadius: "5px" }}
              type="text"
              value={formatPrice(filters.price[0])}
              onChange={(e) => handleInputPriceChange(e, 0)}
              className="price-input"
            />
            <span className="separator">-</span>
            <input
              style={{ width: "50%", borderRadius: "5px" }}
              type="text"
              value={formatPrice(filters.price[1])}
              onChange={(e) => handleInputPriceChange(e, 1)}
              className="price-input"
            />
          </div>
        </div>
        <div className="expand">
          <button type="button" onClick={handleApplyClick} className="apply-btn" style={{ width: "100%" }}>
            Apply Price Range
          </button>
          <button type="button" onClick={resetPriceRange} className="reset-btn" style={{ width: "100%" }}>
            Reset Price Range
          </button>
        </div>
      </form>
      <style jsx>{`
        .shop-filter {
          margin-bottom: 1rem;
        }
        .price-filter {
          margin-top: 1rem;
        }
        .slider {
          margin: 10px 0;
        }
        .price-range-values {
          display: flex;
          justify-content: space-between;
        }
        .apply-btn,
        .reset-btn {
          margin: 5px;
          padding: 5px 10px;
          cursor: pointer;
          border: none;
          border-radius: 5px;
        }
        .apply-btn {
          background-color: rgb(52, 84, 140);
          color: white;
        }
        .reset-btn {
          background-color: rgb(220, 53, 69);
          color: white;
        }
        .no-products-message {
          color: red;
          font-size: 18px;
          margin-top: 20px;
        }
      `}</style>
    </div>
  );
};

export default NetworkFilter;