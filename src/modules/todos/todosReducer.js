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
    })
  },
  initialState
);

export default todosReducer;
