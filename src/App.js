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

function App ({ handleCheckboxChange, handleInputChange, handleAddTodo, value, todos, isLoading }) {
  // constructor() {
  //   super({});
    // this.state = {
    //   todos: [{ id: 1, text: "Todo first", completed: true }]
    //   // newTodo: ""
    // };
    // this.onInputChange = this.onInputChange.bind(this);
    // this.onNewTodoInputChange = this.onNewTodoInputChange.bind(this);
    // this.onKeyDown = this.onKeyDown.bind(this);
  // }

  onCheckboxChange(id) {
    let changedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );

    this.setState({
      todos: changedTodos
    });
  }

  // onNewTodoInputChange({ target: { value } }) {
  //   this.setState({ newTodo: value });
  // }

  // onKeyDown({ key }) {
  //   if (key === "Enter") {
  //     const id = new Date().getTime();
  //     const text = this.state.newTodo;

  //     this.setState({
  //       todos: [...this.state.todos, { id, text, completed: false }],
  //       newTodo: ""
  //     });
  //   }
  // }
    const completedTodos = todos.filter(todo => todo.completed);
    const newTodos = todos.filter(todo => !todo.completed);

    return (
      <div className="App">
        <Input
          value={value}
          onChange={evt => handleInputChange(evt.target.value)}
          onKeyDown={handleAddTodo}
        />
        {isLoading ? 'Loading...' : null}
        <Router>
          <Route
            exact
            path="/"
            render={() => (
              <TodoList
                todos={todos}
                onInputChange={handleCheckboxChange}
              />
            )}
          />
          <Route
            path="/new"
            render={() => (
              <TodoList todos={newTodos} onInputChange={handleCheckboxChange} />
            )}
          />
          <Route
            path="/completed"
            render={() => (
              <TodoList
                todos={completedTodos}
                onInputChange={handleCheckboxChange}
              />
            )}
          />
          <Navigation />
        </Router>
      </div>
    );
}

const mapDispatchToProps = {
  addtodo: todosOperations.addTodo
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
    handleAddTodo: props => () => {
      const todo = {
        id: uuid(),
        text: props.value,
        completed: false
      };
      props.addTodo(todo);

      props.handleInputChange("");
    },
    handleChangeTodo: props => (id) => {
      let changedTodos = props.todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
  
      // props.addTodo(changedTodos);
    }
  })
);

export default enhancer(App);
