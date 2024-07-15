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
            console.log("product: ", data)
          } catch (error) {
            console.error('Error fetching products:', error);
          }
        };
    
        fetchProduct();

      }, [id]);

    

    return(
        <>
         <div className="container navMarg">
            <div className="row">
                <div className="col-8">
                    <div className="container mx-auto justify-content-center">
                        <div className="text fw-bold fs-3" >{product.name}</div>
                        <div className="fs-5">By {product.brand} | $ {product.price} </div>
                        <div className="container  mw-50%">
                            <img className="mb-3"
                                src={product.image_link}
                                alt={product.name}
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = '/lippie.jpg';
                                }}
                            />
                        </div>
                        <a href="#" className="btn-lg btn-primary  mb-2">
                            Add To Cart
                        </a>
                        <div className="container my-4 mw-50" style={{width:'100%', height:'150px', overflowY:'auto', padding: '16px'}}>
                            <div className="fs-5">
                                Product Description
                            </div>
                            <div className="text-wrap fs-6 overflow-hidden">{product.description}</div>
                        </div>
                        
                    </div>
                </div>
                <div className="col-4">
                    <div className="fs-4"> Recommended Products </div>
                    

                    <div className="container border-1 mb-2">
                        
                        <div className="fs-5">Product Name</div>
                        <div>Product Image</div>
                        <div>Product Price</div>
                    </div>
                    
                    <div className="container mb-2">
                      
                        <div className="fs-5">Product Name</div>
                        <div>Product Image</div>
                        <div>Product Price</div>
                    </div>
                    <div className="container mb-2">
                      
                        <div className="fs-5">Product Name</div>
                        <div>Product Image</div>
                        <div>Product Price</div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )

}
export default ProductDetails;