import { handleActions } from "@letapp/redux-actions";
import * as actions from "./todosActions";

const initialState = {
  todos: [],
  isLoading: false,
  isError: false
};

const todosReducer = handleActions(
  {
    [actions.addTodo.start]: (state, action) => ({
      ...state,
      isLoading: true,
      isError: false
    }),
    [actions.addTodo.success]: (state, action) => ({
      ...state,
      isLoading: false,
      todos: state.todos.concat(action.payload)
    }),
    [actions.addTodo.error]: (state, action) => ({
      ...state,
      isLoading: false,
      isError: true
    }),
    [actions.updateTodo.start]: (state, action) => ({
      ...state,
      isLoading: true,
      isError: false
    }),
    [actions.updateTodo.success]: (state, {payload}) => ({
      ...state,
      isLoading: false,
      todos: state.todos.map(todo =>
        todo.id === payload.id ? payload : todo
      )
    }),
    [actions.updateTodo.error]: (state, action) => ({
      ...state,
      isLoading: false,
      isError: true
    }),
    [actions.deleteTodo.start]: (state, action) => ({
      ...state,
      isLoading: true,
      isError: false
    }),
    [actions.deleteTodo.success]: (state, {payload: {success, id}}) => ({
      ...state,
      isLoading: false,
      todos: success ? state.todos.filter(todo => todo.id !== id) : state.todos,
      isError: !success
    }),
    [actions.deleteTodo.error]: (state, action) => ({
      ...state,
      isLoading: false,
      isError: true
    })
  },
  initialState
);

export default todosReducer;
