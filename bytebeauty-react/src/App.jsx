import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from "./components/Navigation";
import Home from './components/Home';
import ProductTypePage from './components/ProductType';
import Cart from './components/Cart'; // Create an empty Cart component
 
const App = () => {
  return (

<>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>

<Router>
<Navigation />
<Routes>
<Route path="/" element={<Home />} />
<Route path="/:type" element={<ProductTypePage />} />
<Route path="/cart" element={<Cart />} />
</Routes>
</Router>
</>
  );
};
 
export default App;