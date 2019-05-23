import React from "react";

function Input({ value, onKeyDown, onChange }) {
  return (
    <input
      type="text"
      name="new-todo"
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
}

export default Input;
