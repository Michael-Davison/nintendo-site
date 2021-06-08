import './App.css';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import HomePage from "./Pages/HomePage.js";
import ProductsPage from "./Pages/ProductsPage.js";
import ProductItemPage from "./Pages/ProductItemPage.js";
import React, {Component, useEffect, useState} from "react";
import ShoppingCart from './Components/ShoppingCart.js';
import allProducts from "./Data/allProducts";
import Logo from "./Components/Logo";
import NavBar from "./Components/NavBar";



function App(props) {

  const [cartArray, setCartArray] = useState([]);
  const [currentProduct, setCurrentProduct] = useState();
  const [showCart, setShowCart] = useState(false);
  const [totalCartCost, setTotalCartCost] = useState(0);
  const [cartQuantity, setCartQuantity] = useState(cartArray.length);


  const updateQuantity = () => {
    let totalQuantity = 0;
   cartArray.forEach(element => {
     totalQuantity += element.quantity;
   });

   setCartQuantity(totalQuantity);
  }
 

  const showCartClick = () => {

    setShowCart(!showCart);
  }
    


  useEffect (() =>
    {       
        calculateCartTotal();
        updateQuantity();
        //change cartBadge
    }, [cartArray]);

 
 


 
  const addToCart = (productId) => {
     
      const product = allProducts.find((product) => product.id === productId);

     
      if(cartArray.some(product => product.id === productId)){

          incrementCartItemQuantity(productId);
      }
      else {
        product["quantity"] = 1;
        setCartArray(cartArray => [...cartArray, product]);
      }

      //display notifcation added to cart 
      
  
}

const calculateCartTotal = () => {

  //array.forEach(item => console.log(item));
  let totalCost = 0;
  cartArray.forEach(product => totalCost += product.price * product.quantity);
  setTotalCartCost(totalCost.toFixed(2));

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

  const product = cartArray.find((product) => product.id === productId);

  if(product.quantity == 1)
{
  return alert("Quantity must be greater than 0.")
}

  let products = cartArray;
  let productIndex = cartArray.indexOf(productId);
  product.quantity = product.quantity - 1;
  products[productIndex] = product;
  setCartArray([...products]);

}

const removeCartItem = (productId) => {

  
  
  setCartArray(cartArray.filter(product => product.id != productId));

}

  return (
    <div className="App">
      <Logo/>
      <NavBar showCartClick = {showCartClick} cartQuantity = {cartQuantity}/>
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
       {showCart ? <ShoppingCart removeCartItem = {removeCartItem}cartQuantity = {cartQuantity} addQuantityButton = {incrementCartItemQuantity} subtractQuantityButton = {decrementCartItemQuantity} cartArray = {cartArray} totalCartCost = {totalCartCost}/> : null}
       
       
       
    </div>
  );
}

export default App;
