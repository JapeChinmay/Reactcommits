// src/Routes/AppRoutes.jsx
import { Routes, Route } from "react-router-dom";
import Home from "../TaskTracker/Home";
import Login from "../Auth/Login/Login";
import SignUp from "../Auth/Signup/Signup";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};

export default AppRoutes;
