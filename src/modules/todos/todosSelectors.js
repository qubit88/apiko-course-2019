import { createSelector } from "reselect";

const todos = state => state.todos.todos;
const isLoading = state => state.todos.isLoading;

export const getTodos = createSelector(
  (state, filter) => todos,
  state => state
);

export const getLoadingStatus = createSelector(
  isLoading,
  state => state
);
