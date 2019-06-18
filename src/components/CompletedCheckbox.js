import React from "react";
import {todosOperations} from '../modules/todos';
import { compose, withHandlers } from "recompose";
import { connect } from "react-redux";

function CompletedCheckbox({ checked, id, handleCheckboxChange }) {
  return (
    <input
      type="checkbox"
      name="completed"
      checked={checked}
      onChange={e => handleCheckboxChange(id,e.target.checked)}
    />
  );
}

const mapDispatchToProps = {
  updateTodo: todosOperations.updateTodo
};

const enhancer = compose(
  connect(
    undefined,
    mapDispatchToProps
  ),
  withHandlers({
    handleCheckboxChange: props => (id,checked) => {
      const body = {
        completed: checked
      };
      props.updateTodo(id, body);
    },
  })
);



export default enhancer(CompletedCheckbox);
