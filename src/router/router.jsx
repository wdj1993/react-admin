import React from "react";
import { HashRouter, BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../views/home";
import About from "../views/about";

const router = () => (
  <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route path="/about" name="about" component={About} />
  </BrowserRouter>
);

export default router;
