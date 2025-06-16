import "./signup.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [signUpData, setSignUpData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignUpData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};

    if (!signUpData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!signUpData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(signUpData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!signUpData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (signUpData.password.length < 9) {
      newErrors.password = "Password must be at least 9 characters";
    }

    setError(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const saveData = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
    console.log(userData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert("succes");
      navigate("/");
      saveData(signUpData);
    }
  };

  const tologinPage = () => {
    navigate("/login");
  };
  return (
    <div className="container">
      <h1>Sign Up</h1>
      <div className="form">
        <input
          name="name"
          className="name-input  "
          placeholder="Name"
          type="text"
          required
          value={signUpData.name}
          onChange={handleChange}
        />
        {error.name && <p className="error">{error.name}</p>}
        <input
          className="email-input"
          placeholder="Email"
          type="email"
          name="email"
          required
          value={signUpData.email}
          onChange={handleChange}
        />
        {error.email && <p className="error">{error.email}</p>}
        <input
          className="password-input"
          placeholder="Password"
          type="password"
          name="password"
          required
          value={signUpData.password}
          onChange={handleChange}
        />
        {error.password && <p className="error">{error.password}</p>}

        <button className="btn-submit" onClick={handleSubmit}>
          Register
        </button>
        <button className="to-login" onClick={tologinPage}>
          Already registered?
        </button>
      </div>
    </div>
  );
};

export default SignUp;
