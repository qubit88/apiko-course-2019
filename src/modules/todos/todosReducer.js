import { handleActions } from "@letapp/redux-actions";
import * as actions from "./todosActions";

const initialState = {
  todos: []
};

const todosReducer = handleActions(
  {
    [actions.addTodo]: (state, action) => ({
      todos: state.todos.concat(action.payload)
    })
  },
  initialState
);

export default todosReducer;
