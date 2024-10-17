import "./computerFilter.css"; 
import React, { useState, useEffect } from "react";
import Slider from "@mui/material/Slider";
import { BASEURL } from "../../../BaseURL/BaseURL";
const ComputerFilter = ({ setFilteredProducts }) => {
  const [filters, setFilters] = useState({
    ram: "",
    brand: "",
    drive: "",
    price: [0, 1000000]
  });
  const [noResultsMessage, setNoResultsMessage] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000000]); 
  const [defaultPriceRange, setDefaultPriceRange] = useState([0, 1000000]); 
  const [filter, setFilter] = useState(null); 
  useEffect(() => {
    fetch(`${BASEURL}/api/v1/product/filter?category=Computer`)
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
const handlePriceRangeChange = (event, newValue) => {
  setPriceRange(newValue);
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
    if (updatedFilters.ram) {
      queryParams.push(`ram=${updatedFilters.ram.replace(/\D/g, "")}`);
    }
    if (updatedFilters.brand) {
      queryParams.push(
        `brand=${updatedFilters.brand.replace(/\s+/g, "").toLowerCase()}`
      );
    }
    if (updatedFilters.drive) {
      queryParams.push(`drive=${updatedFilters.drive.replace(/\D/g, "")}`);
    }
    if (
      updatedFilters.price[0] !== 0 || 
      updatedFilters.price[1] !== 1000000 
    ) {
      queryParams.push(`minPrice=${updatedFilters.price[0]}`);
      queryParams.push(`maxPrice=${updatedFilters.price[1]}`);
    }
    const queryString = queryParams.length > 0 ? queryParams.join("&") : "";
    fetch(`${BASEURL}/api/v1/product/filter?category=Computer&${queryString}`)
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
  const formatPrice2 = (price) => {
    return new Intl.NumberFormat().format(price);
  };
  return (
    <div>
      {noResultsMessage && (
        <div className="no-results-message">
          <p>{noResultsMessage}</p>
          <p>
            Go back to the <a href="/computers">Computer page</a> to explore
            more amazing products.
          </p>
        </div>
      )}
      <form>
        {/* RAM Filter */}
        <div
          style={{ boxShadow: "0px 1px 0px rgba(0, 0, 0, 0.1)" }}
          className="mb-3"
        >
          <label className="form-label">RAM:</label>
          <div className="form-check">
            <input
              type="checkbox"
              name="ram"
              value="4GB"
              onChange={handleCheckboxChange}
              checked={filters.ram === "4GB"}
              className="form-check-input"
            />
            <label className="form-check-label">4GB</label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              name="ram"
              value="8GB"
              onChange={handleCheckboxChange}
              checked={filters.ram === "8GB"}
              className="form-check-input"
            />
            <label className="form-check-label">8GB</label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              name="ram"
              value="16GB"
              onChange={handleCheckboxChange}
              checked={filters.ram === "16GB"}
              className="form-check-input"
            />
            <label className="form-check-label">16GB</label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              name="ram"
              value="32GB"
              onChange={handleCheckboxChange}
              checked={filters.ram === "32GB"}
              className="form-check-input"
            />
            <label className="form-check-label">32GB</label>
          </div>
        </div>
        {/* Brand Filter - Scrollable */}
<div
          style={{ boxShadow: "0px 1px 0px rgba(0, 0, 0, 0.1)" }}
          className="mb-3"
        >
          <label className="form-label">Brand:</label>
          <div style={{ maxHeight: "120px", overflowY: "scroll" }}>
            <div className="form-check">
              <input
                type="checkbox"
                name="brand"
                value="DELL"
                onChange={handleCheckboxChange}
                checked={filters.brand === "DELL"}
                className="form-check-input"
              />
              <label className="form-check-label">Dell</label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                name="brand"
                value="HP"
                onChange={handleCheckboxChange}
                checked={filters.brand === "HP"}
                className="form-check-input"
              />
              <label className="form-check-label">HP</label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                name="brand"
                value="Acer"
                onChange={handleCheckboxChange}
                checked={filters.brand === "Acer"}
                className="form-check-input"
              />
              <label className="form-check-label">Acer</label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                name="brand"
                value="Apple"
                onChange={handleCheckboxChange}
                checked={filters.brand === "Apple"}
                className="form-check-input"
              />
              <label className="form-check-label">Apple</label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                name="brand"
                value="Samsung"
                onChange={handleCheckboxChange}
                checked={filters.brand === "Samsung"}
                className="form-check-input"
              />
              <label className="form-check-label">Samsung</label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                name="brand"
                value="Lenovo"
                onChange={handleCheckboxChange}
                checked={filters.brand === "Lenovo"}
                className="form-check-input"
              />
              <label className="form-check-label">Lenovo</label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                name="brand"
                value="Huawei"
                onChange={handleCheckboxChange}
                checked={filters.brand === "Huawei"}
                className="form-check-input"
              />
              <label className="form-check-label">Huawei</label>
            </div>
          </div>
        </div>
        {/* Drive Filter */}
        <div
          style={{ boxShadow: "0px 1px 0px rgba(0, 0, 0, 0.1)" }}
          className="mb-3"
        >
          <label className="form-label">Drive:</label>
          <div className="form-check">
            <input
              type="checkbox"
              name="drive"
              value="256GB"
              onChange={handleCheckboxChange}
              checked={filters.drive === "256GB"}
              className="form-check-input"
            />
            <label className="form-check-label">256GB</label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              name="drive"
              value="500GB"
              onChange={handleCheckboxChange}
              checked={filters.drive === "500GB"}
              className="form-check-input"
            />
            <label className="form-check-label">500GB</label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              name="drive"
              value="512GB"
              onChange={handleCheckboxChange}
              checked={filters.drive === "512GB"}
              className="form-check-input"
            />
            <label className="form-check-label">512GB</label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              name="drive"
              value="1TB"
              onChange={handleCheckboxChange}
              checked={filters.drive === "1TB"}
              className="form-check-input"
            />
            <label className="form-check-label">1TB</label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              name="drive"
              value="2TB"
              onChange={handleCheckboxChange}
              checked={filters.drive === "2TB"}
              className="form-check-input"
            />
            <label className="form-check-label">2TB</label>
          </div>
        </div>
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
            renderThumb={(props, state) => (
              <div {...props} className="thumb">
                {/* Optional: Add content inside thumb */}
              </div>
            )}
            renderTrack={(props, state) => (
              <div {...props} className="track">
                {/* Optional: Customize track */}
              </div>
            )}
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
      </form>
    </div>
  );
};
export default ComputerFilter;





