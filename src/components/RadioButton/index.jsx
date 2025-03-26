import React from "react";
import "./radiostyle.css";
const RadioButton = ({ label, value, name, checked, onChange }) => {
  return (
    <label
      className="font-12"
      style={{
        // color: "#603AE5",
        display: "flex",
        alignItems: "center",
        gap: "6px",
        cursor: "pointer",
      }}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        style={{
          appearance: "none",
          width: "16px",
          height: "16px",
          border: "2px solid #603AE5",
          borderRadius: "50%",
          outline: "none",
          cursor: "pointer",
          display: "grid",
          placeItems: "center",
        }}
      />
      {label}
    </label>
  );
};

export default RadioButton;
