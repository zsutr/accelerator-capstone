import React, { useState } from "react";
import { NavLink , Link } from "react-router-dom";
import "./Navigation.css";
import Search from "./Search.jsx"
import { MdMenu } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";



const Navigation = ({setSearchResults}) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-info fs-5 text-light">
  <div className="container-fluid">
    
    <Link to="/" class="navbar-brand">
      <img src="/logo.png" alt="Bootstrap" width="300"/>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
    aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li className="nav-item me-2">
          <Link to="/" className="btn btn-md btn-outline-light" aria-current="page">Home</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="dropdown-toggle btn btn-outline-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           <MdMenu/> Shop By Category
          </a>
          <ul className="dropdown-menu">
          <div className="dropdown-content">
                    
                    <a>
                        <NavLink to="/categories/blush" className="nav__link">
                            Blush
                        </NavLink>
                    </a>
                    <a>
                        <NavLink to="/categories/mascara" className="nav__link" >
                            Mascara
                        </NavLink>
                    </a>
                    <a>
                        <NavLink to="/categories/eyebrow" className="nav__link">
                            Eyebrows
                        </NavLink>  
                    </a>
                    <a>
                        <NavLink to="/categories/eyeshadow" className="nav__link">
                            Eyeshadow
                        </NavLink>
                    </a>
                    <a> 
                        <NavLink to="/categories/lipstick" className="nav__link">
                            Lipstick
                        </NavLink>
                    </a>
                    <a>
                        <NavLink to="categories/foundation" className="nav__link">
                            Foundation
                        </NavLink>
                    </a>
                    </div>
          </ul>
        </li>
      </ul>
      <li className="d-flex" role="search">
        <Search setSearchResults={setSearchResults} />
      </li>
      <NavLink to="/cart" className="nav__cta">
        <FaShoppingCart />
      </NavLink>
    </div>
  </div>
</nav>
    
   </div>
 );
};

export default Navigation;
