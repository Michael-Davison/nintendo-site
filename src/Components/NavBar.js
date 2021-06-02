import {Navbar, Nav, Form, Button, FormControl} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import cartLogo from "../Resources/Logos/cartLogo.png";

function NavBar() {
  return (

    //<img id = "cartLogo"src = {cartLogo}></img>
    //<img className ="nav-logo" src = {cartLogo}></img>
    
    <div id = "navbar">
    <Navbar>
      <Navbar.Brand href="#home"></Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/ProductsPage">Store</Nav.Link>
        <Nav.Link href="#">Cart Logo</Nav.Link>
        
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="dark">Search</Button>
      </Form>
    </Navbar>
 
  </div>
  );
}

export default NavBar;
