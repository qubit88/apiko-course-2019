import React from "react";
import "./App.css";
import AppendTo from "./components/AppendTo";
import Modal from "./components/Modal";

function App() {
  // let newDiv = document.createElement("div");
  // newDiv.className = "modal";
  // document.body.appendChild(newDiv);
  const EnhancedModal = AppendTo("div.modal")(Modal);
  return (
    <div className="App">
      <EnhancedModal text="I am a modal in React Portal" />
    </div>
  );
}

export default App;
