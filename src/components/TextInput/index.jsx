import React from "react";

const TextInput = ({ label, placeholder, value, onChange, name }) => {
  return (
    <div style={{ width: "100%" }}>
      <label
        style={{
          padding: "0px 5px",
          display: "block",
          fontSize: "12px",
          color: "#8181A5",
          marginBottom: "4px",
        }}
      >
        {label}
      </label>
      <input
        name={name}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={{
          width: "100%",
          padding: "6px",
          fontSize: "13px",
          fontWeight: "600",
          border: "none",
          outline: "none",
          borderBottom: "1px solid #8181A5",
        }}
      />
    </div>
  );
};

export default TextInput;
