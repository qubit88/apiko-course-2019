import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import {todosOperations, todosSelectors} from './modules/todos';
import TodoList from "./components/TodoList";
import Input from "./components/Input";
import Navigation from "./components/Navigation";
import { compose, withState, withHandlers } from "recompose";
import uuid from "uuid/v4";

function App ({ handleInputChange, handleAddTodo, value, todos, isLoading }) {
    // const completedTodos = todos.filter(todo => todo.completed);
    // const newTodos = todos.filter(todo => !todo.completed);

    return (
      <div className="App">
        <Input
          value={value}
          onChange={evt => handleInputChange(evt.target.value)}
          onKeyDown={evt => handleAddTodo(evt.key)}
        />
        {isLoading ? 'Loading...' : null}
        <Router>
          <Route
            exact
            path="/"
            component={TodoList}
          />
          <Route
            path="/new"
            component={TodoList}
          />
          <Route
            path="/completed"
            component={TodoList}
          />
          <Navigation />
        </Router>
      </div>
    );
}

const mapDispatchToProps = {
  addTodo: todosOperations.addTodo
};

const mapStateToProps = (state) => ({
  todos: todosSelectors.getTodos(state),
  isLoading: todosSelectors.getLoadingStatus(state),
});

const enhancer = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withState("value", "handleInputChange", ""),
  withHandlers({
    handleAddTodo: props => (key) => {
      if (key === 'Enter') {
      const todo = {
        id: uuid(),
        text: props.value,
        completed: false
      };
      console.log(props, props.addTodo)
      props.addTodo(todo);

      props.handleInputChange("");
    }
    },
  })
);

export default enhancer(App);
