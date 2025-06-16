import "./Add.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Add = ({ onAdd }) => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleInputData = () => {
    onAdd(inputValue);
    setInputValue("");
  };

  const handlelogout = () => {
    navigate("/login");
  };
  return (
    <div className="container">
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
