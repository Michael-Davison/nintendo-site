import React, {Component} from "react";
import ProductList from "../Components/ProductList"
import logo from "../Resources/Logos/logo.png"



const ProductsPage = (props) => {

    return (
        <div>
            <img id = "logo"src = {logo}></img>
            <ProductList/>


        </div>
    );


};



export default ProductsPage;