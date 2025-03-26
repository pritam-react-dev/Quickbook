import React from "react";
import { Dropdown } from "react-bootstrap";

const CustomDropdown = ({
  size = "lg",
  title = "Dropdown",
  bgColor = "transparent",
  border = "1px solid #ccc",
  textColor = "#000",
  fontSize = "14px",
}) => {
  function dropdownsize(size) {
    if (size === "lg") {
      return "8px 12px";
    }
    if (size === "md") {
      return "6px 12px";
    }
    if (size === "sm") {
      return "4px 12px";
    }
  }

  return (
    <Dropdown className="d-inline mx-2">
      <Dropdown.Toggle
        id="custom-dropdown"
        style={{
          backgroundColor: bgColor,
          border: border,
          color: textColor,
          fontSize: fontSize,
          padding: dropdownsize(size),
        }}
      >
        {title}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default CustomDropdown;
