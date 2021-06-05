import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import Blog from "./Blog";

export default function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/services">
          <Services />
          </Route>
          <Route path="/contact">
          <Contact />
          </Route>
          <Route path="/blog">
          <Blog />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
