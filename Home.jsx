import React from 'react'
import Product from './Product'   // make sure this path is correct

const Home = () => {
  return (
    <div className="hero">
      <div className="card text-bg-dark">
        <img
          src="https://images.pexels.com/photos/5868127/pexels-photo-5868127.jpeg"
          className="card-img"
          alt="banner"
          style={{ height: '1000px', objectFit: 'cover' }}
        />

        <div className="card-img-overlay d-flex flex-column justify-content">
          <h5 className="card-title display-3 fw-bolder mb-0">
            New Season Arrivals
          </h5>

          <p className="card-text lead fs-2">
            CHECK OUT ALL THE BRANDS
          </p>

          <p className="card-text">
            <small>SALE-SALE-SALE</small>
          </p>
        </div>
      </div>

      <Product />
    </div>
  )
}

export default Home
