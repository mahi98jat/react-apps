import "./App.css";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AllProduct from "./components/AllProduct";
import ProductDetails from "./components/ProductDetails";
function App() {
  return (
    <div className="App">
      <Navbar />
      <br />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/products">
          <AllProduct />
        </Route>
        <Route path="/products/:id">
          <ProductDetails />
        </Route>
        <Route path="/about-us">About Us Page</Route>
        <Route path="/payment">Payment Page</Route>
        <Route>404 Page not found</Route>
      </Switch>
    </div>
  );
}

export default App;
