import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

import ProductDetails from "./components/ProductDetails/ProductDetails";

import ProductOverview from "./components/ProductOverview/ProductOverview";

//TODO Web Template Studio: Add routes for your new pages here.
const App = () => {
    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route exact path = "/" component = { ProductDetails } />
          <Route path = "/ProductOverview" component = { ProductOverview } />
        </Switch>
        <Footer />
      </React.Fragment>
    );
}

export default App;
