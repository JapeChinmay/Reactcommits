import "./Add.css";

import { useState } from "react";

const Add = ({ onAdd }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputData = () => {
    onAdd(inputValue);
    setInputValue("");
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
    </div>
  );
};

export default Add;
