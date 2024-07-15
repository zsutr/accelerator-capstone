import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
import Search from "./Search.jsx"

const Navigation = () => {
  return (
    <div>
    <header className="header">
      <nav className="nav container">
        <NavLink to="/" className="nav__logo">
          ByteBeauty
        </NavLink>

       <div
         className="nav__menu"
         id="nav-menu">
         <ul className="nav__list">
           <li className="nav__item">
             <NavLink to="/" className="nav__link">
               Home
             </NavLink>
           </li>
         
           <li className="nav__item">
         
            <li class="dropdown">
                    <a href="javascript:void(0)" class="dropbtn">Shop by Category ⇩</a>
                    <div class="dropdown-content">
                    
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
                </li>
                </li>
            <li className="nav__item">
                <Search />
            </li>
            <li className="nav__item">
             <NavLink to="/cart" className="nav__cta">
               Shopping Cart
             </NavLink>
           </li>
         </ul>
       </div>
     </nav>
   </header>
   </div>
 );
};

export default Navigation;
