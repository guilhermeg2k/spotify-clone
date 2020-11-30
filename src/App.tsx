import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TopBar from "./components/TopBar";
import Home from "./components/Home";
import Premium from "./components/Premium";
import Footer from "./components/Footer";
import "./assets/styles/global.css";
function App() {
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

export default App;
