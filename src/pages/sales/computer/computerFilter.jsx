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
  const [rams, setRams] = useState([]); 
  const [drives, setDrives] = useState([]); 

  // Normalize RAM values
  const normalizeRam = (ramString) => {
    if (!ramString) return null;
    
    // Convert to uppercase and remove extra spaces
    const ram = ramString.toUpperCase().trim();
    
    // Extract the number and standardize format
    const match = ram.match(/(\d+)\s*(?:GB|G)?/i);
    if (match) {
      const number = match[1];
      return `${number}GB RAM`;
    }
    return null;
  };

  // Normalize Drive values
  const normalizeDrive = (driveString) => {
    if (!driveString) return null;
    
    // Convert to uppercase and remove extra spaces
    const drive = driveString.toUpperCase().trim();
    
    // Handle special cases first
    if (drive.includes('PCIE') || drive.includes('RAM,')) {
      return null;
    }
    
    // Extract capacity and type
    const matchSSD = drive.match(/(\d+)\s*(?:GB|G|TB|T)?\s*(?:SSD)?/i);
    const matchHDD = drive.match(/(\d+)\s*(?:GB|G|TB|T)?\s*(?:HDD)?/i);
    
    if (matchSSD || matchHDD) {
      const match = matchSSD || matchHDD;
      const number = parseInt(match[1]);
      const isTerabyte = drive.includes('TB') || drive.includes('T');
      const capacityGB = isTerabyte ? number * 1024 : number;
      
      // Validate capacity ranges
      // SSDs: typically 128GB to 4TB (4096GB)
      // HDDs: typically 500GB to 18TB (18432GB)
      const type = drive.includes('HDD') ? 'HDD' : 'SSD';
      
      if (type === 'SSD' && (capacityGB < 128 || capacityGB > 4096)) {
        return null;
      }
      if (type === 'HDD' && (capacityGB < 500 || capacityGB > 18432)) {
        return null;
      }
      
      // Format the output
      if (capacityGB >= 1024) {
        return `${(capacityGB / 1024)}TB ${type}`;
      }
      return `${capacityGB}GB ${type}`;
    }
    
    return null;
  };

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

        // Extract and normalize unique brands
        const uniqueBrands = Array.from(new Set(data.data
          .map(product => product.brand.toUpperCase().trim())))
          .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));
        setBrands(uniqueBrands);

        // Extract and normalize unique RAMs
        const uniqueRams = Array.from(new Set(data.data
          .filter(product => product.computerProperty && 
                           product.computerProperty[0] && 
                           product.computerProperty[0].ram)
          .map(product => normalizeRam(product.computerProperty[0].ram))
          .filter(ram => ram !== null))) // Remove null values
          .sort((a, b) => {
            // Sort by RAM size numerically
            const aSize = parseInt(a.match(/\d+/)[0]);
            const bSize = parseInt(b.match(/\d+/)[0]);
            return aSize - bSize;
          });
        setRams(uniqueRams);

        // Extract and normalize unique drives
        const uniqueDrives = Array.from(new Set(data.data
          .filter(product => product.computerProperty && 
                           product.computerProperty[0] && 
                           product.computerProperty[0].drive)
          .map(product => normalizeDrive(product.computerProperty[0].drive))
          .filter(drive => drive !== null))) // Remove null values
          .sort((a, b) => {
            // Sort by drive size and type
            const aMatch = a.match(/(\d+)(TB|GB)/);
            const bMatch = b.match(/(\d+)(TB|GB)/);
            if (aMatch && bMatch) {
              const aSize = parseInt(aMatch[1]) * (aMatch[2] === 'TB' ? 1000 : 1);
              const bSize = parseInt(bMatch[1]) * (bMatch[2] === 'TB' ? 1000 : 1);
              return aSize - bSize;
            }
            return a.localeCompare(b);
          });
        setDrives(uniqueDrives);

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

        {/* Brand Filter */}
        <div style={{ boxShadow: "0px 1px 0px rgba(0, 0, 0, 0.1)" }} className="mb-3">
          <label className="form-label">Brand:</label>
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

        {/* RAM Filter */}
        <div
          style={{ boxShadow: "0px 1px 0px rgba(0, 0, 0, 0.1)" }}
          className="mb-3"
        >
          <label className="form-label">RAM:</label>
          <div style={{ maxHeight: "120px", overflowY: "scroll" }}>
            {rams.length > 0 ? (
              rams.map((ram) => (
                <div className="form-check" key={ram}>
                  <input
                    type="checkbox"
                    name="ram"
                    value={ram}
                    onChange={handleCheckboxChange}
                    checked={filters.ram === ram}
                    className="form-check-input"
                  />
                  <label className="form-check-label">{ram}</label>
                </div>
              ))
            ) : (
              <p>No RAM options available</p>
            )}
          </div>
        </div>

        {/* Drive Filter */}
        <div
          style={{ boxShadow: "0px 1px 0px rgba(0, 0, 0, 0.1)" }}
          className="mb-3"
        >
          <label className="form-label">Drive:</label>
          <div style={{ maxHeight: "120px", overflowY: "scroll" }}>
            {drives.length > 0 ? (
              drives.map((drive) => (
                <div className="form-check" key={drive}>
                  <input
                    type="checkbox"
                    name="drive"
                    value={drive}
                    onChange={handleCheckboxChange}
                    checked={filters.drive === drive}
                    className="form-check-input"
                  />
                  <label className="form-check-label">{drive}</label>
                </div>
              ))
            ) : (
              <p>No drive options available</p>
            )}
          </div>
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
