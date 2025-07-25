import { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loginData, setUpLoginData] = useState({ name: "", password: "" });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpLoginData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmitLogin = (e) => {
    e.preventDefault();

    const storedUser = localStorage.getItem("user");
    const USER = storedUser ? JSON.parse(storedUser) : null;
    if (
      USER &&
      USER.name === loginData.name &&
      USER.password === loginData.password
    ) {
      localStorage.setItem("isLoggedIn", true);
      navigate("/home");
    } else {
      setError("Invalid name or password");
    }
  };

  const handlenavigationfromlogin = () => {
    navigate("/signup");
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <div className="form-div">
        <form className="form" onSubmit={handleSubmitLogin}>
          <input
            className="name-input"
            placeholder="Name "
            type="text"
            name="name"
            required
            value={loginData.name}
            onChange={handleChange}
          />
          <input
            className="password-input"
            placeholder="passsword"
            type="password"
            required
            value={loginData.password}
            name="password"
            onChange={handleChange}
          />
          {error && <p className="login-error">{error}</p>}

          <button className="btn-submit">Submit</button>
          <button className="to-signup" onClick={handlenavigationfromlogin}>
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
