import "./App.css";
import { Route, Switch } from "react-router-dom";
import Welcome from "./Components/Welcome";
import Products from "./Components/Products";
import Header from "./Header/Header";
import ProductDetail from "./Components/ProductDetail";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Switch>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/products/:pID">
            <ProductDetail />
          </Route>

          <Route path="/products" exact>
            <Products />
          </Route>
        </Switch>
      </main>
    </div>
  );
};

export default App;

//web.com/welcome
//web.com/products
