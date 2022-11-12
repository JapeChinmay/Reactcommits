import "./App.css";
import { Route } from "react-router-dom";
import Welcome from "./Components/Welcome";
import Products from "./Components/Products";
import Header from "./Header/Header";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Route path="/welcome">
          <Welcome />
        </Route>

        <Route path="/products">
          <Products />
        </Route>
      </main>
    </div>
  );
};

export default App;

//web.com/welcome
//web.com/products
