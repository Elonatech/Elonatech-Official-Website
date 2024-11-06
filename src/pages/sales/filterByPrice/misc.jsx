<>
  <div className='thix'>
    <div className='browse'>
      <form class='d-flex'></form>
      <div class='fw-bold tyu'>Browse Categories</div>
      <ul className='list-unstyled'>
        <li>
          <Link
            to={'/shop'}
            className={`item ${
              activeItem === 'Item 1' ? 'active-category' : ''
            }`}
            onClick={() => handleClick('Item 1')}
          >
            All Products
          </Link>
        </li>

        <li>
          <Link
            to={'/computers'}
            className='text-dark'
            style={{ textDecoration: 'none' }}
            onMouseEnter={e =>
              (e.currentTarget.style.textDecoration = 'underline')
            }
            onMouseLeave={e => (e.currentTarget.style.textDecoration = 'none')}
          >
            Computers
          </Link>
        </li>
        <li>
          <Link
            to={'/office-equipment'}
            className='text-dark'
            style={{ textDecoration: 'none' }}
            onMouseEnter={e =>
              (e.currentTarget.style.textDecoration = 'underline')
            }
            onMouseLeave={e => (e.currentTarget.style.textDecoration = 'none')}
          >
            Office Equipment
          </Link>
        </li>
        <li>
          <Link
            to={'/pos-system'}
            className='text-dark'
            style={{ textDecoration: 'none' }}
            onMouseEnter={e =>
              (e.currentTarget.style.textDecoration = 'underline')
            }
            onMouseLeave={e => (e.currentTarget.style.textDecoration = 'none')}
          >
            POS System
          </Link>
        </li>
        <li>
          <Link
            to={'/printers'}
            className='text-dark'
            style={{ textDecoration: 'none' }}
            onMouseEnter={e =>
              (e.currentTarget.style.textDecoration = 'underline')
            }
            onMouseLeave={e => (e.currentTarget.style.textDecoration = 'none')}
          >
            Printers
          </Link>
        </li>
        <li>
          <Link
            to={'/network-devices'}
            className='text-dark'
            style={{ textDecoration: 'none' }}
            onMouseEnter={e =>
              (e.currentTarget.style.textDecoration = 'underline')
            }
            onMouseLeave={e => (e.currentTarget.style.textDecoration = 'none')}
          >
            Network Devices
          </Link>
        </li>
      </ul>
    </div>

    {/* Filter by Price */}
    <FilterByPrice />
  </div>

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
</>
