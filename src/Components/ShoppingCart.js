import React, { Component, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


const ShoppingCart = (props) => {

    
      
    const backdrop = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      };
      
      const cart = {
        hidden: { x: "100%" },
        visible: { x: "0" },
      };


    //{showCart ? <ShoppingCart/>: null}
    return (
        <AnimatePresence>
           
            {props.showCart &&  (
                <>
           <motion.div
            variants={backdrop}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={props.showCartClick}
            transition={{ ease: "easeOut", duration: 0.5 }}
            className="backdrop"
          />
            
          <motion.div
            variants={cart}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ ease: "easeOut", duration: 0.5 }}
            className="cart"
          >
            
                <div id = "shoppingCartContainer">
                    <h3 id ="shoppingCartHeader">Shopping Cart</h3>
                    {props.cartQuantity != 0 ? props.cartArray.map((product) => {
                        return (


                            <div key={product.id} id="cartItem">
                                <img id="cartItemImg" src={product.prevImage}></img>
                                <button onClick={() => props.removeCartItem(product.id)} id="removeButton">Remove</button>
                                <li>{product.name}</li>
                                <li>Price: ${product.price}</li>
                                <li>Quantity:
                                     <button onClick={() => props.addQuantityButton(product.id)}> + </button>
                                    {product.quantity}
                                    <button onClick={() => props.subtractQuantityButton(product.id)}> - </button>
                                </li>


                            </div>
                            
                        )
                    }) : <h5>Cart is empty</h5>}



                    <h5 id="totalCartCostHeader">Total Cart:$ {props.totalCartCost}</h5>
                    <button id="checkOutBtn">Check Out</button>
                    <button id="exitCartBtn" onClick={props.showCartClick}>X</button>
                

          
            


                    </div>
                    </motion.div>
                    </>
            )}
        </AnimatePresence>
    );




}



export default ShoppingCart;