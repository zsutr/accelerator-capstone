import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import "./ProductDetails.css"


const ProductDetails =()=>{
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [recc, setRecc] = useState([])

    useEffect(() => {
        const fetchProduct = async () => {
          try {
            const response = await fetch(`http://localhost:3001/products/${id}`);
            const data = await response.json();
            setProduct(data);
            //console.log("product: ", data)
          } catch (error) {
            console.error('Error fetching products:', error);
          }
        };
    
        fetchProduct();
    }, [id]);


      let price = product.price;
      let popularity = product.popularity;
      let durability = product.durability;
      console.log("inputs: ", price, popularity, durability)

    useEffect(() => {
      const reccData = async () => {
        console.log("Posting data", {price, durability, popularity});
        if(!price){
            return;
        }
        try {
            const requestReccs = await fetch('http://localhost:5000/recommend', {
                'method' : 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify({price, popularity, durability})
        });
        const res = await requestReccs.json();
        console.log("RESPONSE:" , res);
        setRecc(res)

        } catch (error) {
            console.error(error);
        }
    };

    reccData();

    }, [price, durability, popularity]);

    console.log(recc)
        
    return(
        
        <>
         <div className="container p-3">
            <div className="row">
                <div className="col-8 mr-4 table-bordered">
                    <div className="container mx-auto justify-content-center">
                        <div className="text fw-bold fs-3" >{product.name}</div>
                        <div className="fs-5">By {product.brand} | $ {product.price}0 </div>
                        <hr class="bg-danger border-4 border-top border-info" />

                        <div className="container  mw-50%">
                            <img className="mb-3 mw-100" 
                                src={product.image_link}
                                alt={product.name}
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = '/makeup.png';
                                }}
                            />
                        </div>
                        <a href="#" className="btn-lg btn-info  mb-2">
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
                
                <div className="col-sm-3">
                    <div className="fs-5 text-info"> Recommended Product </div>
                    <hr class="bg-danger border-4 border-top border-info" />


                    <div key={recc._id} className="card p-0">
                        <img className="card-img-top"
                        src={recc.image_link}
                        alt={recc.name}
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = '/makeup.png';
                        }}
                        />
                        <div className="card-body">
                        <Link to={`/products/${recc.id}`} className="fs-6 text-dark font-weight-bold">{recc.name}</Link>
                        <p>${recc.price}0</p>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </div>
        </>
    )
};

export default ProductDetails;