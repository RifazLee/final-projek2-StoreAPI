import "./index.css"
// import React, { useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "../../components/CartItem";
import SummaryItem from "../../components/CartItem/summary";


const Cart = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);
    

  return (
    <>
    <br />
    <div className="container">
      <div className="card">
            <div className="row">
                <div className="col-md-8 cart">
                    <div className="title">
                        <div className="row">
                            <div className="col"><h4><b>Shopping Cart</b></h4></div>
                            <div className="col align-self-center text-right text-muted"> items</div>
                        </div>
                    </div>
                    {cartItems.map((cart, index) => (
                        <div className="row border-top border-bottom" key={index}>
                            <CartItem
                            idp={cart?.id}
                            price={cart?.price}
                            category={cart?.category}
                            urlToImage={cart?.image}
                            title={cart?.title}
                            description={cart?.description}
                            productincart={cart}
                            />
                            </div>
                    ))}    
                    <div className="back-to-shop"><span className="text-muted">Back to shop</span></div>
                </div>
                <div className="col-md-4 summary">
                    <div><h5><b>Summary</b></h5></div>
                    <hr/>
                    <div className="row">
                        <div className="col" >ITEMS </div>
                    </div>
                    <br />
                    {cartItems.map((cart, index) => (
                        <div className="row" key={index}>
                        <SummaryItem 
                        name={cart.title}
                        price={cart?.price} />
                        </div>
                    ))}
                    <hr />
                    <div className="row">
                        <div className="col">TOTAL PRICE</div>
                        <div className="col text-right">$ 137.00</div>
                    </div>
                    <br />
                    <button className="btn btn-dark">CHECKOUT</button>
                </div>
            </div>
            
        </div>
    </div>
    </>
  );
}

export default Cart;
