import React from "react";
import { removeFromCart } from "../../features/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({
    idp,
    title,
    category,
    urlToImage,
    productincart,
    price,
    }) => {
    const dispatch = useDispatch();
        
    const handleRemoveFromCart = (item) => {
        dispatch(removeFromCart(item));
    };

  return (
    <>
        <div className="row main align-items-center">
            <div className="col-2"><img className="img-fluid" src={urlToImage} alt={idp}/></div>
                <div className="col">
                    <div className="row text-muted">{category}</div>
                    <div className="row">{title}</div>
                </div>
                <div className="col">
                    <a href="#">-</a><a href="#" className="border">1</a><a href="#">+</a>
                </div>
            <div className="col">$ {price} </div>
            <div className="col">
                <button className="m-1 py-1 px-1 btn btn-dark" onClick={() => {
                    handleRemoveFromCart(productincart);
                }}>
                x
                </button>
            </div>
        </div>
    </>
  );
};

export default CartItem;
