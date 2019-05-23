import React from "react";
import CompletedCheckbox from "./CompletedCheckbox";
import styled, { css } from "styled-components";

const TodoDiv = styled.div`
  display: flex;
  broder: 1px solid grey;
  border-top: none;
  justify-items: center;
`;

const TodoText = styled.div`
  color: grey;
  margin-left: 1em;
  ${props =>
    props.completed &&
    css`
      text-decoration: line-through;
    `}
`;

function TodoItem({ id, text, completed, onInputChange }) {
  return (
    <TodoDiv completed>
      <CompletedCheckbox
        checked={completed}
        id={id}
        onInputChange={onInputChange}
      />
      <TodoText completed={completed}>{text}</TodoText>
    </TodoDiv>
  );
}

export default TodoItem;
