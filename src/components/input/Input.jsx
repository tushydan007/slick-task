import React, { useState } from "react";
import "./input.css";

const Input = () => {
  const [value, setValue] = useState("");
  return (
    <div className="input-container">
      <label className="search-field" htmlFor="search">
        Search
      </label>
      <input
        className="search-input"
        type="text"
        name="value"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default Input;
