import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from "./components/Navigation";
import Home from './components/Home';
import ProductTypePage from './components/ProductType';
import Cart from './components/Cart'; // Create an empty Cart component

const App = () => {
  return (
    
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:type" element={<ProductTypePage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default App;
