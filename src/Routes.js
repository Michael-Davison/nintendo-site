import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import ProductsPage from "./Pages/ProductsPage";
import HomePage from "./Pages/HomePage";
import ProductItemPage from "./Pages/ProductItemPage";


const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/productsPage" component={ProductsPage} />
                <Route path="/store/products/:productId" component={ProductItemPage} />
            </Switch>
        </BrowserRouter>

    );
};

export default Routes;