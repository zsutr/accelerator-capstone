import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductTypePage = () => {
  const { type } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`http://localhost:3001/${type}`);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [type]);

  return (
    <div>
      <h1>{type.charAt(0).toUpperCase() + type.slice(1)} Products</h1>
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

export default ProductTypePage;
