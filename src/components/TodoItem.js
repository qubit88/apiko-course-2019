import React from "react";
import CompletedCheckbox from "./CompletedCheckbox";

function TodoItem({ id, text, completed, onInputChange }) {
  return (
    <div>
      <CompletedCheckbox
        checked={completed}
        id={id}
        onInputChange={onInputChange}
      />
      <p>{text}</p>
    </div>
  );
}

export default TodoItem;
