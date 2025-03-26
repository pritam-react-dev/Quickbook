import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const SelectInput = ({ label, options, value, onChange, name }) => {
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
        <select
          name={name}
          value={value}
          onChange={onChange}
          placeholder
          style={{
            width: "100%",
            padding: "6px",
            fontSize: "14px",
            outline: "none",
            backgroundColor: "transparent",
            border: "none",
            borderBottom: "1px solid #999", // Only bottom border
            appearance: "none", // Remove default dropdown styling
            cursor: "pointer",
          }}
        >
          <option value="" disabled>
            Select an option...
          </option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        {/* Custom Dropdown Icon */}
        <span
          style={{
            position: "absolute",
            right: "8px",
            top: "50%",
            transform: "translateY(-50%)",
            fontSize: "18px",
            color: "#8181A5",
            pointerEvents: "none",
          }}
        >
          <MdOutlineKeyboardArrowDown />
        </span>
      </div>
    </div>
  );
};

export default SelectInput;
