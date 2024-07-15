import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from "./components/Navigation";
import Home from './components/Home';
import ProductTypePage from './components/ProductType';
import Cart from './components/Cart'; // Create an empty Cart component
import { ProductProvider } from './components/ProductProvider';
import ProductDetails from './components/ProductDetails';
 
const App = () => {
  const [searchResults, setSearchResults] = useState([]);

  return (

<>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
<ProductProvider>
<Router>
 <Navigation setSearchResults={setSearchResults} />
  <Routes>
    <Route path="/" element={<Home searchResults={searchResults}/>} />
    <Route path="/categories/:type" element={<ProductTypePage searchResults={searchResults} />}  />
    <Route path="/cart" element={<Cart />} />
    <Route path="/products/:id" element={<ProductDetails />} />
  </Routes>
</Router>
</ProductProvider>
</>
  );
};
 
export default App;