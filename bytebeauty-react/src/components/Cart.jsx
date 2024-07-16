import React from "react";

const Cart =()=>{
    console.log("SHOPPOMGGG CARTTTT");
    return(
        <>
        <div className="container " style={{width:'100%', marginTop:'150px'}}>
            <div className="fs-4 ">Shopping Cart</div>
            <div className="row ">
                <div className="col-6 table-bordered me-3">
            <div className="fs-6">Products in Cart</div>
            <div className="container mb-2">
                        
                    <div className="fs-5">1. Product Name</div>
                        <div>Product Image</div>
                        <div>Product Price</div>
                    </div>
                    
                    <div className="container mb-2">
                      
                        <div className="fs-5">2. Product Name</div>
                        <div>Product Image</div>
                        <div>Product Price</div>
                    </div>
                    <div className="container mb-2">
                      
                        <div className="fs-5">3. Product Name</div>
                        <div>Product Image</div>
                        <div>Product Price</div>
                    </div>
                    <div className="container mb-2">
                      
                      <div className="fs-6"></div>
                      <div>Product Image</div>
                      <div>Product Price</div>
                  </div>
                </div>
                <div className="col-4  table-bordered">
                    <div className="container mb-4">
                    <div className="fs-5 me-2">Customer Details</div>
                    <div className="fs-6 me-2">?Name Input</div>
                    <div className="fs-6 me-2">?Address</div>
                    <div className="fs-6 me-2">?Phone Number</div>
                    </div>

                    <div className="container mb-2">
                    <div className="fs-5 me-2">Payment Details</div>
                    <div className="fs-6 me-2">?Card type selector</div>
                    <div className="fs-6 me-2">?Card number</div>
                    <div className="fs-6 me-2">?Zip code</div>
                    </div>
                    <button className="btn-sm btn-secondary mb-2">Submit Payment Method</button>

                    <button className="btn-lg ">Place Order</button>

                    
                </div>
            </div>
            
        </div>
        
        </>
    )

}
export default Cart;