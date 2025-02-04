import React from "react";
import { useCart } from './CartProvider';


const Cart =()=>{
    const { cartItems } = useCart();
 
    
 return(
        <>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
        <div className="container p-3">
            
            <div className="fs-4 mb-2 font-weight-bold text-info">Shopping Cart</div>
            <div className="row ">
                <div className="col-6 table-bordered me-3">
                    <div className="col-sm">
            <div className="fs-5 text-info pt-2">Products in Cart</div>
            <hr class="bg-danger border-4 border-top border-info" />

                    <ul>
                        {cartItems.map((item, index) => (
                            <li key={index}>
                                <div className="container mb-3">
                        
                                    <div className="fs-6 font-weight-bold text-wrap">{item.name}</div>
                                    <div>${(+item.price).toFixed(2)}</div>
                                    <img className="img w-25" src ={item.image_link} alt="makeup"/>
                           
                                </div>
                            </li>
                        )
                        )}
                        <li><div className="container mb-2">
                      
                      <div className="fs-6 font-weight-bold text-wrap">Superpowder Double Face Makeup</div>
                      <div>$ 24.00</div>
                      <img className="img w-25" src = '/cart3.jpg' alt="makeup"/>
                      
                  </div></li>



                    </ul>

                    

                    

                    <div className="container mb-2">
                    <hr class="bg-danger border-4 border-top border-info" />
                      <div className="fs-6 font-weight-bold text-wrap">Totals</div>
                     
                      <div>Subtotal ...... $ 45.00</div>
                      <div>Taxes .............. $  3.15</div>
                      <div>Shipping ..... $  6.99</div>
                      <hr class="bg-danger border-4 border-top border-info" />
                      <div className="fs-5 font-weight-bold text-info">Total: 55.14</div>

                  </div>
                  </div>
                </div>
                
                <div className="col-4  table-bordered">
                    <div className="container mb-4 pt-2">
                    <div className="fs-5 text-info me-2">Customer Details</div>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="name"className="form-label ">Name</label> 
                            <input type="text"  id="name" className="form-control" placeholder="Full Name"></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="address" className="form-label ">Address</label> 
                            <input type="text" className="form-control mb-1" placeholder="Street Address"></input>
                            <input type="text" className="form-control mb-1" placeholder="City"></input>
                            <input type="text" className="form-control mb-1" placeholder="State"></input>
                            <input type="text" className="form-control mb-1" placeholder="Zip"></input>
                            <input type="text" className="form-control mb-1" placeholder="Email Address"></input>
                        </div>
                    </form>
                    </div>

                    <hr class="bg-danger border-4 border-top border-info" />

                    <div className="container mb-4">
                    <div className="fs-5 text-info me-2">Payment Details</div>
                    
             

                    <div className="mb-3">
                            <label htmlFor="payment" className="form-label ">Credit Card</label> 
                            <input type="text" className="form-control mb-1" placeholder="Card Number"></input>
                            <input type="text" className="form-control mb-1" placeholder="Expiration (MM/YY)"></input>
                            <input type="text" className="form-control mb-1" placeholder="CVC"></input>
                            <input type="text" className="form-control mb-1" placeholder="Zip"></input>

                        </div>

                    <button className="btn-sm btn-info mb-2"  onClick={function handleClick() {
                    alert('Payment method accepted');
                    }}>Add Payment</button>
                    </div>

                    <hr class="bg-danger border-4 border-top border-info" />
                    <button className="btn-lg btn-info " onClick={function handleClick() {
                    alert('Thank you for shopping with us!');
                    }}>Place Order</button>

                   
                   
                </div>
            </div>
            
        </div>
        
        </>
    )

}
export default Cart;