import React from "react";
import ReactDom from "react-dom";

function AppendTo(element) {
  if (typeof element === "string") {
    element = document.querySelector(element);
  }

  if (element && !(element instanceof HTMLElement)) {
    throw `{element} is Not a HTML Node`;
  }

  if (!element) {
    element = document.body;
  }

  return function(Component) {
    return class extends React.Component {
      render() {
        console.log(element);
        return ReactDom.createPortal(<Component {...this.props} />, element);
      }
    };
  };
}

export default AppendTo;
