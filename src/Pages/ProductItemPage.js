import React, {Component} from "react";
import NavBar from "../Components/NavBar";
import Logo from "../Components/Logo";
import { useParams } from "react-router-dom";
import allProducts from "../Data/allProducts";
import ProductItem from "../Components/ProductItem";


const ProductItemPage = (props) => {

    const { productId } = useParams();
    const product = allProducts.find((product) => product.id === productId);

    return (
        <div id = "productItemPage">
  
            <div id ="productItemDisplay">
                <ProductItem
                                    name = {product.name}
                                    price = {product.price}
                                    image = {product.image}
                                    id = {product.id}
                                    />
            </div>
            
        </div>
    );


};



export default ProductItemPage;