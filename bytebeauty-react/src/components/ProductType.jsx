import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const ProductTypePage = ({ searchResults }) => {
  const { type } = useParams();
  const [products, setProducts] = useState([]);
  const displayProducts = searchResults.length > 0 ? searchResults : products;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`http://localhost:3001/category/${type}`);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [type]);

  if (!displayProducts || displayProducts.length === 0) {
    return <div>Loading...</div>; // You can customize the loading message
  }

  return (
    <div>
      <h1>{type.charAt(0).toUpperCase() + type.slice(1)} Products</h1>
      <div className="product-grid">
        {displayProducts.map((product) => (
          <div key={product._id} className="card">
            <img className="card-img-top"
              src={product.image_link}
              alt={product.name}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/lippie.jpg';
              }}
            />
            <div className="card-body">
            <Link to={`/products/${product.id}`} className="fs-5 font-weight-bold">{product.name}</Link>
            <p>${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductTypePage;
