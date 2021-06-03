import React, {Component, useEffect, useState} from "react";
import allProducts from "../Data/allProducts"


const ShoppingCart = (props) => {

   
    
    const [cartArray, setCartArray] = useState([]);
    const [currentProduct, setCurrentProduct] = useState(5);
   

    

    useEffect (() => {
        //addToCart(currentProduct);
       
        let temp = currentProduct;
        console.log("UseEffect()- ShoppingCart.js");
        console.log (currentProduct);


    }, [currentProduct]);
    

    const addToCart = () => {

        
        console.log("Add to cart() - shoppingCart.js");
      
        /*
        if(cartArray.includes(productID))
        {
            //increment quantity of productId
            cartArray.find(product => product.id == productiD)//returns element value
        }
        */

    }
    /*
    array1.find(element => element > 10);

    Hooks
    - cartArray
        - cartItem(productId (passed), productName (passed), productPrice (passed),, quantity++, prevImage(passed) totalProductCost)
    - totalQuantity
    - SubTotal

    Functions
    - incrementQuantity (find(productID))
    - decrementQuantiy (find(productID))
    - computeTotalSum (iterate through array, adding up totalProductCost)
    - removeProduct(find(productID))


    Buttons
    - increment/decrement next to quanity
    - remove
    - CheckOut

    flow
- customer clicks add to cart (passes Product.ID)
- onClick, calls shoppingCart.addToCart(productID
- addToCart(productID)
	- checks if product exists in shoppingCartArray
	- if yes, add to quantity

	- if no, create cartItem object and add to shoppingCartArray

use Effect

computerSum

[totalQuantity]

    */


    return (
        <div id="shoppingCartContainer">
            <div id = "shoppingCart">
                <div id = "shoppingCartHeader">
                <h4>Shopping Cart</h4>
                </div>
                <ul>
                <li></li>
                <li>Item one </li>
                <li>Item one </li>
                <li>Item one </li>
                <li>Item one </li>
                </ul>
            </div>
           
        </div>

        
    );


};



export default ShoppingCart;