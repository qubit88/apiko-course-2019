import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TodoList from "./components/TodoList";

class App extends React.Component {
  constructor() {
    super();
    this.state = { todos: [{ id: 1, text: "Todo first", completed: true }] };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(id) {
    let changedTodos = this.state.todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );

    this.setState({
      todos: changedTodos
    });
  }
  render() {
    const completedTodos = this.state.todos.filter(todo => todo.completed);
    const newTodos = this.state.todos.filter(todo => !todo.completed);

    return (
      <div className="App">
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
          <div>
            <Link to="/">All</Link>
            <Link to="/new">New</Link>
            <Link to="/completed">completed</Link>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
