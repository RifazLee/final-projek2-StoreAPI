import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchData } from "../../features/detailSlice";
import { addToCart } from '../../features/cartSlice';


const ProductItem = ({
    idp,
    title,
    description,
    category,
    urlToImage,
    price,
    productget
}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    

    const navigateToDetails = (id) => {
        dispatch(fetchData({id}));
        navigate(`/products/${id}`, { replace: true });
      };

      const handleAddToCart = (item) => {
        if(localStorage.getItem("token")){
          dispatch(addToCart(item));
        }else{
          alert("Token unknow, Login dulu Y");
          window.location.replace("/login")
        }
      };

    return (
        <div className="card card-body h-100" >
        <img className="imgCard card-img-top" src={urlToImage} alt="Product Foto" />
        <div className="card-body">
            <h5 className="card-title">
            {title}
            </h5>
            <div className="badge badge-dark text-wrap">
            {category}
            </div>
            <div className="row">
            <div className="col-20 text-truncate" style={{ maxwidth: '150px'}}>
                {description}
            </div>
            </div>
            <h3>${price}</h3>
        </div>
        <div className="d-flex p-2">
            <button className="m-2 py-2 px-2 btn btn-primary" 
            onClick={() => navigateToDetails(idp)}
            >
            Detail
            </button>
            <button className="m-2 py-2 px-2 btn btn-dark" onClick={() => {
                    handleAddToCart(productget);
                }}>
            Add to Cart  
            </button>
        </div>
        </div>
    );
};

export default ProductItem;
