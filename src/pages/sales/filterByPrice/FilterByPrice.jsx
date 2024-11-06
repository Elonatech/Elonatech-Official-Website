import React, { useState, useEffect } from 'react'
import 'react-toastify/dist/ReactToastify.css'
import 'rc-slider/assets/index.css'
import './filterByPrice.css'

import { BASEURL } from '../../../BaseURL/BaseURL'
import axios from 'axios'
import 'react-toastify/dist/ReactToastify.css'
import 'rc-slider/assets/index.css'
import Slider from '@mui/material/Slider'

const FilterByPrice = () => {
  const [filters, setFilters] = useState({
    brand: [],
    price: [0, 1000000000]
  })

  const [brands, setBrands] = useState([])
  const [defaultPriceRange, setDefaultPriceRange] = useState([0, 1000000000])
  const [priceRange, setPriceRange] = useState([0, 1000000000])

  useEffect(() => {
    axios
      .get(`${BASEURL}/api/v1/product/brand`)
      .then(response => {
        if (response.data.success) {
          const { brands: fetchedBrands, minPrice, maxPrice } = response.data

          // Normalize, remove duplicates, and convert to uppercase
          const normalizedBrands = fetchedBrands.map(brand =>
            brand.trim().toUpperCase()
          )
          const uniqueBrands = [...new Set(normalizedBrands)]

          setBrands(uniqueBrands)
          setDefaultPriceRange([minPrice, maxPrice])
          setPriceRange([minPrice, maxPrice])
        }
      })
      .catch(error => {
        console.error('Error fetching brands:', error)
      })
  }, [])

  const resetBrands = async () => {
    // Clear the selected brands
    setFilters(prevFilters => ({
      ...prevFilters,
      brand: []
    }))

    // Clear filtered products
    setFilteredProducts([])
  }

  const handleInputChange = (e, index) => {
    const rawValue = e.target.value.replace(/,/g, '') // Remove commas

    // If the input is empty, set the value to an empty string
    if (rawValue === '') {
      const updatedPriceRange = [...priceRange]
      updatedPriceRange[index] = '' // Or use null if you prefer
      setPriceRange(updatedPriceRange)
      return
    }

    // Convert to number and handle invalid cases
    const newValue = Number(rawValue)

    // Only update if it's a valid number
    if (!isNaN(newValue)) {
      const updatedPriceRange = [...priceRange]
      updatedPriceRange[index] = newValue
      setPriceRange(updatedPriceRange)
    }
  }

  const applyPriceFilter = async () => {
    setFilters(prevFilters => ({ ...prevFilters, price: priceRange }))
    await applyFilters(filters.brand, priceRange)
  }

  const resetPriceRange = () => {
    setPriceRange(defaultPriceRange)
    setFilters(prevFilters => ({ ...prevFilters, price: defaultPriceRange }))
    setFilteredProducts([])
  }

  const applyFilters = async (brands, price) => {
    try {
      const formattedBrands = brands
        .map(brand => brand.trim().toUpperCase())
        .join(',')

      const params = {
        brand: formattedBrands || undefined
      }

      // If the user has specified a price range, add it to the query
      if (
        price[0] !== defaultPriceRange[0] ||
        price[1] !== defaultPriceRange[1]
      ) {
        params.minPrice = price[0]
        params.maxPrice = price[1]
      }

      const response = await axios.get(`${BASEURL}/api/v1/product/filter/all`, {
        params
      })

      if (response.data.success) {
        setFilteredProducts(response.data.data)
      }
    } catch (error) {
      console.error('Error filtering products:', error)
    }
  }

  const handlePriceRangeChange = (event, newValue) => {
    setPriceRange(newValue)
  }

  return (
    // <div>

    // </div>

    <div className='price-filter price-mobile1'>
      <div className='fw-bold'>Filter by Price(₦)</div>
      <div className='sliding'>
        <Slider
          className='slider'
          // size="small"
          value={priceRange}
          min={defaultPriceRange[0]}
          max={defaultPriceRange[1]}
          step={50}
          onChange={handlePriceRangeChange}
          pearling
          minDistance={10}
        />
      </div>
      <div className='price-range-values'>
        <div style={{ width: '100%' }}>
          <input
            style={{ width: '100%', borderRadius: '5px' }}
            type='text'
            value={
              priceRange[0] !== undefined ? priceRange[0].toLocaleString() : ''
            }
            onChange={e => handleInputChange(e, 0)}
            className='price-input'
          />
        </div>
        <span className='separator'>-</span>
        {/* <GoDash className='dash' /> */}
        <div>
          <input
            style={{ width: '100%', borderRadius: '5px' }}
            type='text'
            value={
              priceRange[1] !== undefined ? priceRange[1].toLocaleString() : ''
            }
            onChange={e => handleInputChange(e, 1)}
            className='price-input'
          />
        </div>
      </div>
      <div className='btnx'>
        <button
          style={{ width: '100%' }}
          onClick={applyPriceFilter}
          className='apply-btn'
        >
          Apply Price Range
        </button>
        <button
          style={{ width: '100%' }}
          onClick={resetPriceRange}
          className='reset-btn'
        >
          Reset Price Range
        </button>
      </div>
    </div>
  )
}

export default FilterByPrice
