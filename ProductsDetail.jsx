import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';




const Products = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);

  
  useEffect(() => {
  if (!id) return; // ✅ prevent undefined id

  const getProduct = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        `https://fakestoreapi.com/products/${id}`
      );

      if (!response.ok) {
        throw new Error("Product not found");
      }

      const data = await response.json(); // ✅ safe now
      setProduct(data);

    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  getProduct();
}, [id]);

  
const Loading = () => {
    return (
        <>
        <div className='col-md-6'>
          <Skeleton height={400}/>
        </div>
      <div className="col-md-6">
        <Skeleton width={300} height={50}/>
        <Skeleton height={70}/>
         <Skeleton height={70}/>

      </div>
        </>
    )
}
const ShowProduct = ()=>{
    return(
        <>
        <div className='col-md-6'>
            <img src={product.image} alt={product.title} height="420px" width="420px" />

        </div>
        <div className='col-md-6'>
            <h4 className='text-uppercase text-black-50'>
                {product.category}
            </h4>
            <h1 className='display-5'>{product.title}</h1>
            <p className='lead'>
                Rating {product.rating && product.rating.rate}
                <i className='fa fa fa-star'></i>
            </p>
            <h3 className='display-6 fw-bold my-4'>
              ${product.price}
            </h3>
            <p className='lead'>{product.description}</p>
            <button className='btn btn-outline-dark px-4 py-2'>
              Add to cart
            </button>
            <NavLink to="/cart" className="btn btn-dark ms-2 px-4 py-2">
              Go to Cart
            </NavLink>
            

        </div>
        </>
    )
}
  return (
    <div>
        <div className='container'>
            <div className='row'>
                {loading? <Loading/> : <ShowProduct/>}

            </div>

        </div>
      
    </div>
  );
};

export default Products;
