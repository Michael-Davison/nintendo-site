import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import ProductsPage from "./Pages/ProductsPage";
import Profile from "./Profile";

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/productsPage" component={ProductsPage} />
            </Switch>
        </BrowserRouter>

    );
};

export default Routes;