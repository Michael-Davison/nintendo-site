import React, {Component} from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";






const ProductItem = (props) => {


    return (
        <div id="product-Cards" key = {props.image}>
            <Link to={`/store/products/${props.id}`}>
            <img src = {props.image} alt = {props.name}></img>
            </Link>
            
            <h5>{props.name}</h5>
            <h5>${props.price}</h5>
            <button onClick={props.addToCart}>Add to Cart</button>
           

        </div>
    );


};



export default ProductItem;