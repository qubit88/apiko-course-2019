import React from "react";
import TodoItem from "./TodoItem";
import styled from "styled-components";

const TodoListDiv = styled.div`
  min-height: 30px;
  min-width: 30vw;
  margin: 30px auto;
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  width: 50%;
  border: 1px solid grey;
`;

function TodoList({ todos, onInputChange }) {
  return (
    <TodoListDiv>
      {todos.map(todo => (
        <TodoItem key={todo.id} {...todo} onInputChange={onInputChange} />
      ))}
    </TodoListDiv>
  );
}

export default TodoList;
