// import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Message } from "./components/Message/Message";

const name = "Gleb";
const world = "Hello World!";
function App() {
  const foo = () => {
    alert("Hello");
  };
  return (
    <div className="App">
      <Message name={world} number={120 + 130} doSmth={foo} bold={true} />
      <Message name={name} number={120 + 130} doSmth={foo} />
    </div>
  );
}

export default App;
