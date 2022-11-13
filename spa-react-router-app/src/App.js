import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import Welcome from "./Components/Welcome";
import Products from "./Components/Products";
import Header from "./Header/Header";
import ProductDetail from "./Components/ProductDetail";
import AllQuotes from "./Pages/AllQuotes";
import SingleQuote from "./Pages/singleQuote";
import NewQuote from "./Pages/NewQuote";
import MainNavigation from "./Components/Navigation/MainNavigation";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/welcome" />
          </Route>
          <Route path="/welcome/Quotes" exact>
            <AllQuotes />
          </Route>
          <Route path="/welcome/Quotes/:quoteId">
            <SingleQuote />
          </Route>
          <Route path="/welcome/newQuote">
            <NewQuote />
          </Route>
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
