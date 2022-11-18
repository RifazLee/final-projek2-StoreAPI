import React from "react";
import "./index.css";
import { addToCart } from '../../features/cartSlice';
import { useDispatch } from "react-redux";
const DetailProduct = ({
    id,
    title,
    description,
    category,
    urlToImage,
    price,
    productget
}) => {
    const dispatch = useDispatch();
    const handleAddToCart = (item) => {
        if(localStorage.getItem("token")){
          dispatch(addToCart(item));
        }else{
          alert("Token unknow, Login dulu Y");
          window.location.replace("/login")
        }
      };
    return(
        <>
            <div className="col-lg-12 border p-3 main-section bg-white">
                <div className="row m-0">
                    <div className="col-lg-4 left-side-product-box pb-3">
                        <img src={urlToImage} style={{width: `100%`}} className="border p-3" alt={id}/>
                    </div>
                    <div className="col-lg-8">
                        <div className="right-side-pro-detail border p-3 m-0">
                            <div className="row">
                                <div className="col-lg-12">
                                    <p className="m-0 p-0">{category}</p>
                                    <h1>{title}</h1>
                                </div>
                                <div className="col-lg-12">
                                    <br />
                                    <hr className="p-0 m-0"/>
                                </div>
                                <div className="col-lg-12">
                                    <h3 className="m-0 p-0 price-pro">${price}</h3>
                                    <hr className="p-0 m-0"/>
                                </div>
                                <div className="col-lg-12 pt-2">
                                    <h5>Product Detail</h5>
                                    <span>{description}</span>
                                    <hr className="m-0 pt-2 mt-2"/>
                                </div>
                                <div className="col-lg-12">
                                    <p className="tag-section"><strong>Tag : </strong>{category}</p>
                                </div>
                                <div className="col-lg-12">
                                    <h5>Quantity :</h5>
                                    <input type="number" className="form-control text-center w-100"/>
                                </div>
                                <div className="col-lg-12 mt-3">
                                    <div className="row">
                                        <div className="col-lg-12" onClick={() => {
                                            handleAddToCart(productget);
                                        }}>
                                            <button className="btn btn-dark w-100">Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>
    )

}
export default DetailProduct