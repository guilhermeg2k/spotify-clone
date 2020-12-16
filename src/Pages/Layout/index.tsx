import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TopBar from "./components/TopBar";
import Home from "../Home";
import Premium from "../Premium";
import Footer from "./components/Footer";

function Layout() {
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/premium">
          <Premium />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default Layout;
