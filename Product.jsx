import React, { useState, useEffect } from 'react';



import { NavLink } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';

const Product = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(false);

  

  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://fakestoreapi.com/products");
        const products = await res.json();
        setData(products);
        setFilter(products);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  const filterProduct = (cat) => {
    const updated = data.filter(item => item.category === cat);
    setFilter(updated);
  };

  const Loading = () => (
    <div className="col-md-3">
      <Skeleton height={300} />
    </div>
  );

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Latest Products</h2>

      <div className="buttons text-center mb-4">
        <button className="btn btn-outline-dark me-2" onClick={() => setFilter(data)}>All</button>
        <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("men's clothing")}>Men</button>
        <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("women's clothing")}>Women</button>
        <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("electronics")}>Electronics</button>
        <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("jewelery")}>Jewelry</button>
      </div>

      <div className="row">
        {loading
          ? <Loading />
          : filter.map(product => (
            <div className="col-md-3 mb-4" key={product.id}>
              <div className="card h-100 text-center">
                <img src={product.image} className="card-img-top" height="200" alt={product.title} />
                <div className="card-body">
                  <h5>{product.title.substring(0, 12)}</h5>
                  <p>${product.price}</p>
                  <NavLink to={`/products/${product.id}`} className="btn btn-primary">
                    Buy Now
                  </NavLink>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Product;
