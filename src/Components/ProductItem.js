import React, { Component } from "react";
import { Link } from "react-router-dom";






const ProductItem = (props) => {


    return (
        <div id="product-Card" key={props.image}>
            <Link to={`/store/products/${props.id}`}>
                <img className="productCardImg" src={props.image} alt={props.name}></img>
            </Link>

            <h5>{props.name}</h5>
            <h5>${props.price}</h5>
            <button id="addToCartBtn" onClick={props.addToCart}>Add to Cart</button>


        </div>
    );


};



export default ProductItem;