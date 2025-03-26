import React from "react";

const DateInput = ({ label, value, onChange, name }) => {
  return (
    <div style={{ width: "100%", position: "relative" }}>
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
      <div style={{ position: "relative" }}>
        <input
          name={name}
          type="date"
          value={value}
          onChange={onChange}
          style={{
            width: "100%",
            padding: "6px",
            fontSize: "12px",
            outline: "none",
            backgroundColor: "transparent",
            border: "none",
            borderBottom: "1px solid #999",
            appearance: "none",
            cursor: "pointer",
          }}
        />

        <span
          style={{
            position: "absolute",
            right: "6px",
            top: "50%",
            transform: "translateY(-50%)",
            fontSize: "14px",
            color: "#8181A5",
            pointerEvents: "none",
            cursor: "pointer",
          }}
        >
          📅
        </span>
      </div>
    </div>
  );
};

export default DateInput;
