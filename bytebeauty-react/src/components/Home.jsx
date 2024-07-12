import React, { useContext } from 'react';
import { ProductContext } from './ProductProvider'; // Adjust the import if the context is in a different file

const Home = () => {
  const products = useContext(ProductContext);

  if (!products || products.length === 0) {
    return <div>Loading...</div>; // You can customize the loading message
  }

  return (
    <div>
      <h1>Home</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product._id} className="product-card">
            <img
              src={product.image_link}
              alt={product.name}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/lippie.jpg';
              }}
            />
            <h2>{product.name}</h2>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
