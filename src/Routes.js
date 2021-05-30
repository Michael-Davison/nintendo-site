import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProductsPage from "./Pages/ProductsPage";
import HomePage from "./Pages/HomePage";

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/productsPage" component={ProductsPage} />
            </Switch>
        </BrowserRouter>

    );
};

export default Routes;