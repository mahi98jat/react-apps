import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./Components/Navbar/index";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <h1>Home Page</h1>
        </Route>
        <Route path="/contact">
          <h1>Contact Page</h1>
        </Route>
        <Route path="/about-us">
          <h1>About Page</h1>
        </Route>
        <Route path="/services">
          <h1>Services Page</h1>
        </Route>
        <Route path="/login">
          <h1>Login Page</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
