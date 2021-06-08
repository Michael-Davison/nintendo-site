import React, {Component, useEffect, useState} from "react";
import ProductList from "../Components/ProductList"





const ProductsPage = (props) => {

   
    return (
        <div>
            <ProductList addCartHandler = {props.addToCart}/>
        </div>
    );

};



export default ProductsPage;