import { createSelector } from "reselect";

const todos = (state, filter) => {
  switch(filter) {
    case 'new':
      return state.todos.todos.filter(todo => !todo.completed);
    case 'completed':
      return state.todos.todos.filter(todo => todo.completed);
    default:
      return state.todos.todos;
  }
};
const isLoading = state => state.todos.isLoading;

export const getTodos = createSelector(
  todos,
  items => items
);

export const getLoadingStatus = createSelector(
  isLoading,
  state => state
);
