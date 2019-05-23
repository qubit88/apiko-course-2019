import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TodoList from "./components/TodoList";
import Input from "./components/Input";
import Navigation from "./components/Navigation";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [{ id: 1, text: "Todo first", completed: true }],
      newTodo: ""
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onNewTodoInputChange = this.onNewTodoInputChange.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  onInputChange(id) {
    let changedTodos = this.state.todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );

    this.setState({
      todos: changedTodos
    });
  }

  onNewTodoInputChange({ target: { value } }) {
    this.setState({ newTodo: value });
  }

  onKeyDown({ key }) {
    if (key === "Enter") {
      const id = new Date().getTime();
      const text = this.state.newTodo;

      this.setState({
        todos: [...this.state.todos, { id, text, completed: false }],
        newTodo: ""
      });
    }
  }
  render() {
    const completedTodos = this.state.todos.filter(todo => todo.completed);
    const newTodos = this.state.todos.filter(todo => !todo.completed);

    return (
      <div className="App">
        <Input
          value={this.state.newTodo}
          onChange={this.onNewTodoInputChange}
          onKeyDown={this.onKeyDown}
        />
        <Router>
          <Route
            exact
            path="/"
            render={() => (
              <TodoList
                todos={this.state.todos}
                onInputChange={this.onInputChange}
              />
            )}
          />
          <Route
            path="/new"
            render={() => (
              <TodoList todos={newTodos} onInputChange={this.onInputChange} />
            )}
          />
          <Route
            path="/completed"
            render={() => (
              <TodoList
                todos={completedTodos}
                onInputChange={this.onInputChange}
              />
            )}
          />
          <Navigation />
        </Router>
      </div>
    );
  }
}

export default App;
