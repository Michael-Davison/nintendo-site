import './App.css';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import HomePage from "./Pages/HomePage.js";
import ProductsPage from "./Pages/ProductsPage.js";
import ProductItemPage from "./Pages/ProductItemPage.js";

function App() {
  return (
    <div className="App">
      <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/productsPage" component={ProductsPage} />
                <Route path="/store/products/:productId" component={ProductItemPage} />
      </Switch>
    </div>
  );
}

export default App;
