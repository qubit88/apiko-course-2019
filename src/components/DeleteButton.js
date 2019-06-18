import React from "react";
import {todosOperations} from '../modules/todos';
import { compose, withHandlers } from "recompose";
import { connect } from "react-redux";

function DeleteButton({id, handleClick}) {
    return(<button type="button" onClick={handleClick}>delete</button>);
}

const mapDispatchToProps = {
    deleteTodo: todosOperations.deleteTodo
  };
  
  const enhancer = compose(
    connect(
      undefined,
      mapDispatchToProps
    ),
    withHandlers({
      handleClick: props => () => {

        props.deleteTodo(props.id);
      },
    })
  );

export default enhancer(DeleteButton);