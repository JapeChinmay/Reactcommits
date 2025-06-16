import "./Add.css";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Add = ({ onAdd }) => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  const [NAME, setNAME] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    const userData = localStorage.getItem("user");

    if (userData) {
      const parsed = JSON.parse(userData);
      setNAME({
        name: parsed.name || "",
        email: parsed.email || "",
        password: parsed.password || "",
      });
    } else {
      setNAME({ name: "Default", email: "Default", password: "Default" });
    }
  }, []);

  const handleInputData = () => {
    onAdd(inputValue);
    setInputValue("");
  };

  const handlelogout = () => {
    navigate("/login");
  };
  return (
    <div className="container">
      <h2 className="user-name">{NAME.name}</h2>
      <input
        type="text"
        placeholder="Enter Task"
        id="task-input"
        required
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className="add-button" onClick={handleInputData}>
        Add
      </button>
      <button className="log-out" onClick={handlelogout}>
        Log out
      </button>
    </div>
  );
};

export default Add;
