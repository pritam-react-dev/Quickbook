import React, { useState } from "react";

const useLayout = () => {
  const [isDashboard, setIsDashboard] = useState(false);

  const [activeTab, setActiveTab] = useState("Receipts");
  const [selectedFile, setSelectedFile] = useState(null);

  // Handle file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  // Handle Drag & Drop
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
  };

  return {
    data: {
      isDashboard,
      activeTab,
      selectedFile,
    },
    method: {
      setIsDashboard,

      setActiveTab,
      handleFileChange,
      handleDragOver,
      handleDrop,
      handleRemoveFile,
    },
  };
};

export default useLayout;
