function createElement(el, props = {}, children = []) {
  let wrapperEl = document.createElement(el);
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
