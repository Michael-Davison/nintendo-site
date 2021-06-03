import {Navbar, Nav, Form, Button, FormControl} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import cartLogo from "../Resources/Logos/cartLogo.png";
import ShoppingCart from "../Components/ShoppingCart";
import React, {Component, useState} from "react";

function NavBar() {

  const [showCart, setShowCart] = useState(false);

  const clickHandle = () => {

    setShowCart(!showCart);
  }
    // {showCart ? <ShoppingCart/> : null}
   
  return (

   
    
    <div id = "navbar">
    <Navbar>
      <Navbar.Brand href="#home"></Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/ProductsPage">Store</Nav.Link>
        <Nav.Link href="#"><img onClick={clickHandle} width="30" height="30" src = {cartLogo}></img></Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="dark">Search</Button>
      </Form>
    </Navbar>
   
    
  
 
  </div>
  );
};

export default NavBar;
