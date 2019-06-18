import { createAsyncActions } from "@letapp/redux-actions";

export const addTodo = createAsyncActions("todos/ADD_TODO");

export const updateTodo = createAsyncActions("todos/UPDATE_TODO");

export const deleteTodo = createAsyncActions("todos/DELETE_TODO");
