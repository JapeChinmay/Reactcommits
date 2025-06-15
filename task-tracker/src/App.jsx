import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Routes/AppRoutes";

import "./App.css";

// const array = [
//   "random task 1",
//   "random task 1",
//   "random task 1",
//   "random task 1",
// ];

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
