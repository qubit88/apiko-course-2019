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

export function updateTodo(id, body) {
  return async function updateTodoThunk(dispatch, getState) {
    try {
      dispatch(actions.updateTodo.start());

      const res = await Api.update(id, body);

      dispatch(actions.updateTodo.success(res));
    }

    catch(err) {
      dispatch(actions.updateTodo.error());
    }
  }
}

export function deleteTodo(id) {
  return async function updateTodoThunk(dispatch, getState) {
    try {
      dispatch(actions.deleteTodo.start());

      const {success} = await Api.remove(id);

      dispatch(actions.deleteTodo.success({success,id}));
    }

    catch(err) {
      dispatch(actions.deleteTodo.error());
    }
  }
}

export { actions };
