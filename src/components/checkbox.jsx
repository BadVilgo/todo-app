import React, { useState, useEffect } from "react";

const Checkbox = ({ index, onToggle }) => {
  const handleCheckboxChange = () => {
    onToggle(index);
  };

  return (
    <input
      type="checkbox"
      className="list-element-checkbox form-check-input"
      onChange={handleCheckboxChange}
    />
  );
};

export default Checkbox;
