import React from "react";

const Checkbox = ({ index, checked, onToggle }) => {
  return (
    <input
      type="checkbox"
      className="form-check-input ml-1"
      checked={checked}
      onChange={() => onToggle(index)}
    />
  );
};

export default Checkbox;
