import React, {Component} from "react";
import ProductList from "../Components/ProductList"
import Logo from "../Components/Logo";
import NavBar from "../Components/NavBar";





const ProductsPage = (props) => {

    return (
        <div>
            <Logo/>
            <NavBar/>
            <ProductList/>


        </div>
    );


};



export default ProductsPage;