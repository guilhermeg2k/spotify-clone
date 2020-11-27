import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TopBar from "./components/TopBar";
import Home from "./components/Home";
import "./assets/styles/global.css";
function App() {
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
