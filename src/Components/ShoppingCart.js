import React, {Component, useEffect, useState} from "react";


const ShoppingCart = (props) => {

  

                          //onClick={e=> clickHandler(cards[position].name)}
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
                                                <li>Quantity: 
                                                    <button onClick={()=> props.addQuantityButton(product.id)}> + </button>
                                                    {product.quantity}
                                                    <button onClick={()=> props.subtractQuantityButton(product.id)}> - </button>
                                                </li>
                                           
                                        
                                    </div>
                                )
                            })}
                            <h5 id ="totalCartCostHeader">Total Cart:$ {props.totalCartCost}</h5>
                            <button id ="checkOutBtn">Check Out</button>
                    </div>
                    
            </div>
            
           
        </div>
    );
   
  


};



export default ShoppingCart;