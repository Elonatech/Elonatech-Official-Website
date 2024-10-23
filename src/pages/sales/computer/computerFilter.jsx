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
  const [brands, setBrands] = useState([]);

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

        // Extract unique brands (case insensitive) and set them in state
        const uniqueBrands = Array.from(new Set(data.data.map(product => product.brand.toUpperCase().trim())))
          .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));
        setBrands(uniqueBrands);

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
          {/* Add other RAM options here */}
        </div>

        {/* Dynamic Brand Filter */}
        <div style={{ boxShadow: "0px 1px 0px rgba(0, 0, 0, 0.1)" }} className="mb-3">
          {/* <label className="form-label">Brand:</label> */}
          <div style={{ maxHeight: "120px", overflowY: "scroll" }}>
            {brands.length > 0 ? (
              brands.map((brand) => (
                <div className="form-check" key={brand}>
                  <input
                    type="checkbox"
                    name="brand"
                    value={brand}
                    onChange={handleCheckboxChange}
                    checked={filters.brand === brand}
                    className="form-check-input"
                  />
                  <label className="form-check-label">{brand}</label>
                </div>
              ))
            ) : (
              <p>No brands available</p>
            )}
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
          {/* Add other drive options here */}
        </div>

        {/* Price Filter */}
        <div className="price-filter">
          <label className="form-label">Filter by Price(₦)</label>
          <Slider
            className="custom-slider"
            value={filters.price}
            onChange={handlePriceChange}
            min={priceRange[0]}
            max={priceRange[1]}
            step={5}
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
          <button
            type="button"
            onClick={handleApplyClick}
            className="apply-btn"
            style={{ width: "100%" }}
          >
            Apply Price Range
          </button>
          <button
            type="button"
            onClick={resetPriceRange}
            className="reset-btn"
            style={{ width: "100%" }}
          >
            Reset Price Range
          </button>
        </div>
      </form>
    </div>
  );
};

export default ComputerFilter;
