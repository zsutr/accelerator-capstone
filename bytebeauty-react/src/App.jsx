import React, { useState, useEffect, createContext, useContext } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from './components/Home';
import "./App.css"

// Create a context for products
const ProductContext = createContext();

// Create a provider component
const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:3001'); // Adjusted endpoint to fetch products
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <ProductContext.Provider value={products}>
            {children}
        </ProductContext.Provider>
    );
};

// Create a component to display the products
const ProductList = () => {
    const products = useContext(ProductContext);

    return (
      <Router>
        <div>< Navigation/></div>
        
        <div className="body"> 
            <h1>Products</h1>
            <div className="product-grid">
                {products.map((product, index) => (
                    <div key={product._id} className="product-card">
                        <img
                            src={product.image_link}
                            alt={product.name}
                            onError={(e) => {
                                console.error(`Error loading image for product ${product.name}`);
                                e.target.onerror = null; // Reset the event handler to prevent infinite loop
                                e.target.src = '/lippie.jpg'; // Replace with the path to your default image
                            }}
                            onLoad={() => console.log(`Image loaded successfully: ${product.image_link}`)} // Log when image successfully loads
                        />
                        <h2>{product.name}</h2>
                        <p>${product.price}</p>
                    </div>
                ))}
            </div>
        </div>
      </Router>
        
    );
};

// Main App component
const App = () => {
    return (
        <ProductProvider>
            <ProductList />
        </ProductProvider>
    );
};

export default App;
