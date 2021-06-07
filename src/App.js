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

 

 
  const addToCart = (productId) => {
      //setTheArray(oldArray => [...oldArray, newElement]);
      console.log(cartArray);
      const product = allProducts.find((product) => product.id === productId);
      setCartArray(cartArray => [...cartArray, product]);
      localStorage.setItem('cartContent', JSON.stringify(cartArray));
     
    
  
}

const toggleCartDisplay = () => {

}

const calculateCartTotal = () => {

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
       
       <ShoppingCart cartArray = {cartArray}/>
       
       
    </div>
  );
}

export default App;
