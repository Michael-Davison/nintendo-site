import React, {Component, useEffect, useState} from "react";


const ShoppingCart = (props) => {

    var storedArray = localStorage.getItem('cartContents');

    const testFunction = () => {
        let temp = localStorage.getItem('cartContent');
      
        console.log(temp);

       localStorage.clear();
    }

    /*
         {currentProductList.map((product ) => {
                       
                        return (
                            <ProductItem 
                            name = {product.name}
                            price = {product.price}
                            image = {product.prevImage}
                            id = {product.id}
                            addToCart = {e=>props.addCartHandler(product.id)}
                            />

                        );
                          return (
        <div id="shoppingCartContainer">
            <div id = "shoppingCart">
                <div id = "shoppingCartHeader">
                <h4>Shopping Cart</h4>
                </div>
                    <div id= "shoppingCartContents">
                            <button onClick={testFunction}>test</button>
                    </div>
               
            </div>
           
        </div>

        
    );


    */
                          
    return (
        <div id="shoppingCartContainer">
            <div id = "shoppingCart">
                <div id = "shoppingCartHeader">
                <h4>Shopping Cart</h4>
                </div>
                    <div id= "shoppingCartContents">
                        {}
                            {props.cartArray.map((product ) => {
                                return(
                                    <li>{product.name}</li>
                                )
                            })}
                    </div>
                    <button onClick={testFunction}>Check</button>
            </div>
            
           
        </div>
    );
   
  


};



export default ShoppingCart;