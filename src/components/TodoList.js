import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, onInputChange }) {
  return (
    <div>
      {todos.map(todo => (
        <TodoItem key={todo.id} {...todo} onInputChange={onInputChange} />
      ))}
    </div>
  );
}

export default TodoList;
