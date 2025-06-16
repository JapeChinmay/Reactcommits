// src/Routes/AppRoutes.jsx
import { Routes, Route } from "react-router-dom";
import Home from "../TaskTracker/Home";
import Login from "../Auth/Login/Login";
import SignUp from "../Auth/Signup/Signup";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/signup" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;
