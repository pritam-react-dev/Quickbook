import React from "react";
import { Button } from "react-bootstrap";

const CustomButton = ({
  children = "Click Me",
  size = "lg",
  bgColor = "transparent",
  border = "1px solid #ccc",
  textColor = "#000",
  fontSize = "14px",
  width,
  onClick,
  margin = "me-1",
}) => {
  function btnsize(size) {
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
    <Button
      //   size={size}
      onClick={onClick}
      style={{
        backgroundColor: bgColor,
        border: border,
        color: textColor,
        fontSize: fontSize,
        padding: btnsize(size),
      }}
      className={`${margin} ${width && width}`}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
