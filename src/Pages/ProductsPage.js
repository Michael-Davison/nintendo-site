import React, {Component, useEffect, useState} from "react";
import ProductList from "../Components/ProductList"
import Logo from "../Components/Logo";
import NavBar from "../Components/NavBar";






const ProductsPage = (props) => {

    const [productIdAdded, setProductIdAdded] = useState(0);
    const [cartCount, setCartCount] = useState(0);

 
    //when cartCount changes value, do this and render
    useEffect (() =>
    {       
        console.log("ProductIdAdded: " + productIdAdded);
            
            console.log("UseEffect Called - Productpage.js");
    }, [cartCount, productIdAdded]);

    //Call back function when user selects add to cart
    const handleCallback = (productId) => {
        //user clicked add, change state
        props.addToCart(productId);
        console.log(props.cartArray);

        
        
       
    }
    return (
        <div>
            <Logo/>
            <NavBar/>
            <ProductList addCartHandler = {handleCallback}/>
        </div>
    );


};



export default ProductsPage;