import './App.css';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import HomePage from "./Pages/HomePage.js";
import ProductsPage from "./Pages/ProductsPage.js";
import ProductItemPage from "./Pages/ProductItemPage.js";
import React, {Component, useEffect, useState} from "react";
import ShoppingCart from './Components/ShoppingCart.js';
import allProducts from "./Data/allProducts";



function App(props) {

  const [cartArray, setCartArray] = useState([]);
  const [currentProduct, setCurrentProduct] = useState();
  const [showCart, setShowCart] = useState(true);
  const [totalCartCost, setTotalCartCost] = useState(0);

 
 


 
  const addToCart = (productId) => {
      //setTheArray(oldArray => [...oldArray, newElement]);
      
      const product = allProducts.find((product) => product.id === productId);

     
      if(cartArray.some(product => product.id === productId)){

          incrementCartItemQuantity(productId);
      }
      else {
        product["quantity"] = 1;
        setCartArray(cartArray => [...cartArray, product]);
      }
      
  
}



const toggleCartDisplay = () => {

}

const calculateCartTotal = () => {

}

const incrementCartItemQuantity = (productId) => {
  
  const product = cartArray.find((product) => product.id === productId);

  let products = cartArray;
  let productIndex = cartArray.indexOf(productId);
  product.quantity = product.quantity + 1;
  products[productIndex] = product;
  setCartArray([...products]);
}

const decrementCartItemQuantity = (productId) => {

  //find item in cartArray
  //increment item.quantity++

}
//    {showCart ? <ShoppingCart cartArray = {cartArray}/> : null}

  return (
    <div className="App">
      <Switch>
                <Route exact path="/">
                  <HomePage/>
                </Route>
                <Route exact path="/productsPage">
                  <ProductsPage addToCart={addToCart}  />
                </Route>
                <Route path="/store/products/:productId">
                  <ProductItemPage addToCart={addToCart} />
                </Route> 
               
               
       </Switch>
       
       <ShoppingCart cartArray = {cartArray} totalCartCost = {totalCartCost}/>
       
       
    </div>
  );
}

export default App;
