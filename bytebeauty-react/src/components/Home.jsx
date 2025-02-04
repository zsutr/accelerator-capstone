import React, { useContext } from 'react';
import { ProductContext } from './ProductProvider';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const Home = ({ searchResults }) => {
  const products = useContext(ProductContext);
  const displayProducts = searchResults.length > 0 ? searchResults : products;

  if (!displayProducts || displayProducts.length === 0) {
    return <div>Loading...</div>; // You can customize the loading message
  }

  return (
    <div className="p-3">
      <h2 className="text-info">Welcome to ByteBeauty!</h2>
    
      <h4 className="text-info">Viewing All Products</h4>
      <hr class="bg-danger border-4 border-top border-info" />

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
            <Link to={`/products/${product.id}`} className="fs-6 text-dark font-weight-bold">{product.name}</Link>
            <p className="fst-italic">{product.brand}</p>
            <p>${product.price}0</p>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
