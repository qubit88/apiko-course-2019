import * as actions from "./todosActions";
import Api from "../../api/Api";

export function addTodo(todo) {
  return async function addTodoThunk(dispatch, getState) {
    try {
      dispatch(actions.addTodo.start());

      const res = await Api.add(todo);

      dispatch(actions.addTodo.success(res));
    } catch (err) {
      dispatch(actions.addTodo.error());
    }
  };
}

export { actions };
