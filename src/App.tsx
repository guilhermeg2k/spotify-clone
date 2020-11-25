import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TopBar from "./components/TopBar";
import "./assets/styles/global.css";

function App() {
  return (
    <Router>
      <TopBar />
      <Switch></Switch>
    </Router>
  );
}

export default App;
