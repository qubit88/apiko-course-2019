import React from "react";
import { compose, withState, withHandlers } from "recompose";
import {connect} from 'react-redux';
import TodoItem from "./TodoItem";
import styled from "styled-components";
import * as todosSelectors from '../modules/todos/todosSelectors';


const TodoListDiv = styled.div`
  min-height: 30px;
  min-width: 30vw;
  margin: 30px auto;
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  width: 50%;
`;

function TodoList({ todos }) {
  return (
    <TodoListDiv>
      {todos.map(todo => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </TodoListDiv>
  );
}

const mapStateToProps = (state, props) => {
  //logic to filter data
  const filter = props.match.path.split('/')[1];
  return ({todos: todosSelectors.getTodos(state, filter)});
}

// const mapDispatchToProps = {

// }

const enhancer = connect(mapStateToProps);


export default enhancer(TodoList);
