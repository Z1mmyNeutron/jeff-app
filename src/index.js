import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import App from "./App";
import Home from "./pages/Home.js";
import Background from "./pages/Background.js";
import Commitment from "./pages/Commitment.js";
import Services from "./pages/Services.js";
import GetQuote from "./pages/GetQuote.js";
import Navbar from "./Navbar.js";

const routing = (
  <Router>
    <div>
   
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/background" component={Background} />
        <Route path="/commitment" component={Commitment} />
        <Route path="/services" component={Services} />
        <Route path="/quote" component={GetQuote} />
      </Switch>
    </div>
  </Router>
);
// <Route component={Notfound} />
ReactDOM.render(routing, document.getElementById("root"));
