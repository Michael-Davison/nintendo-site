import {Navbar, Nav, Form, Button, FormControl, Badge} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import cartLogo from "../Resources/Logos/cartLogo.png";
import React, {Component, useState} from "react";
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

function NavBar(props) {


  return (

   
    <div id = "navbar">
    <Navbar>
      <Navbar.Brand href="#home"></Navbar.Brand>
      <Nav className="ml-auto">
        <Link to ="/">Home</Link>
        <Link to ="/ProductsPage">Store</Link>
        <Link to ="#" ><img onClick={props.showCartClick} width="30" height="30" src = {cartLogo}></img> {props.cartQuantity != 0 ? <Badge variant="dark">{props.cartQuantity}</Badge> : null }</Link>
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
