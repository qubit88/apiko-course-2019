function createElement(el, props = {}, children = []) {
  let wrapperEl = document.createElement(el);

  if (wrapperEl instanceof HTMLUnknownElement) {
    throw "First argument is not an HTML element!";
  }

  if (typeof props !== "object") {
    throw "Second arument is not an object!";
  }

  if (typeof children !== "string" && !Array.isArray(children)) {
    throw "Third arument is not an array or string!";
  }

  for (let prop in props) {
    if (!(prop in wrapperEl)) {
      throw "Not a HTMLElement property";
    }
  }

  children = typeof children === "string" ? [children] : children;

  iterateOverProps(props);

  if (children.length > 0) {
    children.forEach(child => {
      child =
        typeof child === "string" ? document.createTextNode(child) : child;
      wrapperEl.appendChild(child);
    });
  }

  function iterateOverProps(props) {
    for (let prop in props) {
      if (typeof props[prop] === "object") {
        for (let innerProp in props[prop]) {
          wrapperEl[prop][innerProp] = props[prop][innerProp];
        }
      } else {
        wrapperEl[prop] = props[prop];
      }
    }
  }
  return wrapperEl;
}

function render(component, el) {
  el.appendChild(component);
}

const React = {
  createElement,
  render
};

const app = React.createElement("div", { style: { backgroundColor: "red" } }, [
  React.createElement("span", undefined, "Hello world"),
  React.createElement("br"),
  "This is just a text node",
  React.createElement("div", {
    textContent: "Text content",
    style: { backgroundColor: "green" }
  })
]);

React.render(app, document.getElementById("root"));
