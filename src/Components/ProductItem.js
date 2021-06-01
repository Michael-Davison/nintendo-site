import React, {Component} from "react";






const ProductItem = (props) => {

    


    /*
    display product.name, product.price, product.image
    */
    return (
        <div id = "product-Card" key = {props.image}>
            <img src = {props.image} alt = {props.name}></img>
            <h5>{props.name}</h5>
            <h5>${props.price}</h5>
           

        </div>
    );


};



export default ProductItem;