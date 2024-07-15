import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import "./ProductDetails.css"

const ProductDetails =()=>{
    const { id } = useParams();
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const fetchProduct = async () => {
          try {
            const response = await fetch(`http://localhost:3001/products/${id}`);
            const data = await response.json();
            setProduct(data);
          } catch (error) {
            console.error('Error fetching products:', error);
          }
        };
    
        fetchProduct();
      }, );

    return(
        <>
         <div className="navMarg">
         <h1 >Products</h1>
        <h2>Details for the product information</h2>
        </div>
        </>
    )

}
export default ProductDetails;