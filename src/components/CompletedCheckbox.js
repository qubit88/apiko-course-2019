import React from "react";

function CompletedCheckbox({ checked, id, onInputChange }) {
  return (
    <input
      type="checkbox"
      name="completed"
      checked={checked}
      onChange={e => onInputChange(id)}
    />
  );
}

export default CompletedCheckbox;
