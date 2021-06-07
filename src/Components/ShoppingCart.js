import React, {Component, useEffect, useState} from "react";


const ShoppingCart = (props) => {

  

                          
    return (
        <div id="shoppingCartContainer">
            <div id = "shoppingCart">
                <div id = "shoppingCartHeader">
                <h4>Shopping Cart</h4>
                </div>
                    <div id= "shoppingCartContents">
                       
                            {props.cartArray.map((product ) => {
                                return(
                                    <div key = {product.id} id="cartItem">
                                        
                                       
                                                
                                                <img id ="cartItemImg" src = {product.prevImage}></img>
                                                <li>{product.name}</li>
                                                <li>Price: ${product.price}</li>
                                                <li>Quantity: {product.quantity}</li>
                                           
                                        
                                    </div>
                                )
                            })}
                            <h5>Total Cart:$ {props.totalCartCost}</h5>
                    </div>
                    
            </div>
            
           
        </div>
    );
   
  


};



export default ShoppingCart;