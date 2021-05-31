import React, {Component} from "react";






const ProductItem = (props) => {

    


    /*
    display product.name, product.price, product.image
    */
    return (
        <div id = "product-Card" key = {props.image}>
            <img src = {props.image} alt = {props.name}></img>
            <h4>{props.name}</h4>
            <h4>{props.price}</h4>
           

        </div>
    );


};



export default ProductItem;